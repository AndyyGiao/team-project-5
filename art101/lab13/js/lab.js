/**
 * Author:    Liyuan Tan
 * Created:   22.05.2023
 * 
 * (c) Copyright by Blub Corp.
 **/
$(document).ready(function () {

    var outputContent = ""

    // Add Listener
    $("#submit").click(function () {
        var max = $("#max")[0].value;
        var output = $("#output");
        outputContent = "";
        if (!max) {
            output.html("<p class='error'>You must provide a maximum</p>");
            return;
        }
        var factors = [];
        var num0 = $("#num0")[0].value;
        var txt0 = $("#txt0")[0].value;
        var num1 = $("#num1")[0].value;
        var txt1 = $("#txt1")[0].value;
        var num2 = $("#num2")[0].value;
        var txt2 = $("#txt2")[0].value;
        var num3 = $("#num3")[0].value;
        var txt3 = $("#txt3")[0].value;
        if (num0 && txt0) {
            factors.push({
                num: num0,
                txt: txt0
            })
        }
        if (num1 && txt1) {
            factors.push({
                num: num1,
                txt: txt1
            })
        }
        if (num2 && txt2) {
            factors.push({
                num: num2,
                txt: txt2
            })
        }
        if (num3 && txt3) {
            factors.push({
                num: num3,
                txt: txt3
            })
        }
        fizzBuzzBoom(max, factors);
    });

    function fizzBuzzBoom(max, factors) {
        for (var i = 1; i <= max; i++) {
            var str = "";
            for (var factor of factors) {
                if (i % Number(factor.num) == 0) {
                    str += factor.txt;
                }
            }
            if (str != "") {
                str = " - " + str + "!";
            }
            outputPage(i.toString() + str);
        }
        $("#output").html(outputContent);
    }

    function outputPage(str) {
        outputContent += "<div class='str'>" + str + "</div>";
    }

});
