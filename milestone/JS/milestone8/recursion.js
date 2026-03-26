// recursion

// pow func
function pow(x, n) {
  if (n == 1) return x;
  return x * pow(x, n - 1);
}
// console.log(pow(2, 3));

// factorial
function fact(n) {
  if (n == 1) return 1;
  return n * fact(n - 1);
}
// console.log(fact(5));

// function returning functon
function parent() {
  let a = 10;
  function child() {
    return a;
  }

  return child();
}

// console.log(parent());

// traversing matrix using recursion
let arr = [
  [1, 2, 3],
  [4, 5, 6],
  [6, 7, 8],
];
function matrixTraversal(arr, row) {
  if (row >= arr.length) {
    return;
  }

  for (let i = 0; i < arr[row].length; i++) {
    console.log(arr[row][i]);
  }

  matrixTraversal(arr, row + 1);
}
// matrixTraversal(arr, 0);

