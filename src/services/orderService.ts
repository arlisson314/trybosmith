import orderModel from '../models/orderModel';

const orderService = {
  async listOrders() {
    const result = await orderModel.listOrders();
    return { code: 200, data: result };
  },
};

export default orderService;