import jwt from 'jsonwebtoken';
import { IUser } from '../types';

const tokenGenerate = (username: IUser['username']) => {
  const PAYLOAD = { username, admin: false };
  const SECRET = 'Comed!4nt3';
  const CONFIG = { expiresIn: '7d' };
  const token = jwt.sign(PAYLOAD, SECRET, CONFIG);
  return token;
};

export default tokenGenerate;