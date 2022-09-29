import Joi from 'joi';
import { StatusCodes } from 'http-status-codes';
import { IUser } from '../types';
import loginModel from '../models/loginModel';
import tokenGenerate from './tokenGenerate';
import userModel from '../models/userModel';

const loginService = {

  async validateLogin(unknown: unknown): Promise<IUser> {
    const schema = Joi.object<IUser>({
      username: Joi.string().min(1).required(),
      password: Joi.string().min(6).required(),
    });
    const result = await schema.validateAsync(unknown);
    return result;
  },

  async login(username: IUser['username'], password: IUser['password']) {
    const user = await userModel.getOneUser(username, password);
    console.log(user);
    if (!user) { 
      return { code: StatusCodes.UNAUTHORIZED, data: { message: 'Username or password invalid' } };
    } 
    const { id } = await loginModel.login(username, password);
    const token = tokenGenerate(id);
    return { code: StatusCodes.OK, data: { token } };
  },
};

export default loginService;
