import { Router } from 'express';
import * as userController from '../controllers/users';
import rescue from '../middlewares/rescue';
import { createValidation } from '../middlewares/validations';

const userRouter = Router();

userRouter.post('/', createValidation, rescue(userController.create));

export default userRouter;