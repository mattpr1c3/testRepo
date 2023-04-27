function arrOfBool(arr) {
  if (arr.length === 0) {
    return false;
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == false) {
      return true;
    } else {
      return false;
    }
  }
}

arrOfBool([true, false]);
console.log(arrOfBool([]));
