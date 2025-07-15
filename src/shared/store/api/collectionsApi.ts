import type {ICollection, ICollectionSet} from '../../models/collections';
import api from './api.ts';
import type {AxiosResponse} from "axios";

class CollectionsApi {
  async getCollections(): Promise<ICollection[]> {
    const response = await api.get<ICollection[]>('/collections');
    return response.data;
  }

  async getCollection(id: string): Promise<ICollection> {
    const response = await api.get<ICollection>(`/collections/${id}`);
    return response.data;
  }

  async getCollectionSets(id: string): Promise<ICollectionSet[]> {
    const response = await api.get<ICollectionSet[]>(`/collections/${id}/sets`);
    return response.data;
  }

  async saveCollection(collection: ICollection): Promise<string> {
    const response = await api.post<ICollection, AxiosResponse<string>>('/collections', collection);
    return response.data;
  }

  async saveCollectionSet(collectionId: string, collectionSet: ICollectionSet): Promise<void> {
    await api.post<ICollection>(`/collections/${collectionId}/sets`, collectionSet);
  }

  async deleteCollection(id: string): Promise<void> {
    await api.delete(`/collections/${id}`);
  }

  async deleteCollectionSet(collectionId: string, setId: string): Promise<void> {
    await api.delete(`/collections/${collectionId}/sets/${setId}`);
  }
}

export const collectionsService = new CollectionsApi();
