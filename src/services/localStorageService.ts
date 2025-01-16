export const getFromLocalStorage = (key: string) => {
    const saved = localStorage.getItem(key);
    return saved ? JSON.parse(saved) : null;
  };
  
  export const saveToLocalStorage = (key: string, value: any) => {
    localStorage.setItem(key, JSON.stringify(value));
  };