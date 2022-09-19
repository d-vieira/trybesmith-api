import { Router } from 'express';
import * as orderController from '../controllers/orders';
import rescue from '../middlewares/rescue';

const orderRouter = Router();

orderRouter.get('/', rescue(orderController.getAll));

export default orderRouter;
