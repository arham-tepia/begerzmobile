import {post} from './requestStructure';
import {AUTH_BASE_URL} from './url';

interface AddAccount {
  username: string;
  password: string;
  firstName: string;
  lastName: string;
  email: string;
  birthdate: string;
  role: string;
  rights: any;
  status: string;
}

const authurl = AUTH_BASE_URL + 'auth/v1/';

export async function createNewAccount(data: AddAccount) {
  const endpoint = authurl + 'accounts';
  const res = await post(endpoint, data);
  return res;
}
