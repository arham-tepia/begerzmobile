import {get, post} from './requestStructure';
import {BASE_URL} from './url';

export default null;

interface PostBeg {
  userId: string;
  title: string;
  textDescription: string;
  htmlDescription: string;
  thumbLink?: string;
  videoLink?: string;
  goalAmount: number;
  goalDate: string;
  publishType: 'public' | 'private' | 'unlisted';
  status: string;
}
interface UpdateBeg {
  title?: string;
  textDescription?: string;
  htmlDescription?: string;
  videos?: any;
  goalAmount?: number;
  goalDate?: string;
  publishType?: 'public' | 'private' | 'unlisted';
  status?: string;
}

interface SearchProps {
  terms?: string;
  diacratic?: boolean;
  caseSensitive?: boolean;
}

export async function postBeg(data: PostBeg) {
  const endpoint = BASE_URL + 'begs';
  const res = await post(endpoint, data);
  return res;
}
export async function updateBeg(begId: string, data: UpdateBeg) {
  const endpoint = BASE_URL + 'begs/' + begId;
  const res = await post(endpoint, data);
  return res;
}
export async function getAllBegs(additionalUrl?: string) {
  const endpoint = BASE_URL + 'begs' + additionalUrl;
  const res = await get(endpoint);
  return res;
}

export async function textSearchForBegs(data: SearchProps) {
  const endpoint = BASE_URL + 'begs/search';
  const res = await post(endpoint, data);
  return res;
}

export async function getActiveBegsForUser(id: string, additional?: string) {
  const endpoint = BASE_URL + 'begs/active/users/' + id + additional;
  const res = await get(endpoint);
  return res;
}
export async function getAllBegsForUser(id: string, additional?: string) {
  const endpoint = BASE_URL + 'begs/users/' + id + additional;
  const res = await get(endpoint);
  return res;
}
export async function getCommentsForBeg(id: string) {
  const endpoint = BASE_URL + 'begs/' + id + '/comments';
  const res = await get(endpoint);
  return res;
}
export async function getChipinsMadeToABeg(id: string) {
  const endpoint = BASE_URL + 'begs/' + id + '/chipins';
  const res = await get(endpoint);
  return res;
}
export async function getAllReactionsForBeg(id: string) {
  const endpoint = BASE_URL + 'reactions/begs/' + id;
  const res = await get(endpoint);
  return res;
}
export async function getBegById(id: string) {
  const endpoint = BASE_URL + 'begs/' + id;
  const res = await get(endpoint);
  return res;
}
