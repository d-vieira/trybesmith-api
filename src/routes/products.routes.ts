import { Router } from 'express';
import * as productController from '../controllers/products';
import rescue from '../middlewares/rescue';
import { productValidation } from '../middlewares/validations';

const productRouter = Router();

productRouter.post('/', productValidation, rescue(productController.create));
productRouter.get('/', rescue(productController.getAll));

export default productRouter;