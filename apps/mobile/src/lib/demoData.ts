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
    id: "osm-node-6604942973",
    name: "120C",
    latitude: 43.289306,
    longitude: 5.397003,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
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
    id: "osm-node-12292185157",
    name: "A Table",
    latitude: 43.214679,
    longitude: 5.538648,
    neighborhood: "Littoral Sud",
    address: "Marseille",
    category: "Restaurant",
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
    id: "osm-way-154633806",
    name: "AM (Alexandre Mazzia)",
    latitude: 43.270038,
    longitude: 5.386264,
    neighborhood: "Marseille",
    address: "9 Rue Francois Rocca, Marseille",
    category: "Restaurant",
    criteria: ["wheelchair_accessible","takes_reservations"]
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
    id: "osm-node-9642905500",
    name: "Arkose",
    latitude: 43.267616,
    longitude: 5.395283,
    neighborhood: "Littoral Sud",
    address: "101 Boulevard Michelet, Marseille",
    category: "Restaurant",
    criteria: ["has_terrace","late_opening","wheelchair_accessible"]
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
    id: "osm-node-5795578740",
    name: "Asabiya",
    latitude: 43.294067,
    longitude: 5.383022,
    neighborhood: "Cours Julien",
    address: "Marseille",
    category: "Bar",
    criteria: ["late_opening"]
  }),
  makePlace({
    id: "osm-node-10760868942",
    name: "Ashoka",
    latitude: 43.293063,
    longitude: 5.373751,
    neighborhood: "Noailles",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-747035354",
    name: "Ashourya",
    latitude: 43.295273,
    longitude: 5.382497,
    neighborhood: "Cours Julien",
    address: "26 Cours Julien, Marseille",
    category: "Restaurant",
    criteria: ["late_opening"]
  }),
  makePlace({
    id: "osm-node-5141525728",
    name: "Ashourya",
    latitude: 43.301555,
    longitude: 5.387485,
    neighborhood: "Longchamp",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["late_opening"]
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
    id: "osm-node-11240913196",
    name: "Au Grain Desire",
    latitude: 43.294133,
    longitude: 5.377199,
    neighborhood: "Noailles",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["has_terrace"]
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
    id: "osm-node-2905778435",
    name: "Auberge de Pichauris",
    latitude: 43.371309,
    longitude: 5.535688,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
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
    id: "osm-node-9081877444",
    name: "B52 cafe",
    latitude: 43.28781,
    longitude: 5.524568,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
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
    criteria: ["late_opening"]
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
    id: "osm-node-5310287572",
    name: "Baie d'Along",
    latitude: 43.351665,
    longitude: 5.43991,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-11373992622",
    name: "Baladi",
    latitude: 43.26468,
    longitude: 5.373906,
    neighborhood: "Littoral Sud",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
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
    id: "osm-node-9051248543",
    name: "Bar de la fontaine",
    latitude: 43.214573,
    longitude: 5.539255,
    neighborhood: "Littoral Sud",
    address: "Marseille",
    category: "Bar",
    criteria: ["has_terrace"]
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
    id: "osm-node-3451716762",
    name: "Bar de la Marine",
    latitude: 43.214378,
    longitude: 5.537947,
    neighborhood: "Littoral Sud",
    address: "5 Quai des Baux, Marseille",
    category: "Bar",
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
    id: "osm-node-4937607765",
    name: "Bar de la Place",
    latitude: 43.379965,
    longitude: 5.350744,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Bar",
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
    id: "osm-node-4288320390",
    name: "Bar des Sports",
    latitude: 43.398844,
    longitude: 5.366772,
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
    id: "osm-node-9789210035",
    name: "Bar des Sports",
    latitude: 43.369943,
    longitude: 5.251391,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Bar",
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
    id: "osm-node-5132958106",
    name: "Bar du Marche",
    latitude: 43.294667,
    longitude: 5.567961,
    neighborhood: "Marseille",
    address: "7 Cours Voltaire, Marseille",
    category: "Bar",
    criteria: ["has_terrace"]
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
    criteria: ["has_terrace","has_wifi","wheelchair_accessible"]
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
    id: "osm-node-2937784254",
    name: "Bar du XXe siecle",
    latitude: 43.214398,
    longitude: 5.538808,
    neighborhood: "Littoral Sud",
    address: "Marseille",
    category: "Bar",
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
    id: "osm-node-5312309516",
    name: "Bar la Cabre D'Or",
    latitude: 43.283104,
    longitude: 5.53485,
    neighborhood: "Marseille",
    address: "Boulevard Madame, Marseille",
    category: "Bar",
    criteria: ["has_terrace","late_opening"]
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
    id: "osm-node-5271978921",
    name: "Bar Le General",
    latitude: 43.288922,
    longitude: 5.573224,
    neighborhood: "Marseille",
    address: "11 Avenue de Verdun, Marseille",
    category: "Bar",
    criteria: ["has_terrace"]
  }),
  makePlace({
    id: "osm-way-156629459",
    name: "Bar le Jingle",
    latitude: 43.384593,
    longitude: 5.577467,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Bar",
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
    id: "osm-node-5137415425",
    name: "Bar le Noman's Land",
    latitude: 43.291519,
    longitude: 5.569134,
    neighborhood: "Marseille",
    address: "Marseille",
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
    criteria: ["has_terrace"]
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
    id: "osm-way-156626733",
    name: "Bar Tabac Du Platane",
    latitude: 43.383719,
    longitude: 5.578306,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Bar",
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
    id: "osm-node-7928525985",
    name: "Bar Tabac PMU Le Flint",
    latitude: 43.385802,
    longitude: 5.358721,
    neighborhood: "Le Panier",
    address: "13 Avenue du 8 Mai 1945, Marseille",
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
    criteria: ["wheelchair_accessible"]
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
    id: "osm-node-11521916962",
    name: "Basilic & Co Marseille (Republique)",
    latitude: 43.303186,
    longitude: 5.368302,
    neighborhood: "Le Panier",
    address: "93 Rue de la Republique, Marseille",
    category: "Restaurant",
    criteria: ["has_terrace","late_opening","wheelchair_accessible","takes_reservations"]
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
    id: "osm-way-426208332",
    name: "Basta Cosi",
    latitude: 43.356506,
    longitude: 5.485607,
    neighborhood: "Marseille",
    address: "8 Avenue Salvador Allende, Marseille",
    category: "Restaurant",
    criteria: []
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
    criteria: ["has_terrace"]
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
    criteria: ["has_terrace","late_opening","wheelchair_accessible","takes_reservations"]
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
    criteria: ["has_terrace"]
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
    criteria: []
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
    id: "osm-node-11799845069",
    name: "Boon Mi Food",
    latitude: 43.301962,
    longitude: 5.391065,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
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
    criteria: ["has_terrace","wheelchair_accessible"]
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
    id: "osm-node-5132958108",
    name: "Brasserie chez Gillou",
    latitude: 43.294802,
    longitude: 5.567985,
    neighborhood: "Marseille",
    address: "11 Cours Voltaire, Marseille",
    category: "Bar",
    criteria: ["has_terrace"]
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
    id: "osm-way-75909424",
    name: "Brasserie du Tennis",
    latitude: 43.205457,
    longitude: 5.518077,
    neighborhood: "Littoral Sud",
    address: "Marseille",
    category: "Bar",
    criteria: []
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
    id: "osm-node-3938499328",
    name: "Brasserie La Peace'In",
    latitude: 43.231001,
    longitude: 5.537929,
    neighborhood: "Littoral Sud",
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
    id: "osm-node-3451705020",
    name: "Brasserie Le Mistral",
    latitude: 43.213294,
    longitude: 5.538685,
    neighborhood: "Littoral Sud",
    address: "Marseille",
    category: "Restaurant",
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
    category: "Restaurant",
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
    id: "osm-node-10865944788",
    name: "C'est bon",
    instagram_handle: "cestbon.marseille",
    latitude: 43.302026,
    longitude: 5.397826,
    neighborhood: "Marseille",
    address: "11 Avenue du Marechal Foch, Marseille",
    category: "Restaurant",
    criteria: ["late_opening"]
  }),
  makePlace({
    id: "osm-node-6627601793",
    name: "C'Thai",
    latitude: 43.307855,
    longitude: 5.432175,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
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
    id: "osm-node-10065557479",
    name: "Calendal",
    latitude: 43.215226,
    longitude: 5.536771,
    neighborhood: "Littoral Sud",
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
    criteria: ["has_terrace","has_wifi","wheelchair_accessible","dog_friendly"]
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
    id: "osm-node-1583328968",
    name: "Canard Laque",
    latitude: 43.295965,
    longitude: 5.487184,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
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
    id: "osm-node-2811941761",
    name: "Casa Roma",
    latitude: 43.215277,
    longitude: 5.536802,
    neighborhood: "Littoral Sud",
    address: "5 Rue Bremond, Marseille",
    category: "Restaurant",
    criteria: []
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
    id: "osm-node-12149810045",
    name: "Cassis et Romarin",
    latitude: 43.215204,
    longitude: 5.538868,
    neighborhood: "Littoral Sud",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["late_opening"]
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
    id: "osm-node-6031928974",
    name: "Cedar",
    latitude: 43.297806,
    longitude: 5.365568,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-4300890898",
    name: "Central bar",
    latitude: 43.292667,
    longitude: 5.567955,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Bar",
    criteria: []
  }),
  makePlace({
    id: "osm-way-156608811",
    name: "Cercle de l'Avenir",
    latitude: 43.394906,
    longitude: 5.545316,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Bar",
    criteria: []
  }),
  makePlace({
    id: "osm-way-156626445",
    name: "Cercle Mirabeau",
    latitude: 43.384087,
    longitude: 5.577705,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Bar",
    criteria: []
  }),
  makePlace({
    id: "osm-node-3451666768",
    name: "Cesar la suite...",
    latitude: 43.214517,
    longitude: 5.53771,
    neighborhood: "Littoral Sud",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
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
    latitude: 43.295397,
    longitude: 5.391295,
    neighborhood: "Marseille",
    address: "67 Boulevard Chave, Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-5312274644",
    name: "Charrel Cafe / Bar du Charrel",
    latitude: 43.284514,
    longitude: 5.546387,
    neighborhood: "Marseille",
    address: "Route Nationale 8, Marseille",
    category: "Bar",
    criteria: ["has_terrace"]
  }),
  makePlace({
    id: "osm-node-1549176587",
    name: "Chat Perche",
    latitude: 43.29383,
    longitude: 5.384843,
    neighborhood: "Cours Julien",
    address: "17 Rue Pastoret, Marseille",
    category: "Bar",
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
    id: "osm-node-3451666766",
    name: "Chez Cesar",
    latitude: 43.214944,
    longitude: 5.537238,
    neighborhood: "Littoral Sud",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["has_terrace"]
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
    id: "osm-node-462035640",
    name: "Chez Eric, le lagon bleu",
    latitude: 43.385025,
    longitude: 5.574955,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
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
    id: "osm-node-3451666767",
    name: "Chez Gilbert",
    latitude: 43.214837,
    longitude: 5.537403,
    neighborhood: "Littoral Sud",
    address: "19 Quai des Baux, Marseille",
    category: "Restaurant",
    criteria: ["has_terrace","late_opening"]
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
    id: "osm-way-76025669",
    name: "Chez LOL",
    latitude: 43.214647,
    longitude: 5.535665,
    neighborhood: "Littoral Sud",
    address: "Marseille",
    category: "Restaurant",
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
    criteria: []
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
    id: "osm-node-4426810910",
    name: "Chez Michel",
    latitude: 43.290701,
    longitude: 5.356069,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["wheelchair_accessible","takes_reservations"]
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
    criteria: []
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
    criteria: ["has_terrace"]
  }),
  makePlace({
    id: "osm-node-4846089448",
    name: "Chez riz",
    latitude: 43.287958,
    longitude: 5.363611,
    neighborhood: "Saint-Victor",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["has_terrace","late_opening"]
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
    id: "osm-node-2115079381",
    name: "Chez Soi",
    latitude: 43.296742,
    longitude: 5.380287,
    neighborhood: "Cours Julien",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["late_opening"]
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
    criteria: []
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
    id: "osm-node-5119639619",
    name: "Chez Yassine",
    latitude: 43.295659,
    longitude: 5.378851,
    neighborhood: "Cours Julien",
    address: "8a Rue d'Aubagne, Marseille",
    category: "Restaurant",
    criteria: ["has_terrace"]
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
    id: "osm-node-9634033738",
    name: "Chiken Food",
    latitude: 43.356577,
    longitude: 5.357259,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Restaurant",
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
    id: "osm-node-12648186415",
    name: "Co Bay",
    latitude: 43.284612,
    longitude: 5.38529,
    neighborhood: "Marseille",
    address: "26 Rue du Rouet, Marseille",
    category: "Restaurant",
    criteria: ["has_terrace","late_opening"]
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
    id: "osm-way-154767785",
    name: "Comme a la Maison",
    latitude: 43.28545,
    longitude: 5.517542,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
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
    criteria: ["has_terrace"]
  }),
  makePlace({
    id: "osm-node-9073761350",
    name: "Copper Bay",
    latitude: 43.288594,
    longitude: 5.373005,
    neighborhood: "Marseille",
    address: "36 Boulevard Notre-Dame, Marseille",
    category: "Bar",
    criteria: ["has_terrace"]
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
    id: "osm-node-9017485600",
    name: "Coquillages de Montredon",
    latitude: 43.236149,
    longitude: 5.362085,
    neighborhood: "Littoral Sud",
    address: "79 Avenue de la Madrague de Montredon, Marseille",
    category: "Restaurant",
    criteria: ["wheelchair_accessible"]
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
    id: "osm-node-6446275585",
    name: "CornBread",
    instagram_handle: "cornbreadmarseille",
    latitude: 43.293974,
    longitude: 5.384908,
    neighborhood: "Cours Julien",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["has_wifi","late_opening"]
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
    id: "osm-node-9048059735",
    name: "Corton Beach",
    latitude: 43.210703,
    longitude: 5.544344,
    neighborhood: "Littoral Sud",
    address: "Avenue du Revestel, Marseille",
    category: "Restaurant",
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
    criteria: ["late_opening"]
  }),
  makePlace({
    id: "osm-node-3807748866",
    name: "Cote Rue",
    latitude: 43.297372,
    longitude: 5.366084,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["has_wifi"]
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
    id: "osm-node-5533534983",
    name: "Court Circuit",
    latitude: 43.291936,
    longitude: 5.384772,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["has_terrace"]
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
    id: "osm-node-5315174456",
    name: "Dans les Arbres",
    latitude: 43.27959,
    longitude: 5.532545,
    neighborhood: "Marseille",
    address: "Place Farigoule - Chateau des Creissauds, Marseille",
    category: "Bar",
    criteria: ["has_terrace"]
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
    id: "osm-node-12920635004",
    name: "Delices Viet-Nam",
    latitude: 43.309823,
    longitude: 5.408611,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
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
    criteria: []
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
    id: "osm-node-3451640394",
    name: "Don Camillo",
    latitude: 43.214661,
    longitude: 5.535926,
    neighborhood: "Littoral Sud",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
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
    id: "osm-node-4870093284",
    name: "Dragon de Jade",
    latitude: 43.29187,
    longitude: 5.569881,
    neighborhood: "Marseille",
    address: "1 Place Joseph Rau, Marseille",
    category: "Restaurant",
    criteria: ["has_terrace","late_opening"]
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
    id: "osm-node-7752785819",
    name: "Dubble",
    latitude: 43.279347,
    longitude: 5.405546,
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
    id: "osm-node-13825253401",
    name: "Durum",
    latitude: 43.293324,
    longitude: 5.385717,
    neighborhood: "Cours Julien",
    address: "19 Rue Saint-Michel, Marseille",
    category: "Restaurant",
    criteria: ["late_opening"]
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
    id: "osm-node-13825491601",
    name: "Easy Sushi",
    latitude: 43.288476,
    longitude: 5.524306,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
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
    id: "osm-node-1836760286",
    name: "El Sol",
    latitude: 43.215004,
    longitude: 5.537089,
    neighborhood: "Littoral Sud",
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
    id: "osm-node-11584796142",
    name: "Emile",
    latitude: 43.273397,
    longitude: 5.391229,
    neighborhood: "Marseille",
    address: "279 Avenue du Prado, Marseille",
    category: "Restaurant",
    criteria: []
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
    id: "osm-node-10968685751",
    name: "Feu Viet",
    latitude: 43.310699,
    longitude: 5.400935,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
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
    criteria: ["late_opening"]
  }),
  makePlace({
    id: "osm-node-10013441860",
    name: "Figure",
    latitude: 43.283152,
    longitude: 5.374563,
    neighborhood: "Marseille",
    address: "90 Bd Vauban, Marseille",
    category: "Restaurant",
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
    id: "osm-node-5193941547",
    name: "FlashBack",
    instagram_handle: "flashbackcafe.marseille",
    latitude: 43.296544,
    longitude: 5.374127,
    neighborhood: "Noailles",
    address: "4 Rue de la Republique, Marseille",
    category: "Bar",
    criteria: []
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
    id: "osm-node-11921981356",
    name: "Freres Brioche",
    latitude: 43.294047,
    longitude: 5.37612,
    neighborhood: "Noailles",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["has_terrace"]
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
    id: "osm-node-13876203401",
    name: "Gaza Palestine",
    latitude: 43.296101,
    longitude: 5.385451,
    neighborhood: "Cours Julien",
    address: "82 Rue Curiol, Marseille",
    category: "Restaurant",
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
    criteria: ["late_opening"]
  }),
  makePlace({
    id: "osm-node-2268370124",
    name: "Ginseng",
    latitude: 43.292399,
    longitude: 5.372878,
    neighborhood: "Noailles",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["has_terrace"]
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
    id: "osm-node-4405959295",
    name: "Golda",
    latitude: 43.299321,
    longitude: 5.38233,
    neighborhood: "Longchamp",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["late_opening"]
  }),
  makePlace({
    id: "osm-node-5303246602",
    name: "Grains de siecle",
    latitude: 43.292394,
    longitude: 5.570106,
    neighborhood: "Marseille",
    address: "14 Boulevard Jean Jaures, Marseille",
    category: "Bar",
    criteria: ["has_terrace","late_opening"]
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
    id: "osm-node-3768685633",
    name: "Green Bear Coffee",
    latitude: 43.298535,
    longitude: 5.382831,
    neighborhood: "Longchamp",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-way-69140170",
    name: "Green Love",
    latitude: 43.29096,
    longitude: 5.382372,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
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
    id: "osm-node-11069902008",
    name: "Ha noi pho",
    latitude: 43.255799,
    longitude: 5.375887,
    neighborhood: "Littoral Sud",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["has_terrace"]
  }),
  makePlace({
    id: "osm-way-158354259",
    name: "Hai Dong",
    latitude: 43.350088,
    longitude: 5.465166,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-4087718757",
    name: "Hailo",
    latitude: 43.288696,
    longitude: 5.394797,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
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
    id: "osm-node-10896384469",
    name: "Hododa",
    instagram_handle: "hododa_marseille",
    latitude: 43.298197,
    longitude: 5.3659,
    neighborhood: "Le Panier",
    address: "15 Rue de l'Eveche, Marseille",
    category: "Restaurant",
    criteria: ["has_terrace"]
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
    id: "osm-node-11486784969",
    name: "Hong Kong",
    latitude: 43.290102,
    longitude: 5.559718,
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
    id: "osm-node-3055471833",
    name: "Hotel-Restaurant Le Clos des Aromes",
    latitude: 43.216117,
    longitude: 5.538036,
    neighborhood: "Littoral Sud",
    address: "10 Rue Abbe Paul Mouton, Marseille",
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
    id: "osm-node-3535421378",
    name: "Il Cuoco",
    latitude: 43.299531,
    longitude: 5.371082,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["has_terrace"]
  }),
  makePlace({
    id: "osm-way-481227553",
    name: "Il etait une frite... Une fois !",
    latitude: 43.309759,
    longitude: 5.577041,
    neighborhood: "Marseille",
    address: "RD 96 Route de Napollon, Marseille",
    category: "Restaurant",
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
    id: "osm-node-12679788301",
    name: "Inci Restaurant",
    instagram_handle: "incirestaurant1",
    latitude: 43.30296,
    longitude: 5.396331,
    neighborhood: "Marseille",
    address: "33 Boulevard Philippon, Marseille",
    category: "Restaurant",
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
    criteria: []
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
    criteria: []
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
    criteria: []
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
    criteria: []
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
    id: "osm-way-1097324914",
    name: "Kiosque le Calice",
    latitude: 43.289978,
    longitude: 5.475566,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-11190562843",
    name: "Kioto Sushi",
    latitude: 43.247617,
    longitude: 5.400295,
    neighborhood: "Littoral Sud",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-6742439553",
    name: "Kitchenwok",
    latitude: 43.340133,
    longitude: 5.456478,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
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
    criteria: []
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
    criteria: []
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
    id: "osm-node-5137425921",
    name: "L'Albizia",
    latitude: 43.291738,
    longitude: 5.570039,
    neighborhood: "Marseille",
    address: "11 Place Joseph Rau, Marseille",
    category: "Restaurant",
    criteria: ["has_terrace","late_opening"]
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
    id: "osm-node-5264086752",
    name: "L'Argilla - Restaurant L'Atelier Culinaire",
    latitude: 43.291014,
    longitude: 5.569994,
    neighborhood: "Marseille",
    address: "61 Rue de la Republique, Marseille",
    category: "Restaurant",
    criteria: []
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
    criteria: ["late_opening"]
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
    id: "osm-way-110311161",
    name: "L'auberge du Merou",
    latitude: 43.340014,
    longitude: 5.258095,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
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
    id: "osm-node-5294044269",
    name: "L'Entre deux",
    latitude: 43.29279,
    longitude: 5.56848,
    neighborhood: "Marseille",
    address: "12 Rue Rastegue, Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-4396418908",
    name: "L'Entre Pots",
    latitude: 43.300247,
    longitude: 5.386541,
    neighborhood: "Longchamp",
    address: "Marseille",
    category: "Restaurant",
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
    id: "osm-node-5294620837",
    name: "L'Envie des Mets",
    latitude: 43.292443,
    longitude: 5.568712,
    neighborhood: "Marseille",
    address: "Rue Moussard, Marseille",
    category: "Restaurant",
    criteria: []
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
    id: "osm-node-1260108004",
    name: "L'Escale - Restaurant Niolon",
    latitude: 43.339361,
    longitude: 5.256367,
    neighborhood: "Le Panier",
    address: "Marseille",
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
    id: "osm-node-3406079996",
    name: "L'Escalier",
    latitude: 43.215111,
    longitude: 5.537172,
    neighborhood: "Littoral Sud",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-6598752385",
    name: "L'Escalier Restaurant",
    latitude: 43.215259,
    longitude: 5.537119,
    neighborhood: "Littoral Sud",
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
    id: "osm-way-92607773",
    name: "L'etoile d'Orient",
    latitude: 43.292765,
    longitude: 5.569076,
    neighborhood: "Marseille",
    address: "2 Rue Rastegue, Marseille",
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
    criteria: []
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
    id: "osm-node-10963925839",
    name: "L'heure de Marseille",
    latitude: 43.295309,
    longitude: 5.376554,
    neighborhood: "Noailles",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-10139425611",
    name: "L'hostellerie",
    latitude: 43.335719,
    longitude: 5.481921,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
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
    id: "osm-node-4870093281",
    name: "L'Inattendue",
    latitude: 43.291852,
    longitude: 5.569732,
    neighborhood: "Marseille",
    address: "8 Rue Hoche, Marseille",
    category: "Restaurant",
    criteria: ["late_opening"]
  }),
  makePlace({
    id: "osm-node-7012713782",
    name: "L'indecis",
    latitude: 43.29005,
    longitude: 5.39855,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["late_opening"]
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
    id: "osm-node-1886610762",
    name: "L'innattendu",
    latitude: 43.292225,
    longitude: 5.372927,
    neighborhood: "Noailles",
    address: "Rue de la Paix, Marseille",
    category: "Restaurant",
    criteria: ["wheelchair_accessible"]
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
    id: "osm-node-12157404801",
    name: "L'instant...",
    latitude: 43.368317,
    longitude: 5.251076,
    neighborhood: "Le Panier",
    address: "68 Boulevard de la Carrairade, Marseille",
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
    criteria: ["late_opening"]
  }),
  makePlace({
    id: "osm-node-2459834252",
    name: "L'Oli Be",
    latitude: 43.300095,
    longitude: 5.386186,
    neighborhood: "Longchamp",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
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
    id: "osm-node-3451666770",
    name: "L'Oustau de la Mar",
    latitude: 43.214923,
    longitude: 5.537294,
    neighborhood: "Littoral Sud",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
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
    criteria: ["late_opening"]
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
    criteria: []
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
    id: "osm-node-9044846683",
    name: "La Bonne Mere",
    latitude: 43.215027,
    longitude: 5.53829,
    neighborhood: "Littoral Sud",
    address: "19 Rue Michel Arnaud, Marseille",
    category: "Restaurant",
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
    id: "osm-node-8852512684",
    name: "La Brasserie de Cadolive",
    latitude: 43.396331,
    longitude: 5.544223,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
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
    id: "osm-node-9905792826",
    name: "La cabane des amis",
    latitude: 43.264398,
    longitude: 5.369294,
    neighborhood: "Littoral Sud",
    address: "Marseille",
    category: "Bar",
    criteria: []
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
    id: "osm-node-9622350381",
    name: "La Calanque",
    latitude: 43.343035,
    longitude: 5.259469,
    neighborhood: "Le Panier",
    address: "6 Place de la Calanque, Marseille",
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
    criteria: ["has_terrace","has_wifi","late_opening"]
  }),
  makePlace({
    id: "osm-node-1260108013",
    name: "La Canne Bambou",
    latitude: 43.339046,
    longitude: 5.256521,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Bar",
    criteria: []
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
    id: "osm-node-12905841122",
    name: "La cantine solaire du Presage",
    latitude: 43.312016,
    longitude: 5.397102,
    neighborhood: "Belle de Mai",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
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
    criteria: ["has_terrace"]
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
    id: "osm-node-5132940899",
    name: "La Cave a Sushi",
    latitude: 43.295232,
    longitude: 5.568748,
    neighborhood: "Marseille",
    address: "22 Cours Voltaire, Marseille",
    category: "Restaurant",
    criteria: ["late_opening"]
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
    id: "osm-node-4764605526",
    name: "La Crepe au Carre",
    latitude: 43.292181,
    longitude: 5.371863,
    neighborhood: "Noailles",
    address: "Marseille",
    category: "Restaurant",
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
    id: "osm-node-3825935647",
    name: "La Dame Noir",
    latitude: 43.291612,
    longitude: 5.384463,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Bar",
    criteria: []
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
    id: "osm-node-12292185156",
    name: "La Defonce",
    latitude: 43.214583,
    longitude: 5.538031,
    neighborhood: "Littoral Sud",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-way-67701825",
    name: "La Dilligence",
    latitude: 43.302728,
    longitude: 5.384837,
    neighborhood: "Longchamp",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-7331907274",
    name: "La Diva",
    latitude: 43.35201,
    longitude: 5.475767,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-9789210036",
    name: "La Fabrique",
    latitude: 43.370115,
    longitude: 5.251529,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
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
    id: "osm-node-2071827955",
    name: "La Ferme",
    latitude: 43.315546,
    longitude: 5.537893,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
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
    id: "osm-node-11513703069",
    name: "La frequence",
    latitude: 43.302484,
    longitude: 5.390364,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Bar",
    criteria: []
  }),
  makePlace({
    id: "osm-node-12868337602",
    name: "La Fringale",
    latitude: 43.214643,
    longitude: 5.538072,
    neighborhood: "Littoral Sud",
    address: "5 Rue Pasteur, Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-3451666771",
    name: "La Girandole",
    latitude: 43.214631,
    longitude: 5.537794,
    neighborhood: "Littoral Sud",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
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
    id: "osm-node-11069911308",
    name: "La Grande Italia",
    latitude: 43.254232,
    longitude: 5.375217,
    neighborhood: "Littoral Sud",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["has_terrace"]
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
    id: "osm-node-3990059702",
    name: "La Loco",
    latitude: 43.233874,
    longitude: 5.552541,
    neighborhood: "Littoral Sud",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-6830949224",
    name: "La maison de fabiana",
    latitude: 43.292857,
    longitude: 5.566971,
    neighborhood: "Marseille",
    address: "8 Cours Barthelemy, Marseille",
    category: "Restaurant",
    criteria: ["has_terrace"]
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
    id: "osm-node-5204401264",
    name: "La Maison Toscane",
    latitude: 43.343138,
    longitude: 5.465786,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
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
    criteria: ["has_terrace"]
  }),
  makePlace({
    id: "osm-node-4376947654",
    name: "La Marmite",
    latitude: 43.292977,
    longitude: 5.377676,
    neighborhood: "Noailles",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
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
    latitude: 43.29214,
    longitude: 5.383498,
    neighborhood: "Cours Julien",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["late_opening"]
  }),
  makePlace({
    id: "osm-node-11833530369",
    name: "La Nonna D'Oro",
    latitude: 43.214595,
    longitude: 5.535708,
    neighborhood: "Littoral Sud",
    address: "Marseille",
    category: "Restaurant",
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
    criteria: ["late_opening"]
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
    criteria: ["has_terrace","late_opening"]
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
    id: "osm-node-1260107875",
    name: "La Pergola",
    latitude: 43.339386,
    longitude: 5.257589,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Restaurant",
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
    id: "osm-node-12294762839",
    name: "La Pizzeria della Stazione",
    latitude: 43.214504,
    longitude: 5.539815,
    neighborhood: "Littoral Sud",
    address: "4 Rue Raphael Ponson, Marseille",
    category: "Restaurant",
    criteria: []
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
    id: "osm-node-12151909304",
    name: "La Plage Bleue",
    latitude: 43.205387,
    longitude: 5.518731,
    neighborhood: "Littoral Sud",
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
    id: "osm-way-75909483",
    name: "La Presqu'ile",
    latitude: 43.205602,
    longitude: 5.518604,
    neighborhood: "Littoral Sud",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-12176637803",
    name: "La Quinta",
    latitude: 43.362582,
    longitude: 5.487413,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["has_terrace"]
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
    criteria: ["late_opening"]
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
    id: "osm-node-2024544245",
    name: "La Source de Jade",
    latitude: 43.292678,
    longitude: 5.384166,
    neighborhood: "Cours Julien",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["late_opening"]
  }),
  makePlace({
    id: "osm-node-3451679604",
    name: "La Stazione",
    latitude: 43.214738,
    longitude: 5.539516,
    neighborhood: "Littoral Sud",
    address: "39 Avenue Victor Hugo, Marseille",
    category: "Restaurant",
    criteria: ["has_terrace","late_opening"]
  }),
  makePlace({
    id: "osm-node-3451716763",
    name: "La Storia di Vincenzo",
    latitude: 43.214449,
    longitude: 5.537871,
    neighborhood: "Littoral Sud",
    address: "7 Quai des Baux, Marseille",
    category: "Restaurant",
    criteria: ["has_terrace"]
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
    id: "osm-node-11634774560",
    name: "La Table d'Emilie",
    latitude: 43.25009,
    longitude: 5.54648,
    neighborhood: "Littoral Sud",
    address: "Marseille",
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
    criteria: []
  }),
  makePlace({
    id: "osm-node-5132940904",
    name: "La Table de Voltaire",
    latitude: 43.294774,
    longitude: 5.568762,
    neighborhood: "Marseille",
    address: "12 Cours Voltaire, Marseille",
    category: "Restaurant",
    criteria: []
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
    criteria: []
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
    id: "osm-node-3451640395",
    name: "La Vieille Auberge",
    latitude: 43.214625,
    longitude: 5.535797,
    neighborhood: "Littoral Sud",
    address: "Marseille",
    category: "Restaurant",
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
    id: "osm-node-2087471326",
    name: "La Villa Madie",
    latitude: 43.211102,
    longitude: 5.544936,
    neighborhood: "Littoral Sud",
    address: "Avenue du Revestel, Marseille",
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
    id: "osm-node-3451705015",
    name: "La Voute",
    latitude: 43.214295,
    longitude: 5.538153,
    neighborhood: "Littoral Sud",
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
    id: "osm-node-3683681579",
    name: "Le 3 Farfalle",
    latitude: 43.291644,
    longitude: 5.569957,
    neighborhood: "Marseille",
    address: "14 Place Joseph Rau, Marseille",
    category: "Restaurant",
    criteria: ["late_opening"]
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
    id: "osm-node-5204401265",
    name: "Le 44",
    latitude: 43.342684,
    longitude: 5.468359,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
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
    id: "osm-node-11166413178",
    name: "le 460 \"bistro burger\"",
    latitude: 43.341496,
    longitude: 5.473254,
    neighborhood: "Marseille",
    address: "460 Boulevard Henri Tasso, Marseille",
    category: "Restaurant",
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
    id: "osm-node-12147576301",
    name: "Le 568",
    latitude: 43.367223,
    longitude: 5.248602,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-7160896685",
    name: "Le 66",
    latitude: 43.287044,
    longitude: 5.561625,
    neighborhood: "Marseille",
    address: "515 Avenue du 21 Aout 1944, Marseille",
    category: "Restaurant",
    criteria: ["late_opening"]
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
    id: "osm-node-2822274192",
    name: "Le Balagan",
    latitude: 43.280509,
    longitude: 5.389978,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-5137416839",
    name: "Le Balto",
    latitude: 43.291747,
    longitude: 5.569286,
    neighborhood: "Marseille",
    address: "32 Rue de la Republique, Marseille",
    category: "Bar",
    criteria: ["has_terrace"]
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
    id: "osm-node-3770283182",
    name: "Le Bar a Vrac",
    latitude: 43.299219,
    longitude: 5.384498,
    neighborhood: "Longchamp",
    address: "Marseille",
    category: "Restaurant",
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
    criteria: []
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
    id: "osm-node-4937607751",
    name: "Le Bergerac",
    latitude: 43.3798,
    longitude: 5.351057,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Bar",
    criteria: []
  }),
  makePlace({
    id: "osm-node-6554684281",
    name: "Le Bestouan",
    latitude: 43.213134,
    longitude: 5.531288,
    neighborhood: "Littoral Sud",
    address: "Marseille",
    category: "Restaurant",
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
    id: "osm-node-3057637533",
    name: "Le Bistro",
    latitude: 43.214066,
    longitude: 5.534616,
    neighborhood: "Littoral Sud",
    address: "8 Avenue de l'Amiral Ganteaume, Marseille",
    category: "Restaurant",
    criteria: ["has_terrace"]
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
    id: "osm-node-5858835897",
    name: "Le Bistro'Quai",
    latitude: 43.214741,
    longitude: 5.537531,
    neighborhood: "Littoral Sud",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["late_opening"]
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
    id: "osm-node-6036712072",
    name: "Le Bistrot de Nino",
    latitude: 43.214802,
    longitude: 5.536434,
    neighborhood: "Littoral Sud",
    address: "1 Quai Jean Jacques Barthelemy, Marseille",
    category: "Restaurant",
    criteria: ["late_opening"]
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
    id: "osm-way-70056909",
    name: "Le Bistrot Plage",
    latitude: 43.286175,
    longitude: 5.350657,
    neighborhood: "Marseille",
    address: "60 Corniche du President John Fitzgerald Kennedy, Marseille",
    category: "Bar",
    criteria: []
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
    id: "osm-node-3451705016",
    name: "Le Bonaparte",
    latitude: 43.214808,
    longitude: 5.538759,
    neighborhood: "Littoral Sud",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-5269708960",
    name: "Le Borsalino",
    latitude: 43.292277,
    longitude: 5.569262,
    neighborhood: "Marseille",
    address: "3 Boulevard Jean Jaures, Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-7749927822",
    name: "Le bouchon",
    latitude: 43.294622,
    longitude: 5.567229,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
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
    id: "osm-node-2822280855",
    name: "Le Cafe Thai",
    latitude: 43.278825,
    longitude: 5.391852,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
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
    id: "osm-node-3451666772",
    name: "Le Canaille",
    latitude: 43.214972,
    longitude: 5.537168,
    neighborhood: "Littoral Sud",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["has_terrace"]
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
    id: "osm-node-1836768431",
    name: "Le Cendrillon",
    latitude: 43.213662,
    longitude: 5.538874,
    neighborhood: "Littoral Sud",
    address: "Marseille",
    category: "Restaurant",
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
    criteria: []
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
    id: "osm-node-11473219169",
    name: "Le chalet des pommiers",
    latitude: 43.287942,
    longitude: 5.544528,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
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
    id: "osm-node-3451705018",
    name: "Le Chaudron",
    instagram_handle: "lechaudroncassis",
    latitude: 43.214757,
    longitude: 5.539298,
    neighborhood: "Littoral Sud",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["late_opening"]
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
    criteria: ["has_wifi","wheelchair_accessible"]
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
    id: "osm-node-8037536735",
    name: "Le cochon terrible",
    latitude: 43.356646,
    longitude: 5.487964,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["has_wifi"]
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
    id: "osm-node-2030400907",
    name: "Le Colysee",
    latitude: 43.364334,
    longitude: 5.497058,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["wheelchair_accessible"]
  }),
  makePlace({
    id: "osm-node-10963925838",
    name: "Le Commis d'Office",
    latitude: 43.292956,
    longitude: 5.377581,
    neighborhood: "Noailles",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["has_wifi"]
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
    id: "osm-node-9043112618",
    name: "Le Comptoir aux Huiles by Delucce",
    latitude: 43.298838,
    longitude: 5.366557,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["late_opening"]
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
    id: "osm-node-3057637433",
    name: "Le Comptoir du Naio",
    latitude: 43.214219,
    longitude: 5.534824,
    neighborhood: "Littoral Sud",
    address: "6 Quai Carnot, Marseille",
    category: "Restaurant",
    criteria: ["has_terrace"]
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
    id: "osm-node-5303348841",
    name: "Le Coquet Matthieu",
    latitude: 43.292493,
    longitude: 5.566918,
    neighborhood: "Marseille",
    address: "Marseille",
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
    id: "osm-node-3451705019",
    name: "Le Delphin",
    latitude: 43.214281,
    longitude: 5.538213,
    neighborhood: "Littoral Sud",
    address: "Marseille",
    category: "Bar",
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
    id: "osm-node-13252460759",
    name: "Le Flint",
    latitude: 43.386158,
    longitude: 5.35886,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Bar",
    criteria: []
  }),
  makePlace({
    id: "osm-node-5137416832",
    name: "Le Florentin",
    latitude: 43.293555,
    longitude: 5.568005,
    neighborhood: "Marseille",
    address: "14 Cours Marechal Foch, Marseille",
    category: "Restaurant",
    criteria: ["late_opening"]
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
    id: "osm-node-12335303777",
    name: "Le Futuria",
    latitude: 43.394287,
    longitude: 5.238455,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Bar",
    criteria: []
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
    category: "Restaurant",
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
    id: "osm-node-1659144183",
    name: "Le Golfe",
    latitude: 43.214545,
    longitude: 5.53534,
    neighborhood: "Littoral Sud",
    address: "Marseille",
    category: "Bar",
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
    criteria: ["has_terrace"]
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
    id: "osm-node-3451666774",
    name: "Le Grand Bleu",
    latitude: 43.214645,
    longitude: 5.537593,
    neighborhood: "Littoral Sud",
    address: "12 Quai des Baux, Marseille",
    category: "Restaurant",
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
    id: "osm-way-76017992",
    name: "Le Grand Large",
    latitude: 43.213021,
    longitude: 5.53814,
    neighborhood: "Littoral Sud",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["has_terrace","takes_reservations"]
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
    id: "osm-node-11491756669",
    name: "Le Jade",
    latitude: 43.28302,
    longitude: 5.532824,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
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
    id: "osm-node-5340008312",
    name: "Le jardin cache",
    latitude: 43.296614,
    longitude: 5.48323,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["has_terrace"]
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
    id: "osm-way-165115266",
    name: "Le K",
    latitude: 43.361636,
    longitude: 5.237686,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Restaurant",
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
    id: "osm-node-5041218622",
    name: "Le Levant",
    latitude: 43.300731,
    longitude: 5.382111,
    neighborhood: "Longchamp",
    address: "18 Boulevard de la Liberte, Marseille",
    category: "Restaurant",
    criteria: ["late_opening"]
  }),
  makePlace({
    id: "osm-node-13326753801",
    name: "le libanais contemporain",
    latitude: 43.291732,
    longitude: 5.374131,
    neighborhood: "Marseille",
    address: "30 Rue Fortia, Marseille",
    category: "Restaurant",
    criteria: []
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
    id: "osm-node-4300895446",
    name: "Le Marigny",
    latitude: 43.292562,
    longitude: 5.568012,
    neighborhood: "Marseille",
    address: "5 Rue de la Republique, Marseille",
    category: "Bar",
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
    id: "osm-way-154761086",
    name: "Le Meltin'Pot",
    latitude: 43.282049,
    longitude: 5.525298,
    neighborhood: "Marseille",
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
    id: "osm-node-4463345819",
    name: "Le Moga",
    latitude: 43.300903,
    longitude: 5.388233,
    neighborhood: "Longchamp",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
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
    id: "osm-node-11486778470",
    name: "Le Nippon",
    latitude: 43.290015,
    longitude: 5.559631,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
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
    criteria: ["has_terrace","late_opening"]
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
    id: "osm-node-4560696392",
    name: "Le Paki",
    latitude: 43.294321,
    longitude: 5.386975,
    neighborhood: "Cours Julien",
    address: "51 Place Jean Jaures, Marseille",
    category: "Restaurant",
    criteria: ["has_terrace"]
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
    criteria: ["late_opening"]
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
    criteria: []
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
    criteria: []
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
    id: "osm-node-1836768644",
    name: "Le Perroquet",
    latitude: 43.213521,
    longitude: 5.538749,
    neighborhood: "Littoral Sud",
    address: "Marseille",
    category: "Restaurant",
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
    id: "osm-node-1886609582",
    name: "Le Petit Angkor",
    latitude: 43.291894,
    longitude: 5.372912,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
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
    criteria: ["has_terrace","wheelchair_accessible"]
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
    id: "osm-node-5020212275",
    name: "Le Petit Nice Passedat",
    latitude: 43.280144,
    longitude: 5.351924,
    neighborhood: "Malmousque",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["late_opening","wheelchair_accessible"]
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
    criteria: ["has_terrace","late_opening"]
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
    criteria: ["late_opening"]
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
    id: "osm-node-12294762841",
    name: "Le Poisson Rouge",
    latitude: 43.214219,
    longitude: 5.539016,
    neighborhood: "Littoral Sud",
    address: "Impasse Farine, Marseille",
    category: "Restaurant",
    criteria: ["has_terrace"]
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
    id: "osm-node-3451705021",
    name: "Le Port",
    latitude: 43.214316,
    longitude: 5.538093,
    neighborhood: "Littoral Sud",
    address: "Marseille",
    category: "Bar",
    criteria: []
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
    criteria: ["has_terrace"]
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
    id: "osm-node-3683681582",
    name: "Le regence",
    latitude: 43.294406,
    longitude: 5.567908,
    neighborhood: "Marseille",
    address: "1 Cours Voltaire, Marseille",
    category: "Bar",
    criteria: ["has_terrace","late_opening"]
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
    id: "osm-way-73294767",
    name: "Le Relais de Passe-Temps",
    latitude: 43.323845,
    longitude: 5.517541,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
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
    id: "osm-node-12292185158",
    name: "Le Romarin",
    latitude: 43.214613,
    longitude: 5.538713,
    neighborhood: "Littoral Sud",
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
    id: "osm-node-9789210038",
    name: "Le Rovenain",
    latitude: 43.370403,
    longitude: 5.252412,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
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
    id: "osm-node-10879517281",
    name: "Le Salon Provencal",
    latitude: 43.335672,
    longitude: 5.482218,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
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
    criteria: ["late_opening"]
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
    id: "osm-node-5294387640",
    name: "Le Taj",
    latitude: 43.284569,
    longitude: 5.547087,
    neighborhood: "Marseille",
    address: "2 Avenue des Platanes, Marseille",
    category: "Restaurant",
    criteria: ["has_terrace","late_opening"]
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
    criteria: ["has_wifi"]
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
    criteria: ["late_opening"]
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
    id: "osm-node-5132958103",
    name: "Le Voltaire",
    latitude: 43.295068,
    longitude: 5.568034,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Bar",
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
    id: "osm-node-5137416841",
    name: "Le Week-End",
    latitude: 43.293367,
    longitude: 5.567354,
    neighborhood: "Marseille",
    address: "11 Cours Marechal Foch, Marseille",
    category: "Bar",
    criteria: ["has_terrace"]
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
    id: "osm-node-11473209170",
    name: "Les 2 z'elles",
    latitude: 43.288002,
    longitude: 5.544101,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
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
    id: "osm-way-75909637",
    name: "Les Belles Canailles",
    latitude: 43.2117,
    longitude: 5.529546,
    neighborhood: "Littoral Sud",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
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
    id: "osm-node-13659307583",
    name: "Les Caves du Port",
    latitude: 43.215293,
    longitude: 5.536982,
    neighborhood: "Littoral Sud",
    address: "Marseille",
    category: "Bar",
    criteria: []
  }),
  makePlace({
    id: "osm-node-12134105198",
    name: "Les Collegues",
    latitude: 43.23112,
    longitude: 5.554218,
    neighborhood: "Littoral Sud",
    address: "Marseille",
    category: "Restaurant",
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
    id: "osm-node-5263997199",
    name: "Les Delices d'Orient",
    latitude: 43.292268,
    longitude: 5.569865,
    neighborhood: "Marseille",
    address: "8 Boulevard Jean Jaures, Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-7617210780",
    name: "Les delices de Babylone",
    latitude: 43.292468,
    longitude: 5.565589,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["late_opening"]
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
    id: "osm-node-3724763715",
    name: "Les delices de Rania",
    latitude: 43.335367,
    longitude: 5.420264,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
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
    id: "osm-node-5294421931",
    name: "Les enfants gates",
    latitude: 43.28681,
    longitude: 5.531974,
    neighborhood: "Marseille",
    address: "2435 Route de la Legion, Marseille",
    category: "Restaurant",
    criteria: ["has_terrace","late_opening"]
  }),
  makePlace({
    id: "osm-node-3451705022",
    name: "Les Frangines",
    latitude: 43.214806,
    longitude: 5.539258,
    neighborhood: "Littoral Sud",
    address: "Marseille",
    category: "Restaurant",
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
    id: "osm-node-2866310390",
    name: "Les Grandes Tables",
    latitude: 43.310277,
    longitude: 5.391124,
    neighborhood: "Belle de Mai",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["has_terrace","wheelchair_accessible"]
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
    id: "osm-way-72766882",
    name: "Les Jardins d'Asie",
    latitude: 43.34497,
    longitude: 5.486574,
    neighborhood: "Marseille",
    address: "593 Avenue du General Leclerc, Marseille",
    category: "Restaurant",
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
    id: "osm-node-1513994387",
    name: "Les lumieres",
    latitude: 43.29784,
    longitude: 5.371585,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Restaurant",
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
    criteria: []
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
    criteria: []
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
    id: "osm-node-12800751930",
    name: "Lido Saigon",
    latitude: 43.263436,
    longitude: 5.374169,
    neighborhood: "Littoral Sud",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
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
    criteria: ["late_opening","takes_reservations"]
  }),
  makePlace({
    id: "osm-node-11178658069",
    name: "Lion bonjour",
    latitude: 43.293225,
    longitude: 5.375267,
    neighborhood: "Noailles",
    address: "Marseille",
    category: "Restaurant",
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
    id: "osm-node-5294488488",
    name: "Loberge Resto Club",
    latitude: 43.288064,
    longitude: 5.574956,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["late_opening"]
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
    id: "osm-node-7925474613",
    name: "Long chau",
    latitude: 43.287456,
    longitude: 5.465662,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
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
    id: "osm-node-13965785071",
    name: "Love Dessert",
    latitude: 43.328633,
    longitude: 5.426126,
    neighborhood: "Marseille",
    address: "155 Avenue de La Rose, Marseille",
    category: "Restaurant",
    criteria: []
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
    id: "osm-node-12259424162",
    name: "Lulo Bar",
    latitude: 43.293607,
    longitude: 5.382863,
    neighborhood: "Cours Julien",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-4870093285",
    name: "Luzumaki Artisan sushi",
    latitude: 43.29249,
    longitude: 5.570155,
    neighborhood: "Marseille",
    address: "21 Boulevard Jean Jaures, Marseille",
    category: "Restaurant",
    criteria: []
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
    id: "osm-node-13825226201",
    name: "Makhlouf",
    latitude: 43.288932,
    longitude: 5.378773,
    neighborhood: "Marseille",
    address: "109 Rue Paradis, Marseille",
    category: "Restaurant",
    criteria: ["late_opening"]
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
    id: "osm-node-5815425648",
    name: "Manneken-Pis",
    latitude: 43.290394,
    longitude: 5.368932,
    neighborhood: "Saint-Victor",
    address: "Marseille",
    category: "Bar",
    criteria: []
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
    id: "osm-node-3451679606",
    name: "Marco Polo",
    latitude: 43.21504,
    longitude: 5.536952,
    neighborhood: "Littoral Sud",
    address: "Marseille",
    category: "Restaurant",
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
    criteria: ["has_terrace","late_opening","wheelchair_accessible"]
  }),
  makePlace({
    id: "osm-node-9893689917",
    name: "Massilia",
    latitude: 43.299645,
    longitude: 5.369387,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
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
    criteria: []
  }),
  makePlace({
    id: "osm-node-11297513832",
    name: "Mauvaise Herbe",
    latitude: 43.294442,
    longitude: 5.376941,
    neighborhood: "Noailles",
    address: "6 Rue Haxo, Marseille",
    category: "Restaurant",
    criteria: []
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
    id: "osm-node-11534007657",
    name: "Melan Grill",
    latitude: 43.296749,
    longitude: 5.377932,
    neighborhood: "Noailles",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["has_terrace"]
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
    id: "osm-node-5303380984",
    name: "Mezouar Abdelkader",
    latitude: 43.291835,
    longitude: 5.568186,
    neighborhood: "Marseille",
    address: "8 Rue Peypagan, Marseille",
    category: "Bar",
    criteria: []
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
    criteria: ["late_opening"]
  }),
  makePlace({
    id: "osm-node-2937784257",
    name: "Monsieur Brun",
    latitude: 43.214863,
    longitude: 5.536583,
    neighborhood: "Littoral Sud",
    address: "2 Quai Calendal, Marseille",
    category: "Restaurant",
    criteria: ["has_terrace"]
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
    id: "osm-node-2375838291",
    name: "Morrison's",
    latitude: 43.292021,
    longitude: 5.384533,
    neighborhood: "Cours Julien",
    address: "Marseille",
    category: "Bar",
    criteria: ["has_terrace","wheelchair_accessible"]
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
    criteria: ["has_terrace","late_opening"]
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
    id: "osm-node-11064486120",
    name: "Namaste",
    latitude: 43.28362,
    longitude: 5.385464,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["has_terrace"]
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
    criteria: []
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
    id: "osm-node-4870093286",
    name: "Nikki Sushi",
    latitude: 43.2939,
    longitude: 5.56805,
    neighborhood: "Marseille",
    address: "16 Cours Marechal Foch, Marseille",
    category: "Restaurant",
    criteria: ["late_opening"]
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
    criteria: []
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
    id: "osm-node-9047228015",
    name: "O REV",
    latitude: 43.214855,
    longitude: 5.538354,
    neighborhood: "Littoral Sud",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["late_opening"]
  }),
  makePlace({
    id: "osm-node-5822477586",
    name: "O saveurs du Liban",
    latitude: 43.293569,
    longitude: 5.373524,
    neighborhood: "Noailles",
    address: "Marseille",
    category: "Restaurant",
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
    id: "osm-node-1933796321",
    name: "O'Pakistan",
    latitude: 43.294129,
    longitude: 5.384806,
    neighborhood: "Cours Julien",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["has_terrace"]
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
    criteria: ["has_terrace","has_wifi","wheelchair_accessible"]
  }),
  makePlace({
    id: "osm-node-11482652645",
    name: "oh!bowls",
    latitude: 43.278408,
    longitude: 5.389306,
    neighborhood: "Marseille",
    address: "9 Rue Borde, Marseille",
    category: "Restaurant",
    criteria: []
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
    criteria: ["late_opening"]
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
    id: "osm-node-9929575748",
    name: "Palais de l'Inde",
    latitude: 43.294162,
    longitude: 5.384673,
    neighborhood: "Cours Julien",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
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
    criteria: []
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
    id: "osm-node-7749927817",
    name: "Paula",
    latitude: 43.292074,
    longitude: 5.568628,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
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
    criteria: ["late_opening"]
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
    id: "osm-node-11433145531",
    name: "Piou",
    latitude: 43.291672,
    longitude: 5.374659,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-11586544069",
    name: "Pipette",
    latitude: 43.291592,
    longitude: 5.370941,
    neighborhood: "Saint-Victor",
    address: "Marseille",
    category: "Bar",
    criteria: ["late_opening"]
  }),
  makePlace({
    id: "osm-node-1951024439",
    name: "Pizz'Adore",
    latitude: 43.355727,
    longitude: 5.486818,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
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
    id: "osm-node-5204378430",
    name: "Pizza Bea",
    latitude: 43.343063,
    longitude: 5.469199,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
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
    criteria: []
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
    id: "osm-node-5976725358",
    name: "Pizza Pasta",
    latitude: 43.255884,
    longitude: 5.566443,
    neighborhood: "Littoral Sud",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
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
    criteria: ["late_opening"]
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
    id: "osm-node-12250968788",
    name: "Pizzeria le Mail",
    latitude: 43.390688,
    longitude: 5.23675,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-3516272052",
    name: "Pizzeria Roma",
    latitude: 43.289117,
    longitude: 5.572885,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-9697856683",
    name: "Placette",
    latitude: 43.297263,
    longitude: 5.370649,
    neighborhood: "Le Panier",
    address: "22 Rue de la Guirlande, Marseille",
    category: "Restaurant",
    criteria: []
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
    criteria: []
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
    id: "osm-node-9051015144",
    name: "Poissonnerie Laurent",
    latitude: 43.214723,
    longitude: 5.536197,
    neighborhood: "Littoral Sud",
    address: "5 Quai Jean Jacques Barthelemy, Marseille",
    category: "Restaurant",
    criteria: ["has_terrace","late_opening"]
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
    criteria: []
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
    criteria: []
  }),
  makePlace({
    id: "osm-node-11817252886",
    name: "Pure Braise",
    latitude: 43.333601,
    longitude: 5.481437,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
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
    criteria: ["has_terrace","has_wifi"]
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
    id: "osm-node-2862082932",
    name: "Rafraf",
    latitude: 43.311687,
    longitude: 5.37265,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Restaurant",
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
    criteria: []
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
    id: "osm-node-9124102961",
    name: "Regain",
    latitude: 43.293159,
    longitude: 5.389313,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
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
    criteria: []
  }),
  makePlace({
    id: "osm-node-5331378895",
    name: "Restauran farafina",
    latitude: 43.309865,
    longitude: 5.534046,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["has_terrace","late_opening"]
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
    id: "osm-way-154749546",
    name: "Restaurant De La Gare",
    latitude: 43.28351,
    longitude: 5.514754,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["late_opening"]
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
    id: "osm-node-5329642870",
    name: "Restaurant la cadette",
    latitude: 43.294155,
    longitude: 5.565336,
    neighborhood: "Marseille",
    address: "120 Avenue du 8 Mai, Marseille",
    category: "Restaurant",
    criteria: ["has_terrace"]
  }),
  makePlace({
    id: "osm-node-5329616458",
    name: "Restaurant la rosee",
    latitude: 43.292464,
    longitude: 5.565422,
    neighborhood: "Marseille",
    address: "120 Avenue Loulou Delfieu, Marseille",
    category: "Restaurant",
    criteria: ["late_opening"]
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
    id: "osm-node-5329637510",
    name: "Restaurant le Mande",
    latitude: 43.293614,
    longitude: 5.563822,
    neighborhood: "Marseille",
    address: "115 Passerelle d'Acces du Parking du McDonald's, Marseille",
    category: "Restaurant",
    criteria: ["has_terrace","late_opening"]
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
    id: "osm-node-13659307586",
    name: "Restaurant le Patio",
    latitude: 43.215477,
    longitude: 5.536787,
    neighborhood: "Littoral Sud",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-9730062736",
    name: "Restaurant les Sept Themes",
    latitude: 43.39816,
    longitude: 5.365426,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
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
    id: "osm-way-287451794",
    name: "Restaurant Scolaire",
    latitude: 43.385283,
    longitude: 5.577154,
    neighborhood: "Marseille",
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
    criteria: []
  }),
  makePlace({
    id: "osm-node-6627597553",
    name: "Restaurant Thien Huong",
    latitude: 43.308377,
    longitude: 5.437036,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-3486984363",
    name: "Restaurant UCPA (niv. -1)",
    latitude: 43.338513,
    longitude: 5.257331,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
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
    criteria: []
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
    criteria: ["has_terrace","wheelchair_accessible"]
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
    id: "osm-node-12806292301",
    name: "Ripaille",
    instagram_handle: "ripaille_marseille",
    latitude: 43.300089,
    longitude: 5.369656,
    neighborhood: "Le Panier",
    address: "56 Rue de Lorette, Marseille",
    category: "Restaurant",
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
    criteria: []
  }),
  makePlace({
    id: "osm-node-3172251361",
    name: "Ristorante Del Arte",
    latitude: 43.294573,
    longitude: 5.374834,
    neighborhood: "Noailles",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["has_terrace","late_opening","wheelchair_accessible"]
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
    criteria: ["late_opening"]
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
    id: "osm-node-11055602105",
    name: "Sa mesa sarda",
    latitude: 43.282761,
    longitude: 5.433187,
    neighborhood: "Marseille",
    address: "1 Boulevard Queirel, Marseille",
    category: "Restaurant",
    criteria: []
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
    id: "osm-node-1126788250",
    name: "Sake",
    latitude: 43.289871,
    longitude: 5.382254,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
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
    id: "osm-node-12292185155",
    name: "Saveurs Latines",
    latitude: 43.214453,
    longitude: 5.538858,
    neighborhood: "Littoral Sud",
    address: "Marseille",
    category: "Restaurant",
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
    id: "osm-node-12114406601",
    name: "Shin Ramen",
    latitude: 43.291744,
    longitude: 5.562381,
    neighborhood: "Marseille",
    address: "Avenue de Laute, Marseille",
    category: "Restaurant",
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
    id: "osm-node-5743534864",
    name: "Snack express",
    latitude: 43.296233,
    longitude: 5.376214,
    neighborhood: "Noailles",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
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
    id: "osm-node-13659307593",
    name: "Snack Le Repaire",
    latitude: 43.213648,
    longitude: 5.539462,
    neighborhood: "Littoral Sud",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
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
    id: "osm-node-9697141286",
    name: "Splendido",
    latitude: 43.297631,
    longitude: 5.373298,
    neighborhood: "Noailles",
    address: "Marseille",
    category: "Restaurant",
    criteria: []
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
    id: "osm-node-6700838091",
    name: "Street Pizz'",
    latitude: 43.288713,
    longitude: 5.45555,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["covered_outdoor","late_opening"]
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
    id: "osm-node-5340051318",
    name: "Suandshi",
    latitude: 43.29504,
    longitude: 5.489142,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["has_terrace"]
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
    id: "osm-node-4846674722",
    name: "Sur Le Pouce",
    instagram_handle: "resto_surlepouce",
    latitude: 43.299787,
    longitude: 5.378545,
    neighborhood: "Longchamp",
    address: "2 Rue des Convalescents, Marseille",
    category: "Restaurant",
    criteria: ["late_opening"]
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
    id: "osm-node-3194279756",
    name: "Sushi Sashimi",
    latitude: 43.345262,
    longitude: 5.461209,
    neighborhood: "Marseille",
    address: "12 Avenue Frederic Chevillon, Marseille",
    category: "Restaurant",
    criteria: ["late_opening","wheelchair_accessible"]
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
    criteria: ["late_opening"]
  }),
  makePlace({
    id: "osm-node-8426660399",
    name: "Tak'away",
    latitude: 43.214839,
    longitude: 5.539447,
    neighborhood: "Littoral Sud",
    address: "1 Avenue Docteur Emmanuel Agostini, Marseille",
    category: "Restaurant",
    criteria: []
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
    id: "osm-node-3369399041",
    name: "Tan A",
    latitude: 43.283034,
    longitude: 5.533368,
    neighborhood: "Marseille",
    address: "1 Avenue Alice, Marseille",
    category: "Restaurant",
    criteria: ["late_opening"]
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
    criteria: ["late_opening"]
  }),
  makePlace({
    id: "osm-node-5041218623",
    name: "Tapas Rojas",
    latitude: 43.3031,
    longitude: 5.38956,
    neighborhood: "Longchamp",
    address: "Marseille",
    category: "Restaurant",
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
    criteria: ["has_terrace"]
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
    id: "osm-node-11014301206",
    name: "Terroir et maree",
    latitude: 43.223062,
    longitude: 5.543938,
    neighborhood: "Littoral Sud",
    address: "Marseille",
    category: "Restaurant",
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
    id: "osm-node-12145490801",
    name: "Thaiwoke",
    latitude: 43.286863,
    longitude: 5.386677,
    neighborhood: "Marseille",
    address: "25 Boulevard Baille, Marseille",
    category: "Restaurant",
    criteria: []
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
    criteria: ["has_terrace","wheelchair_accessible"]
  }),
  makePlace({
    id: "osm-node-5272054373",
    name: "The Red Lion",
    latitude: 43.294325,
    longitude: 5.559264,
    neighborhood: "Marseille",
    address: "252 Avenue Antide Boyer, Marseille",
    category: "Bar",
    criteria: []
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
    criteria: []
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
    id: "osm-node-13718046126",
    name: "Tiki Bar",
    latitude: 43.297729,
    longitude: 5.536615,
    neighborhood: "Marseille",
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
    id: "osm-node-10691365143",
    name: "Train Inc Cafe",
    latitude: 43.340234,
    longitude: 5.256917,
    neighborhood: "Le Panier",
    address: "Marseille",
    category: "Bar",
    criteria: ["wheelchair_accessible"]
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
    criteria: []
  }),
  makePlace({
    id: "osm-node-5137416837",
    name: "Tutti Quanti",
    latitude: 43.291602,
    longitude: 5.569111,
    neighborhood: "Marseille",
    address: "50 Rue de la Republique, Marseille",
    category: "Restaurant",
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
    id: "osm-node-4528496329",
    name: "Une table au sud",
    latitude: 43.296368,
    longitude: 5.373659,
    neighborhood: "Noailles",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["late_opening","wheelchair_accessible"]
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
    id: "osm-node-12297436481",
    name: "Victoria",
    latitude: 43.214526,
    longitude: 5.539161,
    neighborhood: "Littoral Sud",
    address: "Marseille",
    category: "Bar",
    criteria: ["has_terrace"]
  }),
  makePlace({
    id: "osm-way-154765681",
    name: "Viet Xua",
    latitude: 43.281056,
    longitude: 5.518148,
    neighborhood: "Marseille",
    address: "176 Boulevard Voltaire, Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-way-154761608",
    name: "Villa Collomba",
    latitude: 43.286782,
    longitude: 5.514836,
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
    criteria: []
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
    id: "osm-node-5592877410",
    name: "Wadina",
    latitude: 43.286296,
    longitude: 5.377544,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["late_opening"]
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
    id: "osm-node-7843180642",
    name: "White Rabbit",
    latitude: 43.301404,
    longitude: 5.364543,
    neighborhood: "Le Panier",
    address: "23 Boulevard Jacques Saade Quai de la Joliette, Marseille",
    category: "Bar",
    criteria: ["has_terrace"]
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
    id: "osm-node-13585102696",
    name: "Y'a un Resto",
    latitude: 43.287972,
    longitude: 5.383771,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["wheelchair_accessible"]
  }),
  makePlace({
    id: "osm-node-3057637134",
    name: "Yacht Club de Cassis",
    latitude: 43.213204,
    longitude: 5.535582,
    neighborhood: "Littoral Sud",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["has_wifi"]
  }),
  makePlace({
    id: "osm-node-12386231670",
    name: "Yafel",
    latitude: 43.292211,
    longitude: 5.382947,
    neighborhood: "Cours Julien",
    address: "1 Boulevard Theodore Thurner, Marseille",
    category: "Restaurant",
    criteria: ["late_opening","wheelchair_accessible"]
  }),
  makePlace({
    id: "osm-node-13796146601",
    name: "Yam by Nour",
    latitude: 43.293028,
    longitude: 5.383215,
    neighborhood: "Cours Julien",
    address: "86 Cours Julien, Marseille",
    category: "Restaurant",
    criteria: ["late_opening"]
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
    criteria: ["has_terrace","has_wifi"]
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
    latitude: 43.287616,
    longitude: 5.379132,
    neighborhood: "Marseille",
    address: "134 Rue Paradis, Marseille",
    category: "Restaurant",
    criteria: []
  }),
  makePlace({
    id: "osm-node-5132958111",
    name: "Zeu Burgers",
    latitude: 43.294899,
    longitude: 5.567586,
    neighborhood: "Marseille",
    address: "5 Rue Colonel de Roux, Marseille",
    category: "Restaurant",
    criteria: ["late_opening"]
  }),
  makePlace({
    id: "osm-node-7749927831",
    name: "Zia Concetta",
    latitude: 43.291815,
    longitude: 5.569949,
    neighborhood: "Marseille",
    address: "Marseille",
    category: "Restaurant",
    criteria: ["has_terrace"]
  }),
  makePlace({
    id: "osm-node-12677212834",
    name: "Zin Zin",
    latitude: 43.28819,
    longitude: 5.363283,
    neighborhood: "Saint-Victor",
    address: "18 Rue Guy de Combaud Roquebrune, Marseille",
    category: "Restaurant",
    criteria: ["wheelchair_accessible"]
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
