import { Router } from 'express';
import * as productController from '../controllers/products';

const productRouter = Router();

productRouter.post('/', productController.create);
// productRouter.get('/', productController.getAll);

export default productRouter;