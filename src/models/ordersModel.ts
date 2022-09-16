import { RowDataPacket } from 'mysql2';
import { IOrder } from '../types';
import connection from './connection';

const TABLE = 'Trybesmith.Orders';

const listOrders = {
  async getOrders():Promise<IOrder[]> {
    const sql = `SELECT id, userId, productsIds FROM ${TABLE}`;
    const [orders] = await connection.execute<RowDataPacket[]>(sql);
    return orders as IOrder[];
  },
};

export default listOrders;