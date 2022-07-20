import {post} from './requestStructure';
import {BASE_URL} from './url';

interface Withdraw {
  userId: string;
  begId: string;
  amountRaised: string;
  begerzFees: string;
  processorFees?: string;
  withdrawlAmount: string;
  chipInAmount?: number;
  donationAmount?: number;
  paymethodId: string;
  chipInType?: string;
  chipInLink?: string;
  karma: string;
}

export async function withdrawMoney(data: Withdraw) {
  const endpoint = BASE_URL + 'withdrawals';
  const res = await post(endpoint, data);
  return res;
}
