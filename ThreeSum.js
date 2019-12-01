var nums = [-1,0,1,2,-1,-4]
// [-4, -1, -1, 0, 1, 2] 4
//       ^            ^
var nums = nums.sort((a, b) => a - b)
console.log(nums)
var result = []
for (let i = 0; i < nums.length - 2; i++) {
 
  if (i==0 || (i>0&&nums[i] !== nums[i - 1])) {
    let num = nums[i]
    let invariant = 0 - num;
    let start = i + 1;
    let end = nums.length - 1;
    while (start < end) {
      if (nums[start] + nums[end] === invariant) {
        result.push([num, nums[start], nums[end]])
        
           while(start < end && nums[start] === nums[start + 1]){
             start++
           } 
          while (start < end && nums[end] === nums[end - 1]){
             end--
          }
      }
      if (nums[start] + nums[end] > invariant) {
        end--
      } else {
        start++
      }
    }
  }

}
console.log(result)