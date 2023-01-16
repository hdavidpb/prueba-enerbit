export enum inputType {
  text = "text",
  number = "number",
  password = "password",
  email = "email",
  datetime = "datetime-local",
}

export enum buttonType {
  button = "button",
  submit = "submit",
  reset = "reset",
}

export interface ProductForm {
  connection_type: connectionType;
  storage_system: storageSystemType;
  condition: conditionType;
  owner: ownerType;
  serial: string;
  location: string;
  purchase: string;
  i_max: number;
  i_b: number;
  i_n: number;
  manufacturer: string;
  seals: number;
}

export enum ownerType {
  fr = "RF",
  or = "OR",
}

export enum connectionType {
  directa = "directa",
  semiDirecta = "semi-directa",
  indirecta = "indirecta",
}

export enum storageSystemType {
  interno = "interno",
  externo = "externo",
}

export enum conditionType {
  nuevo = "nuevo",
  usado = "usado",
}

export interface ISelectOptions {
  label: string;
  value: string;
}
