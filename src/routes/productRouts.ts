import { Router } from 'express';
import productsController from '../controllers/productController';

const productsRoutes = Router();

productsRoutes.post('/', productsController.addProduct);
productsRoutes.get('/', productsController.listProducts);

export default productsRoutes;