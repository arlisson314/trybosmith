import { Request, Response } from 'express';
import productService from '../services/productServices';

const productsController = {
  async getAll(_req: Request, res: Response) {
    const data = await productService.getAll();
    return res.json(data);
  },
};

export default productsController;