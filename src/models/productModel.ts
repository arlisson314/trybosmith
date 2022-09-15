import { IAddProduct } from '../types';
import connection from './connection';

const TABLE = 'Trybesmith.Products';

const productModel = {
  async getAll(): Promise<IAddProduct[]> {
    const [products] = await connection.execute(`SELECT id, name, amount, orderId FROM ${TABLE}`);
    return products as IAddProduct[];
  },
};

export default productModel;