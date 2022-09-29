import jwt from 'jsonwebtoken';
import { Idexsable } from '../types';

const tokenGenerate = (id: Idexsable['id']): string => {
  // const stId = JSON.stringify(id);
  const PAYLOAD = { id, admin: false };
  const SECRET = 'Comed!4nt3';
  const CONFIG = { expiresIn: '7d' };
  const token = jwt.sign(PAYLOAD, SECRET, CONFIG);
  return token;
};

export default tokenGenerate;
// username: IUser['username']