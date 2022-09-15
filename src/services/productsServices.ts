import productModel from '../models/productModel';
import { IAddProduct } from '../types';

const productService = {
  async getAll(): Promise<IAddProduct[]> {
    const result = await productModel.getAll();
    return result;
  },
};

export default productService;