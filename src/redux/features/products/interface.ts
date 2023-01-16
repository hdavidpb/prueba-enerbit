export interface IInitialState {
  products: ProductResponse;
  loadingProducts: boolean;
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
  i_max: number;
  i_b: number;
  i_n: number;
  seals: number;
  id: number;
  created_at: string;
  updated_at: string | null;
}

export interface IGetProductsParams {
  page?: number;
  serial?: string;
  size?: number;
}
