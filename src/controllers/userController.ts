import { Request, Response } from 'express';
import userService from '../services/userService';

const userController = {
  async addUser(req: Request, res: Response) {
    const { username, classe, level, password } = req.body;
    const { code, data } = await userService.addUser(username, classe, level, password);
    res.status(code).json(data);
  },
};

export default userController;