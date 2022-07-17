import {get} from './requestStructure';
import {BASE_URL} from './url';

export async function getSignedURL(endp?: string) {
  const endpoint = BASE_URL + 'get-signed-url' + endp;
  const res = await get(endpoint);
  return res;
}
export async function getSignedURLForImage(url: string) {
  const endpoint = BASE_URL + 'get-signed-url/profiles/' + url;
  const res = await get(endpoint);
  return res;
}
