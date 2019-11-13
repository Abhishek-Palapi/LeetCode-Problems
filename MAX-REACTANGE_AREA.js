var arr = [2, 1, 5, 6, 2, 3];

var len = arr.length;
var max_area = arr[0];
var min_value = arr[0];
let final_max_area = arr[0];
for (let i = 0; i < len; i++) {
  getMaxArea(i);
}

function getMaxArea(index) {
  let current_area = arr[index];
  var counter = 1;
  min_value = arr[index];
  for (let i = index + 1; i < arr.length; i++) {
    if (arr[i] <= min_value) {
      min_value = arr[i];
    }
    if (arr[i] > 0) {
      if (arr[i] <= arr[index]) {
        current_area = min_value * (counter++ + 1);
      } else {
        current_area = min_value * (counter++ + 1);
      }
    }
    console.log("cuurrr", current_area);
    if (current_area >= final_max_area) {
      final_max_area = current_area;
    }
  }
  if (current_area >= final_max_area) {
    final_max_area = current_area;
  }

  console.log("final", final_max_area);
}
