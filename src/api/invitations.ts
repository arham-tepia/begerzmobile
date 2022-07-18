import {get, post} from './requestStructure';
import {BASE_URL} from './url';

export default null;

interface PostInvitation {
  userId: string;
  inviteeId?: string;
  email: string;
  begId: string;
}

export async function sendInvitation(data: PostInvitation) {
  const endpoint = BASE_URL + 'invitations';
  const res = await post(endpoint, data);
  return res;
}
