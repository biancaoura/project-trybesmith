import { Router } from 'express';
import OrderController from '../controllers/order.controller';
import validateOrder from '../middlewares/validateOrder';
import validateToken from '../middlewares/validateToken';

const orderController = new OrderController();

const router = Router();

router.post('/', validateToken, validateOrder, orderController.create);

router.get('/', orderController.getAll);

export default router;