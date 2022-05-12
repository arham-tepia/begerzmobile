import {post} from './requestStructure';

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

const authurl = 'auth/v1/';

export async function createNewAccount(data: AddAccount) {
  const endpoint = authurl + 'accounts';
  const res = await post(endpoint, data);
  return res;
}
