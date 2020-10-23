/*
* Bài 5 : Viết chương trình JavaScript để tạo chuỗi bằng cách sử dụng ba ký tự ở
* giữa của một chuỗi có độ dài lẻ. Độ dài chuỗi phải lớn hơn hoặc bằng ba.
*/
let str = "hdcnslduirt";

let s = (ss) => {
  if (ss.length % 2 == 0) return false;
  let startIndex = (ss.length - 3) / 2;
  console.log(ss.slice(startIndex,startIndex+3));
};
s(str);