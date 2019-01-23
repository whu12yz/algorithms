/**
 * 输入: n = 4, k = 2
输出:
[
  [2,4],
  [3,4],
  [2,3],
  [1,2],
  [1,3],
  [1,4],
]
 * 输入: n = 4, k = 3
 输出：
 [
     [1, 2, 3],
     [1, 2, 4],
     [1, 3, 4],
     [2, 3, 4]
 ]
 从n个数中选出k个
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */

// public class Solution {
//     List<List<Integer>> ret;
//     public List<List<Integer>> combine(int n, int k) {
//         ret = new ArrayList<>();
//         if(n<k || n*k==0)
//             return ret;
//         int start = 1;
//         List<Integer> temp = new ArrayList<>();
//         helper(start,n,k,temp);
//         return ret;
//     }
    
//     private void helper(int start,int n,int k,List<Integer> temp){
//         if(temp.size() == k){
//             ret.add(new ArrayList<Integer>(temp));
//         } else {
//             for(int i = start;i<=n;i++){
//                 temp.add(i);
//                 helper(i+1,n,k,temp);
//                 temp.remove(temp.size()-1);
//             }
//         }
//     }
// }

let result = [];

var combine = function(n, k) {
    result = [];
    if (n < k) {
        return [];
    }
    const temp = [];
    let start = 1;
    helper(start, n, k, temp);
    return result;
};

function helper(start, n, k, temp) {
    if (temp.length === k) {
        result.push([].concat(temp))
    } else {
        for (let i = start; i <= n; i++) {
            temp.push(i);
            helper(i + 1, n, k, temp);
            temp.pop();
        }
    }
}

console.log(combine(4, 2));
