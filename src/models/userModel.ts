import { ResultSetHeader, RowDataPacket } from 'mysql2';
import { IUser } from '../types';
import connection from './connection';

const TABLE_USER = 'Trybesmith.Users';

const userModel = {
  async addUser(
    username: IUser['username'],
    classe: IUser['classe'],
    level: IUser['level'],
    password: IUser['password'],
  ) {
    const sql = `INSERT INTO ${TABLE_USER} (username, classe, level, password) VALUES (?, ?, ?, ?)`;
    const [{ insertId }] = await connection.execute<ResultSetHeader>(
      sql,
      [username, classe, level, password],
    );
    return { id: insertId };
  },

  async getOneUser(username: IUser['username'], password: IUser['password']): Promise<IUser> {
    const sql = `SELECT * FROM ${TABLE_USER}
    WHERE username = ? AND password = ?`;
    const [[result]] = await connection.execute<RowDataPacket[]>(sql, [username, password]);
    return result as IUser;
  },
};

export default userModel;