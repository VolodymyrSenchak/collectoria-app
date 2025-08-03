import api from './api.ts';
import type {ISetIntegration, ISetPriceIntegration} from '../models/integration/setIntegration.ts';

class SetsIntegrationApi {
  async findSetByCode(code: string): Promise<ISetIntegration> {
    const response = await api.get<ISetIntegration>(`/setsIntegration/setDetails/${code}`);
    return response.data;
  }

  async findSetPriceByCode(code: string): Promise<ISetPriceIntegration> {
    const response = await api.get<ISetPriceIntegration>(`/setsIntegration/setDetails/${code}/price`);
    return response.data;
  }
}

export const setsIntegrationApi = new SetsIntegrationApi();