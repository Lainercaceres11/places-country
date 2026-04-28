export interface CountriesResponse {
  tld: string[];
  cca2: string;
  ccn3: string;
  cca3: string;
  cioc?: string;
  independent: boolean;
  status: Status;
  unMember: boolean;
  idd: Idd;
  capital: string[];
  altSpellings: string[];
  region: Region;
  subregion: Subregion;
  landlocked: boolean;
  borders?: string[];
  area: number;
  maps: Maps;
  population: number;
  fifa?: string;
  car: Car;
  timezones: string[];
  continents: Continent[];
  flag: string;
  name: Name;
  currencies: { [key: string]: Currency };
  languages: Languages;
  latlng: number[];
  demonyms: Demonyms;
  translations: { [key: string]: Translation };
  gini?: { [key: string]: number };
  flags: Flags;
  coatOfArms: CoatOfArms;
  startOfWeek: StartOfWeek;
  capitalInfo: CapitalInfo;
  postalCode: PostalCode;
}

export interface CapitalInfo {
  latlng?: number[];
}

export interface Car {
  signs?: string[];
  side: Side;
}

export enum Side {
  Left = "left",
  Right = "right",
}

export interface CoatOfArms {
  png?: string;
  svg?: string;
}

export enum Continent {
  NorthAmerica = "North America",
  Oceania = "Oceania",
  SouthAmerica = "South America",
}

export interface Currency {
  symbol: string;
  name: string;
}

export interface Demonyms {
  eng: EngClass;
  fra: EngClass;
}

export interface EngClass {
  f: string;
  m: string;
}

export interface Flags {
  png: string;
  svg: string;
  alt: string;
}

export interface Idd {
  root: string;
  suffixes: string[];
}

export interface Languages {
  spa?: SPA;
  fra?: string;
  eng?: EngEnum;
  jam?: string;
  nld?: string;
  pap?: string;
  kal?: string;
  bjz?: string;
  hat?: string;
  grn?: string;
  por?: string;
  aym?: string;
  que?: string;
}

export enum EngEnum {
  English = "English",
}

export enum SPA {
  Spanish = "Spanish",
}

export interface Maps {
  googleMaps: string;
  openStreetMaps: string;
}

export interface Name {
  common: string;
  official: string;
  nativeName: { [key: string]: Translation };
}

export interface Translation {
  official: string;
  common: string;
}

export interface PostalCode {
  format: null | string;
  regex: null | string;
}

enum Region {
  Americas = "Americas",
}

enum StartOfWeek {
  Monday = "monday",
  Sunday = "sunday",
}

enum Status {
  OfficiallyAssigned = "officially-assigned",
}

enum Subregion {
  Caribbean = "Caribbean",
  CentralAmerica = "Central America",
  NorthAmerica = "North America",
  SouthAmerica = "South America",
}
