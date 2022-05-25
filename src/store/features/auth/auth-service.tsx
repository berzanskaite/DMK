import axios from 'axios';
import { Credentials, User, TempUser } from '../../../types';

export type AuthPromise = (credentials: Credentials) => Promise<User>;

const API_SERVER_ADDRESS = process.env.REACT_APP_API_SERVER_ADDRESS;

namespace AuthService {

  export const login = async ({ email, password }: Credentials): Promise<User> => {
    const { data: tempUsers } = await axios.get<TempUser[]>(`${API_SERVER_ADDRESS}/users?email=${email}`);
    if (tempUsers.length === 0) {
      throw new Error('Vartotojas su tokiu el. paštu nerastas');
    }

    const tempUser = tempUsers[0];

    if (tempUser.password !== password) {
      throw new Error('Slaptažodis netinka');
    }

    return {
      id: tempUser.id,
      email: tempUser.email,
    };
  };
}

export default AuthService;
