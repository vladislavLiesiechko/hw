function sumResult() {
    let sumOfNumbers = 0;
    function returnNumber(number) {

        return sumOfNumbers += number;
    }
    return returnNumber;
}
 let sum = sumResult();

console.log(sum (3));
console.log(sum (5));

