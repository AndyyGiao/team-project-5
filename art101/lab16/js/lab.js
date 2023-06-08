/**
 * Author:    Liyuan Tan
 * Created:   06.06.2023
 * 
 * (c) Copyright by Blub Corp.
 **/
$(document).ready(function () {

    var currNum = 1, max = 1;

    getAndPutData("https://xkcd.com/info.0.json", true);

    // getAndPutData
    function getAndPutData(url, first) {
        $.ajax({
            type: "get",
            url: url,
            dataType: 'json',
            success: function (res) {
                debugger
                console.log(res)
                var comicObj = res;
                var title = comicObj.title;
                var img = comicObj.img;
                var alt = comicObj.alt;
                currNum = comicObj.num;
                if (first) {
                    max = comicObj.num;
                }
                if (img) {
                    $("#output").html("<p>" + title
                        + "</p><img style = 'width: 300px' src='" + img
                        + "' alt='" + alt
                        + "'>");
                } else {
                    $("#output").html("not get picture!");
                }
            },
            error: function (err) {
                $("#output").html("request error!");
            }
        });
    };

    $("#prve").click(function () {
        debugger
        if (currNum <= 1) {
            currNum = 1;
        } else {
            currNum -= 1;
        }
        var url = "https://xkcd.com/" + currNum + "/info.0.json";
        getAndPutData(url, false);
    });

    $("#next").click(function () {
        debugger
        if (currNum >= max) {
            currNum = max;
        } else {
            currNum += 1;
        }
        var url = "https://xkcd.com/" + currNum + "/info.0.json";
        getAndPutData(url, false);
    });

});
