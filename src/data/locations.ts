export interface CampusLocation {
  name: string;
  lat: number;
  lng: number;
}

export const campusLocations: CampusLocation[] = [
  { name: "Kampus Utama APU", lat: -7.071300, lng: 110.362306 },
  { name: "SCCR", lat: -7.070469, lng: 110.358658 },
  { name: "Karenina Resort", lat: -7.069780, lng: 110.359637 },
  { name: "Dermanina", lat: -7.069804, lng: 110.359198 },
  { name: "Agung Farm", lat: -7.075039, lng: 110.358688 },
  { name: "Sains De Resto", lat: -7.074095, lng: 110.359329 },
];
