import { Router } from 'express';
import * as userController from '../controllers/users';
import { loginValidation } from '../middlewares/validations';

const loginRouter = Router();

loginRouter.post('/', loginValidation, userController.login);

export default loginRouter;