import { ResultSetHeader, RowDataPacket } from 'mysql2';
import { IAddProduct, IgetProducts } from '../types';
import connection from './connection';

const PRODUCT_TABLE = 'Trybesmith.Products';

const productModel = {
  async addProduct(name: IAddProduct['name'], amount: IAddProduct['amount']): Promise<IAddProduct> {
    const sql = `INSERT INTO ${PRODUCT_TABLE} (name, amount) VALUES (?, ?)`;
    const [{ insertId }] = await connection.execute<ResultSetHeader>(sql, [name, amount]);
    return { id: insertId, name, amount };
  },

  async listProducts(): Promise<IgetProducts[]> {
    const sql = `SELECT id, name, amount, orderId FROM ${PRODUCT_TABLE}`;
    const [products] = await connection.execute<RowDataPacket[]>(sql);
    return products as IgetProducts[];
  },
};

export default productModel;
