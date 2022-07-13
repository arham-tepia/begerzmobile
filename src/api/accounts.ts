import {get, post, patch} from './requestStructure';
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
export async function getAccountInformationById(id: string) {
  const endpoint = authurl + 'accounts/' + id;
  const res = await get(endpoint);
  return res;
}
export async function updateAccountInformationByID(id: string, data: any) {
  const endpoint = authurl + 'accounts/' + id;
  const res = await patch(endpoint, data);
  return res;
}
