import { Request, Response } from 'express';
import productService from '../services/productServices';

const productsController = {
  async addProduct(req: Request, res: Response) {
    const { name, amount } = req.body;
    const { code, data } = await productService.addProduct(name, amount);
    return res.status(code).json(data);
  },

  async listProducts(_req: Request, res: Response) {
    const { code, data } = await productService.listProducts();
    return res.status(code).json(data);
  },
};

export default productsController;