export interface ICollection {
  id: string;
  name: string;
  description: string;
}

export interface ICollectionSetMetadata {
  id?: string;
  payload: ICollectionSet;
}

export interface ICollectionSet {
  name: string;
  code: string;
  partsCount: number;
  buyDate: string;
  image: string;
  buyPrice: number;
  actualPrice: number;
  link: string;
}