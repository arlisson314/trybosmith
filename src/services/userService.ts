import { StatusCodes } from 'http-status-codes';
// import Joi from 'joi';
import userModel from '../models/userModel';
import { IUser } from '../types';
import tokenGenerate from './tokenGenerate';

const userService = {
  // async ValidateProducts(unknown: unknown): Promise<IAddProduct> {
  //   const schema = Joi.object<IAddProduct>({
  //     name: Joi.string().min(3).required(),
  //     amount: Joi.string().min(3).required(),
  //   });
  //   const result = await schema.validateAsync(unknown);
  //   return result;
  // },

  async addUser(
    username: IUser['username'],
    classe: IUser['classe'],
    level: IUser['level'],
    password: IUser['password'],
  ) {
    const { id } = await userModel.addUser(username, classe, level, password);
    const token = tokenGenerate(id);
    return { code: StatusCodes.CREATED, data: { token } };
  },
};

export default userService;