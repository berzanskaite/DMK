import axios from 'axios';
import Credentials from '../../types/credentials';
import User from '../../types/user';
import TempUser from '../../types/temp-user';

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

  export const register: AuthPromise = async ({ email, password }: Credentials): Promise<User> => {
    const { data: tempUsers } = await axios.get<TempUser[]>('http://localhost:8000/users');

    const userExists = tempUsers.map((x) => x.email).includes(email);
    if (userExists) {
      throw new Error('Vartotojas su tokiu el. paštu jau egzistuoja');
    }
    const { data: createdTempUser } = await axios.post('http://localhost:8000/users', { email, password });

    const createdUser: User = {
      id: createdTempUser.id,
      email: createdTempUser.email,
    };

    return createdUser;
  };

}

export default AuthService;
