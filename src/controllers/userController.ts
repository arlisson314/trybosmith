import { Request, Response } from 'express';
import userService from '../services/userService';
import { IUser } from '../types';

const userController = {
  async addUser(req: Request, res: Response) {
    const { username, classe, level, password } = req.body as IUser;
    const { code, data } = await userService.addUser(username, classe, level, password);
    return res.status(code).json(data);
  },
};

export default userController;