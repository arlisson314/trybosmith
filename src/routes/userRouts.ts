import { Router } from 'express';
import userController from '../controllers/userController';

const userRouter = Router();

userRouter.post('/', userController.addUser);

export default userRouter;