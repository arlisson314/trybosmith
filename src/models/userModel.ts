import { IUser } from '../types';
import connection from './connection';

const TABLE = 'Trybesmith.Users';

const userModel = {
  async addUser(
    username: IUser['username'], 
    classe: IUser['classe'],
    level: IUser['level'], 
    password: IUser['password'],
  ) {
    const sql = `INSERT INTO ${TABLE} (username, classe, level, password) VALUES (?, ?, ?, ?)`;
    await connection.execute(sql, [username, classe, level, password]);
  },
};

export default userModel;