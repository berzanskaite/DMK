import { TempUser } from '../types';
import ApiService from './api-service';

const fetchUsers = async (email: string): Promise<TempUser[]> => {
  const { data } = await ApiService.get<TempUser[]>(`/users?email=${email}`);
  return data;
};

const AuthService = {
  fetchUsers,
};

export default AuthService;
