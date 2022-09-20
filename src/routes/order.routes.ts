import { Router } from 'express';
import * as orderController from '../controllers/orders';
import auth from '../middlewares/auth';
import rescue from '../middlewares/rescue';
import { orderProductsValidation } from '../middlewares/validations';

const orderRouter = Router();

orderRouter.get('/', rescue(orderController.getAll));
orderRouter.post('/', auth, orderProductsValidation, rescue(orderController.create));

export default orderRouter;
