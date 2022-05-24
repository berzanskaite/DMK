import axios from 'axios';
import { Credentials, User, TempUser } from '../../../types';

export type AuthPromise = (credentials: Credentials) => Promise<User>;

namespace AuthService {

  export const login = async ({ email, password }: Credentials): Promise<User> => {
    const { data: tempUsers } = await axios.get<TempUser[]>(`http://localhost:8000/users?email=${email}`);
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
