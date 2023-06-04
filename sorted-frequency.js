function sortedFrequency(arr, num) {
  let start = 0;
  let end = arr.length - 1;
  let count = 0;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);

    if (arr[mid] === num) {
      count++;

      let left = mid - 1;
      let right = mid + 1;

      while (arr[left] === num) {
        count++;
        left--;
      }
      while (arr[right] === num) {
        count++;
        right++;
      }
      return count;
    } else if (arr[mid] < num) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  return -1;
}

module.exports = sortedFrequency;
