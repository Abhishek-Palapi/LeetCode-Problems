var minDiffInBST = function(root) {
  this.minDiff = [Infinity];
  this.lastValue = [];
  if(root == null){
    return 0;  
  }
  inOrderWalk(root, lastValue);
  return this.minDiff[0];
};

function inOrderWalk(root){
  if(root.left != null){
    inOrderWalk(root.left);
  }
   
  if(this.lastValue.length == 0){
    this.lastValue.push(root.val);  
  } else {
    let diff = Math.abs(root.val -  this.lastValue[0]);
    this.minDiff[0] = Math.min(this.minDiff[0], diff);
    this.lastValue[0] = root.val;
  }
    
  if(root.right != null){
    inOrderWalk(root.right, this.lastValue);
  }
}