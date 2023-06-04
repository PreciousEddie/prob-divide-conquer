function findRotationCount(arr) {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    if (arr[start] <= arr[end]) {
      return start;
    }

    let mid = Math.floor((start + end) / 2);
    let prev = (mid + arr.length - 1) % arr.length;

    if (arr[mid] <= arr[prev] && arr[mid] <= arr[(mid + 1) % arr.length]) {
      return mid;
    }

    if (arr[mid] <= arr[end]) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }
  return 0;
}

module.exports = findRotationCount;
