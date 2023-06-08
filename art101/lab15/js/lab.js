/**
 * Author:    Liyuan Tan
 * Created:   29.05.2023
 * 
 * (c) Copyright by Blub Corp.
 **/
$(document).ready(function () {

    // get local data
    $("#activate").click(function () {
        $.ajax({
            url: "js/text.json",
            type: "get",
            success: function (res) {
                console.log(res)
                debugger
                $("#output").html(JSON.stringify(res));
            },
            error: function (err) {
                $("#output").html("request error!");
            }
        });
    });

    // get NASA's Picture of the Day 
    $("#picture").click(function () {
        $.ajax({
            url: "https://api.nasa.gov/planetary/apod",
            type: "get",
            data: {
                api_key: "DEMO_KEY"
            },
            success: function (res) {
                console.log(res)
                debugger
                if (res.url) {
                    $("#output").html("<img style = 'width: 300px' src=" + res.url + ">");
                } else {
                    $("#output").html("not get picture!");
                }
            },
            error: function (err) {
                $("#output").html("request error!");
            }
        });
    });

});
