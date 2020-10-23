/*Bài 7 : Write a function that accepts an array of 10 integers (between 0 and 9),
 that returns a string of those numbers in the form of a phone number.
describe('Basic tests', () => {
  Test.assertEquals(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]), "(123) 456-7890");
  Test.assertEquals(createPhoneNumber([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]), "(111) 111-1111");
  Test.assertEquals(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]), "(123) 456-7890");
});
*/
const assert = require('assert');

function createPhoneNumber(arr){
    let head = `(${arr.splice(0,3).join('').toString()}) `;
    let body = `${arr.splice(0,3).join('').toString()}-${arr.join('').toString()}`;
    return head+body;
}

function quickTest(){
    try {
        assert.strictEqual(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]), "(123) 456-7890");
        assert.strictEqual(createPhoneNumber([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]), "(111) 111-1111");
        assert.strictEqual(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]), "(123) 456-7890");
        assert.strictEqual(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]), "(123) 456 7890"); // wrong syntax at this line 
        console.log('ok');
    } catch (error) {
        console.error(error);
    }
}

quickTest();