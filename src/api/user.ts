import {get, post} from './requestStructure';
import {BASE_URL} from './url';

export async function getUserInformationById(id: string) {
  const endpoint = BASE_URL + 'users/' + id;
  const res = await get(endpoint);
  return res;
}
