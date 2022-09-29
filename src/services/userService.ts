import { StatusCodes } from 'http-status-codes';
import userModel from '../models/userModel';
import { IUser } from '../types';
import tokenGenerate from './tokenGenerate';

const userService = {
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