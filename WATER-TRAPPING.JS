var arr = [1, 2, 4, 2, 1, 6];
var len = arr.length;
var total_water = 0;
let left_max = arr[0];
for (let i = 1; i < arr.length; i++) {
  left_max = getLeftMax(i);
  let right_max = getMax(i + 1, len - 1);
  let water_building = Math.min(left_max, right_max);
  let res = water_building - arr[i];
  console.log(res);
  if (res > 0) {
    total_water = total_water + res;
  }
}
console.log(total_water);
function getLeftMax(index) {
  if (arr[index] >= left_max) {
    return arr[index];
  } else {
    return left_max;
  }
}
function getMax(start, end) {
  if (start === end) {
    return arr[start];
  }
  let maxValue = 0;
  for (let i = start; i <= end; i++) {
    if (arr[i] > maxValue) {
      maxValue = arr[i];
    }
  }
  return maxValue;
}
