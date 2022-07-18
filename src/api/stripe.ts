import {get, post} from './requestStructure';
import {BASE_URL} from './url';

interface PaymentIntent {
  amount: number;
  payorFees: number;
  processorId?: string;
  processorFees: number;
  payeeId: string;
  payorId: string;
  begId: string;
  transaction: 'chipin' | 'donation' | 'refund' | 'withdrawal';
  anonymous: boolean;
  customAmount: boolean;
}

export async function createPaymentIntent(data: PaymentIntent) {
  const endpoint = BASE_URL + 'payment-intent';
  const res = await post(endpoint, data);
  return res;
}
