import AsyncStorage from '@react-native-async-storage/async-storage';

// ------------------------------- Token Start --------------------------------

export const storeToken = async (idToken: any) => {
  const date = new Date();
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
  const now = new Date();

  var dif = (now.getTime() - exp.getTime()) / 1000;

  if (dif / 60 >= 1) {
    return true;
  }

  return false;
};
