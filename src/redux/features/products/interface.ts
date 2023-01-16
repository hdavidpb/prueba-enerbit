export interface IInitialState {
  products: ProductResponse;
  loadingProducts: boolean;
  selectedProduct?: Item;
}

export interface ProductResponse {
  items: Item[];
  page: number;
  size: number;
  total: number;
  pages: number;
  next_page: null;
  previous_page: null;
}

export interface Item {
  serial: string;
  connection_type: string;
  storage_system: string;
  condition: string;
  owner: string;
  location: string;
  manufacturer: string;
  purchase: string;
  i_max: number | string;
  i_b: number | string;
  i_n: number | string;
  seals: number | string;
  id: number | string;
  created_at: string;
  updated_at: string | null;
}

export interface ItemForm {
  serial: string;
  connection_type: string;
  storage_system: string;
  condition: string;
  owner: string;
  location: string;
  manufacturer: string;
  purchase: string;
  i_max: number | string;
  i_b: number | string;
  i_n: number | string;
  seals: number | string;
}

export interface IGetProductsParams {
  page?: number;
  serial?: string;
  size?: number;
}
