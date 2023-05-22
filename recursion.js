/** product: calculate the product of an array of numbers. */

function product(nums) {
  if (nums.length === 0) return 1;
  
  return nums[0] *= product(nums.slice(1));
}

/** longest: return the length of the longest word in an array of words. */

function longest(words, i = 0, answer = 0) {
  if (i === words.length) return answer;
  answer = Math.max(words[i].length, answer);
  return longest(words, i + 1, answer);

}

/** everyOther: return a string with every other letter. */

function everyOther(str, i = 0, answer = '') {
  if (i >= str.length) return answer
  answer += str[i];
  return everyOther(str, i + 2, answer);
}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str, i = str.length - 1, reverse = '') {
  if (i < 0) {
    if (str === reverse) {
      return true;
    } else {
      return false;
    }
  }
  reverse += str[i];
  return isPalindrome(str, i - 1, reverse);
}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val, i = 0) {
  if (i === arr.length) {
    return -1;
  };
  if (val === arr[i]) {
    return i;
  };
  return findIndex(arr, val, i + 1);
}

/** revString: return a copy of a string, but in reverse. */

function revString(str, i = str.length - 1, result = '') {
  if (i < 0) return result;
  result += str[i];
  return revString(str, i - 1, result);
}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj) {
  let arr = [];
  for (let key in obj) {
      if (typeof obj[key] === 'string'){
          arr.push(obj[key])
      };
      if (typeof obj[key] === 'object'){
          arr.push(...gatherStrings(obj[key]));
      }
  }
  return arr;
}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val, i = 0, j = arr.length) {
  if(i > j) {
      return -1
  }
  let pivot = Math.floor((i + j) / 2);
  if(val === arr[pivot]) {
      return pivot;
  }
  if (val < arr[pivot]){
    return binarySearch(arr, val, i, pivot - 1);
  }
  return binarySearch(arr, val, pivot + 1, j);
}

module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch
};
