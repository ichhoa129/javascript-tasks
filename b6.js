//Bài 6 : Viết chương trình hiển thị số xuất hiện nhiều lần nhất trong mảng

let arr = [1, 2, 3, 4, 4, 5, 7, 8, 9, 5, 2, 1, 5, 7,4];

function getNum(ar) {
  let obj = {};
  for (ele of ar) {
    if (!obj[ele]) obj[ele] = 1;
    else obj[ele] += 1;
  }
  let result = Object.keys(obj).reduce((acc, cur) => {
    return obj[acc] > obj[cur] ? acc : cur;
  });
  console.log(result);
}
getNum(arr);
