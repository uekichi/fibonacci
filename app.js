'use strict';
const memo = new Map();
memo.set(0, 0);
memo.set(1, 1);

function fib(n) {
  if (memo.has(n)) {
    return memo.get(n);
  }
  const value = fib(n - 2) + fib(n - 1)
  memo.set(n, value);
  return value;
}

const n = 40;
for (let i = 0; i <= n; i++) {
  console.log(fib(i))
}

/*
** 改善前
real	0m4.730s
user	0m4.696s
sys	0m0.016s

** 改善後
real	0m0.079s
user	0m0.068s
sys	0m0.004s
*/