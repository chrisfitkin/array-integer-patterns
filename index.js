/**
 * Extend Array Prototype with a hasPattern() function to test for a matching integer patterns.
 * Each pair of adjacent elements, must match the defined pattern.
 */
Array.prototype.hasPattern = function(compare) { // uses ES5 function signature to access 'this' value
    let _arr = this;
    for(let i=0; i<_arr.length-1; i++) {
        if (!compare(_arr[i], _arr[i+1])) {
            // return false as soon as possible to avoid unnecessary tests
            return false;
        }
    }
    // all adjacent elements passed the provided compare(a, b) function
    return true;
}

/** Custom comparison functions */  
const _isAscending = (a, b) => a <= b;
const _isTrulyAscending = (a, b) => a < b;
const _isDescending = (a, b) => a >= b;
const _isTrulyDescending = (a, b) => a > b;
const _isSlow = (a, b) => (b <= a+1 && b >= a-1); // moves by less than or equal to 1 step (int) each value
const _isFast = (a, b) => (b >= a+10 || b <= a-10); // moves by greater than or equal to 10 steps (int) each value
const _isFlat = (a, b) => a === b; // array values do not change
const _isExponential = (a, b) => b === a * a; // array values grow exponentially

/** Further extends the Array prototype object combining the custom comparisons with the .hasPattern function */
Array.prototype.isAscending = function() { return this.hasPattern(_isAscending) };
Array.prototype.isTrulyAscending = function() { return this.hasPattern(_isTrulyAscending) };
Array.prototype.isDescending = function() { return this.hasPattern(_isDescending) };
Array.prototype.isTrulyDescending = function() { return this.hasPattern(_isTrulyDescending) };
Array.prototype.isSlow = function() { return this.hasPattern(_isSlow) };
Array.prototype.isFast = function() { return this.hasPattern(_isFast) };
Array.prototype.isFlat = function() { return this.hasPattern(_isFlat) };
Array.prototype.isExponential = function() { return this.hasPattern(_isExponential) };

/** Sample arrays */
let testArrays = [
    [1, 2, 3, 4, 7, 10],
    [1, 2, 3, 4, 7, 7, 10],
    [1, 2, 3, 4, 2, 10],
    [10, 9, 8, 7, 6],
    [10, 9, 9, 8, 7],
    [10, 9, 11, 6],
    [1, 2, 2, 3, 2, 3, 4, 4, 5],
    [0,20,100,50],
    [5, 5, 5, 5, 5],
    [2, 4, 16, 256, 65536]
];

/** Test arrays and print results */
testArrays.forEach((arr) => {
    console.log('');
    console.log(arr);
    arr.isAscending() && console.log(' * isAscending');
    arr.isTrulyAscending() && console.log(' * isTrulyAscending');
    arr.isDescending() && console.log(' * isDescending');
    arr.isTrulyDescending() && console.log(' * isTrulyDescending');
    arr.isSlow() && console.log(' * isSlow');
    arr.isFast() && console.log(' * isFast');
    arr.isFlat() && console.log(' * isFlat');
    arr.isExponential() && console.log(' * isExponential');
});