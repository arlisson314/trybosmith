import { Request, Response } from 'express';
import productService from '../services/productServices';
// import productService from '../services/productServices';

const productsController = {
  async getAll(_req: Request, res: Response) {
    const { code, data } = await productService.getAll();
    return res.status(code).json(data);
  },
};

export default productsController;