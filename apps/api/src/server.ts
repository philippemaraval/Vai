import cors from 'cors';
import 'dotenv/config';
import express from 'express';
import helmet from 'helmet';
import { z } from 'zod';
import { supabaseAdmin } from './supabaseAdmin.js';

const app = express();
const port = Number(process.env.PORT ?? 4000);
const allowedOrigins = (process.env.CORS_ORIGINS ?? 'http://localhost:5173')
  .split(',')
  .map((origin) => origin.trim())
  .filter(Boolean);

app.use(helmet());
app.use(express.json({ limit: '1mb' }));
app.use(
  cors({
    origin(origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
        return;
      }
      callback(new Error(`Origin ${origin} is not allowed by CORS`));
    },
    credentials: true,
    methods: ['GET', 'POST', 'PATCH', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Authorization', 'Content-Type']
  })
);

const submissionSchema = z.object({
  name: z.string().min(2),
  instagram_handle: z.string().min(2).regex(/^[a-zA-Z0-9._]+$/),
  category: z.enum(['Restaurant', 'Bar', 'Tiers-lieu', 'Cafe', 'Commerce alimentaire']).default('Restaurant'),
  address: z.string().min(4).optional(),
  latitude: z.number().min(43.15).max(43.45),
  longitude: z.number().min(5.15).max(5.65),
  criteria: z.array(z.string()).min(5)
});

app.get('/health', (_request, response) => {
  response.json({ ok: true, service: 'vai-api' });
});

app.get('/places', async (_request, response, next) => {
  try {
    const { data, error } = await supabaseAdmin
      .from('places_public')
      .select('*')
      .eq('is_verified', true)
      .order('name');

    if (error) throw error;
    response.json({ places: data });
  } catch (error) {
    next(error);
  }
});

app.post('/places/submissions', async (request, response, next) => {
  try {
    const input = submissionSchema.parse(request.body);
    const authHeader = request.header('Authorization');
    const token = authHeader?.replace(/^Bearer\s+/i, '');

    if (!token) {
      response.status(401).json({ error: 'Missing bearer token' });
      return;
    }

    const { data: userData, error: userError } = await supabaseAdmin.auth.getUser(token);
    if (userError || !userData.user) {
      response.status(401).json({ error: 'Invalid session' });
      return;
    }

    const { data: place, error: placeError } = await supabaseAdmin
      .from('places')
      .insert({
        name: input.name,
        instagram_handle: input.instagram_handle,
        category: input.category,
        address: input.address,
        geom: `POINT(${input.longitude} ${input.latitude})`,
        is_verified: false,
        created_by: userData.user.id
      })
      .select('id')
      .single();

    if (placeError) throw placeError;

    const criteriaPayload = {
      place_id: place.id,
      has_terrace: input.criteria.includes('has_terrace'),
      allows_cb_no_minimum: input.criteria.includes('allows_cb_no_minimum'),
      broadcasts_om: input.criteria.includes('broadcasts_om'),
      has_wifi: input.criteria.includes('has_wifi'),
      late_opening: input.criteria.includes('late_opening'),
      good_for_groups: input.criteria.includes('good_for_groups'),
      quiet_spot: input.criteria.includes('quiet_spot'),
      laptop_friendly: input.criteria.includes('laptop_friendly'),
      vegetarian_options: input.criteria.includes('vegetarian_options'),
      wheelchair_accessible: input.criteria.includes('wheelchair_accessible'),
      takes_reservations: input.criteria.includes('takes_reservations'),
      kid_friendly: input.criteria.includes('kid_friendly'),
      covered_outdoor: input.criteria.includes('covered_outdoor'),
      live_music_or_dj: input.criteria.includes('live_music_or_dj'),
      sea_view: input.criteria.includes('sea_view'),
      dog_friendly: input.criteria.includes('dog_friendly')
    };

    const { error: criteriaError } = await supabaseAdmin.from('criteria').insert(criteriaPayload);
    if (criteriaError) throw criteriaError;

    response.status(201).json({ id: place.id, is_verified: false });
  } catch (error) {
    next(error);
  }
});

app.patch('/admin/places/:id/accept', async (request, response, next) => {
  try {
    const { error } = await supabaseAdmin
      .from('places')
      .update({ is_verified: true })
      .eq('id', request.params.id);

    if (error) throw error;
    response.json({ ok: true });
  } catch (error) {
    next(error);
  }
});

app.delete('/admin/places/:id/refuse', async (request, response, next) => {
  try {
    const { error } = await supabaseAdmin.from('places').delete().eq('id', request.params.id);
    if (error) throw error;
    response.status(204).send();
  } catch (error) {
    next(error);
  }
});

app.use((error: unknown, _request: express.Request, response: express.Response, _next: express.NextFunction) => {
  if (error instanceof z.ZodError) {
    response.status(400).json({ error: 'Invalid payload', issues: error.issues });
    return;
  }

  const message = error instanceof Error ? error.message : 'Unexpected error';
  response.status(500).json({ error: message });
});

app.listen(port, () => {
  console.log(`Vai API listening on ${port}`);
});
