import { useState, useEffect } from 'react';

export default function useLocalStorage(key) {
  let [data, setData] = useState();

  useEffect(() => {
    let result = JSON.parse(localStorage.getItem(key));
    if (result) setData(result);
  }, [key]);

  let saveData = (settingData) => {
    localStorage.setItem(key, JSON.stringify(settingData));
    setData(settingData);
  };

  return [data, saveData];
}
