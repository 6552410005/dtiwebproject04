//object คือก้อนวัตถุ ใช้ในเรื่องของตัวแปร

var data0 = 10; //ตัวแปรธรรมดา gb
let data1 = 20; //ตัวแปรธรรมดา lc
const DATA2 = 30; //ค่าคงที่ lc
let data3 = [10, 20, 30, 40,] //array 
let data4 = { //ตัวแปรประเภท object
    'a' : 20, //key : value
    'b' : 'Hi',
    'c' : 55.555,
    'd' : [1, 2, 3, 4, 5],
    'e' : {
        'x' : 111,
        'y' : 'Wow'
    }
}

//อยากได้ผลรวมของ 10 กับ 40 ของ data3
console.log(data3[0]+data3[3]);
//อยากได้ 20 ของ data4 แสดงออกมา
console.log(data4.a);
//อยากได้ผลรวมของ 20 กับ 55.555 ของdata4
console.log(data4.a + data4.c);
//อยากได้ 4 ของ data4 แสดงออกมา
console.log(data4.d[3]);
//อยากได้ Wow ของ data4 แสดงออกมา
console.log(data4.e.y);