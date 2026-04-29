export interface PlacesNearbyResponse {
  type: string;
  features: Feature[];
}

export interface Feature {
  type: string;
  properties: Properties;
  geometry: Geometry;
}

export interface Geometry {
  type: string;
  coordinates: number[];
}

export interface Properties {
  name: string;
  country: string;
  country_code: string;
  region: string;
  state: string;
  county: string;
  city: string;
  postcode: string;
  district?: string;
  suburb: string;
  street: string;
  housenumber?: string;
  iso3166_2: string;
  lon: number;
  lat: number;
  state_code: string;
  formatted: string;
  address_line1: string;
  address_line2: string;
  categories: string[];
  details: string[];
  datasource: Datasource;
  website: string;
  opening_hours: string;
  contact: Contact;
  facilities?: Facilities;
  catering?: Catering;
  place_id: string;
  operator?: string;
  name_international?: string;
}

export interface Catering {
  cuisine: string;
}


export interface Contact {
  phone?: string;
  email?: string;
}


export interface Datasource {
  sourcename: string;
  attribution: string;
  license: string;
  url: string;
  raw: Raw;
}

export interface Raw {
  name: string;
  email?: string;
  phone?: string;
  osm_id: number;
  amenity: string;
  cuisine?: string;
  website: string;
  osm_type: string;
  "addr:street"?: string;
  opening_hours: string;
  internet_access?: string;
  "addr:housenumber"?: string;
  "addr:postcode"?: string;
  operator?: string;
  "name:en"?: string;
  "name:nl"?: string;
  "website:menu"?: string;
}



export interface Facilities {
  internet_access: boolean;
}
