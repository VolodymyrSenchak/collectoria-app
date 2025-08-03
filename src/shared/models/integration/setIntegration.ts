export interface ISetIntegration {
  no: string;
  name: string;
  type: string;
  category_id: number;
  image_url: string;
  thumbnail_url: string;
  weight: string;
  dim_x: string;
  dim_y: string;
  dim_z: string;
  year_released: number;
  is_obsolete: boolean;
}

export interface ISetPriceIntegration {
  item: {
    no: string;
    type: string;
  };
  new_or_used: string;
  currency_code: string;
  min_price: string;
  max_price: string;
  avg_price: string;
  qty_avg_price: string;
  unit_quantity: number;
  total_quantity: number;
}
