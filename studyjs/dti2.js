//Arry data structure ข้อมูลหลายๆข้อมูลที่เป็นประเภทเดียวกัน

//Arry ใช้กับ ภาษาโปรแกรม ในเรื่องของ ตัวแปร

//ตัวแปรมีหน้าที่เก็บข้อมูล วิธีใช้งานคือ กำหนดค่าให้มันใหม่ หรือ เอาค่าที่มันเก็บมาใช้

let x = 10
const Y = 20
//index number 0  1   2   3   4 
let data1 = [10, 20, 30, 10, 40]
let data2 = ['hi', 'hey','hoo']

console.log(x);
x = 100
console.log(x);
console.log(Y);
// Y = 200 error const เปลี่ยนค่าไม่ได้ เป็นค่าคงที่
console.log(data1[2]);
console.log(data2[1]);
data2[1] = 'hello'
console.log(data2[1]);
console.log(data2);
data2.push('wow')
console.log(data2);
data2.pop()
data2.pop()
console.log(data2);
//-----------------------------------
let data3 = [10, 20, 'AAA', 50.55]
console.log(`Data 3 มีทั้งหมด ${data3.length} ตัว`);
console.log(data3[2]);