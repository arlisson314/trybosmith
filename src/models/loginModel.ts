import { RowDataPacket } from 'mysql2';
import { IUser } from '../types';
import connection from './connection';

const TABLE_USER = 'Trybesmith.Users';

const loginModel = {
  async login(username: IUser['username'], password: IUser['password']): Promise<IUser> {
    const sql = `SELECT * FROM ${TABLE_USER} WHERE username = (?) AND password = (?)`;
    const [[result]] = await connection.execute<RowDataPacket[]>(sql, [username, password]);
    return result as IUser;
  },
};

export default loginModel;