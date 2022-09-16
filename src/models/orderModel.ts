import { RowDataPacket } from 'mysql2';
import { IOrder } from '../types';
import connection from './connection';

const ORDER_TABLE = 'Trybesmith.Orders';
const PRODUCT_TABLE = 'Trybesmith.Products';

const orderModel = {
  async listOrders():Promise<IOrder[]> {
    const sql = `SELECT o.id, o.userId, JSON_ARRAYAGG(p.id) AS productsIds
    FROM ${ORDER_TABLE} AS o
    INNER JOIN ${PRODUCT_TABLE} AS p
    ON o.id = p.orderId
    GROUP BY p.orderId
    ORDER BY o.userId`;
    const [orders] = await connection.execute<RowDataPacket[]>(sql);
    return orders as IOrder[];
  },
};

export default orderModel;
