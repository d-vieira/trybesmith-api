import { Router } from 'express';
import * as userController from '../controllers/users';

const userRouter = Router();

userRouter.post('/', userController.create);

export default userRouter;