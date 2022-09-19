import { Router } from 'express';
import * as userController from '../controllers/users';
import rescue from '../middlewares/rescue';
import { loginValidation } from '../middlewares/validations';

const loginRouter = Router();

loginRouter.post('/', loginValidation, rescue(userController.login));

export default loginRouter;