/*
Bài 8 :A Narcissistic Number is a positive number which is the sum of its own digits, 
each raised to the power of the number of digits in a given base. In this Kata, 
we will restrict ourselves to decimal (base 10).
*/

function isNar(number)
{
    let ans = `${number} =`;
    let splitNums = number.toString().split('');

    let powerN = splitNums.length;
    let sum = 0;
    splitNums.forEach(num => {
        sum+= Math.pow(parseInt(num),powerN); 
        ans+= ` ${parseInt(num)}^${powerN} +`
    });
    if(sum==number)
    {
        console.log('yes')
        console.log(ans.slice(0,-1));
        return true;
    }
    else{
        console.log("yesn't");
        return false;
    }
}
isNar(153);
console.log('==============');
isNar(123);