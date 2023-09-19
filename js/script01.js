console.log('SAU....');
// var let const
//block scope {????} local global
//Operator

//Control Flow 
//if / if-else / if-else-if / switch
//while /do-while /for

// **** function ***
// no parameters/no return
//have parameters/no return
//no parameters/has return
//have parameters/has return

//expression function /anonymous function
//function -> default parameter

function funcA(){
    console.log('A...');
}

function funcB(x,y){
    console.log(x);
    console.log(y);
}

funcA()
funcB(10,20)

function funcC(){
    console.log('C...');
    return 'Hi....'
}

function funcD(x,y){
    return x + y
}

console.log(funcC());
let wow = funcD(100,200)

//-----------------------------------------
function funcE( a, b, c = 100) {
    console.log(a + b + c);
}

function funcF(x = 'Hi',y = 100, z = 'Wow Wow Wow'){
    return x + y + z
}

funcE(10,20) //130
funcE(10,20,30) //60
console.log(funcF());
console.log(funcF('Hello'));
//-----------------------------------------
console.log(10 + 10 + '10');
console.log(10 + 10 + 10);
let info1 = 100
let info2 = 200

console.log(info1 + ' + ' + info2 + ' = ' + (info1 + info2));

// `` alt + 96
console.log(`${info1} + ${info2} = ${info1+info2}`);
//-----------------------------------------
//ternary operator 
//__เงื่อนไข__? ___true___ : __false__
//short hand ของ control flow กลุ่ม if / if-else / if-else-if

console.log(10>20 ? 'Hi...' : 'Hey....');
let x = 'Bangna'
let y = 'Bangpoo'
z = x > y ? 'Wow...' : 'Woo.....'
console.log(z);
console.log(x > y);
console.log(x == y);
console.log(x < y);