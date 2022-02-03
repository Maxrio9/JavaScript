var _ = {
  clamp(num, lBound, uBound) {
    num = Math.max(num, lBound);
    num = Math.min(num, uBound);
    return num;
  },
  inRange(num, start = 0, end = undefined) {
    if (end === undefined) {
      end = start;
      start = 0;
    }
    if (start > end) {
      let temp;
      temp = start;
      start = end;
      end = temp;
    }
    if (num >= end | num < start) {
      return false;
    }
    return true;
  },
  words(str) {
    return str.split(' ');
  },
  pad(str, len) {
    if (str.length >= len) {
      return str;
    }
    startPaddingLength = Math.floor((len - str.length) / 2);
    endPaddingLength = (len - startPaddingLength) - str.length;
    let paddedString = ' '.repeat(startPaddingLength) + str + ' '.repeat(endPaddingLength);
    return paddedString;
  },
  has(obj, key) {
    if (obj[key] !== undefined) {
      return true;
    }
    return false;
  },
  invert(obj) {
    let newObj = {};
    for (key of Object.keys(obj)) {
      return key;
    }
  },
  dropWhile(arr, func) {
    let copyArr = arr;
    for (let i = 0; i < arr.length; i++) {
      if (func(arr[i], i, arr === true)) {
      copyArr.shift();
      } else {
        copyArr.shift();
        return copyArr;
      }
      if (copyArr.length === 0) {
        return [];
      }
    }
    return copyArr;
  },
  chunk(arr, size = 1) {
    newArr = [];
    for (let i = 0; i < Math.ceil(arr.length / size); i++) {
      innerArr = [];
      for (let j = 0; j < size; j++) {
        innerArr.push(arr[i * size + j])
        if (i * size + j + 1 === arr.length) {
          break;
        }
      }
      newArr.push(innerArr);
    }
    return newArr;
  }
};

_.chunk([1,2,3,4,5], 2);

// Do not write or modify code below this line.
// module.exports = _;