import {del, get, post} from './requestStructure';
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
export async function unfollowUser(data: {id: string}) {
  const endpoint = BASE_URL + 'followers';
  const res = await del(endpoint, data);
  return res;
}
export async function isFollowingABegger(data: {
  userId: string;
  begerId: string;
}) {
  const endpoint =
    BASE_URL + 'users/' + data.begerId + '/followers?followerId=' + data.userId;
  const res = await get(endpoint);
  return res;
}
