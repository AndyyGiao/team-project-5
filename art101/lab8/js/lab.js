/**
 * Author:    Liyuan Tan
 * Created:   25.05.2023
 * 
 * (c) Copyright by Blub Corp.
 **/

// get output element
var outputEl = document.getElementById("output");

// create function
function isEven(x) {
    return x % 2 == 0;
}

console.log("Is 2 even? ", isEven(2));
console.log("Is 5 even? ", isEven(5));
console.log("Is 7 even? ", isEven(6));

var array = [100, 81, 4, 16, 42, 144, 10000];
console.log("My array: ", array);

var result1 = array.map(isEven);
console.log("Evenness of array: ", result1);

var result2 = array.map(function (x) {
    return x ** 0.5
});
console.log("Squareroot of array: ", result2);

var output = "<p>My array: [" + array 
+ "]</p><p>Evenness of array: [" + result1 
+ "]</p><p>Squareroot of array: [" + result2 + "]</p>"
outputEl.innerHTML = output;
