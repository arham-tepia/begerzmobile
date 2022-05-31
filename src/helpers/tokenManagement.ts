import AsyncStorage from '@react-native-async-storage/async-storage';

export const storeToken = async (idToken: any) => {
  try {
    await AsyncStorage.setItem('token', idToken);
  } catch (e) {
    console.log(e, 'error');

    // saving error
  }
  //   try {
  //     await AsyncStorage.setItem('expiry', idToken.expirationTime);
  //   } catch (e) {
  //     console.log(e, 'error');

  //  }
};
export const getToken = async () => {
  try {
    const token = await AsyncStorage.getItem('token');
    return token;
  } catch (e) {
    console.log(e, 'error');
  }
};
