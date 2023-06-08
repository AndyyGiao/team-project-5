/**
 * Author:    Liyuan Tan
 * Created:   23.05.2023
 * 
 * (c) Copyright by Blub Corp.
 **/

// add click event
document.getElementById("submit").addEventListener("click", function () {
    // get input value
    var name1 = document.getElementById("name1").value;
    var name2 = document.getElementById("name2").value;
    var name3 = document.getElementById("name3").value;
    // sortName
    name1 = sortUserName(name1);
    name2 = sortUserName(name2);
    name3 = sortUserName(name3);
    // output
    var outputContent = "<p>Here's your sorted names: </p> <p>" + name1 + "</p> <p>" + name2 + "</p> <p>" + name3 + "</p>";
    document.getElementById("output").innerHTML = outputContent;
})

// sort
function sortUserName(name) {
    console.log("name: " + name);
    var nameArray = name.toLowerCase().split('');
    console.log("nameArray: " + nameArray);
    return nameArray.sort().join('');
}