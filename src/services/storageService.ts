import AsyncStorage from '@react-native-async-storage/async-storage';

const getItem = async (key: any) => {
  const value = await AsyncStorage.getItem(key);
  //console.log('AsyncValue: ', key, value);
  let val = null;
  if (value !== null) {
    val = JSON.parse(value);
  }
  return val;
};
const setItem = async (key: any, value: any) => {
  return AsyncStorage.setItem(key, JSON.stringify(value));
};
const removeItem = async (key: string) => {
  return AsyncStorage.removeItem(key);
};

export default {
  getItem,
  setItem,
  removeItem,
};
