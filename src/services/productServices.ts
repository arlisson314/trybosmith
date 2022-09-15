import productModel from '../models/productModel';

const productService = {
  async getAll() {
    const result = await productModel.getAll();
    return { code: 200, data: result };
  },
};

export default productService;