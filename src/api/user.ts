import {get, post} from './requestStructure';
import {BASE_URL} from './url';

export async function getUserInformationById(id: string) {
  const endpoint = BASE_URL + 'users/' + id;
  const res = await get(endpoint);
  return res;
}
export async function getChipinsMadeByAUser(id: string) {
  const endpoint = BASE_URL + 'users/' + id + '/chipins';
  const res = await get(endpoint);
  return res;
}
export async function getUserReactionToABeg(userId: string, begId: string) {
  const endpoint = BASE_URL + 'users/' + userId + '/reactions/begs/' + begId;
  const res = await get(endpoint);
  return res;
}
export async function getListOfFollowersForUser(userId: string) {
  const endpoint = BASE_URL + 'users/' + userId + '/followers';
  const res = await get(endpoint);
  return res;
}
export async function getUserPaymethods(userId: string) {
  const endpoint = BASE_URL + 'users/' + userId + '/paymethods';
  const res = await get(endpoint);
  return res;
}
