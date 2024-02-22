const gridTraveler = (m,n, memo = {}) => {
  const key = m + ',' + n;
  // are the args in the memo?
  if(key in memo) return memo[key];
  if(m === 1 && n === 1) return 1;
  if(m === 0 || n === 0) return 0;


  memo[key] =  gridTraveler(m-1, n, memo) + gridTraveler(m, n-1, memo);
  return memo[key];
}

// m = 42
// n = 3
// key = 423

// key = 42,3

// m = 4
// n = 23
// key = 423
// ---------------------------------
// this is the recursive code.
/* The time complexity of this code would be 2^(m+n). This is because
The height from starting node to a bottom node subtracts one m and one
n at a time. So, the height would be m+n. Since the tree branches
off into 2 each time, the m+n is an exponent now.

*/


// Steps.....

//1. Think about recursive functions in terms of a tree, where the branches are the actions,
// and the nodes are the results. Then brute force it, then see where we can optimize it.