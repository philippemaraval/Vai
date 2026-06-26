import { emptyCriteria, type CriteriaKey } from './criteria';
import type { Neighborhood, Place } from './types';

type PlaceSeed = Omit<Place, 'criteria'> & {
  criteria: CriteriaKey[];
};

function criteria(keys: CriteriaKey[]): Place['criteria'] {
  return keys.reduce<Place['criteria']>(
    (selected, key) => ({
      ...selected,
      [key]: true
    }),
    { ...emptyCriteria }
  );
}

function makePlace(seed: PlaceSeed): Place {
  return {
    ...seed,
    criteria: criteria(seed.criteria)
  };
}

export const demoPlaces: Place[] = [
  makePlace({
    id: "osm-node-7359870395",
    name: "1000 Ans de Saveurs",
    latitude: 43.294641,
    longitude: 5.387104,
    neighborhood: "Cours Julien",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-9510859266",
    name: "1001 Herbes",
    latitude: 43.284651,
    longitude: 5.380584,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-8475740471",
    name: "101",
    latitude: 43.291658,
    longitude: 5.380603,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Cafe",
    criteria: ["vegetarian_options"]
  }),
  makePlace({
    id: "osm-node-6604942973",
    name: "120C",
    latitude: 43.289306,
    longitude: 5.397003,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["vegetarian_options"]
  }),
  makePlace({
    id: "osm-node-3539250759",
    name: "13 Xtra",
    latitude: 43.319107,
    longitude: 5.369,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["good_for_groups"]
  }),
  makePlace({
    id: "osm-node-658342572",
    name: "1860 Le palais",
    latitude: 43.295975,
    longitude: 5.374873,
    neighborhood: "Noailles",
    address: "Marseille",
    category: "Cafe",
    criteria: []
  }),
  makePlace({
    id: "osm-node-1749560847",
    name: "20000 Lieues Sous la Biere",
    latitude: 43.216671,
    longitude: 5.346369,
    neighborhood: "Malmousque",
    address: "Marseille",
    category: "Bar",
    criteria: ["has_terrace"]
  }),
  makePlace({
    id: "osm-node-9057078486",
    name: "4 Baguettes",
    latitude: 43.30976,
    longitude: 5.379858,
    neighborhood: "Longchamp",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-11770163522",
    name: "500 Degres Pizza",
    latitude: 43.292949,
    longitude: 5.373252,
    neighborhood: "Noailles",
    address: "30 Honore d'Estienne d'Orves, Marseille",
    category: "Restaurant",
    criteria: ["late_opening"]
  }),
  makePlace({
    id: "osm-node-6784534340",
    name: "72% petanque",
    latitude: 43.300034,
    longitude: 5.368382,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-5601926122",
    name: "7VB",
    latitude: 43.297151,
    longitude: 5.368831,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Cafe",
    criteria: []
  }),
  makePlace({
    id: "osm-node-9494644632",
    name: "9Alim",
    latitude: 43.26265,
    longitude: 5.404783,
    neighborhood: "Littoral Sud",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-13947550078",
    name: "A la Libanaise",
    latitude: 43.308397,
    longitude: 5.370184,
    neighborhood: "Le Panier",
    address: "27 rue Desiree Clary, Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-way-1265847463",
    name: "A Modo Mio",
    latitude: 43.2956,
    longitude: 5.36583,
    neighborhood: "Marseille",
    address: "Quai du Port, Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-12791608801",
    name: "A Moro",
    latitude: 43.293015,
    longitude: 5.378182,
    neighborhood: "Cours Julien",
    address: "3 Rue Venture, Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-8698400661",
    name: "A.C.S Afro market",
    latitude: 43.294871,
    longitude: 5.3815,
    neighborhood: "Cours Julien",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-way-153563933",
    name: "Aaron's",
    instagram_handle: "boulangerieaarons",
    latitude: 43.271057,
    longitude: 5.409227,
    neighborhood: "Marseille",
    address: "349 Boulevard Romain Rolland, Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-12919135103",
    name: "Academie de billard",
    latitude: 43.29529,
    longitude: 5.376496,
    neighborhood: "Noailles",
    address: "26 Rue Pavillon, Marseille",
    category: "Bar",
    criteria: []
  }),
  makePlace({
    id: "osm-node-1933795432",
    name: "Adonis du Liban",
    latitude: 43.294205,
    longitude: 5.384651,
    neighborhood: "Cours Julien",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-13004881201",
    name: "Agam - Agence d'urbanisme de l'agglomeration marseillaise",
    instagram_handle: "agam_urba",
    latitude: 43.303075,
    longitude: 5.375333,
    neighborhood: "Marseille",
    address: "1 Place Jules Guesde, Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-13290795601",
    name: "Agosta - Traiteur asiatique",
    latitude: 43.303899,
    longitude: 5.366655,
    neighborhood: "Le Panier",
    address: "55 Avenue Robert Schuman, Marseille",
    category: "Restaurant",
    criteria: ["good_for_groups"]
  }),
  makePlace({
    id: "osm-node-13188680603",
    name: "Aku",
    latitude: 43.295447,
    longitude: 5.392153,
    neighborhood: "Marseille",
    address: "81 Boulevard Chave, Marseille",
    category: "Commerce alimentaire",
    criteria: ["has_wifi"]
  }),
  makePlace({
    id: "osm-node-3609134042",
    name: "Al dente",
    latitude: 43.289356,
    longitude: 5.379802,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-747035376",
    name: "Al Jennah",
    latitude: 43.294881,
    longitude: 5.382711,
    neighborhood: "Cours Julien",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-1817435934",
    name: "Aldi",
    latitude: 43.305826,
    longitude: 5.37201,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-4000919349",
    name: "Aldi",
    latitude: 43.271242,
    longitude: 5.427706,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-6912384510",
    name: "Aldi",
    latitude: 43.317803,
    longitude: 5.381423,
    neighborhood: "Longchamp",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-way-69648843",
    name: "Aldi",
    latitude: 43.331907,
    longitude: 5.40494,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-way-158102427",
    name: "Aldi",
    latitude: 43.296447,
    longitude: 5.423124,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-10727655408",
    name: "ALDI",
    latitude: 43.278991,
    longitude: 5.396122,
    neighborhood: "Marseille",
    address: "182 Avenue Jules Cantini, Marseille",
    category: "Commerce alimentaire",
    criteria: ["allows_cb_no_minimum"]
  }),
  makePlace({
    id: "osm-way-154923628",
    name: "ALDI",
    latitude: 43.259412,
    longitude: 5.393651,
    neighborhood: "Littoral Sud",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: ["wheelchair_accessible"]
  }),
  makePlace({
    id: "osm-node-2183678422",
    name: "ALDI",
    latitude: 43.281405,
    longitude: 5.443244,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-4029996081",
    name: "ALDI",
    latitude: 43.268222,
    longitude: 5.419764,
    neighborhood: "Littoral Sud",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-way-112853850",
    name: "ALDI",
    latitude: 43.324933,
    longitude: 5.45114,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-way-1023391490",
    name: "ALDI",
    latitude: 43.341699,
    longitude: 5.359467,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-5519908482",
    name: "Alex Food",
    latitude: 43.243147,
    longitude: 5.370283,
    neighborhood: "Littoral Sud",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["good_for_groups"]
  }),
  makePlace({
    id: "osm-node-5294120396",
    name: "Alim de M.B.",
    latitude: 43.328341,
    longitude: 5.37508,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-8164680692",
    name: "Alim Pop's",
    latitude: 43.284844,
    longitude: 5.392244,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-2028106633",
    name: "Alim' D'Stock",
    latitude: 43.293351,
    longitude: 5.385747,
    neighborhood: "Cours Julien",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-7749927823",
    name: "Alimentation",
    latitude: 43.299457,
    longitude: 5.501242,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-3440661144",
    name: "Alimentation - chez Manssoura",
    latitude: 43.307262,
    longitude: 5.4048,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-11389624107",
    name: "Alimentation - DS Market",
    latitude: 43.289449,
    longitude: 5.388464,
    neighborhood: "Marseille",
    address: "69 Rue des Bons Enfants, Marseille",
    category: "Commerce alimentaire",
    criteria: ["late_opening"]
  }),
  makePlace({
    id: "osm-node-7749927810",
    name: "Alimentation 7/7",
    latitude: 43.283369,
    longitude: 5.49957,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-11758155943",
    name: "Alimentation Ariana",
    latitude: 43.299656,
    longitude: 5.398687,
    neighborhood: "Marseille",
    address: "Rue des Orgues, Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-2028106631",
    name: "Alimentation Cours Julien",
    latitude: 43.294692,
    longitude: 5.384747,
    neighborhood: "Cours Julien",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-2303498405",
    name: "Alimentation de nuit",
    latitude: 43.354413,
    longitude: 5.332656,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-3442818098",
    name: "Alimentation de nuit",
    latitude: 43.303218,
    longitude: 5.403895,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-8435169513",
    name: "Alimentation de nuit",
    latitude: 43.311444,
    longitude: 5.403263,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-3721509155",
    name: "Alimentation de Saint-Mitre",
    latitude: 43.34264,
    longitude: 5.420068,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-8595079928",
    name: "Alimentation Des 2 Freres",
    latitude: 43.31687,
    longitude: 5.372708,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-9057192683",
    name: "Alimentation et primeur",
    latitude: 43.308616,
    longitude: 5.381025,
    neighborhood: "Longchamp",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-1290701119",
    name: "Alimentation generale",
    latitude: 43.297209,
    longitude: 5.394257,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: ["late_opening"]
  }),
  makePlace({
    id: "osm-node-1290701103",
    name: "Alimentation generale",
    latitude: 43.296082,
    longitude: 5.395655,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-2806207796",
    name: "Alimentation generale",
    latitude: 43.352534,
    longitude: 5.341179,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-4713564663",
    name: "Alimentation generale",
    latitude: 43.298458,
    longitude: 5.380748,
    neighborhood: "Longchamp",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-1933725530",
    name: "Alimentation Generale",
    latitude: 43.293927,
    longitude: 5.394294,
    neighborhood: "Marseille",
    address: "31 Rue Goudard, Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-5917863731",
    name: "Alimentation Generale",
    latitude: 43.313009,
    longitude: 5.383008,
    neighborhood: "Belle de Mai",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-way-154571436",
    name: "Alimentation Generale",
    latitude: 43.279862,
    longitude: 5.418098,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-3830903281",
    name: "Alimentation Generale",
    latitude: 43.335975,
    longitude: 5.363072,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-4430509082",
    name: "Alimentation Generale",
    latitude: 43.305954,
    longitude: 5.383785,
    neighborhood: "Belle de Mai",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-7829025628",
    name: "Alimentation Generale",
    latitude: 43.298769,
    longitude: 5.398791,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-8601906884",
    name: "Alimentation Generale",
    latitude: 43.299638,
    longitude: 5.440168,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-way-157604845",
    name: "Alimentation Generale",
    latitude: 43.286865,
    longitude: 5.460256,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-5263160593",
    name: "Alimentation Generale Bellevue",
    latitude: 43.314529,
    longitude: 5.379907,
    neighborhood: "Longchamp",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-9651907618",
    name: "Alimentation Generale Boucherie",
    latitude: 43.356849,
    longitude: 5.34229,
    neighborhood: "Le Panier",
    address: "57 Rue Condorcet, Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-7925474638",
    name: "Alimentation Generale Chez Toni",
    latitude: 43.286287,
    longitude: 5.466299,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-3779480015",
    name: "Alimentation generale de La Rose",
    latitude: 43.326729,
    longitude: 5.422958,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-1696440232",
    name: "Alimentation Generale de Nuit",
    latitude: 43.317623,
    longitude: 5.405572,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-627616771",
    name: "Alimentation generale Primeur du Merlan",
    latitude: 43.339043,
    longitude: 5.407841,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-2486752726",
    name: "Alimentation generale Visitation",
    latitude: 43.338118,
    longitude: 5.368255,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-7749927819",
    name: "Alimentation jour & nuit 7/7",
    latitude: 43.298723,
    longitude: 5.390701,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: ["late_opening"]
  }),
  makePlace({
    id: "osm-node-10862740506",
    name: "Alimentation jour et nuit",
    latitude: 43.231689,
    longitude: 5.355313,
    neighborhood: "Malmousque",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-5052121325",
    name: "Alimentation Midnight Express",
    latitude: 43.295423,
    longitude: 5.381565,
    neighborhood: "Cours Julien",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-2511318279",
    name: "Alimentation Noailles",
    latitude: 43.296571,
    longitude: 5.379584,
    neighborhood: "Cours Julien",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-4127983370",
    name: "Alimentation Phoceenne",
    latitude: 43.310085,
    longitude: 5.400802,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-2262572279",
    name: "Alimentation Rapid Market",
    latitude: 43.291554,
    longitude: 5.375394,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-4360642425",
    name: "Alimentation Saint-Loup",
    latitude: 43.28157,
    longitude: 5.428418,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-9439512239",
    name: "Allo Frangin",
    latitude: 43.304127,
    longitude: 5.400699,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: ["late_opening"]
  }),
  makePlace({
    id: "osm-node-1868854110",
    name: "Allo Nem",
    latitude: 43.292461,
    longitude: 5.396813,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["late_opening","vegetarian_options","good_for_groups"]
  }),
  makePlace({
    id: "osm-node-3441154294",
    name: "Allo Pizza",
    latitude: 43.307823,
    longitude: 5.402216,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["late_opening","vegetarian_options","good_for_groups"]
  }),
  makePlace({
    id: "osm-node-6518198423",
    name: "Alma",
    latitude: 43.28553,
    longitude: 5.382255,
    neighborhood: "Marseille",
    address: "8 Rue Louis Maurel, Marseille",
    category: "Restaurant",
    criteria: ["late_opening","good_for_groups"]
  }),
  makePlace({
    id: "osm-way-154633806",
    name: "AM (Alexandre Mazzia)",
    latitude: 43.270038,
    longitude: 5.386264,
    neighborhood: "Marseille",
    address: "9 Rue Francois Rocca, Marseille",
    category: "Restaurant",
    criteria: ["wheelchair_accessible","vegetarian_options","takes_reservations"]
  }),
  makePlace({
    id: "osm-node-1871305275",
    name: "Amandine",
    latitude: 43.295982,
    longitude: 5.39092,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-5228191449",
    name: "Ambassade de Bretagne",
    latitude: 43.305986,
    longitude: 5.366152,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["has_terrace","wheelchair_accessible"]
  }),
  makePlace({
    id: "osm-node-7829025637",
    name: "Ambre",
    latitude: 43.298767,
    longitude: 5.397907,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-9581654682",
    name: "Amed Super Marche",
    latitude: 43.371163,
    longitude: 5.355312,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-7444766011",
    name: "Amed Supermarche",
    latitude: 43.315953,
    longitude: 5.388551,
    neighborhood: "Belle de Mai",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-6158059985",
    name: "Amical bar",
    latitude: 43.319491,
    longitude: 5.374572,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Bar",
    criteria: []
  }),
  makePlace({
    id: "osm-node-7332987258",
    name: "Amista",
    latitude: 43.289944,
    longitude: 5.480611,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-1941645267",
    name: "Amorino",
    latitude: 43.29469,
    longitude: 5.374805,
    neighborhood: "Noailles",
    address: "Marseille",
    category: "Cafe",
    criteria: ["has_terrace","late_opening","wheelchair_accessible","vegetarian_options"]
  }),
  makePlace({
    id: "osm-node-7248694844",
    name: "Anahit",
    latitude: 43.300911,
    longitude: 5.381479,
    neighborhood: "Longchamp",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: ["late_opening"]
  }),
  makePlace({
    id: "osm-node-12140080786",
    name: "Anahit",
    latitude: 43.30072,
    longitude: 5.381946,
    neighborhood: "Longchamp",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-3905235898",
    name: "Ange",
    latitude: 43.289642,
    longitude: 5.427682,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: ["has_terrace"]
  }),
  makePlace({
    id: "osm-node-9999002033",
    name: "Ankara Grill",
    latitude: 43.298229,
    longitude: 5.377092,
    neighborhood: "Marseille",
    address: "40 Cours Belsunce, Marseille",
    category: "Restaurant",
    criteria: ["has_terrace","vegetarian_options","good_for_groups"]
  }),
  makePlace({
    id: "osm-node-6779256997",
    name: "Ankka",
    latitude: 43.309635,
    longitude: 5.367652,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["has_terrace","good_for_groups"]
  }),
  makePlace({
    id: "osm-node-11205017489",
    name: "Antalya Kebab",
    latitude: 43.296531,
    longitude: 5.37862,
    neighborhood: "Cours Julien",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["vegetarian_options","good_for_groups"]
  }),
  makePlace({
    id: "osm-node-11381193770",
    name: "Aperock Cafe",
    latitude: 43.290154,
    longitude: 5.357557,
    neighborhood: "Marseille",
    address: "33 Rue Cesar Aleman, Marseille",
    category: "Cafe",
    criteria: []
  }),
  makePlace({
    id: "osm-node-1800834526",
    name: "Apropos",
    latitude: 43.256477,
    longitude: 5.419287,
    neighborhood: "Littoral Sud",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: ["wheelchair_accessible"]
  }),
  makePlace({
    id: "osm-node-9594252117",
    name: "Apsara",
    latitude: 43.290651,
    longitude: 5.366688,
    neighborhood: "Saint-Victor",
    address: "151 Rue Sainte, Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-8601906911",
    name: "Ararat",
    latitude: 43.299061,
    longitude: 5.436939,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-5930775684",
    name: "Aras",
    latitude: 43.312997,
    longitude: 5.38446,
    neighborhood: "Belle de Mai",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-11386471032",
    name: "Ariana chicken",
    latitude: 43.28688,
    longitude: 5.386748,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["good_for_groups"]
  }),
  makePlace({
    id: "osm-node-9055977512",
    name: "Ariana Grill",
    latitude: 43.30939,
    longitude: 5.378804,
    neighborhood: "Longchamp",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["good_for_groups"]
  }),
  makePlace({
    id: "osm-node-1485011634",
    name: "Arka Supermarche",
    latitude: 43.360189,
    longitude: 5.315301,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-9642905500",
    name: "Arkose",
    latitude: 43.267616,
    longitude: 5.395283,
    neighborhood: "Littoral Sud",
    address: "101 Boulevard Michelet, Marseille",
    category: "Restaurant",
    criteria: ["has_terrace","late_opening","wheelchair_accessible","vegetarian_options","allows_cb_no_minimum"]
  }),
  makePlace({
    id: "osm-node-5920208262",
    name: "Armine",
    latitude: 43.312884,
    longitude: 5.385132,
    neighborhood: "Belle de Mai",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-6034079529",
    name: "Arret Bar",
    latitude: 43.26511,
    longitude: 5.391104,
    neighborhood: "Littoral Sud",
    address: "Marseille",
    category: "Bar",
    criteria: []
  }),
  makePlace({
    id: "osm-node-10957068831",
    name: "Arrosoir",
    latitude: 43.303019,
    longitude: 5.366161,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["has_terrace"]
  }),
  makePlace({
    id: "osm-node-11190548863",
    name: "Arsouille",
    instagram_handle: "cave.arsouille",
    latitude: 43.246673,
    longitude: 5.402354,
    neighborhood: "Littoral Sud",
    address: "74 Rue Emile Zola, Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-6132065657",
    name: "Artisan",
    latitude: 43.319018,
    longitude: 5.374859,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-4016684175",
    name: "Artisan Boulanger",
    latitude: 43.27012,
    longitude: 5.423208,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-9054436505",
    name: "Artisan Boulanger",
    latitude: 43.309934,
    longitude: 5.379626,
    neighborhood: "Longchamp",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-9651907622",
    name: "Artisan Boulanger St Andre",
    latitude: 43.356484,
    longitude: 5.342583,
    neighborhood: "Le Panier",
    address: "5 Boulevard Jean Labro, Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-3274585762",
    name: "Artisan cuisinier",
    latitude: 43.272551,
    longitude: 5.410794,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-11184261019",
    name: "Artisans du Monde",
    latitude: 43.300561,
    longitude: 5.389518,
    neighborhood: "Longchamp",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-5795578740",
    name: "Asabiya",
    latitude: 43.294067,
    longitude: 5.383022,
    neighborhood: "Cours Julien",
    address: "Marseille",
    category: "Bar",
    criteria: ["late_opening","vegetarian_options"]
  }),
  makePlace({
    id: "osm-node-10760868942",
    name: "Ashoka",
    latitude: 43.293063,
    longitude: 5.373751,
    neighborhood: "Noailles",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["vegetarian_options"]
  }),
  makePlace({
    id: "osm-node-747035354",
    name: "Ashourya",
    latitude: 43.295273,
    longitude: 5.382497,
    neighborhood: "Cours Julien",
    address: "26 Cours Julien, Marseille",
    category: "Restaurant",
    criteria: ["late_opening","vegetarian_options"]
  }),
  makePlace({
    id: "osm-node-5141525728",
    name: "Ashourya",
    latitude: 43.301555,
    longitude: 5.387485,
    neighborhood: "Longchamp",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["late_opening","vegetarian_options"]
  }),
  makePlace({
    id: "osm-node-829230465",
    name: "Asile 404",
    latitude: 43.292691,
    longitude: 5.383023,
    neighborhood: "Cours Julien",
    address: "Marseille",
    category: "Bar",
    criteria: ["has_wifi"]
  }),
  makePlace({
    id: "osm-node-7707713584",
    name: "Ate Qu'enfim",
    latitude: 43.286614,
    longitude: 5.390418,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["late_opening"]
  }),
  makePlace({
    id: "osm-node-4558371251",
    name: "Atelier Antik Littoral",
    latitude: 43.353317,
    longitude: 5.336612,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: ["wheelchair_accessible"]
  }),
  makePlace({
    id: "osm-node-6835375504",
    name: "Atelier Juxtapoz - Le Couvent",
    latitude: 43.309693,
    longitude: 5.387495,
    neighborhood: "Belle de Mai",
    address: "Marseille",
    category: "Bar",
    criteria: []
  }),
  makePlace({
    id: "osm-node-2822285609",
    name: "Au Bon Coin",
    latitude: 43.278348,
    longitude: 5.392288,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Bar",
    criteria: []
  }),
  makePlace({
    id: "osm-node-3799422418",
    name: "Au Bon Marche de La Barasse",
    latitude: 43.285648,
    longitude: 5.480903,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-9633396726",
    name: "Au Bord de l'Eau",
    latitude: 43.232242,
    longitude: 5.353946,
    neighborhood: "Malmousque",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-2104666288",
    name: "Au Bout du Quai",
    latitude: 43.295526,
    longitude: 5.36482,
    neighborhood: "Marseille",
    address: "1 Avenue Saint-Jean, Marseille",
    category: "Restaurant",
    criteria: ["late_opening"]
  }),
  makePlace({
    id: "osm-way-112845767",
    name: "Au Chabrot",
    latitude: 43.355499,
    longitude: 5.426127,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-2120175343",
    name: "Au coeur du Panier",
    latitude: 43.299342,
    longitude: 5.368425,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-4882143035",
    name: "Au coin chaud",
    latitude: 43.270457,
    longitude: 5.38767,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["good_for_groups"]
  }),
  makePlace({
    id: "osm-node-9864426917",
    name: "Au contraire patisserie",
    latitude: 43.280613,
    longitude: 5.376511,
    neighborhood: "Marseille",
    address: "30 Rue de Milly, Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-8880341663",
    name: "Au Cur du 17",
    latitude: 43.278637,
    longitude: 5.406592,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-9017432092",
    name: "Au delices de Noha",
    latitude: 43.238812,
    longitude: 5.365385,
    neighborhood: "Littoral Sud",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-9551993517",
    name: "Au Deux Guingois",
    latitude: 43.298471,
    longitude: 5.371382,
    neighborhood: "Le Panier",
    address: "25 Rue du Chevalier Roze, Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-11014301805",
    name: "Au doyen",
    latitude: 43.295795,
    longitude: 5.36665,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-2171924392",
    name: "Au Falafel",
    latitude: 43.292915,
    longitude: 5.376164,
    neighborhood: "Noailles",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-5508235530",
    name: "Au fournil du Rouet",
    latitude: 43.283626,
    longitude: 5.38652,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-11240913196",
    name: "Au Grain Desire",
    latitude: 43.294133,
    longitude: 5.377199,
    neighborhood: "Noailles",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["has_terrace","vegetarian_options"]
  }),
  makePlace({
    id: "osm-node-5795723204",
    name: "Au grain pres",
    latitude: 43.291733,
    longitude: 5.359131,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-7389418888",
    name: "Au jardin",
    latitude: 43.295348,
    longitude: 5.389892,
    neighborhood: "Marseille",
    address: "43 Boulevard Chave, Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-6434134382",
    name: "Au Jardin de la Clue",
    latitude: 43.309577,
    longitude: 5.503385,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["has_terrace"]
  }),
  makePlace({
    id: "osm-node-7316107558",
    name: "Au jardin Des 4 saisons",
    latitude: 43.298375,
    longitude: 5.498504,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-6031903639",
    name: "Au Lampard",
    latitude: 43.297528,
    longitude: 5.365919,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-3540743755",
    name: "Au metro gourmand",
    latitude: 43.320572,
    longitude: 5.371411,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Cafe",
    criteria: []
  }),
  makePlace({
    id: "osm-node-9628807647",
    name: "Au Moulin Dore",
    latitude: 43.274374,
    longitude: 5.384996,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-2027989412",
    name: "Au pagalio",
    latitude: 43.302199,
    longitude: 5.366119,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-5422294838",
    name: "Au Pain d'Autrefois",
    latitude: 43.287481,
    longitude: 5.379403,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-1942083106",
    name: "Au pan que canto",
    latitude: 43.24794,
    longitude: 5.375155,
    neighborhood: "Littoral Sud",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-7415272317",
    name: "Au panier frais",
    latitude: 43.287583,
    longitude: 5.389,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-12207149772",
    name: "Au panier frais",
    latitude: 43.29624,
    longitude: 5.405696,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-4547008427",
    name: "Au Panier Frais",
    latitude: 43.362871,
    longitude: 5.31629,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-3621997602",
    name: "Au peche mignon",
    latitude: 43.287698,
    longitude: 5.35958,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-3780623738",
    name: "Au petit bonheur dore",
    latitude: 43.326937,
    longitude: 5.423364,
    neighborhood: "Marseille",
    address: "94 Avenue de la Rose, Marseille",
    category: "Commerce alimentaire",
    criteria: ["late_opening","allows_cb_no_minimum"]
  }),
  makePlace({
    id: "osm-node-2323100771",
    name: "Au petit marche chez Bibi",
    latitude: 43.367671,
    longitude: 5.346552,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-9565886194",
    name: "Au Petit Palais",
    latitude: 43.269912,
    longitude: 5.400937,
    neighborhood: "Littoral Sud",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["good_for_groups"]
  }),
  makePlace({
    id: "osm-node-5554534010",
    name: "Au Pompon Rouge",
    latitude: 43.285001,
    longitude: 5.374531,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-1797920585",
    name: "Au Royaume de la Chantilly",
    latitude: 43.256336,
    longitude: 5.420291,
    neighborhood: "Littoral Sud",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-622302235",
    name: "Au Vieux Moulin",
    latitude: 43.339245,
    longitude: 5.407806,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-4318179186",
    name: "Auchan",
    latitude: 43.295086,
    longitude: 5.477262,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: ["late_opening"]
  }),
  makePlace({
    id: "osm-node-8195328197",
    name: "Auchan",
    latitude: 43.279294,
    longitude: 5.424976,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-9677599384",
    name: "Auchan",
    latitude: 43.302843,
    longitude: 5.398836,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-way-154606127",
    name: "Auchan Drive",
    latitude: 43.279292,
    longitude: 5.421402,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-1555695972",
    name: "Auchan Supermarche",
    latitude: 43.325377,
    longitude: 5.418449,
    neighborhood: "Marseille",
    address: "Avenue de la Rose, Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-3459515586",
    name: "Auchan Supermarche",
    latitude: 43.279884,
    longitude: 5.384675,
    neighborhood: "Marseille",
    address: "3 Marius Jauffret, Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-4502457788",
    name: "Auchan Supermarche",
    latitude: 43.247267,
    longitude: 5.397605,
    neighborhood: "Littoral Sud",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-5470869805",
    name: "Auchan Supermarche",
    latitude: 43.309121,
    longitude: 5.372407,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-6425854894",
    name: "Auchan Supermarche",
    latitude: 43.309102,
    longitude: 5.378925,
    neighborhood: "Longchamp",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-way-158104626",
    name: "Auchan Supermarche",
    latitude: 43.295465,
    longitude: 5.43191,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-way-158161795",
    name: "Auchan Supermarche",
    latitude: 43.304622,
    longitude: 5.426566,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-3779480016",
    name: "Aux 4 saisons",
    latitude: 43.331375,
    longitude: 5.427811,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-4393393890",
    name: "Aux 5 Avenues",
    latitude: 43.30663,
    longitude: 5.37338,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Cafe",
    criteria: []
  }),
  makePlace({
    id: "osm-node-5041232621",
    name: "Aux Antipodes",
    latitude: 43.292679,
    longitude: 5.375331,
    neighborhood: "Noailles",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-7837399518",
    name: "Aux Delices d'Eden",
    latitude: 43.269335,
    longitude: 5.413452,
    neighborhood: "Littoral Sud",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-9645791520",
    name: "Aux Delices de l'Etoile",
    latitude: 43.359282,
    longitude: 5.332474,
    neighborhood: "Le Panier",
    address: "131 Rue Rabelais, Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-8119723278",
    name: "Aux delices de lune",
    latitude: 43.268475,
    longitude: 5.411715,
    neighborhood: "Littoral Sud",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-2418162621",
    name: "Aux Demoiselles du Mont",
    latitude: 43.291872,
    longitude: 5.383998,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-9028714094",
    name: "Aux Pains des Delices",
    latitude: 43.237225,
    longitude: 5.408988,
    neighborhood: "Littoral Sud",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: ["allows_cb_no_minimum"]
  }),
  makePlace({
    id: "osm-way-1215993791",
    name: "Aux Pieds Tanques",
    latitude: 43.309807,
    longitude: 5.392305,
    neighborhood: "Belle de Mai",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-6417767498",
    name: "Aux Tropiques",
    latitude: 43.301216,
    longitude: 5.521698,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-9929610026",
    name: "Avanti Popolo",
    latitude: 43.292999,
    longitude: 5.383885,
    neighborhood: "Cours Julien",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-4463345813",
    name: "Axxam Aqbayli Maison Kabyle",
    latitude: 43.29963,
    longitude: 5.386338,
    neighborhood: "Longchamp",
    address: "Marseille",
    category: "Bar",
    criteria: []
  }),
  makePlace({
    id: "osm-node-3326605653",
    name: "Aygalades Snack Bar",
    latitude: 43.353677,
    longitude: 5.365821,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Cafe",
    criteria: []
  }),
  makePlace({
    id: "osm-node-11398785169",
    name: "Azulil",
    instagram_handle: "azulil.editions",
    latitude: 43.302373,
    longitude: 5.393851,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-9947077317",
    name: "B-Chef",
    latitude: 43.298434,
    longitude: 5.375496,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["good_for_groups"]
  }),
  makePlace({
    id: "osm-node-9947109317",
    name: "B-Chef",
    latitude: 43.305879,
    longitude: 5.365046,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["vegetarian_options","good_for_groups"]
  }),
  makePlace({
    id: "osm-node-13271854236",
    name: "B. & F. Giner",
    latitude: 43.311812,
    longitude: 5.386674,
    neighborhood: "Belle de Mai",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-13503794882",
    name: "B.A.O",
    latitude: 43.253298,
    longitude: 5.380223,
    neighborhood: "Littoral Sud",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["has_terrace"]
  }),
  makePlace({
    id: "osm-node-9054514182",
    name: "B.B.Q Grill",
    latitude: 43.310434,
    longitude: 5.378706,
    neighborhood: "Longchamp",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["good_for_groups"]
  }),
  makePlace({
    id: "osm-node-11122134441",
    name: "B'n Tea",
    latitude: 43.294801,
    longitude: 5.376882,
    neighborhood: "Noailles",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-7621890271",
    name: "Baan Thai",
    latitude: 43.282104,
    longitude: 5.373788,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["late_opening","vegetarian_options"]
  }),
  makePlace({
    id: "osm-node-8575522963",
    name: "Babbo",
    latitude: 43.300567,
    longitude: 5.477276,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-way-112811942",
    name: "Babel",
    latitude: 43.326841,
    longitude: 5.4228,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-5954418134",
    name: "Babel Community",
    latitude: 43.301428,
    longitude: 5.370166,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Bar",
    criteria: ["has_terrace","late_opening"]
  }),
  makePlace({
    id: "osm-node-8308772854",
    name: "Baccara",
    latitude: 43.288838,
    longitude: 5.4289,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["good_for_groups"]
  }),
  makePlace({
    id: "osm-node-12051498665",
    name: "Bagalette",
    latitude: 43.296963,
    longitude: 5.377175,
    neighborhood: "Noailles",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-13626768797",
    name: "Bagelcorner",
    latitude: 43.306489,
    longitude: 5.364908,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["good_for_groups"]
  }),
  makePlace({
    id: "osm-node-11932631784",
    name: "Bagelstein",
    latitude: 43.297033,
    longitude: 5.373317,
    neighborhood: "Noailles",
    address: "Marseille",
    category: "Cafe",
    criteria: ["has_terrace"]
  }),
  makePlace({
    id: "osm-node-13742354401",
    name: "Bagnat",
    latitude: 43.290032,
    longitude: 5.366608,
    neighborhood: "Saint-Victor",
    address: "124 Boulevard de la Corderie, Marseille",
    category: "Restaurant",
    criteria: ["has_terrace","good_for_groups"]
  }),
  makePlace({
    id: "osm-node-9513605519",
    name: "Baguelerie Marseillaise",
    latitude: 43.285329,
    longitude: 5.377353,
    neighborhood: "Marseille",
    address: "7 Boulevard Vauban, Marseille",
    category: "Restaurant",
    criteria: ["has_terrace","vegetarian_options","good_for_groups"]
  }),
  makePlace({
    id: "osm-node-13446991702",
    name: "Bahn mi24",
    latitude: 43.293657,
    longitude: 5.384331,
    neighborhood: "Cours Julien",
    address: "7 Rue Pastoret, Marseille",
    category: "Restaurant",
    criteria: ["good_for_groups"]
  }),
  makePlace({
    id: "osm-node-5310287572",
    name: "Baie d'Along",
    latitude: 43.351665,
    longitude: 5.43991,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["vegetarian_options"]
  }),
  makePlace({
    id: "osm-node-11932562262",
    name: "Baila Pizza",
    latitude: 43.296669,
    longitude: 5.372974,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["good_for_groups"]
  }),
  makePlace({
    id: "osm-node-11373992622",
    name: "Baladi",
    latitude: 43.26468,
    longitude: 5.373906,
    neighborhood: "Littoral Sud",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["vegetarian_options"]
  }),
  makePlace({
    id: "osm-node-13871092572",
    name: "Bamboche",
    latitude: 43.301918,
    longitude: 5.394323,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-7085991929",
    name: "Bande de sardines",
    instagram_handle: "bandedesardines.fr",
    latitude: 43.299663,
    longitude: 5.368074,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-7833239296",
    name: "Banette",
    latitude: 43.284695,
    longitude: 5.360043,
    neighborhood: "Saint-Victor",
    address: "10 Boulevard Bompard, Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-3822613269",
    name: "Banette",
    latitude: 43.346098,
    longitude: 5.359385,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-6167205666",
    name: "Banette",
    latitude: 43.286378,
    longitude: 5.383336,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-9935843332",
    name: "Banette",
    latitude: 43.285652,
    longitude: 5.404109,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-2368452175",
    name: "Bar 13",
    latitude: 43.299849,
    longitude: 5.380583,
    neighborhood: "Longchamp",
    address: "Marseille",
    category: "Cafe",
    criteria: []
  }),
  makePlace({
    id: "osm-node-11202311661",
    name: "Bar a manger",
    latitude: 43.302089,
    longitude: 5.368211,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["has_terrace","takes_reservations"]
  }),
  makePlace({
    id: "osm-node-10969877907",
    name: "Bar Albert",
    latitude: 43.360648,
    longitude: 5.314747,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Bar",
    criteria: []
  }),
  makePlace({
    id: "osm-node-5122248358",
    name: "Bar associatif",
    latitude: 43.294131,
    longitude: 5.380298,
    neighborhood: "Cours Julien",
    address: "Marseille",
    category: "Bar",
    criteria: ["has_terrace"]
  }),
  makePlace({
    id: "osm-node-12140111363",
    name: "Bar Berty",
    latitude: 43.299157,
    longitude: 5.380225,
    neighborhood: "Longchamp",
    address: "Marseille",
    category: "Bar",
    criteria: []
  }),
  makePlace({
    id: "osm-node-5845970673",
    name: "Bar Bu",
    latitude: 43.292914,
    longitude: 5.373033,
    neighborhood: "Noailles",
    address: "Marseille",
    category: "Bar",
    criteria: []
  }),
  makePlace({
    id: "osm-node-11851312113",
    name: "Bar Cafe Creme",
    latitude: 43.306666,
    longitude: 5.394871,
    neighborhood: "Belle de Mai",
    address: "Marseille",
    category: "Cafe",
    criteria: []
  }),
  makePlace({
    id: "osm-node-2645349787",
    name: "Bar Chic",
    latitude: 43.332393,
    longitude: 5.35898,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Bar",
    criteria: []
  }),
  makePlace({
    id: "osm-node-3314608023",
    name: "Bar Chiche",
    latitude: 43.357208,
    longitude: 5.368918,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Cafe",
    criteria: []
  }),
  makePlace({
    id: "osm-node-11428887770",
    name: "Bar de l'Avenue",
    latitude: 43.290264,
    longitude: 5.359125,
    neighborhood: "Marseille",
    address: "28 Avenue Pasteur, Marseille",
    category: "Cafe",
    criteria: ["has_terrace"]
  }),
  makePlace({
    id: "osm-node-2511318299",
    name: "Bar de l'Est",
    latitude: 43.296526,
    longitude: 5.380447,
    neighborhood: "Cours Julien",
    address: "Marseille",
    category: "Bar",
    criteria: []
  }),
  makePlace({
    id: "osm-node-3780623733",
    name: "Bar de la fontaine",
    latitude: 43.32895,
    longitude: 5.42722,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Bar",
    criteria: []
  }),
  makePlace({
    id: "osm-node-1505681615",
    name: "Bar de la Fontaine",
    latitude: 43.294135,
    longitude: 5.380871,
    neighborhood: "Cours Julien",
    address: "Marseille",
    category: "Bar",
    criteria: []
  }),
  makePlace({
    id: "osm-node-1989576559",
    name: "Bar de la Gaite",
    latitude: 43.226005,
    longitude: 5.403439,
    neighborhood: "Littoral Sud",
    address: "Marseille",
    category: "Bar",
    criteria: []
  }),
  makePlace({
    id: "osm-node-11932591177",
    name: "Bar de la Mairie",
    latitude: 43.296364,
    longitude: 5.370599,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["has_terrace","good_for_groups"]
  }),
  makePlace({
    id: "osm-node-4405959289",
    name: "Bar de la Mairie",
    latitude: 43.299279,
    longitude: 5.38305,
    neighborhood: "Longchamp",
    address: "Marseille",
    category: "Bar",
    criteria: []
  }),
  makePlace({
    id: "osm-node-10559545431",
    name: "Bar de la marine",
    latitude: 43.293015,
    longitude: 5.370756,
    neighborhood: "Marseille",
    address: "12 Quai de Rive-Neuve, Marseille",
    category: "Bar",
    criteria: []
  }),
  makePlace({
    id: "osm-node-7749927864",
    name: "Bar de la Milliere",
    latitude: 43.283389,
    longitude: 5.499311,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Cafe",
    criteria: []
  }),
  makePlace({
    id: "osm-node-2822289332",
    name: "Bar de la Paix",
    latitude: 43.277638,
    longitude: 5.39316,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Bar",
    criteria: []
  }),
  makePlace({
    id: "osm-node-7409995348",
    name: "Bar de la Paix",
    latitude: 43.318185,
    longitude: 5.424085,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Bar",
    criteria: []
  }),
  makePlace({
    id: "osm-node-1797913469",
    name: "Bar de la Place",
    latitude: 43.25882,
    longitude: 5.417011,
    neighborhood: "Littoral Sud",
    address: "Marseille",
    category: "Bar",
    criteria: ["has_terrace"]
  }),
  makePlace({
    id: "osm-node-1822938982",
    name: "Bar de la Place",
    latitude: 43.284278,
    longitude: 5.358275,
    neighborhood: "Malmousque",
    address: "Marseille",
    category: "Bar",
    criteria: []
  }),
  makePlace({
    id: "osm-node-1918948546",
    name: "Bar de la Place",
    latitude: 43.356685,
    longitude: 5.343049,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Cafe",
    criteria: []
  }),
  makePlace({
    id: "osm-node-3204079821",
    name: "Bar de La Pomme",
    latitude: 43.28995,
    longitude: 5.440056,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Bar",
    criteria: []
  }),
  makePlace({
    id: "osm-node-6009175000",
    name: "Bar de la poste",
    latitude: 43.312788,
    longitude: 5.385669,
    neighborhood: "Belle de Mai",
    address: "Marseille",
    category: "Bar",
    criteria: []
  }),
  makePlace({
    id: "osm-node-13871079416",
    name: "Bar de la Poste",
    latitude: 43.299593,
    longitude: 5.384207,
    neighborhood: "Longchamp",
    address: "Marseille",
    category: "Bar",
    criteria: ["has_terrace"]
  }),
  makePlace({
    id: "osm-node-10968685758",
    name: "Bar de la Poste",
    latitude: 43.30979,
    longitude: 5.40076,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Bar",
    criteria: []
  }),
  makePlace({
    id: "osm-node-6627597525",
    name: "Bar de la Poste",
    latitude: 43.308794,
    longitude: 5.438792,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Cafe",
    criteria: []
  }),
  makePlace({
    id: "osm-node-4430509403",
    name: "Bar de la rotonde",
    latitude: 43.306628,
    longitude: 5.383066,
    neighborhood: "Belle de Mai",
    address: "Marseille",
    category: "Bar",
    criteria: []
  }),
  makePlace({
    id: "osm-node-1822939007",
    name: "Bar de la Station d'Emdoume",
    latitude: 43.285067,
    longitude: 5.359845,
    neighborhood: "Malmousque",
    address: "Marseille",
    category: "Bar",
    criteria: []
  }),
  makePlace({
    id: "osm-node-7925474616",
    name: "Bar de la Verrerie",
    latitude: 43.28737,
    longitude: 5.465924,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Bar",
    criteria: []
  }),
  makePlace({
    id: "osm-way-159876973",
    name: "Bar de La Viste",
    latitude: 43.359531,
    longitude: 5.357495,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Bar",
    criteria: []
  }),
  makePlace({
    id: "osm-node-1933789603",
    name: "Bar Degustation",
    latitude: 43.295531,
    longitude: 5.397792,
    neighborhood: "Marseille",
    address: "Boulevard Chave, Marseille",
    category: "Bar",
    criteria: []
  }),
  makePlace({
    id: "osm-node-11830400269",
    name: "Bar des 13 coins",
    latitude: 43.299374,
    longitude: 5.36654,
    neighborhood: "Le Panier",
    address: "45 Rue Sainte-Francoise, Marseille",
    category: "Bar",
    criteria: []
  }),
  makePlace({
    id: "osm-node-4867611140",
    name: "Bar des 4 avenues",
    latitude: 43.321128,
    longitude: 5.374903,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Cafe",
    criteria: []
  }),
  makePlace({
    id: "osm-node-3779480017",
    name: "Bar des 4 chemins",
    latitude: 43.326877,
    longitude: 5.423258,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Bar",
    criteria: []
  }),
  makePlace({
    id: "osm-node-1942085553",
    name: "Bar des Amis",
    latitude: 43.248138,
    longitude: 5.375266,
    neighborhood: "Littoral Sud",
    address: "Marseille",
    category: "Cafe",
    criteria: []
  }),
  makePlace({
    id: "osm-node-2519951583",
    name: "Bar des As",
    latitude: 43.360602,
    longitude: 5.331338,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Cafe",
    criteria: []
  }),
  makePlace({
    id: "osm-node-3992084758",
    name: "Bar des Avenues",
    latitude: 43.285702,
    longitude: 5.442453,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Cafe",
    criteria: []
  }),
  makePlace({
    id: "osm-node-3823091140",
    name: "Bar des Bons Vivants",
    latitude: 43.342437,
    longitude: 5.359551,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Bar",
    criteria: []
  }),
  makePlace({
    id: "osm-node-2368452189",
    name: "Bar des Cinq Parties du Monde",
    latitude: 43.299001,
    longitude: 5.376089,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Cafe",
    criteria: ["has_terrace","wheelchair_accessible"]
  }),
  makePlace({
    id: "osm-node-10683668371",
    name: "Bar des Colonnes",
    latitude: 43.319051,
    longitude: 5.407993,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Bar",
    criteria: []
  }),
  makePlace({
    id: "osm-node-1038629965",
    name: "Bar des Maraichers",
    latitude: 43.295388,
    longitude: 5.385643,
    neighborhood: "Cours Julien",
    address: "Marseille",
    category: "Bar",
    criteria: []
  }),
  makePlace({
    id: "osm-node-7923121020",
    name: "Bar des peupliers",
    latitude: 43.267632,
    longitude: 5.412965,
    neighborhood: "Littoral Sud",
    address: "Marseille",
    category: "Bar",
    criteria: []
  }),
  makePlace({
    id: "osm-node-1921634133",
    name: "Bar des Platanes",
    latitude: 43.322529,
    longitude: 5.412482,
    neighborhood: "Marseille",
    address: "Boulevard Bouge, Marseille",
    category: "Bar",
    criteria: []
  }),
  makePlace({
    id: "osm-node-4547008434",
    name: "Bar des sports",
    latitude: 43.363062,
    longitude: 5.314117,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Bar",
    criteria: []
  }),
  makePlace({
    id: "osm-node-6912384579",
    name: "Bar des Sports",
    latitude: 43.319792,
    longitude: 5.382548,
    neighborhood: "Belle de Mai",
    address: "Marseille",
    category: "Bar",
    criteria: []
  }),
  makePlace({
    id: "osm-node-5385611343",
    name: "Bar Dieude",
    latitude: 43.292138,
    longitude: 5.380511,
    neighborhood: "Cours Julien",
    address: "Marseille",
    category: "Cafe",
    criteria: []
  }),
  makePlace({
    id: "osm-node-7925474601",
    name: "Bar du Centre",
    latitude: 43.287494,
    longitude: 5.46499,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Bar",
    criteria: []
  }),
  makePlace({
    id: "osm-node-6542584236",
    name: "Bar du Chene",
    latitude: 43.308607,
    longitude: 5.436702,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Bar",
    criteria: ["has_terrace"]
  }),
  makePlace({
    id: "osm-node-3539250757",
    name: "Bar du Depot",
    latitude: 43.318978,
    longitude: 5.368879,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Bar",
    criteria: []
  }),
  makePlace({
    id: "osm-node-1638996526",
    name: "Bar du Dome",
    latitude: 43.316852,
    longitude: 5.404851,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Bar",
    criteria: []
  }),
  makePlace({
    id: "osm-node-2375838290",
    name: "Bar du Marche",
    latitude: 43.292062,
    longitude: 5.384434,
    neighborhood: "Cours Julien",
    address: "Marseille",
    category: "Cafe",
    criteria: ["late_opening"]
  }),
  makePlace({
    id: "osm-node-8341407938",
    name: "Bar du Mistral",
    latitude: 43.309292,
    longitude: 5.389013,
    neighborhood: "Belle de Mai",
    address: "Place du Mistral, Marseille",
    category: "Bar",
    criteria: []
  }),
  makePlace({
    id: "osm-node-11228740092",
    name: "Bar du Musee",
    latitude: 43.297211,
    longitude: 5.381301,
    neighborhood: "Cours Julien",
    address: "Marseille",
    category: "Bar",
    criteria: ["has_terrace"]
  }),
  makePlace({
    id: "osm-node-2115018447",
    name: "Bar du peuple",
    latitude: 43.296102,
    longitude: 5.381254,
    neighborhood: "Cours Julien",
    address: "Marseille",
    category: "Bar",
    criteria: ["has_terrace","has_wifi","late_opening","wheelchair_accessible"]
  }),
  makePlace({
    id: "osm-node-4227051696",
    name: "Bar du Redon",
    latitude: 43.24713,
    longitude: 5.424255,
    neighborhood: "Littoral Sud",
    address: "Marseille",
    category: "Bar",
    criteria: []
  }),
  makePlace({
    id: "osm-way-69631261",
    name: "Bar du Regali",
    latitude: 43.360317,
    longitude: 5.328574,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Cafe",
    criteria: ["has_terrace","has_wifi","laptop_friendly"]
  }),
  makePlace({
    id: "osm-node-9651907619",
    name: "Bar du Sabot PMU",
    latitude: 43.356821,
    longitude: 5.342365,
    neighborhood: "Le Panier",
    address: "55 Rue Condorcet, Marseille",
    category: "Bar",
    criteria: []
  }),
  makePlace({
    id: "osm-node-9439506585",
    name: "Bar du Soleil",
    latitude: 43.306784,
    longitude: 5.400789,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Cafe",
    criteria: ["has_terrace"]
  }),
  makePlace({
    id: "osm-way-68967242",
    name: "Bar du Telephone",
    latitude: 43.285879,
    longitude: 5.395051,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Cafe",
    criteria: ["has_terrace"]
  }),
  makePlace({
    id: "osm-node-4713564667",
    name: "Bar Dugommier",
    latitude: 43.298306,
    longitude: 5.38076,
    neighborhood: "Longchamp",
    address: "Marseille",
    category: "Bar",
    criteria: []
  }),
  makePlace({
    id: "osm-node-3799422420",
    name: "Bar Electro",
    latitude: 43.285239,
    longitude: 5.48197,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Bar",
    criteria: []
  }),
  makePlace({
    id: "osm-node-9458400658",
    name: "Bar Gastaldi",
    latitude: 43.358322,
    longitude: 5.357743,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Bar",
    criteria: []
  }),
  makePlace({
    id: "osm-node-2653831154",
    name: "Bar Georges",
    latitude: 43.364906,
    longitude: 5.308813,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Bar",
    criteria: []
  }),
  makePlace({
    id: "osm-node-2556039913",
    name: "Bar Ile de Beaute",
    latitude: 43.307157,
    longitude: 5.384056,
    neighborhood: "Belle de Mai",
    address: "Marseille",
    category: "Cafe",
    criteria: []
  }),
  makePlace({
    id: "osm-node-2259970388",
    name: "Bar imperial",
    latitude: 43.304871,
    longitude: 5.367524,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Bar",
    criteria: []
  }),
  makePlace({
    id: "osm-node-6691870794",
    name: "Bar Jannot",
    latitude: 43.323626,
    longitude: 5.382046,
    neighborhood: "Belle de Mai",
    address: "Marseille",
    category: "Bar",
    criteria: ["late_opening"]
  }),
  makePlace({
    id: "osm-node-2259970544",
    name: "Bar Joseph",
    latitude: 43.304899,
    longitude: 5.367606,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Bar",
    criteria: []
  }),
  makePlace({
    id: "osm-node-5936430410",
    name: "Bar L'Aero",
    latitude: 43.313187,
    longitude: 5.385928,
    neighborhood: "Belle de Mai",
    address: "Marseille",
    category: "Bar",
    criteria: []
  }),
  makePlace({
    id: "osm-node-6170637391",
    name: "Bar La Baraka",
    latitude: 43.302841,
    longitude: 5.398307,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Cafe",
    criteria: []
  }),
  makePlace({
    id: "osm-node-3819939250",
    name: "Bar le Berlioz",
    latitude: 43.289757,
    longitude: 5.385306,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-1801763647",
    name: "Bar Le brazza",
    latitude: 43.305815,
    longitude: 5.383957,
    neighborhood: "Belle de Mai",
    address: "Marseille",
    category: "Bar",
    criteria: []
  }),
  makePlace({
    id: "osm-node-2623628805",
    name: "Bar Le Dauphin",
    latitude: 43.347078,
    longitude: 5.358997,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Cafe",
    criteria: []
  }),
  makePlace({
    id: "osm-node-4172951379",
    name: "Bar Le Flint",
    latitude: 43.283342,
    longitude: 5.397082,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Cafe",
    criteria: []
  }),
  makePlace({
    id: "osm-node-9634033729",
    name: "Bar le Mmm",
    latitude: 43.358865,
    longitude: 5.357805,
    neighborhood: "Le Panier",
    address: "110 Avenue de la Viste, Marseille",
    category: "Bar",
    criteria: []
  }),
  makePlace({
    id: "osm-node-2682321635",
    name: "Bar Manolo",
    latitude: 43.299327,
    longitude: 5.368753,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-5930788835",
    name: "Bar Marius Au petit Creux",
    latitude: 43.313255,
    longitude: 5.382265,
    neighborhood: "Belle de Mai",
    address: "Marseille",
    category: "Bar",
    criteria: []
  }),
  makePlace({
    id: "osm-node-3204621456",
    name: "Bar Marseillais",
    latitude: 43.289956,
    longitude: 5.441208,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-9276268900",
    name: "Bar Mignon",
    latitude: 43.266541,
    longitude: 5.402631,
    neighborhood: "Littoral Sud",
    address: "Marseille",
    category: "Bar",
    criteria: []
  }),
  makePlace({
    id: "osm-node-1485011621",
    name: "Bar Moustier",
    latitude: 43.360583,
    longitude: 5.314338,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Bar",
    criteria: []
  }),
  makePlace({
    id: "osm-node-3837547583",
    name: "Bar Nautic",
    latitude: 43.213125,
    longitude: 5.443347,
    neighborhood: "Littoral Sud",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-11482653781",
    name: "Bar O Brasil",
    latitude: 43.279057,
    longitude: 5.392015,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Bar",
    criteria: []
  }),
  makePlace({
    id: "osm-node-8888046307",
    name: "Bar O'Maitre",
    latitude: 43.279241,
    longitude: 5.412125,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Cafe",
    criteria: []
  }),
  makePlace({
    id: "osm-node-2016443124",
    name: "Bar Odeon",
    latitude: 43.299193,
    longitude: 5.384894,
    neighborhood: "Longchamp",
    address: "Marseille",
    category: "Cafe",
    criteria: []
  }),
  makePlace({
    id: "osm-node-3822613271",
    name: "Bar Pierre",
    latitude: 43.347655,
    longitude: 5.359196,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Bar",
    criteria: []
  }),
  makePlace({
    id: "osm-node-3458976621",
    name: "Bar PMU du Centre",
    latitude: 43.360008,
    longitude: 5.330817,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Bar",
    criteria: []
  }),
  makePlace({
    id: "osm-node-3992084757",
    name: "Bar PMU L'Intemporel",
    latitude: 43.285791,
    longitude: 5.44274,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Cafe",
    criteria: []
  }),
  makePlace({
    id: "osm-node-1820486490",
    name: "Bar restaurant de l'autoroute",
    latitude: 43.301566,
    longitude: 5.375922,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-way-154227767",
    name: "Bar Restaurant de La Grotte",
    latitude: 43.212835,
    longitude: 5.354184,
    neighborhood: "Malmousque",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["has_terrace"]
  }),
  makePlace({
    id: "osm-node-4352651688",
    name: "Bar Restaurant des Chutes Lavie",
    latitude: 43.315796,
    longitude: 5.398618,
    neighborhood: "Belle de Mai",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-4605492530",
    name: "Bar Restaurant La Corsoise",
    latitude: 43.30832,
    longitude: 5.370002,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["has_terrace","good_for_groups"]
  }),
  makePlace({
    id: "osm-node-13871025620",
    name: "Bar Snack Familial",
    latitude: 43.299998,
    longitude: 5.383509,
    neighborhood: "Longchamp",
    address: "Marseille",
    category: "Bar",
    criteria: []
  }),
  makePlace({
    id: "osm-node-10017557034",
    name: "Bar Tabac",
    latitude: 43.296078,
    longitude: 5.386857,
    neighborhood: "Cours Julien",
    address: "Marseille",
    category: "Cafe",
    criteria: []
  }),
  makePlace({
    id: "osm-node-12074330095",
    name: "Bar Tabac",
    latitude: 43.314601,
    longitude: 5.370352,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Cafe",
    criteria: []
  }),
  makePlace({
    id: "osm-node-4127983368",
    name: "Bar Tabac \"Des Chartreux\"",
    latitude: 43.310095,
    longitude: 5.40059,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Bar",
    criteria: []
  }),
  makePlace({
    id: "osm-node-5118816768",
    name: "Bar Tabac Chez Rolland",
    latitude: 43.318386,
    longitude: 5.379639,
    neighborhood: "Longchamp",
    address: "Marseille",
    category: "Bar",
    criteria: []
  }),
  makePlace({
    id: "osm-node-2041086081",
    name: "Bar Tabac de la Place",
    latitude: 43.291472,
    longitude: 5.384732,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Cafe",
    criteria: []
  }),
  makePlace({
    id: "osm-node-3821145294",
    name: "Bar Tabac de Saint-Louis",
    latitude: 43.348304,
    longitude: 5.359095,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Bar",
    criteria: []
  }),
  makePlace({
    id: "osm-node-2580526471",
    name: "Bar Tabac de Sainte-Marthe",
    latitude: 43.338299,
    longitude: 5.392306,
    neighborhood: "Belle de Mai",
    address: "Marseille",
    category: "Bar",
    criteria: []
  }),
  makePlace({
    id: "osm-node-4303128891",
    name: "bar tabac des pins",
    latitude: 43.313668,
    longitude: 5.465584,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Bar",
    criteria: []
  }),
  makePlace({
    id: "osm-node-1933718313",
    name: "Bar Tabac du Camas",
    latitude: 43.29546,
    longitude: 5.39679,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Bar",
    criteria: []
  }),
  makePlace({
    id: "osm-node-4169931135",
    name: "Bar Tabac du Pont",
    latitude: 43.281483,
    longitude: 5.404668,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Cafe",
    criteria: []
  }),
  makePlace({
    id: "osm-node-997670271",
    name: "Bar Tabac du Vieux Port",
    latitude: 43.294323,
    longitude: 5.374862,
    neighborhood: "Noailles",
    address: "Marseille",
    category: "Cafe",
    criteria: ["has_terrace"]
  }),
  makePlace({
    id: "osm-node-2368452184",
    name: "Bar Tabac La Francaise",
    latitude: 43.299683,
    longitude: 5.378266,
    neighborhood: "Longchamp",
    address: "Marseille",
    category: "Cafe",
    criteria: []
  }),
  makePlace({
    id: "osm-way-154594754",
    name: "Bar Tabac Le Cyrano",
    latitude: 43.285808,
    longitude: 5.403936,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Bar",
    criteria: []
  }),
  makePlace({
    id: "osm-node-2082465622",
    name: "Bar Tabac PMU de la Croix",
    latitude: 43.304195,
    longitude: 5.414402,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Bar",
    criteria: []
  }),
  makePlace({
    id: "osm-node-1317056327",
    name: "Bar Terminus",
    latitude: 43.291658,
    longitude: 5.358862,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-3502955156",
    name: "Bar Terminus",
    latitude: 43.338522,
    longitude: 5.391682,
    neighborhood: "Belle de Mai",
    address: "Marseille",
    category: "Bar",
    criteria: []
  }),
  makePlace({
    id: "osm-node-6129966104",
    name: "Bar Tranquille",
    latitude: 43.325241,
    longitude: 5.37418,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-11387201952",
    name: "Bar triomphe",
    latitude: 43.301262,
    longitude: 5.37521,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Bar",
    criteria: []
  }),
  makePlace({
    id: "osm-node-1333734719",
    name: "Bar Unic",
    latitude: 43.29292,
    longitude: 5.374871,
    neighborhood: "Noailles",
    address: "Marseille",
    category: "Bar",
    criteria: ["wheelchair_accessible"]
  }),
  makePlace({
    id: "osm-node-13201618522",
    name: "Bar Vertigo",
    latitude: 43.291621,
    longitude: 5.371714,
    neighborhood: "Saint-Victor",
    address: "75 rue Sainte, Marseille",
    category: "Bar",
    criteria: ["late_opening"]
  }),
  makePlace({
    id: "osm-node-2360987806",
    name: "Bar-tabac de la gare",
    latitude: 43.301904,
    longitude: 5.379373,
    neighborhood: "Longchamp",
    address: "Marseille",
    category: "Cafe",
    criteria: []
  }),
  makePlace({
    id: "osm-node-3780623734",
    name: "Bar-tabac La Rose",
    latitude: 43.328426,
    longitude: 5.426002,
    neighborhood: "Marseille",
    address: "Avenue de la Rose, Marseille",
    category: "Bar",
    criteria: []
  }),
  makePlace({
    id: "osm-way-309927654",
    name: "Bar-Tabac Le Jerome",
    latitude: 43.24624,
    longitude: 5.424828,
    neighborhood: "Littoral Sud",
    address: "Marseille",
    category: "Bar",
    criteria: []
  }),
  makePlace({
    id: "osm-node-3606665471",
    name: "Bar-tabac Le Lion",
    latitude: 43.329336,
    longitude: 5.365665,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Bar",
    criteria: []
  }),
  makePlace({
    id: "osm-node-3440710638",
    name: "Bar-Tabac le Trianon",
    latitude: 43.307561,
    longitude: 5.4028,
    neighborhood: "Marseille",
    address: "Boulevard de Roux, Marseille",
    category: "Cafe",
    criteria: []
  }),
  makePlace({
    id: "osm-node-1876122095",
    name: "Bara'so Cafe",
    latitude: 43.292995,
    longitude: 5.392817,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Bar",
    criteria: []
  }),
  makePlace({
    id: "osm-node-8648094531",
    name: "Baraka jeux",
    latitude: 43.29492,
    longitude: 5.383094,
    neighborhood: "Cours Julien",
    address: "Marseille",
    category: "Bar",
    criteria: ["late_opening","wheelchair_accessible","allows_cb_no_minimum"]
  }),
  makePlace({
    id: "osm-node-12679730101",
    name: "Barber Bench",
    instagram_handle: "BARBERR_BENCH",
    latitude: 43.301775,
    longitude: 5.40086,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-2084525126",
    name: "Barbotyne",
    latitude: 43.298193,
    longitude: 5.387689,
    neighborhood: "Longchamp",
    address: "Marseille",
    category: "Cafe",
    criteria: ["takes_reservations"]
  }),
  makePlace({
    id: "osm-node-13514037501",
    name: "Barbotyne",
    instagram_handle: "barbotyne.marseille",
    latitude: 43.289117,
    longitude: 5.37869,
    neighborhood: "Marseille",
    address: "103 Rue Paradis, Marseille",
    category: "Cafe",
    criteria: []
  }),
  makePlace({
    id: "osm-node-6031932802",
    name: "Barjac",
    latitude: 43.297655,
    longitude: 5.365481,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Bar",
    criteria: []
  }),
  makePlace({
    id: "osm-node-11492301669",
    name: "Barlou Burger",
    latitude: 43.298968,
    longitude: 5.401603,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["good_for_groups"]
  }),
  makePlace({
    id: "osm-way-112843211",
    name: "Barrycash",
    latitude: 43.319074,
    longitude: 5.41078,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-11521916962",
    name: "Basilic & Co Marseille (Republique)",
    latitude: 43.303186,
    longitude: 5.368302,
    neighborhood: "Le Panier",
    address: "93 Rue de la Republique, Marseille",
    category: "Restaurant",
    criteria: ["has_terrace","late_opening","wheelchair_accessible","vegetarian_options","takes_reservations","good_for_groups"]
  }),
  makePlace({
    id: "osm-node-3717636775",
    name: "Baskawai",
    latitude: 43.292113,
    longitude: 5.383543,
    neighborhood: "Cours Julien",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["late_opening"]
  }),
  makePlace({
    id: "osm-node-12117352289",
    name: "Bazile",
    latitude: 43.300394,
    longitude: 5.381474,
    neighborhood: "Longchamp",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["has_terrace"]
  }),
  makePlace({
    id: "osm-node-4405959287",
    name: "Bazin",
    latitude: 43.299271,
    longitude: 5.383192,
    neighborhood: "Longchamp",
    address: "Marseille",
    category: "Bar",
    criteria: []
  }),
  makePlace({
    id: "osm-node-1974107069",
    name: "BBC Barbecue",
    latitude: 43.279763,
    longitude: 5.418513,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["good_for_groups"]
  }),
  makePlace({
    id: "osm-node-3502955158",
    name: "BCV Fruits et Legumes",
    latitude: 43.338626,
    longitude: 5.392327,
    neighborhood: "Belle de Mai",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-2376480395",
    name: "Beans Marseille Brunch",
    latitude: 43.292102,
    longitude: 5.384297,
    neighborhood: "Cours Julien",
    address: "13 Place Notre-Dame-du-Mont, Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-6766452801",
    name: "Beau rivage",
    latitude: 43.293063,
    longitude: 5.371003,
    neighborhood: "Noailles",
    address: "Marseille",
    category: "Cafe",
    criteria: ["has_terrace"]
  }),
  makePlace({
    id: "osm-node-11369593634",
    name: "Beau Rivage",
    latitude: 43.285155,
    longitude: 5.351328,
    neighborhood: "Malmousque",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-2011560384",
    name: "Beau-Frere",
    latitude: 43.293932,
    longitude: 5.385846,
    neighborhood: "Cours Julien",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-6627597522",
    name: "Beaumont Pizza",
    latitude: 43.308706,
    longitude: 5.439136,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["good_for_groups"]
  }),
  makePlace({
    id: "osm-node-5139621781",
    name: "Bebelito",
    latitude: 43.248958,
    longitude: 5.417403,
    neighborhood: "Littoral Sud",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-4064793660",
    name: "Bec Pere & Fils",
    latitude: 43.269948,
    longitude: 5.388003,
    neighborhood: "Littoral Sud",
    address: "1 Avenue de Mazargues, Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-12677254322",
    name: "Bel di Brunch",
    latitude: 43.285908,
    longitude: 5.387162,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-11190518109",
    name: "Bella Notte Pizz'",
    latitude: 43.246176,
    longitude: 5.403432,
    neighborhood: "Littoral Sud",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["good_for_groups"]
  }),
  makePlace({
    id: "osm-node-9017482956",
    name: "Bella Pizza",
    latitude: 43.23665,
    longitude: 5.362392,
    neighborhood: "Littoral Sud",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["late_opening"]
  }),
  makePlace({
    id: "osm-node-9929575749",
    name: "Belle Ile en Mer",
    latitude: 43.294364,
    longitude: 5.384534,
    neighborhood: "Cours Julien",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-9268756340",
    name: "Belleville sur Mer",
    latitude: 43.30543,
    longitude: 5.393558,
    neighborhood: "Belle de Mai",
    address: "Marseille",
    category: "Bar",
    criteria: ["late_opening"]
  }),
  makePlace({
    id: "osm-node-5519908488",
    name: "Beluga",
    latitude: 43.243421,
    longitude: 5.370546,
    neighborhood: "Littoral Sud",
    address: "Marseille",
    category: "Cafe",
    criteria: ["late_opening"]
  }),
  makePlace({
    id: "osm-node-9905724618",
    name: "Ben Mouture",
    instagram_handle: "benmouture",
    latitude: 43.290511,
    longitude: 5.368751,
    neighborhood: "Saint-Victor",
    address: "34 Rue du Petit Chantier, Marseille",
    category: "Cafe",
    criteria: ["has_wifi","laptop_friendly"]
  }),
  makePlace({
    id: "osm-node-6723055501",
    name: "Beret Baguette",
    latitude: 43.278296,
    longitude: 5.388481,
    neighborhood: "Marseille",
    address: "167 Avenue du Prado, Marseille",
    category: "Commerce alimentaire",
    criteria: ["has_terrace"]
  }),
  makePlace({
    id: "osm-node-9831796373",
    name: "Berliner - Marseille",
    latitude: 43.293749,
    longitude: 5.373217,
    neighborhood: "Noailles",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["late_opening","good_for_groups"]
  }),
  makePlace({
    id: "osm-node-5340013176",
    name: "Best Pizza",
    latitude: 43.297092,
    longitude: 5.483997,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["late_opening"]
  }),
  makePlace({
    id: "osm-node-11069910809",
    name: "Bharati",
    latitude: 43.254305,
    longitude: 5.375377,
    neighborhood: "Littoral Sud",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["has_terrace","vegetarian_options"]
  }),
  makePlace({
    id: "osm-node-12053786963",
    name: "Bianco",
    latitude: 43.28852,
    longitude: 5.37253,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-5486290294",
    name: "Bien etre et petits plats",
    latitude: 43.28526,
    longitude: 5.381902,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Cafe",
    criteria: ["vegetarian_options"]
  }),
  makePlace({
    id: "osm-node-2120561408",
    name: "Bieres, Paul, Jacques",
    latitude: 43.298183,
    longitude: 5.367452,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Bar",
    criteria: ["late_opening"]
  }),
  makePlace({
    id: "osm-node-1879021232",
    name: "Big Family",
    latitude: 43.297113,
    longitude: 5.390463,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["good_for_groups"]
  }),
  makePlace({
    id: "osm-node-2924809731",
    name: "Big Hallal",
    latitude: 43.325542,
    longitude: 5.424331,
    neighborhood: "Marseille",
    address: "25 Avenue de Frais Valon, Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-9994233437",
    name: "Bigs",
    latitude: 43.304927,
    longitude: 5.398834,
    neighborhood: "Marseille",
    address: "55 Avenue des Chartreux, Marseille",
    category: "Restaurant",
    criteria: ["late_opening","good_for_groups"]
  }),
  makePlace({
    id: "osm-node-6070722872",
    name: "Bio C' Bon",
    latitude: 43.269811,
    longitude: 5.388069,
    neighborhood: "Littoral Sud",
    address: "3 Avenue de Mazargues, Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-2456030128",
    name: "Bio C' Bon",
    latitude: 43.292653,
    longitude: 5.3841,
    neighborhood: "Cours Julien",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-6020161428",
    name: "Bio C' Bon",
    latitude: 43.302804,
    longitude: 5.397891,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-4845822927",
    name: "Bio Saveurs",
    latitude: 43.307945,
    longitude: 5.426234,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-13737071001",
    name: "Bio&Co",
    latitude: 43.264982,
    longitude: 5.392034,
    neighborhood: "Littoral Sud",
    address: "Avenue de Mazargues, Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-6019909639",
    name: "Biocoop",
    latitude: 43.28735,
    longitude: 5.383995,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: ["wheelchair_accessible"]
  }),
  makePlace({
    id: "osm-node-6019951594",
    name: "Biocoop",
    latitude: 43.295885,
    longitude: 5.396229,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: ["wheelchair_accessible"]
  }),
  makePlace({
    id: "osm-way-354391030",
    name: "Biocoop",
    latitude: 43.265426,
    longitude: 5.399684,
    neighborhood: "Littoral Sud",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: ["allows_cb_no_minimum"]
  }),
  makePlace({
    id: "osm-way-501258680",
    name: "Biocoop",
    latitude: 43.301443,
    longitude: 5.506444,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: ["wheelchair_accessible"]
  }),
  makePlace({
    id: "osm-way-70067128",
    name: "Biocoop",
    latitude: 43.288174,
    longitude: 5.364305,
    neighborhood: "Saint-Victor",
    address: "21 Rue Sauveur Tobelem, Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-2822223798",
    name: "Biocoop",
    latitude: 43.278155,
    longitude: 5.392375,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-6031814733",
    name: "Biocoop",
    latitude: 43.254282,
    longitude: 5.383521,
    neighborhood: "Littoral Sud",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-7432750118",
    name: "Biocoop",
    latitude: 43.364439,
    longitude: 5.351345,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-9666127417",
    name: "Biocoop",
    latitude: 43.287303,
    longitude: 5.507841,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-10773469406",
    name: "Biocoop",
    latitude: 43.303199,
    longitude: 5.368208,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-4325221209",
    name: "Biocoop Chateau Gombert",
    latitude: 43.347033,
    longitude: 5.451508,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-8989818603",
    name: "Biohack Salon de the",
    latitude: 43.284846,
    longitude: 5.376806,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Cafe",
    criteria: []
  }),
  makePlace({
    id: "osm-node-10942364114",
    name: "Biotech USA",
    latitude: 43.363874,
    longitude: 5.348661,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-6589753097",
    name: "Bistro du Cours",
    latitude: 43.295141,
    longitude: 5.382968,
    neighborhood: "Cours Julien",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-1019084824",
    name: "Bistro Marseillais",
    latitude: 43.3438,
    longitude: 5.416777,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Bar",
    criteria: []
  }),
  makePlace({
    id: "osm-node-5788227253",
    name: "Bistro Regent Marseille",
    latitude: 43.293303,
    longitude: 5.373381,
    neighborhood: "Noailles",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["late_opening"]
  }),
  makePlace({
    id: "osm-node-5983836878",
    name: "Bistro Venitien",
    latitude: 43.294719,
    longitude: 5.383204,
    neighborhood: "Cours Julien",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["has_terrace"]
  }),
  makePlace({
    id: "osm-node-6446220685",
    name: "Bistrot 13B",
    latitude: 43.29222,
    longitude: 5.375133,
    neighborhood: "Noailles",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-2878130113",
    name: "Bistrot Alexandre",
    latitude: 43.325404,
    longitude: 5.381968,
    neighborhood: "Longchamp",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["has_terrace"]
  }),
  makePlace({
    id: "osm-node-11787347469",
    name: "Bistrot Baya",
    instagram_handle: "bistrot.baya",
    latitude: 43.302194,
    longitude: 5.386877,
    neighborhood: "Longchamp",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-1799965042",
    name: "Bistrot des anges",
    latitude: 43.279631,
    longitude: 5.416828,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Bar",
    criteria: ["has_terrace","has_wifi"]
  }),
  makePlace({
    id: "osm-node-2375892953",
    name: "Bistrot l'Horloge",
    latitude: 43.292782,
    longitude: 5.374534,
    neighborhood: "Noailles",
    address: "11 Cours d'Estienne d'Orves, Marseille",
    category: "Restaurant",
    criteria: ["has_terrace","late_opening","wheelchair_accessible","vegetarian_options","takes_reservations","kid_friendly","allows_cb_no_minimum"]
  }),
  makePlace({
    id: "osm-node-9056070777",
    name: "Bistrot La Douane",
    latitude: 43.308752,
    longitude: 5.377694,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Bar",
    criteria: []
  }),
  makePlace({
    id: "osm-node-6185320685",
    name: "Bistrot O'Prado",
    latitude: 43.279743,
    longitude: 5.386837,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["has_terrace"]
  }),
  makePlace({
    id: "osm-node-3374843142",
    name: "Black & White",
    latitude: 43.281507,
    longitude: 5.381451,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-13105756028",
    name: "Black And White",
    latitude: 43.305889,
    longitude: 5.364871,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["good_for_groups"]
  }),
  makePlace({
    id: "osm-node-12806274976",
    name: "Black Angus",
    latitude: 43.294008,
    longitude: 5.386217,
    neighborhood: "Cours Julien",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["has_terrace","vegetarian_options","good_for_groups"]
  }),
  makePlace({
    id: "osm-node-3369421528",
    name: "Black Angus",
    latitude: 43.301361,
    longitude: 5.477182,
    neighborhood: "Marseille",
    address: "195 Route des Trois Lucs a La Valentine, Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-5122261477",
    name: "Black Bird Coffee",
    latitude: 43.293127,
    longitude: 5.383129,
    neighborhood: "Cours Julien",
    address: "Marseille",
    category: "Cafe",
    criteria: ["has_terrace","has_wifi","laptop_friendly"]
  }),
  makePlace({
    id: "osm-node-5878692908",
    name: "Black Friday",
    latitude: 43.29433,
    longitude: 5.38075,
    neighborhood: "Cours Julien",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-way-481354966",
    name: "Black Stone",
    latitude: 43.265456,
    longitude: 5.398658,
    neighborhood: "Littoral Sud",
    address: "Marseille",
    category: "Bar",
    criteria: ["has_terrace","late_opening"]
  }),
  makePlace({
    id: "osm-node-8072021975",
    name: "Bloomdrops",
    latitude: 43.294789,
    longitude: 5.394192,
    neighborhood: "Marseille",
    address: "2 Rue Briffaut, Marseille",
    category: "Cafe",
    criteria: []
  }),
  makePlace({
    id: "osm-node-12117277229",
    name: "Bo' RESTO",
    latitude: 43.295875,
    longitude: 5.385625,
    neighborhood: "Cours Julien",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-6465446985",
    name: "BoboLivo",
    latitude: 43.296595,
    longitude: 5.366813,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["late_opening"]
  }),
  makePlace({
    id: "osm-node-6779257019",
    name: "Boccascena",
    latitude: 43.310845,
    longitude: 5.367607,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["has_terrace"]
  }),
  makePlace({
    id: "osm-node-12073824914",
    name: "Bodrum city",
    latitude: 43.298295,
    longitude: 5.377065,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["has_terrace","good_for_groups"]
  }),
  makePlace({
    id: "osm-node-6124611786",
    name: "Boeuf chic bon gout",
    latitude: 43.303093,
    longitude: 5.402795,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-way-154227247",
    name: "Boissonnerie",
    latitude: 43.215603,
    longitude: 5.344429,
    neighborhood: "Malmousque",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-13688113701",
    name: "Boissons Soiffe",
    latitude: 43.30012,
    longitude: 5.381726,
    neighborhood: "Longchamp",
    address: "8 Rue Lafayette, Marseille",
    category: "Bar",
    criteria: ["late_opening"]
  }),
  makePlace({
    id: "osm-node-12800774387",
    name: "Bombay Grill",
    latitude: 43.263546,
    longitude: 5.37412,
    neighborhood: "Littoral Sud",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["vegetarian_options"]
  }),
  makePlace({
    id: "osm-node-8736460265",
    name: "Bombay-Hanoi",
    latitude: 43.295,
    longitude: 5.401222,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-4580397396",
    name: "Bonino cafe",
    latitude: 43.25299,
    longitude: 5.422789,
    neighborhood: "Littoral Sud",
    address: "Marseille",
    category: "Cafe",
    criteria: []
  }),
  makePlace({
    id: "osm-node-12692705295",
    name: "Bonito",
    latitude: 43.30594,
    longitude: 5.364483,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["good_for_groups"]
  }),
  makePlace({
    id: "osm-way-68937773",
    name: "Bonjour",
    latitude: 43.316135,
    longitude: 5.382902,
    neighborhood: "Belle de Mai",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-way-153553126",
    name: "Bonjour",
    latitude: 43.271867,
    longitude: 5.401072,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-13919353645",
    name: "Bonne Miette",
    latitude: 43.294705,
    longitude: 5.3756,
    neighborhood: "Noailles",
    address: "10 Place du General de Gaulle, Marseille",
    category: "Commerce alimentaire",
    criteria: ["wheelchair_accessible","allows_cb_no_minimum"]
  }),
  makePlace({
    id: "osm-node-11799845069",
    name: "Boon Mi Food",
    latitude: 43.301962,
    longitude: 5.391065,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["vegetarian_options"]
  }),
  makePlace({
    id: "osm-node-11190564268",
    name: "Boostan",
    latitude: 43.24693,
    longitude: 5.401805,
    neighborhood: "Littoral Sud",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["has_terrace"]
  }),
  makePlace({
    id: "osm-node-11069902007",
    name: "Borely",
    latitude: 43.254363,
    longitude: 5.375539,
    neighborhood: "Littoral Sud",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["has_terrace"]
  }),
  makePlace({
    id: "osm-node-11069907112",
    name: "Borely",
    latitude: 43.254244,
    longitude: 5.375422,
    neighborhood: "Littoral Sud",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["has_terrace"]
  }),
  makePlace({
    id: "osm-node-10086701923",
    name: "Borely Market",
    latitude: 43.253197,
    longitude: 5.380161,
    neighborhood: "Littoral Sud",
    address: "34 Avenue Joseph Vidal, Marseille",
    category: "Commerce alimentaire",
    criteria: ["allows_cb_no_minimum"]
  }),
  makePlace({
    id: "osm-node-12492805841",
    name: "Bosphore",
    latitude: 43.249091,
    longitude: 5.389513,
    neighborhood: "Littoral Sud",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["good_for_groups"]
  }),
  makePlace({
    id: "osm-node-8475740443",
    name: "Boss Bokit",
    latitude: 43.291414,
    longitude: 5.380337,
    neighborhood: "Marseille",
    address: "4 Place de Rome, Marseille",
    category: "Restaurant",
    criteria: ["has_terrace","late_opening","vegetarian_options","good_for_groups"]
  }),
  makePlace({
    id: "osm-node-6301453306",
    name: "Boss Boss",
    latitude: 43.289026,
    longitude: 5.42771,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["has_terrace","good_for_groups"]
  }),
  makePlace({
    id: "osm-node-2038029530",
    name: "Boucan",
    latitude: 43.293327,
    longitude: 5.385346,
    neighborhood: "Cours Julien",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-8763075060",
    name: "Boucher King Halal du Merlan",
    latitude: 43.330956,
    longitude: 5.404661,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-8595086931",
    name: "Boucherie",
    latitude: 43.313148,
    longitude: 5.375477,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-13893490107",
    name: "Boucherie / Charcuterie Les Chartreux",
    latitude: 43.306277,
    longitude: 5.399718,
    neighborhood: "Belle de Mai",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-13965785078",
    name: "Boucherie 13eme",
    latitude: 43.327474,
    longitude: 5.424234,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-6697114729",
    name: "Boucherie Au Bon Coin",
    latitude: 43.304666,
    longitude: 5.372996,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-3822613274",
    name: "Boucherie Azzoug",
    latitude: 43.34819,
    longitude: 5.359112,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-8100383742",
    name: "Boucherie Baille",
    latitude: 43.289989,
    longitude: 5.398312,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-11008033105",
    name: "Boucherie Capel",
    instagram_handle: "myboucherie",
    latitude: 43.285246,
    longitude: 5.38983,
    neighborhood: "Marseille",
    address: "4 Rue d'Iena, Marseille",
    category: "Commerce alimentaire",
    criteria: ["allows_cb_no_minimum"]
  }),
  makePlace({
    id: "osm-node-3370604782",
    name: "Boucherie Centrale",
    latitude: 43.272267,
    longitude: 5.411481,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-5139621771",
    name: "Boucherie charcuterie",
    latitude: 43.248408,
    longitude: 5.417368,
    neighborhood: "Littoral Sud",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-6627597561",
    name: "Boucherie Charcuterie",
    latitude: 43.308214,
    longitude: 5.435978,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-7925474568",
    name: "Boucherie Charcuterie",
    latitude: 43.28758,
    longitude: 5.465306,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-1933753316",
    name: "Boucherie Charcuterie Cremerie",
    latitude: 43.295082,
    longitude: 5.393935,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-way-154605561",
    name: "Boucherie Charcuterie La Capelette",
    latitude: 43.279511,
    longitude: 5.411569,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-1822939009",
    name: "Boucherie Charcuterie Piro",
    latitude: 43.284399,
    longitude: 5.358538,
    neighborhood: "Malmousque",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-3440698728",
    name: "Boucherie Chez J. Marc",
    latitude: 43.307414,
    longitude: 5.403516,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-10080318673",
    name: "Boucherie Chez Marco",
    latitude: 43.32036,
    longitude: 5.432936,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-4352650456",
    name: "Boucherie Chez Martine et Gerard",
    latitude: 43.314649,
    longitude: 5.397361,
    neighborhood: "Belle de Mai",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-7365468289",
    name: "Boucherie de l'Avenir",
    latitude: 43.288167,
    longitude: 5.366803,
    neighborhood: "Saint-Victor",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-9689533786",
    name: "Boucherie de la Comtesse",
    latitude: 43.317526,
    longitude: 5.44759,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-4363134069",
    name: "Boucherie de la Gare",
    latitude: 43.323898,
    longitude: 5.393147,
    neighborhood: "Belle de Mai",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-5518300124",
    name: "Boucherie de la Pointe Rouge",
    latitude: 43.245394,
    longitude: 5.373696,
    neighborhood: "Littoral Sud",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-3931814467",
    name: "Boucherie de La Pomme",
    latitude: 43.289511,
    longitude: 5.438962,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-13826531950",
    name: "Boucherie des 2 freres",
    latitude: 43.314335,
    longitude: 5.369283,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-7203157674",
    name: "Boucherie des Oliviers",
    latitude: 43.328162,
    longitude: 5.405551,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-3721509157",
    name: "Boucherie des Prairies",
    latitude: 43.342454,
    longitude: 5.419883,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-6144385893",
    name: "Boucherie du Canet",
    latitude: 43.326585,
    longitude: 5.374891,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-7881992502",
    name: "Boucherie du Centre",
    latitude: 43.308222,
    longitude: 5.381078,
    neighborhood: "Longchamp",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-13893489405",
    name: "Boucherie Du Centre Hallal Charcute",
    latitude: 43.371774,
    longitude: 5.356174,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-13893489406",
    name: "Boucherie Du Centre Hallal Charcuterie",
    latitude: 43.371774,
    longitude: 5.356174,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-6145440401",
    name: "Boucherie du Chapitre",
    latitude: 43.299951,
    longitude: 5.385904,
    neighborhood: "Longchamp",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-1439859467",
    name: "Boucherie Du Fortin",
    latitude: 43.236572,
    longitude: 5.362255,
    neighborhood: "Littoral Sud",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: ["allows_cb_no_minimum"]
  }),
  makePlace({
    id: "osm-node-7829025638",
    name: "Boucherie du Marche Sebastopol",
    latitude: 43.29888,
    longitude: 5.397905,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-4227920090",
    name: "Boucherie du Merlan",
    latitude: 43.335692,
    longitude: 5.40757,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-8601941438",
    name: "Boucherie du Parc",
    latitude: 43.304516,
    longitude: 5.427014,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-6158057200",
    name: "Boucherie Familiale",
    latitude: 43.319358,
    longitude: 5.374648,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-1673230308",
    name: "Boucherie Fontange",
    latitude: 43.29204,
    longitude: 5.38504,
    neighborhood: "Cours Julien",
    address: "18 Rue Fontange, Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-4922707946",
    name: "Boucherie Gonord",
    latitude: 43.297621,
    longitude: 5.397754,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: ["wheelchair_accessible"]
  }),
  makePlace({
    id: "osm-node-13533829073",
    name: "Boucherie Herve",
    latitude: 43.309814,
    longitude: 5.401405,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: ["wheelchair_accessible"]
  }),
  makePlace({
    id: "osm-node-10077656736",
    name: "Boucherie Jeannot",
    latitude: 43.318958,
    longitude: 5.431323,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-3370637722",
    name: "Boucherie La Sauvagere",
    latitude: 43.273622,
    longitude: 5.414159,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-11469861371",
    name: "Boucherie Le Charolais",
    latitude: 43.241326,
    longitude: 5.376526,
    neighborhood: "Littoral Sud",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-9663406240",
    name: "Boucherie Le Provence",
    latitude: 43.331245,
    longitude: 5.40649,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-12074329739",
    name: "Boucherie les deux freres",
    latitude: 43.314332,
    longitude: 5.369291,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-3905235880",
    name: "Boucherie Lombard",
    latitude: 43.290021,
    longitude: 5.426685,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-2080122391",
    name: "Boucherie Maroux",
    latitude: 43.3041,
    longitude: 5.415919,
    neighborhood: "Marseille",
    address: "45 Montaigne, Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-8231960050",
    name: "Boucherie Moulin",
    latitude: 43.275868,
    longitude: 5.360918,
    neighborhood: "Saint-Victor",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-2511318247",
    name: "Boucherie Noor",
    latitude: 43.296298,
    longitude: 5.379963,
    neighborhood: "Cours Julien",
    address: "10 Place du Marche des Capucins, Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-3383211594",
    name: "Boucherie Notre-Dame",
    latitude: 43.283816,
    longitude: 5.37536,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-3807693952",
    name: "Boucherie Palama",
    latitude: 43.356317,
    longitude: 5.439616,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-6992368378",
    name: "Boucherie Prinderre Michel",
    latitude: 43.311325,
    longitude: 5.395964,
    neighborhood: "Belle de Mai",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: ["allows_cb_no_minimum"]
  }),
  makePlace({
    id: "osm-node-7463171795",
    name: "Boucherie Saint Pierre",
    latitude: 43.292934,
    longitude: 5.409034,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-13893505507",
    name: "Boucherie Sainte Marthe",
    latitude: 43.328432,
    longitude: 5.38751,
    neighborhood: "Belle de Mai",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-1941584872",
    name: "Boucherie Sibour",
    latitude: 43.300945,
    longitude: 5.370566,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-8731323045",
    name: "Boucherie T et P",
    latitude: 43.288694,
    longitude: 5.360336,
    neighborhood: "Saint-Victor",
    address: "73 Avenue de la Corse, Marseille",
    category: "Commerce alimentaire",
    criteria: ["allows_cb_no_minimum"]
  }),
  makePlace({
    id: "osm-node-13893511603",
    name: "Boucherie Viandes & Compagnie",
    latitude: 43.30549,
    longitude: 5.384242,
    neighborhood: "Belle de Mai",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-11224735237",
    name: "Bouillabaisse Turfu",
    latitude: 43.294388,
    longitude: 5.375716,
    neighborhood: "Noailles",
    address: "1 Rue Pytheas, Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-2352033248",
    name: "Bouillant",
    latitude: 43.296994,
    longitude: 5.361091,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-12806314001",
    name: "Boujou Coffee",
    instagram_handle: "boujou.coffee",
    latitude: 43.281104,
    longitude: 5.35164,
    neighborhood: "Malmousque",
    address: "160 Corniche du President John Fitzgerald Kennedy, Marseille",
    category: "Cafe",
    criteria: []
  }),
  makePlace({
    id: "osm-node-7833279029",
    name: "Boul'Ange",
    latitude: 43.268901,
    longitude: 5.419396,
    neighborhood: "Littoral Sud",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-3734075614",
    name: "Boulanger Patissier",
    latitude: 43.367776,
    longitude: 5.364135,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-4302845072",
    name: "boulanger-patissier",
    latitude: 43.250423,
    longitude: 5.403191,
    neighborhood: "Littoral Sud",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-4125834091",
    name: "Boulangerie",
    latitude: 43.340027,
    longitude: 5.386435,
    neighborhood: "Belle de Mai",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-4227084547",
    name: "Boulangerie",
    latitude: 43.24698,
    longitude: 5.424343,
    neighborhood: "Littoral Sud",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-12120246619",
    name: "Boulangerie",
    latitude: 43.301267,
    longitude: 5.383493,
    neighborhood: "Longchamp",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-7081438335",
    name: "Boulangerie Ange",
    latitude: 43.298368,
    longitude: 5.479618,
    neighborhood: "Marseille",
    address: "Avenue des Peintres Roux, Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-5527293285",
    name: "Boulangerie Ange",
    latitude: 43.27911,
    longitude: 5.411693,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-8195325828",
    name: "Boulangerie Ange",
    latitude: 43.278555,
    longitude: 5.424964,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-8657174930",
    name: "Boulangerie Ange",
    latitude: 43.251932,
    longitude: 5.421091,
    neighborhood: "Littoral Sud",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-3266659268",
    name: "Boulangerie Bistrot",
    latitude: 43.283301,
    longitude: 5.401644,
    neighborhood: "Marseille",
    address: "59 Avenue de la Capelette, Marseille",
    category: "Commerce alimentaire",
    criteria: ["has_terrace","wheelchair_accessible","allows_cb_no_minimum"]
  }),
  makePlace({
    id: "osm-node-9585488278",
    name: "Boulangerie Boni",
    latitude: 43.30465,
    longitude: 5.398932,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-9190146297",
    name: "Boulangerie de l'Eveche",
    latitude: 43.298627,
    longitude: 5.366037,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-4363138422",
    name: "Boulangerie de la Gare",
    latitude: 43.32382,
    longitude: 5.393115,
    neighborhood: "Belle de Mai",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-11228737733",
    name: "Boulangerie de Marseille",
    latitude: 43.297647,
    longitude: 5.381723,
    neighborhood: "Cours Julien",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-5556756410",
    name: "Boulangerie de Pastre",
    latitude: 43.239817,
    longitude: 5.366302,
    neighborhood: "Littoral Sud",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-6416533064",
    name: "Boulangerie des Camoins",
    latitude: 43.301604,
    longitude: 5.509393,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-8595107327",
    name: "Boulangerie Ferial",
    latitude: 43.313665,
    longitude: 5.374221,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-2016443147",
    name: "Boulangerie Gambetta",
    latitude: 43.299191,
    longitude: 5.384949,
    neighborhood: "Longchamp",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-5181596451",
    name: "Boulangerie Julie",
    latitude: 43.282264,
    longitude: 5.430351,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-9437395133",
    name: "Boulangerie le fraisier",
    latitude: 43.359184,
    longitude: 5.35782,
    neighborhood: "Le Panier",
    address: "120 Avenue de la Viste, Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-2031102971",
    name: "Boulangerie Montaigne",
    latitude: 43.303941,
    longitude: 5.418142,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-2368312958",
    name: "Boulangerie Patisserie",
    latitude: 43.263133,
    longitude: 5.397493,
    neighborhood: "Littoral Sud",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: ["late_opening"]
  }),
  makePlace({
    id: "osm-node-3440711062",
    name: "Boulangerie Patisserie",
    latitude: 43.307685,
    longitude: 5.402879,
    neighborhood: "Marseille",
    address: "Rue Saint-Bruno, Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-1796884846",
    name: "Boulangerie Patisserie",
    latitude: 43.252805,
    longitude: 5.423311,
    neighborhood: "Littoral Sud",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-3440682251",
    name: "Boulangerie Patisserie",
    latitude: 43.307111,
    longitude: 5.405743,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-3502955157",
    name: "Boulangerie Patisserie",
    latitude: 43.339021,
    longitude: 5.392504,
    neighborhood: "Belle de Mai",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-3948064082",
    name: "Boulangerie Patisserie",
    latitude: 43.296303,
    longitude: 5.458121,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-8960053953",
    name: "Boulangerie Patisserie",
    latitude: 43.362676,
    longitude: 5.320561,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-9233271101",
    name: "Boulangerie Patisserie",
    latitude: 43.281549,
    longitude: 5.383303,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-5566943613",
    name: "Boulangerie Patisserie Alice & Arsen",
    latitude: 43.269777,
    longitude: 5.406231,
    neighborhood: "Littoral Sud",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-2031102967",
    name: "Boulangerie Patisserie Artisanale",
    latitude: 43.305754,
    longitude: 5.383589,
    neighborhood: "Belle de Mai",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-1315196684",
    name: "Boulangerie Patisserie du Pharo",
    latitude: 43.291817,
    longitude: 5.357765,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-1485011637",
    name: "Boulangerie Patisserie Hat's",
    latitude: 43.360533,
    longitude: 5.314529,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: ["allows_cb_no_minimum"]
  }),
  makePlace({
    id: "osm-node-5917853728",
    name: "Boulangerie Patisserie Loubon",
    latitude: 43.312809,
    longitude: 5.38304,
    neighborhood: "Belle de Mai",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: ["late_opening"]
  }),
  makePlace({
    id: "osm-node-13894807001",
    name: "Boulangerie Patisserie O bon pain de la Timone",
    latitude: 43.293166,
    longitude: 5.403417,
    neighborhood: "Marseille",
    address: "53 Rue Jean Martin, Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-8534089381",
    name: "Boulangerie patisserie orientale",
    latitude: 43.295057,
    longitude: 5.381633,
    neighborhood: "Cours Julien",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-12074330779",
    name: "Boulangerie Patisserie Pizza",
    latitude: 43.314243,
    longitude: 5.369003,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-8721048408",
    name: "Boulangerie Saint Charles",
    latitude: 43.305336,
    longitude: 5.391738,
    neighborhood: "Belle de Mai",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-8146274374",
    name: "Boulangerie Saint-Honore",
    latitude: 43.259262,
    longitude: 5.416523,
    neighborhood: "Littoral Sud",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-9904707343",
    name: "Boulangerie T65",
    instagram_handle: "t65boulangerie",
    latitude: 43.289203,
    longitude: 5.363298,
    neighborhood: "Saint-Victor",
    address: "35 Avenue de la Corse, Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-5519908486",
    name: "Boulangerie Ted Calek",
    latitude: 43.243104,
    longitude: 5.370245,
    neighborhood: "Littoral Sud",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-12880318275",
    name: "Boulangerie Thiers",
    latitude: 43.296894,
    longitude: 5.381376,
    neighborhood: "Cours Julien",
    address: "9 Boulevard Garibaldi, Marseille",
    category: "Commerce alimentaire",
    criteria: ["allows_cb_no_minimum"]
  }),
  makePlace({
    id: "osm-node-7203197710",
    name: "boulangerie-patisserie",
    latitude: 43.350784,
    longitude: 5.376954,
    neighborhood: "Marseille",
    address: "Avenue du Castellas, Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-7065137358",
    name: "Boulangerie-patisserie Saint-Victor",
    latitude: 43.289936,
    longitude: 5.366117,
    neighborhood: "Saint-Victor",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: ["wheelchair_accessible"]
  }),
  makePlace({
    id: "osm-node-11539376645",
    name: "Bozen",
    latitude: 43.277163,
    longitude: 5.389102,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["has_terrace"]
  }),
  makePlace({
    id: "osm-node-5843718126",
    name: "Bracelet d'argent",
    latitude: 43.297931,
    longitude: 5.371436,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["has_terrace","wheelchair_accessible","vegetarian_options"]
  }),
  makePlace({
    id: "osm-node-8071999811",
    name: "Braserie de l'Ocean",
    latitude: 43.292821,
    longitude: 5.39991,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["has_terrace"]
  }),
  makePlace({
    id: "osm-node-445460940",
    name: "Brasserie Bar Argent",
    latitude: 43.292176,
    longitude: 5.392253,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Bar",
    criteria: []
  }),
  makePlace({
    id: "osm-node-2010715825",
    name: "Brasserie d'Ambrine",
    latitude: 43.294016,
    longitude: 5.386138,
    neighborhood: "Cours Julien",
    address: "Marseille",
    category: "Bar",
    criteria: []
  }),
  makePlace({
    id: "osm-node-5310286907",
    name: "Brasserie de l'avenue",
    latitude: 43.351748,
    longitude: 5.438373,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Bar",
    criteria: []
  }),
  makePlace({
    id: "osm-node-7925474557",
    name: "Brasserie de l'Eden",
    latitude: 43.287816,
    longitude: 5.463993,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Bar",
    criteria: ["has_terrace"]
  }),
  makePlace({
    id: "osm-node-8117427404",
    name: "Brasserie de l'eglise",
    latitude: 43.35938,
    longitude: 5.332283,
    neighborhood: "Le Panier",
    address: "Rue Rabelais, Marseille",
    category: "Bar",
    criteria: []
  }),
  makePlace({
    id: "osm-node-6738889486",
    name: "Brasserie de la Croix Rouge",
    latitude: 43.334923,
    longitude: 5.450781,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Cafe",
    criteria: []
  }),
  makePlace({
    id: "osm-node-4547008420",
    name: "Brasserie de la Gare",
    latitude: 43.362551,
    longitude: 5.320654,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Cafe",
    criteria: ["late_opening"]
  }),
  makePlace({
    id: "osm-node-12269347012",
    name: "Brasserie De La Plage",
    latitude: 43.235328,
    longitude: 5.360884,
    neighborhood: "Littoral Sud",
    address: "99 Avenue de la Madrague de Montredon, Marseille",
    category: "Bar",
    criteria: ["has_terrace"]
  }),
  makePlace({
    id: "osm-node-3539250758",
    name: "Brasserie de la Poste",
    latitude: 43.319272,
    longitude: 5.367643,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-2083639541",
    name: "Brasserie de la Vierge doree",
    latitude: 43.302021,
    longitude: 5.383216,
    neighborhood: "Longchamp",
    address: "Marseille",
    category: "Cafe",
    criteria: []
  }),
  makePlace({
    id: "osm-node-12956470701",
    name: "Brasserie de Mars",
    latitude: 43.292179,
    longitude: 5.396178,
    neighborhood: "Marseille",
    address: "148 Rue Saint-Pierre, Marseille",
    category: "Bar",
    criteria: ["late_opening"]
  }),
  makePlace({
    id: "osm-node-7128007865",
    name: "Brasserie des Calanques",
    latitude: 43.233134,
    longitude: 5.400963,
    neighborhood: "Littoral Sud",
    address: "Marseille",
    category: "Cafe",
    criteria: ["has_terrace"]
  }),
  makePlace({
    id: "osm-node-6170638065",
    name: "Brasserie des Cinq Avenues",
    latitude: 43.30283,
    longitude: 5.397061,
    neighborhood: "Marseille",
    address: "2 Avenue des Chartreux, Marseille",
    category: "Cafe",
    criteria: ["has_terrace"]
  }),
  makePlace({
    id: "osm-node-13236006463",
    name: "Brasserie du Cabot",
    latitude: 43.258246,
    longitude: 5.417655,
    neighborhood: "Littoral Sud",
    address: "Marseille",
    category: "Bar",
    criteria: []
  }),
  makePlace({
    id: "osm-node-7843180643",
    name: "Brasserie du littoral",
    latitude: 43.30114,
    longitude: 5.364481,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["has_terrace"]
  }),
  makePlace({
    id: "osm-node-4955166022",
    name: "Brasserie du Tramway",
    latitude: 43.298194,
    longitude: 5.381785,
    neighborhood: "Longchamp",
    address: "Marseille",
    category: "Bar",
    criteria: ["has_terrace"]
  }),
  makePlace({
    id: "osm-node-4235386312",
    name: "Brasserie Glacier Le Cortes",
    latitude: 43.291509,
    longitude: 5.38077,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["has_terrace"]
  }),
  makePlace({
    id: "osm-node-6125607487",
    name: "Brasserie Jullian",
    latitude: 43.298861,
    longitude: 5.402582,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Bar",
    criteria: ["has_terrace"]
  }),
  makePlace({
    id: "osm-node-8888046306",
    name: "Brasserie L'Atypique",
    latitude: 43.279226,
    longitude: 5.412403,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-4048287529",
    name: "Brasserie L'Embarcadere",
    latitude: 43.298409,
    longitude: 5.363787,
    neighborhood: "Le Panier",
    address: "Place Albert Londres, Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-7059664885",
    name: "Brasserie L'europeen",
    latitude: 43.30169,
    longitude: 5.397612,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Bar",
    criteria: []
  }),
  makePlace({
    id: "osm-node-11400029940",
    name: "Brasserie l'Opera",
    latitude: 43.29368,
    longitude: 5.375364,
    neighborhood: "Noailles",
    address: "4 Rue Corneille, Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-2027966585",
    name: "Brasserie la Joliette",
    latitude: 43.304504,
    longitude: 5.366105,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["has_terrace"]
  }),
  makePlace({
    id: "osm-node-2806207797",
    name: "Brasserie La Suite",
    latitude: 43.353622,
    longitude: 5.338441,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-2810647829",
    name: "Brasserie Le Boyard",
    latitude: 43.289995,
    longitude: 5.378384,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Cafe",
    criteria: []
  }),
  makePlace({
    id: "osm-node-3379968792",
    name: "Brasserie Le Gallia",
    latitude: 43.285479,
    longitude: 5.377608,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Bar",
    criteria: ["has_terrace"]
  }),
  makePlace({
    id: "osm-node-3594068734",
    name: "Brasserie Le Grand Escalier",
    latitude: 43.301302,
    longitude: 5.380371,
    neighborhood: "Longchamp",
    address: "Marseille",
    category: "Bar",
    criteria: []
  }),
  makePlace({
    id: "osm-node-1315189230",
    name: "Brasserie Le Pharo",
    latitude: 43.291915,
    longitude: 5.358819,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-9658660679",
    name: "Brasserie le Phocea",
    latitude: 43.265008,
    longitude: 5.40905,
    neighborhood: "Littoral Sud",
    address: "Marseille",
    category: "Cafe",
    criteria: []
  }),
  makePlace({
    id: "osm-node-8956995122",
    name: "Brasserie Le Portis",
    latitude: 43.296827,
    longitude: 5.367822,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-12229404801",
    name: "Brasserie Le Soleil",
    latitude: 43.294815,
    longitude: 5.374697,
    neighborhood: "Noailles",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-2590099744",
    name: "Brasserie Le Terminus",
    latitude: 43.276362,
    longitude: 5.394792,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["has_terrace"]
  }),
  makePlace({
    id: "osm-node-12132576854",
    name: "Brasserie Les Allees",
    latitude: 43.298151,
    longitude: 5.381616,
    neighborhood: "Longchamp",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-4066799527",
    name: "Brasserie O' Parc",
    latitude: 43.271606,
    longitude: 5.393097,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["has_terrace"]
  }),
  makePlace({
    id: "osm-node-8989853724",
    name: "Brasserie Paulaner",
    latitude: 43.285114,
    longitude: 5.383801,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["has_terrace"]
  }),
  makePlace({
    id: "osm-node-4302847956",
    name: "Brasserie-tabac du rond point",
    latitude: 43.250487,
    longitude: 5.403147,
    neighborhood: "Littoral Sud",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-4109316465",
    name: "Brassserie de la Tour",
    latitude: 43.285045,
    longitude: 5.390087,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Cafe",
    criteria: []
  }),
  makePlace({
    id: "osm-node-10942364708",
    name: "Bread & Burger",
    latitude: 43.364011,
    longitude: 5.349339,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["good_for_groups"]
  }),
  makePlace({
    id: "osm-node-8518294537",
    name: "Bremond Fils",
    latitude: 43.293075,
    longitude: 5.376237,
    neighborhood: "Noailles",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-6808306798",
    name: "Breteuil Shop",
    latitude: 43.287551,
    longitude: 5.376848,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: ["wheelchair_accessible"]
  }),
  makePlace({
    id: "osm-node-11758364440",
    name: "Bricoleurs de douceurs",
    latitude: 43.25875,
    longitude: 5.417353,
    neighborhood: "Littoral Sud",
    address: "53 Boulevard du Cabot, Marseille",
    category: "Commerce alimentaire",
    criteria: ["late_opening"]
  }),
  makePlace({
    id: "osm-node-8241415293",
    name: "Bricoleurs de douceurs",
    latitude: 43.277229,
    longitude: 5.361599,
    neighborhood: "Saint-Victor",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-13137122699",
    name: "Bricoleurs de douceurs",
    latitude: 43.284165,
    longitude: 5.385167,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-8328961089",
    name: "Bricoleurs de Douceurs",
    latitude: 43.302941,
    longitude: 5.396398,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: ["wheelchair_accessible"]
  }),
  makePlace({
    id: "osm-node-11999132469",
    name: "Bricoleurs de douceurs (Patisserie)",
    latitude: 43.284566,
    longitude: 5.358613,
    neighborhood: "Malmousque",
    address: "256 Rue d'Endoume, Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-11116764755",
    name: "Bring Me My Coffee",
    latitude: 43.297039,
    longitude: 5.364546,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-2264300321",
    name: "Broceliande",
    latitude: 43.29298,
    longitude: 5.373191,
    neighborhood: "Noailles",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-9207708744",
    name: "Brothers",
    latitude: 43.281664,
    longitude: 5.391142,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-11190557107",
    name: "Brown",
    latitude: 43.246244,
    longitude: 5.403302,
    neighborhood: "Littoral Sud",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["good_for_groups"]
  }),
  makePlace({
    id: "osm-node-9979364917",
    name: "Brulerie Moka",
    latitude: 43.296994,
    longitude: 5.390462,
    neighborhood: "Marseille",
    address: "36 Boulevard Eugene Pierre, Marseille",
    category: "Cafe",
    criteria: ["has_terrace"]
  }),
  makePlace({
    id: "osm-node-3440661145",
    name: "Brusch & Food",
    latitude: 43.307135,
    longitude: 5.405589,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["good_for_groups"]
  }),
  makePlace({
    id: "osm-node-6129511688",
    name: "Bubble tea",
    latitude: 43.298527,
    longitude: 5.402928,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Bar",
    criteria: []
  }),
  makePlace({
    id: "osm-node-10896369270",
    name: "Bubbles Factory",
    latitude: 43.29932,
    longitude: 5.368123,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Cafe",
    criteria: []
  }),
  makePlace({
    id: "osm-node-13965785074",
    name: "Bucket",
    latitude: 43.328584,
    longitude: 5.42598,
    neighborhood: "Marseille",
    address: "151 Avenue de La Rose, Marseille",
    category: "Restaurant",
    criteria: ["good_for_groups"]
  }),
  makePlace({
    id: "osm-way-741692501",
    name: "Buffalo Grill Marseille La Valentine",
    latitude: 43.287798,
    longitude: 5.509434,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-11161527631",
    name: "Burger Cafe",
    latitude: 43.274033,
    longitude: 5.398394,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["good_for_groups"]
  }),
  makePlace({
    id: "osm-node-10942364409",
    name: "Burger Dream",
    latitude: 43.363683,
    longitude: 5.348798,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["good_for_groups"]
  }),
  makePlace({
    id: "osm-node-12348531501",
    name: "Burger King",
    latitude: 43.304628,
    longitude: 5.365881,
    neighborhood: "Le Panier",
    address: "11 Place de la Joliette, Marseille",
    category: "Restaurant",
    criteria: ["has_terrace","has_wifi","late_opening","vegetarian_options","good_for_groups"]
  }),
  makePlace({
    id: "osm-node-1594619878",
    name: "Burger King",
    latitude: 43.335901,
    longitude: 5.433401,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["good_for_groups"]
  }),
  makePlace({
    id: "osm-node-1836600398",
    name: "Burger King",
    latitude: 43.285237,
    longitude: 5.383696,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["good_for_groups"]
  }),
  makePlace({
    id: "osm-node-1941847116",
    name: "Burger King",
    latitude: 43.29516,
    longitude: 5.374602,
    neighborhood: "Noailles",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["has_terrace","late_opening","good_for_groups"]
  }),
  makePlace({
    id: "osm-node-2301582909",
    name: "Burger King",
    latitude: 43.315289,
    longitude: 5.387818,
    neighborhood: "Belle de Mai",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["good_for_groups"]
  }),
  makePlace({
    id: "osm-way-157697232",
    name: "Burger King",
    latitude: 43.289939,
    longitude: 5.479945,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["good_for_groups"]
  }),
  makePlace({
    id: "osm-way-157776215",
    name: "Burger King",
    latitude: 43.297157,
    longitude: 5.479411,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["has_terrace","good_for_groups"]
  }),
  makePlace({
    id: "osm-way-232882500",
    name: "Burger King",
    latitude: 43.278235,
    longitude: 5.428243,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["wheelchair_accessible","good_for_groups"]
  }),
  makePlace({
    id: "osm-way-537004750",
    name: "Burger King",
    latitude: 43.247082,
    longitude: 5.392703,
    neighborhood: "Littoral Sud",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["has_terrace","good_for_groups"]
  }),
  makePlace({
    id: "osm-node-8518294533",
    name: "Burger's banquet",
    latitude: 43.293545,
    longitude: 5.376166,
    neighborhood: "Noailles",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-10049647242",
    name: "Busan",
    latitude: 43.285718,
    longitude: 5.384903,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-5265363223",
    name: "Butcher Market",
    latitude: 43.299262,
    longitude: 5.375429,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-7054970447",
    name: "Butcher's",
    latitude: 43.297838,
    longitude: 5.380822,
    neighborhood: "Cours Julien",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["late_opening","good_for_groups"]
  }),
  makePlace({
    id: "osm-node-10968685752",
    name: "Butcher's",
    latitude: 43.309174,
    longitude: 5.401275,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-5493232830",
    name: "Buvette",
    latitude: 43.304481,
    longitude: 5.39548,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Cafe",
    criteria: ["has_terrace"]
  }),
  makePlace({
    id: "osm-way-159386534",
    name: "Buvette Billoux",
    latitude: 43.332344,
    longitude: 5.365423,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["wheelchair_accessible","good_for_groups"]
  }),
  makePlace({
    id: "osm-way-68961233",
    name: "Buvette du Zoo",
    latitude: 43.307339,
    longitude: 5.397662,
    neighborhood: "Belle de Mai",
    address: "1 Parc Longchamp, Marseille",
    category: "Cafe",
    criteria: ["has_terrace","wheelchair_accessible"]
  }),
  makePlace({
    id: "osm-node-11379661977",
    name: "By Food Grillades",
    latitude: 43.299579,
    longitude: 5.378172,
    neighborhood: "Longchamp",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-9054514166",
    name: "By Me",
    latitude: 43.309954,
    longitude: 5.37919,
    neighborhood: "Longchamp",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["good_for_groups"]
  }),
  makePlace({
    id: "osm-node-10865944788",
    name: "C'est bon",
    instagram_handle: "cestbon.marseille",
    latitude: 43.302026,
    longitude: 5.397826,
    neighborhood: "Marseille",
    address: "11 Avenue du Marechal Foch, Marseille",
    category: "Restaurant",
    criteria: ["late_opening","vegetarian_options"]
  }),
  makePlace({
    id: "osm-node-1671346510",
    name: "C'Frais",
    latitude: 43.281259,
    longitude: 5.389121,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-6627601793",
    name: "C'Thai",
    latitude: 43.307855,
    longitude: 5.432175,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["vegetarian_options"]
  }),
  makePlace({
    id: "osm-node-9385586517",
    name: "Ca Phe S",
    latitude: 43.292414,
    longitude: 5.375194,
    neighborhood: "Noailles",
    address: "Marseille",
    category: "Cafe",
    criteria: ["has_terrace","has_wifi","vegetarian_options","laptop_friendly"]
  }),
  makePlace({
    id: "osm-node-6144905478",
    name: "cabinet medical ipso Menpenti",
    instagram_handle: "ipso_sante",
    latitude: 43.284749,
    longitude: 5.39415,
    neighborhood: "Marseille",
    address: "182 Avenue de Toulon, Marseille",
    category: "Restaurant",
    criteria: ["wheelchair_accessible","allows_cb_no_minimum"]
  }),
  makePlace({
    id: "osm-node-3623078757",
    name: "Cacio e Pepe",
    latitude: 43.288398,
    longitude: 5.359168,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Bar",
    criteria: []
  }),
  makePlace({
    id: "osm-node-6769194433",
    name: "Cafe",
    latitude: 43.315877,
    longitude: 5.372973,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Cafe",
    criteria: []
  }),
  makePlace({
    id: "osm-node-2019893911",
    name: "Cafe Baille",
    latitude: 43.286729,
    longitude: 5.386094,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Cafe",
    criteria: []
  }),
  makePlace({
    id: "osm-node-11373110169",
    name: "Cafe Bikini",
    latitude: 43.291086,
    longitude: 5.356021,
    neighborhood: "Marseille",
    address: "10 Rue des Catalans, Marseille",
    category: "Cafe",
    criteria: []
  }),
  makePlace({
    id: "osm-node-2368671374",
    name: "Cafe Borely",
    latitude: 43.257186,
    longitude: 5.382538,
    neighborhood: "Littoral Sud",
    address: "Marseille",
    category: "Cafe",
    criteria: ["wheelchair_accessible"]
  }),
  makePlace({
    id: "osm-node-11217784538",
    name: "Cafe cantine",
    latitude: 43.288934,
    longitude: 5.36672,
    neighborhood: "Saint-Victor",
    address: "17 Place Joseph Etienne, Marseille",
    category: "Cafe",
    criteria: []
  }),
  makePlace({
    id: "osm-node-9054265546",
    name: "Cafe D'Alger",
    latitude: 43.311361,
    longitude: 5.378086,
    neighborhood: "Longchamp",
    address: "Marseille",
    category: "Cafe",
    criteria: []
  }),
  makePlace({
    id: "osm-node-3594277007",
    name: "Cafe de France",
    latitude: 43.302108,
    longitude: 5.379471,
    neighborhood: "Longchamp",
    address: "Marseille",
    category: "Cafe",
    criteria: []
  }),
  makePlace({
    id: "osm-node-9265178603",
    name: "Cafe de l'Abbaye",
    latitude: 43.291371,
    longitude: 5.366957,
    neighborhood: "Saint-Victor",
    address: "Marseille",
    category: "Bar",
    criteria: []
  }),
  makePlace({
    id: "osm-node-2810647830",
    name: "Cafe de la Banque",
    latitude: 43.29023,
    longitude: 5.378653,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Cafe",
    criteria: []
  }),
  makePlace({
    id: "osm-node-9082339645",
    name: "Cafe de la Gare",
    latitude: 43.368953,
    longitude: 5.356617,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Cafe",
    criteria: []
  }),
  makePlace({
    id: "osm-way-159902104",
    name: "Cafe de la Gare",
    latitude: 43.370376,
    longitude: 5.356567,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Cafe",
    criteria: []
  }),
  makePlace({
    id: "osm-node-5609697217",
    name: "Cafe de la Paix",
    latitude: 43.300888,
    longitude: 5.376651,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Cafe",
    criteria: ["has_terrace"]
  }),
  makePlace({
    id: "osm-node-2259960341",
    name: "Cafe de la Republique",
    latitude: 43.303834,
    longitude: 5.367714,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Cafe",
    criteria: []
  }),
  makePlace({
    id: "osm-node-5310285848",
    name: "Cafe de lla Place",
    latitude: 43.351898,
    longitude: 5.439081,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["has_terrace"]
  }),
  makePlace({
    id: "osm-node-8435191689",
    name: "Cafe de Provence",
    latitude: 43.314404,
    longitude: 5.399305,
    neighborhood: "Belle de Mai",
    address: "Marseille",
    category: "Bar",
    criteria: []
  }),
  makePlace({
    id: "osm-node-11933125438",
    name: "Cafe des arts",
    latitude: 43.292607,
    longitude: 5.368137,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["good_for_groups"]
  }),
  makePlace({
    id: "osm-node-12667389496",
    name: "Cafe des femmes",
    latitude: 43.370123,
    longitude: 5.350572,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Cafe",
    criteria: []
  }),
  makePlace({
    id: "osm-node-5816154256",
    name: "Cafe des Sports",
    latitude: 43.265223,
    longitude: 5.390485,
    neighborhood: "Littoral Sud",
    address: "162 Avenue de Mazargues, Marseille",
    category: "Bar",
    criteria: []
  }),
  makePlace({
    id: "osm-node-5188583892",
    name: "Cafe du Coin",
    latitude: 43.281697,
    longitude: 5.42767,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Cafe",
    criteria: []
  }),
  makePlace({
    id: "osm-node-1941635042",
    name: "Cafe du commerce",
    latitude: 43.294897,
    longitude: 5.37555,
    neighborhood: "Noailles",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-3634375261",
    name: "Cafe du Littoral",
    latitude: 43.364014,
    longitude: 5.350202,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Cafe",
    criteria: []
  }),
  makePlace({
    id: "osm-node-6031903502",
    name: "Cafe du theatre",
    latitude: 43.2978,
    longitude: 5.365755,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Cafe",
    criteria: []
  }),
  makePlace({
    id: "osm-node-5930778205",
    name: "Cafe du Theatre",
    latitude: 43.312998,
    longitude: 5.38452,
    neighborhood: "Belle de Mai",
    address: "Marseille",
    category: "Bar",
    criteria: []
  }),
  makePlace({
    id: "osm-node-12330295476",
    name: "Cafe Flammarion",
    latitude: 43.308017,
    longitude: 5.396093,
    neighborhood: "Belle de Mai",
    address: "Marseille",
    category: "Cafe",
    criteria: []
  }),
  makePlace({
    id: "osm-node-1941638012",
    name: "Cafe Garnier",
    latitude: 43.294878,
    longitude: 5.375455,
    neighborhood: "Noailles",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-3636748080",
    name: "Cafe Hotel Edmond",
    latitude: 43.288173,
    longitude: 5.380439,
    neighborhood: "Marseille",
    address: "31 rue Dragon, Marseille",
    category: "Cafe",
    criteria: []
  }),
  makePlace({
    id: "osm-node-9670223917",
    name: "Cafe Joyeux",
    latitude: 43.29454,
    longitude: 5.375643,
    neighborhood: "Noailles",
    address: "Marseille",
    category: "Cafe",
    criteria: ["has_terrace"]
  }),
  makePlace({
    id: "osm-node-1653249113",
    name: "Cafe Julien",
    latitude: 43.294384,
    longitude: 5.383395,
    neighborhood: "Cours Julien",
    address: "Marseille",
    category: "Bar",
    criteria: []
  }),
  makePlace({
    id: "osm-node-2041086086",
    name: "Cafe La Muse",
    latitude: 43.291398,
    longitude: 5.384881,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Cafe",
    criteria: ["has_terrace","late_opening"]
  }),
  makePlace({
    id: "osm-node-9266400467",
    name: "Cafe Lauca / La boutchica",
    latitude: 43.29169,
    longitude: 5.374775,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Cafe",
    criteria: ["has_terrace"]
  }),
  makePlace({
    id: "osm-node-13891670273",
    name: "Cafe le Major",
    latitude: 43.302992,
    longitude: 5.366304,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Cafe",
    criteria: []
  }),
  makePlace({
    id: "osm-node-4713564946",
    name: "Cafe le Massy",
    latitude: 43.298735,
    longitude: 5.380723,
    neighborhood: "Longchamp",
    address: "Marseille",
    category: "Cafe",
    criteria: []
  }),
  makePlace({
    id: "osm-node-2511318240",
    name: "Cafe Le numero 10",
    latitude: 43.296283,
    longitude: 5.380066,
    neighborhood: "Cours Julien",
    address: "Marseille",
    category: "Cafe",
    criteria: []
  }),
  makePlace({
    id: "osm-node-3756217303",
    name: "Cafe Les Fabrettes",
    latitude: 43.380021,
    longitude: 5.357468,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Cafe",
    criteria: []
  }),
  makePlace({
    id: "osm-node-9054265537",
    name: "Cafe National",
    latitude: 43.31161,
    longitude: 5.377732,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Cafe",
    criteria: []
  }),
  makePlace({
    id: "osm-node-5119639615",
    name: "Cafe noir",
    latitude: 43.294036,
    longitude: 5.379757,
    neighborhood: "Cours Julien",
    address: "Marseille",
    category: "Cafe",
    criteria: ["has_terrace"]
  }),
  makePlace({
    id: "osm-node-7719557085",
    name: "Cafe Populaire",
    latitude: 43.288792,
    longitude: 5.37862,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["late_opening"]
  }),
  makePlace({
    id: "osm-node-3400324543",
    name: "Cafe Poussettes \"Il etait une fois...\"",
    latitude: 43.283447,
    longitude: 5.375326,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-2511318284",
    name: "Cafe Prinder",
    latitude: 43.296577,
    longitude: 5.379659,
    neighborhood: "Cours Julien",
    address: "Marseille",
    category: "Cafe",
    criteria: ["has_terrace"]
  }),
  makePlace({
    id: "osm-node-1727495478",
    name: "Cafe Simon",
    latitude: 43.29279,
    longitude: 5.372876,
    neighborhood: "Noailles",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-5428983524",
    name: "Cafe Square Louise Michel",
    latitude: 43.300952,
    longitude: 5.377883,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Cafe",
    criteria: ["has_terrace"]
  }),
  makePlace({
    id: "osm-node-12996890109",
    name: "Cafe Zitoune",
    latitude: 43.297346,
    longitude: 5.383451,
    neighborhood: "Cours Julien",
    address: "Marseille",
    category: "Cafe",
    criteria: []
  }),
  makePlace({
    id: "osm-node-4535326289",
    name: "Cafe-galerie Nucleus",
    latitude: 43.284488,
    longitude: 5.381158,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Cafe",
    criteria: []
  }),
  makePlace({
    id: "osm-way-112809569",
    name: "Cafeteria",
    latitude: 43.320009,
    longitude: 5.40403,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-5541113893",
    name: "Cafeteria Babor",
    latitude: 43.300733,
    longitude: 5.375766,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Cafe",
    criteria: []
  }),
  makePlace({
    id: "osm-way-112819235",
    name: "Cafeteria CROUS",
    latitude: 43.337848,
    longitude: 5.411338,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["wheelchair_accessible","good_for_groups"]
  }),
  makePlace({
    id: "osm-node-11037395028",
    name: "Cafeteria CROUS Medecine",
    latitude: 43.287382,
    longitude: 5.402308,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["good_for_groups"]
  }),
  makePlace({
    id: "osm-node-11037395029",
    name: "Cafeteria CROUS Pharmacie",
    latitude: 43.287863,
    longitude: 5.400968,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["good_for_groups"]
  }),
  makePlace({
    id: "osm-way-68943391",
    name: "Cafeteria du C.R.O.U.S.",
    latitude: 43.30531,
    longitude: 5.377744,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Cafe",
    criteria: ["has_terrace","wheelchair_accessible"]
  }),
  makePlace({
    id: "osm-node-13648261716",
    name: "Cafeteria Ecole Centrale",
    latitude: 43.342571,
    longitude: 5.438302,
    neighborhood: "Marseille",
    address: "38 Rue Frederic Joliot Curie, Marseille",
    category: "Restaurant",
    criteria: ["vegetarian_options","good_for_groups"]
  }),
  makePlace({
    id: "osm-way-1166185635",
    name: "Caffe San Carlo",
    latitude: 43.303626,
    longitude: 5.379117,
    neighborhood: "Longchamp",
    address: "Marseille",
    category: "Cafe",
    criteria: []
  }),
  makePlace({
    id: "osm-node-11511158169",
    name: "Cafi Shop",
    latitude: 43.29994,
    longitude: 5.397539,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-12199413983",
    name: "Calenzana",
    latitude: 43.29327,
    longitude: 5.403373,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Bar",
    criteria: ["has_terrace"]
  }),
  makePlace({
    id: "osm-node-11049087805",
    name: "Cali Kitchen",
    latitude: 43.294564,
    longitude: 5.377058,
    neighborhood: "Noailles",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["has_terrace","has_wifi","wheelchair_accessible","vegetarian_options","dog_friendly","allows_cb_no_minimum"]
  }),
  makePlace({
    id: "osm-node-11393129771",
    name: "Cali Sushi",
    latitude: 43.290579,
    longitude: 5.35907,
    neighborhood: "Marseille",
    address: "26 Avenue Pasteur, Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-5601926321",
    name: "Camion 'les pizzas de Charly'",
    latitude: 43.299551,
    longitude: 5.397619,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["wheelchair_accessible","good_for_groups"]
  }),
  makePlace({
    id: "osm-node-9017447706",
    name: "Campaillette",
    latitude: 43.236303,
    longitude: 5.361902,
    neighborhood: "Littoral Sud",
    address: "68 Avenue de la Madrague de Montredon, Marseille",
    category: "Commerce alimentaire",
    criteria: ["wheelchair_accessible","allows_cb_no_minimum"]
  }),
  makePlace({
    id: "osm-node-1583328968",
    name: "Canard Laque",
    latitude: 43.295965,
    longitude: 5.487184,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["vegetarian_options"]
  }),
  makePlace({
    id: "osm-node-1798577940",
    name: "Cantine du Midi",
    latitude: 43.31068,
    longitude: 5.387162,
    neighborhood: "Belle de Mai",
    address: "Rue Bernard, Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-2028322607",
    name: "Cantini Flandin",
    latitude: 43.293704,
    longitude: 5.385745,
    neighborhood: "Cours Julien",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-9587724246",
    name: "Cantini Flandin",
    latitude: 43.284241,
    longitude: 5.385111,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-13208441668",
    name: "Cantini Flandin",
    latitude: 43.291329,
    longitude: 5.358901,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-10013719753",
    name: "Cantoche",
    latitude: 43.294014,
    longitude: 5.377228,
    neighborhood: "Noailles",
    address: "13 Rue Haxo, Marseille",
    category: "Restaurant",
    criteria: ["has_terrace"]
  }),
  makePlace({
    id: "osm-way-112819769",
    name: "Capo Rosso",
    latitude: 43.316935,
    longitude: 5.407167,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-12362363509",
    name: "Capuccino Pizzeria",
    latitude: 43.296208,
    longitude: 5.38031,
    neighborhood: "Cours Julien",
    address: "Rue Rodolphe Pollak, Marseille",
    category: "Restaurant",
    criteria: ["good_for_groups"]
  }),
  makePlace({
    id: "osm-node-13270040301",
    name: "Caravane Cafe",
    latitude: 43.362133,
    longitude: 5.315065,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Cafe",
    criteria: []
  }),
  makePlace({
    id: "osm-way-352442916",
    name: "Carl's Jr.",
    latitude: 43.303046,
    longitude: 5.379835,
    neighborhood: "Longchamp",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["late_opening","vegetarian_options","good_for_groups"]
  }),
  makePlace({
    id: "osm-node-9724466444",
    name: "Carlotta With",
    latitude: 43.283374,
    longitude: 5.374809,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["has_terrace","wheelchair_accessible","takes_reservations"]
  }),
  makePlace({
    id: "osm-node-6328537899",
    name: "Carnivor",
    latitude: 43.296213,
    longitude: 5.423807,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-way-154483244",
    name: "Carrefour",
    latitude: 43.248494,
    longitude: 5.38947,
    neighborhood: "Littoral Sud",
    address: "112 Avenue de Hambourg, Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-442165169",
    name: "Carrefour",
    latitude: 43.3646,
    longitude: 5.34966,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-12609556452",
    name: "Carrefour",
    latitude: 43.329917,
    longitude: 5.398809,
    neighborhood: "Belle de Mai",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-1485011633",
    name: "Carrefour City",
    latitude: 43.360028,
    longitude: 5.315748,
    neighborhood: "Le Panier",
    address: "26 Plage de l'Estaque, Marseille",
    category: "Commerce alimentaire",
    criteria: ["late_opening","allows_cb_no_minimum"]
  }),
  makePlace({
    id: "osm-node-1794713693",
    name: "Carrefour City",
    latitude: 43.302987,
    longitude: 5.379025,
    neighborhood: "Longchamp",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: ["late_opening"]
  }),
  makePlace({
    id: "osm-node-1984571930",
    name: "Carrefour City",
    latitude: 43.291456,
    longitude: 5.380478,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: ["late_opening"]
  }),
  makePlace({
    id: "osm-node-4777502284",
    name: "Carrefour City",
    latitude: 43.297595,
    longitude: 5.381633,
    neighborhood: "Cours Julien",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: ["late_opening"]
  }),
  makePlace({
    id: "osm-node-6030132703",
    name: "Carrefour City",
    latitude: 43.290638,
    longitude: 5.375796,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: ["late_opening","wheelchair_accessible"]
  }),
  makePlace({
    id: "osm-node-6130017285",
    name: "Carrefour City",
    latitude: 43.295956,
    longitude: 5.405503,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: ["late_opening"]
  }),
  makePlace({
    id: "osm-node-6431073404",
    name: "Carrefour City",
    latitude: 43.298538,
    longitude: 5.376931,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: ["late_opening","wheelchair_accessible"]
  }),
  makePlace({
    id: "osm-node-7334168807",
    name: "Carrefour City",
    latitude: 43.299616,
    longitude: 5.395988,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: ["late_opening","wheelchair_accessible"]
  }),
  makePlace({
    id: "osm-node-8855323261",
    name: "Carrefour City",
    latitude: 43.304117,
    longitude: 5.398415,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: ["wheelchair_accessible"]
  }),
  makePlace({
    id: "osm-node-9860885318",
    name: "Carrefour City",
    latitude: 43.287548,
    longitude: 5.390427,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: ["late_opening"]
  }),
  makePlace({
    id: "osm-node-9914951725",
    name: "Carrefour City",
    latitude: 43.280703,
    longitude: 5.387686,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: ["late_opening"]
  }),
  makePlace({
    id: "osm-node-6070722879",
    name: "Carrefour City",
    latitude: 43.304124,
    longitude: 5.415794,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-7364053478",
    name: "Carrefour City",
    latitude: 43.292791,
    longitude: 5.384429,
    neighborhood: "Cours Julien",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-7707514038",
    name: "Carrefour City",
    latitude: 43.281872,
    longitude: 5.424609,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-8731323039",
    name: "Carrefour City",
    latitude: 43.29128,
    longitude: 5.37035,
    neighborhood: "Saint-Victor",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-12137941584",
    name: "Carrefour City",
    latitude: 43.307007,
    longitude: 5.406146,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-12677254664",
    name: "Carrefour City",
    latitude: 43.265562,
    longitude: 5.387139,
    neighborhood: "Littoral Sud",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-way-153567500",
    name: "Carrefour City",
    latitude: 43.249995,
    longitude: 5.396828,
    neighborhood: "Littoral Sud",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-way-154561822",
    name: "Carrefour contact",
    latitude: 43.264401,
    longitude: 5.389998,
    neighborhood: "Littoral Sud",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-3307709493",
    name: "Carrefour Contact",
    latitude: 43.347445,
    longitude: 5.450928,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: ["late_opening"]
  }),
  makePlace({
    id: "osm-node-5182286410",
    name: "Carrefour Contact",
    latitude: 43.28905,
    longitude: 5.459846,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-way-158110643",
    name: "Carrefour Express",
    latitude: 43.317751,
    longitude: 5.423673,
    neighborhood: "Marseille",
    address: "8 Place Claude Bernard, Marseille",
    category: "Commerce alimentaire",
    criteria: ["allows_cb_no_minimum"]
  }),
  makePlace({
    id: "osm-node-1933787445",
    name: "Carrefour Express",
    latitude: 43.295722,
    longitude: 5.396853,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: ["wheelchair_accessible"]
  }),
  makePlace({
    id: "osm-node-5519908491",
    name: "Carrefour Express",
    latitude: 43.24306,
    longitude: 5.370193,
    neighborhood: "Littoral Sud",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: ["wheelchair_accessible"]
  }),
  makePlace({
    id: "osm-node-6427669122",
    name: "Carrefour Express",
    latitude: 43.290168,
    longitude: 5.386461,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: ["wheelchair_accessible"]
  }),
  makePlace({
    id: "osm-node-5824986071",
    name: "Carrefour Express",
    latitude: 43.284482,
    longitude: 5.39522,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-8855323263",
    name: "Carrefour Express",
    latitude: 43.302322,
    longitude: 5.394796,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-9860883723",
    name: "Carrefour Express",
    latitude: 43.283284,
    longitude: 5.380973,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-10963207421",
    name: "Carrefour Express",
    latitude: 43.269662,
    longitude: 5.387956,
    neighborhood: "Littoral Sud",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-13958097053",
    name: "Carrefour Express",
    latitude: 43.297264,
    longitude: 5.368999,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-4811872517",
    name: "Carrefour Market",
    latitude: 43.285268,
    longitude: 5.377296,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: ["wheelchair_accessible","allows_cb_no_minimum"]
  }),
  makePlace({
    id: "osm-way-69125351",
    name: "Carrefour Market",
    latitude: 43.283474,
    longitude: 5.384401,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: ["late_opening"]
  }),
  makePlace({
    id: "osm-node-1650409894",
    name: "Carrefour Market",
    latitude: 43.304603,
    longitude: 5.418092,
    neighborhood: "Marseille",
    address: "Rue Leon Meisserel, Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-1558650893",
    name: "Carrefour Market",
    latitude: 43.29764,
    longitude: 5.496081,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-1689088673",
    name: "Carrefour Market",
    latitude: 43.312257,
    longitude: 5.386283,
    neighborhood: "Belle de Mai",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-2030485034",
    name: "Carrefour Market",
    latitude: 43.307849,
    longitude: 5.381875,
    neighborhood: "Longchamp",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-2822222312",
    name: "Carrefour Market",
    latitude: 43.277337,
    longitude: 5.392659,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-3621363123",
    name: "Carrefour Market",
    latitude: 43.288901,
    longitude: 5.359222,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-4235312883",
    name: "Carrefour Market",
    latitude: 43.285114,
    longitude: 5.385578,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-6967474368",
    name: "Carrefour Market",
    latitude: 43.296675,
    longitude: 5.374965,
    neighborhood: "Noailles",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-9624572417",
    name: "Carrefour Market",
    latitude: 43.301285,
    longitude: 5.366292,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-10876286007",
    name: "Carrefour Market",
    latitude: 43.304229,
    longitude: 5.38921,
    neighborhood: "Longchamp",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-13657055404",
    name: "Carrefour Market",
    latitude: 43.299819,
    longitude: 5.436543,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-way-154570290",
    name: "Carrefour Market",
    latitude: 43.273803,
    longitude: 5.413063,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-way-154597268",
    name: "Carrefour Market",
    latitude: 43.286351,
    longitude: 5.41319,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-way-158106346",
    name: "Carrefour Market",
    latitude: 43.31774,
    longitude: 5.439732,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-way-158121699",
    name: "Carrefour Market",
    latitude: 43.315782,
    longitude: 5.462411,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-3379968791",
    name: "Carrement Gourmand",
    latitude: 43.285299,
    longitude: 5.3777,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: ["wheelchair_accessible"]
  }),
  makePlace({
    id: "osm-node-9965625318",
    name: "Carry Nation",
    latitude: 43.289054,
    longitude: 5.371941,
    neighborhood: "Saint-Victor",
    address: "6 Rue Jules Moulet, Marseille",
    category: "Bar",
    criteria: []
  }),
  makePlace({
    id: "osm-node-6779257018",
    name: "Carthaj'i",
    latitude: 43.314419,
    longitude: 5.369776,
    neighborhood: "Le Panier",
    address: "10 Boulevard Mirabeau, Marseille",
    category: "Restaurant",
    criteria: ["late_opening","good_for_groups"]
  }),
  makePlace({
    id: "osm-node-11583985972",
    name: "Carthaj'i",
    latitude: 43.282237,
    longitude: 5.403363,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["good_for_groups"]
  }),
  makePlace({
    id: "osm-node-6889094797",
    name: "Casa Brandi chez Marco e Luigi",
    latitude: 43.286359,
    longitude: 5.377512,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["late_opening"]
  }),
  makePlace({
    id: "osm-node-3893473657",
    name: "Casa Consolat",
    latitude: 43.299656,
    longitude: 5.386085,
    neighborhood: "Longchamp",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-1693726759",
    name: "Casa Dipaulo",
    latitude: 43.318681,
    longitude: 5.403769,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-5823541884",
    name: "Casa Italia",
    latitude: 43.293917,
    longitude: 5.37388,
    neighborhood: "Noailles",
    address: "Marseille",
    category: "Cafe",
    criteria: []
  }),
  makePlace({
    id: "osm-node-6879156871",
    name: "Casa Maria",
    latitude: 43.28446,
    longitude: 5.380944,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-11745810523",
    name: "Casa Mia",
    latitude: 43.284068,
    longitude: 5.435851,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-6017571314",
    name: "Casa Pizza",
    latitude: 43.285803,
    longitude: 5.377563,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["late_opening","vegetarian_options","good_for_groups"]
  }),
  makePlace({
    id: "osm-node-2822291433",
    name: "Casanostra",
    latitude: 43.276841,
    longitude: 5.394123,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-4951205722",
    name: "Casanova",
    latitude: 43.296548,
    longitude: 5.372861,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Bar",
    criteria: ["has_terrace"]
  }),
  makePlace({
    id: "osm-node-7923884989",
    name: "Casino",
    latitude: 43.285113,
    longitude: 5.387894,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: ["late_opening"]
  }),
  makePlace({
    id: "osm-way-154802321",
    name: "Casino",
    latitude: 43.267629,
    longitude: 5.389942,
    neighborhood: "Littoral Sud",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: ["late_opening"]
  }),
  makePlace({
    id: "osm-node-1688819996",
    name: "Casino",
    latitude: 43.281003,
    longitude: 5.39744,
    neighborhood: "Marseille",
    address: "11 Rue Jean-Baptiste Reboul, Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-799095377",
    name: "Casino",
    latitude: 43.253443,
    longitude: 5.423359,
    neighborhood: "Littoral Sud",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-1237810325",
    name: "Casino",
    latitude: 43.296019,
    longitude: 5.386269,
    neighborhood: "Cours Julien",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-1923604551",
    name: "Casino",
    latitude: 43.348921,
    longitude: 5.376449,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-8238409768",
    name: "Casino",
    latitude: 43.305446,
    longitude: 5.392487,
    neighborhood: "Belle de Mai",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-2019803235",
    name: "Casino Shop",
    latitude: 43.288582,
    longitude: 5.393047,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-4987113314",
    name: "Casino Shop",
    latitude: 43.300879,
    longitude: 5.511082,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-7410088306",
    name: "Casino Shop",
    latitude: 43.321745,
    longitude: 5.411975,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-8855323279",
    name: "Casino Shop",
    latitude: 43.236403,
    longitude: 5.362032,
    neighborhood: "Littoral Sud",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-9566462049",
    name: "Casino Shop",
    latitude: 43.312165,
    longitude: 5.465369,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-11540040469",
    name: "Casino Shop",
    latitude: 43.301524,
    longitude: 5.387833,
    neighborhood: "Longchamp",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-12122409500",
    name: "Casino Shop",
    latitude: 43.285562,
    longitude: 5.402414,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-7409995347",
    name: "Casino Sphop",
    latitude: 43.318298,
    longitude: 5.424055,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-2019893912",
    name: "Castell York",
    latitude: 43.2862,
    longitude: 5.383208,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-2010627425",
    name: "Caterine",
    latitude: 43.292093,
    longitude: 5.385215,
    neighborhood: "Cours Julien",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-11850342169",
    name: "Cavavin",
    latitude: 43.293973,
    longitude: 5.376299,
    neighborhood: "Noailles",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-8328961088",
    name: "Cave Conseil Chartreux",
    latitude: 43.30989,
    longitude: 5.400551,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: ["good_for_groups"]
  }),
  makePlace({
    id: "osm-node-5518300350",
    name: "Cave de la Pointe Rouge",
    latitude: 43.245463,
    longitude: 5.373589,
    neighborhood: "Littoral Sud",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-4244949660",
    name: "cave de Redon",
    latitude: 43.256729,
    longitude: 5.420179,
    neighborhood: "Littoral Sud",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-1871316008",
    name: "Cave Merentie",
    latitude: 43.29619,
    longitude: 5.390548,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-1568228951",
    name: "Caves Damiani",
    latitude: 43.28105,
    longitude: 5.405956,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: ["good_for_groups"]
  }),
  makePlace({
    id: "osm-node-3537946909",
    name: "Caves Damiani",
    latitude: 43.282759,
    longitude: 5.408885,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-3933513615",
    name: "Caves du Midi",
    latitude: 43.288788,
    longitude: 5.437321,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: ["good_for_groups"]
  }),
  makePlace({
    id: "osm-node-8601906908",
    name: "Cazo' Viandes",
    latitude: 43.299441,
    longitude: 5.437035,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-12959391302",
    name: "Cecile",
    latitude: 43.215212,
    longitude: 5.346472,
    neighborhood: "Malmousque",
    address: "16 Rue Desire Pelaprat, Marseille",
    category: "Cafe",
    criteria: []
  }),
  makePlace({
    id: "osm-node-6031928974",
    name: "Cedar",
    latitude: 43.297806,
    longitude: 5.365568,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["vegetarian_options"]
  }),
  makePlace({
    id: "osm-node-2259955269",
    name: "Centre Marseillais des viandes",
    latitude: 43.302086,
    longitude: 5.370559,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-13533829071",
    name: "Cerealia",
    latitude: 43.309662,
    longitude: 5.401361,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: ["has_terrace","vegetarian_options","allows_cb_no_minimum"]
  }),
  makePlace({
    id: "osm-node-4764597123",
    name: "Cesar Place",
    latitude: 43.292818,
    longitude: 5.372026,
    neighborhood: "Noailles",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-1933758739",
    name: "Chaleur",
    instagram_handle: "chaleur.marseille",
    latitude: 43.295397,
    longitude: 5.391295,
    neighborhood: "Marseille",
    address: "67 Boulevard Chave, Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-4405959302",
    name: "Chamelle",
    latitude: 43.299374,
    longitude: 5.381308,
    neighborhood: "Longchamp",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-8476103175",
    name: "Chanterac",
    latitude: 43.313212,
    longitude: 5.371099,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["good_for_groups"]
  }),
  makePlace({
    id: "osm-node-9054514165",
    name: "Chapati",
    latitude: 43.309897,
    longitude: 5.379274,
    neighborhood: "Longchamp",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["good_for_groups"]
  }),
  makePlace({
    id: "osm-node-5181596449",
    name: "Charcuterie Boucherie Traiteur",
    latitude: 43.282338,
    longitude: 5.430592,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-2011560385",
    name: "Charcuterie Traiteur",
    latitude: 43.293882,
    longitude: 5.385828,
    neighborhood: "Cours Julien",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-13233176573",
    name: "Charcuterie Traiteur Pasteur",
    latitude: 43.290118,
    longitude: 5.359145,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-2511318295",
    name: "Charcuterie traiteur rotisserie",
    latitude: 43.296543,
    longitude: 5.380338,
    neighborhood: "Cours Julien",
    address: "11 Place du Marche des Capucins, Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-5181596453",
    name: "Charles Debril Artisan Traiteur",
    latitude: 43.282351,
    longitude: 5.430639,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-1549176587",
    name: "Chat Perche",
    latitude: 43.29383,
    longitude: 5.384843,
    neighborhood: "Cours Julien",
    address: "17 Rue Pastoret, Marseille",
    category: "Bar",
    criteria: ["late_opening"]
  }),
  makePlace({
    id: "osm-node-13413267901",
    name: "Chez Adele",
    instagram_handle: "chezadele_cafe",
    latitude: 43.285668,
    longitude: 5.382328,
    neighborhood: "Marseille",
    address: "16 Rue Saint-Sebastien, Marseille",
    category: "Cafe",
    criteria: []
  }),
  makePlace({
    id: "osm-node-1720313907",
    name: "Chez Aldo",
    latitude: 43.232752,
    longitude: 5.353896,
    neighborhood: "Malmousque",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-13638040151",
    name: "Chez Alex",
    latitude: 43.256996,
    longitude: 5.411104,
    neighborhood: "Littoral Sud",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["good_for_groups"]
  }),
  makePlace({
    id: "osm-node-3105395331",
    name: "Chez Angele",
    latitude: 43.296902,
    longitude: 5.366896,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["late_opening"]
  }),
  makePlace({
    id: "osm-node-1594633518",
    name: "Chez Axel",
    latitude: 43.306699,
    longitude: 5.399793,
    neighborhood: "Belle de Mai",
    address: "Marseille",
    category: "Cafe",
    criteria: ["vegetarian_options"]
  }),
  makePlace({
    id: "osm-way-154593453",
    name: "Chez Bibi",
    latitude: 43.274679,
    longitude: 5.414922,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-2589492139",
    name: "Chez Bibou",
    latitude: 43.309396,
    longitude: 5.437496,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["good_for_groups"]
  }),
  makePlace({
    id: "osm-node-9054324076",
    name: "Chez Brahim",
    latitude: 43.311114,
    longitude: 5.378369,
    neighborhood: "Longchamp",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-9182129582",
    name: "Chez Claude Antoci",
    latitude: 43.311775,
    longitude: 5.386368,
    neighborhood: "Belle de Mai",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: ["allows_cb_no_minimum"]
  }),
  makePlace({
    id: "osm-node-6627597578",
    name: "Chez Cot",
    latitude: 43.308167,
    longitude: 5.435748,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["good_for_groups"]
  }),
  makePlace({
    id: "osm-node-10281911218",
    name: "Chez David",
    latitude: 43.284705,
    longitude: 5.385275,
    neighborhood: "Marseille",
    address: "20 Rue du Rouet, Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-1532880145",
    name: "Chez Didier & Brigitte",
    latitude: 43.289233,
    longitude: 5.387675,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-8475740489",
    name: "Chez Diego",
    latitude: 43.291046,
    longitude: 5.381186,
    neighborhood: "Marseille",
    address: "1 Boulevard Louis Salvator, Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-3535313743",
    name: "Chez Enzo",
    latitude: 43.303938,
    longitude: 5.392905,
    neighborhood: "Marseille",
    address: "Rue Esperandieu, Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-1682298866",
    name: "Chez Etienne",
    latitude: 43.30008,
    longitude: 5.369961,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["late_opening"]
  }),
  makePlace({
    id: "osm-node-13592317830",
    name: "Chez Fanny",
    latitude: 43.297697,
    longitude: 5.371612,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["good_for_groups"]
  }),
  makePlace({
    id: "osm-node-3370604783",
    name: "Chez Farah",
    latitude: 43.272502,
    longitude: 5.411482,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-13894761601",
    name: "Chez Ferrato",
    latitude: 43.286632,
    longitude: 5.392829,
    neighborhood: "Marseille",
    address: "15 Rue Antoine Maille, Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-513732929",
    name: "Chez Fonfon",
    latitude: 43.285541,
    longitude: 5.351429,
    neighborhood: "Malmousque",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-way-69122480",
    name: "Chez Francette",
    latitude: 43.282495,
    longitude: 5.373208,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: ["wheelchair_accessible"]
  }),
  makePlace({
    id: "osm-node-10080318671",
    name: "Chez Gilbert",
    latitude: 43.320619,
    longitude: 5.433111,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-2026369718",
    name: "Chez Gilda",
    latitude: 43.294793,
    longitude: 5.384542,
    neighborhood: "Cours Julien",
    address: "Marseille",
    category: "Bar",
    criteria: []
  }),
  makePlace({
    id: "osm-node-991811853",
    name: "Chez Guy",
    latitude: 43.293008,
    longitude: 5.386781,
    neighborhood: "Cours Julien",
    address: "Marseille",
    category: "Bar",
    criteria: []
  }),
  makePlace({
    id: "osm-node-11503759072",
    name: "Chez Hamza",
    latitude: 43.304181,
    longitude: 5.368805,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["good_for_groups"]
  }),
  makePlace({
    id: "osm-node-11394011624",
    name: "Chez Hazo",
    latitude: 43.336928,
    longitude: 5.355181,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["has_terrace","good_for_groups"]
  }),
  makePlace({
    id: "osm-node-8880327899",
    name: "Chez Helene et Michel Boucherie",
    latitude: 43.281133,
    longitude: 5.406343,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-2010715820",
    name: "Chez Ida",
    latitude: 43.293785,
    longitude: 5.386274,
    neighborhood: "Cours Julien",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-9057078478",
    name: "Chez Jaques",
    latitude: 43.309171,
    longitude: 5.38043,
    neighborhood: "Longchamp",
    address: "Marseille",
    category: "Bar",
    criteria: []
  }),
  makePlace({
    id: "osm-node-4290912380",
    name: "Chez Jean-Claude",
    latitude: 43.267063,
    longitude: 5.395796,
    neighborhood: "Littoral Sud",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-513732930",
    name: "Chez Jeannot",
    latitude: 43.285275,
    longitude: 5.351641,
    neighborhood: "Malmousque",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-12806270308",
    name: "Chez Jo",
    latitude: 43.295262,
    longitude: 5.387376,
    neighborhood: "Cours Julien",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-1710309596",
    name: "Chez le Belge",
    latitude: 43.209805,
    longitude: 5.372416,
    neighborhood: "Littoral Sud",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-13915158857",
    name: "Chez Leticia Zica",
    instagram_handle: "chezleticiazica",
    latitude: 43.298014,
    longitude: 5.365934,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: ["allows_cb_no_minimum"]
  }),
  makePlace({
    id: "osm-node-4127983359",
    name: "Chez Lili",
    latitude: 43.30685,
    longitude: 5.400545,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-way-69125633",
    name: "Chez Lolo",
    latitude: 43.287329,
    longitude: 5.389315,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-7897276285",
    name: "Chez Loury",
    latitude: 43.293282,
    longitude: 5.373632,
    neighborhood: "Noailles",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["vegetarian_options"]
  }),
  makePlace({
    id: "osm-node-7096257238",
    name: "Chez Lucienne",
    latitude: 43.284448,
    longitude: 5.358683,
    neighborhood: "Malmousque",
    address: "Rue d'endoume, Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-way-178655330",
    name: "Chez Maestro",
    latitude: 43.300508,
    longitude: 5.366224,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["good_for_groups"]
  }),
  makePlace({
    id: "osm-way-69620507",
    name: "Chez Magali",
    latitude: 43.360337,
    longitude: 5.314545,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["good_for_groups"]
  }),
  makePlace({
    id: "osm-node-5824103358",
    name: "Chez Mama Africa",
    latitude: 43.295101,
    longitude: 5.383025,
    neighborhood: "Cours Julien",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["late_opening"]
  }),
  makePlace({
    id: "osm-node-2028064238",
    name: "Chez Mama Africa",
    latitude: 43.29432,
    longitude: 5.380942,
    neighborhood: "Cours Julien",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-way-1318815376",
    name: "Chez Mano by l'Etoile bleue",
    latitude: 43.293239,
    longitude: 5.406595,
    neighborhood: "Marseille",
    address: "29 Boulevard des Freres Godchot, Marseille",
    category: "Restaurant",
    criteria: ["has_terrace"]
  }),
  makePlace({
    id: "osm-node-11124318926",
    name: "Chez Marinette",
    latitude: 43.287651,
    longitude: 5.362539,
    neighborhood: "Saint-Victor",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-5600549922",
    name: "Chez Marylou",
    latitude: 43.298646,
    longitude: 5.398879,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-11622426320",
    name: "Chez Maurice",
    latitude: 43.278249,
    longitude: 5.383086,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-10697278526",
    name: "Chez Mekki",
    latitude: 43.328151,
    longitude: 5.405821,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-4426810910",
    name: "Chez Michel",
    latitude: 43.290701,
    longitude: 5.356069,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["wheelchair_accessible","vegetarian_options","takes_reservations"]
  }),
  makePlace({
    id: "osm-node-3465061684",
    name: "Chez Moktar",
    latitude: 43.366225,
    longitude: 5.342171,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-1600583561",
    name: "Chez Noel",
    latitude: 43.298743,
    longitude: 5.385189,
    neighborhood: "Longchamp",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-7925474500",
    name: "Chez Nono",
    latitude: 43.288725,
    longitude: 5.460954,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-2016443128",
    name: "Chez Nosia",
    latitude: 43.300969,
    longitude: 5.383354,
    neighborhood: "Longchamp",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-6446255385",
    name: "Chez Nous",
    latitude: 43.291794,
    longitude: 5.384139,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-12412849060",
    name: "Chez Papa",
    latitude: 43.291843,
    longitude: 5.384436,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["late_opening"]
  }),
  makePlace({
    id: "osm-node-4016684178",
    name: "Chez Paul",
    latitude: 43.273774,
    longitude: 5.430092,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-7793830239",
    name: "Chez Paul",
    latitude: 43.215159,
    longitude: 5.34565,
    neighborhood: "Malmousque",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-4239668610",
    name: "Chez Paulette",
    latitude: 43.237742,
    longitude: 5.361574,
    neighborhood: "Littoral Sud",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["late_opening"]
  }),
  makePlace({
    id: "osm-node-6766449925",
    name: "Chez Popeye",
    latitude: 43.244239,
    longitude: 5.370621,
    neighborhood: "Littoral Sud",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["has_terrace","good_for_groups"]
  }),
  makePlace({
    id: "osm-node-6106474679",
    name: "Chez PP",
    latitude: 43.301212,
    longitude: 5.431515,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-11069907113",
    name: "Chez Quan",
    latitude: 43.254069,
    longitude: 5.375364,
    neighborhood: "Littoral Sud",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["has_terrace","vegetarian_options"]
  }),
  makePlace({
    id: "osm-node-4846089448",
    name: "Chez riz",
    latitude: 43.287958,
    longitude: 5.363611,
    neighborhood: "Saint-Victor",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["has_terrace","late_opening","vegetarian_options"]
  }),
  makePlace({
    id: "osm-node-5795578742",
    name: "Chez Roger",
    latitude: 43.296525,
    longitude: 5.372376,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["has_terrace"]
  }),
  makePlace({
    id: "osm-node-11228717054",
    name: "Chez Romain et Marion",
    latitude: 43.300149,
    longitude: 5.388891,
    neighborhood: "Longchamp",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-12201233959",
    name: "Chez Rudy",
    latitude: 43.293638,
    longitude: 5.402617,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-2019644615",
    name: "Chez Salim",
    latitude: 43.292912,
    longitude: 5.38482,
    neighborhood: "Cours Julien",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-12269347013",
    name: "Chez Sam",
    latitude: 43.235566,
    longitude: 5.361212,
    neighborhood: "Littoral Sud",
    address: "95 Avenue de la Madrague de Montredon, Marseille",
    category: "Commerce alimentaire",
    criteria: ["wheelchair_accessible"]
  }),
  makePlace({
    id: "osm-node-1319273248",
    name: "Chez Sauveur",
    latitude: 43.295558,
    longitude: 5.37902,
    neighborhood: "Cours Julien",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["has_terrace"]
  }),
  makePlace({
    id: "osm-node-9057006341",
    name: "Chez Sirine",
    latitude: 43.308652,
    longitude: 5.380623,
    neighborhood: "Longchamp",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["good_for_groups"]
  }),
  makePlace({
    id: "osm-node-2115079381",
    name: "Chez Soi",
    latitude: 43.296742,
    longitude: 5.380287,
    neighborhood: "Cours Julien",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["late_opening","vegetarian_options"]
  }),
  makePlace({
    id: "osm-way-1329404033",
    name: "Chez Sylvana",
    latitude: 43.299537,
    longitude: 5.397004,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["good_for_groups"]
  }),
  makePlace({
    id: "osm-node-3612875503",
    name: "Chez Sylvie",
    latitude: 43.313068,
    longitude: 5.370597,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-12567393402",
    name: "Chez Tamar",
    latitude: 43.299538,
    longitude: 5.366465,
    neighborhood: "Le Panier",
    address: "56 Rue de l'Eveche, Marseille",
    category: "Restaurant",
    criteria: ["vegetarian_options"]
  }),
  makePlace({
    id: "osm-way-153554897",
    name: "Chez Thuong",
    latitude: 43.246587,
    longitude: 5.402888,
    neighborhood: "Littoral Sud",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-11381193769",
    name: "Chez Tim",
    latitude: 43.288625,
    longitude: 5.359896,
    neighborhood: "Marseille",
    address: "1 B Place du 4 Septembre, Marseille",
    category: "Restaurant",
    criteria: ["good_for_groups"]
  }),
  makePlace({
    id: "osm-node-5516794255",
    name: "chez valle",
    latitude: 43.283642,
    longitude: 5.374996,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-6170638066",
    name: "Chez Vincent",
    latitude: 43.302874,
    longitude: 5.397141,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-6627597554",
    name: "Chez Vincent & Muriel",
    latitude: 43.308368,
    longitude: 5.436883,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-5119639619",
    name: "Chez Yassine",
    latitude: 43.295659,
    longitude: 5.378851,
    neighborhood: "Cours Julien",
    address: "8a Rue d'Aubagne, Marseille",
    category: "Restaurant",
    criteria: ["has_terrace","vegetarian_options","good_for_groups"]
  }),
  makePlace({
    id: "osm-node-13110772801",
    name: "Chez Yassine",
    latitude: 43.299547,
    longitude: 5.380614,
    neighborhood: "Longchamp",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-4629705576",
    name: "Chez Youcef",
    latitude: 43.294877,
    longitude: 5.38025,
    neighborhood: "Cours Julien",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-4918463632",
    name: "Chez Ze",
    latitude: 43.224677,
    longitude: 5.416824,
    neighborhood: "Littoral Sud",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["has_terrace","late_opening"]
  }),
  makePlace({
    id: "osm-node-9332861617",
    name: "ChezMax",
    latitude: 43.264705,
    longitude: 5.408966,
    neighborhood: "Littoral Sud",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: ["allows_cb_no_minimum"]
  }),
  makePlace({
    id: "osm-node-4405959294",
    name: "Chicken",
    latitude: 43.299299,
    longitude: 5.38248,
    neighborhood: "Longchamp",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["good_for_groups"]
  }),
  makePlace({
    id: "osm-node-13695962701",
    name: "Chicken chicken",
    latitude: 43.301608,
    longitude: 5.376195,
    neighborhood: "Marseille",
    address: "14 Rue Bernard du Bois, Marseille",
    category: "Restaurant",
    criteria: ["late_opening","good_for_groups"]
  }),
  makePlace({
    id: "osm-node-7257360561",
    name: "Chicken La Viste",
    latitude: 43.362376,
    longitude: 5.35756,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["good_for_groups"]
  }),
  makePlace({
    id: "osm-node-1240848992",
    name: "Chicken Street",
    latitude: 43.298806,
    longitude: 5.376096,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["good_for_groups"]
  }),
  makePlace({
    id: "osm-way-284250932",
    name: "Chicken Street",
    latitude: 43.317244,
    longitude: 5.382344,
    neighborhood: "Belle de Mai",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["has_terrace","late_opening","good_for_groups"]
  }),
  makePlace({
    id: "osm-way-69613197",
    name: "Chicken World",
    latitude: 43.354552,
    longitude: 5.332846,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["good_for_groups"]
  }),
  makePlace({
    id: "osm-node-4393393264",
    name: "chickenville",
    latitude: 43.30695,
    longitude: 5.373503,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["good_for_groups"]
  }),
  makePlace({
    id: "osm-node-3756217302",
    name: "Chiken Bawa",
    latitude: 43.38084,
    longitude: 5.357365,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["good_for_groups"]
  }),
  makePlace({
    id: "osm-node-9634033738",
    name: "Chiken Food",
    latitude: 43.356577,
    longitude: 5.357259,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["vegetarian_options"]
  }),
  makePlace({
    id: "osm-node-13105756030",
    name: "Chikin Bang",
    latitude: 43.305962,
    longitude: 5.365071,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["good_for_groups"]
  }),
  makePlace({
    id: "osm-node-9737671901",
    name: "Chocolats Linares",
    latitude: 43.34075,
    longitude: 5.351431,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-5140103027",
    name: "Chronodrive",
    latitude: 43.287081,
    longitude: 5.508425,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-8721177228",
    name: "ChungChun Ricedog Coreen",
    latitude: 43.30426,
    longitude: 5.367115,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["late_opening"]
  }),
  makePlace({
    id: "osm-node-12915062088",
    name: "Cia Amore",
    latitude: 43.29453,
    longitude: 5.375261,
    neighborhood: "Noailles",
    address: "Marseille",
    category: "Cafe",
    criteria: ["late_opening"]
  }),
  makePlace({
    id: "osm-node-1290866489",
    name: "Ciao Marcello",
    latitude: 43.296898,
    longitude: 5.369235,
    neighborhood: "Le Panier",
    address: "4 Rue du Lacydon, Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-10853049983",
    name: "Ciel - rooftop",
    latitude: 43.293787,
    longitude: 5.377422,
    neighborhood: "Noailles",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-12117244220",
    name: "Cine Bar",
    latitude: 43.298164,
    longitude: 5.384347,
    neighborhood: "Longchamp",
    address: "Marseille",
    category: "Bar",
    criteria: []
  }),
  makePlace({
    id: "osm-node-5541113892",
    name: "Cirta",
    latitude: 43.300759,
    longitude: 5.375913,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["late_opening"]
  }),
  makePlace({
    id: "osm-node-12246677676",
    name: "Citron Blanc",
    latitude: 43.257883,
    longitude: 5.394245,
    neighborhood: "Littoral Sud",
    address: "2 Place Leopold Baverel, Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-1910580776",
    name: "Class'croute",
    latitude: 43.290242,
    longitude: 5.378476,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["vegetarian_options","good_for_groups"]
  }),
  makePlace({
    id: "osm-node-9513605009",
    name: "Claudia Ristorante",
    latitude: 43.285338,
    longitude: 5.377098,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-12806190883",
    name: "Club Cesar",
    latitude: 43.289664,
    longitude: 5.376163,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-673004191",
    name: "Club Chiken",
    latitude: 43.32244,
    longitude: 5.412839,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["good_for_groups"]
  }),
  makePlace({
    id: "osm-node-4426183787",
    name: "Club de la BDN",
    latitude: 43.248298,
    longitude: 5.381563,
    neighborhood: "Littoral Sud",
    address: "Marseille",
    category: "Cafe",
    criteria: []
  }),
  makePlace({
    id: "osm-node-12648186415",
    name: "Co Bay",
    latitude: 43.284612,
    longitude: 5.38529,
    neighborhood: "Marseille",
    address: "26 Rue du Rouet, Marseille",
    category: "Restaurant",
    criteria: ["has_terrace","late_opening","vegetarian_options"]
  }),
  makePlace({
    id: "osm-node-13376371685",
    name: "Coco",
    latitude: 43.293758,
    longitude: 5.375324,
    neighborhood: "Noailles",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["has_terrace"]
  }),
  makePlace({
    id: "osm-way-68964754",
    name: "Coco Swing Ballroom",
    instagram_handle: "cocoswingmarseille",
    latitude: 43.295115,
    longitude: 5.401726,
    neighborhood: "Marseille",
    address: "8 Rue du Lieutenant Jean-Baptiste Meschi, Marseille",
    category: "Restaurant",
    criteria: ["live_music_or_dj"]
  }),
  makePlace({
    id: "osm-node-9527318247",
    name: "Cocobongo",
    latitude: 43.264724,
    longitude: 5.373771,
    neighborhood: "Littoral Sud",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-12128647366",
    name: "Cocotero",
    latitude: 43.291112,
    longitude: 5.356348,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["late_opening"]
  }),
  makePlace({
    id: "osm-node-10942365005",
    name: "Coffeat",
    latitude: 43.363573,
    longitude: 5.347161,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Cafe",
    criteria: []
  }),
  makePlace({
    id: "osm-node-7847450779",
    name: "Coffee bar CROUS",
    latitude: 43.229452,
    longitude: 5.440767,
    neighborhood: "Littoral Sud",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["good_for_groups"]
  }),
  makePlace({
    id: "osm-node-9634033736",
    name: "Coffee Istanbul",
    latitude: 43.357237,
    longitude: 5.357782,
    neighborhood: "Le Panier",
    address: "Avenue de la Viste, Marseille",
    category: "Restaurant",
    criteria: ["good_for_groups"]
  }),
  makePlace({
    id: "osm-node-6570625348",
    name: "Coffee Time",
    latitude: 43.298999,
    longitude: 5.375857,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Cafe",
    criteria: ["has_terrace"]
  }),
  makePlace({
    id: "osm-node-12590483601",
    name: "Coffee&Bakery",
    instagram_handle: "coffeeandbakery.marseille",
    latitude: 43.300001,
    longitude: 5.370512,
    neighborhood: "Le Panier",
    address: "Passage des Folies Bergeres, Marseille",
    category: "Cafe",
    criteria: []
  }),
  makePlace({
    id: "osm-node-10772668068",
    name: "Coin Cantine",
    latitude: 43.263917,
    longitude: 5.410584,
    neighborhood: "Littoral Sud",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["has_terrace"]
  }),
  makePlace({
    id: "osm-node-5817418405",
    name: "Collins",
    latitude: 43.296462,
    longitude: 5.371578,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["has_terrace"]
  }),
  makePlace({
    id: "osm-node-5265778668",
    name: "Columbus Cafe & Co",
    latitude: 43.294993,
    longitude: 5.477631,
    neighborhood: "Marseille",
    address: "Route de la Sabliere, centre commercial Geant Casino, Marseille",
    category: "Cafe",
    criteria: []
  }),
  makePlace({
    id: "osm-node-8195328199",
    name: "Columbus Cafe & Co",
    latitude: 43.278648,
    longitude: 5.424813,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Cafe",
    criteria: []
  }),
  makePlace({
    id: "osm-node-2123959864",
    name: "Comme a la maison",
    latitude: 43.29526,
    longitude: 5.393698,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["good_for_groups"]
  }),
  makePlace({
    id: "osm-node-9509254210",
    name: "Commerce d'Alimentation Generale",
    latitude: 43.362541,
    longitude: 5.320955,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-5130614310",
    name: "Compagnie des Vins et des Spiritueux",
    latitude: 43.342954,
    longitude: 5.446542,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-11768935369",
    name: "Compose",
    latitude: 43.290253,
    longitude: 5.372301,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Cafe",
    criteria: []
  }),
  makePlace({
    id: "osm-node-2365950578",
    name: "COMPTOIR DE DEBRRASSAGE",
    latitude: 43.296827,
    longitude: 5.360662,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Cafe",
    criteria: ["has_terrace","vegetarian_options","allows_cb_no_minimum"]
  }),
  makePlace({
    id: "osm-node-2261496753",
    name: "Comptoir des Docks",
    latitude: 43.308765,
    longitude: 5.367096,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["late_opening"]
  }),
  makePlace({
    id: "osm-node-9566462051",
    name: "Comptoir des Saveurs",
    latitude: 43.312069,
    longitude: 5.465047,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-6983370975",
    name: "Comptoir libanais",
    latitude: 43.242111,
    longitude: 5.39665,
    neighborhood: "Littoral Sud",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-8919525951",
    name: "Comptoir Longchamp",
    latitude: 43.303857,
    longitude: 5.392993,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-12192727079",
    name: "Comptoir Moderne",
    latitude: 43.295761,
    longitude: 5.402059,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Bar",
    criteria: []
  }),
  makePlace({
    id: "osm-node-1439859469",
    name: "Connolly's Corner",
    latitude: 43.238729,
    longitude: 5.365045,
    neighborhood: "Littoral Sud",
    address: "2 Avenue de la madrague de Montredon, Marseille",
    category: "Bar",
    criteria: ["has_terrace","late_opening","allows_cb_no_minimum"]
  }),
  makePlace({
    id: "osm-way-67714749",
    name: "Conseil regional de Provence-Alpes-Cote d'Azur",
    instagram_handle: "maregionsud",
    latitude: 43.301273,
    longitude: 5.373335,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["wheelchair_accessible"]
  }),
  makePlace({
    id: "osm-node-7384668445",
    name: "Conserverie La Belle Iloise",
    latitude: 43.291852,
    longitude: 5.377533,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: ["wheelchair_accessible"]
  }),
  makePlace({
    id: "osm-node-5600546124",
    name: "Coogee",
    latitude: 43.287642,
    longitude: 5.390745,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Cafe",
    criteria: []
  }),
  makePlace({
    id: "osm-node-11305223723",
    name: "Cookiss",
    latitude: 43.298755,
    longitude: 5.365382,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-13105617613",
    name: "Cookiss",
    latitude: 43.306893,
    longitude: 5.364585,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-9073761350",
    name: "Copper Bay",
    latitude: 43.288594,
    longitude: 5.373005,
    neighborhood: "Marseille",
    address: "36 Boulevard Notre-Dame, Marseille",
    category: "Bar",
    criteria: ["has_terrace","late_opening"]
  }),
  makePlace({
    id: "osm-way-154571218",
    name: "Coq d'or Center",
    latitude: 43.278827,
    longitude: 5.422784,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-13798975606",
    name: "Coquetel Club",
    latitude: 43.285272,
    longitude: 5.381891,
    neighborhood: "Marseille",
    address: "15 Rue Louis Maurel, Marseille",
    category: "Bar",
    criteria: ["late_opening"]
  }),
  makePlace({
    id: "osm-way-153540554",
    name: "Coquillages Claude",
    latitude: 43.250674,
    longitude: 5.403172,
    neighborhood: "Littoral Sud",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-9017485600",
    name: "Coquillages de Montredon",
    latitude: 43.236149,
    longitude: 5.362085,
    neighborhood: "Littoral Sud",
    address: "79 Avenue de la Madrague de Montredon, Marseille",
    category: "Restaurant",
    criteria: ["wheelchair_accessible","allows_cb_no_minimum"]
  }),
  makePlace({
    id: "osm-node-3621363124",
    name: "Coquillages Degustation",
    latitude: 43.288448,
    longitude: 5.359423,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-1554237122",
    name: "Coquillages Henri",
    latitude: 43.304197,
    longitude: 5.41326,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-way-154802846",
    name: "Coquillages Pierrot",
    latitude: 43.270168,
    longitude: 5.387963,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-364622149",
    name: "Coquille",
    latitude: 43.293053,
    longitude: 5.372952,
    neighborhood: "Noailles",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["has_terrace"]
  }),
  makePlace({
    id: "osm-node-1933802162",
    name: "Corn bread",
    instagram_handle: "cornbreadmarseille",
    latitude: 43.294012,
    longitude: 5.384876,
    neighborhood: "Cours Julien",
    address: "17 Rue des Trois Rois, Marseille",
    category: "Restaurant",
    criteria: ["has_terrace","has_wifi","late_opening","good_for_groups"]
  }),
  makePlace({
    id: "osm-node-13156787301",
    name: "Corn Bread Cafe",
    instagram_handle: "cornbreadcafe_",
    latitude: 43.294025,
    longitude: 5.384867,
    neighborhood: "Cours Julien",
    address: "15 Rue des Trois Rois, Marseille",
    category: "Commerce alimentaire",
    criteria: ["has_wifi"]
  }),
  makePlace({
    id: "osm-node-9277867308",
    name: "Corner Burger",
    latitude: 43.269003,
    longitude: 5.403799,
    neighborhood: "Littoral Sud",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["has_terrace","late_opening","good_for_groups"]
  }),
  makePlace({
    id: "osm-node-4235386307",
    name: "Corner cafe",
    latitude: 43.292919,
    longitude: 5.379911,
    neighborhood: "Cours Julien",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["has_terrace"]
  }),
  makePlace({
    id: "osm-node-12314146473",
    name: "Corto",
    latitude: 43.279487,
    longitude: 5.387175,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Cafe",
    criteria: []
  }),
  makePlace({
    id: "osm-node-2059612345",
    name: "Cote Cours",
    latitude: 43.292941,
    longitude: 5.383914,
    neighborhood: "Cours Julien",
    address: "79 Cours Julien, Marseille",
    category: "Restaurant",
    criteria: ["late_opening","vegetarian_options"]
  }),
  makePlace({
    id: "osm-node-1871305277",
    name: "Cote et Mer",
    latitude: 43.296214,
    longitude: 5.39091,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-3807748866",
    name: "Cote Rue",
    latitude: 43.297372,
    longitude: 5.366084,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["has_wifi","late_opening"]
  }),
  makePlace({
    id: "osm-node-4073593041",
    name: "Cote Sushi",
    latitude: 43.30422,
    longitude: 5.36745,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["late_opening","good_for_groups"]
  }),
  makePlace({
    id: "osm-node-9216483771",
    name: "Cote Sushi",
    latitude: 43.269799,
    longitude: 5.387585,
    neighborhood: "Littoral Sud",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["late_opening"]
  }),
  makePlace({
    id: "osm-node-3400324539",
    name: "Coucagne",
    latitude: 43.281651,
    longitude: 5.374538,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-5533534983",
    name: "Court Circuit",
    latitude: 43.291936,
    longitude: 5.384772,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["has_terrace","late_opening"]
  }),
  makePlace({
    id: "osm-node-8047211343",
    name: "Courtepaille",
    latitude: 43.29081,
    longitude: 5.494838,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["late_opening"]
  }),
  makePlace({
    id: "osm-node-11725373371",
    name: "Couzynade",
    instagram_handle: "la_couzynade",
    latitude: 43.296535,
    longitude: 5.387072,
    neighborhood: "Cours Julien",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-1941847109",
    name: "Cremino",
    latitude: 43.29534,
    longitude: 5.375133,
    neighborhood: "Noailles",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["good_for_groups"]
  }),
  makePlace({
    id: "osm-node-7925474560",
    name: "Crep' on fire",
    latitude: 43.28769,
    longitude: 5.464478,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-10942364506",
    name: "Crep'eat",
    latitude: 43.36392,
    longitude: 5.349342,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-way-68961825",
    name: "Creperie bar a vins Ici",
    latitude: 43.301391,
    longitude: 5.398854,
    neighborhood: "Marseille",
    address: "19 Avenue du Marechal Foch, Marseille",
    category: "Restaurant",
    criteria: ["late_opening"]
  }),
  makePlace({
    id: "osm-node-2368374080",
    name: "Cristal Liminana",
    latitude: 43.293099,
    longitude: 5.406038,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-4016684179",
    name: "Ctazy Sushi",
    latitude: 43.271315,
    longitude: 5.428222,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["good_for_groups"]
  }),
  makePlace({
    id: "osm-node-8045278106",
    name: "Ctc Artisan Restaurateur - Le Campus",
    latitude: 43.361271,
    longitude: 5.340587,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-11851312115",
    name: "Cuisine Verticale Pizzeria",
    latitude: 43.306749,
    longitude: 5.394923,
    neighborhood: "Belle de Mai",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-4184108589",
    name: "Cup of Tea",
    latitude: 43.297326,
    longitude: 5.369155,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Cafe",
    criteria: ["has_terrace","wheelchair_accessible"]
  }),
  makePlace({
    id: "osm-node-3790494525",
    name: "Da Paolo",
    latitude: 43.247489,
    longitude: 5.397381,
    neighborhood: "Littoral Sud",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["wheelchair_accessible"]
  }),
  makePlace({
    id: "osm-node-9922494195",
    name: "Daily Cat",
    latitude: 43.284506,
    longitude: 5.358469,
    neighborhood: "Malmousque",
    address: "Marseille",
    category: "Cafe",
    criteria: ["has_terrace"]
  }),
  makePlace({
    id: "osm-node-11122173579",
    name: "Dakao",
    latitude: 43.295056,
    longitude: 5.376172,
    neighborhood: "Noailles",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["has_terrace"]
  }),
  makePlace({
    id: "osm-node-12693771553",
    name: "Dalloyau",
    latitude: 43.306992,
    longitude: 5.364004,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-9668050903",
    name: "Damascus",
    latitude: 43.289017,
    longitude: 5.378564,
    neighborhood: "Marseille",
    address: "104 Rue Paradis, Marseille",
    category: "Cafe",
    criteria: []
  }),
  makePlace({
    id: "osm-node-5041268922",
    name: "Damdy's",
    latitude: 43.296018,
    longitude: 5.367337,
    neighborhood: "Le Panier",
    address: "31 Rue de la Loge / Carriera de la Lotja, Marseille",
    category: "Cafe",
    criteria: ["has_terrace","vegetarian_options","allows_cb_no_minimum"]
  }),
  makePlace({
    id: "osm-node-7208201033",
    name: "Dandy'o",
    latitude: 43.310188,
    longitude: 5.367822,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["has_terrace"]
  }),
  makePlace({
    id: "osm-node-12800792369",
    name: "David",
    latitude: 43.263626,
    longitude: 5.374082,
    neighborhood: "Littoral Sud",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["good_for_groups"]
  }),
  makePlace({
    id: "osm-node-5407834233",
    name: "day by day",
    latitude: 43.298753,
    longitude: 5.398295,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-4241584589",
    name: "Dayeon",
    latitude: 43.290571,
    longitude: 5.38162,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-3105395330",
    name: "Dayo",
    latitude: 43.296902,
    longitude: 5.367166,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-2375892952",
    name: "Debussy",
    latitude: 43.293023,
    longitude: 5.373938,
    neighborhood: "Noailles",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-6303341250",
    name: "Deep Coffee",
    latitude: 43.293498,
    longitude: 5.375149,
    neighborhood: "Noailles",
    address: "15 Rue Glandeves, Marseille",
    category: "Cafe",
    criteria: ["has_terrace","has_wifi","wheelchair_accessible","vegetarian_options","allows_cb_no_minimum","laptop_friendly"]
  }),
  makePlace({
    id: "osm-node-2608216145",
    name: "Degustation de Provence",
    latitude: 43.286897,
    longitude: 5.389624,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Bar",
    criteria: []
  }),
  makePlace({
    id: "osm-node-12788919201",
    name: "Deia Coffee & Kitchen",
    latitude: 43.293786,
    longitude: 5.376049,
    neighborhood: "Noailles",
    address: "Marseille",
    category: "Cafe",
    criteria: []
  }),
  makePlace({
    id: "osm-node-2103599852",
    name: "Dejeuner en Ville",
    latitude: 43.296786,
    longitude: 5.373355,
    neighborhood: "Noailles",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-3400324540",
    name: "Del'oli",
    latitude: 43.281829,
    longitude: 5.374713,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-way-157791901",
    name: "Deli Donut",
    latitude: 43.299725,
    longitude: 5.478955,
    neighborhood: "Marseille",
    address: "227 Route des Trois Lucs a La Valentine, Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-9634033722",
    name: "Delice Cigkofte",
    latitude: 43.361444,
    longitude: 5.357278,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["good_for_groups"]
  }),
  makePlace({
    id: "osm-node-7790866438",
    name: "Delice des Aures",
    latitude: 43.308471,
    longitude: 5.381871,
    neighborhood: "Longchamp",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-5409844220",
    name: "Delice Paradis",
    latitude: 43.277334,
    longitude: 5.383442,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-12609730277",
    name: "Delicepol",
    latitude: 43.285374,
    longitude: 5.394793,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-4087718753",
    name: "Delices de Baille",
    latitude: 43.288558,
    longitude: 5.394225,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-13156787202",
    name: "Delices du port",
    latitude: 43.293853,
    longitude: 5.37485,
    neighborhood: "Noailles",
    address: "10 Rue Glandeves, Marseille",
    category: "Restaurant",
    criteria: ["has_terrace","vegetarian_options","good_for_groups"]
  }),
  makePlace({
    id: "osm-node-12920635004",
    name: "Delices Viet-Nam",
    latitude: 43.309823,
    longitude: 5.408611,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["vegetarian_options"]
  }),
  makePlace({
    id: "osm-node-3374843143",
    name: "Delici'Oz",
    latitude: 43.281591,
    longitude: 5.3814,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["late_opening","vegetarian_options","good_for_groups"]
  }),
  makePlace({
    id: "osm-node-5310285850",
    name: "Delicia Pizza",
    latitude: 43.352122,
    longitude: 5.439709,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["late_opening"]
  }),
  makePlace({
    id: "osm-node-7346029773",
    name: "Delicia Rotisserie",
    latitude: 43.35122,
    longitude: 5.43847,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-way-69133158",
    name: "Delizie",
    latitude: 43.283647,
    longitude: 5.383689,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-2519951587",
    name: "Denis Bar",
    latitude: 43.360698,
    longitude: 5.330444,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Cafe",
    criteria: ["has_terrace"]
  }),
  makePlace({
    id: "osm-node-12766454301",
    name: "Derive",
    latitude: 43.291101,
    longitude: 5.35622,
    neighborhood: "Marseille",
    address: "49 Rue de Suez, Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-12898919817",
    name: "Despy Tacos Burger",
    latitude: 43.338391,
    longitude: 5.392077,
    neighborhood: "Belle de Mai",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["good_for_groups"]
  }),
  makePlace({
    id: "osm-node-2012629936",
    name: "Destockage Saint-Michel",
    latitude: 43.293351,
    longitude: 5.385598,
    neighborhood: "Cours Julien",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-12518283701",
    name: "Di Carlo",
    latitude: 43.299336,
    longitude: 5.368709,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Bar",
    criteria: []
  }),
  makePlace({
    id: "osm-node-5059169223",
    name: "Dilatante",
    latitude: 43.278905,
    longitude: 5.303714,
    neighborhood: "Malmousque",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["vegetarian_options"]
  }),
  makePlace({
    id: "osm-node-2031102957",
    name: "Dinner",
    latitude: 43.305107,
    longitude: 5.382836,
    neighborhood: "Belle de Mai",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["good_for_groups"]
  }),
  makePlace({
    id: "osm-node-13738061001",
    name: "Diorama",
    instagram_handle: "diorama_spc",
    latitude: 43.291253,
    longitude: 5.384116,
    neighborhood: "Marseille",
    address: "15 Rue des Bergers, Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-13112822899",
    name: "Distric Five",
    latitude: 43.30102,
    longitude: 5.398803,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["has_terrace","late_opening","good_for_groups"]
  }),
  makePlace({
    id: "osm-node-13105756027",
    name: "District",
    latitude: 43.306176,
    longitude: 5.364846,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["good_for_groups"]
  }),
  makePlace({
    id: "osm-node-11933035150",
    name: "Djerba",
    latitude: 43.295379,
    longitude: 5.376737,
    neighborhood: "Noailles",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["has_terrace"]
  }),
  makePlace({
    id: "osm-node-6425944270",
    name: "DK'S Food",
    latitude: 43.306428,
    longitude: 5.380216,
    neighborhood: "Longchamp",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["good_for_groups"]
  }),
  makePlace({
    id: "osm-node-2261517530",
    name: "Dock of the Bay",
    latitude: 43.308592,
    longitude: 5.36747,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-6588582161",
    name: "Dolce Pizza",
    latitude: 43.289106,
    longitude: 5.372859,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["late_opening","vegetarian_options","good_for_groups"]
  }),
  makePlace({
    id: "osm-node-1628125191",
    name: "Dome N Bio",
    latitude: 43.316732,
    longitude: 5.404725,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-6034079517",
    name: "Domino's",
    latitude: 43.264713,
    longitude: 5.391711,
    neighborhood: "Littoral Sud",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["good_for_groups"]
  }),
  makePlace({
    id: "osm-node-12820856132",
    name: "Domino's",
    latitude: 43.290615,
    longitude: 5.370172,
    neighborhood: "Saint-Victor",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["late_opening","vegetarian_options","good_for_groups"]
  }),
  makePlace({
    id: "osm-node-2059563926",
    name: "Donkey Kong",
    latitude: 43.293329,
    longitude: 5.383781,
    neighborhood: "Cours Julien",
    address: "Cours Julien, Marseille",
    category: "Bar",
    criteria: []
  }),
  makePlace({
    id: "osm-node-13204284175",
    name: "Dorati",
    instagram_handle: "dorati_marseille",
    latitude: 43.301796,
    longitude: 5.393931,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-2010715829",
    name: "Dos Hermanas",
    latitude: 43.293348,
    longitude: 5.384723,
    neighborhood: "Cours Julien",
    address: "Marseille",
    category: "Bar",
    criteria: ["wheelchair_accessible"]
  }),
  makePlace({
    id: "osm-node-5193941544",
    name: "Double Cuisson",
    latitude: 43.296671,
    longitude: 5.374034,
    neighborhood: "Noailles",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-7005835113",
    name: "Douce Pizza",
    latitude: 43.257983,
    longitude: 5.403595,
    neighborhood: "Littoral Sud",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["late_opening","good_for_groups"]
  }),
  makePlace({
    id: "osm-node-7362511932",
    name: "Douces recoltes",
    latitude: 43.291094,
    longitude: 5.359247,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: ["wheelchair_accessible"]
  }),
  makePlace({
    id: "osm-node-4170982190",
    name: "Douces recoltes",
    latitude: 43.28356,
    longitude: 5.374972,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-10963207420",
    name: "Douces Recoltes",
    latitude: 43.271526,
    longitude: 5.386816,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-13927066801",
    name: "Douceur piquante",
    latitude: 43.296849,
    longitude: 5.381969,
    neighborhood: "Cours Julien",
    address: "11 Rue Guy Moquet, Marseille",
    category: "Restaurant",
    criteria: ["late_opening"]
  }),
  makePlace({
    id: "osm-node-5814607454",
    name: "Down town",
    latitude: 43.323769,
    longitude: 5.452638,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-12705295398",
    name: "Downstairs",
    latitude: 43.292204,
    longitude: 5.366917,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Bar",
    criteria: []
  }),
  makePlace({
    id: "osm-node-6428674021",
    name: "Dragees Reynaud Boutique d'usine",
    latitude: 43.300239,
    longitude: 5.502026,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-4591148708",
    name: "Drogheria Belle de Mai",
    latitude: 43.310703,
    longitude: 5.387248,
    neighborhood: "Belle de Mai",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-8390310574",
    name: "Droguy",
    latitude: 43.297608,
    longitude: 5.38059,
    neighborhood: "Cours Julien",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: ["late_opening"]
  }),
  makePlace({
    id: "osm-way-68964257",
    name: "Droit au d'widch",
    latitude: 43.290224,
    longitude: 5.399459,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["good_for_groups"]
  }),
  makePlace({
    id: "osm-node-6529828436",
    name: "Droit au fut",
    latitude: 43.300611,
    longitude: 5.36435,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Bar",
    criteria: []
  }),
  makePlace({
    id: "osm-node-13137097809",
    name: "Dromel Aine",
    latitude: 43.284513,
    longitude: 5.384973,
    neighborhood: "Marseille",
    address: "19 Avenue du Prado, Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-2010715842",
    name: "Drunken Sailor",
    latitude: 43.294844,
    longitude: 5.384442,
    neighborhood: "Cours Julien",
    address: "Marseille",
    category: "Bar",
    criteria: []
  }),
  makePlace({
    id: "osm-node-3439591713",
    name: "Du cote d'Antalia",
    latitude: 43.370604,
    longitude: 5.356097,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-5838144585",
    name: "Du soleil dans le panier",
    latitude: 43.288059,
    longitude: 5.359512,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-1042892080",
    name: "Dubble",
    latitude: 43.275713,
    longitude: 5.389075,
    neighborhood: "Marseille",
    address: "Avenue du Prado, Marseille",
    category: "Restaurant",
    criteria: ["has_wifi","wheelchair_accessible"]
  }),
  makePlace({
    id: "osm-node-2121214963",
    name: "Dubble",
    latitude: 43.304446,
    longitude: 5.366589,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["has_wifi"]
  }),
  makePlace({
    id: "osm-node-5405765490",
    name: "Dubble",
    latitude: 43.358876,
    longitude: 5.337388,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["has_terrace","good_for_groups"]
  }),
  makePlace({
    id: "osm-node-6779256994",
    name: "Dubble",
    latitude: 43.310079,
    longitude: 5.367789,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["has_terrace","good_for_groups"]
  }),
  makePlace({
    id: "osm-node-7752785819",
    name: "Dubble",
    latitude: 43.279347,
    longitude: 5.405546,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["vegetarian_options"]
  }),
  makePlace({
    id: "osm-way-1228912031",
    name: "Dubble",
    latitude: 43.325335,
    longitude: 5.377751,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["good_for_groups"]
  }),
  makePlace({
    id: "osm-node-4235386315",
    name: "Dubble",
    latitude: 43.290741,
    longitude: 5.379239,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-5817465847",
    name: "Dubble",
    latitude: 43.289357,
    longitude: 5.395937,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-way-153574298",
    name: "Duc Dat",
    latitude: 43.271813,
    longitude: 5.409417,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-12803700291",
    name: "Durum",
    latitude: 43.307897,
    longitude: 5.402389,
    neighborhood: "Marseille",
    address: "6 Avenue de Montolivet, Marseille",
    category: "Restaurant",
    criteria: ["good_for_groups"]
  }),
  makePlace({
    id: "osm-node-13825253401",
    name: "Durum",
    latitude: 43.293324,
    longitude: 5.385717,
    neighborhood: "Cours Julien",
    address: "19 Rue Saint-Michel, Marseille",
    category: "Restaurant",
    criteria: ["late_opening","vegetarian_options"]
  }),
  makePlace({
    id: "osm-node-12117289879",
    name: "Durum kebab",
    latitude: 43.296075,
    longitude: 5.381324,
    neighborhood: "Cours Julien",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-10896341036",
    name: "Dutch Cafe",
    latitude: 43.299328,
    longitude: 5.368061,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Cafe",
    criteria: []
  }),
  makePlace({
    id: "osm-node-9929575759",
    name: "Dwish Burger",
    latitude: 43.294551,
    longitude: 5.384764,
    neighborhood: "Cours Julien",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["good_for_groups"]
  }),
  makePlace({
    id: "osm-way-40254512",
    name: "E.Leclerc",
    latitude: 43.233001,
    longitude: 5.401551,
    neighborhood: "Littoral Sud",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-4087718751",
    name: "EasySushi",
    latitude: 43.288635,
    longitude: 5.393261,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-13137564439",
    name: "Eat Salad",
    latitude: 43.283302,
    longitude: 5.385647,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["has_terrace","good_for_groups"]
  }),
  makePlace({
    id: "osm-node-12201233963",
    name: "Eater Food Club",
    latitude: 43.293518,
    longitude: 5.403405,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["late_opening","good_for_groups"]
  }),
  makePlace({
    id: "osm-node-11513710469",
    name: "Eclectique - le jardin",
    latitude: 43.302725,
    longitude: 5.390908,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Cafe",
    criteria: []
  }),
  makePlace({
    id: "osm-node-4127983367",
    name: "Eden Viandes Boucherie",
    latitude: 43.30983,
    longitude: 5.400536,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-6060022981",
    name: "ego",
    latitude: 43.293141,
    longitude: 5.383871,
    neighborhood: "Cours Julien",
    address: "Marseille",
    category: "Cafe",
    criteria: ["has_terrace","late_opening","vegetarian_options"]
  }),
  makePlace({
    id: "osm-node-13048864901",
    name: "ego",
    latitude: 43.297601,
    longitude: 5.370783,
    neighborhood: "Le Panier",
    address: "33 Grand Rue, Marseille",
    category: "Cafe",
    criteria: []
  }),
  makePlace({
    id: "osm-node-9803477679",
    name: "Ekume",
    latitude: 43.290813,
    longitude: 5.367554,
    neighborhood: "Saint-Victor",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-1653249114",
    name: "El Ache de Cuba",
    latitude: 43.292632,
    longitude: 5.383354,
    neighborhood: "Cours Julien",
    address: "Marseille",
    category: "Bar",
    criteria: []
  }),
  makePlace({
    id: "osm-node-9929658690",
    name: "El Bahdja",
    latitude: 43.29605,
    longitude: 5.379573,
    neighborhood: "Cours Julien",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["has_terrace","good_for_groups"]
  }),
  makePlace({
    id: "osm-node-12959202902",
    name: "El Barrio Marsella",
    instagram_handle: "elbarriomarsella",
    latitude: 43.295408,
    longitude: 5.379225,
    neighborhood: "Cours Julien",
    address: "14a Rue d'Aubagne, Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-way-1518057718",
    name: "El Cabane",
    latitude: 43.272168,
    longitude: 5.391195,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["has_terrace","good_for_groups"]
  }),
  makePlace({
    id: "osm-node-13395877402",
    name: "El Cholo",
    latitude: 43.293866,
    longitude: 5.386867,
    neighborhood: "Cours Julien",
    address: "4 Rue Saint-Pierre, Marseille",
    category: "Restaurant",
    criteria: ["late_opening"]
  }),
  makePlace({
    id: "osm-node-3594277008",
    name: "El Chourouk",
    latitude: 43.301791,
    longitude: 5.377901,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-1282652843",
    name: "El Cubano",
    latitude: 43.291669,
    longitude: 5.409893,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Bar",
    criteria: []
  }),
  makePlace({
    id: "osm-node-5628777176",
    name: "El Kahina",
    latitude: 43.300734,
    longitude: 5.376577,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-9054265543",
    name: "El Marhala",
    latitude: 43.311457,
    longitude: 5.377927,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Cafe",
    criteria: []
  }),
  makePlace({
    id: "osm-node-2038033356",
    name: "El Paseo",
    latitude: 43.29366,
    longitude: 5.385355,
    neighborhood: "Cours Julien",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-4627151989",
    name: "El Rincon Argentino",
    latitude: 43.291404,
    longitude: 5.38459,
    neighborhood: "Marseille",
    address: "25 Rue des Bergers, Marseille",
    category: "Cafe",
    criteria: ["late_opening"]
  }),
  makePlace({
    id: "osm-node-1992825610",
    name: "El Santo Cachon",
    latitude: 43.293709,
    longitude: 5.388919,
    neighborhood: "Cours Julien",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-3594277009",
    name: "El-Bahdja",
    latitude: 43.30192,
    longitude: 5.379234,
    neighborhood: "Longchamp",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-6627597556",
    name: "Elodie et la chocolaterie",
    latitude: 43.308273,
    longitude: 5.436273,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-6542584314",
    name: "Elyse",
    latitude: 43.308142,
    longitude: 5.431231,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-9253751460",
    name: "Elyssa",
    latitude: 43.292734,
    longitude: 5.368906,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["late_opening"]
  }),
  makePlace({
    id: "osm-node-5148076774",
    name: "Emile",
    latitude: 43.273345,
    longitude: 5.391264,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Bar",
    criteria: ["vegetarian_options"]
  }),
  makePlace({
    id: "osm-node-12692711395",
    name: "Emilie and the cool kids",
    latitude: 43.306737,
    longitude: 5.365274,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Cafe",
    criteria: ["wheelchair_accessible"]
  }),
  makePlace({
    id: "osm-node-8652900369",
    name: "Emilio",
    latitude: 43.268061,
    longitude: 5.388894,
    neighborhood: "Littoral Sud",
    address: "70 Avenue de Mazargues, Marseille",
    category: "Restaurant",
    criteria: ["has_terrace"]
  }),
  makePlace({
    id: "osm-node-6752468611",
    name: "EMKIPOP @Marseille",
    latitude: 43.283512,
    longitude: 5.374906,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Cafe",
    criteria: []
  }),
  makePlace({
    id: "osm-way-154605699",
    name: "Emsalem King Kasher",
    latitude: 43.277639,
    longitude: 5.416894,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-12858804705",
    name: "Encore un morceau",
    instagram_handle: "encoreunmorceau",
    latitude: 43.284512,
    longitude: 5.358551,
    neighborhood: "Malmousque",
    address: "2 Place Saint-Eugene, Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-4961896599",
    name: "Eni",
    latitude: 43.254864,
    longitude: 5.382266,
    neighborhood: "Littoral Sud",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: ["late_opening"]
  }),
  makePlace({
    id: "osm-node-2120175327",
    name: "Entre Terre et Mer",
    latitude: 43.299256,
    longitude: 5.368737,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["has_wifi","late_opening"]
  }),
  makePlace({
    id: "osm-node-1039463411",
    name: "Epicerie",
    latitude: 43.295725,
    longitude: 5.385661,
    neighborhood: "Cours Julien",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-11511158171",
    name: "Epicerie Anis",
    latitude: 43.3009,
    longitude: 5.397447,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-11136447953",
    name: "Epicerie Bazarette",
    latitude: 43.291654,
    longitude: 5.384396,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-13337732550",
    name: "Epicerie de Lodi",
    latitude: 43.289454,
    longitude: 5.387288,
    neighborhood: "Marseille",
    address: "77 Rue de Lodi, Marseille",
    category: "Commerce alimentaire",
    criteria: ["late_opening"]
  }),
  makePlace({
    id: "osm-node-8910665517",
    name: "Epicerie Du Panier",
    latitude: 43.29719,
    longitude: 5.365668,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-7357224758",
    name: "Epicerie Fiorentina",
    latitude: 43.290197,
    longitude: 5.366461,
    neighborhood: "Saint-Victor",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-5119639618",
    name: "Epicerie l'Ideal",
    latitude: 43.295729,
    longitude: 5.379023,
    neighborhood: "Cours Julien",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-way-153545039",
    name: "Epicerie Pain Boucherie",
    latitude: 43.229105,
    longitude: 5.401444,
    neighborhood: "Littoral Sud",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-2545442586",
    name: "Epicerie Paysanne Adele",
    latitude: 43.295364,
    longitude: 5.390244,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-7837399517",
    name: "Epicerie solidaire - BKOL",
    latitude: 43.269415,
    longitude: 5.413382,
    neighborhood: "Littoral Sud",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-5139621769",
    name: "Equinoxe",
    latitude: 43.248898,
    longitude: 5.417376,
    neighborhood: "Littoral Sud",
    address: "Marseille",
    category: "Cafe",
    criteria: []
  }),
  makePlace({
    id: "osm-node-7829025630",
    name: "es Delices de Granoux",
    latitude: 43.298758,
    longitude: 5.398367,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-11584779367",
    name: "Espresso",
    latitude: 43.242933,
    longitude: 5.369854,
    neighborhood: "Littoral Sud",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-9073757972",
    name: "Essence",
    latitude: 43.288731,
    longitude: 5.37299,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Cafe",
    criteria: []
  }),
  makePlace({
    id: "osm-node-1209758730",
    name: "Estaminet du Camas",
    latitude: 43.295705,
    longitude: 5.396499,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Bar",
    criteria: []
  }),
  makePlace({
    id: "osm-node-6129511489",
    name: "Etoile",
    latitude: 43.300353,
    longitude: 5.400238,
    neighborhood: "Marseille",
    address: "37 Avenue du Marechal Foch, Marseille",
    category: "Restaurant",
    criteria: ["good_for_groups"]
  }),
  makePlace({
    id: "osm-node-739356904",
    name: "Exit Cafe",
    latitude: 43.293079,
    longitude: 5.371104,
    neighborhood: "Noailles",
    address: "Marseille",
    category: "Bar",
    criteria: ["has_terrace"]
  }),
  makePlace({
    id: "osm-way-357312233",
    name: "Exki",
    latitude: 43.303085,
    longitude: 5.380157,
    neighborhood: "Longchamp",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["wheelchair_accessible","vegetarian_options","allows_cb_no_minimum","good_for_groups"]
  }),
  makePlace({
    id: "osm-node-4374349387",
    name: "Ezio",
    latitude: 43.291061,
    longitude: 5.379315,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-11787422269",
    name: "Face a la mer (Restaurant-Pizzeria)",
    latitude: 43.250251,
    longitude: 5.375472,
    neighborhood: "Littoral Sud",
    address: "227 Avenue Pierre Mendes France, Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-9929575760",
    name: "Facefood",
    latitude: 43.294584,
    longitude: 5.384964,
    neighborhood: "Cours Julien",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["good_for_groups"]
  }),
  makePlace({
    id: "osm-node-13112852513",
    name: "Factory Food",
    latitude: 43.301164,
    longitude: 5.398614,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["has_terrace","late_opening","wheelchair_accessible","vegetarian_options","allows_cb_no_minimum","good_for_groups"]
  }),
  makePlace({
    id: "osm-node-9506012517",
    name: "Factory kebab",
    latitude: 43.316805,
    longitude: 5.368889,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["good_for_groups"]
  }),
  makePlace({
    id: "osm-node-9858335529",
    name: "Farinette",
    latitude: 43.296967,
    longitude: 5.367476,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-11672609870",
    name: "Farofa",
    latitude: 43.303958,
    longitude: 5.366672,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["good_for_groups"]
  }),
  makePlace({
    id: "osm-node-1822938990",
    name: "Farprix",
    latitude: 43.284723,
    longitude: 5.35903,
    neighborhood: "Malmousque",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-12120530340",
    name: "Fedea Exotic Store",
    latitude: 43.294618,
    longitude: 5.380383,
    neighborhood: "Cours Julien",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-7793950321",
    name: "Feel Goudes",
    latitude: 43.215212,
    longitude: 5.346441,
    neighborhood: "Malmousque",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["good_for_groups"]
  }),
  makePlace({
    id: "osm-node-11387429017",
    name: "Ferments",
    latitude: 43.288062,
    longitude: 5.388547,
    neighborhood: "Marseille",
    address: "Rue de Lodi, Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-2120138283",
    name: "Fernand et Lily",
    latitude: 43.296665,
    longitude: 5.372109,
    neighborhood: "Le Panier",
    address: "45 Rue de la Coutellerie, Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-10968685751",
    name: "Feu Viet",
    latitude: 43.310699,
    longitude: 5.400935,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["vegetarian_options"]
  }),
  makePlace({
    id: "osm-node-13302285403",
    name: "Feuilletage",
    latitude: 43.298588,
    longitude: 5.400194,
    neighborhood: "Marseille",
    address: "16 Rue Henri Juramy, Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-4680622615",
    name: "Fidele",
    latitude: 43.297586,
    longitude: 5.384633,
    neighborhood: "Cours Julien",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["late_opening","good_for_groups"]
  }),
  makePlace({
    id: "osm-node-10013441860",
    name: "Figure",
    instagram_handle: "figuremarseille",
    latitude: 43.283152,
    longitude: 5.374563,
    neighborhood: "Marseille",
    address: "90 Bd Vauban, Marseille",
    category: "Restaurant",
    criteria: ["late_opening"]
  }),
  makePlace({
    id: "osm-node-9510818478",
    name: "Fil Bleu",
    latitude: 43.283836,
    longitude: 5.380938,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-8475740438",
    name: "Fine Cocott",
    latitude: 43.291317,
    longitude: 5.381408,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-way-1265848656",
    name: "fioupelan",
    latitude: 43.296302,
    longitude: 5.370695,
    neighborhood: "Le Panier",
    address: "Quai du Port, Marseille",
    category: "Restaurant",
    criteria: ["has_terrace"]
  }),
  makePlace({
    id: "osm-node-5310067024",
    name: "Five Guys",
    latitude: 43.305808,
    longitude: 5.365219,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["has_terrace","late_opening","wheelchair_accessible","good_for_groups"]
  }),
  makePlace({
    id: "osm-node-8990886544",
    name: "fivepizza",
    latitude: 43.297241,
    longitude: 5.373186,
    neighborhood: "Noailles",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["has_terrace"]
  }),
  makePlace({
    id: "osm-node-4405959296",
    name: "Flach Burger",
    latitude: 43.29933,
    longitude: 5.382137,
    neighborhood: "Longchamp",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["good_for_groups"]
  }),
  makePlace({
    id: "osm-node-5193941547",
    name: "FlashBack",
    instagram_handle: "flashbackcafe.marseille",
    latitude: 43.296544,
    longitude: 5.374127,
    neighborhood: "Noailles",
    address: "4 Rue de la Republique, Marseille",
    category: "Bar",
    criteria: ["late_opening"]
  }),
  makePlace({
    id: "osm-node-5785292454",
    name: "Fleur de Sel",
    latitude: 43.289221,
    longitude: 5.375736,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["has_terrace"]
  }),
  makePlace({
    id: "osm-node-13948192401",
    name: "Fofoca",
    instagram_handle: "fofoca_cave",
    latitude: 43.299168,
    longitude: 5.397883,
    neighborhood: "Marseille",
    address: "19 Place Sebastopol, Marseille",
    category: "Commerce alimentaire",
    criteria: ["late_opening","good_for_groups"]
  }),
  makePlace({
    id: "osm-node-13163010830",
    name: "Food",
    latitude: 43.301319,
    longitude: 5.37026,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["good_for_groups"]
  }),
  makePlace({
    id: "osm-node-1042891987",
    name: "Food & Friends",
    latitude: 43.264668,
    longitude: 5.379878,
    neighborhood: "Littoral Sud",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["has_terrace"]
  }),
  makePlace({
    id: "osm-way-112835727",
    name: "FOOD COMPANY",
    latitude: 43.340235,
    longitude: 5.425347,
    neighborhood: "Marseille",
    address: "52 Chemin de Notre-Dame-de-Consolation, Marseille",
    category: "Restaurant",
    criteria: ["good_for_groups"]
  }),
  makePlace({
    id: "osm-node-11132236822",
    name: "Food Market",
    latitude: 43.319917,
    longitude: 5.36762,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-11048296405",
    name: "Food'in Side",
    latitude: 43.269553,
    longitude: 5.393558,
    neighborhood: "Littoral Sud",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["good_for_groups"]
  }),
  makePlace({
    id: "osm-node-12692705291",
    name: "Foodiee's",
    latitude: 43.30633,
    longitude: 5.364577,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["good_for_groups"]
  }),
  makePlace({
    id: "osm-node-6328537700",
    name: "For'eat",
    latitude: 43.297628,
    longitude: 5.427411,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-12561850602",
    name: "Four des Navettes",
    latitude: 43.306051,
    longitude: 5.365933,
    neighborhood: "Le Panier",
    address: "8 Boulevard Jacques Saade Quai du Lazaret, Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-7409944108",
    name: "Fournil de Bois Lemaitre",
    latitude: 43.320469,
    longitude: 5.433153,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-6167205667",
    name: "fournil de castelane",
    latitude: 43.286531,
    longitude: 5.383254,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-3799422421",
    name: "Fournil de La Barasse",
    latitude: 43.285539,
    longitude: 5.480499,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-8880327900",
    name: "Fournil de la Capelette",
    latitude: 43.281155,
    longitude: 5.406267,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-13749563102",
    name: "Fournil des Auffes",
    latitude: 43.286137,
    longitude: 5.35369,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-5588715300",
    name: "Fournil des Chlorophiles",
    latitude: 43.342319,
    longitude: 5.401124,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-7797691383",
    name: "Fournil Du Roy d'Espagne",
    latitude: 43.241691,
    longitude: 5.387717,
    neighborhood: "Littoral Sud",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-622302237",
    name: "Fournil du Vieux Moulin",
    latitude: 43.339153,
    longitude: 5.40781,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-2079988844",
    name: "Fournil le Racati",
    latitude: 43.304692,
    longitude: 5.3758,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-2019916442",
    name: "Fournil Saint-Pierre",
    latitude: 43.291873,
    longitude: 5.393426,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: ["wheelchair_accessible"]
  }),
  makePlace({
    id: "osm-way-561898147",
    name: "Foyer des marins",
    latitude: 43.341081,
    longitude: 5.338986,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Bar",
    criteria: []
  }),
  makePlace({
    id: "osm-node-3609139801",
    name: "Fraicheur d'Asie",
    latitude: 43.28949,
    longitude: 5.379448,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-13893515804",
    name: "France Food Saint Louis",
    latitude: 43.342101,
    longitude: 5.359614,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-13137130795",
    name: "Francois coquillages",
    latitude: 43.284321,
    longitude: 5.385075,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-1885249713",
    name: "Frangin, Frangine",
    latitude: 43.338842,
    longitude: 5.428788,
    neighborhood: "Marseille",
    address: "124 Traverse de Notre-Dame-de-Consolation, Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-11163524405",
    name: "Frangins",
    latitude: 43.269271,
    longitude: 5.388759,
    neighborhood: "Littoral Sud",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["late_opening","good_for_groups"]
  }),
  makePlace({
    id: "osm-node-10009734026",
    name: "Franprix",
    latitude: 43.28527,
    longitude: 5.388789,
    neighborhood: "Marseille",
    address: "57 avenue de Toulon, Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-3207947276",
    name: "Franprix",
    latitude: 43.301039,
    longitude: 5.40043,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-4290912637",
    name: "Franprix",
    latitude: 43.267233,
    longitude: 5.396856,
    neighborhood: "Littoral Sud",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-5527293105",
    name: "Franprix",
    latitude: 43.278599,
    longitude: 5.406723,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-7653826647",
    name: "Franprix",
    latitude: 43.333108,
    longitude: 5.420382,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-8124822311",
    name: "Franprix",
    latitude: 43.310275,
    longitude: 5.370171,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-8514734817",
    name: "Franprix",
    latitude: 43.297812,
    longitude: 5.373231,
    neighborhood: "Noailles",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-11378343769",
    name: "Franprix",
    latitude: 43.282304,
    longitude: 5.386903,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-12176282201",
    name: "Franprix",
    latitude: 43.288747,
    longitude: 5.386504,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-12430812019",
    name: "Franprix",
    latitude: 43.279315,
    longitude: 5.379338,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-13428975866",
    name: "Franprix",
    latitude: 43.30522,
    longitude: 5.366868,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-way-68979543",
    name: "Franprix",
    latitude: 43.301549,
    longitude: 5.395771,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-3790492607",
    name: "FrenchBurger",
    latitude: 43.296839,
    longitude: 5.372041,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["has_terrace","good_for_groups"]
  }),
  makePlace({
    id: "osm-node-11921981356",
    name: "Freres Brioche",
    latitude: 43.294047,
    longitude: 5.37612,
    neighborhood: "Noailles",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["has_terrace","vegetarian_options"]
  }),
  makePlace({
    id: "osm-node-10017557031",
    name: "Fresh",
    latitude: 43.296143,
    longitude: 5.386593,
    neighborhood: "Cours Julien",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: ["wheelchair_accessible"]
  }),
  makePlace({
    id: "osm-node-9551406917",
    name: "Fresh Box",
    latitude: 43.301098,
    longitude: 5.370827,
    neighborhood: "Le Panier",
    address: "17 Rue Jean Trinquet, Marseille",
    category: "Restaurant",
    criteria: ["late_opening"]
  }),
  makePlace({
    id: "osm-node-6142969632",
    name: "Fresh Burger",
    latitude: 43.315999,
    longitude: 5.372989,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["good_for_groups"]
  }),
  makePlace({
    id: "osm-node-7054970471",
    name: "Frisch Cag Kebap",
    latitude: 43.295261,
    longitude: 5.382926,
    neighborhood: "Cours Julien",
    address: "9 Cours Julien, Marseille",
    category: "Restaurant",
    criteria: ["allows_cb_no_minimum","good_for_groups"]
  }),
  makePlace({
    id: "osm-node-2120589560",
    name: "Frisch sues - Berliner Kebap",
    latitude: 43.303863,
    longitude: 5.366648,
    neighborhood: "Le Panier",
    address: "53 Avenue Robert Schuman, Marseille",
    category: "Restaurant",
    criteria: ["has_terrace","good_for_groups"]
  }),
  makePlace({
    id: "osm-node-5758052013",
    name: "Friterie Werner & Co",
    latitude: 43.29698,
    longitude: 5.381808,
    neighborhood: "Cours Julien",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["late_opening"]
  }),
  makePlace({
    id: "osm-node-7394245823",
    name: "Fromagerie Chave",
    latitude: 43.295186,
    longitude: 5.392131,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-9701245692",
    name: "Fromagerie Rigaou",
    latitude: 43.281844,
    longitude: 5.385347,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-13937931801",
    name: "Froumai",
    latitude: 43.288758,
    longitude: 5.387894,
    neighborhood: "Marseille",
    address: "87 Rue de Lodi, Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-8614602698",
    name: "Froumai",
    latitude: 43.298529,
    longitude: 5.384217,
    neighborhood: "Longchamp",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-1796887636",
    name: "Fruits de la Provence",
    latitude: 43.253035,
    longitude: 5.423122,
    neighborhood: "Littoral Sud",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-7203977331",
    name: "fruits et legumes",
    latitude: 43.284204,
    longitude: 5.380803,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-way-69641137",
    name: "Fruits et legumes",
    latitude: 43.323834,
    longitude: 5.384109,
    neighborhood: "Belle de Mai",
    address: "Boulevard Charles Moretti, Marseille",
    category: "Commerce alimentaire",
    criteria: ["allows_cb_no_minimum"]
  }),
  makePlace({
    id: "osm-node-2511318308",
    name: "Fruits et legumes",
    latitude: 43.296587,
    longitude: 5.379974,
    neighborhood: "Cours Julien",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-2363311736",
    name: "Fruits et Legumes",
    latitude: 43.29652,
    longitude: 5.378695,
    neighborhood: "Cours Julien",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: ["has_terrace"]
  }),
  makePlace({
    id: "osm-node-1485011623",
    name: "Fruits et Legumes",
    latitude: 43.360337,
    longitude: 5.315217,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-6170636913",
    name: "Fruits et legumes des 5 Avenues",
    latitude: 43.302751,
    longitude: 5.397072,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-2001201530",
    name: "Fruits et Legumes des Quatre Saisons",
    latitude: 43.293032,
    longitude: 5.385155,
    neighborhood: "Cours Julien",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-8763075062",
    name: "Fruits et legumes La Provence",
    latitude: 43.331233,
    longitude: 5.406562,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-3404570687",
    name: "Fruits et legumes Saint-Victor",
    latitude: 43.290027,
    longitude: 5.366153,
    neighborhood: "Saint-Victor",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-8330279521",
    name: "Fruits et Legunes Saint-Just",
    latitude: 43.313934,
    longitude: 5.402929,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-4172951380",
    name: "Fruits Primeurs Menpenti",
    latitude: 43.284233,
    longitude: 5.395628,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-2268236772",
    name: "Fuxia l'epicerie",
    latitude: 43.293138,
    longitude: 5.372738,
    neighborhood: "Noailles",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-10970911435",
    name: "G la dalle",
    latitude: 43.262002,
    longitude: 5.375806,
    neighborhood: "Littoral Sud",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["good_for_groups"]
  }),
  makePlace({
    id: "osm-node-11228738084",
    name: "G La Dalle",
    latitude: 43.297507,
    longitude: 5.381263,
    neighborhood: "Cours Julien",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["has_terrace","good_for_groups"]
  }),
  makePlace({
    id: "osm-node-1315196681",
    name: "Gabian",
    latitude: 43.291878,
    longitude: 5.358355,
    neighborhood: "Marseille",
    address: "89 Boulevard Charles Livon, Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-4303128892",
    name: "Galinette",
    latitude: 43.311436,
    longitude: 5.446461,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-4498776298",
    name: "Gargantu'Art",
    latitude: 43.229234,
    longitude: 5.435375,
    neighborhood: "Littoral Sud",
    address: "Marseille",
    category: "Cafe",
    criteria: []
  }),
  makePlace({
    id: "osm-node-13876203401",
    name: "Gaza Palestine",
    latitude: 43.296101,
    longitude: 5.385451,
    neighborhood: "Cours Julien",
    address: "82 Rue Curiol, Marseille",
    category: "Restaurant",
    criteria: ["vegetarian_options"]
  }),
  makePlace({
    id: "osm-way-691639784",
    name: "Geant Casino",
    latitude: 43.295868,
    longitude: 5.47606,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-12643601959",
    name: "Gelateria",
    latitude: 43.298685,
    longitude: 5.366551,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Cafe",
    criteria: []
  }),
  makePlace({
    id: "osm-node-11069911105",
    name: "Gelateria des Goudes",
    latitude: 43.215266,
    longitude: 5.347607,
    neighborhood: "Malmousque",
    address: "Marseille",
    category: "Cafe",
    criteria: []
  }),
  makePlace({
    id: "osm-node-10053958817",
    name: "Gelateria Major",
    latitude: 43.298511,
    longitude: 5.3639,
    neighborhood: "Le Panier",
    address: "Place Albert Londres, Marseille",
    category: "Cafe",
    criteria: []
  }),
  makePlace({
    id: "osm-node-5519908484",
    name: "Gelati Amore",
    latitude: 43.243392,
    longitude: 5.370505,
    neighborhood: "Littoral Sud",
    address: "Marseille",
    category: "Cafe",
    criteria: []
  }),
  makePlace({
    id: "osm-node-1485011626",
    name: "Gelati Nino",
    latitude: 43.360461,
    longitude: 5.314691,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Cafe",
    criteria: ["has_terrace"]
  }),
  makePlace({
    id: "osm-node-9510873299",
    name: "Gelati Nino",
    latitude: 43.284731,
    longitude: 5.384842,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Cafe",
    criteria: []
  }),
  makePlace({
    id: "osm-node-10896367295",
    name: "Genty",
    latitude: 43.29822,
    longitude: 5.366313,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-1933751858",
    name: "Georges",
    latitude: 43.29553,
    longitude: 5.393756,
    neighborhood: "Marseille",
    address: "115 Boulevard Chave, Marseille",
    category: "Restaurant",
    criteria: ["late_opening"]
  }),
  makePlace({
    id: "osm-node-10657707305",
    name: "Georgia",
    latitude: 43.292177,
    longitude: 5.374185,
    neighborhood: "Noailles",
    address: "45 Rue Sainte, Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-3906578983",
    name: "Gerarh",
    latitude: 43.294561,
    longitude: 5.382891,
    neighborhood: "Cours Julien",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["late_opening"]
  }),
  makePlace({
    id: "osm-node-3370604785",
    name: "Germain Artisan Boulanger",
    latitude: 43.272484,
    longitude: 5.411411,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-4713564948",
    name: "Ghomrassen",
    latitude: 43.298627,
    longitude: 5.380721,
    neighborhood: "Longchamp",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-9462708897",
    name: "Gilberte et Marguerite",
    latitude: 43.303966,
    longitude: 5.367649,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["has_terrace"]
  }),
  makePlace({
    id: "osm-node-2039908842",
    name: "Gin Khao",
    latitude: 43.29575,
    longitude: 5.377163,
    neighborhood: "Noailles",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["late_opening","vegetarian_options","allows_cb_no_minimum"]
  }),
  makePlace({
    id: "osm-node-2268370124",
    name: "Ginseng",
    latitude: 43.292399,
    longitude: 5.372878,
    neighborhood: "Noailles",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["has_terrace","vegetarian_options"]
  }),
  makePlace({
    id: "osm-node-5584613922",
    name: "Gioia Pizzeria",
    latitude: 43.295579,
    longitude: 5.382335,
    neighborhood: "Cours Julien",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["good_for_groups"]
  }),
  makePlace({
    id: "osm-way-67703523",
    name: "Glaces artisanales",
    latitude: 43.297298,
    longitude: 5.379713,
    neighborhood: "Cours Julien",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["good_for_groups"]
  }),
  makePlace({
    id: "osm-node-11947401569",
    name: "Glaces Moustache",
    latitude: 43.294217,
    longitude: 5.376683,
    neighborhood: "Noailles",
    address: "Marseille",
    category: "Cafe",
    criteria: ["wheelchair_accessible","allows_cb_no_minimum"]
  }),
  makePlace({
    id: "osm-node-9017411416",
    name: "Glacier des calanques / Rotisserie",
    latitude: 43.236241,
    longitude: 5.36183,
    neighborhood: "Littoral Sud",
    address: "70 Avenue de la Madrague de Montredon, Marseille",
    category: "Cafe",
    criteria: ["late_opening","wheelchair_accessible"]
  }),
  makePlace({
    id: "osm-node-13123127782",
    name: "Glacier des trois",
    latitude: 43.299545,
    longitude: 5.366652,
    neighborhood: "Le Panier",
    address: "2 Place des Treize Cantons, Marseille",
    category: "Cafe",
    criteria: []
  }),
  makePlace({
    id: "osm-node-4951187123",
    name: "Glacier Marina",
    latitude: 43.296545,
    longitude: 5.372935,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Cafe",
    criteria: []
  }),
  makePlace({
    id: "osm-node-6483609683",
    name: "Glam rock",
    latitude: 43.289665,
    longitude: 5.398359,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Bar",
    criteria: []
  }),
  makePlace({
    id: "osm-way-352447634",
    name: "Go Johnny Go",
    latitude: 43.30286,
    longitude: 5.380422,
    neighborhood: "Longchamp",
    address: "Marseille",
    category: "Cafe",
    criteria: ["wheelchair_accessible","allows_cb_no_minimum"]
  }),
  makePlace({
    id: "osm-node-9929575752",
    name: "Go'djo",
    latitude: 43.294742,
    longitude: 5.384278,
    neighborhood: "Cours Julien",
    address: "Marseille",
    category: "Bar",
    criteria: []
  }),
  makePlace({
    id: "osm-node-13871071836",
    name: "Gold Beef",
    latitude: 43.300366,
    longitude: 5.389614,
    neighborhood: "Longchamp",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-12666641762",
    name: "Gold cafe",
    latitude: 43.369959,
    longitude: 5.356176,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Cafe",
    criteria: []
  }),
  makePlace({
    id: "osm-node-6577703036",
    name: "Gold Eagles",
    latitude: 43.289189,
    longitude: 5.480621,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-12666641760",
    name: "Gold istambul",
    latitude: 43.3701,
    longitude: 5.356074,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["good_for_groups"]
  }),
  makePlace({
    id: "osm-node-12438369501",
    name: "Gold Sushi",
    latitude: 43.314648,
    longitude: 5.368739,
    neighborhood: "Le Panier",
    address: "Rue Joseph Billioud, Marseille",
    category: "Restaurant",
    criteria: ["good_for_groups"]
  }),
  makePlace({
    id: "osm-node-4405959295",
    name: "Golda",
    latitude: 43.299321,
    longitude: 5.38233,
    neighborhood: "Longchamp",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["late_opening","vegetarian_options"]
  }),
  makePlace({
    id: "osm-node-1714510925",
    name: "Good Price",
    latitude: 43.339688,
    longitude: 5.350426,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-way-68948832",
    name: "Good Time",
    latitude: 43.30541,
    longitude: 5.372918,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["good_for_groups"]
  }),
  makePlace({
    id: "osm-node-13738508421",
    name: "Gouraya",
    latitude: 43.288773,
    longitude: 5.46183,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-10017557032",
    name: "Gourmandise by Nico",
    latitude: 43.296165,
    longitude: 5.386512,
    neighborhood: "Cours Julien",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: ["has_terrace"]
  }),
  makePlace({
    id: "osm-node-9694399093",
    name: "Gouts & Saisons",
    latitude: 43.303006,
    longitude: 5.448721,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-9357711873",
    name: "Gran Cafe",
    latitude: 43.271391,
    longitude: 5.386907,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["has_terrace","late_opening"]
  }),
  makePlace({
    id: "osm-node-4163256736",
    name: "Grand Bar Cafe du Centre",
    latitude: 43.282429,
    longitude: 5.430133,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Cafe",
    criteria: []
  }),
  makePlace({
    id: "osm-node-3992084767",
    name: "Grand Bar des Colonnes",
    latitude: 43.283892,
    longitude: 5.435429,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Bar",
    criteria: []
  }),
  makePlace({
    id: "osm-node-3790492605",
    name: "Grand Bar des Goudes",
    latitude: 43.215078,
    longitude: 5.345965,
    neighborhood: "Malmousque",
    address: "Marseille",
    category: "Bar",
    criteria: []
  }),
  makePlace({
    id: "osm-node-4463345810",
    name: "Grand Bar du Chapitre",
    latitude: 43.299402,
    longitude: 5.385872,
    neighborhood: "Longchamp",
    address: "Marseille",
    category: "Bar",
    criteria: []
  }),
  makePlace({
    id: "osm-node-4374349388",
    name: "Grand Bar Pierre",
    latitude: 43.290928,
    longitude: 5.379382,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-4629705577",
    name: "Grand bar Vacon",
    latitude: 43.295343,
    longitude: 5.37941,
    neighborhood: "Cours Julien",
    address: "Marseille",
    category: "Bar",
    criteria: []
  }),
  makePlace({
    id: "osm-way-600221056",
    name: "Grand Frais",
    latitude: 43.343799,
    longitude: 5.447719,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: ["allows_cb_no_minimum"]
  }),
  makePlace({
    id: "osm-way-695831744",
    name: "Grand Frais",
    latitude: 43.29043,
    longitude: 5.47863,
    neighborhood: "Marseille",
    address: "Route de la Sabliere, Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-12224182946",
    name: "Grand Frais",
    latitude: 43.270341,
    longitude: 5.393661,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-8595088037",
    name: "Grand marche",
    latitude: 43.315206,
    longitude: 5.372791,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-3768685633",
    name: "Green Bear Coffee",
    latitude: 43.298535,
    longitude: 5.382831,
    neighborhood: "Longchamp",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["vegetarian_options"]
  }),
  makePlace({
    id: "osm-node-4315409671",
    name: "Green Bear Coffee",
    latitude: 43.293439,
    longitude: 5.37518,
    neighborhood: "Noailles",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["has_terrace","wheelchair_accessible","good_for_groups"]
  }),
  makePlace({
    id: "osm-node-4535626297",
    name: "Green Bear Coffee",
    latitude: 43.290213,
    longitude: 5.378767,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Cafe",
    criteria: ["has_terrace","has_wifi","vegetarian_options","laptop_friendly"]
  }),
  makePlace({
    id: "osm-way-69140170",
    name: "Green Love",
    latitude: 43.29096,
    longitude: 5.382372,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["vegetarian_options"]
  }),
  makePlace({
    id: "osm-node-12692705294",
    name: "Green Salad",
    latitude: 43.306071,
    longitude: 5.364509,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["good_for_groups"]
  }),
  makePlace({
    id: "osm-node-13046190401",
    name: "GRENAT",
    latitude: 43.291752,
    longitude: 5.375537,
    neighborhood: "Marseille",
    address: "57 Rue Grignan, Marseille",
    category: "Restaurant",
    criteria: ["late_opening"]
  }),
  makePlace({
    id: "osm-node-12240823701",
    name: "Grigne Cafe",
    latitude: 43.284813,
    longitude: 5.374936,
    neighborhood: "Marseille",
    address: "109 Boulevard Notre-Dame, Marseille",
    category: "Cafe",
    criteria: []
  }),
  makePlace({
    id: "osm-node-5913412890",
    name: "Grill Boucherie",
    latitude: 43.250011,
    longitude: 5.404675,
    neighborhood: "Littoral Sud",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-13965785080",
    name: "Grill Kebab",
    latitude: 43.327467,
    longitude: 5.423931,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["good_for_groups"]
  }),
  makePlace({
    id: "osm-node-9054514163",
    name: "Grillade",
    latitude: 43.309806,
    longitude: 5.379369,
    neighborhood: "Longchamp",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["good_for_groups"]
  }),
  makePlace({
    id: "osm-node-2019893918",
    name: "Grillade - Salon de the 7/7",
    latitude: 43.286428,
    longitude: 5.385048,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["good_for_groups"]
  }),
  makePlace({
    id: "osm-way-69646508",
    name: "Grillade de la Gare",
    latitude: 43.338771,
    longitude: 5.391792,
    neighborhood: "Belle de Mai",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["has_terrace","good_for_groups"]
  }),
  makePlace({
    id: "osm-node-12919167901",
    name: "Grisbi - Restaurant Bar Galerie",
    latitude: 43.306851,
    longitude: 5.392784,
    neighborhood: "Belle de Mai",
    address: "20 Rue Benedit, Marseille",
    category: "Bar",
    criteria: []
  }),
  makePlace({
    id: "osm-node-13123657901",
    name: "Gros Bao",
    latitude: 43.296118,
    longitude: 5.378263,
    neighborhood: "Cours Julien",
    address: "3 Cours Saint-Louis, Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-3636748077",
    name: "Grumpy Cakes",
    latitude: 43.293363,
    longitude: 5.375452,
    neighborhood: "Noailles",
    address: "Marseille",
    category: "Cafe",
    criteria: []
  }),
  makePlace({
    id: "osm-node-5132897204",
    name: "Guirrii",
    latitude: 43.316888,
    longitude: 5.37793,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-12117336003",
    name: "H24 Market",
    latitude: 43.298099,
    longitude: 5.38078,
    neighborhood: "Longchamp",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-11069902008",
    name: "Ha noi pho",
    latitude: 43.255799,
    longitude: 5.375887,
    neighborhood: "Littoral Sud",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["has_terrace","vegetarian_options"]
  }),
  makePlace({
    id: "osm-node-4087718757",
    name: "Hailo",
    latitude: 43.288696,
    longitude: 5.394797,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["vegetarian_options"]
  }),
  makePlace({
    id: "osm-node-7621888782",
    name: "Hako",
    latitude: 43.280873,
    longitude: 5.368795,
    neighborhood: "Saint-Victor",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-2511318267",
    name: "Halal 123",
    latitude: 43.296401,
    longitude: 5.379622,
    neighborhood: "Cours Julien",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-2379123237",
    name: "Hallal Food",
    latitude: 43.291563,
    longitude: 5.384554,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["good_for_groups"]
  }),
  makePlace({
    id: "osm-node-11750897934",
    name: "Happy bubble tea & banh mi",
    latitude: 43.302429,
    longitude: 5.395088,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["good_for_groups"]
  }),
  makePlace({
    id: "osm-node-8601906883",
    name: "Happy Days",
    latitude: 43.299523,
    longitude: 5.440186,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Cafe",
    criteria: []
  }),
  makePlace({
    id: "osm-node-5202084892",
    name: "Happy Fine",
    latitude: 43.297992,
    longitude: 5.372944,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["good_for_groups"]
  }),
  makePlace({
    id: "osm-node-1725654105",
    name: "Haribo",
    latitude: 43.331938,
    longitude: 5.375233,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-10896283487",
    name: "Harmonie et Gourmets",
    latitude: 43.298644,
    longitude: 5.367703,
    neighborhood: "Le Panier",
    address: "38 Rue du Refuge, Marseille",
    category: "Restaurant",
    criteria: ["good_for_groups"]
  }),
  makePlace({
    id: "osm-node-8467947356",
    name: "Hat's",
    latitude: 43.269818,
    longitude: 5.387831,
    neighborhood: "Littoral Sud",
    address: "4 Avenue de Mazargues, Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-9700059236",
    name: "Hat's",
    latitude: 43.282091,
    longitude: 5.390445,
    neighborhood: "Marseille",
    address: "100 Avenue Jules Cantini, Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-8231960045",
    name: "Hat's",
    latitude: 43.27568,
    longitude: 5.360691,
    neighborhood: "Saint-Victor",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-2425875283",
    name: "Hat's boulangerie, patisserie, traiteur",
    latitude: 43.264535,
    longitude: 5.391462,
    neighborhood: "Littoral Sud",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-13281345102",
    name: "Hatsatoun",
    instagram_handle: "hatsatoun_bakery",
    latitude: 43.300053,
    longitude: 5.383311,
    neighborhood: "Longchamp",
    address: "29 Rue Saint-Bazile, Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-13162999564",
    name: "Hausmann Cafe",
    latitude: 43.30358,
    longitude: 5.367978,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Cafe",
    criteria: []
  }),
  makePlace({
    id: "osm-node-7208201912",
    name: "Healthy by nature",
    latitude: 43.310508,
    longitude: 5.367917,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["has_terrace"]
  }),
  makePlace({
    id: "osm-node-13495914101",
    name: "Hemera",
    latitude: 43.283404,
    longitude: 5.39046,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Bar",
    criteria: []
  }),
  makePlace({
    id: "osm-node-2019893917",
    name: "Henri's Pub",
    latitude: 43.285959,
    longitude: 5.384759,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Bar",
    criteria: []
  }),
  makePlace({
    id: "osm-node-10631223415",
    name: "Hichem & freres",
    latitude: 43.326965,
    longitude: 5.362948,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["good_for_groups"]
  }),
  makePlace({
    id: "osm-node-9643383878",
    name: "High Cube Marseille",
    latitude: 43.360654,
    longitude: 5.347133,
    neighborhood: "Le Panier",
    address: "Rue de Shangai, Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-4574040337",
    name: "Hippopotamus Marseille la Valentine",
    latitude: 43.289323,
    longitude: 5.480683,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["late_opening","wheelchair_accessible"]
  }),
  makePlace({
    id: "osm-node-6417767539",
    name: "Histoire Gourmande",
    latitude: 43.300058,
    longitude: 5.517103,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-11379953370",
    name: "Hiver Comme & The",
    latitude: 43.278046,
    longitude: 5.392832,
    neighborhood: "Marseille",
    address: "2 Rue Sainte-Famille, Marseille",
    category: "Cafe",
    criteria: []
  }),
  makePlace({
    id: "osm-node-10896384469",
    name: "Hododa",
    instagram_handle: "hododa_marseille",
    latitude: 43.298197,
    longitude: 5.3659,
    neighborhood: "Le Panier",
    address: "15 Rue de l'Eveche, Marseille",
    category: "Restaurant",
    criteria: ["has_terrace","allows_cb_no_minimum"]
  }),
  makePlace({
    id: "osm-node-3634336619",
    name: "Hoki Sushi",
    latitude: 43.363399,
    longitude: 5.346602,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-10315214748",
    name: "Holis'tea",
    latitude: 43.299135,
    longitude: 5.386403,
    neighborhood: "Longchamp",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-5150017784",
    name: "Hollywood",
    latitude: 43.302532,
    longitude: 5.374169,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["good_for_groups"]
  }),
  makePlace({
    id: "osm-node-11355399213",
    name: "Homer Lobster",
    latitude: 43.290808,
    longitude: 5.377806,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-4122998106",
    name: "Hong Kong 2",
    latitude: 43.309076,
    longitude: 5.401775,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["late_opening"]
  }),
  makePlace({
    id: "osm-node-6738889487",
    name: "Hong Kong 3",
    latitude: 43.335299,
    longitude: 5.450804,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-1842949399",
    name: "Hotel bar restaurant Le Valentinois",
    latitude: 43.289122,
    longitude: 5.4666,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-2070345398",
    name: "Hotel Kyriad",
    latitude: 43.280608,
    longitude: 5.399661,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-11069910810",
    name: "hotellerie-restaurant",
    latitude: 43.261713,
    longitude: 5.375387,
    neighborhood: "Littoral Sud",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-2010627427",
    name: "House of Pain",
    latitude: 43.292238,
    longitude: 5.385136,
    neighborhood: "Cours Julien",
    address: "14 Rue Fontange, Marseille",
    category: "Commerce alimentaire",
    criteria: ["wheelchair_accessible"]
  }),
  makePlace({
    id: "osm-node-10630862273",
    name: "Howard Burger",
    latitude: 43.293688,
    longitude: 5.377218,
    neighborhood: "Noailles",
    address: "20 Rue Haxo, Marseille",
    category: "Restaurant",
    criteria: ["late_opening","allows_cb_no_minimum","good_for_groups"]
  }),
  makePlace({
    id: "osm-node-4182817407",
    name: "Hyper Asiatique",
    latitude: 43.315136,
    longitude: 5.384873,
    neighborhood: "Belle de Mai",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-3874599467",
    name: "I Love my Chicken",
    latitude: 43.269368,
    longitude: 5.403456,
    neighborhood: "Littoral Sud",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["good_for_groups"]
  }),
  makePlace({
    id: "osm-node-8047413809",
    name: "Ibis Marseille Timone",
    latitude: 43.292563,
    longitude: 5.401624,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["wheelchair_accessible"]
  }),
  makePlace({
    id: "osm-node-8328700638",
    name: "Ice Park",
    latitude: 43.26483,
    longitude: 5.373728,
    neighborhood: "Littoral Sud",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-2394376865",
    name: "ID Fixe",
    latitude: 43.293711,
    longitude: 5.382916,
    neighborhood: "Cours Julien",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-way-154589584",
    name: "Ideal Bar",
    latitude: 43.27977,
    longitude: 5.41786,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Bar",
    criteria: []
  }),
  makePlace({
    id: "osm-node-2059612361",
    name: "Il Caffe",
    latitude: 43.29351,
    longitude: 5.383713,
    neighborhood: "Cours Julien",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["has_terrace"]
  }),
  makePlace({
    id: "osm-node-9571635720",
    name: "Il Canaletto",
    latitude: 43.29372,
    longitude: 5.374046,
    neighborhood: "Noailles",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["has_terrace","wheelchair_accessible"]
  }),
  makePlace({
    id: "osm-node-2120000020",
    name: "Il Cuoco",
    latitude: 43.299569,
    longitude: 5.371183,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["good_for_groups"]
  }),
  makePlace({
    id: "osm-way-68987977",
    name: "Il Piccolo",
    latitude: 43.297139,
    longitude: 5.400234,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["good_for_groups"]
  }),
  makePlace({
    id: "osm-node-3734528807",
    name: "Ililim Market",
    latitude: 43.375109,
    longitude: 5.365678,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-12806270225",
    name: "Illyrian",
    latitude: 43.295864,
    longitude: 5.386199,
    neighborhood: "Cours Julien",
    address: "Marseille",
    category: "Bar",
    criteria: ["has_terrace"]
  }),
  makePlace({
    id: "osm-node-6627597582",
    name: "Imperial",
    latitude: 43.307891,
    longitude: 5.435386,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-9073761619",
    name: "Imprimerie de la Comete - Epicerie",
    latitude: 43.29921,
    longitude: 5.368981,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-12679788301",
    name: "Inci Restaurant",
    instagram_handle: "incirestaurant1",
    latitude: 43.30296,
    longitude: 5.396331,
    neighborhood: "Marseille",
    address: "33 Boulevard Philippon, Marseille",
    category: "Restaurant",
    criteria: ["late_opening"]
  }),
  makePlace({
    id: "osm-node-13965785072",
    name: "Institut by CS",
    instagram_handle: "institut_bycs",
    latitude: 43.328659,
    longitude: 5.426186,
    neighborhood: "Marseille",
    address: "155 Avenue de La Rose, Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-way-94920164",
    name: "Intermarche",
    latitude: 43.295933,
    longitude: 5.443532,
    neighborhood: "Marseille",
    address: "81 Avenue William Booth, Marseille",
    category: "Commerce alimentaire",
    criteria: ["wheelchair_accessible","allows_cb_no_minimum"]
  }),
  makePlace({
    id: "osm-node-1594619874",
    name: "Intermarche",
    latitude: 43.332107,
    longitude: 5.433522,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: ["allows_cb_no_minimum"]
  }),
  makePlace({
    id: "osm-node-5454001914",
    name: "Intermarche",
    latitude: 43.292411,
    longitude: 5.459237,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: ["late_opening"]
  }),
  makePlace({
    id: "osm-node-5469691559",
    name: "Intermarche",
    latitude: 43.285898,
    longitude: 5.379685,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: ["wheelchair_accessible"]
  }),
  makePlace({
    id: "osm-node-6790201461",
    name: "Intermarche",
    latitude: 43.302335,
    longitude: 5.396847,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: ["wheelchair_accessible"]
  }),
  makePlace({
    id: "osm-node-614653712",
    name: "Intermarche",
    latitude: 43.333984,
    longitude: 5.452569,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-6434134358",
    name: "Intermarche",
    latitude: 43.306728,
    longitude: 5.501704,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-9306597122",
    name: "Intermarche",
    latitude: 43.306493,
    longitude: 5.501755,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-way-112807605",
    name: "Intermarche",
    latitude: 43.341096,
    longitude: 5.42049,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-way-158103351",
    name: "Intermarche",
    latitude: 43.29656,
    longitude: 5.425895,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-way-312639894",
    name: "Intermarche",
    latitude: 43.351302,
    longitude: 5.342467,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-way-566339013",
    name: "Intermarche",
    latitude: 43.292582,
    longitude: 5.45971,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-7047294172",
    name: "Intermarche Express",
    latitude: 43.290309,
    longitude: 5.357581,
    neighborhood: "Marseille",
    address: "16 Rue Cesar Aleman, Marseille",
    category: "Commerce alimentaire",
    criteria: ["late_opening","wheelchair_accessible"]
  }),
  makePlace({
    id: "osm-node-6027027618",
    name: "Intermarche Express",
    latitude: 43.296657,
    longitude: 5.395862,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: ["wheelchair_accessible"]
  }),
  makePlace({
    id: "osm-node-10772674950",
    name: "Intermarche Express",
    latitude: 43.264005,
    longitude: 5.410628,
    neighborhood: "Littoral Sud",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-12156123575",
    name: "Intermarche Express",
    latitude: 43.276633,
    longitude: 5.396205,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-1282660439",
    name: "Intermarche Super",
    latitude: 43.290603,
    longitude: 5.399463,
    neighborhood: "Marseille",
    address: "22 Boulevard Jean Moulin, Marseille",
    category: "Commerce alimentaire",
    criteria: ["wheelchair_accessible"]
  }),
  makePlace({
    id: "osm-node-1594619889",
    name: "Intermarche Super",
    latitude: 43.311275,
    longitude: 5.402717,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: ["wheelchair_accessible"]
  }),
  makePlace({
    id: "osm-node-5182359122",
    name: "Intermarche Super",
    latitude: 43.284506,
    longitude: 5.434821,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-way-153536471",
    name: "Intermarche Super",
    latitude: 43.246758,
    longitude: 5.417209,
    neighborhood: "Littoral Sud",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-9082339642",
    name: "Intermarket",
    latitude: 43.369084,
    longitude: 5.35699,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-3823091144",
    name: "International Bar",
    latitude: 43.34011,
    longitude: 5.361227,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Bar",
    criteria: []
  }),
  makePlace({
    id: "osm-node-13658391003",
    name: "International Store -7/7-Asian Food-Marseille",
    latitude: 43.298584,
    longitude: 5.384423,
    neighborhood: "Longchamp",
    address: "156 La Canebiere, Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-12291734795",
    name: "Inzu",
    latitude: 43.303268,
    longitude: 5.397315,
    neighborhood: "Marseille",
    address: "7 Avenue des Chartreux, Marseille",
    category: "Commerce alimentaire",
    criteria: ["has_terrace","vegetarian_options"]
  }),
  makePlace({
    id: "osm-node-11381210769",
    name: "Io e Te",
    latitude: 43.291197,
    longitude: 5.357169,
    neighborhood: "Marseille",
    address: "37 Rue de Suez, Marseille",
    category: "Restaurant",
    criteria: ["wheelchair_accessible"]
  }),
  makePlace({
    id: "osm-node-12961178401",
    name: "IPPON MARSEILLE",
    latitude: 43.292855,
    longitude: 5.376164,
    neighborhood: "Noailles",
    address: "7 Rue Lulli, Marseille",
    category: "Restaurant",
    criteria: ["late_opening"]
  }),
  makePlace({
    id: "osm-node-11933091165",
    name: "Istambul Kebab d'Or",
    latitude: 43.295619,
    longitude: 5.377895,
    neighborhood: "Noailles",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["has_terrace","good_for_groups"]
  }),
  makePlace({
    id: "osm-node-3780623740",
    name: "Istanbul Kebab",
    latitude: 43.329054,
    longitude: 5.427069,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["good_for_groups"]
  }),
  makePlace({
    id: "osm-node-3780623736",
    name: "Istanbul Supermarche",
    latitude: 43.328561,
    longitude: 5.425885,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-4374349489",
    name: "Italia Cafe",
    latitude: 43.290998,
    longitude: 5.379342,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Cafe",
    criteria: []
  }),
  makePlace({
    id: "osm-node-8601941432",
    name: "Italia Pizza",
    latitude: 43.303355,
    longitude: 5.430879,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-11122661268",
    name: "Italian Trattoria",
    latitude: 43.2942,
    longitude: 5.374968,
    neighborhood: "Noailles",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-way-226586545",
    name: "Italova",
    latitude: 43.264594,
    longitude: 5.409249,
    neighborhood: "Littoral Sud",
    address: "3 Boulevard Gillibert, Marseille",
    category: "Restaurant",
    criteria: ["has_terrace","late_opening"]
  }),
  makePlace({
    id: "osm-node-13366938501",
    name: "Iwao",
    latitude: 43.292515,
    longitude: 5.375586,
    neighborhood: "Noailles",
    address: "27 Rue Sainte, Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-12484284701",
    name: "Izmir",
    latitude: 43.301234,
    longitude: 5.380419,
    neighborhood: "Longchamp",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["good_for_groups"]
  }),
  makePlace({
    id: "osm-node-9559147121",
    name: "J. L. Avarello",
    latitude: 43.262236,
    longitude: 5.403491,
    neighborhood: "Littoral Sud",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-10604208142",
    name: "J'aime Sushi",
    latitude: 43.268188,
    longitude: 5.388842,
    neighborhood: "Littoral Sud",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-13737028378",
    name: "Jacqueline",
    instagram_handle: "jacqueline__marseille",
    latitude: 43.28891,
    longitude: 5.3802,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-11878326069",
    name: "Jade d'Asie",
    latitude: 43.313763,
    longitude: 5.40274,
    neighborhood: "Marseille",
    address: "34 Avenue de Saint-Just, Marseille",
    category: "Restaurant",
    criteria: ["vegetarian_options"]
  }),
  makePlace({
    id: "osm-node-11860709839",
    name: "Jaipur",
    latitude: 43.293861,
    longitude: 5.373659,
    neighborhood: "Noailles",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-11469875069",
    name: "Jardin des delices",
    latitude: 43.24127,
    longitude: 5.376397,
    neighborhood: "Littoral Sud",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-11171840732",
    name: "Jardin Kche",
    latitude: 43.248195,
    longitude: 5.401152,
    neighborhood: "Littoral Sud",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-9439506587",
    name: "Jarret By Night",
    latitude: 43.30632,
    longitude: 5.40061,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: ["late_opening"]
  }),
  makePlace({
    id: "osm-node-8865246033",
    name: "Jazz Burger",
    latitude: 43.293982,
    longitude: 5.386352,
    neighborhood: "Cours Julien",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["has_terrace","good_for_groups"]
  }),
  makePlace({
    id: "osm-node-10200495439",
    name: "Jeff de Bruges",
    latitude: 43.247487,
    longitude: 5.400876,
    neighborhood: "Littoral Sud",
    address: "25 Rue Emile Zola, Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-12486244751",
    name: "Jeff de Bruges",
    latitude: 43.24922,
    longitude: 5.389701,
    neighborhood: "Littoral Sud",
    address: "112 Avenue de Hambourg, Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-8983960634",
    name: "Jeff de Bruges",
    latitude: 43.364207,
    longitude: 5.350378,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-13105756037",
    name: "Jeff de Bruges",
    latitude: 43.306661,
    longitude: 5.364195,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-2019893919",
    name: "Jin Jiang Express",
    latitude: 43.285936,
    longitude: 5.384423,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["late_opening"]
  }),
  makePlace({
    id: "osm-way-423299381",
    name: "Jinjiang Express",
    latitude: 43.268832,
    longitude: 5.404304,
    neighborhood: "Littoral Sud",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["vegetarian_options"]
  }),
  makePlace({
    id: "osm-node-13741927822",
    name: "Jo's Burger",
    latitude: 43.292445,
    longitude: 5.375284,
    neighborhood: "Noailles",
    address: "33 Rue Sainte, Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-13290907902",
    name: "John Silver",
    latitude: 43.292482,
    longitude: 5.370997,
    neighborhood: "Marseille",
    address: "6 Rue Neuve Sainte-Catherine, Marseille",
    category: "Restaurant",
    criteria: ["vegetarian_options"]
  }),
  makePlace({
    id: "osm-node-12290675028",
    name: "Jojo",
    latitude: 43.29685,
    longitude: 5.36811,
    neighborhood: "Le Panier",
    address: "17 Rue Caisserie, Marseille",
    category: "Restaurant",
    criteria: ["has_terrace","good_for_groups"]
  }),
  makePlace({
    id: "osm-node-12144348518",
    name: "Jolisso'",
    latitude: 43.294464,
    longitude: 5.385489,
    neighborhood: "Cours Julien",
    address: "Marseille",
    category: "Bar",
    criteria: ["has_terrace"]
  }),
  makePlace({
    id: "osm-node-13607569001",
    name: "Josie",
    latitude: 43.293844,
    longitude: 5.388828,
    neighborhood: "Cours Julien",
    address: "56 Rue de Bruys, Marseille",
    category: "Cafe",
    criteria: []
  }),
  makePlace({
    id: "osm-node-2261190794",
    name: "Jour",
    latitude: 43.305526,
    longitude: 5.366147,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["has_terrace","vegetarian_options","good_for_groups"]
  }),
  makePlace({
    id: "osm-node-11572328769",
    name: "Jour Euromed",
    latitude: 43.310634,
    longitude: 5.367977,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-11572341969",
    name: "Jour Les Docks",
    latitude: 43.305976,
    longitude: 5.366291,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["late_opening"]
  }),
  makePlace({
    id: "osm-node-8797915715",
    name: "Jour Vieux Port",
    latitude: 43.295501,
    longitude: 5.374603,
    neighborhood: "Noailles",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["has_terrace"]
  }),
  makePlace({
    id: "osm-node-9516556627",
    name: "JP Noodle Bar",
    latitude: 43.286672,
    longitude: 5.379437,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-12122540508",
    name: "Julis",
    latitude: 43.289576,
    longitude: 5.368827,
    neighborhood: "Saint-Victor",
    address: "Marseille",
    category: "Bar",
    criteria: []
  }),
  makePlace({
    id: "osm-node-5988199645",
    name: "K'Fete du Monde",
    latitude: 43.305137,
    longitude: 5.381298,
    neighborhood: "Longchamp",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-11503759076",
    name: "K'nafa",
    latitude: 43.304791,
    longitude: 5.368476,
    neighborhood: "Le Panier",
    address: "14 Gourjon, Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-11758959233",
    name: "K12 shop",
    latitude: 43.308032,
    longitude: 5.425845,
    neighborhood: "Marseille",
    address: "2 Rue Charles Kaddouz, Marseille",
    category: "Commerce alimentaire",
    criteria: ["allows_cb_no_minimum"]
  }),
  makePlace({
    id: "osm-node-4430423952",
    name: "Kaboul Fast Food",
    latitude: 43.30751,
    longitude: 5.381842,
    neighborhood: "Longchamp",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-12399893353",
    name: "Kaits Pita Bar",
    latitude: 43.258545,
    longitude: 5.393319,
    neighborhood: "Littoral Sud",
    address: "8 Rue Thieux, Marseille",
    category: "Restaurant",
    criteria: ["vegetarian_options"]
  }),
  makePlace({
    id: "osm-node-8468042037",
    name: "Kalou",
    latitude: 43.269266,
    longitude: 5.388158,
    neighborhood: "Littoral Sud",
    address: "24 Avenue de Mazargues, Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-9501706921",
    name: "Karim et Kamil",
    latitude: 43.331102,
    longitude: 5.362729,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-3807170691",
    name: "karma",
    latitude: 43.295914,
    longitude: 5.37943,
    neighborhood: "Cours Julien",
    address: "Marseille",
    category: "Cafe",
    criteria: []
  }),
  makePlace({
    id: "osm-node-12172808811",
    name: "KARMAN PRO",
    latitude: 43.347688,
    longitude: 5.364113,
    neighborhood: "Le Panier",
    address: "81 Rue Le Chatelier, Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-2862082916",
    name: "Kashi",
    latitude: 43.311911,
    longitude: 5.372375,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-9929610032",
    name: "Kaz Kreol",
    latitude: 43.295753,
    longitude: 5.38197,
    neighborhood: "Cours Julien",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["good_for_groups"]
  }),
  makePlace({
    id: "osm-node-12117274757",
    name: "Kaz Kreol",
    latitude: 43.295561,
    longitude: 5.38556,
    neighborhood: "Cours Julien",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-11932626170",
    name: "Kebab Berliner",
    latitude: 43.296855,
    longitude: 5.372132,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["good_for_groups"]
  }),
  makePlace({
    id: "osm-node-13592316734",
    name: "Ken Bubble",
    latitude: 43.297703,
    longitude: 5.371698,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["good_for_groups"]
  }),
  makePlace({
    id: "osm-node-13536340501",
    name: "Kess'Cafe",
    latitude: 43.302117,
    longitude: 5.37054,
    neighborhood: "Le Panier",
    address: "23 Boulevard des Dames, Marseille",
    category: "Cafe",
    criteria: []
  }),
  makePlace({
    id: "osm-node-4374349385",
    name: "KFC",
    latitude: 43.291196,
    longitude: 5.379236,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["late_opening","good_for_groups"]
  }),
  makePlace({
    id: "osm-node-7142497556",
    name: "KFC",
    latitude: 43.293716,
    longitude: 5.373086,
    neighborhood: "Noailles",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["late_opening","good_for_groups"]
  }),
  makePlace({
    id: "osm-way-112852153",
    name: "KFC",
    latitude: 43.329079,
    longitude: 5.430105,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["good_for_groups"]
  }),
  makePlace({
    id: "osm-way-157777456",
    name: "KFC",
    latitude: 43.295766,
    longitude: 5.481547,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["good_for_groups"]
  }),
  makePlace({
    id: "osm-way-335897008",
    name: "KFC",
    latitude: 43.341551,
    longitude: 5.377055,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["good_for_groups"]
  }),
  makePlace({
    id: "osm-node-13306300602",
    name: "Kima",
    instagram_handle: "kima.marseille",
    latitude: 43.292559,
    longitude: 5.37171,
    neighborhood: "Noailles",
    address: "24 Place aux Huiles, Marseille",
    category: "Restaurant",
    criteria: ["late_opening"]
  }),
  makePlace({
    id: "osm-node-11513993569",
    name: "KIN - Libala",
    latitude: 43.293725,
    longitude: 5.378464,
    neighborhood: "Cours Julien",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-10673310800",
    name: "King",
    latitude: 43.32973,
    longitude: 5.365527,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["good_for_groups"]
  }),
  makePlace({
    id: "osm-node-6779257028",
    name: "King Marcel",
    latitude: 43.312714,
    longitude: 5.367029,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["has_terrace","good_for_groups"]
  }),
  makePlace({
    id: "osm-node-1814908612",
    name: "Kiosque Le calice",
    latitude: 43.289985,
    longitude: 5.475568,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["good_for_groups"]
  }),
  makePlace({
    id: "osm-node-4763675758",
    name: "Kiosque Les Sauvages",
    latitude: 43.334831,
    longitude: 5.369564,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["has_terrace","good_for_groups"]
  }),
  makePlace({
    id: "osm-node-11190562843",
    name: "Kioto Sushi",
    latitude: 43.247617,
    longitude: 5.400295,
    neighborhood: "Littoral Sud",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["good_for_groups"]
  }),
  makePlace({
    id: "osm-node-10226161488",
    name: "KLM alimentation",
    latitude: 43.319118,
    longitude: 5.369051,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-2116957969",
    name: "Ko-Ishi",
    latitude: 43.292523,
    longitude: 5.375673,
    neighborhood: "Noailles",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["vegetarian_options"]
  }),
  makePlace({
    id: "osm-node-3756217305",
    name: "Konya Salon de the",
    latitude: 43.381007,
    longitude: 5.357793,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Cafe",
    criteria: []
  }),
  makePlace({
    id: "osm-node-12692705296",
    name: "Kook",
    latitude: 43.306252,
    longitude: 5.364559,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["good_for_groups"]
  }),
  makePlace({
    id: "osm-node-1933794886",
    name: "Kortchma",
    latitude: 43.293912,
    longitude: 5.384841,
    neighborhood: "Cours Julien",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-13925893201",
    name: "Koujina Express",
    latitude: 43.294871,
    longitude: 5.387386,
    neighborhood: "Cours Julien",
    address: "2 Boulevard Chave, Marseille",
    category: "Restaurant",
    criteria: ["late_opening"]
  }),
  makePlace({
    id: "osm-node-13046230203",
    name: "Koutouki",
    latitude: 43.299413,
    longitude: 5.386031,
    neighborhood: "Longchamp",
    address: "7 Boulevard de la Liberation - General de Monsabert, Marseille",
    category: "Restaurant",
    criteria: ["late_opening"]
  }),
  makePlace({
    id: "osm-node-13464790801",
    name: "krm",
    instagram_handle: "krm.marseille",
    latitude: 43.295421,
    longitude: 5.37765,
    neighborhood: "Noailles",
    address: "12 Rue Rouget de Lisle, Marseille",
    category: "Cafe",
    criteria: ["vegetarian_options"]
  }),
  makePlace({
    id: "osm-node-4360643135",
    name: "Kuai Le Express",
    latitude: 43.268796,
    longitude: 5.40437,
    neighborhood: "Littoral Sud",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-11049353426",
    name: "Kusmi Tea",
    latitude: 43.306616,
    longitude: 5.365386,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: ["wheelchair_accessible"]
  }),
  makePlace({
    id: "osm-node-9514393252",
    name: "Kyo",
    latitude: 43.284664,
    longitude: 5.384887,
    neighborhood: "Marseille",
    address: "15 Avenue du Prado, Marseille",
    category: "Restaurant",
    criteria: ["late_opening"]
  }),
  makePlace({
    id: "osm-node-9186710575",
    name: "Kzy",
    latitude: 43.271616,
    longitude: 5.386727,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Bar",
    criteria: ["has_terrace","late_opening"]
  }),
  makePlace({
    id: "osm-node-13123750001",
    name: "L'Abidjanais",
    instagram_handle: "restaurantlabidjanais",
    latitude: 43.297262,
    longitude: 5.382325,
    neighborhood: "Cours Julien",
    address: "10 Rue du Theatre-Francais, Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-7112360325",
    name: "L'absinthe",
    latitude: 43.294519,
    longitude: 5.399544,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-6779256996",
    name: "L'Acai Bowl",
    latitude: 43.309755,
    longitude: 5.367693,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["has_terrace","good_for_groups"]
  }),
  makePlace({
    id: "osm-node-4401243512",
    name: "L'Actuel",
    latitude: 43.3061,
    longitude: 5.393148,
    neighborhood: "Belle de Mai",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-7005844723",
    name: "L'Affine Bouche",
    latitude: 43.268147,
    longitude: 5.406963,
    neighborhood: "Littoral Sud",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: ["vegetarian_options"]
  }),
  makePlace({
    id: "osm-node-3755916425",
    name: "L'Afterwork",
    latitude: 43.291567,
    longitude: 5.380918,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Bar",
    criteria: []
  }),
  makePlace({
    id: "osm-node-4528496653",
    name: "l'Alcyone",
    latitude: 43.298499,
    longitude: 5.370212,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["late_opening","wheelchair_accessible"]
  }),
  makePlace({
    id: "osm-node-2087444104",
    name: "L'Alegria",
    latitude: 43.290801,
    longitude: 5.367483,
    neighborhood: "Saint-Victor",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-2862082917",
    name: "L'Algeroise",
    latitude: 43.311832,
    longitude: 5.372444,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-12346663522",
    name: "L'Alim",
    latitude: 43.257084,
    longitude: 5.394069,
    neighborhood: "Littoral Sud",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-6898227630",
    name: "L'Alim 2 St-Ga",
    latitude: 43.32312,
    longitude: 5.382558,
    neighborhood: "Belle de Mai",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-8100383791",
    name: "L'alim d'en face",
    latitude: 43.291724,
    longitude: 5.397099,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-4591323700",
    name: "L'alternative d'Ines",
    latitude: 43.360674,
    longitude: 5.31406,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-8831978318",
    name: "L'Alveola, Pizza al taglio",
    instagram_handle: "lalveola_al_taglio",
    latitude: 43.244057,
    longitude: 5.371432,
    neighborhood: "Littoral Sud",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-6033819240",
    name: "L'ambassade Bretonne",
    latitude: 43.296497,
    longitude: 5.37213,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["has_terrace","good_for_groups"]
  }),
  makePlace({
    id: "osm-node-6030739730",
    name: "L'ancre du panier",
    latitude: 43.299303,
    longitude: 5.368312,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-5817421529",
    name: "L'Angle",
    latitude: 43.294035,
    longitude: 5.374377,
    neighborhood: "Noailles",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["good_for_groups"]
  }),
  makePlace({
    id: "osm-node-2268236773",
    name: "L'annexe",
    latitude: 43.293497,
    longitude: 5.373063,
    neighborhood: "Noailles",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-13866539536",
    name: "L'annexe",
    latitude: 43.299471,
    longitude: 5.384442,
    neighborhood: "Longchamp",
    address: "Marseille",
    category: "Bar",
    criteria: []
  }),
  makePlace({
    id: "osm-node-9787661336",
    name: "L'Annexe Bar",
    latitude: 43.299383,
    longitude: 5.384673,
    neighborhood: "Longchamp",
    address: "7 Rue Saint-Bazile, Marseille",
    category: "Bar",
    criteria: []
  }),
  makePlace({
    id: "osm-node-11757616995",
    name: "L'antidote",
    latitude: 43.310502,
    longitude: 5.402151,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["good_for_groups"]
  }),
  makePlace({
    id: "osm-node-4087718754",
    name: "L'Antre 2",
    latitude: 43.29099,
    longitude: 5.393346,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-3647443693",
    name: "L'Apple Chef",
    latitude: 43.309235,
    longitude: 5.37244,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["has_terrace","good_for_groups"]
  }),
  makePlace({
    id: "osm-node-4716749815",
    name: "L'Argentin Grill",
    latitude: 43.28588,
    longitude: 5.384825,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["late_opening"]
  }),
  makePlace({
    id: "osm-node-9634033731",
    name: "L'Aristocrate",
    latitude: 43.359028,
    longitude: 5.357572,
    neighborhood: "Le Panier",
    address: "Avenue de la Viste, Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-1727495479",
    name: "L'Aromat",
    latitude: 43.2921,
    longitude: 5.373841,
    neighborhood: "Noailles",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-3768730553",
    name: "l'Arome",
    latitude: 43.294266,
    longitude: 5.384722,
    neighborhood: "Cours Julien",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["late_opening","vegetarian_options"]
  }),
  makePlace({
    id: "osm-node-11342005117",
    name: "l'Art de la Fromagerie",
    latitude: 43.301678,
    longitude: 5.398423,
    neighborhood: "Marseille",
    address: "1 place Marechal Fayolle, Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-2016402300",
    name: "L'Art de la Fromagerie",
    latitude: 43.29347,
    longitude: 5.385647,
    neighborhood: "Cours Julien",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-way-157625611",
    name: "L'Art des Mets",
    latitude: 43.283374,
    longitude: 5.499914,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-738499739",
    name: "L'Art Hache",
    latitude: 43.294421,
    longitude: 5.387674,
    neighborhood: "Cours Julien",
    address: "Marseille",
    category: "Bar",
    criteria: []
  }),
  makePlace({
    id: "osm-node-1871305278",
    name: "L'artisan de Charolais",
    latitude: 43.296259,
    longitude: 5.390548,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-6862377677",
    name: "L'Artistic Cafe",
    latitude: 43.299827,
    longitude: 5.385678,
    neighborhood: "Longchamp",
    address: "Marseille",
    category: "Cafe",
    criteria: []
  }),
  makePlace({
    id: "osm-node-3636748078",
    name: "L'Artistique",
    latitude: 43.293312,
    longitude: 5.375495,
    neighborhood: "Noailles",
    address: "Marseille",
    category: "Cafe",
    criteria: ["has_terrace"]
  }),
  makePlace({
    id: "osm-node-12117262240",
    name: "L'Aryaah",
    latitude: 43.295669,
    longitude: 5.385694,
    neighborhood: "Cours Julien",
    address: "Marseille",
    category: "Bar",
    criteria: []
  }),
  makePlace({
    id: "osm-node-4973332221",
    name: "L'ascenseur",
    latitude: 43.28677,
    longitude: 5.373304,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Cafe",
    criteria: []
  }),
  makePlace({
    id: "osm-node-11190562844",
    name: "L'Assiette Orientale",
    latitude: 43.247004,
    longitude: 5.401658,
    neighborhood: "Littoral Sud",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["has_terrace"]
  }),
  makePlace({
    id: "osm-node-9332853506",
    name: "L'Assiette Tunisienne",
    latitude: 43.265152,
    longitude: 5.408922,
    neighborhood: "Littoral Sud",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-1883487967",
    name: "L'Astoria",
    latitude: 43.291363,
    longitude: 5.382829,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-1485011625",
    name: "L'atelier Antik",
    latitude: 43.360125,
    longitude: 5.315484,
    neighborhood: "Le Panier",
    address: "30 Plage de l'Estaque, Marseille",
    category: "Commerce alimentaire",
    criteria: ["wheelchair_accessible","allows_cb_no_minimum"]
  }),
  makePlace({
    id: "osm-way-153572385",
    name: "L'Atelier Antik",
    latitude: 43.256185,
    longitude: 5.408119,
    neighborhood: "Littoral Sud",
    address: "40 Traverse de la Gaye, Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-2059563921",
    name: "L'Atelier Cours Julien",
    latitude: 43.293211,
    longitude: 5.383823,
    neighborhood: "Cours Julien",
    address: "Cours Julien, Marseille",
    category: "Restaurant",
    criteria: ["good_for_groups"]
  }),
  makePlace({
    id: "osm-node-4845823352",
    name: "L'Atelier d'Audrey",
    latitude: 43.307854,
    longitude: 5.425817,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: ["good_for_groups"]
  }),
  makePlace({
    id: "osm-node-2375838292",
    name: "L'atelier des Artistes",
    latitude: 43.29196,
    longitude: 5.384692,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-12330295474",
    name: "l'Atelier des saveurs",
    latitude: 43.307972,
    longitude: 5.396368,
    neighborhood: "Belle de Mai",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-2368365043",
    name: "L'atelier des saveurs",
    latitude: 43.299872,
    longitude: 5.384474,
    neighborhood: "Longchamp",
    address: "1 Rue de la Grande Armee, Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-way-69124661",
    name: "L'atelier du Sandwich",
    latitude: 43.291621,
    longitude: 5.379636,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["has_terrace","good_for_groups"]
  }),
  makePlace({
    id: "osm-node-12390313401",
    name: "L'Atelier Ferroni",
    latitude: 43.292481,
    longitude: 5.370912,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Bar",
    criteria: []
  }),
  makePlace({
    id: "osm-node-9658176049",
    name: "L'Atelier Saisons",
    latitude: 43.285627,
    longitude: 5.377418,
    neighborhood: "Marseille",
    address: "6 Boulevard Vauban, Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-2010715835",
    name: "L'Auberge",
    latitude: 43.293959,
    longitude: 5.386433,
    neighborhood: "Cours Julien",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["has_terrace","vegetarian_options","good_for_groups"]
  }),
  makePlace({
    id: "osm-node-1982739667",
    name: "L'Authentique",
    latitude: 43.248284,
    longitude: 5.375277,
    neighborhood: "Littoral Sud",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["good_for_groups"]
  }),
  makePlace({
    id: "osm-node-9056140468",
    name: "L'avenir",
    latitude: 43.308532,
    longitude: 5.37731,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Bar",
    criteria: []
  }),
  makePlace({
    id: "osm-node-9207708742",
    name: "L'Avidita",
    latitude: 43.281072,
    longitude: 5.392266,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-7813803786",
    name: "L'eau a la bouche",
    latitude: 43.282903,
    longitude: 5.35032,
    neighborhood: "Malmousque",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-2235663010",
    name: "L'Ecailler",
    latitude: 43.293276,
    longitude: 5.373448,
    neighborhood: "Noailles",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-13105559995",
    name: "L'ecailler Des Halles",
    latitude: 43.292869,
    longitude: 5.373234,
    neighborhood: "Noailles",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-6031928973",
    name: "L'ecailler du Panier",
    latitude: 43.297734,
    longitude: 5.365466,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["good_for_groups"]
  }),
  makePlace({
    id: "osm-node-12122535414",
    name: "L'ecaillerie",
    latitude: 43.290098,
    longitude: 5.366176,
    neighborhood: "Saint-Victor",
    address: "28 Rue d'Endoume, Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-6427438348",
    name: "L'Eclectique",
    latitude: 43.300445,
    longitude: 5.386969,
    neighborhood: "Longchamp",
    address: "30 Cours Joseph Thierry, Marseille",
    category: "Bar",
    criteria: ["late_opening"]
  }),
  makePlace({
    id: "osm-node-2368671376",
    name: "L'ecomotive",
    instagram_handle: "cafelecomotive",
    latitude: 43.301372,
    longitude: 5.380782,
    neighborhood: "Longchamp",
    address: "2 Place des Marseillaises, Marseille",
    category: "Cafe",
    criteria: ["has_wifi","vegetarian_options","allows_cb_no_minimum","laptop_friendly"]
  }),
  makePlace({
    id: "osm-node-11190556763",
    name: "L'Ecrin de Verdure",
    latitude: 43.250719,
    longitude: 5.395496,
    neighborhood: "Littoral Sud",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["has_terrace"]
  }),
  makePlace({
    id: "osm-node-5070023987",
    name: "L'Effet Clochette",
    latitude: 43.297424,
    longitude: 5.368733,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-9683194821",
    name: "L'Effet Mer",
    latitude: 43.278874,
    longitude: 5.303422,
    neighborhood: "Malmousque",
    address: "Marseille",
    category: "Cafe",
    criteria: []
  }),
  makePlace({
    id: "osm-node-2878130116",
    name: "L'EFL Cafe",
    latitude: 43.325421,
    longitude: 5.381616,
    neighborhood: "Longchamp",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-9929575734",
    name: "L'Elephant Rose a Pois Blancs",
    latitude: 43.293717,
    longitude: 5.385166,
    neighborhood: "Cours Julien",
    address: "Marseille",
    category: "Cafe",
    criteria: ["late_opening"]
  }),
  makePlace({
    id: "osm-node-6723044815",
    name: "L'Elite Istambul",
    latitude: 43.277992,
    longitude: 5.388657,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["has_terrace"]
  }),
  makePlace({
    id: "osm-node-11200796573",
    name: "L'enseigne 117",
    latitude: 43.291036,
    longitude: 5.368682,
    neighborhood: "Saint-Victor",
    address: "117 Rue Sainte, Marseille",
    category: "Restaurant",
    criteria: ["has_terrace"]
  }),
  makePlace({
    id: "osm-way-153532609",
    name: "L'Entracte",
    latitude: 43.271987,
    longitude: 5.410712,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-11932565680",
    name: "L'entre Deux",
    latitude: 43.296748,
    longitude: 5.373124,
    neighborhood: "Noailles",
    address: "Marseille",
    category: "Bar",
    criteria: []
  }),
  makePlace({
    id: "osm-node-4396418908",
    name: "L'Entre Pots",
    latitude: 43.300247,
    longitude: 5.386541,
    neighborhood: "Longchamp",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: ["late_opening"]
  }),
  makePlace({
    id: "osm-node-449112905",
    name: "L'entrecote",
    latitude: 43.289772,
    longitude: 5.365122,
    neighborhood: "Saint-Victor",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["late_opening"]
  }),
  makePlace({
    id: "osm-node-1941647578",
    name: "L'entrecote",
    latitude: 43.29437,
    longitude: 5.374862,
    neighborhood: "Noailles",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["has_terrace","wheelchair_accessible"]
  }),
  makePlace({
    id: "osm-node-8044150899",
    name: "L'Entrecote",
    latitude: 43.307523,
    longitude: 5.423504,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-13965785069",
    name: "L'epi de ble",
    latitude: 43.328581,
    longitude: 5.426338,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-3823091145",
    name: "L'Epi Gaulois",
    latitude: 43.343796,
    longitude: 5.359357,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-7833279030",
    name: "L'Epicerie",
    latitude: 43.268871,
    longitude: 5.419459,
    neighborhood: "Littoral Sud",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-9357688150",
    name: "L'epicerie Maison Gourmande",
    latitude: 43.271758,
    longitude: 5.387017,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-6060071102",
    name: "L'epicerie paysanne",
    latitude: 43.302146,
    longitude: 5.393932,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: ["wheelchair_accessible"]
  }),
  makePlace({
    id: "osm-node-6446013989",
    name: "L'Equinoxe",
    latitude: 43.254934,
    longitude: 5.37549,
    neighborhood: "Littoral Sud",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["has_terrace"]
  }),
  makePlace({
    id: "osm-node-10968875648",
    name: "L'Erika",
    latitude: 43.230615,
    longitude: 5.43974,
    neighborhood: "Littoral Sud",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["good_for_groups"]
  }),
  makePlace({
    id: "osm-node-6737202810",
    name: "L'Escale",
    latitude: 43.244792,
    longitude: 5.372396,
    neighborhood: "Littoral Sud",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["has_terrace","late_opening"]
  }),
  makePlace({
    id: "osm-node-12248207501",
    name: "L'Escale",
    latitude: 43.278952,
    longitude: 5.304098,
    neighborhood: "Malmousque",
    address: "Quai du Port Ile Ratonneau, Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-8944460094",
    name: "L'Escale des Docks",
    latitude: 43.315884,
    longitude: 5.367059,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["has_terrace"]
  }),
  makePlace({
    id: "osm-node-13759040611",
    name: "L'escale Marocaine",
    latitude: 43.314767,
    longitude: 5.386025,
    neighborhood: "Belle de Mai",
    address: "33 Boulevard de Plombieres, Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-2394376867",
    name: "L'Escalie",
    latitude: 43.293477,
    longitude: 5.382931,
    neighborhood: "Cours Julien",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-4227920094",
    name: "L'Escapade",
    latitude: 43.333978,
    longitude: 5.407368,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["has_terrace"]
  }),
  makePlace({
    id: "osm-way-697987342",
    name: "L'Escapade",
    latitude: 43.345754,
    longitude: 5.435037,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-5518464040",
    name: "L'Esperantine",
    latitude: 43.297165,
    longitude: 5.366195,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-3804455751",
    name: "L'Esplai du Grand Bar des Goudes",
    latitude: 43.215172,
    longitude: 5.34597,
    neighborhood: "Malmousque",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-2268236774",
    name: "L'esquinade",
    latitude: 43.293397,
    longitude: 5.37321,
    neighborhood: "Noailles",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-8957273950",
    name: "L'Estaca",
    latitude: 43.363574,
    longitude: 5.309991,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-4591323691",
    name: "L'Etincelle",
    latitude: 43.360902,
    longitude: 5.313242,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-4109316466",
    name: "L'Etoile de Beyrouth",
    latitude: 43.28509,
    longitude: 5.389778,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["vegetarian_options"]
  }),
  makePlace({
    id: "osm-node-4393392839",
    name: "L'europeen",
    latitude: 43.308995,
    longitude: 5.371669,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["has_terrace","vegetarian_options","good_for_groups"]
  }),
  makePlace({
    id: "osm-node-10315214755",
    name: "L'Eveche",
    latitude: 43.29795,
    longitude: 5.365811,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-5041270622",
    name: "L'evidence",
    latitude: 43.298739,
    longitude: 5.401515,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-4405959279",
    name: "L'Exotique",
    latitude: 43.299205,
    longitude: 5.384741,
    neighborhood: "Longchamp",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-way-753515199",
    name: "L'Expresso Cafe",
    latitude: 43.258921,
    longitude: 5.409166,
    neighborhood: "Littoral Sud",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["has_terrace","vegetarian_options","good_for_groups"]
  }),
  makePlace({
    id: "osm-node-10963925839",
    name: "L'heure de Marseille",
    latitude: 43.295309,
    longitude: 5.376554,
    neighborhood: "Noailles",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["vegetarian_options"]
  }),
  makePlace({
    id: "osm-node-4951205723",
    name: "L'Hyppocampe",
    latitude: 43.296529,
    longitude: 5.373065,
    neighborhood: "Noailles",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["has_terrace"]
  }),
  makePlace({
    id: "osm-node-5070785802",
    name: "L'Hyppocampe",
    latitude: 43.361689,
    longitude: 5.308082,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-1800834039",
    name: "L'Ilot Vert",
    latitude: 43.256471,
    longitude: 5.42029,
    neighborhood: "Littoral Sud",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-2425875284",
    name: "L'Ilot Vert",
    latitude: 43.261552,
    longitude: 5.393601,
    neighborhood: "Littoral Sud",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-9921511980",
    name: "L'Ilot Vert",
    latitude: 43.269517,
    longitude: 5.389563,
    neighborhood: "Littoral Sud",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-5132892030",
    name: "L'inattendu",
    latitude: 43.316867,
    longitude: 5.377692,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-7012713782",
    name: "L'indecis",
    latitude: 43.29005,
    longitude: 5.39855,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["late_opening","vegetarian_options"]
  }),
  makePlace({
    id: "osm-node-12371673786",
    name: "L'Indigo Cafe",
    latitude: 43.255209,
    longitude: 5.375447,
    neighborhood: "Littoral Sud",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-3106616845",
    name: "L'infusion",
    latitude: 43.293838,
    longitude: 5.37604,
    neighborhood: "Noailles",
    address: "Marseille",
    category: "Cafe",
    criteria: []
  }),
  makePlace({
    id: "osm-node-1886610762",
    name: "L'innattendu",
    latitude: 43.292225,
    longitude: 5.372927,
    neighborhood: "Noailles",
    address: "Rue de la Paix, Marseille",
    category: "Restaurant",
    criteria: ["wheelchair_accessible","good_for_groups"]
  }),
  makePlace({
    id: "osm-node-10968685764",
    name: "L'instant",
    latitude: 43.3097,
    longitude: 5.400723,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-2010715837",
    name: "L'Intermediaire",
    latitude: 43.293942,
    longitude: 5.386514,
    neighborhood: "Cours Julien",
    address: "Marseille",
    category: "Bar",
    criteria: ["has_terrace"]
  }),
  makePlace({
    id: "osm-node-10281902465",
    name: "L'Italien",
    latitude: 43.284472,
    longitude: 5.386071,
    neighborhood: "Marseille",
    address: "22 Avenue Jules Cantini, Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-1882358508",
    name: "L'oasis des Saveurs",
    latitude: 43.294417,
    longitude: 5.397679,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-way-1518057720",
    name: "L'Oasis Michelet",
    latitude: 43.269754,
    longitude: 5.392708,
    neighborhood: "Littoral Sud",
    address: "Marseille",
    category: "Bar",
    criteria: []
  }),
  makePlace({
    id: "osm-node-2841931138",
    name: "L'Odyssee",
    latitude: 43.247349,
    longitude: 5.401419,
    neighborhood: "Littoral Sud",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-3717734045",
    name: "L'oiseau de nuit",
    latitude: 43.29403,
    longitude: 5.383526,
    neighborhood: "Cours Julien",
    address: "Marseille",
    category: "Bar",
    criteria: ["has_terrace","wheelchair_accessible"]
  }),
  makePlace({
    id: "osm-node-6655677585",
    name: "l'Oleas",
    latitude: 43.294764,
    longitude: 5.383174,
    neighborhood: "Cours Julien",
    address: "Cours Julien, Marseille",
    category: "Restaurant",
    criteria: ["late_opening","vegetarian_options"]
  }),
  makePlace({
    id: "osm-node-2459834252",
    name: "L'Oli Be",
    latitude: 43.300095,
    longitude: 5.386186,
    neighborhood: "Longchamp",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["vegetarian_options"]
  }),
  makePlace({
    id: "osm-way-112822206",
    name: "L'Oliveraie",
    latitude: 43.353484,
    longitude: 5.448831,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["has_terrace"]
  }),
  makePlace({
    id: "osm-node-11014487605",
    name: "L'Oliveraie",
    latitude: 43.292911,
    longitude: 5.371528,
    neighborhood: "Noailles",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-6417767537",
    name: "L'olivier",
    latitude: 43.300068,
    longitude: 5.517315,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-4290912667",
    name: "L'Olympe",
    latitude: 43.268771,
    longitude: 5.40284,
    neighborhood: "Littoral Sud",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-13135642563",
    name: "L'olympienne",
    latitude: 43.27583,
    longitude: 5.389872,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["good_for_groups"]
  }),
  makePlace({
    id: "osm-node-12800805600",
    name: "L'Opium",
    latitude: 43.264012,
    longitude: 5.374024,
    neighborhood: "Littoral Sud",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-3992084768",
    name: "L'Orchidee",
    latitude: 43.283978,
    longitude: 5.435674,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-2174798901",
    name: "L'Origan",
    latitude: 43.308532,
    longitude: 5.400144,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-11938982389",
    name: "L'Osteria",
    latitude: 43.28221,
    longitude: 5.385435,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["has_terrace"]
  }),
  makePlace({
    id: "osm-node-3045261155",
    name: "L'Oxford",
    latitude: 43.343932,
    longitude: 5.439748,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-5340036804",
    name: "L'Un Des Sens",
    latitude: 43.296981,
    longitude: 5.484333,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-8618064758",
    name: "L'Unik Pizzeria",
    latitude: 43.309935,
    longitude: 5.400774,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["late_opening","good_for_groups"]
  }),
  makePlace({
    id: "osm-node-5405765489",
    name: "L'Ylios",
    latitude: 43.357075,
    longitude: 5.337535,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["has_terrace","good_for_groups"]
  }),
  makePlace({
    id: "osm-node-6627597521",
    name: "La Baguette Imperiale",
    latitude: 43.308914,
    longitude: 5.439438,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["good_for_groups"]
  }),
  makePlace({
    id: "osm-node-3830903284",
    name: "La Baguette Magique",
    latitude: 43.335736,
    longitude: 5.363156,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-13536832673",
    name: "La Baguette Marseillaise",
    latitude: 43.351269,
    longitude: 5.353923,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-way-154227863",
    name: "La Baie des Singes",
    latitude: 43.213993,
    longitude: 5.338039,
    neighborhood: "Malmousque",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-5141491540",
    name: "La Baie du Dragon",
    latitude: 43.292051,
    longitude: 5.383662,
    neighborhood: "Cours Julien",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["late_opening","vegetarian_options"]
  }),
  makePlace({
    id: "osm-node-2115086366",
    name: "La Bakery By Deia",
    latitude: 43.293935,
    longitude: 5.376128,
    neighborhood: "Noailles",
    address: "Marseille",
    category: "Cafe",
    criteria: ["has_terrace"]
  }),
  makePlace({
    id: "osm-node-11368727880",
    name: "La Balagne",
    latitude: 43.265049,
    longitude: 5.373745,
    neighborhood: "Littoral Sud",
    address: "51 Promenade Georges Pompidou, Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-6158618429",
    name: "La Baleine a Cabosse",
    latitude: 43.283516,
    longitude: 5.381075,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-6134859820",
    name: "La banettine",
    latitude: 43.3018,
    longitude: 5.390996,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-8957273933",
    name: "La Baraka M.r",
    latitude: 43.362332,
    longitude: 5.306132,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-11778639069",
    name: "La bastide de Massimo",
    latitude: 43.305407,
    longitude: 5.404871,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-10981538605",
    name: "La Bazarette",
    latitude: 43.298304,
    longitude: 5.366183,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-1290701107",
    name: "La Beer'Ocratie",
    latitude: 43.295716,
    longitude: 5.396767,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Cafe",
    criteria: []
  }),
  makePlace({
    id: "osm-node-2408318940",
    name: "La Bella Pizza",
    latitude: 43.291713,
    longitude: 5.384286,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["late_opening"]
  }),
  makePlace({
    id: "osm-node-5930802576",
    name: "La Belle des Viandes",
    latitude: 43.313066,
    longitude: 5.385877,
    neighborhood: "Belle de Mai",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-6912384509",
    name: "La Belle Etoile",
    latitude: 43.31764,
    longitude: 5.381431,
    neighborhood: "Longchamp",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-7833239297",
    name: "La Belle Jardiniere",
    latitude: 43.284619,
    longitude: 5.360073,
    neighborhood: "Saint-Victor",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-2308816406",
    name: "La Biere de la Plaine",
    latitude: 43.293563,
    longitude: 5.387779,
    neighborhood: "Cours Julien",
    address: "Marseille",
    category: "Bar",
    criteria: []
  }),
  makePlace({
    id: "osm-node-2010715827",
    name: "La bisette",
    latitude: 43.293599,
    longitude: 5.385324,
    neighborhood: "Cours Julien",
    address: "Marseille",
    category: "Bar",
    criteria: ["late_opening"]
  }),
  makePlace({
    id: "osm-node-5890723098",
    name: "La boheme",
    latitude: 43.293916,
    longitude: 5.38358,
    neighborhood: "Cours Julien",
    address: "Marseille",
    category: "Cafe",
    criteria: []
  }),
  makePlace({
    id: "osm-way-69141882",
    name: "La Boite a Bouffe",
    latitude: 43.29055,
    longitude: 5.377529,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["good_for_groups"]
  }),
  makePlace({
    id: "osm-node-12920174122",
    name: "La boite a panisse",
    latitude: 43.296782,
    longitude: 5.36743,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-3779480022",
    name: "La Bolognaise",
    latitude: 43.331007,
    longitude: 5.427506,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-7649321488",
    name: "La bonne bouffe - traiteur",
    latitude: 43.292597,
    longitude: 5.374811,
    neighborhood: "Noailles",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["has_wifi","late_opening","good_for_groups"]
  }),
  makePlace({
    id: "osm-node-13181112315",
    name: "La Bonne Chaire",
    latitude: 43.258714,
    longitude: 5.416955,
    neighborhood: "Littoral Sud",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-5472939175",
    name: "La Bonne Epicerie",
    latitude: 43.285198,
    longitude: 5.374767,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-13135700890",
    name: "La Bonne Epoque",
    latitude: 43.275882,
    longitude: 5.389848,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Bar",
    criteria: []
  }),
  makePlace({
    id: "osm-node-1448514092",
    name: "La Bonne mer",
    latitude: 43.283159,
    longitude: 5.373406,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-1448514088",
    name: "La Bonne Mere",
    latitude: 43.283095,
    longitude: 5.373691,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["late_opening","good_for_groups"]
  }),
  makePlace({
    id: "osm-node-11331339171",
    name: "La bonne saison",
    latitude: 43.302661,
    longitude: 5.386843,
    neighborhood: "Longchamp",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-13461013301",
    name: "La Bottega",
    latitude: 43.287667,
    longitude: 5.386367,
    neighborhood: "Marseille",
    address: "84 Rue Perrin-Solliers, Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-7838214796",
    name: "La Boucherie Bec",
    latitude: 43.256714,
    longitude: 5.420327,
    neighborhood: "Littoral Sud",
    address: "11 Boulevard du Redon, Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-8897551892",
    name: "La boucherie de la Delorme",
    latitude: 43.347583,
    longitude: 5.370326,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-4535292732",
    name: "La boucherie de la Rouviere",
    latitude: 43.252926,
    longitude: 5.423148,
    neighborhood: "Littoral Sud",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-11190566983",
    name: "La Boucherie de Mazargues",
    latitude: 43.246831,
    longitude: 5.402014,
    neighborhood: "Littoral Sud",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-6416533292",
    name: "La Boucle",
    latitude: 43.301204,
    longitude: 5.510166,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["has_terrace"]
  }),
  makePlace({
    id: "osm-node-8506460934",
    name: "La boulangerie aixoise",
    latitude: 43.293151,
    longitude: 5.376542,
    neighborhood: "Noailles",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: ["has_terrace"]
  }),
  makePlace({
    id: "osm-node-12122990145",
    name: "La boule du panier",
    latitude: 43.30021,
    longitude: 5.368668,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Bar",
    criteria: []
  }),
  makePlace({
    id: "osm-node-9566462048",
    name: "La Boutique du Macaron",
    latitude: 43.312365,
    longitude: 5.46523,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-1941847112",
    name: "La Brasserie",
    latitude: 43.294941,
    longitude: 5.374654,
    neighborhood: "Noailles",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["has_terrace","wheelchair_accessible"]
  }),
  makePlace({
    id: "osm-node-5340029626",
    name: "La Brasserie",
    latitude: 43.296991,
    longitude: 5.484246,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["has_terrace"]
  }),
  makePlace({
    id: "osm-node-5890711077",
    name: "La Brasserie Communale",
    latitude: 43.293723,
    longitude: 5.383656,
    neighborhood: "Cours Julien",
    address: "Marseille",
    category: "Bar",
    criteria: []
  }),
  makePlace({
    id: "osm-node-10095732617",
    name: "La brasserie du vieux port",
    latitude: 43.296396,
    longitude: 5.371144,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["has_terrace","good_for_groups"]
  }),
  makePlace({
    id: "osm-node-12794369364",
    name: "La Brasserie du Village",
    latitude: 43.28928,
    longitude: 5.498612,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-2039908814",
    name: "La Brioche",
    latitude: 43.295173,
    longitude: 5.377496,
    neighborhood: "Noailles",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-4290912686",
    name: "La Broche",
    latitude: 43.269614,
    longitude: 5.403236,
    neighborhood: "Littoral Sud",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["has_terrace","late_opening","good_for_groups"]
  }),
  makePlace({
    id: "osm-node-11486572089",
    name: "La Broche Tourne",
    latitude: 43.27853,
    longitude: 5.392336,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-2368671618",
    name: "La Buvette du Lac",
    latitude: 43.261066,
    longitude: 5.381895,
    neighborhood: "Littoral Sud",
    address: "Marseille",
    category: "Cafe",
    criteria: []
  }),
  makePlace({
    id: "osm-way-154625867",
    name: "La Cabane des Amis",
    latitude: 43.264394,
    longitude: 5.369349,
    neighborhood: "Littoral Sud",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["good_for_groups"]
  }),
  makePlace({
    id: "osm-way-70060604",
    name: "La cabane du pharo",
    latitude: 43.293146,
    longitude: 5.359807,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["has_terrace","good_for_groups"]
  }),
  makePlace({
    id: "osm-node-12803660001",
    name: "la Cachette",
    latitude: 43.297416,
    longitude: 5.370612,
    neighborhood: "Le Panier",
    address: "24 Rue de la Guirlande, Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-way-219022411",
    name: "La calanque blanche",
    latitude: 43.22314,
    longitude: 5.34665,
    neighborhood: "Malmousque",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["has_terrace"]
  }),
  makePlace({
    id: "osm-node-5810436822",
    name: "La Cane Biere",
    latitude: 43.30298,
    longitude: 5.395281,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Bar",
    criteria: ["has_terrace","has_wifi","late_opening","allows_cb_no_minimum"]
  }),
  makePlace({
    id: "osm-node-621188166",
    name: "La Cantine",
    latitude: 43.292418,
    longitude: 5.372947,
    neighborhood: "Noailles",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["has_terrace"]
  }),
  makePlace({
    id: "osm-node-12806276222",
    name: "La Cantine",
    latitude: 43.296065,
    longitude: 5.386308,
    neighborhood: "Cours Julien",
    address: "Marseille",
    category: "Cafe",
    criteria: ["has_terrace"]
  }),
  makePlace({
    id: "osm-node-11386471031",
    name: "La cantine de Jeannine",
    latitude: 43.286775,
    longitude: 5.386344,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-1941573716",
    name: "La cantine des docks",
    latitude: 43.304338,
    longitude: 5.36675,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-997670284",
    name: "La Cantine du Boulanger",
    latitude: 43.293471,
    longitude: 5.374618,
    neighborhood: "Noailles",
    address: "Marseille",
    category: "Cafe",
    criteria: []
  }),
  makePlace({
    id: "osm-node-12905841122",
    name: "La cantine solaire du Presage",
    latitude: 43.312016,
    longitude: 5.397102,
    neighborhood: "Belle de Mai",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["vegetarian_options"]
  }),
  makePlace({
    id: "osm-node-601530328",
    name: "La Cantinetta",
    latitude: 43.295335,
    longitude: 5.38246,
    neighborhood: "Cours Julien",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["late_opening"]
  }),
  makePlace({
    id: "osm-node-6409052707",
    name: "La Capsule",
    latitude: 43.290661,
    longitude: 5.421692,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["has_terrace"]
  }),
  makePlace({
    id: "osm-node-1345284476",
    name: "La Caravelle",
    instagram_handle: "barlacaravelle",
    latitude: 43.296495,
    longitude: 5.372047,
    neighborhood: "Le Panier",
    address: "34 Quai du Port, Marseille",
    category: "Restaurant",
    criteria: ["has_terrace"]
  }),
  makePlace({
    id: "osm-node-7925474625",
    name: "La Casa Braisee",
    latitude: 43.287287,
    longitude: 5.466164,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["good_for_groups"]
  }),
  makePlace({
    id: "osm-node-13853753201",
    name: "La casa del pizza",
    latitude: 43.294161,
    longitude: 5.408116,
    neighborhood: "Marseille",
    address: "18 Boulevard Baudelaire, Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-13105559994",
    name: "La Casbah Des Halles",
    latitude: 43.292879,
    longitude: 5.373281,
    neighborhood: "Noailles",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-8532266123",
    name: "La Casertane",
    latitude: 43.292862,
    longitude: 5.375344,
    neighborhood: "Noailles",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["has_terrace","vegetarian_options"]
  }),
  makePlace({
    id: "osm-node-8989818616",
    name: "La castellane",
    latitude: 43.285948,
    longitude: 5.383066,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-10745482645",
    name: "La Cave a Jambon",
    latitude: 43.255344,
    longitude: 5.408017,
    neighborhood: "Littoral Sud",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["has_terrace"]
  }),
  makePlace({
    id: "osm-node-6258990576",
    name: "La Cave d'Alexandre",
    latitude: 43.289423,
    longitude: 5.387673,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-1974346490",
    name: "La Cave de Saint-Louis",
    latitude: 43.278913,
    longitude: 5.416449,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-6332080240",
    name: "La Cave des Papilles",
    latitude: 43.291489,
    longitude: 5.373881,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-9353418416",
    name: "La Cave du Pharo",
    latitude: 43.290978,
    longitude: 5.359281,
    neighborhood: "Marseille",
    address: "19 Avenue Pasteur, Marseille",
    category: "Commerce alimentaire",
    criteria: ["wheelchair_accessible","good_for_groups"]
  }),
  makePlace({
    id: "osm-node-4903008892",
    name: "La Cave Du Stade",
    latitude: 43.274931,
    longitude: 5.395379,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: ["good_for_groups"]
  }),
  makePlace({
    id: "osm-node-7707513972",
    name: "La Cave du Xeme",
    latitude: 43.282098,
    longitude: 5.427542,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-6031932646",
    name: "La caveau su theatre",
    latitude: 43.297594,
    longitude: 5.365483,
    neighborhood: "Le Panier",
    address: "26 Place de Lenche, Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-2822282267",
    name: "La Charolaise",
    latitude: 43.278653,
    longitude: 5.39205,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-3647443694",
    name: "La Charolaise",
    latitude: 43.313246,
    longitude: 5.371213,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-12304505679",
    name: "La Charolaise de Bonneveine",
    latitude: 43.251198,
    longitude: 5.388294,
    neighborhood: "Littoral Sud",
    address: "71 Avenue de Hambourg, Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-1673230305",
    name: "La Chicoree",
    latitude: 43.292187,
    longitude: 5.385103,
    neighborhood: "Cours Julien",
    address: "16 Rue Fontange, Marseille",
    category: "Commerce alimentaire",
    criteria: ["wheelchair_accessible"]
  }),
  makePlace({
    id: "osm-node-1974324479",
    name: "La Chocolatine",
    latitude: 43.279124,
    longitude: 5.416906,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-991811838",
    name: "La Chola",
    latitude: 43.293739,
    longitude: 5.387197,
    neighborhood: "Cours Julien",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-10961451148",
    name: "La ciergerie",
    latitude: 43.291301,
    longitude: 5.385055,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["late_opening"]
  }),
  makePlace({
    id: "osm-node-7414618361",
    name: "La Cigogne d'Alsace",
    latitude: 43.291415,
    longitude: 5.385314,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-11278136436",
    name: "La Civette",
    latitude: 43.257429,
    longitude: 5.394185,
    neighborhood: "Littoral Sud",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["has_terrace"]
  }),
  makePlace({
    id: "osm-node-2822300955",
    name: "La Civette du Parc",
    latitude: 43.275466,
    longitude: 5.395726,
    neighborhood: "Marseille",
    address: "Boulevard Rabatau, Marseille",
    category: "Bar",
    criteria: []
  }),
  makePlace({
    id: "osm-node-3822613272",
    name: "La Civette Saint-Louis",
    latitude: 43.347362,
    longitude: 5.359224,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Bar",
    criteria: []
  }),
  makePlace({
    id: "osm-node-2080122387",
    name: "La Cle des Champs",
    latitude: 43.304025,
    longitude: 5.415643,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-3204079818",
    name: "La Colombe",
    latitude: 43.289847,
    longitude: 5.439727,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-9599081886",
    name: "La Concorde",
    latitude: 43.2481,
    longitude: 5.401053,
    neighborhood: "Littoral Sud",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-12189615601",
    name: "La corbeille des reformes",
    latitude: 43.300012,
    longitude: 5.384554,
    neighborhood: "Longchamp",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-way-153551899",
    name: "La Couscoussiere",
    latitude: 43.246427,
    longitude: 5.404273,
    neighborhood: "Littoral Sud",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-12789106502",
    name: "La Coutellerie",
    instagram_handle: "la_coutellerie_marseille",
    latitude: 43.290896,
    longitude: 5.388516,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-4764605526",
    name: "La Crepe au Carre",
    latitude: 43.292181,
    longitude: 5.371863,
    neighborhood: "Noailles",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["vegetarian_options"]
  }),
  makePlace({
    id: "osm-node-11386471039",
    name: "La cressonnieres",
    latitude: 43.287434,
    longitude: 5.388763,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-8949516653",
    name: "La cucina di Nini",
    latitude: 43.304432,
    longitude: 5.365434,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-2104666289",
    name: "La Cuisine au Beurre",
    latitude: 43.29617,
    longitude: 5.369363,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-1933775254",
    name: "La Cuisine de Gagny",
    latitude: 43.295648,
    longitude: 5.395649,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-13788352302",
    name: "La Cuisine de l'Arc",
    latitude: 43.29452,
    longitude: 5.379851,
    neighborhood: "Cours Julien",
    address: "5 Rue de l'Arc, Marseille",
    category: "Restaurant",
    criteria: ["has_wifi"]
  }),
  makePlace({
    id: "osm-node-6354674326",
    name: "La Cure Gourmande",
    latitude: 43.296183,
    longitude: 5.376624,
    neighborhood: "Noailles",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: ["wheelchair_accessible"]
  }),
  makePlace({
    id: "osm-node-3825935647",
    name: "La Dame Noir",
    latitude: 43.291612,
    longitude: 5.384463,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Bar",
    criteria: ["late_opening"]
  }),
  makePlace({
    id: "osm-node-7614761385",
    name: "La Daurade",
    latitude: 43.293449,
    longitude: 5.373385,
    neighborhood: "Noailles",
    address: "8 Rue Fortia, Marseille",
    category: "Restaurant",
    criteria: ["late_opening"]
  }),
  makePlace({
    id: "osm-node-12452716157",
    name: "La Dent Creuse",
    latitude: 43.279246,
    longitude: 5.305583,
    neighborhood: "Malmousque",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["vegetarian_options","good_for_groups"]
  }),
  makePlace({
    id: "osm-node-10315214752",
    name: "La Descente des Accoules",
    latitude: 43.297852,
    longitude: 5.365896,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: ["good_for_groups"]
  }),
  makePlace({
    id: "osm-way-67701825",
    name: "La Dilligence",
    latitude: 43.302728,
    longitude: 5.384837,
    neighborhood: "Longchamp",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["good_for_groups"]
  }),
  makePlace({
    id: "osm-node-12141643449",
    name: "La Fabrik",
    latitude: 43.282451,
    longitude: 5.3813,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["vegetarian_options","good_for_groups"]
  }),
  makePlace({
    id: "osm-node-1740694593",
    name: "La Fabrique",
    latitude: 43.296678,
    longitude: 5.492383,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-9513084017",
    name: "La Fabrique su Sushi",
    latitude: 43.284621,
    longitude: 5.378061,
    neighborhood: "Marseille",
    address: "134 Rue Breteuil, Marseille",
    category: "Restaurant",
    criteria: ["good_for_groups"]
  }),
  makePlace({
    id: "osm-node-5150050206",
    name: "La Fee Verte",
    latitude: 43.293126,
    longitude: 5.373267,
    neighborhood: "Noailles",
    address: "Marseille",
    category: "Bar",
    criteria: []
  }),
  makePlace({
    id: "osm-node-1354154305",
    name: "La Femme du Boucher",
    latitude: 43.287844,
    longitude: 5.383314,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["late_opening"]
  }),
  makePlace({
    id: "osm-node-2264300323",
    name: "La Ferme",
    latitude: 43.293269,
    longitude: 5.373249,
    neighborhood: "Noailles",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["has_terrace"]
  }),
  makePlace({
    id: "osm-node-4374349386",
    name: "La Folle Epoque",
    latitude: 43.291123,
    longitude: 5.379278,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-4235312884",
    name: "La Fontaine",
    latitude: 43.284899,
    longitude: 5.385848,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-1864131496",
    name: "La Fournee d'Elo",
    latitude: 43.294488,
    longitude: 5.397737,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: ["wheelchair_accessible"]
  }),
  makePlace({
    id: "osm-node-1871305274",
    name: "La fournee d'Eugene",
    latitude: 43.295909,
    longitude: 5.390588,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: ["has_terrace"]
  }),
  makePlace({
    id: "osm-way-68985932",
    name: "La Fournee d'INES",
    latitude: 43.303075,
    longitude: 5.397043,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-6627597548",
    name: "La Fournee de Beaumont",
    latitude: 43.308385,
    longitude: 5.43724,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-9056070774",
    name: "La Fournee de Camille",
    latitude: 43.30882,
    longitude: 5.377825,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-2080092140",
    name: "La Fournee de l'Or",
    latitude: 43.303898,
    longitude: 5.414635,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-2137516958",
    name: "La Fournee de Lodi",
    latitude: 43.289365,
    longitude: 5.387402,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-3756217307",
    name: "La fournee de Maria",
    latitude: 43.380935,
    longitude: 5.357778,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-1033060944",
    name: "La Fournee de Provence",
    latitude: 43.295835,
    longitude: 5.390945,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-2080122390",
    name: "La Fournee de Saint-Barnabe",
    latitude: 43.303787,
    longitude: 5.417082,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-3822613281",
    name: "La Fournee de Saint-Louis",
    latitude: 43.34761,
    longitude: 5.358946,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-3807693954",
    name: "La Fournee des Val",
    latitude: 43.356343,
    longitude: 5.43943,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-11513703069",
    name: "La frequence",
    latitude: 43.302484,
    longitude: 5.390364,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Bar",
    criteria: ["late_opening"]
  }),
  makePlace({
    id: "osm-node-3647443695",
    name: "La Gazelle d'or",
    latitude: 43.308944,
    longitude: 5.374013,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-way-159864703",
    name: "La gorgee de soleil",
    latitude: 43.370179,
    longitude: 5.356052,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: ["good_for_groups"]
  }),
  makePlace({
    id: "osm-node-2115079521",
    name: "La Goulette",
    latitude: 43.295644,
    longitude: 5.377958,
    neighborhood: "Noailles",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["late_opening"]
  }),
  makePlace({
    id: "osm-node-2841640331",
    name: "La Goulette",
    latitude: 43.290713,
    longitude: 5.367092,
    neighborhood: "Saint-Victor",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-7925474569",
    name: "La Gourmandise",
    latitude: 43.287696,
    longitude: 5.464963,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: ["late_opening"]
  }),
  makePlace({
    id: "osm-node-7040800046",
    name: "La Grande Boucherie du Cabot",
    latitude: 43.258701,
    longitude: 5.417549,
    neighborhood: "Littoral Sud",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-8547020885",
    name: "La Grande Boucherie du Redon",
    latitude: 43.24493,
    longitude: 5.426843,
    neighborhood: "Littoral Sud",
    address: "231 Avenue de Lattre de Tassigny, Marseille",
    category: "Commerce alimentaire",
    criteria: ["allows_cb_no_minimum"]
  }),
  makePlace({
    id: "osm-node-11069911308",
    name: "La Grande Italia",
    latitude: 43.254232,
    longitude: 5.375217,
    neighborhood: "Littoral Sud",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["has_terrace","vegetarian_options"]
  }),
  makePlace({
    id: "osm-node-4622306091",
    name: "La Grande Terrasse",
    latitude: 43.283325,
    longitude: 5.350032,
    neighborhood: "Malmousque",
    address: "Marseille",
    category: "Bar",
    criteria: []
  }),
  makePlace({
    id: "osm-node-12430024701",
    name: "La Gratinee",
    latitude: 43.338407,
    longitude: 5.381025,
    neighborhood: "Longchamp",
    address: "120 Avenue du Marche d'Interet National, Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-13666988709",
    name: "La Grillade Dathenes",
    latitude: 43.29963,
    longitude: 5.380617,
    neighborhood: "Longchamp",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-way-112809376",
    name: "La Grillade du Dome",
    latitude: 43.317532,
    longitude: 5.405392,
    neighborhood: "Marseille",
    address: "48 Avenue de Saint-Just, Marseille",
    category: "Restaurant",
    criteria: ["good_for_groups"]
  }),
  makePlace({
    id: "osm-node-627616768",
    name: "La Grotte",
    latitude: 43.338386,
    longitude: 5.407488,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-12879296908",
    name: "La Guinguette du Fort",
    latitude: 43.291843,
    longitude: 5.361409,
    neighborhood: "Saint-Victor",
    address: "Marseille",
    category: "Bar",
    criteria: ["has_terrace","late_opening"]
  }),
  makePlace({
    id: "osm-node-1817415832",
    name: "La Halle Kashi",
    latitude: 43.307684,
    longitude: 5.376411,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-3830903285",
    name: "La Havane",
    latitude: 43.336573,
    longitude: 5.362853,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Bar",
    criteria: []
  }),
  makePlace({
    id: "osm-node-1886599700",
    name: "La Huche d'Or",
    latitude: 43.295246,
    longitude: 5.393152,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: ["wheelchair_accessible"]
  }),
  makePlace({
    id: "osm-way-950195089",
    name: "La Kabane",
    latitude: 43.304943,
    longitude: 5.366485,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["good_for_groups"]
  }),
  makePlace({
    id: "osm-node-2364946068",
    name: "La Kahena",
    latitude: 43.296475,
    longitude: 5.374197,
    neighborhood: "Noailles",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["has_terrace"]
  }),
  makePlace({
    id: "osm-node-8731323041",
    name: "La Laiterie Marseillaise",
    instagram_handle: "lalaiteriemarseillaise",
    latitude: 43.291355,
    longitude: 5.369707,
    neighborhood: "Saint-Victor",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: ["allows_cb_no_minimum"]
  }),
  makePlace({
    id: "osm-node-9190155186",
    name: "La Madeleine du Panier",
    latitude: 43.29982,
    longitude: 5.368244,
    neighborhood: "Le Panier",
    address: "19 Rue Puits du Denier, Marseille",
    category: "Commerce alimentaire",
    criteria: ["has_terrace"]
  }),
  makePlace({
    id: "osm-node-11932781900",
    name: "La maison de la Viande",
    latitude: 43.301992,
    longitude: 5.369257,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-8059204115",
    name: "La Maison des raviolis",
    latitude: 43.247515,
    longitude: 5.40051,
    neighborhood: "Littoral Sud",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["late_opening"]
  }),
  makePlace({
    id: "osm-node-8059209360",
    name: "La Maison des Raviolis - Italie",
    latitude: 43.290274,
    longitude: 5.38175,
    neighborhood: "Marseille",
    address: "14 Rue d'Italie, Marseille",
    category: "Restaurant",
    criteria: ["late_opening"]
  }),
  makePlace({
    id: "osm-node-3780623741",
    name: "La maison des viandes",
    latitude: 43.328686,
    longitude: 5.426588,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-7829025634",
    name: "La Maison du Charolais",
    latitude: 43.298624,
    longitude: 5.397882,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-2702498119",
    name: "La Maison Hantee",
    latitude: 43.294569,
    longitude: 5.383717,
    neighborhood: "Cours Julien",
    address: "Marseille",
    category: "Bar",
    criteria: ["has_terrace","late_opening"]
  }),
  makePlace({
    id: "osm-node-11377794069",
    name: "La Maison Marin",
    latitude: 43.247138,
    longitude: 5.401644,
    neighborhood: "Littoral Sud",
    address: "41 Rue Emile Zola, Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-12115376733",
    name: "La Maison Soura",
    latitude: 43.295604,
    longitude: 5.379219,
    neighborhood: "Cours Julien",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["good_for_groups"]
  }),
  makePlace({
    id: "osm-node-2001201532",
    name: "La Mama",
    latitude: 43.292944,
    longitude: 5.384909,
    neighborhood: "Cours Julien",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-11378203469",
    name: "La Mano Pizzerria Vauban",
    latitude: 43.282668,
    longitude: 5.374431,
    neighborhood: "Marseille",
    address: "97 Boulevard Vauban, Marseille",
    category: "Restaurant",
    criteria: ["late_opening","good_for_groups"]
  }),
  makePlace({
    id: "osm-node-4171583187",
    name: "La Marine des Goudes",
    latitude: 43.215304,
    longitude: 5.346525,
    neighborhood: "Malmousque",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-1941648390",
    name: "La Mariniere",
    latitude: 43.294068,
    longitude: 5.374496,
    neighborhood: "Noailles",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["has_terrace","allows_cb_no_minimum"]
  }),
  makePlace({
    id: "osm-node-4376947654",
    name: "La Marmite",
    latitude: 43.292977,
    longitude: 5.377676,
    neighborhood: "Noailles",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["good_for_groups"]
  }),
  makePlace({
    id: "osm-node-9056140471",
    name: "La marmite du regal",
    latitude: 43.308474,
    longitude: 5.377214,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-6836650508",
    name: "La Marmite Joyeuse",
    latitude: 43.302619,
    longitude: 5.386509,
    neighborhood: "Longchamp",
    address: "33 Boulevard National, Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-11373992603",
    name: "La Maronaise",
    latitude: 43.263892,
    longitude: 5.374075,
    neighborhood: "Littoral Sud",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-11736984103",
    name: "La Marseillaise",
    latitude: 43.30198,
    longitude: 5.400818,
    neighborhood: "Marseille",
    address: "Boulevard Francoise Duparc, Marseille",
    category: "Restaurant",
    criteria: ["good_for_groups"]
  }),
  makePlace({
    id: "osm-node-3465061685",
    name: "La Mehdia",
    latitude: 43.366725,
    longitude: 5.34058,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-13376371683",
    name: "La Mer",
    latitude: 43.294427,
    longitude: 5.375834,
    neighborhood: "Noailles",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-2418162622",
    name: "La Mer Veilleuse",
    latitude: 43.29189,
    longitude: 5.383961,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Bar",
    criteria: ["has_terrace"]
  }),
  makePlace({
    id: "osm-node-8989818609",
    name: "La mere buonavista",
    latitude: 43.28502,
    longitude: 5.383862,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-1653249116",
    name: "La Mesa Latina",
    latitude: 43.295457,
    longitude: 5.382417,
    neighborhood: "Cours Julien",
    address: "20 Cours Julien, Marseille",
    category: "Restaurant",
    criteria: ["late_opening"]
  }),
  makePlace({
    id: "osm-node-9682157740",
    name: "La Meulerie",
    latitude: 43.29767,
    longitude: 5.37254,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-1941628376",
    name: "La Mie Caline",
    latitude: 43.295474,
    longitude: 5.377064,
    neighborhood: "Noailles",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: ["wheelchair_accessible"]
  }),
  makePlace({
    id: "osm-node-5817421444",
    name: "La Mie Caline",
    latitude: 43.295991,
    longitude: 5.374539,
    neighborhood: "Noailles",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: ["good_for_groups"]
  }),
  makePlace({
    id: "osm-node-7755919110",
    name: "La Mie de Pain",
    latitude: 43.244931,
    longitude: 5.426976,
    neighborhood: "Littoral Sud",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: ["wheelchair_accessible"]
  }),
  makePlace({
    id: "osm-node-8344698068",
    name: "La Mie Orientale",
    latitude: 43.323281,
    longitude: 5.381733,
    neighborhood: "Longchamp",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-11469861372",
    name: "La muse bouche",
    latitude: 43.241359,
    longitude: 5.376631,
    neighborhood: "Littoral Sud",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-1361021565",
    name: "La Nautique",
    latitude: 43.293472,
    longitude: 5.369793,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["late_opening"]
  }),
  makePlace({
    id: "osm-node-10961451149",
    name: "La nena",
    instagram_handle: "lanena_marseille",
    latitude: 43.29214,
    longitude: 5.383498,
    neighborhood: "Cours Julien",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["late_opening"]
  }),
  makePlace({
    id: "osm-node-7707514030",
    name: "La Nouvelle Boucherie",
    latitude: 43.281943,
    longitude: 5.423669,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-7475523717",
    name: "La Nuit Sans Faim",
    latitude: 43.31052,
    longitude: 5.386433,
    neighborhood: "Belle de Mai",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-7247225071",
    name: "La Ola",
    latitude: 43.29443,
    longitude: 5.383787,
    neighborhood: "Cours Julien",
    address: "12 Rue Vian, Marseille",
    category: "Restaurant",
    criteria: ["late_opening"]
  }),
  makePlace({
    id: "osm-node-13326784801",
    name: "La Palestine",
    latitude: 43.302573,
    longitude: 5.365803,
    neighborhood: "Le Panier",
    address: "24 Rue Mazenod, Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-13037534947",
    name: "La Palestine de Gaza",
    latitude: 43.295997,
    longitude: 5.385291,
    neighborhood: "Cours Julien",
    address: "82 Rue Curiol, Marseille",
    category: "Restaurant",
    criteria: ["late_opening","vegetarian_options"]
  }),
  makePlace({
    id: "osm-node-1886609581",
    name: "La Paline",
    latitude: 43.291661,
    longitude: 5.371991,
    neighborhood: "Saint-Victor",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-12844597958",
    name: "La Paline",
    latitude: 43.299953,
    longitude: 5.384378,
    neighborhood: "Longchamp",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-6145436585",
    name: "La Paneterie",
    latitude: 43.300005,
    longitude: 5.386024,
    neighborhood: "Longchamp",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-1250893403",
    name: "La Panetteria",
    latitude: 43.296968,
    longitude: 5.371515,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-11298111044",
    name: "La Paniere de la Grotte",
    latitude: 43.233566,
    longitude: 5.364489,
    neighborhood: "Littoral Sud",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-2116958129",
    name: "La Part des Anges",
    latitude: 43.292431,
    longitude: 5.375394,
    neighborhood: "Noailles",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-5612345322",
    name: "La Passarelle",
    latitude: 43.291978,
    longitude: 5.367224,
    neighborhood: "Saint-Victor",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["late_opening"]
  }),
  makePlace({
    id: "osm-node-990321678",
    name: "La Passerelle",
    latitude: 43.29481,
    longitude: 5.3842,
    neighborhood: "Cours Julien",
    address: "Marseille",
    category: "Bar",
    criteria: []
  }),
  makePlace({
    id: "osm-node-6877510027",
    name: "La Passerellle",
    latitude: 43.320787,
    longitude: 5.379168,
    neighborhood: "Longchamp",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-7234965440",
    name: "La Pate a Pizza",
    latitude: 43.293909,
    longitude: 5.387062,
    neighborhood: "Cours Julien",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["late_opening"]
  }),
  makePlace({
    id: "osm-node-12128637028",
    name: "La Pate a Pizza",
    latitude: 43.295773,
    longitude: 5.386158,
    neighborhood: "Cours Julien",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["has_terrace","late_opening","vegetarian_options"]
  }),
  makePlace({
    id: "osm-node-9622464217",
    name: "La Patisserie des Marseille",
    latitude: 43.297822,
    longitude: 5.371677,
    neighborhood: "Le Panier",
    address: "28 Grand Rue, Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-2010715845",
    name: "La Pause",
    latitude: 43.294898,
    longitude: 5.384297,
    neighborhood: "Cours Julien",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["late_opening","wheelchair_accessible","vegetarian_options","good_for_groups"]
  }),
  makePlace({
    id: "osm-node-5265400421",
    name: "La Pause o Colbert",
    latitude: 43.29938,
    longitude: 5.37365,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["has_terrace","good_for_groups"]
  }),
  makePlace({
    id: "osm-node-11502889647",
    name: "La Pepite",
    latitude: 43.297855,
    longitude: 5.369495,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Cafe",
    criteria: ["vegetarian_options"]
  }),
  makePlace({
    id: "osm-node-11494722628",
    name: "La Pepite",
    latitude: 43.290885,
    longitude: 5.367181,
    neighborhood: "Saint-Victor",
    address: "Marseille",
    category: "Cafe",
    criteria: []
  }),
  makePlace({
    id: "osm-way-1265622560",
    name: "La pergola",
    latitude: 43.301969,
    longitude: 5.401457,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-9645791523",
    name: "La Perle des Fruits Secs",
    latitude: 43.359506,
    longitude: 5.332047,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-9378825717",
    name: "La Petite",
    latitude: 43.290565,
    longitude: 5.367158,
    neighborhood: "Saint-Victor",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-8117427405",
    name: "La petite Italie",
    latitude: 43.359466,
    longitude: 5.332122,
    neighborhood: "Le Panier",
    address: "139 Rue Rabelais, Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-8475740481",
    name: "La Pharmakeia",
    instagram_handle: "librairie_lapharmakeia",
    latitude: 43.291251,
    longitude: 5.381168,
    neighborhood: "Marseille",
    address: "4 Rue Lafon, Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-12692705297",
    name: "La Piadineria",
    latitude: 43.306168,
    longitude: 5.364539,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["good_for_groups"]
  }),
  makePlace({
    id: "osm-way-157776506",
    name: "La Piazza des Frangins",
    latitude: 43.30088,
    longitude: 5.51044,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-7335780315",
    name: "La Piraterie",
    latitude: 43.303149,
    longitude: 5.473061,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-2103604496",
    name: "La Piscine",
    latitude: 43.295965,
    longitude: 5.367369,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Cafe",
    criteria: ["has_terrace"]
  }),
  makePlace({
    id: "osm-node-2059612365",
    name: "La Pizz'a",
    latitude: 43.293894,
    longitude: 5.385458,
    neighborhood: "Cours Julien",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["late_opening","vegetarian_options","good_for_groups"]
  }),
  makePlace({
    id: "osm-node-6409052706",
    name: "La Pizzeria",
    latitude: 43.290678,
    longitude: 5.421816,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["good_for_groups"]
  }),
  makePlace({
    id: "osm-node-12314147757",
    name: "La Pizzeria des Grandes Pins",
    latitude: 43.276759,
    longitude: 5.427695,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["good_for_groups"]
  }),
  makePlace({
    id: "osm-node-11329852269",
    name: "La Pizzeria du Ziu",
    latitude: 43.302923,
    longitude: 5.389778,
    neighborhood: "Longchamp",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["late_opening","good_for_groups"]
  }),
  makePlace({
    id: "osm-node-2027947248",
    name: "La place des canailles",
    latitude: 43.306781,
    longitude: 5.366473,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Bar",
    criteria: []
  }),
  makePlace({
    id: "osm-node-12922839407",
    name: "La place du poulet",
    latitude: 43.300288,
    longitude: 5.38407,
    neighborhood: "Longchamp",
    address: "Rue du Coq, Marseille",
    category: "Restaurant",
    criteria: ["good_for_groups"]
  }),
  makePlace({
    id: "osm-node-4591323693",
    name: "La Plage",
    latitude: 43.360851,
    longitude: 5.313493,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-4796697726",
    name: "La Poissonnerie",
    latitude: 43.281513,
    longitude: 5.360701,
    neighborhood: "Saint-Victor",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-3719894244",
    name: "La pomme a pain",
    latitude: 43.355489,
    longitude: 5.410161,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-3933513618",
    name: "La Pomme de Pains",
    latitude: 43.28867,
    longitude: 5.436956,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-11352380469",
    name: "La poule noire",
    latitude: 43.29193,
    longitude: 5.373231,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-7749927814",
    name: "La poz",
    latitude: 43.283352,
    longitude: 5.498734,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["good_for_groups"]
  }),
  makePlace({
    id: "osm-node-3647443696",
    name: "La Poz Gourmande",
    latitude: 43.30955,
    longitude: 5.373126,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Cafe",
    criteria: []
  }),
  makePlace({
    id: "osm-node-4189901044",
    name: "La Provencale",
    latitude: 43.316743,
    longitude: 5.37416,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-11190553434",
    name: "La Provencale",
    latitude: 43.247702,
    longitude: 5.400407,
    neighborhood: "Littoral Sud",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-7054970475",
    name: "La Raclette",
    latitude: 43.294872,
    longitude: 5.383116,
    neighborhood: "Cours Julien",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-4591323694",
    name: "La Rade",
    latitude: 43.360815,
    longitude: 5.313561,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["late_opening"]
  }),
  makePlace({
    id: "osm-node-3558472769",
    name: "La Reale",
    latitude: 43.292229,
    longitude: 5.372138,
    neighborhood: "Noailles",
    address: "Marseille",
    category: "Cafe",
    criteria: []
  }),
  makePlace({
    id: "osm-node-8817471776",
    name: "La releve",
    latitude: 43.289508,
    longitude: 5.366484,
    neighborhood: "Saint-Victor",
    address: "Marseille",
    category: "Bar",
    criteria: ["has_terrace","late_opening"]
  }),
  makePlace({
    id: "osm-node-4591323697",
    name: "La remise du paysan",
    latitude: 43.360757,
    longitude: 5.313767,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-2137516955",
    name: "La Restanque",
    latitude: 43.289363,
    longitude: 5.3875,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Bar",
    criteria: []
  }),
  makePlace({
    id: "osm-node-1933755839",
    name: "La Reveuse",
    latitude: 43.295206,
    longitude: 5.392302,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Cafe",
    criteria: []
  }),
  makePlace({
    id: "osm-node-12371673759",
    name: "La Rhumerie",
    latitude: 43.254146,
    longitude: 5.375159,
    neighborhood: "Littoral Sud",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-way-154358891",
    name: "La Riviera",
    latitude: 43.244457,
    longitude: 5.369574,
    neighborhood: "Littoral Sud",
    address: "Place Joseph Vidal, Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-2822275288",
    name: "La Riziere",
    latitude: 43.280126,
    longitude: 5.390372,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["late_opening","vegetarian_options"]
  }),
  makePlace({
    id: "osm-node-10942364607",
    name: "La Romainville",
    latitude: 43.363969,
    longitude: 5.349774,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-9235227417",
    name: "La roquette",
    latitude: 43.291127,
    longitude: 5.368512,
    neighborhood: "Saint-Victor",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-11933082227",
    name: "La Rose de Tunis",
    latitude: 43.295588,
    longitude: 5.377806,
    neighborhood: "Noailles",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-13965785076",
    name: "La rose des pains",
    latitude: 43.328516,
    longitude: 5.425815,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-3780623737",
    name: "La Rose des viandes",
    latitude: 43.328497,
    longitude: 5.425714,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-9449263581",
    name: "La Rostantine",
    latitude: 43.287315,
    longitude: 5.381352,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-6553299246",
    name: "La Rotisserie des Saveurs",
    latitude: 43.327128,
    longitude: 5.364058,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["vegetarian_options"]
  }),
  makePlace({
    id: "osm-node-4591323698",
    name: "La Route des Vins",
    latitude: 43.360748,
    longitude: 5.313855,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-1846539363",
    name: "La Royale",
    latitude: 43.286592,
    longitude: 5.385609,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Cafe",
    criteria: []
  }),
  makePlace({
    id: "osm-node-5299959340",
    name: "La Royale",
    latitude: 43.327955,
    longitude: 5.37477,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-way-70042012",
    name: "La ruche",
    latitude: 43.290945,
    longitude: 5.36826,
    neighborhood: "Saint-Victor",
    address: "125 Rue Sainte, Marseille",
    category: "Bar",
    criteria: []
  }),
  makePlace({
    id: "osm-node-8468092886",
    name: "La Ruche",
    latitude: 43.290876,
    longitude: 5.366913,
    neighborhood: "Saint-Victor",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-3761373554",
    name: "La Salle des Machines",
    latitude: 43.309826,
    longitude: 5.390611,
    neighborhood: "Belle de Mai",
    address: "Marseille",
    category: "Cafe",
    criteria: ["has_terrace"]
  }),
  makePlace({
    id: "osm-node-1005302996",
    name: "La Samaritaine",
    latitude: 43.296329,
    longitude: 5.373859,
    neighborhood: "Noailles",
    address: "Marseille",
    category: "Cafe",
    criteria: ["wheelchair_accessible"]
  }),
  makePlace({
    id: "osm-node-621240682",
    name: "La Scaletta",
    latitude: 43.292184,
    longitude: 5.372775,
    neighborhood: "Noailles",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-10751767025",
    name: "La Serenata",
    latitude: 43.247686,
    longitude: 5.374724,
    neighborhood: "Littoral Sud",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["late_opening"]
  }),
  makePlace({
    id: "osm-way-955681183",
    name: "La Sirene",
    latitude: 43.294804,
    longitude: 5.385943,
    neighborhood: "Cours Julien",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: ["wheelchair_accessible"]
  }),
  makePlace({
    id: "osm-node-4227047019",
    name: "La Solelade",
    latitude: 43.247285,
    longitude: 5.424096,
    neighborhood: "Littoral Sud",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-12423111701",
    name: "La source",
    latitude: 43.29561,
    longitude: 5.395026,
    neighborhood: "Marseille",
    address: "139 Boulevard Chave, Marseille",
    category: "Commerce alimentaire",
    criteria: ["good_for_groups"]
  }),
  makePlace({
    id: "osm-node-2024544245",
    name: "La Source de Jade",
    latitude: 43.292678,
    longitude: 5.384166,
    neighborhood: "Cours Julien",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["late_opening","vegetarian_options"]
  }),
  makePlace({
    id: "osm-node-2014136656",
    name: "La Strada",
    latitude: 43.243057,
    longitude: 5.369956,
    neighborhood: "Littoral Sud",
    address: "Marseille",
    category: "Cafe",
    criteria: ["has_terrace","late_opening"]
  }),
  makePlace({
    id: "osm-way-1102292490",
    name: "La superette du frioul",
    latitude: 43.279331,
    longitude: 5.304885,
    neighborhood: "Malmousque",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: ["allows_cb_no_minimum"]
  }),
  makePlace({
    id: "osm-node-3535291153",
    name: "La Table Cinq",
    latitude: 43.302922,
    longitude: 5.397476,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["has_terrace"]
  }),
  makePlace({
    id: "osm-node-5310287091",
    name: "La Table d'Armenie",
    latitude: 43.35176,
    longitude: 5.440153,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-3045263256",
    name: "La Table d'Augustin",
    latitude: 43.343217,
    longitude: 5.446926,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-13625019501",
    name: "La table d'Egypte",
    latitude: 43.299612,
    longitude: 5.386665,
    neighborhood: "Longchamp",
    address: "23 Boulevard de la Liberation - General de Monsabert, Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-2174798902",
    name: "La Table de Guy",
    latitude: 43.308392,
    longitude: 5.400097,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["late_opening"]
  }),
  makePlace({
    id: "osm-way-154593389",
    name: "La table des Garrigues",
    latitude: 43.280879,
    longitude: 5.429366,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-8601906915",
    name: "La Table du 12em",
    latitude: 43.299074,
    longitude: 5.436414,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-1796883510",
    name: "La table du chef",
    latitude: 43.253154,
    longitude: 5.422629,
    neighborhood: "Littoral Sud",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-5041285221",
    name: "La Table du Fort",
    latitude: 43.2928,
    longitude: 5.371219,
    neighborhood: "Noailles",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["vegetarian_options"]
  }),
  makePlace({
    id: "osm-node-11932597183",
    name: "La Table Libanaise",
    latitude: 43.296695,
    longitude: 5.370604,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-5310286909",
    name: "La Table Marseillaise",
    latitude: 43.352244,
    longitude: 5.438386,
    neighborhood: "Marseille",
    address: "Impasse Ramelle, Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-10963273620",
    name: "La Tarte Tropezienne",
    latitude: 43.278678,
    longitude: 5.382886,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-1711816854",
    name: "La Tasca",
    latitude: 43.293148,
    longitude: 5.391598,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-9332853490",
    name: "La Terrasse",
    latitude: 43.268375,
    longitude: 5.405917,
    neighborhood: "Littoral Sud",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-way-154803459",
    name: "La Terrasse de Saint-Giniez",
    latitude: 43.266042,
    longitude: 5.391173,
    neighborhood: "Littoral Sud",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-8521203795",
    name: "La Terrasse des Embruns",
    latitude: 43.271354,
    longitude: 5.362986,
    neighborhood: "Saint-Victor",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-9574758396",
    name: "La Terrasse du 8eme",
    latitude: 43.263901,
    longitude: 5.389913,
    neighborhood: "Littoral Sud",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-2241170433",
    name: "La Terrasse du Panier",
    latitude: 43.29958,
    longitude: 5.368044,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-12227999775",
    name: "La terrasse sucree",
    latitude: 43.301977,
    longitude: 5.364698,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["good_for_groups"]
  }),
  makePlace({
    id: "osm-node-8302313952",
    name: "La Tisserie - Cafes de Specialite",
    latitude: 43.286494,
    longitude: 5.363195,
    neighborhood: "Saint-Victor",
    address: "Marseille",
    category: "Cafe",
    criteria: []
  }),
  makePlace({
    id: "osm-node-9509893910",
    name: "La Tour de Fruit'z",
    latitude: 43.28571,
    longitude: 5.377504,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-5310105022",
    name: "La tour de Pizz",
    latitude: 43.293386,
    longitude: 5.374168,
    neighborhood: "Noailles",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["late_opening","good_for_groups"]
  }),
  makePlace({
    id: "osm-node-5930798760",
    name: "La Tour de Pizze",
    latitude: 43.312987,
    longitude: 5.385557,
    neighborhood: "Belle de Mai",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["good_for_groups"]
  }),
  makePlace({
    id: "osm-node-6736064748",
    name: "La Tradi",
    latitude: 43.284552,
    longitude: 5.380645,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-12001406685",
    name: "La Traverse de Balkis",
    latitude: 43.294523,
    longitude: 5.384545,
    neighborhood: "Cours Julien",
    address: "Marseille",
    category: "Bar",
    criteria: []
  }),
  makePlace({
    id: "osm-node-7387093953",
    name: "La vague gourmande",
    latitude: 43.282844,
    longitude: 5.350752,
    neighborhood: "Malmousque",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-9702977682",
    name: "La Veranda",
    latitude: 43.350306,
    longitude: 5.341174,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-2019893920",
    name: "La Verdura",
    latitude: 43.285973,
    longitude: 5.384677,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-9914951726",
    name: "La Vie Claire",
    latitude: 43.280528,
    longitude: 5.387963,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-4426912790",
    name: "La Vieille Pelle",
    latitude: 43.296476,
    longitude: 5.365868,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["late_opening"]
  }),
  makePlace({
    id: "osm-node-6898227632",
    name: "La Villa",
    latitude: 43.32369,
    longitude: 5.381995,
    neighborhood: "Longchamp",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: ["late_opening"]
  }),
  makePlace({
    id: "osm-node-1251015705",
    name: "La Villa",
    latitude: 43.272706,
    longitude: 5.387104,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-5890752817",
    name: "La Voie Maltee",
    latitude: 43.294377,
    longitude: 5.384108,
    neighborhood: "Cours Julien",
    address: "Marseille",
    category: "Bar",
    criteria: []
  }),
  makePlace({
    id: "osm-node-2119952244",
    name: "La Voile De Marco",
    latitude: 43.296029,
    longitude: 5.36816,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-2598173070",
    name: "Label'Ferme",
    latitude: 43.249895,
    longitude: 5.381813,
    neighborhood: "Littoral Sud",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["has_wifi"]
  }),
  makePlace({
    id: "osm-node-991811834",
    name: "Labo N Heure",
    instagram_handle: "labo_n.h",
    latitude: 43.293524,
    longitude: 5.386464,
    neighborhood: "Cours Julien",
    address: "49A Rue des Trois Freres Barthelemy, Marseille",
    category: "Bar",
    criteria: []
  }),
  makePlace({
    id: "osm-node-5202099501",
    name: "Labo&Gato",
    latitude: 43.298061,
    longitude: 5.372452,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-2026369886",
    name: "Lacaille Restaurant",
    latitude: 43.294415,
    longitude: 5.385065,
    neighborhood: "Cours Julien",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-13343065901",
    name: "lala cafe",
    instagram_handle: "lalacafemarseille",
    latitude: 43.29428,
    longitude: 5.384578,
    neighborhood: "Cours Julien",
    address: "10-12 Rue des Trois Rois, Marseille",
    category: "Cafe",
    criteria: []
  }),
  makePlace({
    id: "osm-node-7827681786",
    name: "Langoustine",
    latitude: 43.293497,
    longitude: 5.373537,
    neighborhood: "Noailles",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-10896351823",
    name: "Latte",
    latitude: 43.298182,
    longitude: 5.365992,
    neighborhood: "Le Panier",
    address: "16 Rue de l'Eveche, Marseille",
    category: "Restaurant",
    criteria: ["late_opening"]
  }),
  makePlace({
    id: "osm-node-11820108269",
    name: "Le 100",
    instagram_handle: "restaurantle100",
    latitude: 43.282988,
    longitude: 5.378724,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-13868433697",
    name: "Le 100",
    latitude: 43.303151,
    longitude: 5.40332,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-13893507333",
    name: "Le 111",
    latitude: 43.303374,
    longitude: 5.403783,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["good_for_groups"]
  }),
  makePlace({
    id: "osm-node-1355118991",
    name: "Le 13",
    latitude: 43.293043,
    longitude: 5.370913,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["has_terrace"]
  }),
  makePlace({
    id: "osm-way-70067735",
    name: "Le 143",
    latitude: 43.290722,
    longitude: 5.367228,
    neighborhood: "Saint-Victor",
    address: "Marseille",
    category: "Bar",
    criteria: []
  }),
  makePlace({
    id: "osm-node-2822287680",
    name: "Le 163",
    latitude: 43.277988,
    longitude: 5.392691,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-7925474626",
    name: "Le 183 alimentation",
    latitude: 43.287299,
    longitude: 5.466126,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-9028759345",
    name: "Le 213",
    latitude: 43.23432,
    longitude: 5.412144,
    neighborhood: "Littoral Sud",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: ["allows_cb_no_minimum"]
  }),
  makePlace({
    id: "osm-node-11394011625",
    name: "Le 223",
    latitude: 43.336913,
    longitude: 5.355164,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["has_terrace","good_for_groups"]
  }),
  makePlace({
    id: "osm-node-9516546026",
    name: "Le 24",
    latitude: 43.284385,
    longitude: 5.38267,
    neighborhood: "Marseille",
    address: "24 Rue Falque, Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-9672083451",
    name: "Le 24 Poke Bowl",
    latitude: 43.288994,
    longitude: 5.37628,
    neighborhood: "Marseille",
    address: "46 Rue Breteuil, Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-1933746721",
    name: "Le 3/4",
    latitude: 43.29561,
    longitude: 5.395005,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["has_terrace"]
  }),
  makePlace({
    id: "osm-node-4405959291",
    name: "Le 31",
    latitude: 43.299285,
    longitude: 5.382841,
    neighborhood: "Longchamp",
    address: "Marseille",
    category: "Bar",
    criteria: []
  }),
  makePlace({
    id: "osm-node-3391011714",
    name: "Le 444",
    latitude: 43.314725,
    longitude: 5.370886,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-8743116600",
    name: "Le 55 Night Market",
    latitude: 43.295956,
    longitude: 5.400513,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-6409052712",
    name: "Le 555",
    latitude: 43.290634,
    longitude: 5.421088,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["has_terrace"]
  }),
  makePlace({
    id: "osm-node-12806248593",
    name: "Le 59",
    latitude: 43.293902,
    longitude: 5.386658,
    neighborhood: "Cours Julien",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["has_terrace","good_for_groups"]
  }),
  makePlace({
    id: "osm-node-1885072443",
    name: "Le 68",
    latitude: 43.295312,
    longitude: 5.394098,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Bar",
    criteria: []
  }),
  makePlace({
    id: "osm-node-11380466670",
    name: "Le Bacao",
    latitude: 43.288406,
    longitude: 5.35964,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["good_for_groups"]
  }),
  makePlace({
    id: "osm-node-2822274192",
    name: "Le Balagan",
    latitude: 43.280509,
    longitude: 5.389978,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["vegetarian_options"]
  }),
  makePlace({
    id: "osm-node-1871316010",
    name: "Le bambino",
    latitude: 43.296505,
    longitude: 5.39088,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["late_opening"]
  }),
  makePlace({
    id: "osm-node-1781547063",
    name: "Le Banetier de l'Eglise",
    latitude: 43.245973,
    longitude: 5.403827,
    neighborhood: "Littoral Sud",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-1552506161",
    name: "Le Baobab",
    latitude: 43.299797,
    longitude: 5.384325,
    neighborhood: "Longchamp",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-12409384073",
    name: "Le Bar 1917",
    latitude: 43.280227,
    longitude: 5.3519,
    neighborhood: "Malmousque",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-4390144290",
    name: "Le Bar a pain",
    latitude: 43.300193,
    longitude: 5.386423,
    neighborhood: "Longchamp",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-3770283182",
    name: "Le Bar a Vrac",
    latitude: 43.299219,
    longitude: 5.384498,
    neighborhood: "Longchamp",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-6031892656",
    name: "Le Bar de la place",
    latitude: 43.29732,
    longitude: 5.365981,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Bar",
    criteria: ["late_opening"]
  }),
  makePlace({
    id: "osm-node-738499754",
    name: "Le Bar de la Plaine",
    latitude: 43.293989,
    longitude: 5.386801,
    neighborhood: "Cours Julien",
    address: "Marseille",
    category: "Bar",
    criteria: ["has_terrace"]
  }),
  makePlace({
    id: "osm-node-10753171748",
    name: "Le bar du theatre",
    latitude: 43.309265,
    longitude: 5.367547,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["vegetarian_options"]
  }),
  makePlace({
    id: "osm-node-6920771995",
    name: "Le Bar Jaquer",
    latitude: 43.291853,
    longitude: 5.372254,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Bar",
    criteria: []
  }),
  makePlace({
    id: "osm-node-3329654866",
    name: "Le Baraki",
    latitude: 43.293597,
    longitude: 5.387584,
    neighborhood: "Cours Julien",
    address: "Marseille",
    category: "Bar",
    criteria: []
  }),
  makePlace({
    id: "osm-node-9566867122",
    name: "Le Baron Perche",
    latitude: 43.286405,
    longitude: 5.359364,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["kid_friendly"]
  }),
  makePlace({
    id: "osm-node-1621255147",
    name: "Le Barrio",
    latitude: 43.303363,
    longitude: 5.405277,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Bar",
    criteria: []
  }),
  makePlace({
    id: "osm-node-11539393998",
    name: "Le Batavia",
    latitude: 43.27675,
    longitude: 5.389342,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["has_terrace"]
  }),
  makePlace({
    id: "osm-node-2038029522",
    name: "Le Bazar de la Plaine",
    latitude: 43.293716,
    longitude: 5.385382,
    neighborhood: "Cours Julien",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-8731323044",
    name: "Le Bec Fin",
    latitude: 43.288711,
    longitude: 5.360443,
    neighborhood: "Saint-Victor",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-4315661800",
    name: "Le Belge Sur Le Pouce",
    latitude: 43.302957,
    longitude: 5.366822,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["good_for_groups"]
  }),
  makePlace({
    id: "osm-node-11231372981",
    name: "Le Bergerac",
    latitude: 43.286189,
    longitude: 5.36307,
    neighborhood: "Saint-Victor",
    address: "Marseille",
    category: "Cafe",
    criteria: ["has_terrace"]
  }),
  makePlace({
    id: "osm-node-4430509423",
    name: "Le Bergerac",
    latitude: 43.307992,
    longitude: 5.38168,
    neighborhood: "Longchamp",
    address: "Marseille",
    category: "Bar",
    criteria: []
  }),
  makePlace({
    id: "osm-node-12371673784",
    name: "Le Bistingo",
    latitude: 43.253996,
    longitude: 5.375219,
    neighborhood: "Littoral Sud",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-6465399785",
    name: "Le Bistro Du Panier",
    latitude: 43.296924,
    longitude: 5.36725,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-1871283589",
    name: "Le Bistroquet",
    latitude: 43.295911,
    longitude: 5.390931,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Cafe",
    criteria: []
  }),
  makePlace({
    id: "osm-node-4315409673",
    name: "Le Bistrot a Vin",
    latitude: 43.292604,
    longitude: 5.376018,
    neighborhood: "Noailles",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-11116448025",
    name: "Le Bistrot d'Alberto",
    latitude: 43.294619,
    longitude: 5.376867,
    neighborhood: "Noailles",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["has_terrace"]
  }),
  makePlace({
    id: "osm-way-153555495",
    name: "Le Bistrot de Lorette",
    latitude: 43.246131,
    longitude: 5.404188,
    neighborhood: "Littoral Sud",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-4764606931",
    name: "Le Bistrot des Dames",
    latitude: 43.292315,
    longitude: 5.371777,
    neighborhood: "Noailles",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-10896338288",
    name: "Le Bistrot des Pistoles",
    latitude: 43.299337,
    longitude: 5.367947,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Cafe",
    criteria: []
  }),
  makePlace({
    id: "osm-way-70056909",
    name: "Le Bistrot Plage",
    latitude: 43.286175,
    longitude: 5.350657,
    neighborhood: "Marseille",
    address: "60 Corniche du President John Fitzgerald Kennedy, Marseille",
    category: "Bar",
    criteria: ["allows_cb_no_minimum"]
  }),
  makePlace({
    id: "osm-node-5135673388",
    name: "Le Blanc Bleu",
    latitude: 43.293092,
    longitude: 5.372349,
    neighborhood: "Noailles",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-9192921457",
    name: "Le Blum",
    latitude: 43.29879,
    longitude: 5.383516,
    neighborhood: "Longchamp",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["late_opening"]
  }),
  makePlace({
    id: "osm-node-11932581941",
    name: "Le bocal",
    latitude: 43.29639,
    longitude: 5.370833,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["has_terrace","good_for_groups"]
  }),
  makePlace({
    id: "osm-node-11933097469",
    name: "Le Bodrum",
    latitude: 43.295558,
    longitude: 5.377717,
    neighborhood: "Noailles",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["good_for_groups"]
  }),
  makePlace({
    id: "osm-node-2645349788",
    name: "Le Boize Braize",
    latitude: 43.334187,
    longitude: 5.358315,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-13106564390",
    name: "Le Bon Air",
    latitude: 43.283769,
    longitude: 5.370818,
    neighborhood: "Saint-Victor",
    address: "Marseille",
    category: "Bar",
    criteria: ["late_opening"]
  }),
  makePlace({
    id: "osm-node-5148076776",
    name: "Le Bon Burger",
    latitude: 43.273411,
    longitude: 5.391222,
    neighborhood: "Marseille",
    address: "277 Avenue du Prado, Marseille",
    category: "Restaurant",
    criteria: ["late_opening","good_for_groups"]
  }),
  makePlace({
    id: "osm-node-4764607797",
    name: "Le Bon Burger",
    latitude: 43.292589,
    longitude: 5.371674,
    neighborhood: "Noailles",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-8317871394",
    name: "Le bon coin",
    latitude: 43.300414,
    longitude: 5.381541,
    neighborhood: "Longchamp",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-9651907621",
    name: "Le Bon Coin",
    latitude: 43.356681,
    longitude: 5.343845,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-12486244777",
    name: "Le Bosphore",
    latitude: 43.249088,
    longitude: 5.389498,
    neighborhood: "Littoral Sud",
    address: "112 Avenue de Hambourg, Marseille",
    category: "Restaurant",
    criteria: ["good_for_groups"]
  }),
  makePlace({
    id: "osm-node-2973016536",
    name: "Le Bouchon Provencal",
    latitude: 43.293049,
    longitude: 5.371451,
    neighborhood: "Noailles",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["has_terrace","wheelchair_accessible"]
  }),
  makePlace({
    id: "osm-node-2010715847",
    name: "Le Boum",
    latitude: 43.293485,
    longitude: 5.385275,
    neighborhood: "Cours Julien",
    address: "Marseille",
    category: "Bar",
    criteria: ["late_opening"]
  }),
  makePlace({
    id: "osm-node-9928878761",
    name: "Le Bousti",
    latitude: 43.293409,
    longitude: 5.386783,
    neighborhood: "Cours Julien",
    address: "60 Rue des Trois Freres Barthelemy, Marseille",
    category: "Restaurant",
    criteria: ["has_terrace","late_opening","wheelchair_accessible"]
  }),
  makePlace({
    id: "osm-node-8344701916",
    name: "Le Break",
    latitude: 43.323836,
    longitude: 5.382046,
    neighborhood: "Belle de Mai",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["late_opening","good_for_groups"]
  }),
  makePlace({
    id: "osm-way-99362350",
    name: "Le Cabanon",
    latitude: 43.284187,
    longitude: 5.38501,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["has_terrace","good_for_groups"]
  }),
  makePlace({
    id: "osm-node-9616283851",
    name: "Le Cabanon de l'Estaque",
    latitude: 43.360244,
    longitude: 5.295745,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-1912838612",
    name: "Le Cafe des Arts",
    latitude: 43.292556,
    longitude: 5.367736,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Bar",
    criteria: []
  }),
  makePlace({
    id: "osm-node-9357722699",
    name: "Le Cafe des Thes",
    latitude: 43.271721,
    longitude: 5.386484,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: ["wheelchair_accessible"]
  }),
  makePlace({
    id: "osm-node-2016402299",
    name: "Le cafe en bois",
    latitude: 43.292581,
    longitude: 5.385277,
    neighborhood: "Cours Julien",
    address: "Marseille",
    category: "Cafe",
    criteria: []
  }),
  makePlace({
    id: "osm-node-2822280855",
    name: "Le Cafe Thai",
    latitude: 43.278825,
    longitude: 5.391852,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["vegetarian_options"]
  }),
  makePlace({
    id: "osm-node-1126758496",
    name: "Le Cafe-Barok",
    latitude: 43.285061,
    longitude: 5.385057,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Cafe",
    criteria: []
  }),
  makePlace({
    id: "osm-node-8108433184",
    name: "Le Cafouch aux Saveurs",
    latitude: 43.356434,
    longitude: 5.335149,
    neighborhood: "Le Panier",
    address: "21 Rue Gaston Castel, Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-12609726885",
    name: "Le Calice",
    latitude: 43.277583,
    longitude: 5.399543,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["has_terrace","good_for_groups"]
  }),
  makePlace({
    id: "osm-node-4087718756",
    name: "Le Campagne",
    latitude: 43.290624,
    longitude: 5.389198,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Bar",
    criteria: []
  }),
  makePlace({
    id: "osm-node-5817421117",
    name: "Le Canebiere",
    latitude: 43.295537,
    longitude: 5.374704,
    neighborhood: "Noailles",
    address: "Marseille",
    category: "Cafe",
    criteria: ["has_terrace","late_opening"]
  }),
  makePlace({
    id: "osm-node-9054339105",
    name: "Le Capados",
    latitude: 43.310751,
    longitude: 5.378758,
    neighborhood: "Longchamp",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["has_terrace"]
  }),
  makePlace({
    id: "osm-node-5664606042",
    name: "Le Capitole",
    latitude: 43.300827,
    longitude: 5.377945,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-9621058146",
    name: "Le Capucin",
    latitude: 43.296626,
    longitude: 5.378886,
    neighborhood: "Cours Julien",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-7614761186",
    name: "Le Caribou",
    latitude: 43.29331,
    longitude: 5.372677,
    neighborhood: "Noailles",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["has_terrace"]
  }),
  makePlace({
    id: "osm-node-5519912632",
    name: "Le Carre",
    latitude: 43.243329,
    longitude: 5.36959,
    neighborhood: "Littoral Sud",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-4172951382",
    name: "Le Carre d'As",
    latitude: 43.284738,
    longitude: 5.394874,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Cafe",
    criteria: []
  }),
  makePlace({
    id: "osm-node-5122237216",
    name: "Le Carthage",
    latitude: 43.295702,
    longitude: 5.378803,
    neighborhood: "Cours Julien",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: ["has_terrace"]
  }),
  makePlace({
    id: "osm-node-3799422422",
    name: "Le Casino",
    latitude: 43.28535,
    longitude: 5.481397,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Bar",
    criteria: []
  }),
  makePlace({
    id: "osm-node-5405765486",
    name: "Le Castel",
    latitude: 43.357509,
    longitude: 5.336901,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["has_terrace"]
  }),
  makePlace({
    id: "osm-node-10962435576",
    name: "Le Castellane",
    latitude: 43.285887,
    longitude: 5.383044,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Bar",
    criteria: []
  }),
  makePlace({
    id: "osm-node-5122241522",
    name: "Le Cedre du Liban",
    latitude: 43.294914,
    longitude: 5.380196,
    neighborhood: "Cours Julien",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-4405959292",
    name: "Le Centuple",
    instagram_handle: "lecentuple",
    latitude: 43.299291,
    longitude: 5.382743,
    neighborhood: "Longchamp",
    address: "23 Allee Leon Gambetta, Marseille",
    category: "Restaurant",
    criteria: ["vegetarian_options"]
  }),
  makePlace({
    id: "osm-node-9648431232",
    name: "Le Cercle",
    latitude: 43.359816,
    longitude: 5.331685,
    neighborhood: "Le Panier",
    address: "152 Rue Rabelais, Marseille",
    category: "Bar",
    criteria: []
  }),
  makePlace({
    id: "osm-node-11509145670",
    name: "Le cercle rouge",
    latitude: 43.297292,
    longitude: 5.385476,
    neighborhood: "Cours Julien",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-1315189241",
    name: "Le Chalet",
    latitude: 43.293899,
    longitude: 5.35943,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-9332048245",
    name: "Le Chalet des Vignerons",
    latitude: 43.244477,
    longitude: 5.424712,
    neighborhood: "Littoral Sud",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: ["good_for_groups"]
  }),
  makePlace({
    id: "osm-node-11622404642",
    name: "Le Chalet Provencal",
    latitude: 43.275405,
    longitude: 5.384766,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-738499748",
    name: "Le Champ de Mars",
    latitude: 43.293609,
    longitude: 5.385192,
    neighborhood: "Cours Julien",
    address: "Marseille",
    category: "Bar",
    criteria: []
  }),
  makePlace({
    id: "osm-node-4713564660",
    name: "Le Chaoui",
    latitude: 43.298179,
    longitude: 5.380745,
    neighborhood: "Longchamp",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["good_for_groups"]
  }),
  makePlace({
    id: "osm-way-68949326",
    name: "Le Chapiteau - La Belle-de-Mai",
    latitude: 43.314822,
    longitude: 5.386268,
    neighborhood: "Belle de Mai",
    address: "Marseille",
    category: "Bar",
    criteria: ["has_terrace"]
  }),
  makePlace({
    id: "osm-node-2019893921",
    name: "Le Charolais",
    latitude: 43.285982,
    longitude: 5.384635,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-3807693956",
    name: "Le Chateau Gombert",
    latitude: 43.351736,
    longitude: 5.439066,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Bar",
    criteria: []
  }),
  makePlace({
    id: "osm-node-1429403428",
    name: "Le Chateau Sormiou",
    latitude: 43.210946,
    longitude: 5.419449,
    neighborhood: "Littoral Sud",
    address: "Route du Feu de la Calanque de Sormiou, Marseille",
    category: "Restaurant",
    criteria: ["has_terrace","late_opening","takes_reservations"]
  }),
  makePlace({
    id: "osm-node-3992084769",
    name: "Le Chaud Pain de Vienne",
    latitude: 43.285513,
    longitude: 5.442611,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-2085794775",
    name: "Le Chaudron Provencal",
    latitude: 43.292147,
    longitude: 5.38418,
    neighborhood: "Cours Julien",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-3822613283",
    name: "Le Chicken",
    latitude: 43.347089,
    longitude: 5.359261,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["good_for_groups"]
  }),
  makePlace({
    id: "osm-node-11297502568",
    name: "Le Chiquito",
    latitude: 43.282032,
    longitude: 5.429877,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Bar",
    criteria: []
  }),
  makePlace({
    id: "osm-node-11051472437",
    name: "Le Cigale",
    latitude: 43.296089,
    longitude: 5.368712,
    neighborhood: "Le Panier",
    address: "92-94 Quai du Port, Marseille",
    category: "Restaurant",
    criteria: ["has_wifi","wheelchair_accessible","allows_cb_no_minimum"]
  }),
  makePlace({
    id: "osm-node-1576165849",
    name: "Le Cigalon",
    latitude: 43.314295,
    longitude: 5.511702,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-2264300326",
    name: "Le Cigalon",
    latitude: 43.292751,
    longitude: 5.372715,
    neighborhood: "Noailles",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-2120669979",
    name: "Le Clan Les Cigales",
    latitude: 43.299985,
    longitude: 5.369126,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-4009662395",
    name: "Le Classico",
    latitude: 43.269629,
    longitude: 5.426525,
    neighborhood: "Littoral Sud",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-5130614315",
    name: "Le Club",
    latitude: 43.343021,
    longitude: 5.44664,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-way-69636313",
    name: "Le Club House",
    latitude: 43.348742,
    longitude: 5.391928,
    neighborhood: "Belle de Mai",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-7365454385",
    name: "Le Coeur des Vignes",
    latitude: 43.28834,
    longitude: 5.366764,
    neighborhood: "Saint-Victor",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-5265363224",
    name: "Le Colbert",
    latitude: 43.299268,
    longitude: 5.375229,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Bar",
    criteria: ["has_terrace"]
  }),
  makePlace({
    id: "osm-node-13284603002",
    name: "Le Columbia",
    latitude: 43.270028,
    longitude: 5.386587,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["has_terrace"]
  }),
  makePlace({
    id: "osm-node-10963925838",
    name: "Le Commis d'Office",
    latitude: 43.292956,
    longitude: 5.377581,
    neighborhood: "Noailles",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["has_wifi","vegetarian_options"]
  }),
  makePlace({
    id: "osm-node-2378877014",
    name: "Le Commodore",
    latitude: 43.279038,
    longitude: 5.304373,
    neighborhood: "Malmousque",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-5385592853",
    name: "Le Comptoir 31",
    latitude: 43.295186,
    longitude: 5.387351,
    neighborhood: "Cours Julien",
    address: "Marseille",
    category: "Cafe",
    criteria: ["has_terrace"]
  }),
  makePlace({
    id: "osm-node-9043112618",
    name: "Le Comptoir aux Huiles by Delucce",
    latitude: 43.298838,
    longitude: 5.366557,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["late_opening","vegetarian_options"]
  }),
  makePlace({
    id: "osm-node-6860035444",
    name: "Le Comptoir Bellevue",
    latitude: 43.296476,
    longitude: 5.372002,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["has_terrace"]
  }),
  makePlace({
    id: "osm-node-3404570685",
    name: "Le Comptoir d'Endoume",
    latitude: 43.290278,
    longitude: 5.366462,
    neighborhood: "Saint-Victor",
    address: "33 Rue d'Endoume, Marseille",
    category: "Restaurant",
    criteria: ["has_terrace"]
  }),
  makePlace({
    id: "osm-node-3106616838",
    name: "Le Comptoir de l'Opera",
    latitude: 43.293552,
    longitude: 5.375415,
    neighborhood: "Noailles",
    address: "Marseille",
    category: "Bar",
    criteria: []
  }),
  makePlace({
    id: "osm-way-1228912030",
    name: "Le Comptoir de la Palmeraie",
    latitude: 43.325214,
    longitude: 5.37756,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-2039908779",
    name: "Le Comptoir de Mathilde",
    latitude: 43.295636,
    longitude: 5.377223,
    neighborhood: "Noailles",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-10942332710",
    name: "Le Comptoir de Mathilde",
    latitude: 43.363849,
    longitude: 5.348664,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-3638685183",
    name: "Le Comptoir Dugommier",
    latitude: 43.298531,
    longitude: 5.381148,
    neighborhood: "Longchamp",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-way-154611616",
    name: "Le Comptoir Marseillais",
    latitude: 43.267355,
    longitude: 5.37249,
    neighborhood: "Littoral Sud",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-4169931138",
    name: "Le Comptoir Marseillais des Viandes",
    latitude: 43.281749,
    longitude: 5.404631,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-11328850869",
    name: "Le consolat",
    latitude: 43.301721,
    longitude: 5.390822,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-6505663623",
    name: "Le Continental",
    latitude: 43.306507,
    longitude: 5.374125,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Cafe",
    criteria: []
  }),
  makePlace({
    id: "osm-node-13426740290",
    name: "Le Coquet",
    latitude: 43.268498,
    longitude: 5.406478,
    neighborhood: "Littoral Sud",
    address: "13 Boulevard Paul Claudel, Marseille",
    category: "Bar",
    criteria: ["has_terrace"]
  }),
  makePlace({
    id: "osm-node-2116958130",
    name: "Le Corner",
    latitude: 43.293242,
    longitude: 5.372499,
    neighborhood: "Noailles",
    address: "Marseille",
    category: "Bar",
    criteria: []
  }),
  makePlace({
    id: "osm-node-6446286985",
    name: "Le Corto",
    latitude: 43.291746,
    longitude: 5.384223,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-2268236776",
    name: "Le Cote de Boeuf",
    latitude: 43.292274,
    longitude: 5.372322,
    neighborhood: "Noailles",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-2264300325",
    name: "Le Cours",
    latitude: 43.292693,
    longitude: 5.37253,
    neighborhood: "Noailles",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["late_opening"]
  }),
  makePlace({
    id: "osm-way-154604606",
    name: "Le Crillon",
    latitude: 43.279919,
    longitude: 5.418235,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Bar",
    criteria: []
  }),
  makePlace({
    id: "osm-node-9055743191",
    name: "Le Cube",
    latitude: 43.311258,
    longitude: 5.377768,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["good_for_groups"]
  }),
  makePlace({
    id: "osm-way-70065409",
    name: "Le Culti",
    latitude: 43.280719,
    longitude: 5.368808,
    neighborhood: "Saint-Victor",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-3609102053",
    name: "Le Cyberyann Cafe",
    latitude: 43.291429,
    longitude: 5.379835,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["has_terrace"]
  }),
  makePlace({
    id: "osm-node-991816648",
    name: "Le Cyrano",
    latitude: 43.293818,
    longitude: 5.387327,
    neighborhood: "Cours Julien",
    address: "Marseille",
    category: "Bar",
    criteria: []
  }),
  makePlace({
    id: "osm-node-9332083543",
    name: "Le Daily",
    latitude: 43.256274,
    longitude: 5.382284,
    neighborhood: "Littoral Sud",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-way-120054411",
    name: "Le Daumier",
    latitude: 43.261954,
    longitude: 5.387512,
    neighborhood: "Littoral Sud",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["good_for_groups"]
  }),
  makePlace({
    id: "osm-node-9683204825",
    name: "Le Dauphin",
    latitude: 43.27921,
    longitude: 5.305295,
    neighborhood: "Malmousque",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-1941634528",
    name: "Le Davico brasserie",
    latitude: 43.295054,
    longitude: 5.375499,
    neighborhood: "Noailles",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-6737109766",
    name: "Le David",
    latitude: 43.262566,
    longitude: 5.374665,
    neighborhood: "Littoral Sud",
    address: "Marseille",
    category: "Bar",
    criteria: ["has_terrace"]
  }),
  makePlace({
    id: "osm-node-6210210086",
    name: "Le Debouche",
    latitude: 43.301475,
    longitude: 5.387552,
    neighborhood: "Longchamp",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["has_wifi"]
  }),
  makePlace({
    id: "osm-node-4405959293",
    name: "Le Debrief",
    latitude: 43.299305,
    longitude: 5.382588,
    neighborhood: "Longchamp",
    address: "Marseille",
    category: "Bar",
    criteria: []
  }),
  makePlace({
    id: "osm-node-1671302348",
    name: "Le Delibes",
    latitude: 43.279288,
    longitude: 5.382911,
    neighborhood: "Marseille",
    address: "311 Rue Paradis, Marseille",
    category: "Bar",
    criteria: []
  }),
  makePlace({
    id: "osm-node-5181596458",
    name: "Le Delice",
    latitude: 43.282372,
    longitude: 5.430084,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["good_for_groups"]
  }),
  makePlace({
    id: "osm-way-69645736",
    name: "Le Delice",
    latitude: 43.324319,
    longitude: 5.383834,
    neighborhood: "Belle de Mai",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["good_for_groups"]
  }),
  makePlace({
    id: "osm-node-3439591716",
    name: "Le Depot",
    latitude: 43.373359,
    longitude: 5.354883,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-1879017442",
    name: "Le dernier metro",
    latitude: 43.295361,
    longitude: 5.390612,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Bar",
    criteria: ["has_terrace","late_opening"]
  }),
  makePlace({
    id: "osm-node-3391011715",
    name: "Le Dessus du Panier",
    latitude: 43.314706,
    longitude: 5.370818,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-9679625417",
    name: "Le Diamant",
    latitude: 43.294214,
    longitude: 5.383763,
    neighborhood: "Cours Julien",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-9703831117",
    name: "Le Diamant Noir",
    latitude: 43.294217,
    longitude: 5.383793,
    neighborhood: "Cours Julien",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-5936430413",
    name: "Le Diplomate",
    latitude: 43.313095,
    longitude: 5.385551,
    neighborhood: "Belle de Mai",
    address: "Marseille",
    category: "Bar",
    criteria: []
  }),
  makePlace({
    id: "osm-node-7925474563",
    name: "Le Diplomate",
    latitude: 43.287763,
    longitude: 5.464761,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Bar",
    criteria: []
  }),
  makePlace({
    id: "osm-node-2104666287",
    name: "Le Disque Bleu",
    latitude: 43.296148,
    longitude: 5.369146,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-11181018263",
    name: "Le Donuts Marseillais",
    latitude: 43.360789,
    longitude: 5.314406,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["good_for_groups"]
  }),
  makePlace({
    id: "osm-node-5265363225",
    name: "Le douze",
    latitude: 43.299302,
    longitude: 5.37485,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Bar",
    criteria: []
  }),
  makePlace({
    id: "osm-node-12198413668",
    name: "Le Dru",
    latitude: 43.302543,
    longitude: 5.368391,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Bar",
    criteria: []
  }),
  makePlace({
    id: "osm-node-1822938954",
    name: "Le Duke",
    latitude: 43.288117,
    longitude: 5.366826,
    neighborhood: "Saint-Victor",
    address: "59 Rue d'Endoume, Marseille",
    category: "Bar",
    criteria: []
  }),
  makePlace({
    id: "osm-node-4591323703",
    name: "Le Duplex",
    latitude: 43.360607,
    longitude: 5.31427,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-2368312850",
    name: "Le Fair Play",
    latitude: 43.267152,
    longitude: 5.394758,
    neighborhood: "Littoral Sud",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["has_terrace"]
  }),
  makePlace({
    id: "osm-node-4416005713",
    name: "Le Fantastique",
    latitude: 43.287339,
    longitude: 5.389672,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-11132236820",
    name: "Le Faucon",
    latitude: 43.324091,
    longitude: 5.367503,
    neighborhood: "Le Panier",
    address: "22 Rue de Lyon, Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-3609139802",
    name: "Le Felicie",
    latitude: 43.289518,
    longitude: 5.379924,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-1600583578",
    name: "Le Femina",
    latitude: 43.296273,
    longitude: 5.378588,
    neighborhood: "Cours Julien",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-5310287085",
    name: "Le Fil a la Pate",
    latitude: 43.351689,
    longitude: 5.438797,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-9393420921",
    name: "Le Flash",
    latitude: 43.26631,
    longitude: 5.403213,
    neighborhood: "Littoral Sud",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["has_terrace"]
  }),
  makePlace({
    id: "osm-node-7829025635",
    name: "Le Flash",
    latitude: 43.298618,
    longitude: 5.397667,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Cafe",
    criteria: []
  }),
  makePlace({
    id: "osm-node-1982739668",
    name: "Le Flint",
    latitude: 43.248461,
    longitude: 5.375268,
    neighborhood: "Littoral Sud",
    address: "Marseille",
    category: "Cafe",
    criteria: []
  }),
  makePlace({
    id: "osm-node-5181596454",
    name: "Le Fontenoy Bar Tabac",
    latitude: 43.282303,
    longitude: 5.430474,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Bar",
    criteria: []
  }),
  makePlace({
    id: "osm-node-1237857730",
    name: "Le four des Navettes",
    latitude: 43.290733,
    longitude: 5.366446,
    neighborhood: "Saint-Victor",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: ["wheelchair_accessible"]
  }),
  makePlace({
    id: "osm-node-7749927874",
    name: "Le four et le moulin",
    latitude: 43.298999,
    longitude: 5.38898,
    neighborhood: "Longchamp",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-5936430412",
    name: "Le Fournil d'Adam",
    latitude: 43.313125,
    longitude: 5.385659,
    neighborhood: "Belle de Mai",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: ["late_opening"]
  }),
  makePlace({
    id: "osm-node-2024544253",
    name: "Le Fournil d'Alice",
    latitude: 43.292465,
    longitude: 5.384094,
    neighborhood: "Cours Julien",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-11768935169",
    name: "Le Fournil d'Andrea & Lucas",
    latitude: 43.290163,
    longitude: 5.372327,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-442635458",
    name: "Le Fournil d'Herriot",
    latitude: 43.271824,
    longitude: 5.387378,
    neighborhood: "Marseille",
    address: "51 Boulevard Herriot, Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-8741958026",
    name: "Le Fournil d'Ornella",
    latitude: 43.301575,
    longitude: 5.397609,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-12640516401",
    name: "Le Fournil de Beauvallon",
    latitude: 43.235453,
    longitude: 5.410996,
    neighborhood: "Littoral Sud",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-6240219598",
    name: "Le Fournil de Breteuil",
    latitude: 43.28958,
    longitude: 5.376039,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-2924809735",
    name: "Le Fournil de Frais Vallon",
    latitude: 43.325268,
    longitude: 5.424744,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-11055681183",
    name: "Le fournil de Gustave",
    latitude: 43.305358,
    longitude: 5.380668,
    neighborhood: "Longchamp",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-1800993683",
    name: "Le Fournil de l'Alhambra",
    latitude: 43.360147,
    longitude: 5.330343,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-2010715848",
    name: "Le Fournil de l'Etoile",
    latitude: 43.293931,
    longitude: 5.38658,
    neighborhood: "Cours Julien",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: ["has_terrace"]
  }),
  makePlace({
    id: "osm-way-154569606",
    name: "Le Fournil de l'Hyppodrome",
    latitude: 43.279795,
    longitude: 5.417764,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-13271862120",
    name: "Le Fournil de la Belle de Mai",
    latitude: 43.311809,
    longitude: 5.386929,
    neighborhood: "Belle de Mai",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-8897551890",
    name: "Le fournil de la Delorme",
    latitude: 43.347425,
    longitude: 5.370171,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-4232420301",
    name: "Le Fournil de la Loge",
    latitude: 43.296756,
    longitude: 5.371501,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-2041086103",
    name: "Le fournil de la place",
    latitude: 43.291503,
    longitude: 5.384673,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-1034064319",
    name: "Le Fournil de la Place",
    latitude: 43.294302,
    longitude: 5.385315,
    neighborhood: "Cours Julien",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-3779480023",
    name: "Le Fournil de la poste",
    latitude: 43.331269,
    longitude: 5.427759,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-2259967966",
    name: "Le fournil de la Republique",
    latitude: 43.304098,
    longitude: 5.367548,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-1883487959",
    name: "Le Fournil de Lena",
    latitude: 43.291686,
    longitude: 5.382746,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-2019803237",
    name: "Le Fournil de mon Pere",
    latitude: 43.288206,
    longitude: 5.392965,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-7264696892",
    name: "Le Fournil de Pomaria",
    latitude: 43.295311,
    longitude: 5.378824,
    neighborhood: "Cours Julien",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-11568947969",
    name: "Le Fournil de Prado",
    latitude: 43.279572,
    longitude: 5.386923,
    neighborhood: "Marseille",
    address: "142 Avenue du Prado, Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-7463171792",
    name: "Le Fournil de Saint Pierre",
    latitude: 43.29256,
    longitude: 5.40874,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-3439591717",
    name: "Le fournil de Saint-Antoine",
    latitude: 43.370714,
    longitude: 5.356084,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-13319629397",
    name: "Le fournil de Saint-Just",
    latitude: 43.318846,
    longitude: 5.408296,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-4393393878",
    name: "Le Fournil de Saint-Lazare",
    latitude: 43.306643,
    longitude: 5.373683,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-3721509158",
    name: "Le Fournil de Saint-Mitre",
    latitude: 43.342009,
    longitude: 5.419853,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-2862082918",
    name: "Le Fournil de Salengro",
    latitude: 43.311739,
    longitude: 5.372502,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-9566462050",
    name: "Le Fournil des 3 lucs",
    latitude: 43.312016,
    longitude: 5.46505,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-4122998102",
    name: "Le fournil des Chartreux",
    latitude: 43.310035,
    longitude: 5.400582,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-2135103688",
    name: "Le fournil des Rois",
    latitude: 43.292459,
    longitude: 5.374857,
    neighborhood: "Noailles",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-6127615444",
    name: "Le Fournil du Canet",
    latitude: 43.327105,
    longitude: 5.375098,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-2031102961",
    name: "Le Fournil du Jarret",
    latitude: 43.302724,
    longitude: 5.401016,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: ["has_terrace"]
  }),
  makePlace({
    id: "osm-node-10688844813",
    name: "Le fournil du Lyon",
    latitude: 43.329584,
    longitude: 5.36557,
    neighborhood: "Le Panier",
    address: "Rue de Lyon, Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-622302208",
    name: "Le Fournil du Merlan",
    latitude: 43.33551,
    longitude: 5.407299,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-2085794777",
    name: "Le Fournil du Mont",
    latitude: 43.292169,
    longitude: 5.384116,
    neighborhood: "Cours Julien",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-7088102580",
    name: "Le Fournil du Palais",
    latitude: 43.291976,
    longitude: 5.373326,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-2027992767",
    name: "Le fournil du port",
    latitude: 43.303343,
    longitude: 5.366254,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-2613170625",
    name: "Le Fournil du Roucas Blanc",
    latitude: 43.281297,
    longitude: 5.369134,
    neighborhood: "Saint-Victor",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-12330295473",
    name: "Le fournil du siphon",
    latitude: 43.307933,
    longitude: 5.396344,
    neighborhood: "Belle de Mai",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-1023910777",
    name: "Le Fournil du Technopole",
    latitude: 43.346729,
    longitude: 5.448787,
    neighborhood: "Marseille",
    address: "305 Rue Albert Einstein, Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-13137566735",
    name: "Le Fournil du Velodrome",
    latitude: 43.273037,
    longitude: 5.391514,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-2413393982",
    name: "Le Fournil Le Brix",
    latitude: 43.262558,
    longitude: 5.404794,
    neighborhood: "Littoral Sud",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: ["has_terrace"]
  }),
  makePlace({
    id: "osm-node-2623975597",
    name: "Le Foyer du Peuple",
    latitude: 43.285206,
    longitude: 5.394916,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Bar",
    criteria: ["has_terrace"]
  }),
  makePlace({
    id: "osm-node-9800972122",
    name: "Le France",
    latitude: 43.29703,
    longitude: 5.362297,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Bar",
    criteria: ["has_terrace"]
  }),
  makePlace({
    id: "osm-node-9920804005",
    name: "Le Fruitier de Saint-Giniez",
    latitude: 43.269227,
    longitude: 5.38817,
    neighborhood: "Littoral Sud",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-7040430712",
    name: "le Gaia",
    latitude: 43.255383,
    longitude: 5.407931,
    neighborhood: "Littoral Sud",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["good_for_groups"]
  }),
  makePlace({
    id: "osm-node-11598061123",
    name: "Le Galland",
    latitude: 43.279132,
    longitude: 5.39174,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Bar",
    criteria: []
  }),
  makePlace({
    id: "osm-node-12120272745",
    name: "Le Gambetta",
    latitude: 43.299548,
    longitude: 5.382182,
    neighborhood: "Longchamp",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-4405959280",
    name: "Le Gambetta",
    latitude: 43.299206,
    longitude: 5.38466,
    neighborhood: "Longchamp",
    address: "Marseille",
    category: "Bar",
    criteria: []
  }),
  makePlace({
    id: "osm-way-154595276",
    name: "Le Gant d'Or",
    latitude: 43.279673,
    longitude: 5.417434,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-4713564665",
    name: "Le Gardian",
    latitude: 43.298409,
    longitude: 5.380758,
    neighborhood: "Longchamp",
    address: "Marseille",
    category: "Cafe",
    criteria: []
  }),
  makePlace({
    id: "osm-way-157626964",
    name: "Le Gargantua",
    latitude: 43.284483,
    longitude: 5.484267,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-1038618034",
    name: "Le Giulia",
    latitude: 43.2985,
    longitude: 5.384162,
    neighborhood: "Longchamp",
    address: "Marseille",
    category: "Bar",
    criteria: []
  }),
  makePlace({
    id: "osm-node-3807748867",
    name: "Le Glacier du Roi",
    latitude: 43.297445,
    longitude: 5.36593,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Cafe",
    criteria: ["has_terrace"]
  }),
  makePlace({
    id: "osm-node-11063436107",
    name: "Le Glacier Du Roi",
    latitude: 43.290554,
    longitude: 5.356207,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Cafe",
    criteria: []
  }),
  makePlace({
    id: "osm-node-1490551264",
    name: "Le Grain de Sable",
    latitude: 43.299376,
    longitude: 5.377561,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["has_terrace","vegetarian_options"]
  }),
  makePlace({
    id: "osm-node-1279191315",
    name: "Le grain de sel",
    latitude: 43.29177,
    longitude: 5.373169,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-6934829785",
    name: "Le Grand Cafe",
    latitude: 43.285343,
    longitude: 5.384498,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Cafe",
    criteria: []
  }),
  makePlace({
    id: "osm-node-6860035445",
    name: "Le Grand Comptoir de Paris",
    latitude: 43.296471,
    longitude: 5.371931,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["has_terrace"]
  }),
  makePlace({
    id: "osm-node-5534080781",
    name: "Le Grand Pin",
    latitude: 43.256807,
    longitude: 5.393995,
    neighborhood: "Littoral Sud",
    address: "430 Avenue de Mazargues, Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-way-1266042592",
    name: "Le Greenwhich",
    latitude: 43.25482,
    longitude: 5.375733,
    neighborhood: "Littoral Sud",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["has_terrace"]
  }),
  makePlace({
    id: "osm-node-1583328918",
    name: "Le Grim'O",
    latitude: 43.296,
    longitude: 5.48709,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-way-955681184",
    name: "Le Gugu",
    latitude: 43.295089,
    longitude: 5.386084,
    neighborhood: "Cours Julien",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["wheelchair_accessible","good_for_groups"]
  }),
  makePlace({
    id: "osm-node-2379323550",
    name: "Le Halawi",
    latitude: 43.288149,
    longitude: 5.384347,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-2120589428",
    name: "Le Hippie Chic Cafe",
    latitude: 43.304246,
    longitude: 5.365354,
    neighborhood: "Le Panier",
    address: "2 Boulevard Jacques Saade Quai de la Joliette, Marseille",
    category: "Restaurant",
    criteria: ["has_terrace","late_opening"]
  }),
  makePlace({
    id: "osm-node-2841931137",
    name: "Le jardin",
    latitude: 43.246319,
    longitude: 5.402695,
    neighborhood: "Littoral Sud",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-7621888783",
    name: "Le Jardin",
    latitude: 43.280889,
    longitude: 5.368952,
    neighborhood: "Saint-Victor",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-5340008312",
    name: "Le jardin cache",
    latitude: 43.296614,
    longitude: 5.48323,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["has_terrace","vegetarian_options"]
  }),
  makePlace({
    id: "osm-node-2059563924",
    name: "Le jardin d'a cote",
    latitude: 43.293379,
    longitude: 5.383763,
    neighborhood: "Cours Julien",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-7925474558",
    name: "Le Jardin d'Eden",
    latitude: 43.287975,
    longitude: 5.464186,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-4109316468",
    name: "Le Jardin de Cantini",
    latitude: 43.284253,
    longitude: 5.387309,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-12692719109",
    name: "Le Jardin de Jannot",
    latitude: 43.307148,
    longitude: 5.365571,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: ["late_opening","wheelchair_accessible"]
  }),
  makePlace({
    id: "osm-node-8897551891",
    name: "Le Jardin de la Delorme",
    latitude: 43.347496,
    longitude: 5.370316,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-way-154588898",
    name: "Le Jardin de la Pointe Verte",
    latitude: 43.283744,
    longitude: 5.42715,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-4845822928",
    name: "Le Jardin de Provence",
    latitude: 43.307966,
    longitude: 5.425814,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-1513994385",
    name: "Le Jardin des Vestiges",
    latitude: 43.296426,
    longitude: 5.374641,
    neighborhood: "Noailles",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-9511111883",
    name: "Le Jardin Provencal",
    latitude: 43.263268,
    longitude: 5.397237,
    neighborhood: "Littoral Sud",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-13905058259",
    name: "Le Jasmin de Carthage",
    latitude: 43.301576,
    longitude: 5.375722,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-2028106643",
    name: "Le Jean Jaures",
    latitude: 43.294583,
    longitude: 5.385549,
    neighborhood: "Cours Julien",
    address: "Marseille",
    category: "Cafe",
    criteria: ["has_terrace"]
  }),
  makePlace({
    id: "osm-node-1250893404",
    name: "Le Joli Port",
    latitude: 43.297008,
    longitude: 5.371762,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-9668035222",
    name: "Le Julien",
    latitude: 43.288694,
    longitude: 5.378702,
    neighborhood: "Marseille",
    address: "114 Rue Paradis, Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-11825159269",
    name: "Le K",
    latitude: 43.299284,
    longitude: 5.36843,
    neighborhood: "Le Panier",
    address: "23 Rue du Panier, Marseille",
    category: "Cafe",
    criteria: []
  }),
  makePlace({
    id: "osm-node-2761510021",
    name: "Le Kaliente",
    latitude: 43.356524,
    longitude: 5.357254,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-3329661172",
    name: "Le Kaloum",
    latitude: 43.294585,
    longitude: 5.379763,
    neighborhood: "Cours Julien",
    address: "Marseille",
    category: "Bar",
    criteria: []
  }),
  makePlace({
    id: "osm-node-6723056951",
    name: "Le Kilt",
    latitude: 43.278224,
    longitude: 5.388532,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["has_terrace"]
  }),
  makePlace({
    id: "osm-node-2691453043",
    name: "Le kiosque d'Arvieux",
    latitude: 43.306153,
    longitude: 5.367735,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["wheelchair_accessible","good_for_groups"]
  }),
  makePlace({
    id: "osm-node-1151748865",
    name: "Le Kribien - Chez Magloire",
    latitude: 43.293622,
    longitude: 5.386377,
    neighborhood: "Cours Julien",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-2016443150",
    name: "Le Laetitia",
    latitude: 43.300987,
    longitude: 5.383453,
    neighborhood: "Longchamp",
    address: "Marseille",
    category: "Cafe",
    criteria: []
  }),
  makePlace({
    id: "osm-node-6737202811",
    name: "Le Lagon Bleu",
    latitude: 43.244445,
    longitude: 5.37172,
    neighborhood: "Littoral Sud",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["has_terrace"]
  }),
  makePlace({
    id: "osm-node-2511318269",
    name: "Le Lamparo",
    latitude: 43.296416,
    longitude: 5.379571,
    neighborhood: "Cours Julien",
    address: "2 Place du Marche des Capucins, Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-5815425635",
    name: "Le Latin",
    latitude: 43.287059,
    longitude: 5.379224,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Cafe",
    criteria: []
  }),
  makePlace({
    id: "osm-node-5041218622",
    name: "Le Levant",
    latitude: 43.300731,
    longitude: 5.382111,
    neighborhood: "Longchamp",
    address: "18 Boulevard de la Liberte, Marseille",
    category: "Restaurant",
    criteria: ["late_opening","vegetarian_options"]
  }),
  makePlace({
    id: "osm-node-13326753801",
    name: "le libanais contemporain",
    latitude: 43.291732,
    longitude: 5.374131,
    neighborhood: "Marseille",
    address: "30 Rue Fortia, Marseille",
    category: "Restaurant",
    criteria: ["vegetarian_options"]
  }),
  makePlace({
    id: "osm-node-1870432820",
    name: "Le Luminyen",
    latitude: 43.231482,
    longitude: 5.436291,
    neighborhood: "Littoral Sud",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["wheelchair_accessible","good_for_groups"]
  }),
  makePlace({
    id: "osm-node-10054116672",
    name: "Le Madraguin",
    latitude: 43.232077,
    longitude: 5.3556,
    neighborhood: "Malmousque",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-6542584313",
    name: "Le Marche d'Elise",
    latitude: 43.308137,
    longitude: 5.431106,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-7797180898",
    name: "Le Marche de Beaumont",
    latitude: 43.307395,
    longitude: 5.435148,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-4144328705",
    name: "Le Marche de Lyly",
    latitude: 43.318241,
    longitude: 5.384655,
    neighborhood: "Belle de Mai",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-2994557229",
    name: "Le Marche des Argonautes",
    latitude: 43.301504,
    longitude: 5.388256,
    neighborhood: "Longchamp",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-11768934870",
    name: "Le Marigny",
    latitude: 43.290252,
    longitude: 5.372623,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Cafe",
    criteria: []
  }),
  makePlace({
    id: "osm-node-11975227069",
    name: "Le Marius",
    latitude: 43.288435,
    longitude: 5.359377,
    neighborhood: "Marseille",
    address: "Place du 4 Septembre, Marseille",
    category: "Cafe",
    criteria: []
  }),
  makePlace({
    id: "osm-node-4764592402",
    name: "Le Marlin",
    latitude: 43.293143,
    longitude: 5.371893,
    neighborhood: "Noailles",
    address: "Marseille",
    category: "Bar",
    criteria: []
  }),
  makePlace({
    id: "osm-node-9857679793",
    name: "Le Marmot",
    instagram_handle: "lemarmotbarprovencal",
    latitude: 43.294011,
    longitude: 5.37547,
    neighborhood: "Noailles",
    address: "22 Rue Beauvau, Marseille",
    category: "Bar",
    criteria: ["has_terrace","late_opening"]
  }),
  makePlace({
    id: "osm-node-11860709841",
    name: "Le Marseillais",
    latitude: 43.293836,
    longitude: 5.373561,
    neighborhood: "Noailles",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-11343460294",
    name: "Le Marseillais Coiffure",
    instagram_handle: "lemarseillaiscoiffure",
    latitude: 43.297317,
    longitude: 5.379039,
    neighborhood: "Cours Julien",
    address: "25 Rue Vincent Scotto, Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-2171924394",
    name: "Le Mas",
    latitude: 43.292877,
    longitude: 5.37599,
    neighborhood: "Noailles",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-7833279031",
    name: "Le Master",
    latitude: 43.268955,
    longitude: 5.419733,
    neighborhood: "Littoral Sud",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["good_for_groups"]
  }),
  makePlace({
    id: "osm-node-5795578741",
    name: "Le Melo",
    latitude: 43.29393,
    longitude: 5.382982,
    neighborhood: "Cours Julien",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-11119491637",
    name: "Le Metro",
    latitude: 43.320032,
    longitude: 5.367641,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-7897319162",
    name: "Le Metropole",
    latitude: 43.296009,
    longitude: 5.374712,
    neighborhood: "Noailles",
    address: "Marseille",
    category: "Cafe",
    criteria: ["has_terrace"]
  }),
  makePlace({
    id: "osm-node-7616506347",
    name: "Le miniut",
    latitude: 43.290243,
    longitude: 5.366259,
    neighborhood: "Saint-Victor",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-5584615721",
    name: "Le Mirage",
    latitude: 43.295647,
    longitude: 5.381783,
    neighborhood: "Cours Julien",
    address: "Marseille",
    category: "Cafe",
    criteria: ["late_opening"]
  }),
  makePlace({
    id: "osm-node-2103599856",
    name: "Le Miramar",
    latitude: 43.296504,
    longitude: 5.373201,
    neighborhood: "Noailles",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-5817421516",
    name: "Le Mistral",
    latitude: 43.296191,
    longitude: 5.369492,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-9506334125",
    name: "Le Mistral",
    latitude: 43.362561,
    longitude: 5.335688,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-4463345819",
    name: "Le Moga",
    latitude: 43.300903,
    longitude: 5.388233,
    neighborhood: "Longchamp",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["late_opening"]
  }),
  makePlace({
    id: "osm-node-2352033227",
    name: "Le Mole - Cafe",
    latitude: 43.295412,
    longitude: 5.36162,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Cafe",
    criteria: ["has_terrace","vegetarian_options"]
  }),
  makePlace({
    id: "osm-node-2375832166",
    name: "Le Molotov",
    latitude: 43.292708,
    longitude: 5.383167,
    neighborhood: "Cours Julien",
    address: "Marseille",
    category: "Bar",
    criteria: []
  }),
  makePlace({
    id: "osm-node-997604285",
    name: "Le Monde",
    latitude: 43.297269,
    longitude: 5.379712,
    neighborhood: "Cours Julien",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["good_for_groups"]
  }),
  makePlace({
    id: "osm-node-1871305276",
    name: "Le Mont Brison",
    latitude: 43.296265,
    longitude: 5.390899,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-1652799894",
    name: "Le Montaigne",
    latitude: 43.304321,
    longitude: 5.414607,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Bar",
    criteria: []
  }),
  makePlace({
    id: "osm-node-3852182304",
    name: "Le Montecristo",
    latitude: 43.328577,
    longitude: 5.43374,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Bar",
    criteria: []
  }),
  makePlace({
    id: "osm-node-6031903349",
    name: "Le Montmartre",
    latitude: 43.297598,
    longitude: 5.365904,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-4713564662",
    name: "Le monumental",
    latitude: 43.298507,
    longitude: 5.380742,
    neighborhood: "Longchamp",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-2456098116",
    name: "Le Moulin d'Haiti",
    latitude: 43.297361,
    longitude: 5.408018,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: ["wheelchair_accessible"]
  }),
  makePlace({
    id: "osm-node-3539250760",
    name: "Le Moulin de Bougainville",
    latitude: 43.319106,
    longitude: 5.36726,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-4109316469",
    name: "Le Moulin de Cantini",
    latitude: 43.284257,
    longitude: 5.387398,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-9920806377",
    name: "Le Moulin de David",
    latitude: 43.269179,
    longitude: 5.388458,
    neighborhood: "Littoral Sud",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-11197295325",
    name: "Le Moulin des Docks",
    latitude: 43.304075,
    longitude: 5.366708,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: ["has_terrace"]
  }),
  makePlace({
    id: "osm-node-3852182305",
    name: "Le Moulin Provencal",
    latitude: 43.328023,
    longitude: 5.434111,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-4463345812",
    name: "Le Mounguy",
    latitude: 43.299492,
    longitude: 5.386067,
    neighborhood: "Longchamp",
    address: "Marseille",
    category: "Bar",
    criteria: []
  }),
  makePlace({
    id: "osm-node-9581654683",
    name: "Le Mumedia",
    latitude: 43.371152,
    longitude: 5.355145,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-10091483900",
    name: "Le Munich",
    latitude: 43.268461,
    longitude: 5.407217,
    neighborhood: "Littoral Sud",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["late_opening","good_for_groups"]
  }),
  makePlace({
    id: "osm-node-11539389035",
    name: "Le Murano",
    latitude: 43.275604,
    longitude: 5.389992,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-4764600996",
    name: "Le Nam Viet",
    latitude: 43.292763,
    longitude: 5.372051,
    neighborhood: "Noailles",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-11190528771",
    name: "Le Narval",
    latitude: 43.246815,
    longitude: 5.402059,
    neighborhood: "Littoral Sud",
    address: "Marseille",
    category: "Bar",
    criteria: ["has_terrace"]
  }),
  makePlace({
    id: "osm-node-7793984354",
    name: "Le Nautica des goudes",
    latitude: 43.215188,
    longitude: 5.346214,
    neighborhood: "Malmousque",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-2924809736",
    name: "Le Nautile",
    latitude: 43.325308,
    longitude: 5.42464,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Cafe",
    criteria: []
  }),
  makePlace({
    id: "osm-node-5135670644",
    name: "Le Need's",
    latitude: 43.293121,
    longitude: 5.3721,
    neighborhood: "Noailles",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-2608216152",
    name: "Le Nemrod",
    latitude: 43.286797,
    longitude: 5.38943,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Bar",
    criteria: []
  }),
  makePlace({
    id: "osm-node-2878130115",
    name: "Le New Barroco",
    latitude: 43.325601,
    longitude: 5.381596,
    neighborhood: "Longchamp",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-5340046921",
    name: "Le New First",
    latitude: 43.295468,
    longitude: 5.488153,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-5809288753",
    name: "Le Newport",
    latitude: 43.245518,
    longitude: 5.373876,
    neighborhood: "Littoral Sud",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-6027212008",
    name: "Le Notre Dame",
    latitude: 43.287,
    longitude: 5.373989,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Cafe",
    criteria: []
  }),
  makePlace({
    id: "osm-node-2024973912",
    name: "Le Nouryad",
    latitude: 43.292578,
    longitude: 5.383452,
    neighborhood: "Cours Julien",
    address: "Marseille",
    category: "Cafe",
    criteria: []
  }),
  makePlace({
    id: "osm-node-11502895401",
    name: "Le P'tit Leo",
    latitude: 43.278012,
    longitude: 5.388625,
    neighborhood: "Marseille",
    address: "175 Avenue du Prado, Marseille",
    category: "Restaurant",
    criteria: ["has_terrace"]
  }),
  makePlace({
    id: "osm-node-6129949824",
    name: "Le Pacific",
    latitude: 43.317315,
    longitude: 5.374406,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Bar",
    criteria: []
  }),
  makePlace({
    id: "osm-node-3204079819",
    name: "Le Pacifique",
    latitude: 43.289834,
    longitude: 5.440178,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-5341411811",
    name: "Le Pacifique 2",
    latitude: 43.296105,
    longitude: 5.489463,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["has_terrace","late_opening","good_for_groups"]
  }),
  makePlace({
    id: "osm-way-154570038",
    name: "Le Pacifique 4",
    latitude: 43.274985,
    longitude: 5.415281,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-4977718272",
    name: "Le Pain a Table",
    latitude: 43.316779,
    longitude: 5.376209,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-6801358185",
    name: "Le pain de l'Opera",
    latitude: 43.292956,
    longitude: 5.37575,
    neighborhood: "Noailles",
    address: "Rue Francis Davso, Marseille",
    category: "Commerce alimentaire",
    criteria: ["has_terrace"]
  }),
  makePlace({
    id: "osm-node-9992057193",
    name: "Le Pain des Collines",
    latitude: 43.302416,
    longitude: 5.493976,
    neighborhood: "Marseille",
    address: "Place Saint-Christophe, Marseille",
    category: "Commerce alimentaire",
    criteria: ["has_terrace"]
  }),
  makePlace({
    id: "osm-node-9866811201",
    name: "Le Pain des Collines II",
    latitude: 43.318044,
    longitude: 5.460213,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-2590099747",
    name: "Le pain du Rouet",
    latitude: 43.276558,
    longitude: 5.394535,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-2822284412",
    name: "Le Pain du Rouet",
    latitude: 43.278472,
    longitude: 5.392211,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-1941618125",
    name: "Le pain gourmand",
    latitude: 43.2967,
    longitude: 5.37643,
    neighborhood: "Noailles",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["good_for_groups"]
  }),
  makePlace({
    id: "osm-node-4560696392",
    name: "Le Paki",
    latitude: 43.294321,
    longitude: 5.386975,
    neighborhood: "Cours Julien",
    address: "51 Place Jean Jaures, Marseille",
    category: "Restaurant",
    criteria: ["has_terrace","late_opening"]
  }),
  makePlace({
    id: "osm-node-10631223413",
    name: "Le Palace",
    latitude: 43.327126,
    longitude: 5.363658,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["has_terrace"]
  }),
  makePlace({
    id: "osm-node-3790446324",
    name: "Le Palais d'Asie",
    latitude: 43.257388,
    longitude: 5.394527,
    neighborhood: "Littoral Sud",
    address: "33 Boulevard Luce, Marseille",
    category: "Restaurant",
    criteria: ["late_opening","vegetarian_options"]
  }),
  makePlace({
    id: "osm-node-3884913209",
    name: "Le palais de la major",
    latitude: 43.299033,
    longitude: 5.363849,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-13291362201",
    name: "Le Palais du Maharajah",
    latitude: 43.304189,
    longitude: 5.474499,
    neighborhood: "Marseille",
    address: "151 Route des Trois Lucs a La Valentine, Marseille",
    category: "Restaurant",
    criteria: ["vegetarian_options"]
  }),
  makePlace({
    id: "osm-node-10963925840",
    name: "Le Palmier",
    latitude: 43.294839,
    longitude: 5.377008,
    neighborhood: "Noailles",
    address: "42 Rue Vacon, Marseille",
    category: "Restaurant",
    criteria: ["has_terrace","late_opening"]
  }),
  makePlace({
    id: "osm-node-6446118786",
    name: "Le Panier a Burgers",
    latitude: 43.300423,
    longitude: 5.40016,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-9042281382",
    name: "Le panier a salade",
    latitude: 43.299446,
    longitude: 5.368844,
    neighborhood: "Le Panier",
    address: "5 Mauvestis, Marseille",
    category: "Restaurant",
    criteria: ["kid_friendly","good_for_groups"]
  }),
  makePlace({
    id: "osm-node-11124385587",
    name: "Le Panier aux Epices",
    latitude: 43.299314,
    longitude: 5.368197,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-2241170387",
    name: "Le Panier Marseillais",
    latitude: 43.299775,
    longitude: 5.368066,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Cafe",
    criteria: []
  }),
  makePlace({
    id: "osm-node-8680254176",
    name: "Le Panificateur, Maitre Artisan Boulanger",
    latitude: 43.302983,
    longitude: 5.36891,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-1871316006",
    name: "Le Paoli",
    latitude: 43.296429,
    longitude: 5.390885,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Cafe",
    criteria: []
  }),
  makePlace({
    id: "osm-node-9652139352",
    name: "Le Papamousse",
    latitude: 43.29405,
    longitude: 5.386821,
    neighborhood: "Cours Julien",
    address: "Marseille",
    category: "Bar",
    criteria: ["has_terrace"]
  }),
  makePlace({
    id: "osm-node-9923183797",
    name: "Le Par Azar",
    latitude: 43.297599,
    longitude: 5.370934,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["vegetarian_options"]
  }),
  makePlace({
    id: "osm-node-1868944130",
    name: "Le parpaing qui flotte",
    latitude: 43.294973,
    longitude: 5.394173,
    neighborhood: "Marseille",
    address: "3 Rue Goudard, Marseille",
    category: "Restaurant",
    criteria: ["has_terrace"]
  }),
  makePlace({
    id: "osm-node-13851688336",
    name: "Le Pastis du Panier",
    latitude: 43.299514,
    longitude: 5.366456,
    neighborhood: "Le Panier",
    address: "4 Place des Treize Cantons, Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-7871589160",
    name: "Le patio de Vauban",
    latitude: 43.281331,
    longitude: 5.375057,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Bar",
    criteria: []
  }),
  makePlace({
    id: "osm-node-9700122691",
    name: "Le Pavillon du The",
    latitude: 43.280515,
    longitude: 5.394933,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-1536393929",
    name: "Le Peano",
    latitude: 43.292943,
    longitude: 5.373558,
    neighborhood: "Noailles",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-6419094525",
    name: "Le Pebre d'Ai",
    latitude: 43.301383,
    longitude: 5.512275,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-10017557030",
    name: "Le Penard",
    latitude: 43.29612,
    longitude: 5.386672,
    neighborhood: "Cours Julien",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["has_terrace"]
  }),
  makePlace({
    id: "osm-node-9566462052",
    name: "Le Pensez-y",
    latitude: 43.312115,
    longitude: 5.465078,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-way-70057644",
    name: "Le Peron",
    latitude: 43.287948,
    longitude: 5.352208,
    neighborhood: "Marseille",
    address: "56 Corniche du President John Fitzgerald Kennedy, Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-5411678412",
    name: "Le Perrin",
    latitude: 43.296264,
    longitude: 5.378184,
    neighborhood: "Cours Julien",
    address: "Marseille",
    category: "Cafe",
    criteria: []
  }),
  makePlace({
    id: "osm-node-12140500810",
    name: "Le Perroquet",
    latitude: 43.302667,
    longitude: 5.369297,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Bar",
    criteria: []
  }),
  makePlace({
    id: "osm-way-97713619",
    name: "Le Petit",
    latitude: 43.366711,
    longitude: 5.363137,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-9509936633",
    name: "Le Petit Amandier",
    latitude: 43.284386,
    longitude: 5.380517,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-1886609582",
    name: "Le Petit Angkor",
    latitude: 43.291894,
    longitude: 5.372912,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["vegetarian_options"]
  }),
  makePlace({
    id: "osm-node-4764607734",
    name: "Le Petit Bistrot",
    latitude: 43.292394,
    longitude: 5.371751,
    neighborhood: "Noailles",
    address: "Marseille",
    category: "Bar",
    criteria: []
  }),
  makePlace({
    id: "osm-node-3610260412",
    name: "Le Petit Caboulot",
    latitude: 43.289325,
    longitude: 5.378871,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-10731723005",
    name: "Le Petit Cafe",
    latitude: 43.291035,
    longitude: 5.371944,
    neighborhood: "Saint-Victor",
    address: "2 Place de la Corderie Henri Bergasse, Marseille",
    category: "Cafe",
    criteria: ["has_terrace"]
  }),
  makePlace({
    id: "osm-node-3440710642",
    name: "Le Petit Casino",
    latitude: 43.307586,
    longitude: 5.403213,
    neighborhood: "Marseille",
    address: "Boulevard de Roux, Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-2137516941",
    name: "Le Petit Casino",
    latitude: 43.288505,
    longitude: 5.387734,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-3458976627",
    name: "Le Petit Casino",
    latitude: 43.359875,
    longitude: 5.331279,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-3646381163",
    name: "Le Petit Casino",
    latitude: 43.307158,
    longitude: 5.409213,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-way-70041176",
    name: "Le Petit Casino",
    latitude: 43.282288,
    longitude: 5.351114,
    neighborhood: "Malmousque",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-7797691372",
    name: "Le Petit Casino Supermarche",
    latitude: 43.241958,
    longitude: 5.387304,
    neighborhood: "Littoral Sud",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: ["allows_cb_no_minimum"]
  }),
  makePlace({
    id: "osm-node-8475740450",
    name: "Le petit Chamarel",
    latitude: 43.29145,
    longitude: 5.381885,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-8438797336",
    name: "Le Petit Dugo",
    latitude: 43.298367,
    longitude: 5.381219,
    neighborhood: "Longchamp",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["has_terrace","wheelchair_accessible","vegetarian_options"]
  }),
  makePlace({
    id: "osm-node-7261787169",
    name: "Le petit jardin",
    latitude: 43.247632,
    longitude: 5.375325,
    neighborhood: "Littoral Sud",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-8312472958",
    name: "Le Petit Metro",
    latitude: 43.300852,
    longitude: 5.382589,
    neighborhood: "Longchamp",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-3790471135",
    name: "Le Petit Naples",
    latitude: 43.359843,
    longitude: 5.316361,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-738499750",
    name: "Le Petit Nice",
    latitude: 43.295438,
    longitude: 5.385884,
    neighborhood: "Cours Julien",
    address: "28 Place Jean Jaures, Marseille",
    category: "Cafe",
    criteria: ["has_terrace","late_opening"]
  }),
  makePlace({
    id: "osm-node-5020212275",
    name: "Le Petit Nice Passedat",
    latitude: 43.280144,
    longitude: 5.351924,
    neighborhood: "Malmousque",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["late_opening","wheelchair_accessible","good_for_groups"]
  }),
  makePlace({
    id: "osm-way-70059803",
    name: "Le petit pavillon",
    latitude: 43.288579,
    longitude: 5.353045,
    neighborhood: "Marseille",
    address: "54 Corniche du President John Fitzgerald Kennedy, Marseille",
    category: "Restaurant",
    criteria: ["has_wifi"]
  }),
  makePlace({
    id: "osm-node-4951187124",
    name: "Le Petit Pernod",
    latitude: 43.296461,
    longitude: 5.3733,
    neighborhood: "Noailles",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-990321676",
    name: "Le Petit Pernod",
    latitude: 43.294644,
    longitude: 5.384505,
    neighborhood: "Cours Julien",
    address: "Marseille",
    category: "Bar",
    criteria: []
  }),
  makePlace({
    id: "osm-node-9711762658",
    name: "Le Petit Perrin",
    latitude: 43.275949,
    longitude: 5.426483,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Cafe",
    criteria: ["has_terrace"]
  }),
  makePlace({
    id: "osm-node-4232144290",
    name: "Le petit plat",
    latitude: 43.273091,
    longitude: 5.391407,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["has_terrace"]
  }),
  makePlace({
    id: "osm-node-5537809334",
    name: "Le Petit Pondichery",
    latitude: 43.302826,
    longitude: 5.396,
    neighborhood: "Marseille",
    address: "44 Boulevard Charles Guillaume Philippon, Marseille",
    category: "Restaurant",
    criteria: ["has_terrace","late_opening","vegetarian_options"]
  }),
  makePlace({
    id: "osm-way-219022410",
    name: "Le Petit Port",
    latitude: 43.225369,
    longitude: 5.347726,
    neighborhood: "Malmousque",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-9442215701",
    name: "Le Petit Primeur de la Viste",
    latitude: 43.358617,
    longitude: 5.35777,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-7359870396",
    name: "Le Petit Prince",
    latitude: 43.294758,
    longitude: 5.387156,
    neighborhood: "Cours Julien",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-1319273232",
    name: "Le Petit Saint-Louis",
    latitude: 43.295986,
    longitude: 5.378632,
    neighborhood: "Cours Julien",
    address: "Marseille",
    category: "Bar",
    criteria: []
  }),
  makePlace({
    id: "osm-node-6006546627",
    name: "Le Petrin",
    latitude: 43.313341,
    longitude: 5.386228,
    neighborhood: "Belle de Mai",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-8888046310",
    name: "Le petrin de Panisse",
    latitude: 43.279267,
    longitude: 5.413449,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-5139621773",
    name: "Le Petrin de Valmante",
    latitude: 43.248328,
    longitude: 5.417411,
    neighborhood: "Littoral Sud",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-2296378791",
    name: "Le Petrin Ribeirou",
    latitude: 43.289916,
    longitude: 5.49567,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: ["has_terrace","wheelchair_accessible","allows_cb_no_minimum"]
  }),
  makePlace({
    id: "osm-node-8977123718",
    name: "Le Phocea",
    latitude: 43.279218,
    longitude: 5.305072,
    neighborhood: "Malmousque",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-13522686271",
    name: "Le Phoceen",
    latitude: 43.261825,
    longitude: 5.375152,
    neighborhood: "Littoral Sud",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["good_for_groups"]
  }),
  makePlace({
    id: "osm-node-2375892955",
    name: "Le Phonographe",
    latitude: 43.293061,
    longitude: 5.374106,
    neighborhood: "Noailles",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-way-69140215",
    name: "Le Pied-de-Mouton",
    latitude: 43.294717,
    longitude: 5.382703,
    neighborhood: "Cours Julien",
    address: "44 Cours Julien, Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-11389667669",
    name: "Le plan de a a z",
    latitude: 43.29844,
    longitude: 5.382597,
    neighborhood: "Longchamp",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["late_opening","vegetarian_options"]
  }),
  makePlace({
    id: "osm-node-535284094",
    name: "Le Planete",
    latitude: 43.299918,
    longitude: 5.376279,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["wheelchair_accessible"]
  }),
  makePlace({
    id: "osm-node-1977547168",
    name: "Le Plat Provencal",
    latitude: 43.292837,
    longitude: 5.372679,
    neighborhood: "Noailles",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-2028106645",
    name: "Le Point Barre",
    latitude: 43.295153,
    longitude: 5.383547,
    neighborhood: "Cours Julien",
    address: "Marseille",
    category: "Bar",
    criteria: []
  }),
  makePlace({
    id: "osm-node-2375892956",
    name: "Le Pointu",
    latitude: 43.293101,
    longitude: 5.374283,
    neighborhood: "Noailles",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["wheelchair_accessible"]
  }),
  makePlace({
    id: "osm-node-12388262031",
    name: "le PonPon",
    latitude: 43.302942,
    longitude: 5.395472,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Bar",
    criteria: ["late_opening"]
  }),
  makePlace({
    id: "osm-node-8071999799",
    name: "Le Portugais",
    latitude: 43.293977,
    longitude: 5.400532,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-410325229",
    name: "Le Poste a Galene",
    latitude: 43.293228,
    longitude: 5.391763,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Bar",
    criteria: []
  }),
  makePlace({
    id: "osm-node-7797691374",
    name: "Le Potager",
    latitude: 43.241802,
    longitude: 5.387066,
    neighborhood: "Littoral Sud",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: ["allows_cb_no_minimum"]
  }),
  makePlace({
    id: "osm-node-2104666286",
    name: "Le Poulpe",
    latitude: 43.296129,
    longitude: 5.368974,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-6694505585",
    name: "Le Poulpe",
    latitude: 43.290916,
    longitude: 5.366298,
    neighborhood: "Saint-Victor",
    address: "Marseille",
    category: "Bar",
    criteria: []
  }),
  makePlace({
    id: "osm-node-13137126933",
    name: "Le Prado courses",
    latitude: 43.284385,
    longitude: 5.385042,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Cafe",
    criteria: []
  }),
  makePlace({
    id: "osm-node-8866953176",
    name: "Le presage",
    latitude: 43.34471,
    longitude: 5.438763,
    neighborhood: "Marseille",
    address: "99 Traverse de la rose, Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-4016684185",
    name: "Le Primeur de Saint-Tronc",
    latitude: 43.270077,
    longitude: 5.42328,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-2511318302",
    name: "Le primeur des 4 saisons",
    latitude: 43.296569,
    longitude: 5.380146,
    neighborhood: "Cours Julien",
    address: "9 Place du Marche des Capucins, Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-6124611788",
    name: "Le primeur du Jarret",
    latitude: 43.302795,
    longitude: 5.401172,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-1796098734",
    name: "Le Printemps",
    latitude: 43.303068,
    longitude: 5.378912,
    neighborhood: "Longchamp",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-5493263238",
    name: "Le Pulse",
    latitude: 43.293082,
    longitude: 5.383158,
    neighborhood: "Cours Julien",
    address: "94 Cours Julien, Marseille",
    category: "Bar",
    criteria: ["has_terrace","late_opening","allows_cb_no_minimum"]
  }),
  makePlace({
    id: "osm-node-4427776456",
    name: "Le Quai du 7eme",
    latitude: 43.292392,
    longitude: 5.367277,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["late_opening"]
  }),
  makePlace({
    id: "osm-node-11385594570",
    name: "Le quai gourmand",
    latitude: 43.308064,
    longitude: 5.370691,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-2024973913",
    name: "Le Rallye",
    latitude: 43.290994,
    longitude: 5.383003,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Cafe",
    criteria: []
  }),
  makePlace({
    id: "osm-node-11389696569",
    name: "Le Refuge",
    latitude: 43.298281,
    longitude: 5.367511,
    neighborhood: "Le Panier",
    address: "22 Rue du Refuge, Marseille",
    category: "Restaurant",
    criteria: ["late_opening"]
  }),
  makePlace({
    id: "osm-way-69617075",
    name: "Le Regali de Manon",
    latitude: 43.355684,
    longitude: 5.327907,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-4235395049",
    name: "Le Regent",
    latitude: 43.294324,
    longitude: 5.37697,
    neighborhood: "Noailles",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["has_terrace"]
  }),
  makePlace({
    id: "osm-node-1342448095",
    name: "Le Relais 50",
    latitude: 43.29656,
    longitude: 5.372677,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["has_terrace"]
  }),
  makePlace({
    id: "osm-node-10975272107",
    name: "Le Relais Corse",
    latitude: 43.28343,
    longitude: 5.385591,
    neighborhood: "Marseille",
    address: "49 Avenue du Prado, Marseille",
    category: "Restaurant",
    criteria: ["has_terrace","late_opening"]
  }),
  makePlace({
    id: "osm-way-70050867",
    name: "Le Rhul",
    latitude: 43.280168,
    longitude: 5.353743,
    neighborhood: "Malmousque",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-1568168668",
    name: "Le Rideau",
    latitude: 43.285834,
    longitude: 5.3948,
    neighborhood: "Marseille",
    address: "Place Pierre Roux, Marseille",
    category: "Bar",
    criteria: ["has_terrace","late_opening"]
  }),
  makePlace({
    id: "osm-node-13051899702",
    name: "Le Riviera",
    latitude: 43.306709,
    longitude: 5.399923,
    neighborhood: "Belle de Mai",
    address: "2 Place Pierre Brossolette, Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-11428887769",
    name: "Le Romarin",
    latitude: 43.290108,
    longitude: 5.357166,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-2958176921",
    name: "Le Rostand",
    latitude: 43.287453,
    longitude: 5.380745,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["late_opening"]
  }),
  makePlace({
    id: "osm-node-12693771548",
    name: "Le Roy Rene",
    latitude: 43.307043,
    longitude: 5.364023,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["has_terrace"]
  }),
  makePlace({
    id: "osm-node-5661128654",
    name: "Le Royal",
    latitude: 43.300818,
    longitude: 5.377082,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-627616770",
    name: "Le Royale",
    latitude: 43.338973,
    longitude: 5.407836,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Cafe",
    criteria: []
  }),
  makePlace({
    id: "osm-node-3571160493",
    name: "Le Safari",
    latitude: 43.330846,
    longitude: 5.399543,
    neighborhood: "Belle de Mai",
    address: "Marseille",
    category: "Bar",
    criteria: ["wheelchair_accessible"]
  }),
  makePlace({
    id: "osm-node-12820866277",
    name: "Le Saint Victor",
    latitude: 43.29,
    longitude: 5.366491,
    neighborhood: "Saint-Victor",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["has_terrace"]
  }),
  makePlace({
    id: "osm-way-154595973",
    name: "Le Saint-Cyr",
    latitude: 43.2797,
    longitude: 5.417258,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Bar",
    criteria: []
  }),
  makePlace({
    id: "osm-node-1822939013",
    name: "Le Saint-Eugene",
    latitude: 43.284512,
    longitude: 5.358297,
    neighborhood: "Malmousque",
    address: "Marseille",
    category: "Cafe",
    criteria: ["has_terrace"]
  }),
  makePlace({
    id: "osm-node-4064793661",
    name: "Le Saint-Giniez",
    latitude: 43.27003,
    longitude: 5.388032,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-2010715849",
    name: "Le Saint-Michel",
    latitude: 43.293936,
    longitude: 5.386002,
    neighborhood: "Cours Julien",
    address: "Marseille",
    category: "Bar",
    criteria: []
  }),
  makePlace({
    id: "osm-node-9846519244",
    name: "Le Salengro",
    latitude: 43.322395,
    longitude: 5.367894,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Cafe",
    criteria: []
  }),
  makePlace({
    id: "osm-node-11385566168",
    name: "Le sampiero",
    latitude: 43.308584,
    longitude: 5.370739,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["has_terrace"]
  }),
  makePlace({
    id: "osm-node-10829990572",
    name: "Le San Michel",
    latitude: 43.249516,
    longitude: 5.389608,
    neighborhood: "Littoral Sud",
    address: "104 Avenue de Hambourg, Marseille",
    category: "Bar",
    criteria: ["has_terrace"]
  }),
  makePlace({
    id: "osm-node-5930793115",
    name: "Le Saphir",
    latitude: 43.312928,
    longitude: 5.385314,
    neighborhood: "Belle de Mai",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["good_for_groups"]
  }),
  makePlace({
    id: "osm-node-1559306086",
    name: "Le Savoyard",
    latitude: 43.284834,
    longitude: 5.392448,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Bar",
    criteria: []
  }),
  makePlace({
    id: "osm-node-1496704065",
    name: "Le Scorpion",
    latitude: 43.292843,
    longitude: 5.382846,
    neighborhood: "Cours Julien",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["late_opening"]
  }),
  makePlace({
    id: "osm-node-11307500053",
    name: "Le Siam",
    latitude: 43.241079,
    longitude: 5.363705,
    neighborhood: "Littoral Sud",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-12806225476",
    name: "Le Simone",
    latitude: 43.294696,
    longitude: 5.387125,
    neighborhood: "Cours Julien",
    address: "Marseille",
    category: "Bar",
    criteria: ["has_terrace"]
  }),
  makePlace({
    id: "osm-node-1354779048",
    name: "Le Skating",
    latitude: 43.261682,
    longitude: 5.378911,
    neighborhood: "Littoral Sud",
    address: "Marseille",
    category: "Cafe",
    criteria: []
  }),
  makePlace({
    id: "osm-node-3992084770",
    name: "Le Snack de Michelis",
    latitude: 43.285684,
    longitude: 5.442796,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["good_for_groups"]
  }),
  makePlace({
    id: "osm-node-5605211605",
    name: "Le Soleil",
    latitude: 43.300804,
    longitude: 5.377001,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-4591323695",
    name: "Le Soleil",
    latitude: 43.360795,
    longitude: 5.31362,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Bar",
    criteria: []
  }),
  makePlace({
    id: "osm-node-8672565298",
    name: "Le sommelier",
    latitude: 43.293879,
    longitude: 5.379144,
    neighborhood: "Cours Julien",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: ["good_for_groups"]
  }),
  makePlace({
    id: "osm-node-7833239299",
    name: "Le Sommelier",
    latitude: 43.284984,
    longitude: 5.360114,
    neighborhood: "Saint-Victor",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-way-1265848032",
    name: "Le souk",
    latitude: 43.296028,
    longitude: 5.368476,
    neighborhood: "Le Panier",
    address: "Quai du Port, Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-7883223608",
    name: "Le Special",
    latitude: 43.301181,
    longitude: 5.374986,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["good_for_groups"]
  }),
  makePlace({
    id: "osm-node-1639383291",
    name: "Le Sprint",
    latitude: 43.323287,
    longitude: 5.393442,
    neighborhood: "Belle de Mai",
    address: "Marseille",
    category: "Bar",
    criteria: []
  }),
  makePlace({
    id: "osm-node-4764599711",
    name: "Le Sri Ganesh",
    latitude: 43.292669,
    longitude: 5.372108,
    neighborhood: "Noailles",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["late_opening","vegetarian_options"]
  }),
  makePlace({
    id: "osm-node-13871079415",
    name: "Le St. Bazile",
    latitude: 43.300063,
    longitude: 5.383248,
    neighborhood: "Longchamp",
    address: "Marseille",
    category: "Cafe",
    criteria: []
  }),
  makePlace({
    id: "osm-node-10962435577",
    name: "Le Stand By",
    latitude: 43.28551,
    longitude: 5.382634,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["good_for_groups"]
  }),
  makePlace({
    id: "osm-node-11782593872",
    name: "Le Starlight",
    latitude: 43.247864,
    longitude: 5.390619,
    neighborhood: "Littoral Sud",
    address: "112 Avenue de Hambourg, Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-9056070787",
    name: "Le Strasbourg",
    latitude: 43.308666,
    longitude: 5.377514,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Bar",
    criteria: []
  }),
  makePlace({
    id: "osm-node-12196654660",
    name: "Le Tarpin Bon",
    instagram_handle: "letarpinbon13",
    latitude: 43.28883,
    longitude: 5.382748,
    neighborhood: "Marseille",
    address: "7 Rue Berlioz, Marseille",
    category: "Restaurant",
    criteria: ["allows_cb_no_minimum","good_for_groups"]
  }),
  makePlace({
    id: "osm-node-13283877801",
    name: "Le Tarpin Bon - Saint Barnabe",
    latitude: 43.304517,
    longitude: 5.415295,
    neighborhood: "Marseille",
    address: "18 Avenue de Saint-Julien, Marseille",
    category: "Restaurant",
    criteria: ["late_opening","good_for_groups"]
  }),
  makePlace({
    id: "osm-node-9057078487",
    name: "Le Tassili",
    latitude: 43.309825,
    longitude: 5.379786,
    neighborhood: "Longchamp",
    address: "Marseille",
    category: "Cafe",
    criteria: []
  }),
  makePlace({
    id: "osm-node-6878567283",
    name: "Le taxi",
    latitude: 43.29916,
    longitude: 5.385964,
    neighborhood: "Longchamp",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-5181596457",
    name: "Le Tchap's",
    latitude: 43.282259,
    longitude: 5.429983,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-5113533922",
    name: "Le Tchitchou",
    latitude: 43.297522,
    longitude: 5.39757,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["has_wifi","vegetarian_options"]
  }),
  makePlace({
    id: "osm-node-9965838717",
    name: "Le TchoucK",
    latitude: 43.294393,
    longitude: 5.383967,
    neighborhood: "Cours Julien",
    address: "13 Bis Rue Vian, Marseille",
    category: "Restaurant",
    criteria: ["good_for_groups"]
  }),
  makePlace({
    id: "osm-node-4235395042",
    name: "Le Temps d'un Chocolat",
    latitude: 43.293992,
    longitude: 5.377076,
    neighborhood: "Noailles",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-1650359109",
    name: "Le Terminus",
    latitude: 43.303702,
    longitude: 5.418634,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Bar",
    criteria: []
  }),
  makePlace({
    id: "osm-node-3717633486",
    name: "Le Terroir Corse",
    latitude: 43.291839,
    longitude: 5.384057,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-6589753096",
    name: "Le Tire-Bouchon",
    latitude: 43.295206,
    longitude: 5.382943,
    neighborhood: "Cours Julien",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["has_terrace"]
  }),
  makePlace({
    id: "osm-node-8467987830",
    name: "Le Toigou",
    latitude: 43.265246,
    longitude: 5.390422,
    neighborhood: "Littoral Sud",
    address: "162 Avenue de Mazargues, Marseille",
    category: "Restaurant",
    criteria: ["late_opening","vegetarian_options"]
  }),
  makePlace({
    id: "osm-node-11792543892",
    name: "Le Tom Tip",
    latitude: 43.3032,
    longitude: 5.402517,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Bar",
    criteria: []
  }),
  makePlace({
    id: "osm-node-8721159723",
    name: "Le Tower",
    latitude: 43.306399,
    longitude: 5.392939,
    neighborhood: "Belle de Mai",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["good_for_groups"]
  }),
  makePlace({
    id: "osm-node-4415083967",
    name: "Le Traquenard",
    latitude: 43.294089,
    longitude: 5.386844,
    neighborhood: "Cours Julien",
    address: "Marseille",
    category: "Bar",
    criteria: ["has_terrace"]
  }),
  makePlace({
    id: "osm-node-7265639233",
    name: "Le Trianon",
    latitude: 43.290777,
    longitude: 5.359014,
    neighborhood: "Marseille",
    address: "22 Avenue Pasteur, Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-10942364805",
    name: "Le Trocadero",
    latitude: 43.363873,
    longitude: 5.348539,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-11278135802",
    name: "Le Turf",
    latitude: 43.257623,
    longitude: 5.394252,
    neighborhood: "Littoral Sud",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["has_terrace"]
  }),
  makePlace({
    id: "osm-node-3539250761",
    name: "Le Vargas",
    latitude: 43.31877,
    longitude: 5.367635,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["has_terrace"]
  }),
  makePlace({
    id: "osm-way-68976139",
    name: "Le Venitien",
    latitude: 43.296864,
    longitude: 5.408428,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-2365855778",
    name: "Le ventre de l'architecte",
    latitude: 43.261496,
    longitude: 5.396232,
    neighborhood: "Littoral Sud",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-5903699153",
    name: "Le ventre de la baleine",
    latitude: 43.293654,
    longitude: 5.38368,
    neighborhood: "Cours Julien",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["has_terrace","wheelchair_accessible"]
  }),
  makePlace({
    id: "osm-way-431031862",
    name: "Le verger de l'obelisque",
    latitude: 43.250426,
    longitude: 5.404165,
    neighborhood: "Littoral Sud",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-1870164290",
    name: "Le Verger de Manon",
    latitude: 43.310525,
    longitude: 5.400905,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-11533986373",
    name: "Le vieux foyal - Rhums",
    latitude: 43.295726,
    longitude: 5.382037,
    neighborhood: "Cours Julien",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: ["good_for_groups"]
  }),
  makePlace({
    id: "osm-node-6031903638",
    name: "Le vieux panier",
    latitude: 43.297446,
    longitude: 5.365521,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-13547027730",
    name: "Le vieux pizzaiolo",
    latitude: 43.278565,
    longitude: 5.392468,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-2113050086",
    name: "Le Vilain Petit Canard",
    latitude: 43.297457,
    longitude: 5.379657,
    neighborhood: "Cours Julien",
    address: "Marseille",
    category: "Bar",
    criteria: []
  }),
  makePlace({
    id: "osm-node-990305142",
    name: "Le Vin Sobre",
    latitude: 43.293162,
    longitude: 5.385513,
    neighborhood: "Cours Julien",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: ["good_for_groups"]
  }),
  makePlace({
    id: "osm-way-153539595",
    name: "Le Vin Sobre",
    latitude: 43.24997,
    longitude: 5.403619,
    neighborhood: "Littoral Sud",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-8567884132",
    name: "Le Vin Sobre Prado",
    latitude: 43.269205,
    longitude: 5.388564,
    neighborhood: "Littoral Sud",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: ["good_for_groups"]
  }),
  makePlace({
    id: "osm-node-8047413846",
    name: "Le Vizille",
    latitude: 43.288757,
    longitude: 5.399799,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-7203958270",
    name: "Le Week End",
    latitude: 43.283989,
    longitude: 5.38068,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Bar",
    criteria: []
  }),
  makePlace({
    id: "osm-node-2098586114",
    name: "Le Wich",
    latitude: 43.295929,
    longitude: 5.398899,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["has_terrace","good_for_groups"]
  }),
  makePlace({
    id: "osm-node-3182902879",
    name: "Le Yen Seiiki",
    latitude: 43.28302,
    longitude: 5.384919,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["late_opening"]
  }),
  makePlace({
    id: "osm-node-9929610033",
    name: "Le Zap (Chez Madjib)",
    latitude: 43.295827,
    longitude: 5.381815,
    neighborhood: "Cours Julien",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["good_for_groups"]
  }),
  makePlace({
    id: "osm-node-9668054411",
    name: "Le Zenith",
    latitude: 43.286571,
    longitude: 5.382769,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-7813551885",
    name: "Le Ziguinchor",
    latitude: 43.293687,
    longitude: 5.384645,
    neighborhood: "Cours Julien",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["late_opening"]
  }),
  makePlace({
    id: "osm-node-4352650457",
    name: "Lea Fournee des Chutes Lavie",
    latitude: 43.315053,
    longitude: 5.397985,
    neighborhood: "Belle de Mai",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-way-112834252",
    name: "Leader Price",
    latitude: 43.331714,
    longitude: 5.430816,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-4903008893",
    name: "Leader Price Express",
    latitude: 43.275202,
    longitude: 5.395293,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-12517805301",
    name: "Lemaitre Ivoire",
    latitude: 43.299652,
    longitude: 5.382828,
    neighborhood: "Longchamp",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-6349153658",
    name: "Leon & Banette",
    latitude: 43.289984,
    longitude: 5.398209,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-9216608149",
    name: "Leonidas",
    latitude: 43.269427,
    longitude: 5.388381,
    neighborhood: "Littoral Sud",
    address: "17 Avenue de Mazargues, Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-5193941549",
    name: "Leonidas",
    latitude: 43.296707,
    longitude: 5.373598,
    neighborhood: "Noailles",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-11764530998",
    name: "Leonidas",
    latitude: 43.303957,
    longitude: 5.417545,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-7833199578",
    name: "Les 2 Frangins",
    latitude: 43.282801,
    longitude: 5.360724,
    neighborhood: "Saint-Victor",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["late_opening","good_for_groups"]
  }),
  makePlace({
    id: "osm-node-8601941417",
    name: "Les 3 Bastides",
    latitude: 43.299443,
    longitude: 5.436427,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-way-157698269",
    name: "Les 3 Brasseurs",
    latitude: 43.289498,
    longitude: 5.481912,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-1558637641",
    name: "Les 3 Freres",
    latitude: 43.30243,
    longitude: 5.494059,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-2268236777",
    name: "Les 5 continents",
    latitude: 43.2923,
    longitude: 5.372434,
    neighborhood: "Noailles",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-4502508335",
    name: "Les 9 salopards",
    latitude: 43.294119,
    longitude: 5.383728,
    neighborhood: "Cours Julien",
    address: "2 Rue Crudere, Marseille",
    category: "Bar",
    criteria: []
  }),
  makePlace({
    id: "osm-node-6898227629",
    name: "Les Amis",
    latitude: 43.323067,
    longitude: 5.382704,
    neighborhood: "Belle de Mai",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-1713114304",
    name: "Les Arcenaulx",
    latitude: 43.292464,
    longitude: 5.37313,
    neighborhood: "Noailles",
    address: "25 Cours d'Estienne d'Orves, Marseille",
    category: "Restaurant",
    criteria: ["has_terrace","wheelchair_accessible"]
  }),
  makePlace({
    id: "osm-node-3638692572",
    name: "Les Babines de Mars",
    latitude: 43.302604,
    longitude: 5.392375,
    neighborhood: "Marseille",
    address: "135 Rue Consolat, Marseille",
    category: "Restaurant",
    criteria: ["late_opening"]
  }),
  makePlace({
    id: "osm-node-6416533068",
    name: "Les Bartavelles",
    latitude: 43.301578,
    longitude: 5.510093,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-13123555510",
    name: "Les Bavards",
    latitude: 43.303091,
    longitude: 5.395837,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Bar",
    criteria: []
  }),
  makePlace({
    id: "osm-node-11178669183",
    name: "Les Bavards - Bouillonnerie de l'opera",
    latitude: 43.293281,
    longitude: 5.375247,
    neighborhood: "Noailles",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["has_terrace"]
  }),
  makePlace({
    id: "osm-node-12570989621",
    name: "Les Beaux Mets",
    latitude: 43.234892,
    longitude: 5.413336,
    neighborhood: "Littoral Sud",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["wheelchair_accessible"]
  }),
  makePlace({
    id: "osm-node-6844020825",
    name: "Les BerThoM",
    latitude: 43.292369,
    longitude: 5.372702,
    neighborhood: "Noailles",
    address: "31 Cours d'Estienne d'Orves, Marseille",
    category: "Bar",
    criteria: ["has_terrace","dog_friendly"]
  }),
  makePlace({
    id: "osm-node-2019803238",
    name: "Les bieres",
    latitude: 43.288125,
    longitude: 5.392658,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-6163137643",
    name: "Les bles d'or",
    latitude: 43.304663,
    longitude: 5.376395,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-12623929138",
    name: "Les Bonnes Graines",
    instagram_handle: "les_bonnes_graines",
    latitude: 43.254173,
    longitude: 5.383913,
    neighborhood: "Littoral Sud",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-3383211593",
    name: "Les Bons Fromages",
    latitude: 43.283029,
    longitude: 5.37479,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-13208441669",
    name: "Les Bons Fromages",
    latitude: 43.291054,
    longitude: 5.358978,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-way-114001786",
    name: "Les Bords de Mer",
    latitude: 43.289516,
    longitude: 5.354941,
    neighborhood: "Marseille",
    address: "52 Corniche du President John Fitzgerald Kennedy, Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-4844538728",
    name: "Les Buffets du Vieux-Port",
    latitude: 43.295975,
    longitude: 5.367084,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-5193941550",
    name: "Les Calissons Du Roy Rene",
    latitude: 43.296494,
    longitude: 5.373779,
    neighborhood: "Noailles",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-8731323042",
    name: "Les Caves de l'Abbaye",
    latitude: 43.291261,
    longitude: 5.36979,
    neighborhood: "Saint-Victor",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: ["allows_cb_no_minimum","good_for_groups"]
  }),
  makePlace({
    id: "osm-node-7122176320",
    name: "Les Comptoirs de la Bio",
    latitude: 43.245449,
    longitude: 5.384435,
    neighborhood: "Littoral Sud",
    address: "17 Rue Musso, Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-4690090792",
    name: "Les Comptoirs de la Bio",
    latitude: 43.252121,
    longitude: 5.420969,
    neighborhood: "Littoral Sud",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-1640858762",
    name: "Les Danaides",
    latitude: 43.29966,
    longitude: 5.385723,
    neighborhood: "Longchamp",
    address: "Marseille",
    category: "Cafe",
    criteria: []
  }),
  makePlace({
    id: "osm-node-1493475298",
    name: "Les Dauphins",
    latitude: 43.274853,
    longitude: 5.359869,
    neighborhood: "Malmousque",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-5754154158",
    name: "Les Delices",
    latitude: 43.299283,
    longitude: 5.376331,
    neighborhood: "Marseille",
    address: "1 Rue Nationale, Marseille",
    category: "Commerce alimentaire",
    criteria: ["allows_cb_no_minimum"]
  }),
  makePlace({
    id: "osm-node-4290912679",
    name: "Les Delices d'Adonis",
    latitude: 43.269182,
    longitude: 5.40373,
    neighborhood: "Littoral Sud",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: ["has_terrace"]
  }),
  makePlace({
    id: "osm-node-12864950101",
    name: "Les Delices d'Anis",
    latitude: 43.293253,
    longitude: 5.384141,
    neighborhood: "Cours Julien",
    address: "Rue Bussy l'Indien, Marseille",
    category: "Cafe",
    criteria: []
  }),
  makePlace({
    id: "osm-node-4122998090",
    name: "Les delices de Delia",
    latitude: 43.306623,
    longitude: 5.399778,
    neighborhood: "Belle de Mai",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-12794933123",
    name: "Les delices de l'ouest africain",
    latitude: 43.293293,
    longitude: 5.38209,
    neighborhood: "Cours Julien",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-1209777864",
    name: "Les delices de Menpenti",
    latitude: 43.285437,
    longitude: 5.394778,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-7409995346",
    name: "Les Delices de Montolivet",
    latitude: 43.318264,
    longitude: 5.423676,
    neighborhood: "Marseille",
    address: "383 Avenue de Montolivet, Marseille",
    category: "Commerce alimentaire",
    criteria: ["allows_cb_no_minimum"]
  }),
  makePlace({
    id: "osm-node-3724763715",
    name: "Les delices de Rania",
    latitude: 43.335367,
    longitude: 5.420264,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["vegetarian_options"]
  }),
  makePlace({
    id: "osm-node-3383211597",
    name: "Les Delices de Vauban",
    latitude: 43.283426,
    longitude: 5.375232,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-11792818401",
    name: "Les delices du Prado",
    latitude: 43.273433,
    longitude: 5.391212,
    neighborhood: "Marseille",
    address: "275 Avenue du Prado, Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-3448681480",
    name: "Les Demoiselles du Cinq",
    latitude: 43.294465,
    longitude: 5.380009,
    neighborhood: "Cours Julien",
    address: "Marseille",
    category: "Cafe",
    criteria: []
  }),
  makePlace({
    id: "osm-node-5496328042",
    name: "Les Deux G",
    latitude: 43.264959,
    longitude: 5.391427,
    neighborhood: "Littoral Sud",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-4987095065",
    name: "Les emportes de la Boucle",
    latitude: 43.301124,
    longitude: 5.510096,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["late_opening","good_for_groups"]
  }),
  makePlace({
    id: "osm-node-8601906909",
    name: "Les Favoris",
    latitude: 43.299331,
    longitude: 5.437007,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Cafe",
    criteria: []
  }),
  makePlace({
    id: "osm-node-11190568637",
    name: "Les Fees Traiteur",
    latitude: 43.247355,
    longitude: 5.400885,
    neighborhood: "Littoral Sud",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-11469874969",
    name: "Les frangines",
    latitude: 43.241256,
    longitude: 5.37635,
    neighborhood: "Littoral Sud",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["good_for_groups"]
  }),
  makePlace({
    id: "osm-node-3977863330",
    name: "Les Freres Latil",
    latitude: 43.282926,
    longitude: 5.432807,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-1933729139",
    name: "Les Gagas",
    latitude: 43.295164,
    longitude: 5.391568,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Bar",
    criteria: ["wheelchair_accessible"]
  }),
  makePlace({
    id: "osm-node-5051317223",
    name: "Les Glaciers Marseillais",
    latitude: 43.255331,
    longitude: 5.375999,
    neighborhood: "Littoral Sud",
    address: "Marseille",
    category: "Cafe",
    criteria: ["has_terrace"]
  }),
  makePlace({
    id: "osm-node-8989853723",
    name: "Les Gourmandines du Prado",
    latitude: 43.284815,
    longitude: 5.383974,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Cafe",
    criteria: []
  }),
  makePlace({
    id: "osm-node-9896275987",
    name: "Les Grandes Halles Du Vieux Port",
    latitude: 43.292946,
    longitude: 5.373338,
    neighborhood: "Noailles",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["late_opening","good_for_groups"]
  }),
  makePlace({
    id: "osm-node-2866310390",
    name: "Les Grandes Tables",
    latitude: 43.310277,
    longitude: 5.391124,
    neighborhood: "Belle de Mai",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["has_terrace","late_opening","wheelchair_accessible","vegetarian_options"]
  }),
  makePlace({
    id: "osm-node-8866934212",
    name: "Les halles de la Major",
    latitude: 43.299384,
    longitude: 5.363976,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-6416533065",
    name: "Les Jardins de Julie",
    latitude: 43.301594,
    longitude: 5.50954,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-10086790689",
    name: "Les Jardins du Cloitre de Marseille",
    latitude: 43.335579,
    longitude: 5.42339,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-12299660370",
    name: "Les jardins du midi",
    latitude: 43.299461,
    longitude: 5.397074,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-12201233961",
    name: "Les jardins du soleil",
    latitude: 43.293609,
    longitude: 5.402797,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-1513994387",
    name: "Les lumieres",
    instagram_handle: "leslumieres_marseille",
    latitude: 43.29784,
    longitude: 5.371585,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-5171346281",
    name: "Les Mains Libres",
    latitude: 43.295568,
    longitude: 5.393903,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-6134276470",
    name: "Les Males Heureux",
    latitude: 43.326447,
    longitude: 5.374608,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Bar",
    criteria: []
  }),
  makePlace({
    id: "osm-node-7612960274",
    name: "Les Massilious",
    latitude: 43.288965,
    longitude: 5.36632,
    neighborhood: "Saint-Victor",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-9387998854",
    name: "Les Membres",
    latitude: 43.290079,
    longitude: 5.365958,
    neighborhood: "Saint-Victor",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-2136336640",
    name: "Les Mets des Saintes",
    latitude: 43.291836,
    longitude: 5.372664,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-5310287084",
    name: "Les Mezzes",
    latitude: 43.351734,
    longitude: 5.438739,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["vegetarian_options"]
  }),
  makePlace({
    id: "osm-node-1941587036",
    name: "Les Minots de Republique",
    latitude: 43.300385,
    longitude: 5.371024,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: ["has_terrace"]
  }),
  makePlace({
    id: "osm-node-6417767538",
    name: "Les minots Pizzaiol's",
    latitude: 43.300068,
    longitude: 5.517213,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["good_for_groups"]
  }),
  makePlace({
    id: "osm-way-65447018",
    name: "Les Mouettes",
    latitude: 43.254186,
    longitude: 5.375473,
    neighborhood: "Littoral Sud",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["has_terrace"]
  }),
  makePlace({
    id: "osm-node-3204079820",
    name: "Les Muriers",
    latitude: 43.290137,
    longitude: 5.441117,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-5518464039",
    name: "Les Navettes des Accoules",
    latitude: 43.297121,
    longitude: 5.366263,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-4580393592",
    name: "Les Palangriers du Sud",
    latitude: 43.252921,
    longitude: 5.423076,
    neighborhood: "Littoral Sud",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-2116958048",
    name: "Les Panisses",
    latitude: 43.292563,
    longitude: 5.375737,
    neighborhood: "Noailles",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-4591323696",
    name: "Les Pecheurs",
    latitude: 43.3608,
    longitude: 5.313683,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Bar",
    criteria: ["has_terrace","late_opening"]
  }),
  makePlace({
    id: "osm-node-13806986601",
    name: "Les Petites Cantines (Marseille)",
    latitude: 43.298369,
    longitude: 5.387054,
    neighborhood: "Longchamp",
    address: "36 Rue Barbaroux, Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-7375636181",
    name: "Les Pissenlits - Epicerie Paysanne",
    latitude: 43.290709,
    longitude: 5.366989,
    neighborhood: "Saint-Victor",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-13338270145",
    name: "Les Plaisirs de Carthage",
    latitude: 43.26946,
    longitude: 5.408613,
    neighborhood: "Littoral Sud",
    address: "13 Rue Belle Ombre, Marseille",
    category: "Restaurant",
    criteria: ["late_opening"]
  }),
  makePlace({
    id: "osm-node-2303498408",
    name: "Les plaisirs de l'orient",
    latitude: 43.354642,
    longitude: 5.333239,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-1333689685",
    name: "Les Plaisirs du Pain",
    latitude: 43.249489,
    longitude: 5.396747,
    neighborhood: "Littoral Sud",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: ["has_terrace"]
  }),
  makePlace({
    id: "osm-way-153532731",
    name: "Les Platanes",
    latitude: 43.268464,
    longitude: 5.406011,
    neighborhood: "Littoral Sud",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["has_terrace"]
  }),
  makePlace({
    id: "osm-node-8601906916",
    name: "Les Primeurs du 12em",
    latitude: 43.299104,
    longitude: 5.436494,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-3465061686",
    name: "Les quatre etoiles",
    latitude: 43.366227,
    longitude: 5.341516,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-8957273928",
    name: "Les Recettes de Juliette",
    latitude: 43.361102,
    longitude: 5.312734,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-9192921456",
    name: "Les Reformes",
    instagram_handle: "rooftoplesreformes",
    latitude: 43.29876,
    longitude: 5.383182,
    neighborhood: "Longchamp",
    address: "125 La Canebiere, Marseille",
    category: "Restaurant",
    criteria: ["late_opening"]
  }),
  makePlace({
    id: "osm-node-2032808762",
    name: "Les Regates",
    latitude: 43.244137,
    longitude: 5.371583,
    neighborhood: "Littoral Sud",
    address: "Marseille",
    category: "Bar",
    criteria: []
  }),
  makePlace({
    id: "osm-node-11107322410",
    name: "Les rigoles",
    latitude: 43.302247,
    longitude: 5.390377,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["late_opening"]
  }),
  makePlace({
    id: "osm-node-4901242306",
    name: "Les Routiers",
    latitude: 43.349429,
    longitude: 5.358726,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Cafe",
    criteria: []
  }),
  makePlace({
    id: "osm-node-10558691809",
    name: "Les sables marseilles",
    latitude: 43.298042,
    longitude: 5.365938,
    neighborhood: "Le Panier",
    address: "12 Rue de l'Eveche, Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-3823091147",
    name: "Les Saveurs d'Eden",
    latitude: 43.34399,
    longitude: 5.359341,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-10172226369",
    name: "Les saveurs de Vincent et Louis",
    latitude: 43.240989,
    longitude: 5.376796,
    neighborhood: "Littoral Sud",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: ["wheelchair_accessible","allows_cb_no_minimum"]
  }),
  makePlace({
    id: "osm-node-4082454780",
    name: "Les Saveurs du Falafel",
    latitude: 43.282832,
    longitude: 5.385909,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["late_opening"]
  }),
  makePlace({
    id: "osm-node-4629705575",
    name: "Les Saveurs du Senegal",
    latitude: 43.294709,
    longitude: 5.380267,
    neighborhood: "Cours Julien",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-7362511933",
    name: "Les saveurs provencales",
    latitude: 43.290383,
    longitude: 5.358752,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-2385129962",
    name: "Les Tamaris",
    latitude: 43.228666,
    longitude: 5.349652,
    neighborhood: "Malmousque",
    address: "40 Boulevard de la Calanque de Samena, Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-5817421113",
    name: "Les Templiers",
    latitude: 43.296523,
    longitude: 5.37441,
    neighborhood: "Noailles",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["has_terrace"]
  }),
  makePlace({
    id: "osm-node-1951069418",
    name: "Les terrasses de Saint-Mitre",
    latitude: 43.342391,
    longitude: 5.416221,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-13207723601",
    name: "Les Terrasses du Barjaqueur",
    latitude: 43.292673,
    longitude: 5.372445,
    neighborhood: "Noailles",
    address: "30 Cours Honore d'Estienne d'Orves, Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-1654552780",
    name: "Les Terrasses du Midi",
    latitude: 43.341701,
    longitude: 5.434403,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["has_terrace"]
  }),
  makePlace({
    id: "osm-way-69613746",
    name: "Les Tonnelles",
    latitude: 43.357267,
    longitude: 5.338557,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-6862790012",
    name: "Les Tresors du Liban",
    latitude: 43.262095,
    longitude: 5.40401,
    neighborhood: "Littoral Sud",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["vegetarian_options"]
  }),
  makePlace({
    id: "osm-node-9929575747",
    name: "Les Trois Rois",
    latitude: 43.294053,
    longitude: 5.384747,
    neighborhood: "Cours Julien",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-5519810618",
    name: "Les Trottoirs Marseillais",
    latitude: 43.24316,
    longitude: 5.369841,
    neighborhood: "Littoral Sud",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["has_terrace"]
  }),
  makePlace({
    id: "osm-node-6627597545",
    name: "Les Vins de Beaumont",
    latitude: 43.311867,
    longitude: 5.438322,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-8532266125",
    name: "Les Violettes",
    latitude: 43.2928,
    longitude: 5.375076,
    neighborhood: "Noailles",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["good_for_groups"]
  }),
  makePlace({
    id: "osm-node-12371673778",
    name: "Les Voiles M",
    latitude: 43.255114,
    longitude: 5.375422,
    neighborhood: "Littoral Sud",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-4401243511",
    name: "Leverrier",
    latitude: 43.305987,
    longitude: 5.393084,
    neighborhood: "Belle de Mai",
    address: "Marseille",
    category: "Bar",
    criteria: []
  }),
  makePlace({
    id: "osm-node-2039908823",
    name: "Levon",
    latitude: 43.295603,
    longitude: 5.377006,
    neighborhood: "Noailles",
    address: "Marseille",
    category: "Cafe",
    criteria: ["vegetarian_options"]
  }),
  makePlace({
    id: "osm-node-3440710641",
    name: "LIbanexpress",
    latitude: 43.307516,
    longitude: 5.403022,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["vegetarian_options","good_for_groups"]
  }),
  makePlace({
    id: "osm-node-2822292206",
    name: "Libre Service du Rouet",
    latitude: 43.276735,
    longitude: 5.394273,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-2174798903",
    name: "Lidl",
    latitude: 43.308118,
    longitude: 5.400288,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: ["wheelchair_accessible"]
  }),
  makePlace({
    id: "osm-way-112813016",
    name: "Lidl",
    latitude: 43.344006,
    longitude: 5.420125,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: ["wheelchair_accessible"]
  }),
  makePlace({
    id: "osm-way-154564934",
    name: "Lidl",
    latitude: 43.256679,
    longitude: 5.383043,
    neighborhood: "Littoral Sud",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: ["wheelchair_accessible"]
  }),
  makePlace({
    id: "osm-node-12571123001",
    name: "Lidl",
    latitude: 43.314316,
    longitude: 5.40277,
    neighborhood: "Marseille",
    address: "Avenue de Saint-Just, Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-1725856794",
    name: "Lidl",
    latitude: 43.324621,
    longitude: 5.443418,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-1886609583",
    name: "Lidl",
    latitude: 43.291734,
    longitude: 5.372311,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-2844321781",
    name: "Lidl",
    latitude: 43.291045,
    longitude: 5.399507,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-4169931139",
    name: "Lidl",
    latitude: 43.281826,
    longitude: 5.40449,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-4961327778",
    name: "Lidl",
    latitude: 43.261298,
    longitude: 5.375273,
    neighborhood: "Littoral Sud",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-5669475533",
    name: "Lidl",
    latitude: 43.282105,
    longitude: 5.42344,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-7306650106",
    name: "Lidl",
    latitude: 43.326957,
    longitude: 5.365685,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-10963972738",
    name: "Lidl",
    latitude: 43.283038,
    longitude: 5.38861,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-12074328142",
    name: "Lidl",
    latitude: 43.298429,
    longitude: 5.375635,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-way-94922988",
    name: "Lidl",
    latitude: 43.295459,
    longitude: 5.423132,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-way-154411412",
    name: "Lidl",
    latitude: 43.245532,
    longitude: 5.374096,
    neighborhood: "Littoral Sud",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-way-540163688",
    name: "Lidl",
    latitude: 43.300504,
    longitude: 5.476045,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-12800751930",
    name: "Lido Saigon",
    latitude: 43.263436,
    longitude: 5.374169,
    neighborhood: "Littoral Sud",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["vegetarian_options"]
  }),
  makePlace({
    id: "osm-node-4315409674",
    name: "Lilin",
    latitude: 43.29259,
    longitude: 5.375362,
    neighborhood: "Noailles",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["has_terrace","wheelchair_accessible"]
  }),
  makePlace({
    id: "osm-node-11835036569",
    name: "Lima Lemon",
    latitude: 43.285253,
    longitude: 5.382556,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-12288360128",
    name: "Limmat",
    latitude: 43.29356,
    longitude: 5.382685,
    neighborhood: "Cours Julien",
    address: "41 Rue Jean-Baptiste Estelle, Marseille",
    category: "Restaurant",
    criteria: ["late_opening","vegetarian_options","takes_reservations"]
  }),
  makePlace({
    id: "osm-node-11332898169",
    name: "LIMON",
    instagram_handle: "limon.sandwicherie",
    latitude: 43.298309,
    longitude: 5.383612,
    neighborhood: "Longchamp",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["good_for_groups"]
  }),
  makePlace({
    id: "osm-node-1236294472",
    name: "Lina",
    latitude: 43.294998,
    longitude: 5.37986,
    neighborhood: "Cours Julien",
    address: "11 Rue Rouviere, Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-11049356926",
    name: "Lindt",
    latitude: 43.30679,
    longitude: 5.365077,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: ["wheelchair_accessible"]
  }),
  makePlace({
    id: "osm-node-11178658069",
    name: "Lion bonjour",
    latitude: 43.293225,
    longitude: 5.375267,
    neighborhood: "Noailles",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["vegetarian_options"]
  }),
  makePlace({
    id: "osm-node-11190566256",
    name: "Lisci",
    latitude: 43.246757,
    longitude: 5.402184,
    neighborhood: "Littoral Sud",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-4193166551",
    name: "Little Asia",
    latitude: 43.297917,
    longitude: 5.379622,
    neighborhood: "Cours Julien",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-13667924001",
    name: "Little Coffee",
    latitude: 43.288619,
    longitude: 5.358373,
    neighborhood: "Marseille",
    address: "2 Rue Capitaine Dessemond, Marseille",
    category: "Cafe",
    criteria: []
  }),
  makePlace({
    id: "osm-node-3647443697",
    name: "Little Discount",
    latitude: 43.309199,
    longitude: 5.372942,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-12117274802",
    name: "Little Market",
    latitude: 43.295567,
    longitude: 5.385571,
    neighborhood: "Cours Julien",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-1833949654",
    name: "Little Market du 9eme",
    latitude: 43.265121,
    longitude: 5.409162,
    neighborhood: "Littoral Sud",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-10968685754",
    name: "Little Poz",
    latitude: 43.309186,
    longitude: 5.401912,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Cafe",
    criteria: []
  }),
  makePlace({
    id: "osm-node-4915102481",
    name: "Little Pub",
    latitude: 43.287265,
    longitude: 5.391674,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Bar",
    criteria: ["has_terrace"]
  }),
  makePlace({
    id: "osm-node-2353581178",
    name: "Little Temple Bar",
    latitude: 43.293394,
    longitude: 5.37243,
    neighborhood: "Noailles",
    address: "Marseille",
    category: "Bar",
    criteria: []
  }),
  makePlace({
    id: "osm-node-12806290102",
    name: "Livingston",
    latitude: 43.294299,
    longitude: 5.384036,
    neighborhood: "Cours Julien",
    address: "5 Rue Crudere, Marseille",
    category: "Restaurant",
    criteria: ["late_opening"]
  }),
  makePlace({
    id: "osm-node-13063138847",
    name: "Loc-Nam",
    latitude: 43.295969,
    longitude: 5.381088,
    neighborhood: "Cours Julien",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: ["allows_cb_no_minimum"]
  }),
  makePlace({
    id: "osm-node-5817421535",
    name: "Locarno",
    latitude: 43.296443,
    longitude: 5.371351,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["has_terrace","good_for_groups"]
  }),
  makePlace({
    id: "osm-node-9571635719",
    name: "Loch Ness",
    latitude: 43.29386,
    longitude: 5.373994,
    neighborhood: "Noailles",
    address: "Marseille",
    category: "Bar",
    criteria: ["has_terrace"]
  }),
  makePlace({
    id: "osm-node-1338679796",
    name: "Lodi C",
    instagram_handle: "cavelodi.c",
    latitude: 43.288326,
    longitude: 5.388317,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Bar",
    criteria: ["has_wifi","late_opening"]
  }),
  makePlace({
    id: "osm-node-9238586579",
    name: "Lodi Local, epicerie paysanne",
    latitude: 43.289712,
    longitude: 5.387082,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-7925474613",
    name: "Long chau",
    latitude: 43.287456,
    longitude: 5.465662,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["vegetarian_options"]
  }),
  makePlace({
    id: "osm-node-4170982191",
    name: "Longchamp Palace",
    latitude: 43.301054,
    longitude: 5.387876,
    neighborhood: "Longchamp",
    address: "Marseille",
    category: "Bar",
    criteria: []
  }),
  makePlace({
    id: "osm-node-4475981239",
    name: "Longchamp Pizza",
    latitude: 43.301194,
    longitude: 5.388205,
    neighborhood: "Longchamp",
    address: "28 Boulevard Longchamp, Marseille",
    category: "Restaurant",
    criteria: ["late_opening","vegetarian_options","good_for_groups"]
  }),
  makePlace({
    id: "osm-node-2036135545",
    name: "Lorene Millet - Cave a thes",
    latitude: 43.292773,
    longitude: 5.385499,
    neighborhood: "Cours Julien",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: ["wheelchair_accessible"]
  }),
  makePlace({
    id: "osm-node-2026369726",
    name: "Lotus Express",
    latitude: 43.294356,
    longitude: 5.385172,
    neighborhood: "Cours Julien",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-3790471136",
    name: "Lou Chambri",
    latitude: 43.35986,
    longitude: 5.316296,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-10135820763",
    name: "Lou Frieu",
    latitude: 43.278966,
    longitude: 5.304259,
    neighborhood: "Malmousque",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-way-69633433",
    name: "Lou Goustado de l'Estaco",
    latitude: 43.360175,
    longitude: 5.314901,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["good_for_groups"]
  }),
  makePlace({
    id: "osm-node-7829025645",
    name: "Lou Granjoun",
    latitude: 43.295939,
    longitude: 5.397721,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-1871316004",
    name: "Lou Jardinai",
    latitude: 43.29612,
    longitude: 5.390558,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-1023802366",
    name: "Lou Spinai",
    latitude: 43.343735,
    longitude: 5.416882,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-6779257020",
    name: "Louis",
    latitude: 43.310794,
    longitude: 5.368018,
    neighborhood: "Le Panier",
    address: "52 quai du Lazaret, Marseille",
    category: "Bar",
    criteria: ["has_terrace","wheelchair_accessible"]
  }),
  makePlace({
    id: "osm-node-7813803785",
    name: "Loulou",
    latitude: 43.28303,
    longitude: 5.350249,
    neighborhood: "Malmousque",
    address: "Marseille",
    category: "Cafe",
    criteria: []
  }),
  makePlace({
    id: "osm-node-12788248405",
    name: "Loulou Monsieur Glace",
    latitude: 43.275612,
    longitude: 5.359729,
    neighborhood: "Malmousque",
    address: "313 Corniche du President John Fitzgerald Kennedy, Marseille",
    category: "Cafe",
    criteria: []
  }),
  makePlace({
    id: "osm-node-13965785071",
    name: "Love Dessert",
    latitude: 43.328633,
    longitude: 5.426126,
    neighborhood: "Marseille",
    address: "155 Avenue de La Rose, Marseille",
    category: "Restaurant",
    criteria: ["late_opening"]
  }),
  makePlace({
    id: "osm-node-2841931136",
    name: "Love sushi",
    latitude: 43.246456,
    longitude: 5.402787,
    neighborhood: "Littoral Sud",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-1551977048",
    name: "Luciole",
    latitude: 43.292898,
    longitude: 5.377736,
    neighborhood: "Noailles",
    address: "15 Rue Venture, Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-5173620323",
    name: "Ludivine",
    latitude: 43.288527,
    longitude: 5.373016,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: ["has_terrace"]
  }),
  makePlace({
    id: "osm-node-2394376871",
    name: "Lulo Bar",
    latitude: 43.293608,
    longitude: 5.382892,
    neighborhood: "Cours Julien",
    address: "Marseille",
    category: "Bar",
    criteria: ["late_opening"]
  }),
  makePlace({
    id: "osm-node-13105756029",
    name: "Lunicco",
    latitude: 43.306235,
    longitude: 5.36515,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["good_for_groups"]
  }),
  makePlace({
    id: "osm-node-10870012805",
    name: "Lynn Dalaga - mode et restauration",
    latitude: 43.231997,
    longitude: 5.355249,
    neighborhood: "Malmousque",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-3442821398",
    name: "Lyon Pizza",
    latitude: 43.303445,
    longitude: 5.404321,
    neighborhood: "Marseille",
    address: "Boulevard de la Blancarde, Marseille",
    category: "Restaurant",
    criteria: ["good_for_groups"]
  }),
  makePlace({
    id: "osm-node-11378215069",
    name: "Maazool Mohamed Epicerie",
    latitude: 43.282743,
    longitude: 5.374061,
    neighborhood: "Marseille",
    address: "106 Boulevard Vauban, Marseille",
    category: "Commerce alimentaire",
    criteria: ["late_opening"]
  }),
  makePlace({
    id: "osm-node-13965785067",
    name: "MAC'ADDICT",
    latitude: 43.328777,
    longitude: 5.426475,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-way-67700439",
    name: "Made in Marseille",
    latitude: 43.298201,
    longitude: 5.383413,
    neighborhood: "Longchamp",
    address: "128 La Canebiere, Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-5193941533",
    name: "Made in Marseille",
    latitude: 43.297071,
    longitude: 5.373302,
    neighborhood: "Noailles",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-11727739983",
    name: "Made In Marseille",
    latitude: 43.324526,
    longitude: 5.365252,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-7997257335",
    name: "Mademoiselle Fifi",
    latitude: 43.279789,
    longitude: 5.412469,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-2103604495",
    name: "Madie Les Galinettes",
    latitude: 43.295983,
    longitude: 5.367552,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-9514377197",
    name: "Maga",
    latitude: 43.285051,
    longitude: 5.384649,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-8974809017",
    name: "Magnolia",
    latitude: 43.294533,
    longitude: 5.385536,
    neighborhood: "Cours Julien",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-10798056955",
    name: "Maison Bao",
    latitude: 43.29008,
    longitude: 5.382115,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["late_opening"]
  }),
  makePlace({
    id: "osm-node-9510861151",
    name: "Maison Boheme",
    latitude: 43.284346,
    longitude: 5.383096,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-6332080239",
    name: "Maison Buon",
    latitude: 43.291483,
    longitude: 5.373851,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-2590099746",
    name: "Maison Campo",
    latitude: 43.2764,
    longitude: 5.394372,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["has_terrace"]
  }),
  makePlace({
    id: "osm-node-2608216158",
    name: "Maison Cesar",
    latitude: 43.287234,
    longitude: 5.38932,
    neighborhood: "Marseille",
    address: "Boulevard Baille, Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-13738563110",
    name: "Maison Cesar",
    latitude: 43.288583,
    longitude: 5.461332,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-5552062259",
    name: "Maison Charlie",
    latitude: 43.296952,
    longitude: 5.367395,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Cafe",
    criteria: ["has_terrace","vegetarian_options"]
  }),
  makePlace({
    id: "osm-node-9976592151",
    name: "Maison des Nines",
    latitude: 43.29576,
    longitude: 5.378959,
    neighborhood: "Cours Julien",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-10968685766",
    name: "Maison Gourmande",
    latitude: 43.309973,
    longitude: 5.400568,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-12749993601",
    name: "Maison Hubert",
    latitude: 43.299626,
    longitude: 5.398028,
    neighborhood: "Marseille",
    address: "Rue des Orgues, Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-13049770803",
    name: "Maison Journo",
    latitude: 43.295294,
    longitude: 5.376419,
    neighborhood: "Noailles",
    address: "28 Rue Pavillon, Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-8672565295",
    name: "Maison Leray",
    latitude: 43.293833,
    longitude: 5.378936,
    neighborhood: "Cours Julien",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-11428887669",
    name: "Maison M&R",
    latitude: 43.290202,
    longitude: 5.356542,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-6416556784",
    name: "Maison Marcel",
    latitude: 43.294054,
    longitude: 5.374433,
    neighborhood: "Noailles",
    address: "Marseille",
    category: "Cafe",
    criteria: []
  }),
  makePlace({
    id: "osm-node-7153065059",
    name: "Maison Mistre",
    latitude: 43.282991,
    longitude: 5.37475,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-9507819479",
    name: "Maison Payany",
    latitude: 43.287876,
    longitude: 5.376739,
    neighborhood: "Marseille",
    address: "72 Rue Breteuil, Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-9796312829",
    name: "Maison Saint Honore",
    latitude: 43.283673,
    longitude: 5.385433,
    neighborhood: "Marseille",
    address: "41 Avenue du Prado, Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-8659096796",
    name: "Maison Saint-Honore",
    latitude: 43.286174,
    longitude: 5.362979,
    neighborhood: "Saint-Victor",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-12919144415",
    name: "Maison sucree salee",
    latitude: 43.296219,
    longitude: 5.400444,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-7621890273",
    name: "Maison Vauban",
    latitude: 43.282394,
    longitude: 5.374081,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-7415178861",
    name: "Maison Zemour",
    latitude: 43.286669,
    longitude: 5.385542,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-3852182306",
    name: "Mak Burger",
    latitude: 43.327991,
    longitude: 5.434172,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["good_for_groups"]
  }),
  makePlace({
    id: "osm-node-13725774101",
    name: "Makhlouf",
    latitude: 43.288919,
    longitude: 5.378764,
    neighborhood: "Marseille",
    address: "109 Rue Paradis, Marseille",
    category: "Restaurant",
    criteria: ["vegetarian_options","good_for_groups"]
  }),
  makePlace({
    id: "osm-node-2866851703",
    name: "Maloca",
    latitude: 43.31136,
    longitude: 5.386982,
    neighborhood: "Belle de Mai",
    address: "47 Rue Fortune Jourdan, Marseille",
    category: "Restaurant",
    criteria: ["wheelchair_accessible"]
  }),
  makePlace({
    id: "osm-node-9929575758",
    name: "MALT Cave a Bieres",
    latitude: 43.294646,
    longitude: 5.384855,
    neighborhood: "Cours Julien",
    address: "23 Rue des Trois Mages, Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-8698400660",
    name: "Mama Ghana",
    latitude: 43.294818,
    longitude: 5.381462,
    neighborhood: "Cours Julien",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-13162985093",
    name: "Mama Nelly Bistro",
    latitude: 43.302927,
    longitude: 5.368491,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Cafe",
    criteria: []
  }),
  makePlace({
    id: "osm-node-7096089401",
    name: "Maman Shelter",
    latitude: 43.290475,
    longitude: 5.389006,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-6473742739",
    name: "Mame Diarra",
    latitude: 43.295914,
    longitude: 5.381038,
    neighborhood: "Cours Julien",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["late_opening"]
  }),
  makePlace({
    id: "osm-node-11932700484",
    name: "Mamily",
    latitude: 43.297814,
    longitude: 5.373872,
    neighborhood: "Noailles",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["has_terrace","good_for_groups"]
  }),
  makePlace({
    id: "osm-node-7362511936",
    name: "Mando",
    latitude: 43.290175,
    longitude: 5.359139,
    neighborhood: "Marseille",
    address: "32 Avenue Pasteur, Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-11521324202",
    name: "Mando",
    latitude: 43.270717,
    longitude: 5.391865,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-10942364108",
    name: "Mangos",
    latitude: 43.363723,
    longitude: 5.347512,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["good_for_groups"]
  }),
  makePlace({
    id: "osm-node-3106616842",
    name: "Mani.mani",
    latitude: 43.293874,
    longitude: 5.375298,
    neighborhood: "Noailles",
    address: "Marseille",
    category: "Bar",
    criteria: []
  }),
  makePlace({
    id: "osm-node-7833279034",
    name: "Manicotti",
    latitude: 43.268183,
    longitude: 5.419592,
    neighborhood: "Littoral Sud",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-4502522895",
    name: "Manifesten",
    latitude: 43.296825,
    longitude: 5.385523,
    neighborhood: "Cours Julien",
    address: "Marseille",
    category: "Cafe",
    criteria: []
  }),
  makePlace({
    id: "osm-node-5815425648",
    name: "Manneken-Pis",
    latitude: 43.290394,
    longitude: 5.368932,
    neighborhood: "Saint-Victor",
    address: "Marseille",
    category: "Bar",
    criteria: ["late_opening"]
  }),
  makePlace({
    id: "osm-way-67717790",
    name: "Manufactory",
    latitude: 43.296936,
    longitude: 5.369194,
    neighborhood: "Le Panier",
    address: "4bis Rue du Lacydon, Marseille",
    category: "Cafe",
    criteria: ["has_terrace","has_wifi","late_opening","vegetarian_options","laptop_friendly"]
  }),
  makePlace({
    id: "osm-node-11665782741",
    name: "Manureva",
    latitude: 43.281163,
    longitude: 5.388297,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["has_terrace"]
  }),
  makePlace({
    id: "osm-node-5809254855",
    name: "Manureva",
    latitude: 43.289941,
    longitude: 5.479493,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-6691863718",
    name: "Maracana pizzeria",
    latitude: 43.321889,
    longitude: 5.380624,
    neighborhood: "Longchamp",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-8904672715",
    name: "Marafiki",
    latitude: 43.298537,
    longitude: 5.367702,
    neighborhood: "Le Panier",
    address: "34 Rue du Refuge, Marseille",
    category: "Restaurant",
    criteria: ["late_opening"]
  }),
  makePlace({
    id: "osm-node-2117029215",
    name: "Marcello",
    latitude: 43.292616,
    longitude: 5.372097,
    neighborhood: "Noailles",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-8763075061",
    name: "Marchands de legume/fruit du Merlan Sainte-Marthe",
    latitude: 43.330994,
    longitude: 5.404416,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-1941650761",
    name: "Marengo",
    latitude: 43.293453,
    longitude: 5.374141,
    neighborhood: "Noailles",
    address: "Marseille",
    category: "Bar",
    criteria: []
  }),
  makePlace({
    id: "osm-node-1883487962",
    name: "Marengo Bistroquet",
    latitude: 43.291151,
    longitude: 5.384106,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-6328537900",
    name: "Marie Blachere",
    latitude: 43.295966,
    longitude: 5.422919,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-7343837559",
    name: "Marie Blachere",
    latitude: 43.343522,
    longitude: 5.447665,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-11190566844",
    name: "Marie Rebuffat",
    latitude: 43.247095,
    longitude: 5.401465,
    neighborhood: "Littoral Sud",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-6766431732",
    name: "Marinelli",
    latitude: 43.244336,
    longitude: 5.370344,
    neighborhood: "Littoral Sud",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["has_terrace"]
  }),
  makePlace({
    id: "osm-node-1653249119",
    name: "Mariposas",
    latitude: 43.292881,
    longitude: 5.38334,
    neighborhood: "Cours Julien",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["has_terrace","late_opening","wheelchair_accessible"]
  }),
  makePlace({
    id: "osm-node-8475740448",
    name: "Mariwal",
    latitude: 43.29724,
    longitude: 5.382341,
    neighborhood: "Cours Julien",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: ["late_opening"]
  }),
  makePlace({
    id: "osm-node-9233271099",
    name: "Market",
    latitude: 43.281315,
    longitude: 5.383133,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-3204081220",
    name: "Market City",
    latitude: 43.285633,
    longitude: 5.442823,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-way-153571443",
    name: "Market Du Redon",
    latitude: 43.247177,
    longitude: 5.424146,
    neighborhood: "Littoral Sud",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: ["late_opening","wheelchair_accessible","allows_cb_no_minimum"]
  }),
  makePlace({
    id: "osm-node-12677245320",
    name: "Market Express",
    latitude: 43.288791,
    longitude: 5.360889,
    neighborhood: "Saint-Victor",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-9051724726",
    name: "Market Gouffe",
    latitude: 43.285201,
    longitude: 5.391489,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-6885354827",
    name: "Market Tita",
    latitude: 43.286501,
    longitude: 5.377463,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-6145441225",
    name: "Marmara",
    latitude: 43.299899,
    longitude: 5.38584,
    neighborhood: "Longchamp",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-991811825",
    name: "Marmarita",
    latitude: 43.293686,
    longitude: 5.387041,
    neighborhood: "Cours Julien",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-6575039791",
    name: "Marmites & Vapeur",
    latitude: 43.292901,
    longitude: 5.372638,
    neighborhood: "Noailles",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-13393440901",
    name: "Marokko Street",
    latitude: 43.290099,
    longitude: 5.382085,
    neighborhood: "Marseille",
    address: "21 Rue d'Italie, Marseille",
    category: "Restaurant",
    criteria: ["late_opening"]
  }),
  makePlace({
    id: "osm-way-158153944",
    name: "Marou Traiteur",
    latitude: 43.304166,
    longitude: 5.417501,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-4882142431",
    name: "Marrou",
    latitude: 43.270463,
    longitude: 5.387485,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["good_for_groups"]
  }),
  makePlace({
    id: "osm-node-2019893924",
    name: "Marrou",
    latitude: 43.285888,
    longitude: 5.384423,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-3106616843",
    name: "Marrou",
    latitude: 43.29399,
    longitude: 5.37576,
    neighborhood: "Noailles",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-2019893925",
    name: "Marrou traiteur",
    latitude: 43.285978,
    longitude: 5.384566,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-13512692139",
    name: "Marseille bb",
    latitude: 43.301559,
    longitude: 5.375825,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-9503496156",
    name: "Marseille en face",
    latitude: 43.279758,
    longitude: 5.32614,
    neighborhood: "Malmousque",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-2019893926",
    name: "Massena",
    latitude: 43.285737,
    longitude: 5.384346,
    neighborhood: "Marseille",
    address: "1 Avenue Jules Cantini, Marseille",
    category: "Restaurant",
    criteria: ["has_terrace","late_opening","wheelchair_accessible","vegetarian_options","allows_cb_no_minimum"]
  }),
  makePlace({
    id: "osm-node-6078594799",
    name: "Massena di Napoli",
    latitude: 43.285654,
    longitude: 5.384503,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["good_for_groups"]
  }),
  makePlace({
    id: "osm-node-9925152614",
    name: "Massilia",
    latitude: 43.299596,
    longitude: 5.369483,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Cafe",
    criteria: ["has_terrace"]
  }),
  makePlace({
    id: "osm-node-7934538580",
    name: "Massilia Cafe",
    latitude: 43.296881,
    longitude: 5.374126,
    neighborhood: "Noailles",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["has_terrace"]
  }),
  makePlace({
    id: "osm-node-2059612344",
    name: "Massilia Market",
    latitude: 43.29393,
    longitude: 5.385472,
    neighborhood: "Cours Julien",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-6627597551",
    name: "Massis",
    latitude: 43.308382,
    longitude: 5.437174,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-8176522569",
    name: "Master Cafe",
    latitude: 43.292999,
    longitude: 5.452545,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-13744032253",
    name: "Master K",
    instagram_handle: "masterk_marseille",
    latitude: 43.293968,
    longitude: 5.400592,
    neighborhood: "Marseille",
    address: "39 Boulevard Jeanne d'Arc, Marseille",
    category: "Restaurant",
    criteria: ["good_for_groups"]
  }),
  makePlace({
    id: "osm-node-13928271701",
    name: "Mat'cha - Matcha cafe et Bubble tea",
    latitude: 43.291989,
    longitude: 5.383272,
    neighborhood: "Marseille",
    address: "20 Boulevard Theodore Thurner, Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-2379123248",
    name: "Matza",
    latitude: 43.292086,
    longitude: 5.384343,
    neighborhood: "Cours Julien",
    address: "13 Place Notre-Dame-du-Mont, Marseille",
    category: "Restaurant",
    criteria: ["late_opening"]
  }),
  makePlace({
    id: "osm-node-2137516953",
    name: "Maurice",
    latitude: 43.289157,
    longitude: 5.387292,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["late_opening"]
  }),
  makePlace({
    id: "osm-node-11297513832",
    name: "Mauvaise Herbe",
    latitude: 43.294442,
    longitude: 5.376941,
    neighborhood: "Noailles",
    address: "6 Rue Haxo, Marseille",
    category: "Restaurant",
    criteria: ["vegetarian_options"]
  }),
  makePlace({
    id: "osm-node-12229129494",
    name: "mavrommatis",
    latitude: 43.270472,
    longitude: 5.392976,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-7783426876",
    name: "Mayrig",
    latitude: 43.307653,
    longitude: 5.435406,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-9516532282",
    name: "Mazal Cash",
    latitude: 43.28709,
    longitude: 5.382403,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-11938995336",
    name: "Mc Donald's",
    latitude: 43.282308,
    longitude: 5.385378,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["good_for_groups"]
  }),
  makePlace({
    id: "osm-node-469178354",
    name: "McDonald's",
    latitude: 43.249277,
    longitude: 5.389593,
    neighborhood: "Littoral Sud",
    address: "112 Avenue de Hambourg, Marseille",
    category: "Restaurant",
    criteria: ["late_opening","good_for_groups"]
  }),
  makePlace({
    id: "osm-node-2039908808",
    name: "McDonald's",
    latitude: 43.291754,
    longitude: 5.379688,
    neighborhood: "Marseille",
    address: "Place Felix Baret, Marseille",
    category: "Restaurant",
    criteria: ["late_opening","good_for_groups"]
  }),
  makePlace({
    id: "osm-node-384746116",
    name: "McDonald's",
    latitude: 43.2977,
    longitude: 5.380842,
    neighborhood: "Cours Julien",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["late_opening","good_for_groups"]
  }),
  makePlace({
    id: "osm-node-1594599322",
    name: "McDonald's",
    latitude: 43.303228,
    longitude: 5.40119,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["has_terrace","good_for_groups"]
  }),
  makePlace({
    id: "osm-node-1813995048",
    name: "McDonald's",
    latitude: 43.286829,
    longitude: 5.383408,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["late_opening","wheelchair_accessible","good_for_groups"]
  }),
  makePlace({
    id: "osm-node-1816054011",
    name: "McDonald's",
    latitude: 43.272301,
    longitude: 5.400888,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["late_opening","good_for_groups"]
  }),
  makePlace({
    id: "osm-node-1876120450",
    name: "McDonald's",
    latitude: 43.295499,
    longitude: 5.400015,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["wheelchair_accessible","good_for_groups"]
  }),
  makePlace({
    id: "osm-node-1941648135",
    name: "McDonald's",
    latitude: 43.29412,
    longitude: 5.37472,
    neighborhood: "Noailles",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["wheelchair_accessible","good_for_groups"]
  }),
  makePlace({
    id: "osm-node-2259969914",
    name: "McDonald's",
    latitude: 43.30441,
    longitude: 5.367762,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["late_opening","good_for_groups"]
  }),
  makePlace({
    id: "osm-node-3016427500",
    name: "McDonald's",
    latitude: 43.29552,
    longitude: 5.4427,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["late_opening","good_for_groups"]
  }),
  makePlace({
    id: "osm-node-3634375256",
    name: "McDonald's",
    latitude: 43.363832,
    longitude: 5.350278,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["good_for_groups"]
  }),
  makePlace({
    id: "osm-node-3636748076",
    name: "McDonald's",
    latitude: 43.293592,
    longitude: 5.37265,
    neighborhood: "Noailles",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["has_terrace","good_for_groups"]
  }),
  makePlace({
    id: "osm-way-312639895",
    name: "McDonald's",
    latitude: 43.350957,
    longitude: 5.341776,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["late_opening","good_for_groups"]
  }),
  makePlace({
    id: "osm-way-157774797",
    name: "McDonald's La Valentine",
    latitude: 43.294478,
    longitude: 5.481662,
    neighborhood: "Marseille",
    address: "Avenue De Chardigny, Marseille",
    category: "Restaurant",
    criteria: ["good_for_groups"]
  }),
  makePlace({
    id: "osm-node-5182271285",
    name: "MD",
    latitude: 43.289007,
    longitude: 5.460269,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-5182344514",
    name: "MD",
    latitude: 43.284392,
    longitude: 5.435306,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-11939000925",
    name: "MD",
    latitude: 43.282235,
    longitude: 5.38542,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-9929575740",
    name: "Medellin",
    latitude: 43.293527,
    longitude: 5.385679,
    neighborhood: "Cours Julien",
    address: "Marseille",
    category: "Cafe",
    criteria: []
  }),
  makePlace({
    id: "osm-node-11534007657",
    name: "Melan Grill",
    latitude: 43.296749,
    longitude: 5.377932,
    neighborhood: "Noailles",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["has_terrace","vegetarian_options"]
  }),
  makePlace({
    id: "osm-way-154595357",
    name: "Melekh A Pizza",
    latitude: 43.276964,
    longitude: 5.416583,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-7410088304",
    name: "Melina",
    latitude: 43.321485,
    longitude: 5.411401,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-2019803233",
    name: "Melina Shop",
    latitude: 43.288149,
    longitude: 5.392739,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: ["allows_cb_no_minimum"]
  }),
  makePlace({
    id: "osm-node-8546939210",
    name: "Mely Market",
    latitude: 43.335309,
    longitude: 5.450855,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: ["late_opening"]
  }),
  makePlace({
    id: "osm-node-4477293478",
    name: "Meo Midnight",
    latitude: 43.293526,
    longitude: 5.381742,
    neighborhood: "Cours Julien",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["has_terrace"]
  }),
  makePlace({
    id: "osm-node-12791268002",
    name: "Mercato by winesucker",
    instagram_handle: "mercato_winesucker",
    latitude: 43.291279,
    longitude: 5.387042,
    neighborhood: "Marseille",
    address: "36 Rue de La Loubiere, Marseille",
    category: "Restaurant",
    criteria: ["late_opening"]
  }),
  makePlace({
    id: "osm-node-11228719203",
    name: "Merlin",
    latitude: 43.296434,
    longitude: 5.386834,
    neighborhood: "Cours Julien",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-4405959300",
    name: "Mesopotamie Restaurant",
    latitude: 43.299362,
    longitude: 5.381497,
    neighborhood: "Longchamp",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-9442215707",
    name: "Mevlana Restaurant",
    latitude: 43.355939,
    longitude: 5.35685,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-11576807769",
    name: "Mezzo Di Pasta",
    latitude: 43.295498,
    longitude: 5.377617,
    neighborhood: "Noailles",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["has_terrace","wheelchair_accessible","allows_cb_no_minimum","good_for_groups"]
  }),
  makePlace({
    id: "osm-node-11576795771",
    name: "Mezzo Di Pasta Marseille La Valentine",
    latitude: 43.294052,
    longitude: 5.478013,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["wheelchair_accessible","allows_cb_no_minimum","good_for_groups"]
  }),
  makePlace({
    id: "osm-node-11389521740",
    name: "Mia Nonna",
    latitude: 43.284995,
    longitude: 5.390664,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-8664691758",
    name: "Miam Pizza",
    latitude: 43.299104,
    longitude: 5.431123,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["good_for_groups"]
  }),
  makePlace({
    id: "osm-node-4591323699",
    name: "Michelotti",
    latitude: 43.360698,
    longitude: 5.313986,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-3621987002",
    name: "Miches et Baguettes",
    instagram_handle: "miches_et_baguettes",
    latitude: 43.288666,
    longitude: 5.360138,
    neighborhood: "Saint-Victor",
    address: "77 Avenue de la Corse, Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-7058016104",
    name: "Mido",
    latitude: 43.293857,
    longitude: 5.382971,
    neighborhood: "Cours Julien",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["has_terrace","wheelchair_accessible","good_for_groups"]
  }),
  makePlace({
    id: "osm-node-13051911101",
    name: "Mimas",
    latitude: 43.306891,
    longitude: 5.399927,
    neighborhood: "Belle de Mai",
    address: "3 Place Pierre Brossolette, Marseille",
    category: "Restaurant",
    criteria: ["late_opening"]
  }),
  makePlace({
    id: "osm-node-10980864705",
    name: "Mina",
    latitude: 43.294586,
    longitude: 5.387098,
    neighborhood: "Cours Julien",
    address: "45 Place Jean Jaures, Marseille",
    category: "Bar",
    criteria: ["late_opening"]
  }),
  makePlace({
    id: "osm-node-2375832167",
    name: "Mini Market",
    latitude: 43.292659,
    longitude: 5.383298,
    neighborhood: "Cours Julien",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-5051252223",
    name: "Minoofi Bakery",
    latitude: 43.289101,
    longitude: 5.378501,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Cafe",
    criteria: []
  }),
  makePlace({
    id: "osm-node-11932545458",
    name: "Minots",
    latitude: 43.296403,
    longitude: 5.370959,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["has_terrace"]
  }),
  makePlace({
    id: "osm-node-5183645887",
    name: "Mio Panino",
    latitude: 43.298944,
    longitude: 5.372172,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["has_terrace","late_opening","vegetarian_options","good_for_groups"]
  }),
  makePlace({
    id: "osm-node-12140109810",
    name: "Mir Boulangerie",
    latitude: 43.301021,
    longitude: 5.382134,
    neighborhood: "Longchamp",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-12140105850",
    name: "Mir Market",
    latitude: 43.30103,
    longitude: 5.382226,
    neighborhood: "Longchamp",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-13893541501",
    name: "Miss Viande",
    latitude: 43.295979,
    longitude: 5.379448,
    neighborhood: "Cours Julien",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-way-365094985",
    name: "Mister Jo",
    latitude: 43.33664,
    longitude: 5.410214,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["good_for_groups"]
  }),
  makePlace({
    id: "osm-node-6766431731",
    name: "Mister Kebab",
    latitude: 43.245432,
    longitude: 5.373293,
    neighborhood: "Littoral Sud",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["late_opening","good_for_groups"]
  }),
  makePlace({
    id: "osm-node-2591460033",
    name: "Mk's African kitchen",
    latitude: 43.296087,
    longitude: 5.395939,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["late_opening"]
  }),
  makePlace({
    id: "osm-node-13566022301",
    name: "Mo:stera",
    instagram_handle: "mostera.conceptstore",
    latitude: 43.288125,
    longitude: 5.3881,
    neighborhood: "Marseille",
    address: "84 Rue de Lodi, Marseille",
    category: "Cafe",
    criteria: ["has_wifi","laptop_friendly"]
  }),
  makePlace({
    id: "osm-node-4262898934",
    name: "Modern Sushi",
    latitude: 43.342903,
    longitude: 5.408549,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-9056061248",
    name: "Modo PIZZA",
    latitude: 43.308567,
    longitude: 5.377333,
    neighborhood: "Marseille",
    address: "57 Boulevard de Strasbourg, Marseille",
    category: "Restaurant",
    criteria: ["late_opening","vegetarian_options","good_for_groups"]
  }),
  makePlace({
    id: "osm-node-10017557033",
    name: "Mon Cafe",
    latitude: 43.296099,
    longitude: 5.386323,
    neighborhood: "Cours Julien",
    address: "Marseille",
    category: "Cafe",
    criteria: ["has_terrace"]
  }),
  makePlace({
    id: "osm-node-1941576063",
    name: "Monop'",
    latitude: 43.304218,
    longitude: 5.367904,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: ["late_opening"]
  }),
  makePlace({
    id: "osm-node-4622084630",
    name: "Monop'",
    latitude: 43.294933,
    longitude: 5.37623,
    neighborhood: "Noailles",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: ["late_opening"]
  }),
  makePlace({
    id: "osm-node-11332898069",
    name: "Monop'",
    latitude: 43.29835,
    longitude: 5.38377,
    neighborhood: "Longchamp",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: ["late_opening"]
  }),
  makePlace({
    id: "osm-node-10963273623",
    name: "Monop'",
    latitude: 43.275176,
    longitude: 5.384675,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-12692708608",
    name: "monop' daily",
    latitude: 43.306625,
    longitude: 5.365425,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["has_terrace","wheelchair_accessible","good_for_groups"]
  }),
  makePlace({
    id: "osm-way-397256603",
    name: "Monop'Daily",
    latitude: 43.302559,
    longitude: 5.380914,
    neighborhood: "Longchamp",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: ["wheelchair_accessible"]
  }),
  makePlace({
    id: "osm-node-1353030027",
    name: "Monoprix",
    latitude: 43.284847,
    longitude: 5.384838,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: ["wheelchair_accessible"]
  }),
  makePlace({
    id: "osm-node-5173620322",
    name: "Monoprix",
    latitude: 43.284984,
    longitude: 5.375002,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: ["wheelchair_accessible"]
  }),
  makePlace({
    id: "osm-way-68970487",
    name: "Monoprix",
    latitude: 43.302466,
    longitude: 5.397752,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: ["wheelchair_accessible"]
  }),
  makePlace({
    id: "osm-node-4622074310",
    name: "Monoprix",
    latitude: 43.296075,
    longitude: 5.377339,
    neighborhood: "Noailles",
    address: "36 La Canebiere, Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-3535162757",
    name: "Monoprix",
    latitude: 43.301435,
    longitude: 5.369696,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-9674913017",
    name: "Monoprix",
    latitude: 43.291639,
    longitude: 5.378153,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-12122380638",
    name: "Monoprix",
    latitude: 43.306732,
    longitude: 5.365049,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-way-69129646",
    name: "Monoprix",
    latitude: 43.288054,
    longitude: 5.382982,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-way-154612249",
    name: "Monoprix",
    latitude: 43.274267,
    longitude: 5.389037,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-6723039744",
    name: "Monsieur Georges",
    latitude: 43.277935,
    longitude: 5.388691,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["has_terrace","late_opening"]
  }),
  makePlace({
    id: "osm-node-3389759704",
    name: "Monsieur Patate",
    latitude: 43.355123,
    longitude: 5.3702,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-2136336650",
    name: "Mont Liban",
    latitude: 43.29188,
    longitude: 5.372855,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["vegetarian_options","good_for_groups"]
  }),
  makePlace({
    id: "osm-node-9516550263",
    name: "Montevideo",
    latitude: 43.286433,
    longitude: 5.378238,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-10025390923",
    name: "Moon",
    latitude: 43.286829,
    longitude: 5.383084,
    neighborhood: "Marseille",
    address: "rue de Rome, Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-4816435921",
    name: "Moon burger",
    latitude: 43.290304,
    longitude: 5.369845,
    neighborhood: "Saint-Victor",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["has_wifi","late_opening","good_for_groups"]
  }),
  makePlace({
    id: "osm-node-2375838291",
    name: "Morrison's",
    latitude: 43.292021,
    longitude: 5.384533,
    neighborhood: "Cours Julien",
    address: "Marseille",
    category: "Bar",
    criteria: ["has_terrace","late_opening","wheelchair_accessible"]
  }),
  makePlace({
    id: "osm-node-3106616840",
    name: "Mr Chou Marseille Opera",
    latitude: 43.293715,
    longitude: 5.375349,
    neighborhood: "Noailles",
    address: "2 Rue Corneille, Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-way-955681181",
    name: "Mr Falafel",
    latitude: 43.295827,
    longitude: 5.386453,
    neighborhood: "Cours Julien",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["good_for_groups"]
  }),
  makePlace({
    id: "osm-node-8902097617",
    name: "MS Club",
    latitude: 43.332584,
    longitude: 5.374141,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-8108667712",
    name: "Multi Restauration Mediterranee",
    latitude: 43.359319,
    longitude: 5.339548,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-9277867307",
    name: "My Little Warung",
    latitude: 43.269063,
    longitude: 5.403672,
    neighborhood: "Littoral Sud",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["has_terrace","late_opening","vegetarian_options","allows_cb_no_minimum"]
  }),
  makePlace({
    id: "osm-node-11486730147",
    name: "My Little Warung",
    latitude: 43.287586,
    longitude: 5.382955,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["late_opening"]
  }),
  makePlace({
    id: "osm-node-7568857277",
    name: "MyBurgerBox",
    latitude: 43.284621,
    longitude: 5.381748,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["late_opening"]
  }),
  makePlace({
    id: "osm-node-5182271751",
    name: "N'BAZAR",
    latitude: 43.285497,
    longitude: 5.441812,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-13724819997",
    name: "Naandi's",
    latitude: 43.28779,
    longitude: 5.391427,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-4073589386",
    name: "Nachos",
    latitude: 43.304169,
    longitude: 5.367492,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["good_for_groups"]
  }),
  makePlace({
    id: "osm-node-11064486120",
    name: "Namaste",
    latitude: 43.28362,
    longitude: 5.385464,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["has_terrace","vegetarian_options"]
  }),
  makePlace({
    id: "osm-node-7054970461",
    name: "Naturalia",
    latitude: 43.293694,
    longitude: 5.379114,
    neighborhood: "Cours Julien",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: ["wheelchair_accessible"]
  }),
  makePlace({
    id: "osm-node-11792543881",
    name: "Naturalia",
    latitude: 43.301839,
    longitude: 5.369355,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: ["wheelchair_accessible"]
  }),
  makePlace({
    id: "osm-way-67708084",
    name: "Naturalia",
    latitude: 43.298337,
    longitude: 5.383895,
    neighborhood: "Longchamp",
    address: "140 La Canebiere, Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-1813995047",
    name: "Naturalia",
    latitude: 43.285794,
    longitude: 5.384381,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-7235320051",
    name: "Naturalia",
    latitude: 43.283431,
    longitude: 5.384682,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-7415272316",
    name: "Naturalia",
    latitude: 43.28888,
    longitude: 5.387818,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-7416935357",
    name: "Naturalia",
    latitude: 43.304507,
    longitude: 5.417656,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-12529701243",
    name: "Naturalia",
    latitude: 43.295754,
    longitude: 5.37635,
    neighborhood: "Noailles",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-5148084974",
    name: "Negresko",
    latitude: 43.270397,
    longitude: 5.392135,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-3369357423",
    name: "Nem de la Milliere",
    latitude: 43.283414,
    longitude: 5.500091,
    neighborhood: "Marseille",
    address: "Boulevard de la Milliere, Marseille",
    category: "Restaurant",
    criteria: ["vegetarian_options"]
  }),
  makePlace({
    id: "osm-way-527814005",
    name: "Neptune Coquillages",
    latitude: 43.347469,
    longitude: 5.450132,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-1886604370",
    name: "Nespresso",
    latitude: 43.295322,
    longitude: 5.37606,
    neighborhood: "Noailles",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-13105643443",
    name: "Nespresso",
    latitude: 43.306559,
    longitude: 5.364051,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-7119602207",
    name: "Netto",
    latitude: 43.327382,
    longitude: 5.382826,
    neighborhood: "Belle de Mai",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-way-153550509",
    name: "Netto",
    latitude: 43.262726,
    longitude: 5.40245,
    neighborhood: "Littoral Sud",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-2841633942",
    name: "New Dalat",
    latitude: 43.298113,
    longitude: 5.370672,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["good_for_groups"]
  }),
  makePlace({
    id: "osm-node-9668080597",
    name: "New Delhi",
    latitude: 43.286651,
    longitude: 5.383054,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-way-1259806414",
    name: "New Delice",
    latitude: 43.272593,
    longitude: 5.411716,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["good_for_groups"]
  }),
  makePlace({
    id: "osm-node-4988384043",
    name: "New Macy's",
    latitude: 43.285721,
    longitude: 5.479599,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["good_for_groups"]
  }),
  makePlace({
    id: "osm-node-997614789",
    name: "New School Tacos",
    latitude: 43.295087,
    longitude: 5.378012,
    neighborhood: "Cours Julien",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["has_terrace","late_opening","good_for_groups"]
  }),
  makePlace({
    id: "osm-node-11932566463",
    name: "New Terrasse",
    latitude: 43.296362,
    longitude: 5.370551,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["has_terrace"]
  }),
  makePlace({
    id: "osm-node-3906576693",
    name: "Nexus Gaming",
    latitude: 43.294496,
    longitude: 5.382923,
    neighborhood: "Cours Julien",
    address: "Marseille",
    category: "Bar",
    criteria: []
  }),
  makePlace({
    id: "osm-node-2841631329",
    name: "Nguyen Hoang",
    latitude: 43.298299,
    longitude: 5.371082,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-1974240833",
    name: "Nico Coquillages",
    latitude: 43.279572,
    longitude: 5.416844,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-9634033732",
    name: "Nico Pizza",
    latitude: 43.359076,
    longitude: 5.357574,
    neighborhood: "Le Panier",
    address: "109 Avenue de la Viste, Marseille",
    category: "Restaurant",
    criteria: ["good_for_groups"]
  }),
  makePlace({
    id: "osm-node-9350895830",
    name: "Nicolas",
    latitude: 43.247965,
    longitude: 5.390582,
    neighborhood: "Littoral Sud",
    address: "112 Avenue de Hambourg, Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-2019893928",
    name: "Nicolas",
    latitude: 43.285849,
    longitude: 5.384401,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-2080122384",
    name: "Nicolas",
    latitude: 43.304137,
    longitude: 5.414964,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-6170637393",
    name: "Nicolas",
    latitude: 43.302591,
    longitude: 5.397526,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-10963273624",
    name: "Nicolas",
    latitude: 43.274754,
    longitude: 5.384848,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-11355336290",
    name: "Nicolas",
    latitude: 43.292575,
    longitude: 5.377231,
    neighborhood: "Noailles",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-11860709842",
    name: "Nicolas",
    latitude: 43.293819,
    longitude: 5.37349,
    neighborhood: "Noailles",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-11860859033",
    name: "Nicolas",
    latitude: 43.28863,
    longitude: 5.382382,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-9051729513",
    name: "Night Shop",
    latitude: 43.285403,
    longitude: 5.389557,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: ["allows_cb_no_minimum"]
  }),
  makePlace({
    id: "osm-node-2016443154",
    name: "Nihao",
    latitude: 43.300693,
    longitude: 5.383954,
    neighborhood: "Longchamp",
    address: "16a Rue de la Grande Armee, Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-5340041609",
    name: "Nikki Sushi",
    latitude: 43.2962,
    longitude: 5.486129,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-12122515297",
    name: "Nil's",
    latitude: 43.292822,
    longitude: 5.369146,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["good_for_groups"]
  }),
  makePlace({
    id: "osm-node-11482656548",
    name: "Nina Sushi",
    latitude: 43.278432,
    longitude: 5.389373,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["late_opening"]
  }),
  makePlace({
    id: "osm-node-11665923493",
    name: "NKI Sushi",
    latitude: 43.281228,
    longitude: 5.389423,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-3805457405",
    name: "Noailles",
    latitude: 43.296929,
    longitude: 5.379789,
    neighborhood: "Cours Julien",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-6957100734",
    name: "Noailles",
    latitude: 43.285139,
    longitude: 5.384613,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-9776368489",
    name: "Normal",
    latitude: 43.295462,
    longitude: 5.378279,
    neighborhood: "Cours Julien",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-6427638127",
    name: "Notre Cave du Mont",
    latitude: 43.291258,
    longitude: 5.385114,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-12198922662",
    name: "Nou",
    latitude: 43.293806,
    longitude: 5.377068,
    neighborhood: "Noailles",
    address: "2 Rue Dumarsais, Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-5537934550",
    name: "Noudjoum",
    latitude: 43.301007,
    longitude: 5.377387,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-9054265536",
    name: "Nouveau Oriental Grill's",
    latitude: 43.311655,
    longitude: 5.377657,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["has_terrace"]
  }),
  makePlace({
    id: "osm-node-12571192902",
    name: "Nua",
    instagram_handle: "nua_marseille",
    latitude: 43.299818,
    longitude: 5.369233,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["late_opening"]
  }),
  makePlace({
    id: "osm-node-11428666671",
    name: "Nul Part Ailleurs",
    latitude: 43.292968,
    longitude: 5.370404,
    neighborhood: "Marseille",
    address: "18 Quai de Rive-Neuve, Marseille",
    category: "Restaurant",
    criteria: ["has_terrace","late_opening"]
  }),
  makePlace({
    id: "osm-node-12135852299",
    name: "NUR Market",
    latitude: 43.299627,
    longitude: 5.382388,
    neighborhood: "Longchamp",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-6766454555",
    name: "O Beach",
    latitude: 43.244201,
    longitude: 5.370736,
    neighborhood: "Littoral Sud",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["has_terrace"]
  }),
  makePlace({
    id: "osm-node-12141643447",
    name: "O Bobar",
    latitude: 43.28109,
    longitude: 5.382156,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-12802859736",
    name: "O Classic",
    latitude: 43.304429,
    longitude: 5.398436,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["good_for_groups"]
  }),
  makePlace({
    id: "osm-way-69137422",
    name: "O Dadou",
    latitude: 43.285181,
    longitude: 5.384429,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["good_for_groups"]
  }),
  makePlace({
    id: "osm-node-7925474612",
    name: "O delices de St Marcel",
    latitude: 43.287505,
    longitude: 5.465515,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-way-1166141791",
    name: "o dwitch",
    latitude: 43.294526,
    longitude: 5.385804,
    neighborhood: "Cours Julien",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["wheelchair_accessible","good_for_groups"]
  }),
  makePlace({
    id: "osm-node-2379123244",
    name: "O FANETTE",
    latitude: 43.292127,
    longitude: 5.384242,
    neighborhood: "Cours Julien",
    address: "11 Place Notre-Dame-du-Mont, Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-4463345825",
    name: "O ha noi",
    latitude: 43.30043,
    longitude: 5.388458,
    neighborhood: "Longchamp",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["vegetarian_options"]
  }),
  makePlace({
    id: "osm-node-4426184192",
    name: "O lapin blanc",
    latitude: 43.248905,
    longitude: 5.381753,
    neighborhood: "Littoral Sud",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-13608830902",
    name: "O mercado do Brasil",
    latitude: 43.268617,
    longitude: 5.388569,
    neighborhood: "Littoral Sud",
    address: "52 Avenue de Mazargues, Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-6170637394",
    name: "o Nem",
    latitude: 43.302795,
    longitude: 5.397787,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-10896387594",
    name: "O Puits Gourmand",
    latitude: 43.299699,
    longitude: 5.367488,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-5822477586",
    name: "O saveurs du Liban",
    latitude: 43.293569,
    longitude: 5.373524,
    neighborhood: "Noailles",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["vegetarian_options"]
  }),
  makePlace({
    id: "osm-node-1034064322",
    name: "O Vrac",
    latitude: 43.294471,
    longitude: 5.385218,
    neighborhood: "Cours Julien",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-10876201335",
    name: "O-Pho 187",
    latitude: 43.294674,
    longitude: 5.374939,
    neighborhood: "Noailles",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["vegetarian_options"]
  }),
  makePlace({
    id: "osm-node-5930221590",
    name: "O' Bar a Crepes",
    latitude: 43.29606,
    longitude: 5.374451,
    neighborhood: "Noailles",
    address: "Marseille",
    category: "Cafe",
    criteria: ["has_terrace"]
  }),
  makePlace({
    id: "osm-node-4379193814",
    name: "O' ble enchante",
    latitude: 43.32278,
    longitude: 5.407057,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-2645432610",
    name: "O' Cafe Sucre",
    latitude: 43.335423,
    longitude: 5.363271,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Cafe",
    criteria: []
  }),
  makePlace({
    id: "osm-node-12676754834",
    name: "O' Max Grillades",
    latitude: 43.305585,
    longitude: 5.372838,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["late_opening"]
  }),
  makePlace({
    id: "osm-node-8231960048",
    name: "O' Ventre sur Pate",
    latitude: 43.27579,
    longitude: 5.36083,
    neighborhood: "Saint-Victor",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["good_for_groups"]
  }),
  makePlace({
    id: "osm-node-11119491610",
    name: "O'Bar des Crottes",
    latitude: 43.323331,
    longitude: 5.367758,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Cafe",
    criteria: []
  }),
  makePlace({
    id: "osm-node-6669549585",
    name: "O'Bidul",
    latitude: 43.29199,
    longitude: 5.380706,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-3799422419",
    name: "O'Bistrot d'Armenie",
    latitude: 43.285838,
    longitude: 5.479967,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-4314411676",
    name: "O'Brady's Irish Pub",
    latitude: 43.258801,
    longitude: 5.394096,
    neighborhood: "Littoral Sud",
    address: "Marseille",
    category: "Bar",
    criteria: []
  }),
  makePlace({
    id: "osm-node-12600875529",
    name: "O'Canotier",
    latitude: 43.281134,
    longitude: 5.351938,
    neighborhood: "Malmousque",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["has_terrace"]
  }),
  makePlace({
    id: "osm-node-13395903002",
    name: "O'carioca",
    instagram_handle: "instagram.com",
    latitude: 43.294442,
    longitude: 5.383917,
    neighborhood: "Cours Julien",
    address: "13 Rue Vian, Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-11249187362",
    name: "O'Coin Gourmand",
    latitude: 43.296173,
    longitude: 5.379472,
    neighborhood: "Cours Julien",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-9442215700",
    name: "O'Dakar",
    latitude: 43.359246,
    longitude: 5.357816,
    neighborhood: "Le Panier",
    address: "122 Avenue de la Viste, Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-7190137243",
    name: "O'Kwat",
    latitude: 43.362193,
    longitude: 5.315047,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-627619534",
    name: "O'Malley's",
    latitude: 43.293456,
    longitude: 5.372121,
    neighborhood: "Noailles",
    address: "Marseille",
    category: "Bar",
    criteria: ["has_wifi"]
  }),
  makePlace({
    id: "osm-node-5411679756",
    name: "O'Monaco",
    latitude: 43.296203,
    longitude: 5.378215,
    neighborhood: "Cours Julien",
    address: "Marseille",
    category: "Cafe",
    criteria: ["has_terrace"]
  }),
  makePlace({
    id: "osm-node-1102602125",
    name: "O'Nuage d'Orient",
    latitude: 43.293873,
    longitude: 5.387162,
    neighborhood: "Cours Julien",
    address: "Marseille",
    category: "Cafe",
    criteria: []
  }),
  makePlace({
    id: "osm-node-1933796321",
    name: "O'Pakistan",
    latitude: 43.294129,
    longitude: 5.384806,
    neighborhood: "Cours Julien",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["has_terrace","vegetarian_options"]
  }),
  makePlace({
    id: "osm-node-2373053208",
    name: "O'Pepe Cafe",
    latitude: 43.334331,
    longitude: 5.410519,
    neighborhood: "Marseille",
    address: "40 Avenue Escadrille Normandie-Niemen, Marseille",
    category: "Restaurant",
    criteria: ["has_terrace","late_opening","good_for_groups"]
  }),
  makePlace({
    id: "osm-node-9437395120",
    name: "O'Plaisir",
    latitude: 43.357824,
    longitude: 5.357691,
    neighborhood: "Le Panier",
    address: "86 Avenue de la Viste, Marseille",
    category: "Restaurant",
    criteria: ["good_for_groups"]
  }),
  makePlace({
    id: "osm-node-5785292453",
    name: "O'Provencal",
    latitude: 43.294695,
    longitude: 5.379146,
    neighborhood: "Cours Julien",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["late_opening"]
  }),
  makePlace({
    id: "osm-node-11932765788",
    name: "O'Ptit Creux",
    latitude: 43.296503,
    longitude: 5.378533,
    neighborhood: "Cours Julien",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["vegetarian_options","good_for_groups"]
  }),
  makePlace({
    id: "osm-node-2375892963",
    name: "O'sud",
    latitude: 43.292992,
    longitude: 5.373795,
    neighborhood: "Noailles",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-8388734439",
    name: "O'Tacos",
    latitude: 43.297896,
    longitude: 5.38236,
    neighborhood: "Cours Julien",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["good_for_groups"]
  }),
  makePlace({
    id: "osm-node-8475740485",
    name: "O'Tacos",
    latitude: 43.29084,
    longitude: 5.381391,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["late_opening","good_for_groups"]
  }),
  makePlace({
    id: "osm-node-10942364716",
    name: "O'Tacos",
    latitude: 43.363539,
    longitude: 5.34848,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["good_for_groups"]
  }),
  makePlace({
    id: "osm-node-10970911434",
    name: "O'Tacos",
    latitude: 43.26193,
    longitude: 5.375685,
    neighborhood: "Littoral Sud",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["good_for_groups"]
  }),
  makePlace({
    id: "osm-node-9910093528",
    name: "O'Terres provencales",
    latitude: 43.313543,
    longitude: 5.413476,
    neighborhood: "Marseille",
    address: "3 Boulevard Debord, Marseille",
    category: "Commerce alimentaire",
    criteria: ["allows_cb_no_minimum"]
  }),
  makePlace({
    id: "osm-node-1288030060",
    name: "O'Thierry",
    latitude: 43.30028,
    longitude: 5.386601,
    neighborhood: "Longchamp",
    address: "Marseille",
    category: "Bar",
    criteria: []
  }),
  makePlace({
    id: "osm-node-11122159353",
    name: "O'Warm",
    latitude: 43.286323,
    longitude: 5.386453,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Bar",
    criteria: []
  }),
  makePlace({
    id: "osm-node-5785295653",
    name: "Oai",
    latitude: 43.292356,
    longitude: 5.374379,
    neighborhood: "Noailles",
    address: "40 Rue Sainte, Marseille",
    category: "Restaurant",
    criteria: ["late_opening"]
  }),
  makePlace({
    id: "osm-node-8475740439",
    name: "Oeuf",
    instagram_handle: "bernie_coffee",
    latitude: 43.291432,
    longitude: 5.380996,
    neighborhood: "Marseille",
    address: "7 Place de Rome, Marseille",
    category: "Restaurant",
    criteria: ["has_terrace","has_wifi","wheelchair_accessible","vegetarian_options","allows_cb_no_minimum"]
  }),
  makePlace({
    id: "osm-node-8520690317",
    name: "Oh Faon ! La Biscuiterie",
    latitude: 43.289926,
    longitude: 5.379561,
    neighborhood: "Marseille",
    address: "2 Rue Edmond Rostand, Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-10813979605",
    name: "Oh Faon ! La Patisserie",
    latitude: 43.289685,
    longitude: 5.379667,
    neighborhood: "Marseille",
    address: "6 Rue Edmond Rostand, Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-11482652645",
    name: "oh!bowls",
    latitude: 43.278408,
    longitude: 5.389306,
    neighborhood: "Marseille",
    address: "9 Rue Borde, Marseille",
    category: "Restaurant",
    criteria: ["vegetarian_options"]
  }),
  makePlace({
    id: "osm-node-11935830889",
    name: "Ohev Pizza",
    latitude: 43.264699,
    longitude: 5.409005,
    neighborhood: "Littoral Sud",
    address: "7 Boulevard Gillibert, Marseille",
    category: "Restaurant",
    criteria: ["good_for_groups"]
  }),
  makePlace({
    id: "osm-node-11178666939",
    name: "Oil and Wax",
    latitude: 43.293165,
    longitude: 5.375301,
    neighborhood: "Noailles",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["has_terrace"]
  }),
  makePlace({
    id: "osm-node-4535046089",
    name: "Okaasan",
    latitude: 43.294232,
    longitude: 5.384757,
    neighborhood: "Cours Julien",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-11933112378",
    name: "Oppio 7",
    latitude: 43.292281,
    longitude: 5.366841,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Bar",
    criteria: []
  }),
  makePlace({
    id: "osm-node-12089163269",
    name: "Organic Burger House",
    latitude: 43.292881,
    longitude: 5.38528,
    neighborhood: "Cours Julien",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["good_for_groups"]
  }),
  makePlace({
    id: "osm-node-9054265534",
    name: "Oriental",
    latitude: 43.311828,
    longitude: 5.377385,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-3821145292",
    name: "Oriental Algerien",
    latitude: 43.348528,
    longitude: 5.359081,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-12117240200",
    name: "Oriental Delices",
    latitude: 43.299614,
    longitude: 5.382677,
    neighborhood: "Longchamp",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["good_for_groups"]
  }),
  makePlace({
    id: "osm-node-6205261811",
    name: "Oscar",
    latitude: 43.296537,
    longitude: 5.372483,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["has_terrace"]
  }),
  makePlace({
    id: "osm-node-3814418205",
    name: "Oscar's bagels",
    latitude: 43.293537,
    longitude: 5.372387,
    neighborhood: "Noailles",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["late_opening"]
  }),
  makePlace({
    id: "osm-node-9186747681",
    name: "Otto Marseille",
    latitude: 43.271795,
    longitude: 5.386739,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["late_opening"]
  }),
  makePlace({
    id: "osm-node-8116369082",
    name: "Ourea",
    latitude: 43.290613,
    longitude: 5.373465,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["late_opening","vegetarian_options"]
  }),
  makePlace({
    id: "osm-node-10961451150",
    name: "Oyat",
    latitude: 43.292785,
    longitude: 5.380312,
    neighborhood: "Cours Julien",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-11932491834",
    name: "Oz Bar",
    latitude: 43.29653,
    longitude: 5.371573,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Cafe",
    criteria: ["has_terrace"]
  }),
  makePlace({
    id: "osm-node-6737202813",
    name: "P.Kitchen",
    latitude: 43.244316,
    longitude: 5.371288,
    neighborhood: "Littoral Sud",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["has_terrace","late_opening"]
  }),
  makePlace({
    id: "osm-node-11787424869",
    name: "Pacha Grill - Restaurant Marseille",
    latitude: 43.250109,
    longitude: 5.375414,
    neighborhood: "Littoral Sud",
    address: "227 Avenue Pierre Mendes France, Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-2028106644",
    name: "Pachamama",
    latitude: 43.294741,
    longitude: 5.384649,
    neighborhood: "Cours Julien",
    address: "Marseille",
    category: "Bar",
    criteria: []
  }),
  makePlace({
    id: "osm-node-13233139970",
    name: "Paema",
    instagram_handle: "paema_patisserie",
    latitude: 43.290318,
    longitude: 5.359394,
    neighborhood: "Marseille",
    address: "31 Avenue Pasteur, Marseille",
    category: "Commerce alimentaire",
    criteria: ["has_terrace"]
  }),
  makePlace({
    id: "osm-node-8601941433",
    name: "Pain & Cantine",
    latitude: 43.303347,
    longitude: 5.430552,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-12288397048",
    name: "Pain a l'Ail",
    latitude: 43.294259,
    longitude: 5.376032,
    neighborhood: "Noailles",
    address: "5 Rue de La Tour, Marseille",
    category: "Restaurant",
    criteria: ["has_terrace","good_for_groups"]
  }),
  makePlace({
    id: "osm-node-12288397049",
    name: "Pain a l'Ail",
    latitude: 43.289085,
    longitude: 5.384314,
    neighborhood: "Marseille",
    address: "30 Rue Berlioz, Marseille",
    category: "Restaurant",
    criteria: ["good_for_groups"]
  }),
  makePlace({
    id: "osm-node-4713580184",
    name: "Pain artisanal",
    latitude: 43.299421,
    longitude: 5.380621,
    neighborhood: "Longchamp",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-2016443144",
    name: "Pain Dore",
    latitude: 43.301123,
    longitude: 5.383559,
    neighborhood: "Longchamp",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-13426650718",
    name: "Pain et Miel",
    latitude: 43.266667,
    longitude: 5.389961,
    neighborhood: "Littoral Sud",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-13738193601",
    name: "Pain Pan",
    latitude: 43.294056,
    longitude: 5.376133,
    neighborhood: "Noailles",
    address: "6 Rue Saint-Saens, Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-12246677683",
    name: "Pain Pan !",
    latitude: 43.258678,
    longitude: 5.394133,
    neighborhood: "Littoral Sud",
    address: "382 Avenue de Mazargues, Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-12919168001",
    name: "PAIN PAN !",
    instagram_handle: "boulangeriepainpan",
    latitude: 43.302306,
    longitude: 5.396971,
    neighborhood: "Marseille",
    address: "8 Avenue du Marechal Foch, Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-2001201535",
    name: "PAIN PAN !",
    latitude: 43.293059,
    longitude: 5.38524,
    neighborhood: "Cours Julien",
    address: "29 Rue des Trois Freres Barthelemy, Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-way-68980386",
    name: "Pain Pan!",
    latitude: 43.30923,
    longitude: 5.401692,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: ["has_terrace","allows_cb_no_minimum"]
  }),
  makePlace({
    id: "osm-node-2761510032",
    name: "Pain Patisserie Pizza",
    latitude: 43.356686,
    longitude: 5.357274,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-9846038069",
    name: "Pain Salvator",
    latitude: 43.291039,
    longitude: 5.382772,
    neighborhood: "Marseille",
    address: "32 Boulevard Louis Salvator, Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-7335375429",
    name: "Pains & Mignardises",
    latitude: 43.314414,
    longitude: 5.397576,
    neighborhood: "Belle de Mai",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: ["allows_cb_no_minimum"]
  }),
  makePlace({
    id: "osm-node-9796285845",
    name: "Pains cakes et Cie",
    latitude: 43.281462,
    longitude: 5.381729,
    neighborhood: "Marseille",
    address: "262 Rue Paradis, Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-9929575748",
    name: "Palais de l'Inde",
    latitude: 43.294162,
    longitude: 5.384673,
    neighborhood: "Cours Julien",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["vegetarian_options"]
  }),
  makePlace({
    id: "osm-node-12693771550",
    name: "Palais des Thes",
    latitude: 43.306869,
    longitude: 5.364213,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-1421416323",
    name: "Palais Du Fruit",
    latitude: 43.251234,
    longitude: 5.38825,
    neighborhood: "Littoral Sud",
    address: "71 Avenue de Hambourg, Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-5044501283",
    name: "Palama Pizza",
    latitude: 43.356795,
    longitude: 5.439515,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["late_opening","good_for_groups"]
  }),
  makePlace({
    id: "osm-node-5339998840",
    name: "Pallet's CAFE",
    latitude: 43.295833,
    longitude: 5.482081,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-12128637030",
    name: "Paninoteca",
    latitude: 43.294342,
    longitude: 5.374961,
    neighborhood: "Noailles",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["good_for_groups"]
  }),
  makePlace({
    id: "osm-node-2024606530",
    name: "Papa Fredo",
    latitude: 43.294376,
    longitude: 5.382977,
    neighborhood: "Cours Julien",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-12140130330",
    name: "PappaRoti Cafe",
    latitude: 43.297204,
    longitude: 5.376913,
    neighborhood: "Noailles",
    address: "Marseille",
    category: "Bar",
    criteria: []
  }),
  makePlace({
    id: "osm-node-8475740494",
    name: "Papyrus",
    latitude: 43.290808,
    longitude: 5.381302,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["vegetarian_options"]
  }),
  makePlace({
    id: "osm-node-10969402148",
    name: "Paradis Pizza",
    latitude: 43.278228,
    longitude: 5.383797,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["vegetarian_options","good_for_groups"]
  }),
  makePlace({
    id: "osm-node-10815956645",
    name: "Passet Gouter",
    latitude: 43.248849,
    longitude: 5.390121,
    neighborhood: "Littoral Sud",
    address: "112 Avenue de Hambourg, Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-9054436491",
    name: "Pasta",
    latitude: 43.310017,
    longitude: 5.379528,
    neighborhood: "Longchamp",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["good_for_groups"]
  }),
  makePlace({
    id: "osm-node-4426912791",
    name: "Pasta di Lala",
    latitude: 43.296537,
    longitude: 5.365903,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-6034079519",
    name: "Pasta e Dolce",
    latitude: 43.264795,
    longitude: 5.391621,
    neighborhood: "Littoral Sud",
    address: "199 Avenue de Mazargues, Marseille",
    category: "Commerce alimentaire",
    criteria: ["allows_cb_no_minimum"]
  }),
  makePlace({
    id: "osm-node-6139186986",
    name: "Pastels World",
    latitude: 43.295178,
    longitude: 5.37986,
    neighborhood: "Cours Julien",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-2028106646",
    name: "Pates fraiches & Raviolis - C. Bianco",
    latitude: 43.293749,
    longitude: 5.385913,
    neighborhood: "Cours Julien",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-6912375923",
    name: "Pati Center",
    latitude: 43.31611,
    longitude: 5.38359,
    neighborhood: "Belle de Mai",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-5502868421",
    name: "Patisserie",
    latitude: 43.296557,
    longitude: 5.366699,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-3823091150",
    name: "Patisserie Boulangerie Pizza",
    latitude: 43.343207,
    longitude: 5.359444,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-2511318305",
    name: "Patisserie orientale / cafe le Rif",
    latitude: 43.296579,
    longitude: 5.380064,
    neighborhood: "Cours Julien",
    address: "7 Place du Marche des Capucins, Marseille",
    category: "Cafe",
    criteria: []
  }),
  makePlace({
    id: "osm-node-9055295914",
    name: "Patisserie Sud Tunisien",
    latitude: 43.310974,
    longitude: 5.378129,
    neighborhood: "Longchamp",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-2117029445",
    name: "Patisserie Sylvain Depuichaffray",
    latitude: 43.291732,
    longitude: 5.374974,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-12719035989",
    name: "Paul",
    latitude: 43.270136,
    longitude: 5.386519,
    neighborhood: "Marseille",
    address: "570 Rue Paradis, Marseille",
    category: "Commerce alimentaire",
    criteria: ["has_terrace","wheelchair_accessible","allows_cb_no_minimum"]
  }),
  makePlace({
    id: "osm-way-1183874192",
    name: "Paul",
    latitude: 43.302506,
    longitude: 5.380816,
    neighborhood: "Longchamp",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: ["wheelchair_accessible","vegetarian_options","good_for_groups"]
  }),
  makePlace({
    id: "osm-node-7335791223",
    name: "Paul",
    latitude: 43.301228,
    longitude: 5.47661,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-10963236954",
    name: "Paul",
    latitude: 43.279247,
    longitude: 5.383067,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-way-153555866",
    name: "Paul",
    latitude: 43.250023,
    longitude: 5.403837,
    neighborhood: "Littoral Sud",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-4764603324",
    name: "Paule et Kopa",
    latitude: 43.292207,
    longitude: 5.372048,
    neighborhood: "Noailles",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-8972723917",
    name: "Paulette's",
    latitude: 43.29579,
    longitude: 5.366477,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-11373407769",
    name: "Pause cafe cantine",
    latitude: 43.290776,
    longitude: 5.356909,
    neighborhood: "Marseille",
    address: "38 Rue Papety, Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-6571078194",
    name: "Pause Gourmande",
    latitude: 43.284536,
    longitude: 5.38407,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-2368452311",
    name: "Pauses Gourmandes",
    latitude: 43.299605,
    longitude: 5.3775,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-2001201533",
    name: "Pavillon Thai",
    latitude: 43.292807,
    longitude: 5.385067,
    neighborhood: "Cours Julien",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-12794377689",
    name: "Pearl's Pub",
    latitude: 43.289151,
    longitude: 5.497215,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Bar",
    criteria: []
  }),
  makePlace({
    id: "osm-node-7005844722",
    name: "Pepe Pizza",
    latitude: 43.264636,
    longitude: 5.409664,
    neighborhood: "Littoral Sud",
    address: "203 Boulevard de Sainte-Marguerite, Marseille",
    category: "Restaurant",
    criteria: ["late_opening","vegetarian_options","good_for_groups"]
  }),
  makePlace({
    id: "osm-node-11622429995",
    name: "Peritore",
    latitude: 43.278138,
    longitude: 5.383136,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-4405959301",
    name: "Petit Luchon",
    latitude: 43.29937,
    longitude: 5.381398,
    neighborhood: "Longchamp",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["good_for_groups"]
  }),
  makePlace({
    id: "osm-node-7710001489",
    name: "Petit Poucet",
    latitude: 43.298696,
    longitude: 5.38074,
    neighborhood: "Longchamp",
    address: "Marseille",
    category: "Bar",
    criteria: []
  }),
  makePlace({
    id: "osm-node-12140094284",
    name: "Petit Tunis",
    latitude: 43.297522,
    longitude: 5.381373,
    neighborhood: "Cours Julien",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-9976606402",
    name: "Petrin Couchette",
    latitude: 43.295821,
    longitude: 5.37847,
    neighborhood: "Cours Julien",
    address: "Marseille",
    category: "Cafe",
    criteria: ["has_terrace"]
  }),
  makePlace({
    id: "osm-node-13796193601",
    name: "Pezzo di Pizza",
    latitude: 43.31827,
    longitude: 5.424441,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-11772628526",
    name: "Pho Vietnam",
    latitude: 43.30254,
    longitude: 5.395455,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["late_opening","vegetarian_options"]
  }),
  makePlace({
    id: "osm-node-13137559137",
    name: "Piacere",
    latitude: 43.273125,
    longitude: 5.391388,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["good_for_groups"]
  }),
  makePlace({
    id: "osm-node-13667940303",
    name: "Picard",
    latitude: 43.289946,
    longitude: 5.359169,
    neighborhood: "Marseille",
    address: "38 Avenue Pasteur, Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-9318672117",
    name: "Picard",
    latitude: 43.277285,
    longitude: 5.383771,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-11122132896",
    name: "Piccolo",
    latitude: 43.294671,
    longitude: 5.376988,
    neighborhood: "Noailles",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["has_terrace"]
  }),
  makePlace({
    id: "osm-node-4713599097",
    name: "Pichon's",
    latitude: 43.299594,
    longitude: 5.381022,
    neighborhood: "Longchamp",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["good_for_groups"]
  }),
  makePlace({
    id: "osm-node-13121821702",
    name: "Picnic",
    latitude: 43.305616,
    longitude: 5.366151,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["has_terrace","good_for_groups"]
  }),
  makePlace({
    id: "osm-node-9057006344",
    name: "Piment",
    latitude: 43.308712,
    longitude: 5.380549,
    neighborhood: "Longchamp",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-11433145531",
    name: "Piou",
    latitude: 43.291672,
    longitude: 5.374659,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["vegetarian_options"]
  }),
  makePlace({
    id: "osm-node-11586544069",
    name: "Pipette",
    latitude: 43.291592,
    longitude: 5.370941,
    neighborhood: "Saint-Victor",
    address: "Marseille",
    category: "Bar",
    criteria: ["late_opening","allows_cb_no_minimum"]
  }),
  makePlace({
    id: "osm-node-12486265460",
    name: "Piquette",
    latitude: 43.318714,
    longitude: 5.404045,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: ["allows_cb_no_minimum"]
  }),
  makePlace({
    id: "osm-node-8435169450",
    name: "Pit A Pizza",
    latitude: 43.311887,
    longitude: 5.403112,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["good_for_groups"]
  }),
  makePlace({
    id: "osm-node-11491952369",
    name: "Pita Pit",
    latitude: 43.294115,
    longitude: 5.376315,
    neighborhood: "Noailles",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["late_opening","good_for_groups"]
  }),
  makePlace({
    id: "osm-node-3207950141",
    name: "Pitaya",
    latitude: 43.302813,
    longitude: 5.400458,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["vegetarian_options","good_for_groups"]
  }),
  makePlace({
    id: "osm-node-5193941553",
    name: "Pitaya",
    latitude: 43.296758,
    longitude: 5.373961,
    neighborhood: "Noailles",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["has_terrace","vegetarian_options","good_for_groups"]
  }),
  makePlace({
    id: "osm-node-11111489605",
    name: "Pitaya",
    latitude: 43.306744,
    longitude: 5.365484,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["late_opening","wheelchair_accessible","vegetarian_options","good_for_groups"]
  }),
  makePlace({
    id: "osm-node-12229129493",
    name: "Pitaya",
    latitude: 43.270429,
    longitude: 5.393047,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["vegetarian_options","good_for_groups"]
  }),
  makePlace({
    id: "osm-node-4922701766",
    name: "Pizza 26",
    latitude: 43.297573,
    longitude: 5.397561,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-2039908811",
    name: "Pizza Capri",
    latitude: 43.295225,
    longitude: 5.377466,
    neighborhood: "Noailles",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["good_for_groups"]
  }),
  makePlace({
    id: "osm-node-8972258417",
    name: "Pizza Capri",
    latitude: 43.292819,
    longitude: 5.374625,
    neighborhood: "Noailles",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["good_for_groups"]
  }),
  makePlace({
    id: "osm-node-4502532513",
    name: "Pizza Charly",
    latitude: 43.296457,
    longitude: 5.379398,
    neighborhood: "Cours Julien",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["good_for_groups"]
  }),
  makePlace({
    id: "osm-node-11122151342",
    name: "Pizza Charly",
    latitude: 43.295013,
    longitude: 5.376195,
    neighborhood: "Noailles",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["has_terrace","good_for_groups"]
  }),
  makePlace({
    id: "osm-node-10679332105",
    name: "Pizza chez Tony",
    latitude: 43.312549,
    longitude: 5.401708,
    neighborhood: "Marseille",
    address: "1 Rue Labry, Marseille",
    category: "Restaurant",
    criteria: ["good_for_groups"]
  }),
  makePlace({
    id: "osm-node-9550360017",
    name: "Pizza Cosy",
    latitude: 43.304022,
    longitude: 5.367606,
    neighborhood: "Le Panier",
    address: "101 Rue de la Republique, Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-2016443141",
    name: "Pizza Cut",
    latitude: 43.29923,
    longitude: 5.385007,
    neighborhood: "Longchamp",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["vegetarian_options","good_for_groups"]
  }),
  makePlace({
    id: "osm-node-11374020569",
    name: "Pizza du Pharo",
    latitude: 43.291821,
    longitude: 5.357676,
    neighborhood: "Marseille",
    address: "103 Boulevard Charles Livon, Marseille",
    category: "Restaurant",
    criteria: ["good_for_groups"]
  }),
  makePlace({
    id: "osm-node-5340044041",
    name: "Pizza Du Village",
    latitude: 43.296244,
    longitude: 5.486849,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["late_opening"]
  }),
  makePlace({
    id: "osm-node-2038029579",
    name: "Pizza Enervee",
    latitude: 43.293396,
    longitude: 5.385164,
    neighborhood: "Cours Julien",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["late_opening","good_for_groups"]
  }),
  makePlace({
    id: "osm-way-68982977",
    name: "Pizza Ferrari",
    latitude: 43.292347,
    longitude: 5.395311,
    neighborhood: "Marseille",
    address: "178 Rue Ferrari, Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-4698582137",
    name: "pizza franceschi",
    latitude: 43.268287,
    longitude: 5.405525,
    neighborhood: "Littoral Sud",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["late_opening","good_for_groups"]
  }),
  makePlace({
    id: "osm-node-3719979009",
    name: "Pizza Gege",
    latitude: 43.355581,
    longitude: 5.410095,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-3274585766",
    name: "Pizza La Juliana",
    latitude: 43.273037,
    longitude: 5.410498,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-3326665456",
    name: "Pizza La Patronne",
    latitude: 43.287765,
    longitude: 5.382338,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["vegetarian_options"]
  }),
  makePlace({
    id: "osm-node-6518203020",
    name: "Pizza Lino",
    latitude: 43.285322,
    longitude: 5.381474,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["late_opening","good_for_groups"]
  }),
  makePlace({
    id: "osm-node-13965785068",
    name: "Pizza Lol",
    instagram_handle: "pizzalol13013",
    latitude: 43.328626,
    longitude: 5.426433,
    neighborhood: "Marseille",
    address: "170 Avenue de La Rose, Marseille",
    category: "Restaurant",
    criteria: ["late_opening","good_for_groups"]
  }),
  makePlace({
    id: "osm-node-9276270317",
    name: "Pizza Lorenzo",
    latitude: 43.266279,
    longitude: 5.401733,
    neighborhood: "Littoral Sud",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["late_opening","good_for_groups"]
  }),
  makePlace({
    id: "osm-node-4109316472",
    name: "Pizza Marius",
    latitude: 43.285059,
    longitude: 5.389852,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-way-153554406",
    name: "Pizza minute",
    latitude: 43.24512,
    longitude: 5.427373,
    neighborhood: "Littoral Sud",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["has_terrace","good_for_groups"]
  }),
  makePlace({
    id: "osm-node-9266809640",
    name: "Pizza Park",
    latitude: 43.262058,
    longitude: 5.403984,
    neighborhood: "Littoral Sud",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["has_terrace","late_opening","good_for_groups"]
  }),
  makePlace({
    id: "osm-node-13304537301",
    name: "Pizza Pia",
    latitude: 43.276678,
    longitude: 5.394771,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["good_for_groups"]
  }),
  makePlace({
    id: "osm-way-157696057",
    name: "Pizza Pierrot",
    latitude: 43.287683,
    longitude: 5.465219,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-12282275286",
    name: "Pizza Pino",
    latitude: 43.256603,
    longitude: 5.41984,
    neighborhood: "Littoral Sud",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["late_opening","good_for_groups"]
  }),
  makePlace({
    id: "osm-node-2024973916",
    name: "Pizza Rella",
    latitude: 43.290918,
    longitude: 5.383045,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["good_for_groups"]
  }),
  makePlace({
    id: "osm-node-12170711107",
    name: "Pizza Sainte Anne",
    latitude: 43.256432,
    longitude: 5.393826,
    neighborhood: "Littoral Sud",
    address: "1 Boulevard Sainte-Anne, Marseille",
    category: "Restaurant",
    criteria: ["late_opening"]
  }),
  makePlace({
    id: "osm-node-3896650823",
    name: "Pizza Sandwichs",
    latitude: 43.294306,
    longitude: 5.43408,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-7893785860",
    name: "Pizza TiTi",
    latitude: 43.360129,
    longitude: 5.315133,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["late_opening","vegetarian_options"]
  }),
  makePlace({
    id: "osm-node-8164680678",
    name: "Pizza Zazza",
    latitude: 43.284886,
    longitude: 5.393211,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-10631220702",
    name: "Pizza Zino",
    latitude: 43.327022,
    longitude: 5.363176,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["has_terrace","good_for_groups"]
  }),
  makePlace({
    id: "osm-node-12520992660",
    name: "Pizze & Sfizi",
    latitude: 43.290637,
    longitude: 5.366574,
    neighborhood: "Saint-Victor",
    address: "153 Rue Sainte, Marseille",
    category: "Restaurant",
    criteria: ["late_opening"]
  }),
  makePlace({
    id: "osm-node-9686721893",
    name: "Pizzeria Baffi",
    latitude: 43.374228,
    longitude: 5.354383,
    neighborhood: "Le Panier",
    address: "15 Route de la Gavotte, Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-8164680690",
    name: "Pizzeria Buona Sera",
    latitude: 43.284746,
    longitude: 5.393682,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-7829025644",
    name: "Pizzeria Chez Dede",
    latitude: 43.295997,
    longitude: 5.397714,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-9332853495",
    name: "Pizzeria del Giro",
    latitude: 43.268457,
    longitude: 5.406353,
    neighborhood: "Littoral Sud",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["late_opening","good_for_groups"]
  }),
  makePlace({
    id: "osm-node-9010918717",
    name: "Pizzeria Della Stazione",
    latitude: 43.301621,
    longitude: 5.385661,
    neighborhood: "Longchamp",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["late_opening","good_for_groups"]
  }),
  makePlace({
    id: "osm-node-8518294550",
    name: "Pizzeria di Venezia",
    latitude: 43.294358,
    longitude: 5.375044,
    neighborhood: "Noailles",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-11136473672",
    name: "Pizzeria Etna",
    latitude: 43.318315,
    longitude: 5.424579,
    neighborhood: "Marseille",
    address: "444 Avenue de Montolivet, Marseille",
    category: "Restaurant",
    criteria: ["late_opening"]
  }),
  makePlace({
    id: "osm-node-4580200379",
    name: "Pizzeria Jeff",
    latitude: 43.253223,
    longitude: 5.422757,
    neighborhood: "Littoral Sud",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["good_for_groups"]
  }),
  makePlace({
    id: "osm-node-7334168261",
    name: "Pizzeria l'artisanale",
    latitude: 43.282084,
    longitude: 5.429641,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-way-153547718",
    name: "Pizzeria L'Original",
    latitude: 43.230307,
    longitude: 5.400839,
    neighborhood: "Littoral Sud",
    address: "Marseille",
    category: "Bar",
    criteria: []
  }),
  makePlace({
    id: "osm-node-13699331301",
    name: "Pizzeria Le Mercato",
    latitude: 43.34291,
    longitude: 5.408773,
    neighborhood: "Marseille",
    address: "114 Avenue du Merlan, Marseille",
    category: "Restaurant",
    criteria: ["good_for_groups"]
  }),
  makePlace({
    id: "osm-node-4430401479",
    name: "Pizzeria Low Cost",
    latitude: 43.307412,
    longitude: 5.383188,
    neighborhood: "Belle de Mai",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["good_for_groups"]
  }),
  makePlace({
    id: "osm-node-11163507301",
    name: "Pizzeria Prado",
    latitude: 43.269951,
    longitude: 5.390875,
    neighborhood: "Littoral Sud",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["late_opening","good_for_groups"]
  }),
  makePlace({
    id: "osm-node-9697856683",
    name: "Placette",
    latitude: 43.297263,
    longitude: 5.370649,
    neighborhood: "Le Panier",
    address: "22 Rue de la Guirlande, Marseille",
    category: "Restaurant",
    criteria: ["late_opening"]
  }),
  makePlace({
    id: "osm-node-6571076606",
    name: "Planet Sushi",
    latitude: 43.284368,
    longitude: 5.384188,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-12759691369",
    name: "Plats d'Asire",
    latitude: 43.29393,
    longitude: 5.40081,
    neighborhood: "Marseille",
    address: "41 Boulevard Jeanne d'Arc, Marseille",
    category: "Restaurant",
    criteria: ["vegetarian_options"]
  }),
  makePlace({
    id: "osm-node-9332853515",
    name: "Plein Champ",
    latitude: 43.264702,
    longitude: 5.40902,
    neighborhood: "Littoral Sud",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-601551803",
    name: "Plus Belle la Vigne",
    latitude: 43.294995,
    longitude: 5.382656,
    neighborhood: "Cours Julien",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: ["good_for_groups"]
  }),
  makePlace({
    id: "osm-node-4016689905",
    name: "PMU Bar Tabac",
    latitude: 43.270165,
    longitude: 5.423148,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Bar",
    criteria: []
  }),
  makePlace({
    id: "osm-node-4430509406",
    name: "point chaud traiteur",
    latitude: 43.307434,
    longitude: 5.38224,
    neighborhood: "Belle de Mai",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-7833239301",
    name: "Poissonerie Chez Annie",
    latitude: 43.284846,
    longitude: 5.360157,
    neighborhood: "Saint-Victor",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-7837399515",
    name: "Poissonnerie Bellevue",
    latitude: 43.269719,
    longitude: 5.413463,
    neighborhood: "Littoral Sud",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-4591323702",
    name: "Poissonnerie de l'Estaque",
    latitude: 43.360634,
    longitude: 5.314179,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-6170637547",
    name: "Poissonnerie Fernande",
    latitude: 43.302759,
    longitude: 5.397183,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-way-956127762",
    name: "Poissonnerie Gavottine",
    latitude: 43.295537,
    longitude: 5.386311,
    neighborhood: "Cours Julien",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: ["wheelchair_accessible"]
  }),
  makePlace({
    id: "osm-node-11557167269",
    name: "Poissonnerie Kennedy",
    latitude: 43.281395,
    longitude: 5.351542,
    neighborhood: "Malmousque",
    address: "245 Corniche du President John Fitzgerald Kennedy, Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-11540312997",
    name: "Pokawa",
    latitude: 43.306824,
    longitude: 5.364716,
    neighborhood: "Le Panier",
    address: "9 Quai du Lazaret, Marseille",
    category: "Restaurant",
    criteria: ["good_for_groups"]
  }),
  makePlace({
    id: "osm-node-11592330476",
    name: "Pokawa",
    latitude: 43.290107,
    longitude: 5.477721,
    neighborhood: "Marseille",
    address: "8 Route de la Sabliere, Marseille",
    category: "Restaurant",
    criteria: ["good_for_groups"]
  }),
  makePlace({
    id: "osm-node-8518294530",
    name: "Pokawa",
    latitude: 43.294009,
    longitude: 5.375879,
    neighborhood: "Noailles",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["good_for_groups"]
  }),
  makePlace({
    id: "osm-node-12229148989",
    name: "Poke House",
    latitude: 43.269792,
    longitude: 5.393366,
    neighborhood: "Littoral Sud",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["good_for_groups"]
  }),
  makePlace({
    id: "osm-node-2375892960",
    name: "Polikarpov",
    latitude: 43.293042,
    longitude: 5.374022,
    neighborhood: "Noailles",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["wheelchair_accessible"]
  }),
  makePlace({
    id: "osm-node-12526185076",
    name: "Pollux",
    instagram_handle: "cafe.pollux",
    latitude: 43.302593,
    longitude: 5.390101,
    neighborhood: "Marseille",
    address: "15 Rue d'Isoard, Marseille",
    category: "Cafe",
    criteria: []
  }),
  makePlace({
    id: "osm-node-13426638781",
    name: "Popeye et Olive",
    latitude: 43.266807,
    longitude: 5.38988,
    neighborhood: "Littoral Sud",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-12227986706",
    name: "Populo",
    latitude: 43.30245,
    longitude: 5.364882,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Bar",
    criteria: ["has_terrace"]
  }),
  makePlace({
    id: "osm-node-451721412",
    name: "Post Cafe",
    latitude: 43.297986,
    longitude: 5.373875,
    neighborhood: "Noailles",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["has_terrace"]
  }),
  makePlace({
    id: "osm-node-5085316737",
    name: "Potala Korner",
    latitude: 43.298709,
    longitude: 5.365672,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["good_for_groups"]
  }),
  makePlace({
    id: "osm-node-11932711965",
    name: "Poulet Braise",
    latitude: 43.297819,
    longitude: 5.373547,
    neighborhood: "Noailles",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-13893541003",
    name: "Poulets Fermiers De Provence",
    latitude: 43.33388,
    longitude: 5.392251,
    neighborhood: "Belle de Mai",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-9055977500",
    name: "Prestige",
    latitude: 43.309664,
    longitude: 5.379292,
    neighborhood: "Longchamp",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["good_for_groups"]
  }),
  makePlace({
    id: "osm-node-7925474615",
    name: "Prety Service",
    latitude: 43.28739,
    longitude: 5.465857,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-10896390527",
    name: "Primeur du Panier",
    latitude: 43.299771,
    longitude: 5.368311,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-8601941435",
    name: "Primeur Le Constellation",
    latitude: 43.303342,
    longitude: 5.430348,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-3719979010",
    name: "Primeurs",
    latitude: 43.355594,
    longitude: 5.410196,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-3933513624",
    name: "Primeurs Chez Antoine",
    latitude: 43.288749,
    longitude: 5.437275,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-2623628810",
    name: "Primeurs Saint-Louis",
    latitude: 43.346573,
    longitude: 5.359058,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-1355099516",
    name: "Propaganda cafe",
    latitude: 43.293155,
    longitude: 5.371273,
    neighborhood: "Noailles",
    address: "Marseille",
    category: "Cafe",
    criteria: ["has_terrace","has_wifi","late_opening","laptop_friendly"]
  }),
  makePlace({
    id: "osm-node-13046166801",
    name: "PROSPER",
    latitude: 43.29462,
    longitude: 5.384325,
    neighborhood: "Cours Julien",
    address: "2 Rue des Trois Rois, Marseille",
    category: "Restaurant",
    criteria: ["late_opening"]
  }),
  makePlace({
    id: "osm-node-1297455065",
    name: "Provisions",
    latitude: 43.287927,
    longitude: 5.388689,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-12117275982",
    name: "ProvOc",
    latitude: 43.295439,
    longitude: 5.382984,
    neighborhood: "Cours Julien",
    address: "Marseille",
    category: "Bar",
    criteria: []
  }),
  makePlace({
    id: "osm-node-1338679791",
    name: "Proxi",
    latitude: 43.288297,
    longitude: 5.388481,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-1439859488",
    name: "Proxi",
    latitude: 43.238663,
    longitude: 5.364958,
    neighborhood: "Littoral Sud",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-3606665476",
    name: "Proxi",
    latitude: 43.329403,
    longitude: 5.365376,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-4227920096",
    name: "Proxi",
    latitude: 43.338686,
    longitude: 5.407178,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-7409944105",
    name: "Proxi",
    latitude: 43.320555,
    longitude: 5.433177,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-13965785079",
    name: "Proxi",
    latitude: 43.327429,
    longitude: 5.424149,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-8315261165",
    name: "Proxi Express",
    latitude: 43.300809,
    longitude: 5.383824,
    neighborhood: "Longchamp",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-10135763581",
    name: "Pub Marina",
    latitude: 43.278935,
    longitude: 5.303929,
    neighborhood: "Malmousque",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-9444413246",
    name: "Pub Massilia",
    latitude: 43.294268,
    longitude: 5.383862,
    neighborhood: "Cours Julien",
    address: "Marseille",
    category: "Bar",
    criteria: []
  }),
  makePlace({
    id: "osm-node-1941649847",
    name: "Pub O quinze",
    latitude: 43.293806,
    longitude: 5.374011,
    neighborhood: "Noailles",
    address: "Marseille",
    category: "Bar",
    criteria: ["has_terrace"]
  }),
  makePlace({
    id: "osm-node-2141553958",
    name: "Pulcinella",
    latitude: 43.298307,
    longitude: 5.375701,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-10731756805",
    name: "Pulp",
    latitude: 43.292457,
    longitude: 5.371807,
    neighborhood: "Noailles",
    address: "32 Place aux Huiles, Marseille",
    category: "Bar",
    criteria: ["late_opening"]
  }),
  makePlace({
    id: "osm-node-4235395047",
    name: "Puyricard",
    latitude: 43.293422,
    longitude: 5.377782,
    neighborhood: "Noailles",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-3814402617",
    name: "Quai de la Galiote",
    latitude: 43.293172,
    longitude: 5.371387,
    neighborhood: "Noailles",
    address: "Marseille",
    category: "Cafe",
    criteria: []
  }),
  makePlace({
    id: "osm-node-7859266729",
    name: "Quanta Cafe",
    latitude: 43.359644,
    longitude: 5.33851,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["has_terrace","has_wifi","vegetarian_options"]
  }),
  makePlace({
    id: "osm-node-13897279601",
    name: "Quelle belle Journee",
    latitude: 43.285587,
    longitude: 5.390007,
    neighborhood: "Marseille",
    address: "2 Rue d'Iena, Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-2299768709",
    name: "Quick",
    latitude: 43.32978,
    longitude: 5.399391,
    neighborhood: "Belle de Mai",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["good_for_groups"]
  }),
  makePlace({
    id: "osm-node-3634114925",
    name: "Quick",
    latitude: 43.363558,
    longitude: 5.348816,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["good_for_groups"]
  }),
  makePlace({
    id: "osm-way-159862735",
    name: "Quick",
    latitude: 43.341177,
    longitude: 5.360249,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["good_for_groups"]
  }),
  makePlace({
    id: "osm-node-10739171220",
    name: "QUIETum",
    latitude: 43.307948,
    longitude: 5.370759,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-way-434366320",
    name: "R2C",
    latitude: 43.343842,
    longitude: 5.430632,
    neighborhood: "Marseille",
    address: "Rue Paul Langevin, Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-2080122388",
    name: "Rabellino",
    latitude: 43.304178,
    longitude: 5.415508,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-2862082932",
    name: "Rafraf",
    latitude: 43.311687,
    longitude: 5.37265,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: ["has_terrace"]
  }),
  makePlace({
    id: "osm-node-2041086111",
    name: "Rajasthan",
    latitude: 43.291533,
    longitude: 5.384614,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["vegetarian_options"]
  }),
  makePlace({
    id: "osm-node-11307449795",
    name: "Ramen Go",
    latitude: 43.288151,
    longitude: 5.382649,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["late_opening"]
  }),
  makePlace({
    id: "osm-node-9073760379",
    name: "Rapido Food",
    latitude: 43.288708,
    longitude: 5.372878,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["has_terrace","late_opening","good_for_groups"]
  }),
  makePlace({
    id: "osm-node-6565151912",
    name: "Rapido pizza",
    latitude: 43.327053,
    longitude: 5.362834,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["has_terrace","good_for_groups"]
  }),
  makePlace({
    id: "osm-node-10963273626",
    name: "RaVioLiFiCio",
    latitude: 43.274657,
    longitude: 5.384891,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-2024973917",
    name: "Razzia",
    latitude: 43.292791,
    longitude: 5.385363,
    neighborhood: "Cours Julien",
    address: "Marseille",
    category: "Cafe",
    criteria: []
  }),
  makePlace({
    id: "osm-node-13484133379",
    name: "RD bas prix",
    latitude: 43.305644,
    longitude: 5.383707,
    neighborhood: "Belle de Mai",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-12132587679",
    name: "Reduit Shop",
    latitude: 43.29769,
    longitude: 5.381816,
    neighborhood: "Cours Julien",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-6839680211",
    name: "Reformes Viandes",
    latitude: 43.299996,
    longitude: 5.384335,
    neighborhood: "Longchamp",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-9124102961",
    name: "Regain",
    latitude: 43.293159,
    longitude: 5.389313,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["vegetarian_options"]
  }),
  makePlace({
    id: "osm-node-9056024022",
    name: "Regal",
    latitude: 43.309221,
    longitude: 5.3785,
    neighborhood: "Longchamp",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["good_for_groups"]
  }),
  makePlace({
    id: "osm-node-7843180630",
    name: "Regard Cafe",
    latitude: 43.297854,
    longitude: 5.363491,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["has_terrace"]
  }),
  makePlace({
    id: "osm-node-6631640472",
    name: "Rendez-Vous",
    latitude: 43.301015,
    longitude: 5.397419,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["vegetarian_options","good_for_groups"]
  }),
  makePlace({
    id: "osm-node-13742980159",
    name: "Rendez-Vous Pizzeria",
    latitude: 43.301114,
    longitude: 5.397411,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["late_opening","good_for_groups"]
  }),
  makePlace({
    id: "osm-node-2259960818",
    name: "repfood",
    latitude: 43.303798,
    longitude: 5.367699,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["good_for_groups"]
  }),
  makePlace({
    id: "osm-node-1797919718",
    name: "Restaurant \"Le Gepetto\"",
    latitude: 43.257434,
    longitude: 5.418694,
    neighborhood: "Littoral Sud",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-1796966048",
    name: "Restaurant \"Les Tilleuls\"",
    latitude: 43.252833,
    longitude: 5.421149,
    neighborhood: "Littoral Sud",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-8391843707",
    name: "Restaurant Apave",
    latitude: 43.360655,
    longitude: 5.322066,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-way-154605522",
    name: "Restaurant bar pizzeria de la Fontaine",
    latitude: 43.281371,
    longitude: 5.426178,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-way-112828659",
    name: "Restaurant Bar PMU du Bon Coin",
    latitude: 43.331362,
    longitude: 5.406398,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-13871064308",
    name: "Restaurant Bio Les Ondines",
    latitude: 43.299704,
    longitude: 5.383983,
    neighborhood: "Longchamp",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-4822485124",
    name: "Restaurant de l'UNM",
    latitude: 43.29346,
    longitude: 5.360491,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-4524956220",
    name: "Restaurant de la Cite de la Cosmetique",
    latitude: 43.342926,
    longitude: 5.370881,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-5188583893",
    name: "Restaurant de la Renaissance",
    latitude: 43.281527,
    longitude: 5.425508,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-11186426456",
    name: "Restaurant des amis",
    latitude: 43.302232,
    longitude: 5.374098,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-4567712948",
    name: "Restaurant Du Centre Equestre",
    latitude: 43.236295,
    longitude: 5.367627,
    neighborhood: "Littoral Sud",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-7749927836",
    name: "Restaurant du chateau",
    latitude: 43.295572,
    longitude: 5.502454,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["has_terrace"]
  }),
  makePlace({
    id: "osm-node-4581974105",
    name: "Restaurant la Rouviere",
    latitude: 43.253184,
    longitude: 5.422703,
    neighborhood: "Littoral Sud",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-13287768201",
    name: "Restaurant Le Palmier",
    latitude: 43.36077,
    longitude: 5.314433,
    neighborhood: "Le Panier",
    address: "14 Rue Martial Reynaud, Marseille",
    category: "Restaurant",
    criteria: ["late_opening"]
  }),
  makePlace({
    id: "osm-node-1823113429",
    name: "Restaurant Pinocchio",
    latitude: 43.245382,
    longitude: 5.415714,
    neighborhood: "Littoral Sud",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-9581654684",
    name: "Restaurant Pizzeria chez Moussa",
    latitude: 43.371549,
    longitude: 5.355955,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-7797691380",
    name: "Restaurant Pizzeria du Roy d'Espagne",
    latitude: 43.241467,
    longitude: 5.387548,
    neighborhood: "Littoral Sud",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["has_terrace"]
  }),
  makePlace({
    id: "osm-node-10731729507",
    name: "Restaurant Quartier Libre",
    latitude: 43.293563,
    longitude: 5.37517,
    neighborhood: "Noailles",
    address: "13 Rue Glandeves, Marseille",
    category: "Restaurant",
    criteria: ["late_opening"]
  }),
  makePlace({
    id: "osm-node-3805462228",
    name: "Restaurant Saf Saf",
    latitude: 43.297412,
    longitude: 5.379323,
    neighborhood: "Cours Julien",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-way-317206803",
    name: "Restaurant scolaire de l'ORT",
    latitude: 43.278246,
    longitude: 5.410071,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["good_for_groups"]
  }),
  makePlace({
    id: "osm-node-6627597553",
    name: "Restaurant Thien Huong",
    latitude: 43.308377,
    longitude: 5.437036,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["vegetarian_options"]
  }),
  makePlace({
    id: "osm-way-68942938",
    name: "Restaurant universitaire",
    latitude: 43.306373,
    longitude: 5.377997,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-way-67703874",
    name: "Restaurant Universitaire Canebiere",
    latitude: 43.297949,
    longitude: 5.383577,
    neighborhood: "Cours Julien",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-13648261715",
    name: "Restaurant Universitaire Ecole Centrale",
    latitude: 43.34266,
    longitude: 5.438322,
    neighborhood: "Marseille",
    address: "38 Rue Frederic Joliot Curie, Marseille",
    category: "Restaurant",
    criteria: ["vegetarian_options","allows_cb_no_minimum"]
  }),
  makePlace({
    id: "osm-way-279254313",
    name: "Restaurant universitaire Galinat",
    latitude: 43.287117,
    longitude: 5.399536,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-way-49326553",
    name: "Restaurant Universitaire Saint-Jerome",
    latitude: 43.336633,
    longitude: 5.409344,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["has_terrace","wheelchair_accessible","vegetarian_options","allows_cb_no_minimum"]
  }),
  makePlace({
    id: "osm-way-153572973",
    name: "Restaurant-bar la Gouffone",
    latitude: 43.246761,
    longitude: 5.42442,
    neighborhood: "Littoral Sud",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-4405959278",
    name: "Restaurant-Snack Anatolie",
    latitude: 43.299201,
    longitude: 5.384819,
    neighborhood: "Longchamp",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["good_for_groups"]
  }),
  makePlace({
    id: "osm-node-2288804745",
    name: "Resto Le Vallier",
    latitude: 43.300444,
    longitude: 5.401414,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Cafe",
    criteria: []
  }),
  makePlace({
    id: "osm-node-13105826234",
    name: "Reverso",
    latitude: 43.307263,
    longitude: 5.363943,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Bar",
    criteria: []
  }),
  makePlace({
    id: "osm-node-10031318583",
    name: "Rhum en nou !",
    latitude: 43.288031,
    longitude: 5.394502,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-2360846594",
    name: "Rice Street Vieux Port",
    latitude: 43.292785,
    longitude: 5.372502,
    neighborhood: "Noailles",
    address: "20 Rue de la Paix Marcel Paul, Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-10942364305",
    name: "Richard's Cafe",
    latitude: 43.363099,
    longitude: 5.346986,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Cafe",
    criteria: []
  }),
  makePlace({
    id: "osm-node-2010715854",
    name: "Rio Pizza",
    latitude: 43.294165,
    longitude: 5.385708,
    neighborhood: "Cours Julien",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["has_terrace","wheelchair_accessible","good_for_groups"]
  }),
  makePlace({
    id: "osm-node-12806292301",
    name: "Ripaille",
    instagram_handle: "ripaille_marseille",
    latitude: 43.300089,
    longitude: 5.369656,
    neighborhood: "Le Panier",
    address: "56 Rue de Lorette, Marseille",
    category: "Restaurant",
    criteria: ["late_opening"]
  }),
  makePlace({
    id: "osm-node-12953601201",
    name: "Risette",
    latitude: 43.29465,
    longitude: 5.376827,
    neighborhood: "Noailles",
    address: "37 Rue Vacon, Marseille",
    category: "Cafe",
    criteria: []
  }),
  makePlace({
    id: "osm-node-12141643448",
    name: "Risotto'go",
    latitude: 43.283029,
    longitude: 5.381048,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["vegetarian_options"]
  }),
  makePlace({
    id: "osm-node-3172251361",
    name: "Ristorante Del Arte",
    latitude: 43.294573,
    longitude: 5.374834,
    neighborhood: "Noailles",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["has_terrace","late_opening","wheelchair_accessible","allows_cb_no_minimum"]
  }),
  makePlace({
    id: "osm-node-13524223155",
    name: "Ristoriana",
    latitude: 43.296736,
    longitude: 5.367157,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-3442822194",
    name: "Ritheje",
    latitude: 43.303347,
    longitude: 5.4035,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["good_for_groups"]
  }),
  makePlace({
    id: "osm-node-7367552511",
    name: "Rivas et fils",
    latitude: 43.325236,
    longitude: 5.454595,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-8888046311",
    name: "Rive Gauche",
    latitude: 43.279081,
    longitude: 5.4136,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-12802866754",
    name: "Riz d'or",
    latitude: 43.30365,
    longitude: 5.397708,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-10894991928",
    name: "Robato",
    latitude: 43.299213,
    longitude: 5.384402,
    neighborhood: "Longchamp",
    address: "63 Allee Leon Gambetta, Marseille",
    category: "Restaurant",
    criteria: ["late_opening"]
  }),
  makePlace({
    id: "osm-node-5193941531",
    name: "Rodizio Brazil",
    latitude: 43.297252,
    longitude: 5.37356,
    neighborhood: "Noailles",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["has_terrace"]
  }),
  makePlace({
    id: "osm-node-13457623828",
    name: "Roha",
    latitude: 43.281844,
    longitude: 5.385355,
    neighborhood: "Marseille",
    address: "5 Rue Pierre Dupre, Marseille",
    category: "Restaurant",
    criteria: ["late_opening","vegetarian_options"]
  }),
  makePlace({
    id: "osm-node-13871050907",
    name: "Roj Cay Salonu Roj Aras",
    latitude: 43.300115,
    longitude: 5.383025,
    neighborhood: "Longchamp",
    address: "Marseille",
    category: "Cafe",
    criteria: []
  }),
  makePlace({
    id: "osm-node-9332083556",
    name: "Roma Pizza",
    latitude: 43.255963,
    longitude: 5.382516,
    neighborhood: "Littoral Sud",
    address: "159 Avenue Clot-Bey, Marseille",
    category: "Restaurant",
    criteria: ["late_opening"]
  }),
  makePlace({
    id: "osm-node-7414618360",
    name: "Romy",
    latitude: 43.291315,
    longitude: 5.385534,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-way-153573525",
    name: "Ronde des Pains",
    latitude: 43.247625,
    longitude: 5.400667,
    neighborhood: "Littoral Sud",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: ["good_for_groups"]
  }),
  makePlace({
    id: "osm-node-10964039889",
    name: "Ronde des Pains",
    latitude: 43.281159,
    longitude: 5.389091,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-12170662593",
    name: "Rotisserie Cesar",
    latitude: 43.256566,
    longitude: 5.393791,
    neighborhood: "Littoral Sud",
    address: "3 Boulevard Sainte-Anne, Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-7749927866",
    name: "Rotisserie des camoins",
    latitude: 43.297584,
    longitude: 5.495893,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-5130614320",
    name: "Rotisserie Epicerie fine",
    latitude: 43.347297,
    longitude: 5.451077,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-9057006343",
    name: "Rotisserie Snack",
    latitude: 43.30868,
    longitude: 5.380589,
    neighborhood: "Longchamp",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["good_for_groups"]
  }),
  makePlace({
    id: "osm-node-6542584237",
    name: "Rotonde Bar",
    latitude: 43.308295,
    longitude: 5.436388,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Cafe",
    criteria: ["has_terrace"]
  }),
  makePlace({
    id: "osm-node-2822279926",
    name: "Rouet Primeur",
    latitude: 43.278875,
    longitude: 5.391827,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-6653382186",
    name: "Rowing Club",
    latitude: 43.293051,
    longitude: 5.361117,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Bar",
    criteria: []
  }),
  makePlace({
    id: "osm-node-4182817409",
    name: "Royal Asia",
    latitude: 43.315314,
    longitude: 5.38406,
    neighborhood: "Belle de Mai",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-9332853499",
    name: "Royal Food",
    latitude: 43.268163,
    longitude: 5.406896,
    neighborhood: "Littoral Sud",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["late_opening","good_for_groups"]
  }),
  makePlace({
    id: "osm-node-4393393263",
    name: "Royal Grill",
    latitude: 43.306579,
    longitude: 5.373664,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["good_for_groups"]
  }),
  makePlace({
    id: "osm-node-7829025636",
    name: "Royaume de la Chantilly",
    latitude: 43.298622,
    longitude: 5.397777,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-8759689241",
    name: "Rs Night Shop",
    latitude: 43.341155,
    longitude: 5.351646,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-3920320230",
    name: "Rustik",
    latitude: 43.288731,
    longitude: 5.430273,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-11055602105",
    name: "Sa mesa sarda",
    latitude: 43.282761,
    longitude: 5.433187,
    neighborhood: "Marseille",
    address: "1 Boulevard Queirel, Marseille",
    category: "Restaurant",
    criteria: ["vegetarian_options"]
  }),
  makePlace({
    id: "osm-node-12919175201",
    name: "Safia cuisine de Yema",
    latitude: 43.295363,
    longitude: 5.377686,
    neighborhood: "Noailles",
    address: "13 Rue Rouget de Lisle, Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-9054514174",
    name: "Sagali",
    latitude: 43.310288,
    longitude: 5.378849,
    neighborhood: "Longchamp",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-12117424421",
    name: "Sahmaran",
    latitude: 43.300363,
    longitude: 5.38189,
    neighborhood: "Longchamp",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["has_terrace"]
  }),
  makePlace({
    id: "osm-node-8344724056",
    name: "Saint Ga",
    latitude: 43.324345,
    longitude: 5.38243,
    neighborhood: "Belle de Mai",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-1126788250",
    name: "Sake",
    latitude: 43.289871,
    longitude: 5.382254,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["vegetarian_options"]
  }),
  makePlace({
    id: "osm-node-5119972388",
    name: "Saladin",
    latitude: 43.295806,
    longitude: 5.379393,
    neighborhood: "Cours Julien",
    address: "Rue Longue des Capucins, Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-8776003847",
    name: "Saladin",
    latitude: 43.297541,
    longitude: 5.381441,
    neighborhood: "Cours Julien",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-3326605665",
    name: "Salah",
    latitude: 43.353573,
    longitude: 5.365723,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-way-112822276",
    name: "Salah Thai",
    latitude: 43.348191,
    longitude: 5.447875,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["vegetarian_options"]
  }),
  makePlace({
    id: "osm-node-11389672569",
    name: "Salon de the - cafe - Canebiere",
    latitude: 43.298309,
    longitude: 5.38218,
    neighborhood: "Longchamp",
    address: "Marseille",
    category: "Cafe",
    criteria: ["has_terrace"]
  }),
  makePlace({
    id: "osm-node-2511318311",
    name: "Salon de the / grillades / glacier / sandwicherie Fantasia",
    latitude: 43.296588,
    longitude: 5.379849,
    neighborhood: "Cours Julien",
    address: "5 Place du Marche des Capucins, Marseille",
    category: "Cafe",
    criteria: []
  }),
  makePlace({
    id: "osm-node-10315214746",
    name: "Salon de The de la Gare Saint-Charles",
    latitude: 43.301937,
    longitude: 5.382419,
    neighborhood: "Longchamp",
    address: "Marseille",
    category: "Bar",
    criteria: []
  }),
  makePlace({
    id: "osm-node-4430423950",
    name: "Salon de the Les deux freres",
    latitude: 43.306491,
    longitude: 5.382784,
    neighborhood: "Belle de Mai",
    address: "Marseille",
    category: "Cafe",
    criteria: []
  }),
  makePlace({
    id: "osm-node-4430423949",
    name: "salon de the oriental",
    latitude: 43.306213,
    longitude: 5.383183,
    neighborhood: "Belle de Mai",
    address: "Marseille",
    category: "Cafe",
    criteria: []
  }),
  makePlace({
    id: "osm-node-2511318273",
    name: "Salon de the oriental",
    latitude: 43.296566,
    longitude: 5.379518,
    neighborhood: "Cours Julien",
    address: "1 Place du Marche des Capucins, Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-4430509428",
    name: "salon de the Sidi Bou",
    latitude: 43.308166,
    longitude: 5.38149,
    neighborhood: "Longchamp",
    address: "Marseille",
    category: "Bar",
    criteria: []
  }),
  makePlace({
    id: "osm-node-8506460929",
    name: "Sambuc",
    latitude: 43.292963,
    longitude: 5.375167,
    neighborhood: "Noailles",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: ["wheelchair_accessible"]
  }),
  makePlace({
    id: "osm-node-3992084776",
    name: "Sandwicherie",
    latitude: 43.283616,
    longitude: 5.434657,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["good_for_groups"]
  }),
  makePlace({
    id: "osm-way-502866313",
    name: "Sandwichs",
    latitude: 43.289803,
    longitude: 5.366543,
    neighborhood: "Saint-Victor",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["good_for_groups"]
  }),
  makePlace({
    id: "osm-node-1941646766",
    name: "Sanremo",
    latitude: 43.294491,
    longitude: 5.37484,
    neighborhood: "Noailles",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-12802803971",
    name: "Santa Giulia",
    latitude: 43.305152,
    longitude: 5.399206,
    neighborhood: "Belle de Mai",
    address: "74 Avenue des Chartreux, Marseille",
    category: "Cafe",
    criteria: []
  }),
  makePlace({
    id: "osm-node-11377792668",
    name: "Santa Giulia",
    latitude: 43.246543,
    longitude: 5.4029,
    neighborhood: "Littoral Sud",
    address: "85 Rue Emile Zola, Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-10048958017",
    name: "Santa Gusto",
    latitude: 43.297391,
    longitude: 5.36527,
    neighborhood: "Le Panier",
    address: "4 Rue Saint-Thome, Marseille",
    category: "Restaurant",
    criteria: ["good_for_groups"]
  }),
  makePlace({
    id: "osm-node-5148076777",
    name: "Santa Gusto",
    latitude: 43.273474,
    longitude: 5.391197,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-7366886390",
    name: "Santa Pizza",
    latitude: 43.291342,
    longitude: 5.369635,
    neighborhood: "Saint-Victor",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["late_opening","vegetarian_options","allows_cb_no_minimum","good_for_groups"]
  }),
  makePlace({
    id: "osm-node-6737202812",
    name: "Saona Beach",
    latitude: 43.244521,
    longitude: 5.371895,
    neighborhood: "Littoral Sud",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["has_terrace"]
  }),
  makePlace({
    id: "osm-node-13110772701",
    name: "Saray grill",
    latitude: 43.299663,
    longitude: 5.380605,
    neighborhood: "Longchamp",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-9054262419",
    name: "sas Atlas",
    latitude: 43.312105,
    longitude: 5.377025,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-13871064307",
    name: "SASA alimentation",
    latitude: 43.300078,
    longitude: 5.379657,
    neighborhood: "Longchamp",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-6627597568",
    name: "Sassoun",
    latitude: 43.308198,
    longitude: 5.435891,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-5566947472",
    name: "Saveur du Paradis",
    latitude: 43.272895,
    longitude: 5.410576,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-4713612574",
    name: "Saveurs de Dong",
    latitude: 43.300011,
    longitude: 5.380958,
    neighborhood: "Longchamp",
    address: "Marseille",
    category: "Bar",
    criteria: []
  }),
  makePlace({
    id: "osm-node-3822613295",
    name: "Saveurs de Provence",
    latitude: 43.347215,
    longitude: 5.35924,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-1879018704",
    name: "Saveurs Provencales",
    latitude: 43.295536,
    longitude: 5.390982,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-1671296175",
    name: "Scoubidou",
    latitude: 43.278763,
    longitude: 5.38285,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-3442821896",
    name: "Seggio Primeur",
    latitude: 43.303187,
    longitude: 5.402423,
    neighborhood: "Marseille",
    address: "Boulevard de la Blancarde, Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-11971481432",
    name: "Seik",
    latitude: 43.292692,
    longitude: 5.372082,
    neighborhood: "Noailles",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-5537877192",
    name: "Seka",
    latitude: 43.300615,
    longitude: 5.375333,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-11389428032",
    name: "Senju sushi",
    latitude: 43.286885,
    longitude: 5.390125,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-11092933312",
    name: "Seoul Mart",
    latitude: 43.286863,
    longitude: 5.384114,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-8866911515",
    name: "Sepia",
    latitude: 43.289463,
    longitude: 5.368603,
    neighborhood: "Saint-Victor",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-9276128990",
    name: "Set",
    latitude: 43.262291,
    longitude: 5.394515,
    neighborhood: "Littoral Sud",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["has_terrace"]
  }),
  makePlace({
    id: "osm-node-12117342499",
    name: "Seven Days",
    latitude: 43.297989,
    longitude: 5.38078,
    neighborhood: "Cours Julien",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-4585327357",
    name: "Seven Set Park",
    latitude: 43.301925,
    longitude: 5.492851,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-5310125722",
    name: "Shanghai Kitchen",
    latitude: 43.293243,
    longitude: 5.374241,
    neighborhood: "Noailles",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-9697856682",
    name: "Shawarmax",
    latitude: 43.296985,
    longitude: 5.36758,
    neighborhood: "Le Panier",
    address: "32 Rue Caisserie, Marseille",
    category: "Restaurant",
    criteria: ["good_for_groups"]
  }),
  makePlace({
    id: "osm-node-12833230044",
    name: "Shawarmax",
    latitude: 43.306128,
    longitude: 5.371559,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["good_for_groups"]
  }),
  makePlace({
    id: "osm-node-11583992289",
    name: "Shop' n Food",
    latitude: 43.282221,
    longitude: 5.40347,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-3948064090",
    name: "Shopping Alimentaire",
    latitude: 43.296022,
    longitude: 5.458432,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-5203786351",
    name: "Shuriken Sushi",
    latitude: 43.289369,
    longitude: 5.381963,
    neighborhood: "Marseille",
    address: "137 Rue de Rome, Marseille",
    category: "Restaurant",
    criteria: ["late_opening","allows_cb_no_minimum"]
  }),
  makePlace({
    id: "osm-node-4535075890",
    name: "Si Par Azar",
    latitude: 43.293658,
    longitude: 5.384638,
    neighborhood: "Cours Julien",
    address: "Marseille",
    category: "Cafe",
    criteria: ["late_opening"]
  }),
  makePlace({
    id: "osm-node-11122596289",
    name: "Sidi Bou Said",
    latitude: 43.294259,
    longitude: 5.375154,
    neighborhood: "Noailles",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-2012646264",
    name: "Signature",
    latitude: 43.276498,
    longitude: 5.394324,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-11115998765",
    name: "Silk",
    latitude: 43.29473,
    longitude: 5.37657,
    neighborhood: "Noailles",
    address: "54 Rue Vacon, Marseille",
    category: "Cafe",
    criteria: []
  }),
  makePlace({
    id: "osm-node-13051911301",
    name: "Simone",
    latitude: 43.294701,
    longitude: 5.387123,
    neighborhood: "Cours Julien",
    address: "Marseille",
    category: "Bar",
    criteria: []
  }),
  makePlace({
    id: "osm-node-8974801017",
    name: "Simonelli",
    latitude: 43.293077,
    longitude: 5.37421,
    neighborhood: "Noailles",
    address: "Marseille",
    category: "Cafe",
    criteria: []
  }),
  makePlace({
    id: "osm-node-1910580775",
    name: "Simply food",
    latitude: 43.290259,
    longitude: 5.378294,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-2261440016",
    name: "Simply Food",
    latitude: 43.308761,
    longitude: 5.367387,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["good_for_groups"]
  }),
  makePlace({
    id: "osm-node-3634336622",
    name: "Sizun",
    latitude: 43.363543,
    longitude: 5.346742,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Cafe",
    criteria: []
  }),
  makePlace({
    id: "osm-node-12609792328",
    name: "SK",
    latitude: 43.28537,
    longitude: 5.395192,
    neighborhood: "Marseille",
    address: "4 Rue Brandis, Marseille",
    category: "Restaurant",
    criteria: ["good_for_groups"]
  }),
  makePlace({
    id: "osm-node-13484117293",
    name: "Smart",
    latitude: 43.305663,
    longitude: 5.384104,
    neighborhood: "Belle de Mai",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-12135858526",
    name: "Snach Champion",
    latitude: 43.299747,
    longitude: 5.377855,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["good_for_groups"]
  }),
  makePlace({
    id: "osm-node-4932256306",
    name: "Snack",
    latitude: 43.302253,
    longitude: 5.379443,
    neighborhood: "Longchamp",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["good_for_groups"]
  }),
  makePlace({
    id: "osm-way-500983567",
    name: "Snack",
    latitude: 43.304431,
    longitude: 5.378892,
    neighborhood: "Longchamp",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["good_for_groups"]
  }),
  makePlace({
    id: "osm-way-69640262",
    name: "Snack bar Maritime",
    latitude: 43.354643,
    longitude: 5.333653,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-6434134203",
    name: "Snack Bar Tabac La Source",
    latitude: 43.299793,
    longitude: 5.501571,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Cafe",
    criteria: []
  }),
  makePlace({
    id: "osm-node-8763075058",
    name: "Snack chez Bachir",
    latitude: 43.330847,
    longitude: 5.404909,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["good_for_groups"]
  }),
  makePlace({
    id: "osm-way-387892846",
    name: "Snack Chez Napo",
    latitude: 43.272869,
    longitude: 5.391451,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["has_terrace","good_for_groups"]
  }),
  makePlace({
    id: "osm-way-120054412",
    name: "Snack de l'Obelisque",
    latitude: 43.25089,
    longitude: 5.403971,
    neighborhood: "Littoral Sud",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["good_for_groups"]
  }),
  makePlace({
    id: "osm-node-3326605656",
    name: "Snack de la Place",
    latitude: 43.353485,
    longitude: 5.365668,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Cafe",
    criteria: []
  }),
  makePlace({
    id: "osm-node-3932162122",
    name: "Snack de La Pomme",
    latitude: 43.290207,
    longitude: 5.441541,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-2028106647",
    name: "Snack des Lilas",
    latitude: 43.293851,
    longitude: 5.386085,
    neighborhood: "Cours Julien",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["good_for_groups"]
  }),
  makePlace({
    id: "osm-node-1961504677",
    name: "Snack du Lycee",
    latitude: 43.275012,
    longitude: 5.425314,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["has_terrace","good_for_groups"]
  }),
  makePlace({
    id: "osm-node-10315214749",
    name: "Snack du Ttesor",
    latitude: 43.297948,
    longitude: 5.365921,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["good_for_groups"]
  }),
  makePlace({
    id: "osm-node-3830903288",
    name: "Snack El Baraka",
    latitude: 43.33727,
    longitude: 5.362629,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["good_for_groups"]
  }),
  makePlace({
    id: "osm-node-2120589495",
    name: "Snack El Shourouk",
    latitude: 43.302935,
    longitude: 5.365907,
    neighborhood: "Le Panier",
    address: "32 Mazenod, Marseille",
    category: "Restaurant",
    criteria: ["late_opening","good_for_groups"]
  }),
  makePlace({
    id: "osm-node-5743534864",
    name: "Snack express",
    latitude: 43.296233,
    longitude: 5.376214,
    neighborhood: "Noailles",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["good_for_groups"]
  }),
  makePlace({
    id: "osm-node-1965153165",
    name: "Snack Gimy",
    latitude: 43.276697,
    longitude: 5.419254,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-5265382922",
    name: "Snack Hanane",
    latitude: 43.299595,
    longitude: 5.373569,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["vegetarian_options","good_for_groups"]
  }),
  makePlace({
    id: "osm-node-8071999798",
    name: "Snack Jeanne d'Arc",
    latitude: 43.293956,
    longitude: 5.400659,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["good_for_groups"]
  }),
  makePlace({
    id: "osm-node-7203966593",
    name: "Snack Kebab",
    latitude: 43.359374,
    longitude: 5.332601,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["good_for_groups"]
  }),
  makePlace({
    id: "osm-node-4713607736",
    name: "Snack L'escale",
    latitude: 43.30017,
    longitude: 5.380531,
    neighborhood: "Longchamp",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["good_for_groups"]
  }),
  makePlace({
    id: "osm-node-10218227420",
    name: "Snack l'orient ville",
    latitude: 43.31937,
    longitude: 5.369547,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["good_for_groups"]
  }),
  makePlace({
    id: "osm-way-943159254",
    name: "Snack La Kabilie",
    latitude: 43.291887,
    longitude: 5.402291,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["good_for_groups"]
  }),
  makePlace({
    id: "osm-node-12800806712",
    name: "Snack La Plage",
    latitude: 43.264055,
    longitude: 5.374001,
    neighborhood: "Littoral Sud",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["has_terrace","good_for_groups"]
  }),
  makePlace({
    id: "osm-way-112849951",
    name: "Snack Laveran",
    latitude: 43.326405,
    longitude: 5.413443,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["good_for_groups"]
  }),
  makePlace({
    id: "osm-node-4586842536",
    name: "Snack Le Bowl",
    latitude: 43.251881,
    longitude: 5.375081,
    neighborhood: "Littoral Sud",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["good_for_groups"]
  }),
  makePlace({
    id: "osm-node-9494630546",
    name: "Snack Le Brix",
    latitude: 43.262612,
    longitude: 5.404785,
    neighborhood: "Littoral Sud",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["has_terrace","good_for_groups"]
  }),
  makePlace({
    id: "osm-node-2031102976",
    name: "Snack Les 2 soeurs",
    latitude: 43.305532,
    longitude: 5.383856,
    neighborhood: "Belle de Mai",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["good_for_groups"]
  }),
  makePlace({
    id: "osm-node-3779480026",
    name: "Snack Nassou",
    latitude: 43.331338,
    longitude: 5.427779,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["good_for_groups"]
  }),
  makePlace({
    id: "osm-node-3821145293",
    name: "Snack Pizzeria L'Arche",
    latitude: 43.348415,
    longitude: 5.359093,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-2375838294",
    name: "Snack Pizzeria Notre-Dame",
    latitude: 43.291991,
    longitude: 5.384607,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-4379191637",
    name: "Snack Pizzeria Rama",
    latitude: 43.324106,
    longitude: 5.403652,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-way-112851781",
    name: "Snack Regal Food",
    latitude: 43.322831,
    longitude: 5.412484,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-4713564666",
    name: "Snack Seksabil",
    latitude: 43.298354,
    longitude: 5.380759,
    neighborhood: "Longchamp",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["good_for_groups"]
  }),
  makePlace({
    id: "osm-node-8509749289",
    name: "So Yummy",
    latitude: 43.295604,
    longitude: 5.382274,
    neighborhood: "Cours Julien",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["good_for_groups"]
  }),
  makePlace({
    id: "osm-node-2109207081",
    name: "So... Marseille",
    latitude: 43.29556,
    longitude: 5.365303,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-10631223407",
    name: "So'",
    latitude: 43.32717,
    longitude: 5.363827,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["has_terrace"]
  }),
  makePlace({
    id: "osm-node-2024973914",
    name: "Soifferie",
    latitude: 43.292364,
    longitude: 5.383057,
    neighborhood: "Cours Julien",
    address: "Marseille",
    category: "Bar",
    criteria: []
  }),
  makePlace({
    id: "osm-node-2259964682",
    name: "Soir d'Asie",
    latitude: 43.303749,
    longitude: 5.367705,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-451721413",
    name: "Soleil presse",
    latitude: 43.299692,
    longitude: 5.373997,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["wheelchair_accessible"]
  }),
  makePlace({
    id: "osm-node-5890723099",
    name: "Soma",
    latitude: 43.293785,
    longitude: 5.383628,
    neighborhood: "Cours Julien",
    address: "Marseille",
    category: "Bar",
    criteria: ["has_terrace"]
  }),
  makePlace({
    id: "osm-node-9578985829",
    name: "Son-Thuy",
    latitude: 43.283404,
    longitude: 5.349994,
    neighborhood: "Malmousque",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-8475740475",
    name: "Soul",
    instagram_handle: "soul_marseille",
    latitude: 43.297207,
    longitude: 5.382355,
    neighborhood: "Cours Julien",
    address: "12 Rue du Theatre-Francais, Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-12141648978",
    name: "Sous le Figuier",
    latitude: 43.27854,
    longitude: 5.380702,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["late_opening"]
  }),
  makePlace({
    id: "osm-node-6118499609",
    name: "Spar",
    latitude: 43.298688,
    longitude: 5.403872,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: ["late_opening","wheelchair_accessible"]
  }),
  makePlace({
    id: "osm-node-308239320",
    name: "Spar",
    latitude: 43.24738,
    longitude: 5.401083,
    neighborhood: "Littoral Sud",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-997670266",
    name: "Spar",
    latitude: 43.293364,
    longitude: 5.374667,
    neighborhood: "Noailles",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-1822938983",
    name: "Spar",
    latitude: 43.285274,
    longitude: 5.360152,
    neighborhood: "Saint-Victor",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-1936436849",
    name: "Spar",
    latitude: 43.318121,
    longitude: 5.406812,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-2028322671",
    name: "Spar",
    latitude: 43.293764,
    longitude: 5.385766,
    neighborhood: "Cours Julien",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-2291950375",
    name: "Spar",
    latitude: 43.363802,
    longitude: 5.309889,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-2425979807",
    name: "Spar",
    latitude: 43.289001,
    longitude: 5.366862,
    neighborhood: "Saint-Victor",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-2608216161",
    name: "Spar",
    latitude: 43.287273,
    longitude: 5.389493,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-3823091151",
    name: "Spar",
    latitude: 43.343632,
    longitude: 5.359347,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-6829712712",
    name: "Spar",
    latitude: 43.299866,
    longitude: 5.385751,
    neighborhood: "Longchamp",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-7463171794",
    name: "Spar",
    latitude: 43.292924,
    longitude: 5.408678,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-8867735508",
    name: "Spar",
    latitude: 43.329287,
    longitude: 5.419173,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-10876292791",
    name: "Spar",
    latitude: 43.290898,
    longitude: 5.371779,
    neighborhood: "Saint-Victor",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-way-153559837",
    name: "Spar",
    latitude: 43.269469,
    longitude: 5.40665,
    neighborhood: "Littoral Sud",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-13519197301",
    name: "Sparacello",
    instagram_handle: "sparacellotrattoria",
    latitude: 43.294227,
    longitude: 5.376796,
    neighborhood: "Noailles",
    address: "14 Rue du Jeune Anacharsis, Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-11584788047",
    name: "Spartiates Cafe",
    latitude: 43.281418,
    longitude: 5.4018,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Cafe",
    criteria: []
  }),
  makePlace({
    id: "osm-node-9697141286",
    name: "Splendido",
    latitude: 43.297631,
    longitude: 5.373298,
    neighborhood: "Noailles",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["vegetarian_options"]
  }),
  makePlace({
    id: "osm-node-4315409676",
    name: "Spok",
    latitude: 43.29286,
    longitude: 5.376182,
    neighborhood: "Noailles",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["has_terrace"]
  }),
  makePlace({
    id: "osm-node-5405765498",
    name: "Spok",
    latitude: 43.352194,
    longitude: 5.339075,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["has_terrace","good_for_groups"]
  }),
  makePlace({
    id: "osm-node-8866958471",
    name: "Spok (Herriot)",
    latitude: 43.272031,
    longitude: 5.387131,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-8866939975",
    name: "Spok (La Timone)",
    latitude: 43.289987,
    longitude: 5.39793,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-8866906266",
    name: "Spok (Notre Dame)",
    latitude: 43.286908,
    longitude: 5.374026,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-1941593657",
    name: "spok.",
    latitude: 43.299157,
    longitude: 5.37201,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-11074965003",
    name: "SportBeach",
    latitude: 43.255779,
    longitude: 5.375661,
    neighborhood: "Littoral Sud",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["has_terrace"]
  }),
  makePlace({
    id: "osm-node-9332853502",
    name: "Sporting",
    latitude: 43.265405,
    longitude: 5.408729,
    neighborhood: "Littoral Sud",
    address: "Marseille",
    category: "Bar",
    criteria: []
  }),
  makePlace({
    id: "osm-node-5265817308",
    name: "Starbucks",
    latitude: 43.295062,
    longitude: 5.477549,
    neighborhood: "Marseille",
    address: "Centre Commercial la Valentine, Route de la Sabliere, Marseille",
    category: "Cafe",
    criteria: ["has_wifi","laptop_friendly"]
  }),
  makePlace({
    id: "osm-node-11596108958",
    name: "Starbucks",
    latitude: 43.306333,
    longitude: 5.365313,
    neighborhood: "Le Panier",
    address: "Quai du Maroc, Marseille",
    category: "Cafe",
    criteria: ["wheelchair_accessible"]
  }),
  makePlace({
    id: "osm-node-5193941530",
    name: "Starbucks",
    latitude: 43.297646,
    longitude: 5.372802,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Cafe",
    criteria: ["has_terrace"]
  }),
  makePlace({
    id: "osm-node-3634336620",
    name: "Starbucks",
    latitude: 43.363336,
    longitude: 5.34723,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Cafe",
    criteria: []
  }),
  makePlace({
    id: "osm-node-4272918076",
    name: "Starbucks",
    latitude: 43.291941,
    longitude: 5.379561,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Cafe",
    criteria: []
  }),
  makePlace({
    id: "osm-way-417097044",
    name: "Starbucks",
    latitude: 43.302761,
    longitude: 5.379892,
    neighborhood: "Longchamp",
    address: "Marseille",
    category: "Cafe",
    criteria: []
  }),
  makePlace({
    id: "osm-node-4172951386",
    name: "Station Bar",
    latitude: 43.283326,
    longitude: 5.397192,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Cafe",
    criteria: []
  }),
  makePlace({
    id: "osm-node-2425875295",
    name: "Steak House",
    latitude: 43.264555,
    longitude: 5.391916,
    neighborhood: "Littoral Sud",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-9207708743",
    name: "Steak Lounge",
    latitude: 43.280981,
    longitude: 5.39244,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-1355128435",
    name: "Steak n Shake",
    latitude: 43.292987,
    longitude: 5.370682,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["has_terrace","good_for_groups"]
  }),
  makePlace({
    id: "osm-node-2304264683",
    name: "Steak n' Shake",
    latitude: 43.255035,
    longitude: 5.375996,
    neighborhood: "Littoral Sud",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["has_terrace","vegetarian_options","good_for_groups"]
  }),
  makePlace({
    id: "osm-node-2036135667",
    name: "Steak Paradis",
    latitude: 43.293682,
    longitude: 5.385887,
    neighborhood: "Cours Julien",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-7829025632",
    name: "Storia di Grano",
    latitude: 43.298626,
    longitude: 5.397992,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-2028106642",
    name: "Street Bangcook",
    latitude: 43.295444,
    longitude: 5.382846,
    neighborhood: "Cours Julien",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["vegetarian_options","good_for_groups"]
  }),
  makePlace({
    id: "osm-node-6700838091",
    name: "Street Pizz'",
    latitude: 43.288713,
    longitude: 5.45555,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["covered_outdoor","late_opening","good_for_groups"]
  }),
  makePlace({
    id: "osm-node-10896374244",
    name: "Strega",
    latitude: 43.29993,
    longitude: 5.368875,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-8664691748",
    name: "Studio Burger",
    latitude: 43.29925,
    longitude: 5.430874,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["good_for_groups"]
  }),
  makePlace({
    id: "osm-node-5340051318",
    name: "Suandshi",
    latitude: 43.29504,
    longitude: 5.489142,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["has_terrace","good_for_groups"]
  }),
  makePlace({
    id: "osm-node-3535291155",
    name: "SuandShi",
    latitude: 43.302774,
    longitude: 5.397037,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["late_opening"]
  }),
  makePlace({
    id: "osm-node-1628125189",
    name: "Subway",
    latitude: 43.316803,
    longitude: 5.404779,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["late_opening","good_for_groups"]
  }),
  makePlace({
    id: "osm-node-3943757691",
    name: "Subway",
    latitude: 43.295583,
    longitude: 5.443598,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["good_for_groups"]
  }),
  makePlace({
    id: "osm-node-4244912186",
    name: "Subway",
    latitude: 43.256738,
    longitude: 5.420087,
    neighborhood: "Littoral Sud",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["has_terrace","late_opening","good_for_groups"]
  }),
  makePlace({
    id: "osm-node-6132737092",
    name: "Subway",
    latitude: 43.30212,
    longitude: 5.397181,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["late_opening","good_for_groups"]
  }),
  makePlace({
    id: "osm-node-12787830101",
    name: "Subway",
    latitude: 43.286136,
    longitude: 5.383166,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["good_for_groups"]
  }),
  makePlace({
    id: "osm-node-9885786537",
    name: "Succulentes cafe cactus",
    latitude: 43.285401,
    longitude: 5.377173,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Cafe",
    criteria: ["has_terrace"]
  }),
  makePlace({
    id: "osm-node-9668050173",
    name: "Suchic",
    latitude: 43.286616,
    longitude: 5.382915,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["late_opening"]
  }),
  makePlace({
    id: "osm-node-7110830786",
    name: "Sud Pizza",
    latitude: 43.30069,
    longitude: 5.366826,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["late_opening"]
  }),
  makePlace({
    id: "osm-node-6926372287",
    name: "SUDSUDEST",
    latitude: 43.289993,
    longitude: 5.386908,
    neighborhood: "Marseille",
    address: "59 Rue de Lodi, Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-5405765487",
    name: "Sumo Suhi Bar",
    latitude: 43.358013,
    longitude: 5.338032,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["late_opening"]
  }),
  makePlace({
    id: "osm-node-1861599252",
    name: "Sunlight Social Club",
    latitude: 43.281905,
    longitude: 5.349375,
    neighborhood: "Malmousque",
    address: "2 Traverse de la Batterie de Malmousque, Marseille",
    category: "Bar",
    criteria: []
  }),
  makePlace({
    id: "osm-node-7881080292",
    name: "Sunset",
    latitude: 43.275553,
    longitude: 5.359984,
    neighborhood: "Malmousque",
    address: "Marseille",
    category: "Bar",
    criteria: ["has_terrace"]
  }),
  makePlace({
    id: "osm-node-1594619880",
    name: "Supeco",
    latitude: 43.335835,
    longitude: 5.433417,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-way-159863961",
    name: "Supeco",
    latitude: 43.357064,
    longitude: 5.35687,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-way-738223360",
    name: "Supeco",
    latitude: 43.314958,
    longitude: 5.385491,
    neighborhood: "Belle de Mai",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-2046208759",
    name: "Super Boutique",
    latitude: 43.29383,
    longitude: 5.385795,
    neighborhood: "Cours Julien",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: ["good_for_groups"]
  }),
  makePlace({
    id: "osm-node-9750214038",
    name: "Super Cafoutch",
    latitude: 43.29849,
    longitude: 5.371616,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-4030000201",
    name: "Super K",
    latitude: 43.268395,
    longitude: 5.419804,
    neighborhood: "Littoral Sud",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-1932131603",
    name: "Super U",
    latitude: 43.292029,
    longitude: 5.39342,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: ["wheelchair_accessible"]
  }),
  makePlace({
    id: "osm-node-1472901345",
    name: "Super U",
    latitude: 43.287685,
    longitude: 5.36341,
    neighborhood: "Saint-Victor",
    address: "6 Rue Taddei, Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-2062986840",
    name: "Super U",
    latitude: 43.293814,
    longitude: 5.40206,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-way-154588735",
    name: "Super U",
    latitude: 43.278455,
    longitude: 5.411636,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-7833279028",
    name: "Super Viande",
    latitude: 43.268982,
    longitude: 5.419829,
    neighborhood: "Littoral Sud",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-11533986372",
    name: "Supercools",
    latitude: 43.295699,
    longitude: 5.382098,
    neighborhood: "Cours Julien",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: ["good_for_groups"]
  }),
  makePlace({
    id: "osm-node-9506012624",
    name: "Superette",
    latitude: 43.316848,
    longitude: 5.372669,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-12791268601",
    name: "Superette 7J/7",
    latitude: 43.290265,
    longitude: 5.389035,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-2032808754",
    name: "Superette de la Plage",
    latitude: 43.243742,
    longitude: 5.37093,
    neighborhood: "Littoral Sud",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-9929575742",
    name: "Superette des Trois Rois",
    latitude: 43.293412,
    longitude: 5.385287,
    neighborhood: "Cours Julien",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: ["wheelchair_accessible"]
  }),
  makePlace({
    id: "osm-node-1628125198",
    name: "Superette du Dome",
    latitude: 43.317021,
    longitude: 5.405086,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-13135709834",
    name: "Superette du Rouet",
    latitude: 43.279767,
    longitude: 5.390688,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-6808306795",
    name: "Superette du Sud",
    latitude: 43.284476,
    longitude: 5.378105,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: ["late_opening"]
  }),
  makePlace({
    id: "osm-node-3274585768",
    name: "Superette La Pauline",
    latitude: 43.272848,
    longitude: 5.410907,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-7837549912",
    name: "Superette Paul Claudel",
    latitude: 43.267486,
    longitude: 5.411046,
    neighborhood: "Littoral Sud",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-7443073090",
    name: "Superette Plombieres",
    latitude: 43.315316,
    longitude: 5.387163,
    neighborhood: "Belle de Mai",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-9574789252",
    name: "Superette Sait Giniez",
    latitude: 43.26398,
    longitude: 5.389763,
    neighborhood: "Littoral Sud",
    address: "26 Avenue Alexandre Dumas, Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-8476105532",
    name: "Superette Salengro",
    latitude: 43.312938,
    longitude: 5.371709,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: ["late_opening"]
  }),
  makePlace({
    id: "osm-node-9986009734",
    name: "Superette SZ",
    latitude: 43.268147,
    longitude: 5.406352,
    neighborhood: "Littoral Sud",
    address: "90 Boulevard de Sainte-Marguerite, Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-6777713785",
    name: "Superette Thiers",
    latitude: 43.29659,
    longitude: 5.385395,
    neighborhood: "Cours Julien",
    address: "Rue Adolphe Thiers, Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-10610767605",
    name: "Superette Thiers",
    latitude: 43.298561,
    longitude: 5.385225,
    neighborhood: "Longchamp",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-9516545957",
    name: "SuperK",
    latitude: 43.287045,
    longitude: 5.382069,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-1797915236",
    name: "Supermarche Casino",
    latitude: 43.258865,
    longitude: 5.417313,
    neighborhood: "Littoral Sud",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-1839956765",
    name: "Supermarche Casino",
    latitude: 43.323464,
    longitude: 5.388032,
    neighborhood: "Belle de Mai",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-4073347225",
    name: "Sur le pouce",
    latitude: 43.302906,
    longitude: 5.369414,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-5075502589",
    name: "Sur le Pouce",
    latitude: 43.343708,
    longitude: 5.439283,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["has_terrace","wheelchair_accessible","good_for_groups"]
  }),
  makePlace({
    id: "osm-node-4846674722",
    name: "Sur Le Pouce",
    instagram_handle: "resto_surlepouce",
    latitude: 43.299787,
    longitude: 5.378545,
    neighborhood: "Longchamp",
    address: "2 Rue des Convalescents, Marseille",
    category: "Restaurant",
    criteria: ["late_opening","vegetarian_options"]
  }),
  makePlace({
    id: "osm-node-1126788267",
    name: "Sushi Resto",
    latitude: 43.289795,
    longitude: 5.382312,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-11115979461",
    name: "Sushi Room",
    latitude: 43.29475,
    longitude: 5.37668,
    neighborhood: "Noailles",
    address: "52 Rue Vacon, Marseille",
    category: "Restaurant",
    criteria: ["has_terrace","late_opening"]
  }),
  makePlace({
    id: "osm-node-9672083627",
    name: "Sushi Shop",
    latitude: 43.292313,
    longitude: 5.376299,
    neighborhood: "Noailles",
    address: "24 Rue Lulli, Marseille",
    category: "Restaurant",
    criteria: ["late_opening","good_for_groups"]
  }),
  makePlace({
    id: "osm-node-10963273619",
    name: "Sushi Shop",
    latitude: 43.278838,
    longitude: 5.383106,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["good_for_groups"]
  }),
  makePlace({
    id: "osm-node-8866927530",
    name: "Sushi street cafe",
    latitude: 43.289169,
    longitude: 5.372763,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-1696440251",
    name: "Sushi West",
    latitude: 43.317439,
    longitude: 5.405274,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-1653249118",
    name: "Tabla",
    latitude: 43.292771,
    longitude: 5.383445,
    neighborhood: "Cours Julien",
    address: "106 Cours Julien, Marseille",
    category: "Restaurant",
    criteria: ["late_opening","vegetarian_options"]
  }),
  makePlace({
    id: "osm-node-4535006489",
    name: "Tako-San",
    latitude: 43.299615,
    longitude: 5.366878,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-2028064242",
    name: "Tam-Ky",
    latitude: 43.29508,
    longitude: 5.379443,
    neighborhood: "Cours Julien",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-11932576329",
    name: "Tandem",
    latitude: 43.296693,
    longitude: 5.370752,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["has_terrace","wheelchair_accessible","good_for_groups"]
  }),
  makePlace({
    id: "osm-node-9054436502",
    name: "Tandoori food",
    latitude: 43.309979,
    longitude: 5.37957,
    neighborhood: "Longchamp",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-9681311695",
    name: "TANTAKY",
    latitude: 43.28841,
    longitude: 5.383031,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["late_opening","vegetarian_options"]
  }),
  makePlace({
    id: "osm-node-5041218623",
    name: "Tapas Rojas",
    latitude: 43.3031,
    longitude: 5.38956,
    neighborhood: "Longchamp",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["vegetarian_options"]
  }),
  makePlace({
    id: "osm-node-12096882801",
    name: "Tarlata Cafe",
    latitude: 43.295172,
    longitude: 5.382572,
    neighborhood: "Cours Julien",
    address: "Marseille",
    category: "Cafe",
    criteria: []
  }),
  makePlace({
    id: "osm-node-2608216166",
    name: "Tartes & gourmandises",
    latitude: 43.28689,
    longitude: 5.38974,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-4551112308",
    name: "Taste",
    latitude: 43.343535,
    longitude: 5.364586,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["has_terrace","vegetarian_options"]
  }),
  makePlace({
    id: "osm-node-7104753923",
    name: "Taste",
    latitude: 43.292823,
    longitude: 5.375176,
    neighborhood: "Noailles",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-3440698729",
    name: "Tasting Food",
    latitude: 43.307484,
    longitude: 5.403741,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["good_for_groups"]
  }),
  makePlace({
    id: "osm-node-7925474602",
    name: "Tasty",
    latitude: 43.287466,
    longitude: 5.465057,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["good_for_groups"]
  }),
  makePlace({
    id: "osm-node-11132236821",
    name: "Tat Kebab Salonu",
    latitude: 43.324611,
    longitude: 5.367311,
    neighborhood: "Le Panier",
    address: "38 Rue de Lyon, Marseille",
    category: "Restaurant",
    criteria: ["good_for_groups"]
  }),
  makePlace({
    id: "osm-node-11758139923",
    name: "tata paulette",
    latitude: 43.249653,
    longitude: 5.402683,
    neighborhood: "Littoral Sud",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["good_for_groups"]
  }),
  makePlace({
    id: "osm-node-11486730145",
    name: "Te miti",
    latitude: 43.287088,
    longitude: 5.379761,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Cafe",
    criteria: []
  }),
  makePlace({
    id: "osm-node-2459834257",
    name: "Teavora",
    latitude: 43.302089,
    longitude: 5.389541,
    neighborhood: "Longchamp",
    address: "Marseille",
    category: "Cafe",
    criteria: ["late_opening"]
  }),
  makePlace({
    id: "osm-node-1933761760",
    name: "Tendance gourmande",
    latitude: 43.295438,
    longitude: 5.391911,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-13188465646",
    name: "Terrakoa",
    latitude: 43.29092,
    longitude: 5.367444,
    neighborhood: "Saint-Victor",
    address: "120 Rue Sainte, Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-2822278366",
    name: "Terrasse du Rouet",
    latitude: 43.279238,
    longitude: 5.391666,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-2011560386",
    name: "Terre de Provence",
    latitude: 43.293818,
    longitude: 5.385936,
    neighborhood: "Cours Julien",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-8100383741",
    name: "Terre de Provence",
    latitude: 43.290013,
    longitude: 5.398395,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-11869113719",
    name: "Terre de Provence",
    latitude: 43.287411,
    longitude: 5.448464,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-13948513018",
    name: "Tete d'ail",
    latitude: 43.295488,
    longitude: 5.379418,
    neighborhood: "Cours Julien",
    address: "19 Rue d'Aubagne, Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-11069907114",
    name: "Thai Land Square",
    latitude: 43.262059,
    longitude: 5.375877,
    neighborhood: "Littoral Sud",
    address: "603 Avenue du Prado, Marseille",
    category: "Restaurant",
    criteria: ["vegetarian_options","good_for_groups"]
  }),
  makePlace({
    id: "osm-node-12145490801",
    name: "Thaiwoke",
    latitude: 43.286863,
    longitude: 5.386677,
    neighborhood: "Marseille",
    address: "25 Boulevard Baille, Marseille",
    category: "Restaurant",
    criteria: ["late_opening","vegetarian_options"]
  }),
  makePlace({
    id: "osm-node-1974324482",
    name: "Thao",
    latitude: 43.279212,
    longitude: 5.41661,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["vegetarian_options","good_for_groups"]
  }),
  makePlace({
    id: "osm-node-12438369401",
    name: "THE 716",
    latitude: 43.314503,
    longitude: 5.368801,
    neighborhood: "Le Panier",
    address: "134 Rue Peyssonnel, Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-1933715513",
    name: "The Black Unicorn",
    latitude: 43.295441,
    longitude: 5.396436,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Bar",
    criteria: []
  }),
  makePlace({
    id: "osm-node-5519908490",
    name: "The Boat Cafe",
    latitude: 43.243185,
    longitude: 5.370321,
    neighborhood: "Littoral Sud",
    address: "Marseille",
    category: "Bar",
    criteria: ["late_opening"]
  }),
  makePlace({
    id: "osm-node-5135673547",
    name: "The British",
    instagram_handle: "the_british_pub_marseille",
    latitude: 43.293169,
    longitude: 5.372262,
    neighborhood: "Noailles",
    address: "Marseille",
    category: "Bar",
    criteria: []
  }),
  makePlace({
    id: "osm-node-11388081872",
    name: "The F Pub",
    latitude: 43.303083,
    longitude: 5.368337,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Bar",
    criteria: []
  }),
  makePlace({
    id: "osm-node-4547008423",
    name: "The Joker's",
    latitude: 43.36267,
    longitude: 5.319192,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Bar",
    criteria: []
  }),
  makePlace({
    id: "osm-node-6005431651",
    name: "The Jungle",
    latitude: 43.288134,
    longitude: 5.376602,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-11824608769",
    name: "The laboratoire",
    latitude: 43.299686,
    longitude: 5.387516,
    neighborhood: "Longchamp",
    address: "Marseille",
    category: "Cafe",
    criteria: []
  }),
  makePlace({
    id: "osm-node-13108564326",
    name: "The Must",
    latitude: 43.289574,
    longitude: 5.38369,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["good_for_groups"]
  }),
  makePlace({
    id: "osm-node-4764599683",
    name: "The Outback",
    latitude: 43.293207,
    longitude: 5.371873,
    neighborhood: "Noailles",
    address: "Marseille",
    category: "Bar",
    criteria: []
  }),
  makePlace({
    id: "osm-node-4224081495",
    name: "The Queen Victoria",
    latitude: 43.293394,
    longitude: 5.371844,
    neighborhood: "Noailles",
    address: "Marseille",
    category: "Bar",
    criteria: ["has_terrace"]
  }),
  makePlace({
    id: "osm-node-3989777385",
    name: "The Red Lion",
    latitude: 43.249954,
    longitude: 5.375471,
    neighborhood: "Littoral Sud",
    address: "Avenue Joseph Vidal, Marseille",
    category: "Bar",
    criteria: ["has_terrace","wheelchair_accessible","allows_cb_no_minimum"]
  }),
  makePlace({
    id: "osm-node-7058016111",
    name: "The Red Lion",
    latitude: 43.292079,
    longitude: 5.383602,
    neighborhood: "Cours Julien",
    address: "Marseille",
    category: "Bar",
    criteria: []
  }),
  makePlace({
    id: "osm-node-13383910576",
    name: "The Roof Kitchen",
    latitude: 43.346643,
    longitude: 5.448643,
    neighborhood: "Marseille",
    address: "305 Rue Albert Einstein, Marseille",
    category: "Restaurant",
    criteria: ["late_opening"]
  }),
  makePlace({
    id: "osm-node-739356909",
    name: "The Shamrock",
    latitude: 43.292966,
    longitude: 5.370513,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Bar",
    criteria: ["late_opening"]
  }),
  makePlace({
    id: "osm-node-3822613296",
    name: "The Wallak Food",
    latitude: 43.346402,
    longitude: 5.359058,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["good_for_groups"]
  }),
  makePlace({
    id: "osm-node-1577032877",
    name: "The White Room",
    latitude: 43.299495,
    longitude: 5.388506,
    neighborhood: "Longchamp",
    address: "Marseille",
    category: "Bar",
    criteria: []
  }),
  makePlace({
    id: "osm-node-13383096702",
    name: "Tilt",
    latitude: 43.290058,
    longitude: 5.397948,
    neighborhood: "Marseille",
    address: "Rue Crillon, Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-6425861556",
    name: "Timgad",
    latitude: 43.309755,
    longitude: 5.379426,
    neighborhood: "Longchamp",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["good_for_groups"]
  }),
  makePlace({
    id: "osm-node-5193941537",
    name: "Tom Pouce",
    latitude: 43.296808,
    longitude: 5.373919,
    neighborhood: "Noailles",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["has_terrace","good_for_groups"]
  }),
  makePlace({
    id: "osm-node-3535549268",
    name: "Toma",
    latitude: 43.291814,
    longitude: 5.374252,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-5822477585",
    name: "Tombiq Doner",
    latitude: 43.293435,
    longitude: 5.374012,
    neighborhood: "Noailles",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["good_for_groups"]
  }),
  makePlace({
    id: "osm-node-5340024214",
    name: "Tomo Sushi",
    latitude: 43.297052,
    longitude: 5.484178,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-13893515547",
    name: "Ton resto a emporter",
    latitude: 43.302783,
    longitude: 5.403701,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["good_for_groups"]
  }),
  makePlace({
    id: "osm-node-12692705293",
    name: "Tonton Marius",
    latitude: 43.306077,
    longitude: 5.365108,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["wheelchair_accessible","good_for_groups"]
  }),
  makePlace({
    id: "osm-node-9056055017",
    name: "Top Market",
    latitude: 43.309044,
    longitude: 5.378206,
    neighborhood: "Longchamp",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-3621997424",
    name: "Top Superette",
    latitude: 43.287899,
    longitude: 5.359778,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: ["wheelchair_accessible"]
  }),
  makePlace({
    id: "osm-node-3636748079",
    name: "Torrefaction centrale",
    latitude: 43.293048,
    longitude: 5.375539,
    neighborhood: "Noailles",
    address: "Marseille",
    category: "Cafe",
    criteria: ["has_terrace"]
  }),
  makePlace({
    id: "osm-node-7797691369",
    name: "Torrefaction Noailles",
    latitude: 43.241724,
    longitude: 5.387478,
    neighborhood: "Littoral Sud",
    address: "Marseille",
    category: "Cafe",
    criteria: []
  }),
  makePlace({
    id: "osm-node-5519908483",
    name: "Torres",
    latitude: 43.243471,
    longitude: 5.370583,
    neighborhood: "Littoral Sud",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: ["wheelchair_accessible"]
  }),
  makePlace({
    id: "osm-node-5181596450",
    name: "Torres Marseille",
    latitude: 43.282286,
    longitude: 5.430418,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-25209391",
    name: "TotalEnergies",
    latitude: 43.292031,
    longitude: 5.453835,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: ["late_opening"]
  }),
  makePlace({
    id: "osm-node-13074242803",
    name: "Toute une histoire",
    latitude: 43.290654,
    longitude: 5.377598,
    neighborhood: "Marseille",
    address: "4 Cours Pierre Puget, Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-way-157698247",
    name: "TR&Rouge",
    latitude: 43.289605,
    longitude: 5.465268,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-9634033727",
    name: "Traiteur",
    latitude: 43.359341,
    longitude: 5.357529,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-1439859473",
    name: "Traiteur de l'Eglise",
    latitude: 43.23855,
    longitude: 5.365096,
    neighborhood: "Littoral Sud",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-7335111041",
    name: "traiteur, patisserie",
    latitude: 43.285549,
    longitude: 5.48201,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-11263427175",
    name: "Trattoria del Sud da Vicenzo",
    latitude: 43.257176,
    longitude: 5.39411,
    neighborhood: "Littoral Sud",
    address: "420 Avenue de Mazargues, Marseille",
    category: "Restaurant",
    criteria: ["late_opening"]
  }),
  makePlace({
    id: "osm-node-2104634479",
    name: "Trattoria Marco",
    latitude: 43.29669,
    longitude: 5.370532,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["has_terrace"]
  }),
  makePlace({
    id: "osm-node-11503749065",
    name: "Trattoria Partenope",
    latitude: 43.299595,
    longitude: 5.366482,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["late_opening"]
  }),
  makePlace({
    id: "osm-node-12228000417",
    name: "Trattoria Portofino",
    latitude: 43.3013,
    longitude: 5.364526,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-4764599835",
    name: "Travers",
    latitude: 43.292933,
    longitude: 5.371999,
    neighborhood: "Noailles",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-12346669793",
    name: "Tresors d'Armenie",
    latitude: 43.256858,
    longitude: 5.394156,
    neighborhood: "Littoral Sud",
    address: "475 Avenue de Mazargues, Marseille",
    category: "Restaurant",
    criteria: ["late_opening"]
  }),
  makePlace({
    id: "osm-node-9048127235",
    name: "Tripletta",
    latitude: 43.291917,
    longitude: 5.384859,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["has_terrace","late_opening","wheelchair_accessible"]
  }),
  makePlace({
    id: "osm-node-11374482069",
    name: "Tripletta",
    latitude: 43.29055,
    longitude: 5.356108,
    neighborhood: "Marseille",
    address: "41 Rue Papety, Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-3606665478",
    name: "Trois Etoiles du Lyon",
    latitude: 43.329426,
    longitude: 5.365636,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-7770163799",
    name: "Tuba",
    latitude: 43.217929,
    longitude: 5.34578,
    neighborhood: "Malmousque",
    address: "Boulevard Alexandre Delabre, Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-1633793186",
    name: "Tumulte",
    instagram_handle: "tumulte.marseille",
    latitude: 43.29344,
    longitude: 5.383939,
    neighborhood: "Cours Julien",
    address: "2 Rue Pastoret, Marseille",
    category: "Restaurant",
    criteria: ["vegetarian_options"]
  }),
  makePlace({
    id: "osm-node-9583244625",
    name: "Turbo Pizza",
    latitude: 43.248249,
    longitude: 5.400985,
    neighborhood: "Littoral Sud",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["late_opening","good_for_groups"]
  }),
  makePlace({
    id: "osm-node-4437701361",
    name: "Turkish Patisseria",
    latitude: 43.296915,
    longitude: 5.377898,
    neighborhood: "Noailles",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: ["wheelchair_accessible"]
  }),
  makePlace({
    id: "osm-node-9922234249",
    name: "Tuttocapsule",
    latitude: 43.288692,
    longitude: 5.382031,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Cafe",
    criteria: []
  }),
  makePlace({
    id: "osm-node-3594277010",
    name: "Twali",
    latitude: 43.302052,
    longitude: 5.379325,
    neighborhood: "Longchamp",
    address: "Marseille",
    category: "Cafe",
    criteria: []
  }),
  makePlace({
    id: "osm-node-12132848856",
    name: "Twenty",
    latitude: 43.300199,
    longitude: 5.383267,
    neighborhood: "Longchamp",
    address: "Marseille",
    category: "Bar",
    criteria: []
  }),
  makePlace({
    id: "osm-node-4622095355",
    name: "U Express",
    latitude: 43.297842,
    longitude: 5.372248,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: ["allows_cb_no_minimum"]
  }),
  makePlace({
    id: "osm-node-4352650458",
    name: "U Express",
    latitude: 43.314335,
    longitude: 5.396134,
    neighborhood: "Belle de Mai",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-1472876596",
    name: "U Utile",
    latitude: 43.287557,
    longitude: 5.35412,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: ["allows_cb_no_minimum"]
  }),
  makePlace({
    id: "osm-node-5056846023",
    name: "U. Percut",
    latitude: 43.290893,
    longitude: 5.368107,
    neighborhood: "Saint-Victor",
    address: "Marseille",
    category: "Bar",
    criteria: []
  }),
  makePlace({
    id: "osm-node-6517947904",
    name: "ubud-bali",
    latitude: 43.285551,
    longitude: 5.382316,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["late_opening"]
  }),
  makePlace({
    id: "osm-node-12170662592",
    name: "Umi Sushi",
    latitude: 43.256507,
    longitude: 5.393831,
    neighborhood: "Littoral Sud",
    address: "1 Boulevard Sainte-Anne, Marseille",
    category: "Restaurant",
    criteria: ["late_opening"]
  }),
  makePlace({
    id: "osm-node-9929575746",
    name: "Ummagumma",
    latitude: 43.294001,
    longitude: 5.384784,
    neighborhood: "Cours Julien",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-4109318389",
    name: "un fournil, des fourneaux",
    latitude: 43.285137,
    longitude: 5.389605,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-9216627137",
    name: "Un jardin en ville",
    latitude: 43.269238,
    longitude: 5.387944,
    neighborhood: "Littoral Sud",
    address: "22 Avenue de Mazargues, Marseille",
    category: "Restaurant",
    criteria: ["has_terrace","late_opening"]
  }),
  makePlace({
    id: "osm-node-4029767451",
    name: "Un mexicain a Marseille",
    latitude: 43.292696,
    longitude: 5.38324,
    neighborhood: "Cours Julien",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["late_opening","good_for_groups"]
  }),
  makePlace({
    id: "osm-node-2120589538",
    name: "Un Mexicain a Marseille",
    latitude: 43.303585,
    longitude: 5.366571,
    neighborhood: "Le Panier",
    address: "47 Avenue Robert Schuman, Marseille",
    category: "Restaurant",
    criteria: ["good_for_groups"]
  }),
  makePlace({
    id: "osm-node-12175092229",
    name: "UndARTground Concept Store",
    instagram_handle: "undartground",
    latitude: 43.298607,
    longitude: 5.366455,
    neighborhood: "Le Panier",
    address: "21 Rue des Repenties, Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-4528496329",
    name: "Une table au sud",
    latitude: 43.296368,
    longitude: 5.373659,
    neighborhood: "Noailles",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["late_opening","wheelchair_accessible","vegetarian_options"]
  }),
  makePlace({
    id: "osm-node-13893541008",
    name: "Univers Hallal",
    latitude: 43.303097,
    longitude: 5.402805,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-4274489769",
    name: "Urban Kitchen",
    latitude: 43.283241,
    longitude: 5.390437,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-3780623743",
    name: "Urbanfood",
    latitude: 43.328371,
    longitude: 5.425873,
    neighborhood: "Marseille",
    address: "Avenue de la Rose, Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-1290701114",
    name: "Utile",
    latitude: 43.297368,
    longitude: 5.394168,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: ["wheelchair_accessible"]
  }),
  makePlace({
    id: "osm-node-7868710485",
    name: "Utile",
    latitude: 43.298256,
    longitude: 5.385404,
    neighborhood: "Longchamp",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: ["wheelchair_accessible","allows_cb_no_minimum"]
  }),
  makePlace({
    id: "osm-node-10963916893",
    name: "Utile",
    latitude: 43.289018,
    longitude: 5.382161,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: ["allows_cb_no_minimum"]
  }),
  makePlace({
    id: "osm-node-449113060",
    name: "Utile",
    latitude: 43.289679,
    longitude: 5.364604,
    neighborhood: "Saint-Victor",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-1871295284",
    name: "Utile",
    latitude: 43.295541,
    longitude: 5.391178,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-1974107102",
    name: "Utile",
    latitude: 43.279319,
    longitude: 5.417425,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-2059612369",
    name: "Utile",
    latitude: 43.293581,
    longitude: 5.383699,
    neighborhood: "Cours Julien",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-2822223146",
    name: "Utile",
    latitude: 43.27813,
    longitude: 5.392569,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-3823091152",
    name: "Utile",
    latitude: 43.34756,
    longitude: 5.358947,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-4087718762",
    name: "Utile",
    latitude: 43.29244,
    longitude: 5.396358,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-4122998100",
    name: "Utile",
    latitude: 43.309224,
    longitude: 5.400381,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-4405959284",
    name: "Utile",
    latitude: 43.299238,
    longitude: 5.383905,
    neighborhood: "Longchamp",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-5428420332",
    name: "Utile",
    latitude: 43.286119,
    longitude: 5.391989,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-6661612957",
    name: "Utile",
    latitude: 43.305432,
    longitude: 5.373405,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-7415178862",
    name: "Utile",
    latitude: 43.286882,
    longitude: 5.38504,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-7752795675",
    name: "Utile",
    latitude: 43.280626,
    longitude: 5.407216,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-8829816221",
    name: "Utile",
    latitude: 43.342825,
    longitude: 5.398656,
    neighborhood: "Belle de Mai",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-10857634394",
    name: "Utile",
    latitude: 43.307727,
    longitude: 5.396226,
    neighborhood: "Belle de Mai",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-10876292790",
    name: "Utile",
    latitude: 43.291566,
    longitude: 5.371424,
    neighborhood: "Saint-Victor",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-way-159385947",
    name: "Utile",
    latitude: 43.370583,
    longitude: 5.35655,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-1933769085",
    name: "Valange Traiteur",
    latitude: 43.295599,
    longitude: 5.394826,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-8518294529",
    name: "Vanille noire",
    latitude: 43.293904,
    longitude: 5.376013,
    neighborhood: "Noailles",
    address: "Marseille",
    category: "Cafe",
    criteria: []
  }),
  makePlace({
    id: "osm-node-4201911658",
    name: "Vanille Noire",
    latitude: 43.297011,
    longitude: 5.368594,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Cafe",
    criteria: []
  }),
  makePlace({
    id: "osm-node-10981049707",
    name: "Vanille Noire",
    latitude: 43.300041,
    longitude: 5.369343,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Cafe",
    criteria: []
  }),
  makePlace({
    id: "osm-node-6571078195",
    name: "Vapiano",
    latitude: 43.284449,
    longitude: 5.384125,
    neighborhood: "Marseille",
    address: "20 Avenue du Prado, Marseille",
    category: "Restaurant",
    criteria: ["late_opening"]
  }),
  makePlace({
    id: "osm-node-7332186482",
    name: "Vapiano",
    latitude: 43.288969,
    longitude: 5.481614,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-13105617642",
    name: "Vapiano",
    latitude: 43.306032,
    longitude: 5.363546,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-1991295739",
    name: "Ve mes glaces",
    latitude: 43.29291,
    longitude: 5.385393,
    neighborhood: "Cours Julien",
    address: "Marseille",
    category: "Cafe",
    criteria: ["late_opening","wheelchair_accessible"]
  }),
  makePlace({
    id: "osm-node-11932557691",
    name: "Vente a emporter",
    latitude: 43.296518,
    longitude: 5.372308,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["has_terrace"]
  }),
  makePlace({
    id: "osm-node-9351014269",
    name: "Venus",
    latitude: 43.28326,
    longitude: 5.37503,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["late_opening"]
  }),
  makePlace({
    id: "osm-node-11665871001",
    name: "Via Napoli 19",
    latitude: 43.281036,
    longitude: 5.388817,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-1982739669",
    name: "Via-Roma",
    latitude: 43.248224,
    longitude: 5.375274,
    neighborhood: "Littoral Sud",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-11369581716",
    name: "Viaghji",
    latitude: 43.285513,
    longitude: 5.351473,
    neighborhood: "Malmousque",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-2028322667",
    name: "Viandes Center",
    latitude: 43.293589,
    longitude: 5.385701,
    neighborhood: "Cours Julien",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-2394376859",
    name: "Vice-Versa",
    latitude: 43.293459,
    longitude: 5.385122,
    neighborhood: "Cours Julien",
    address: "Marseille",
    category: "Bar",
    criteria: []
  }),
  makePlace({
    id: "osm-node-1315189232",
    name: "Victor Cafe",
    latitude: 43.292004,
    longitude: 5.3598,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-way-153532648",
    name: "Villa Mont Liban",
    latitude: 43.251618,
    longitude: 5.421716,
    neighborhood: "Littoral Sud",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["vegetarian_options"]
  }),
  makePlace({
    id: "osm-node-3535421379",
    name: "Vinoneo",
    latitude: 43.297834,
    longitude: 5.369332,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-1992825612",
    name: "Vins, etc",
    latitude: 43.294813,
    longitude: 5.390688,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: ["good_for_groups"]
  }),
  makePlace({
    id: "osm-node-11932549961",
    name: "Vita Loca",
    latitude: 43.296692,
    longitude: 5.370832,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Cafe",
    criteria: []
  }),
  makePlace({
    id: "osm-node-3756217313",
    name: "Vitamines",
    latitude: 43.380561,
    longitude: 5.357672,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-9374520785",
    name: "Vitamines",
    latitude: 43.380475,
    longitude: 5.357634,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-9633396727",
    name: "Vival",
    latitude: 43.231944,
    longitude: 5.355382,
    neighborhood: "Malmousque",
    address: "1 Rue Audemar-Tibido, Marseille",
    category: "Commerce alimentaire",
    criteria: ["late_opening","wheelchair_accessible"]
  }),
  makePlace({
    id: "osm-node-11758624864",
    name: "Vival",
    latitude: 43.314428,
    longitude: 5.413863,
    neighborhood: "Marseille",
    address: "250 Avenue de Montolivet, Marseille",
    category: "Commerce alimentaire",
    criteria: ["allows_cb_no_minimum"]
  }),
  makePlace({
    id: "osm-node-2136336657",
    name: "Vival",
    latitude: 43.291858,
    longitude: 5.372761,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: ["late_opening"]
  }),
  makePlace({
    id: "osm-node-2408318942",
    name: "Vival",
    latitude: 43.291677,
    longitude: 5.384348,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: ["late_opening"]
  }),
  makePlace({
    id: "osm-node-3442818001",
    name: "Vival",
    latitude: 43.30331,
    longitude: 5.403201,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: ["wheelchair_accessible"]
  }),
  makePlace({
    id: "osm-node-6808424220",
    name: "Vival",
    latitude: 43.288772,
    longitude: 5.373151,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: ["wheelchair_accessible"]
  }),
  makePlace({
    id: "osm-node-8601906910",
    name: "Vival",
    latitude: 43.299149,
    longitude: 5.436961,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: ["late_opening"]
  }),
  makePlace({
    id: "osm-node-10172226367",
    name: "Vival",
    latitude: 43.241285,
    longitude: 5.376705,
    neighborhood: "Littoral Sud",
    address: "Traverse Tiboulen, Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-1750870304",
    name: "Vival",
    latitude: 43.234076,
    longitude: 5.363613,
    neighborhood: "Littoral Sud",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-1942082806",
    name: "Vival",
    latitude: 43.247523,
    longitude: 5.375921,
    neighborhood: "Littoral Sud",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-2613156832",
    name: "Vival",
    latitude: 43.280462,
    longitude: 5.368439,
    neighborhood: "Saint-Victor",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-3204079823",
    name: "Vival",
    latitude: 43.289998,
    longitude: 5.440289,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-3807693953",
    name: "Vival",
    latitude: 43.356338,
    longitude: 5.439517,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-4122998092",
    name: "Vival",
    latitude: 43.306887,
    longitude: 5.399881,
    neighborhood: "Belle de Mai",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-4360642427",
    name: "Vival",
    latitude: 43.268608,
    longitude: 5.403711,
    neighborhood: "Littoral Sud",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-5310286903",
    name: "Vival",
    latitude: 43.352057,
    longitude: 5.438021,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-6283356079",
    name: "Vival",
    latitude: 43.289611,
    longitude: 5.376195,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-6766457169",
    name: "Vival",
    latitude: 43.247565,
    longitude: 5.374578,
    neighborhood: "Littoral Sud",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-6808306797",
    name: "Vival",
    latitude: 43.287791,
    longitude: 5.379056,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-7365405585",
    name: "Vival",
    latitude: 43.28861,
    longitude: 5.366463,
    neighborhood: "Saint-Victor",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-7367552513",
    name: "Vival",
    latitude: 43.324674,
    longitude: 5.455471,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-7925474611",
    name: "Vival",
    latitude: 43.287294,
    longitude: 5.465581,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-11250864035",
    name: "Vival",
    latitude: 43.302611,
    longitude: 5.369641,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-12467084029",
    name: "Vival",
    latitude: 43.247931,
    longitude: 5.381526,
    neighborhood: "Littoral Sud",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-way-154606380",
    name: "Vival",
    latitude: 43.279925,
    longitude: 5.418364,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-9928832835",
    name: "Voila Ve",
    latitude: 43.295209,
    longitude: 5.392644,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Bar",
    criteria: []
  }),
  makePlace({
    id: "osm-node-7417522230",
    name: "Volailles de Cure Bourse",
    latitude: 43.292729,
    longitude: 5.384315,
    neighborhood: "Cours Julien",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-7086367098",
    name: "Volodia",
    latitude: 43.299118,
    longitude: 5.36635,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["late_opening"]
  }),
  makePlace({
    id: "osm-node-4087719911",
    name: "VRAC A DIT",
    latitude: 43.290943,
    longitude: 5.389181,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-11158961114",
    name: "VV House",
    latitude: 43.292423,
    longitude: 5.383992,
    neighborhood: "Cours Julien",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["wheelchair_accessible","vegetarian_options","allows_cb_no_minimum","good_for_groups"]
  }),
  makePlace({
    id: "osm-node-5592877410",
    name: "Wadina",
    latitude: 43.286296,
    longitude: 5.377544,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["late_opening","vegetarian_options","good_for_groups"]
  }),
  makePlace({
    id: "osm-node-11860709843",
    name: "Waffle Factory",
    latitude: 43.293796,
    longitude: 5.373402,
    neighborhood: "Noailles",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["good_for_groups"]
  }),
  makePlace({
    id: "osm-node-10942364105",
    name: "Waffle Factory",
    latitude: 43.363489,
    longitude: 5.34671,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-3647443701",
    name: "Wake Up",
    latitude: 43.309076,
    longitude: 5.372701,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-11266619015",
    name: "Wake Up Cafe",
    latitude: 43.309487,
    longitude: 5.391971,
    neighborhood: "Belle de Mai",
    address: "Marseille",
    category: "Cafe",
    criteria: []
  }),
  makePlace({
    id: "osm-node-8475740457",
    name: "Waldorf of Marseille",
    latitude: 43.291178,
    longitude: 5.381626,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-3182859597",
    name: "Waroeng Bali",
    latitude: 43.283711,
    longitude: 5.383753,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["late_opening"]
  }),
  makePlace({
    id: "osm-node-6571113289",
    name: "Wasabi",
    latitude: 43.284514,
    longitude: 5.385322,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["has_terrace"]
  }),
  makePlace({
    id: "osm-node-10042581434",
    name: "Welcome Cafe",
    latitude: 43.291036,
    longitude: 5.356013,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Cafe",
    criteria: []
  }),
  makePlace({
    id: "osm-node-5202084894",
    name: "Welcome to Istanbul",
    latitude: 43.297894,
    longitude: 5.373026,
    neighborhood: "Noailles",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["has_terrace","vegetarian_options","good_for_groups"]
  }),
  makePlace({
    id: "osm-node-7843180642",
    name: "White Rabbit",
    latitude: 43.301404,
    longitude: 5.364543,
    neighborhood: "Le Panier",
    address: "23 Boulevard Jacques Saade Quai de la Joliette, Marseille",
    category: "Bar",
    criteria: ["has_terrace","late_opening"]
  }),
  makePlace({
    id: "osm-node-13796193501",
    name: "Wok & rolls",
    latitude: 43.29441,
    longitude: 5.384205,
    neighborhood: "Cours Julien",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-11197294833",
    name: "Wok Udon",
    latitude: 43.30402,
    longitude: 5.366686,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["has_terrace","good_for_groups"]
  }),
  makePlace({
    id: "osm-node-2411216673",
    name: "WOOD La Cantine Gourmande",
    latitude: 43.296754,
    longitude: 5.370484,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["has_terrace"]
  }),
  makePlace({
    id: "osm-node-10315214754",
    name: "World Market",
    latitude: 43.299141,
    longitude: 5.386122,
    neighborhood: "Longchamp",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-13585102696",
    name: "Y'a un Resto",
    latitude: 43.287972,
    longitude: 5.383771,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["wheelchair_accessible","allows_cb_no_minimum"]
  }),
  makePlace({
    id: "osm-node-11516251069",
    name: "Ya' Baladi",
    latitude: 43.300824,
    longitude: 5.384727,
    neighborhood: "Longchamp",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-12386231670",
    name: "Yafel",
    latitude: 43.292211,
    longitude: 5.382947,
    neighborhood: "Cours Julien",
    address: "1 Boulevard Theodore Thurner, Marseille",
    category: "Restaurant",
    criteria: ["late_opening","wheelchair_accessible","vegetarian_options","allows_cb_no_minimum"]
  }),
  makePlace({
    id: "osm-node-13796146601",
    name: "Yam by Nour",
    latitude: 43.293028,
    longitude: 5.383215,
    neighborhood: "Cours Julien",
    address: "86 Cours Julien, Marseille",
    category: "Restaurant",
    criteria: ["late_opening","vegetarian_options"]
  }),
  makePlace({
    id: "osm-node-2085794783",
    name: "Yamato",
    latitude: 43.292205,
    longitude: 5.384012,
    neighborhood: "Cours Julien",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["late_opening","wheelchair_accessible"]
  }),
  makePlace({
    id: "osm-node-5842447185",
    name: "Yasmine",
    latitude: 43.296129,
    longitude: 5.367945,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["has_terrace","has_wifi","vegetarian_options"]
  }),
  makePlace({
    id: "osm-node-12976986256",
    name: "Yassou greek pita",
    instagram_handle: "yassou_marseille",
    latitude: 43.297928,
    longitude: 5.371372,
    neighborhood: "Le Panier",
    address: "36 Grand Rue, Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-12453502331",
    name: "Yerevan",
    latitude: 43.291808,
    longitude: 5.479276,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-8116416890",
    name: "Yima",
    latitude: 43.295231,
    longitude: 5.379811,
    neighborhood: "Cours Julien",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["vegetarian_options"]
  }),
  makePlace({
    id: "osm-node-8706376267",
    name: "YK Superette",
    latitude: 43.314385,
    longitude: 5.369443,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-12692734813",
    name: "yoj",
    latitude: 43.306173,
    longitude: 5.365129,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["has_terrace"]
  }),
  makePlace({
    id: "osm-node-12692801378",
    name: "Yokae",
    latitude: 43.301229,
    longitude: 5.369857,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["good_for_groups"]
  }),
  makePlace({
    id: "osm-node-2120124065",
    name: "Youpi Juice",
    latitude: 43.298543,
    longitude: 5.366017,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Cafe",
    criteria: []
  }),
  makePlace({
    id: "osm-node-11495049070",
    name: "Yuko Ramen",
    latitude: 43.301928,
    longitude: 5.397962,
    neighborhood: "Marseille",
    address: "13 Avenue du Marechal Foch, Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-1933740918",
    name: "Zaaki",
    latitude: 43.295461,
    longitude: 5.392367,
    neighborhood: "Marseille",
    address: "85 Boulevard Chave, Marseille",
    category: "Restaurant",
    criteria: ["late_opening","wheelchair_accessible"]
  }),
  makePlace({
    id: "osm-node-1633046478",
    name: "Zafer",
    latitude: 43.299653,
    longitude: 5.382089,
    neighborhood: "Longchamp",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-5815425649",
    name: "Zay Zay",
    instagram_handle: "zayzay.restaurant",
    latitude: 43.287616,
    longitude: 5.379132,
    neighborhood: "Marseille",
    address: "134 Rue Paradis, Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-12569719769",
    name: "Zazashop",
    latitude: 43.289361,
    longitude: 5.388655,
    neighborhood: "Marseille",
    address: "27 Rue d'Alger, Marseille",
    category: "Commerce alimentaire",
    criteria: ["late_opening"]
  }),
  makePlace({
    id: "osm-node-11521313453",
    name: "Ze'nack",
    latitude: 43.226436,
    longitude: 5.416243,
    neighborhood: "Littoral Sud",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["good_for_groups"]
  }),
  makePlace({
    id: "osm-node-8518294538",
    name: "Zephyr Cafe",
    latitude: 43.293045,
    longitude: 5.376106,
    neighborhood: "Noailles",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["has_terrace","good_for_groups"]
  }),
  makePlace({
    id: "osm-node-12368451001",
    name: "Zia Concetta",
    latitude: 43.275586,
    longitude: 5.359841,
    neighborhood: "Malmousque",
    address: "315 Corniche du President John Fitzgerald Kennedy, Marseille",
    category: "Cafe",
    criteria: []
  }),
  makePlace({
    id: "osm-node-12677212834",
    name: "Zin Zin",
    instagram_handle: "zinzin_cantine_marseille",
    latitude: 43.28819,
    longitude: 5.363283,
    neighborhood: "Saint-Victor",
    address: "18 Rue Guy de Combaud Roquebrune, Marseille",
    category: "Restaurant",
    criteria: ["wheelchair_accessible"]
  }),
  makePlace({
    id: "osm-node-9216585817",
    name: "Zini's",
    latitude: 43.26975,
    longitude: 5.387508,
    neighborhood: "Littoral Sud",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["late_opening","good_for_groups"]
  }),
  makePlace({
    id: "osm-node-5407133351",
    name: "Zoom Market",
    latitude: 43.28881,
    longitude: 5.382269,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Commerce alimentaire",
    criteria: []
  }),
  makePlace({
    id: "osm-node-6387251925",
    name: "Zoumai",
    latitude: 43.286298,
    longitude: 5.38661,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Bar",
    criteria: ["has_terrace","late_opening","wheelchair_accessible"]
  })
];

export const demoNeighborhoods: Neighborhood[] = [
  {
    id: 'cours-julien',
    name: 'Cours Julien',
    polygon: {
      type: 'Polygon',
      coordinates: [
        [
          [5.3789, 43.2968],
          [5.3885, 43.2962],
          [5.388, 43.2917],
          [5.3792, 43.2913],
          [5.3789, 43.2968]
        ]
      ]
    }
  },
  {
    id: 'noailles',
    name: 'Noailles',
    polygon: {
      type: 'Polygon',
      coordinates: [
        [
          [5.3719, 43.2975],
          [5.3791, 43.2972],
          [5.3784, 43.2924],
          [5.3715, 43.2927],
          [5.3719, 43.2975]
        ]
      ]
    }
  },
  {
    id: 'panier',
    name: 'Le Panier',
    polygon: {
      type: 'Polygon',
      coordinates: [
        [
          [5.3653, 43.3015],
          [5.3732, 43.3011],
          [5.372, 43.2968],
          [5.3646, 43.2975],
          [5.3653, 43.3015]
        ]
      ]
    }
  },
  {
    id: 'vieux-port',
    name: 'Vieux-Port',
    polygon: {
      type: 'Polygon',
      coordinates: [
        [
          [5.3654, 43.2978],
          [5.3772, 43.2974],
          [5.3764, 43.2918],
          [5.3648, 43.2925],
          [5.3654, 43.2978]
        ]
      ]
    }
  },
  {
    id: 'belle-de-mai',
    name: 'Belle de Mai',
    polygon: {
      type: 'Polygon',
      coordinates: [
        [
          [5.3823, 43.3151],
          [5.3973, 43.3142],
          [5.397, 43.3058],
          [5.383, 43.3051],
          [5.3823, 43.3151]
        ]
      ]
    }
  }
];
