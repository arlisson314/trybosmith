import { Request, Response } from 'express';
import loginService from '../services/loginService';
import { IUser } from '../types';

const loginController = {
  async login(req: Request, res: Response) {
    const body = req.body as IUser;
    const { username, password } = await loginService.validateLogin(body);
    const { code, data } = await loginService.login(username, password);
    return res.status(code).json(data);
  },
};

export default loginController;