function countZeroes(arr) {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);

    if (arr[mid] === 1) {
      start = mid + 1;
    } else if (arr[mid] === 0) {
      if (mid === 0 || arr[mid - 1] === 1) {
        return arr.length - mid;
      }
      end = mid - 1;
    }
  }
  return 0;
}

module.exports = countZeroes;
