import AsyncStorage from '@react-native-async-storage/async-storage';

export const storeData = async (key: string, value: string) => {
  try {
    await AsyncStorage.setItem(key, value);
  } catch (error) {
    console.log('AsyncStorage Error: ' + error.message);
  }
};

export const getData = async (key: string) => {
  try {
    const value = await AsyncStorage.getItem(key);
    if (value !== null) {
      console.log('Get data ' + value);
      return value;
    }
  } catch (error) {
    console.log('AsyncStorage Error: ' + error.message);
  }
};

export const removeData = async (key: string) => {
  try {
    const value = await AsyncStorage.removeItem(key);
    if (value !== null) {
      return value;
    }
  } catch (error) {
    console.log('AsyncStorage Error: ' + error.message);
  }
};
