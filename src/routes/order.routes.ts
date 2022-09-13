import { Router } from 'express';
import * as orderController from '../controllers/orders';

const orderRouter = Router();

orderRouter.get('/', orderController.getAll);

export default orderRouter;
