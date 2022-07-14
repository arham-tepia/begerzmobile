import {get, post} from './requestStructure';
import {BASE_URL} from './url';

interface PostReaction {
  userId: string;
  begId: string;
  reactionType: string;
}

export async function getSuccessStories() {
  const endpoint = BASE_URL + 'success?sort=-createdAt';
  const res = await get(endpoint);
  return res;
}
