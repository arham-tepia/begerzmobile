import AsyncStorage from '@react-native-async-storage/async-storage';
import {resetToken} from '../api/authentication';

// ------------------------------- Token Start --------------------------------

export const storeToken = async (idToken: any) => {
  const date = new Date(Date.now());
  try {
    await AsyncStorage.setItem('token', idToken);
  } catch (e) {
    console.log(e, 'error');

    // saving error
  }
  try {
    await AsyncStorage.setItem('token_expiry', date.toString());
  } catch (e) {
    console.log(e, 'error');
  }

  return;
};
export const getToken = async () => {
  try {
    const token = await AsyncStorage.getItem('token');
    return token;
  } catch (e) {
    console.log(e, 'error');
  }
};

// ------------------------------- Token End --------------------------------

export const getExpiry = async () => {
  try {
    const token = await AsyncStorage.getItem('token_expiry');
    return token;
  } catch (e) {
    console.log(e, 'error');
  }
  return;
};

// ------------------------------- Refresh Token Start --------------------------------

export const storeRefreshToken = async (idToken: any) => {
  const date = new Date();
  try {
    await AsyncStorage.setItem('refresh_token', idToken);
  } catch (e) {
    console.log(e, 'error');

    // saving error
  }
};
export const getRefreshToken = async () => {
  try {
    const token = await AsyncStorage.getItem('refresh_token');
    return token;
  } catch (e) {
    console.log(e, 'error');
  }
};

// ------------------------------- Refresh Token End -------------------------------

export const isTokenExpired = async () => {
  const expiryDate: any = await AsyncStorage.getItem('token_expiry');
  var exp = new Date(expiryDate);
  const now = new Date(Date.now());

  var dif = (now.getTime() - exp.getTime()) / 1000;

  if (dif / 60 >= 1) {
    // console.log('token regenrate');

    const res = await resetMyToken();
    return true;
  }

  return false;
};

export async function resetMyToken() {
  console.log('in reset token');
  const refreshToken: any = await getRefreshToken();
  const r = await resetToken({refreshToken: refreshToken}).finally(() => {});
  await storeToken(r.accessToken);
  return;
}

export async function getMyToken() {
  const expiryDate: any = await getExpiry();
  var exp = new Date(expiryDate);
  const now = new Date(Date.now());

  var dif = (now.getTime() - exp.getTime()) / 10000;

  if (dif / 60 >= 1) {
    console.log('resetting token');

    const refreshToken: any = await getRefreshToken();
    const r = await resetToken({refreshToken: refreshToken});
    await storeToken(r.accessToken);
    return r.accessToken;
  } else {
    console.log('not resetting token');

    const res = await getToken();
    return res;
  }
}
