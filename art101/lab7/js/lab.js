/**
 * Author:    Liyuan Tan
 * Created:   09.06.2023
 **/

var userName = window.prompt("Hi. Please tell me your name so I can fix it,");

function sortUserName(userName) {
    // var userName = window.prompt("Hi. Please tell me your name so I can fix it,");
    console.log("userName = ", userName);// split string to array
    var nameArray = userName.split('');
    console.log("nameArray = ", nameArray);// sort the array
    var nameArraySort = nameArray.sort();
    console.log("nameArraySort = ",);// join array back to a string
    var nameSorted = nameArraySort.join('');
    console.log("nameSorted = ", nameSorted);
    // Note that I could have done the above lines as a single line:
    //userName.toLower().split("").sort().join("")
    return nameSorted;
}

// output
document.writeln("Oh hey, I've fixed your name: ", sortUserName(userName));