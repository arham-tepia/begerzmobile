import {post} from './requestStructure';
import {BASE_URL} from './url';

interface PostVideo {
  begId: string;
  videoType: 'beg' | 'success';
  fileId: string;
  videoLink: string;
  thumbLink: string;
  primary?: boolean;
}

export async function postVideo(data: PostVideo) {
  const endpoint = BASE_URL + 'videos';
  const res = await post(endpoint, data);
  return res;
}
