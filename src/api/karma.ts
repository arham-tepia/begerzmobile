import {get, post} from './requestStructure';
import {BASE_URL} from './url';

export default null;

export async function getKarmaPoints() {
  const endpoint = BASE_URL + 'users?page=1&limit=300&sort=-karma';
  const res = await get(endpoint);
  return res;
}
