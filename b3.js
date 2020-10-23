/*
* Bài 3 : Viết một chương trình JavaScript để thay thế mọi ký tự trong một chuỗi đã
* cho với ký tự theo sau nó trong bảng chữ cái.
*/
let str = 'abcosdj';

let newStr = str.split('');
for(let i=0;i<newStr.length;i++)
{
    c = newStr[i].charCodeAt();
    newStr[i] = String.fromCharCode(++c);
}
let result = newStr.join('');
console.log(result);