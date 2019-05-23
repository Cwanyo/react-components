export const loadLocalStore = () => {
  try {
    const store = localStorage.getItem("store");

    if (store === null) {
      return undefined;
    } else {
      return JSON.parse(store);
    }
  } catch (error) {
    console.log(error);
    return undefined;
  }
};

export const saveLocalStore = store => {
  try {
    const json = JSON.stringify(store);
    localStorage.setItem("store", json);
  } catch (error) {
    console.log(error);
  }
};
