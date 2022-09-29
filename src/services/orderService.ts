import { StatusCodes } from 'http-status-codes';
import orderModel from '../models/orderModel';

const orderService = {
  async listOrders() {
    const result = await orderModel.listOrders();
    return { code: StatusCodes.OK, data: result };
  },
};

export default orderService;