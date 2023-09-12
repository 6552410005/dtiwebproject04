console.log(funC());


// console.log('555.....')
// function
//no parameter-no retutn
function funA() {
  console.log("AAA");
}

funA();
funA();

//have parameter-no retutn
function funB(data1, data2) {
  console.log(`${data1} ยกกำลัง ${data2} เท่ากับ ${data1 ** data2}`);
}

funB(10, 2);
funA();

//no parameter-has retutn
function funC() {
  console.log("Wow...");
  return 1000 * 2;
}

console.log(funC());
x = funC() - 500;
console.log(x);

//have parameter-has retutn
function funD(xx, yy, zz) {
  return xx + yy + zz;
}

console.log(funD(10, 10, 20))
y = funD(1,2,3)
console.log(y)


// ------------------
// default parameter
function funE(n1,n2,n3 = 100){
    console.log(n1+n2+n3)
}

funE(200,300)
funE(200,300,400)

// expression funtion
let a = 20

let b = function(){
    console.log('SAU 555');
    console.log('DTI 555');
}

let c = () =>{
    console.log('SAU 555');
    console.log('DTI 555');
}

// --------------
let d = function(xxx){
    console.log(xxx + 20);
}

let e = (num) => num * 10

console.log(e(200));
// //let e = (num) =>{
//    return num * 10
// }

b()
b()
c()
d(500)