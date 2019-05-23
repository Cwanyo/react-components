const deepCompare = (a, b) => {
  if (a === b) {
    return true;
  }

  const toStr = i => {
    try {
      const j = JSON.stringify(i);
      return j === undefined ? null : j;
    } catch (error) {
      let result = "{";
      for (let key in i) {
        if (i.hasOwnProperty(key) && key[0] !== "_") {
          result += `'${key}':${toStr(i[key])},`;
        }
      }
      return result + "}";
    }
  };

  try {
    return toStr(a) === toStr(b);
  } catch (error) {
    console.error("deepCompare not working as expected!");
    return false;
  }
};

export default deepCompare;
