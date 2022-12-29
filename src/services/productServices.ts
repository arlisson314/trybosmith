import { StatusCodes } from 'http-status-codes';
import Joi from 'joi';
import productModel from '../models/productModel';
import { IAddProduct } from '../types';

const productService = {
  async ValidateProducts(unknown: unknown): Promise<IAddProduct> {
    const schema = Joi.object<IAddProduct>({
      name: Joi.string().required().min(3),
      amount: Joi.string().required().min(3),
    });
    const result = await schema.validateAsync(unknown);
    return result;
  },

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