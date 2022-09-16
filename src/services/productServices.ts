import productModel from '../models/productModel';
import { IAddProduct } from '../types';

const productService = {
  async addProduct(name: IAddProduct['name'], amount: IAddProduct['amount']) {
    const result = await productModel.addProduct(name, amount);
    return { code: 201, data: result };
  },

  async listProducts() {
    const result = await productModel.listProducts();
    return { code: 200, data: result };
  },
};

export default productService;