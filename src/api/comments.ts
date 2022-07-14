import {get, post} from './requestStructure';
import {BASE_URL} from './url';

interface PostComment {
  userId: string;
  begId: string;
  textDescription: string;
  htmlDescription: string;
}

export async function postComment(data: PostComment) {
  const endpoint = BASE_URL + 'comments';
  const res = await post(endpoint, data);
  return res;
}
