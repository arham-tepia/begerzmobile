import {post} from './requestStructure';
import {AUTH_BASE_URL} from './url';

interface Login {
  username: string;
  password: string;
  role: string;
}

const authurl = AUTH_BASE_URL + 'auth/v1/';
export async function loginUser(data: Login) {
  const endpoint = authurl + 'login';

  const res = await post(endpoint, data);
  // console.log(res, 'responseeee');

  return res;
}
