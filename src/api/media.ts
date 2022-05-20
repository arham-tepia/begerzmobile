import {get} from './requestStructure';
import {MEDIA_URL} from './url';

const thumbUrl = MEDIA_URL + 'thumbs/';

export async function getVideoThumbnail(uuid: string) {
  const endpoint = thumbUrl + uuid + '.png';
  const res = await get(endpoint);
  // console.log(res, 'responseeee');

  return res;
}
export async function getVideoFromS3(uuid: string) {
  const endpoint = MEDIA_URL + uuid + '.mp4';
  const res = await get(endpoint);
  // console.log(res, 'responseeee');

  return res;
}
