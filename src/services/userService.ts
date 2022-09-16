import userModel from '../models/userModel';
import { IUser } from '../types';
import tokenGenerate from './genereteToken';

const userService = {
  async addUser(
    username: IUser['username'], 
    classe: IUser['classe'],
    level: IUser['level'], 
    password: IUser['password'],
  ) {
    await userModel.addUser(username, classe, level, password);
    const token = tokenGenerate(username);
    return { code: 201, data: { token } };
  },
};

export default userService; 