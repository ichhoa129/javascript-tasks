/*
 * Bài 1 : Viết chương trình để in ra ngày tháng năm theo các định dạng mm-dd-
 * yyyy, mm/dd/yyyy, dd-mm-yyyy, dd/mm/yyyy
 */
let d = new Date();
//mm-dd-yyyy
console.log(`${d.getMonth()+1}-${d.getDate()}-${d.getFullYear()}`);
//mm/dd/yyyy
console.log(`${d.getMonth()+1}/${d.getDate()}/${d.getFullYear()}`);
//dd-mm-yyyy
console.log(`${d.getDate()}-${d.getMonth()+1}-${d.getFullYear()}`);
//dd/mm/yyyy
console.log(`${d.getDate()}/${d.getMonth()+1}/${d.getFullYear()}`);
