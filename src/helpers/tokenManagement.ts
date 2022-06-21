import AsyncStorage from '@react-native-async-storage/async-storage';

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

// export const isTokenExpired = async () => {
//   const expiryD: any = await AsyncStorage.getItem('token_expiry');
//   const expiry = new Date(expiryD);
//   const current = new Date();
//   var diffMs: any = expiry.getTime() - current.getTime(); // milliseconds between now & Christmas
//   var diffDays = Math.floor(diffMs / 86400000); // days
//   var diffHrs = Math.floor((diffMs % 86400000) / 3600000); // hours
//   var diffMins = Math.round(((diffMs % 86400000) % 3600000) / 60000); // minutes
//   console.log(
//     diffDays + ' days, ' + diffHrs + ' hours, ' + diffMins + ' minutes'
//   );
//   if (diffDays <= 0 && diffMins <= 15) {
//     return true;
//   }
//   return false;
// };
