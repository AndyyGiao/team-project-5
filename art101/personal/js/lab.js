/*
 * Author: Liyuan Tan
 * Created: 7 June 2023
 * Project-Personal Page
 */

// Question reply
$("#btn").click(function () {
    var value = $("#input")[0].value;
    var res = "Correct";
    if ("EDM" !== value.toUpperCase()) {
        res = "Wrong";
    }
    $("#res").html(res);
});
