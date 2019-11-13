var str = "{{)}";
var arr = [];
var res = false;
for (let i = 0; i < str.length; i++) {
  let c = str.charAt(i);
  if (c === "{" || c === "(" || c === "[") {
    arr.push(c);
  } else {
    switch (c) {
      case "}":
        res = arr.pop() === "{" ? true : false;
        break;
      case "]":
        res = arr.pop() === "[" ? true : false;
        break;
      case ")":
        res = arr.pop() === "(" ? true : false;
        break;
    }
  }
}
console.log(arr.length > 0 ? false : res);
