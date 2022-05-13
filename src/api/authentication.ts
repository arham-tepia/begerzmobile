import {post} from './requestStructure';

interface Login {
  username: string;
  password: string;
  role: string;
}

const authurl = 'auth/v1/';

export async function loginUser(data: Login) {
  const endpoint = authurl + 'login';
  const res = await post(endpoint, data);
  // console.log(res, 'responseeee');

  return res;
}
