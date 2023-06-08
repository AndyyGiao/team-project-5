/*
 * Author: Liyuan Tan
 * Created: 7 June 2023
 * Project-Personal Page
 */

function getRandomColor() {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Function to change the page colors
function changeColor() {
    var body = $("body");

    // Generate random colors
    var bgColor = getRandomColor();
    var fontColor = getRandomColor();

    // Apply the new colors
    body.css({ "backgroundColor": bgColor, "color": fontColor });
}

// Change colors every 3 seconds
setInterval(changeColor, 3000);

// Question reply
$("#btn").click(function () {
    var value = $("#input")[0].value;
    var res = "Correct";
    if ("EDM" !== value.toUpperCase()) {
        res = "Wrong";
    }
    $("#res").html(res);
});
