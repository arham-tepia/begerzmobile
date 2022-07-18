import {get, post} from './requestStructure';
import {BASE_URL} from './url';

interface CreateSuccessStory {
  userId: string;
  begId: string;
  textDescription: string;
  htmlDescription: string;
  fileId: string;
  localFileName: string;
  thumbLink: string;
  videoLink: string;
}

export async function getSuccessStories() {
  const endpoint = BASE_URL + 'success?sort=-createdAt';
  const res = await get(endpoint);
  return res;
}

export async function createSuccessStory(data: CreateSuccessStory) {
  const endpoint = BASE_URL + 'success';
  const res = await post(endpoint, data);
  return res;
}
