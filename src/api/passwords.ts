import {get, post} from './requestStructure';
import {AUTH_BASE_URL, BASE_URL} from './url';

export interface ResetLink {
  email: string;
  role: string;
}

export async function createResetLink(data: ResetLink) {
  const endpoint = AUTH_BASE_URL + 'auth/v1/create-reset-link';
  const res = await post(endpoint, data);
  return res;
}
