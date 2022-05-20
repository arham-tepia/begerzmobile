import {get} from './requestStructure';
import {BASE_URL} from './url';

export async function getSignedURL() {
  const endpoint = BASE_URL + 'get-signed-url';
  const res = await get(endpoint);
  return res;
}
