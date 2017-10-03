function add(a, b) {
  return a + b;
}

function bindAdd(a) {
  return function(b) {
    return add(a, b);
  }
}

const add10 = bindAdd(10);
console.log(add10(25));
console.log(bindAdd(10)(10));

function add2(c, d) {
  return c + d;
}

const add210 = add2.bind(undefined, 10);
console.log(add210(20));