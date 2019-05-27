const checkNaN = Number.isNaN;
const keys = Object.keys;
const getType = Object.prototype.toString;

const isEqual = (a, b) => {
  // top-check if both are equal
  if (a === b) return true;
  // top-check if both are NaN
  if (checkNaN(a) && checkNaN(b)) return true;

  // get type of both and compare
  const aType = getType.call(a);
  const bType = getType.call(b);
  if (aType !== bType) return false;

  if (aType === "[object Object]") {
    // *both are object - check if both object have same length and keys
    // get keys from a
    const aKey = keys(a);
    const aLength = aKey.length;
    // check both length
    if (aLength !== keys(b).length) return false;

    // check keys a and b have same key
    for (let i = 0; i < aLength; i++) {
      if (!(aKey[i] in b)) return false;
    }

    // nested check in object
    for (let i = 0; i < aLength; i++) {
      const key = aKey[i];
      if (key[0] !== "_" && key !== "$$typeof") {
        if (isEqual(a[key], b[key]) !== true) return false;
      }
    }

    // if it reach here, it means both should be equal
    return true;
  } else if (aType === "[object Array]") {
    // *both are array - check if both object have same length
    const aLength = a.length;
    if (aLength !== b.length) return false;

    // nested check in array
    for (let i = 0; i < aLength; i++) {
      if (!isEqual(a[i], b[i])) return false;
    }

    // if it reach here, it means both should be equal
    return true;
  } else if (
    aType === "[object Number]" ||
    aType === "[object String]" ||
    aType === "[object Boolean]"
  ) {
    // *for common types of object
    // a and b are not equal for sure
    // since -> if both are equal or NaN -> it will fall in any of the top two conditions
    return false;
  } else if (aType === "[object Date]") {
    // *special check for Date
    // since -> compare toString() is slower than getTime()
    return a.getTime() === b.getTime();
  } else {
    // *for any other types of objects -> worst case
    // eg: RegExp, Function
    return a.toString() === b.toString();
  }
};

const deepCompare = (a, b) => {
  try {
    return isEqual(a, b);
  } catch (error) {
    console.error("deepCompare not working as expected!", error);
    return false;
  }
};

export default deepCompare;
