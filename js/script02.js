// console.log('Hey...');
//Expression function /anonymous function
let a = function func1() {
  console.log(111);
};

let b = function () {
  console.log(222);
};

let c = function (x, y) {
  console.log(x + y);
};

a();
b();
c(10, 20);

//Arrow function
let d = () => {
  console.log(333);
};
let e = (x, y) => {
  console.log(x + y);
};

d();
e(100, 200);

let f = () => console.log(444);
let g = (x, y) => console.log(x + y);

let h = () => "Hello....";
let i = () => {
  return "Hello....";
};
