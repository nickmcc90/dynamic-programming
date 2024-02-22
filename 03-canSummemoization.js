/* Remember,
make the recursive tree, make the code work, then memoize it.
*/

// We could have the input integer be the top node, then we subtract every number in the array as a
// branch from this top node. Base cases are if a path is less than the least number in the array,
// return false and if a path hits 0, return true.

/*
const canSum = (targetSum, numbers) => {
  if(targetSum === 0) return true;
  if(targetSum < 0) return false;
  
  for(let num of numbers) {
    const remainder = targetSum - num;
    if(canSum(remainder, numbers) === true) {
      return true;
    };
  }
  
  return false;
};

console.log(canSum(7, [2, 3]));
*/

// The time of this recursive function is array size^targetSum.

const canSum = (targetSum, numbers, memo={}) => {
  if(targetSum in memo) return memo[key]
  if(targetSum === 0) return true;
  if(targetSum < 0) return false;
  
  for(let num of numbers) {
    const remainder = targetSum - num;
    if(canSum(remainder, numbers, memo) === true) {
      return true;
    };
  }
  
  return false;
};

console.log(canSum(7, [2, 3]));

// timestamp: 1:27:14