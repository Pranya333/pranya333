const num = 4677767;
 const numMap = {
        1: 'one',
        2: 'two',
        3: 'three',
        4: 'four',
        5: 'five',
        6: 'six',
        7: 'seven',
        8: 'eight',
        9: 'nine',
        0: 'zero'
    }
function numToString(num, numMap) {
   const numArr = num.toString().split('').reduce((acc, el) => `${acc} ${numMap[el]}` , '');
    return numArr;
}

console.log(numToString(num, numMap));