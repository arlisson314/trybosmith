import { StatusCodes } from 'http-status-codes';
import productModel from '../models/productModel';
import { IAddProduct } from '../types';

const productService = {
  async addProduct(name: IAddProduct['name'], amount: IAddProduct['amount']) {
    const result = await productModel.addProduct(name, amount);
    return { code: StatusCodes.CREATED, data: result };
  },

  async listProducts() {
    const result = await productModel.listProducts();
    return { code: StatusCodes.OK, data: result };
  },
};

export default productService;