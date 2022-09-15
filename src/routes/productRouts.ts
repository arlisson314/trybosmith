import { Router } from 'express';
import productsController from '../controllers/productController';

const productsRoutes = Router();

productsRoutes.get('/', productsController.getAll);

export default productsRoutes;