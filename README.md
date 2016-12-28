# array-integer-patterns

Extends the JavaScript Array prototype with functions to test for integer patterns

## [View Source](array-integer-patterns.js)

## Example Usage
```JavaScript
require('./array-integer-patterns.js')

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

    /** Implements a custom pattern test */
    arr.hasPattern((a, b) => a !== b) && console.log(' * isAlwaysMoving');
});
```

## Example Output
```
[ 1, 2, 3, 4, 7, 10 ]
 * isAscending
 * isTrulyAscending
 * isAlwaysMoving

[ 1, 2, 3, 4, 7, 7, 10 ]
 * isAscending

[ 1, 2, 3, 4, 2, 10 ]
 * isAlwaysMoving

[ 10, 9, 8, 7, 6 ]
 * isDescending
 * isTrulyDescending
 * isSlow
 * isAlwaysMoving

[ 10, 9, 9, 8, 7 ]
 * isDescending
 * isSlow

[ 10, 9, 11, 6 ]
 * isAlwaysMoving

[ 1, 2, 2, 3, 2, 3, 4, 4, 5 ]
 * isSlow

[ 0, 20, 100, 50 ]
 * isFast
 * isAlwaysMoving

[ 5, 5, 5, 5, 5 ]
 * isAscending
 * isDescending
 * isSlow
 * isFlat

[ 2, 4, 16, 256, 65536 ]
 * isAscending
 * isTrulyAscending
 * isExponential
 * isAlwaysMoving
```

## License

__MIT__