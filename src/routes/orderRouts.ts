import { Router } from 'express';
import orderController from '../controllers/orderController';

const orderRouts = Router();

orderRouts.get('/', orderController.listOrders);

export default orderRouts;