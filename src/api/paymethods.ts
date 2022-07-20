import {get, patch, post} from './requestStructure';
import {BASE_URL} from './url';

interface PostPaymethod {
  userId: string;
  description: string;
  paytype: 'ach' | 'debit' | 'paypal';
  accountNumber: string;
  routeNumber?: string;
}

export async function createPaymethod(data: PostPaymethod) {
  const endpoint = BASE_URL + 'paymethods';
  const res = await post(endpoint, data);
  return res;
}
export async function updatePaymethodByID(id: string, data: PostPaymethod) {
  const endpoint = BASE_URL + 'paymethods/' + id;
  const res = await patch(endpoint, data);
  return res;
}
