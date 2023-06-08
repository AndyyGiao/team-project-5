/**
 * Author:    Liyuan Tan
 * Created:   18.05.2023
 * 
 * (c) Copyright by Blub Corp.
 **/
$(document).ready(function () {
    // Create the button
    $("#challenge").append($("<input id='btn_challenge' type='button' value='challenge'>"));
    $("#problems").append($("<input id='btn_problems' type='button' value='problems'>"));
    $("#results").append($("<input id='btn_results' type='button' value='results'>"));

    // Add Listener
    $("#btn_challenge").click(function () {
        $("#challenge").toggleClass("coler");
    });
    $("#btn_problems").click(function () {
        $("#problems").toggleClass("size");
    });
    $("#btn_results").click(function () {
        $("#results").toggleClass("background_color");
    });

    // Bonus
    $("#bonus").append($("<input id='btn_ext' type='button' value='bonus'>"));
    $("#btn_ext").click(function () {
        $("#btn_challenge").toggleClass("btn_bg_color");
        $("#btn_problems").toggleClass("btn_bg_color");
        $("#btn_results").toggleClass("btn_bg_color");
    });
});
