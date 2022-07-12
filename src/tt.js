function treeNode(val,left,right){
  this.val = val;
  this.left = left;
  this.right = right;

  // this.val==0?undefined:val;
  // this.left==undefined?null:left;
  // this.right==undefined?null:right;

}
var left=new treeNode(2,3,4);
var right=new treeNode(5,6,7);
var tree=new treeNode(2,left,right);

function order(root){
  var res=[];
  midorder(root,res);
  return res;
}
function midorder(root,res){
  if(root==null){
      return 0;
  }
  console.log(root);
  midorder(root.left,res);
  res.push(root.val);
  midorder(root.right,res);

}
console.log(order(tree));