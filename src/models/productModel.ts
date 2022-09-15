import { IgetProducts } from '../types';
import connection from './connection';

const TABLE = 'Trybesmith.Products';

const productModel = {
  async getAll(): Promise<IgetProducts[]> {
    const [products] = await connection.execute(`SELECT id, name, amount, orderId FROM ${TABLE}`);
    return products as IgetProducts[];
  },
};

export default productModel;