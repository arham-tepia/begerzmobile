import {get, post} from './requestStructure';
import {BASE_URL} from './url';

export default null;

interface PostReaction {
  userId: string;
  begId: string;
  reactionType: string;
}

export async function postReaction(data: PostReaction) {
  const endpoint = BASE_URL + 'reactions';
  const res = await post(endpoint, data);
  return res;
}
