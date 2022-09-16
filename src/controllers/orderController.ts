import { Request, Response } from 'express';
import orderService from '../services/orderService';

const orderController = {
  async listOrders(_req: Request, res: Response) {
    const { code, data } = await orderService.listOrders();
    return res.status(code).json(data);
  },
};

export default orderController;