require('./array-integer-patterns.js')

/** Example arrays */
let exampleArrays = [
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
exampleArrays.forEach((arr) => {

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

    /** Implements a custom pattern test */
    arr.hasPattern((a, b) => a !== b) && console.log(' * isAlwaysMoving');
});