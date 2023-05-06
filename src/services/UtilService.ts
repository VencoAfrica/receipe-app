import StorageService from './storageService';
import {StorageKeys} from '../constants/appVariables';
const getUserToken = async () => {
  return await StorageService.getItem(StorageKeys.AUTH_TOKEN);
};
const storeUserDetailsToAsyncStorage = async (user: any) => {
  await StorageService.setItem(StorageKeys.USER_OBJ, user);
};
const getUserDetailsFromAsyncStorage = async () => {
  return await StorageService.getItem(StorageKeys.USER_OBJ);
};
export default {
  getUserToken,
  storeUserDetailsToAsyncStorage,
  getUserDetailsFromAsyncStorage,
};
