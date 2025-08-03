export interface ICollection {
  id: string;
  name: string;
  description: string;
}

export interface ICollectionSetMetadata {
  id?: string;
  payload: ICollectionSet;
}

export interface ICollectionSet extends Record<string, unknown> {
  no: string;
  name: string;
  categoryId: number;
  imageUrl: string;
  weight: string;
  dimX: string;
  dimY: string;
  dimZ: string;
  yearReleased: number;

  buyPrice: number;
  buyDate: string;
}