/*
 * Bài 2 : Viết chương trình JavaScript để kiểm tra xem một số nguyên đã cho có
 * chuỗi chữ số tăng hay không
 */
let x = 37483
let y = 123456

let check = (number)=>{
    let xStr = number.toString().split('');
    for(let i=1;i<xStr.length;i++)
    {
        if(parseInt(xStr[i])-parseInt(xStr[i-1])<=0)
            return false;
    }
    return true;
}
console.log(check(x));
console.log(check(y));
