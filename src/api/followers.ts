import {get, post} from './requestStructure';
import {BASE_URL} from './url';

interface Follow {
  followerId: string;
  userId: string;
}

export async function followUser(data: Follow) {
  const endpoint = BASE_URL + 'followers';
  const res = await post(endpoint, data);
  return res;
}
