// stnad in line

function nextInLine(arr, item) {


    return arr.shift();
}

let testArr = [1,2,3,4,5];

console.log("Befoore: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr));