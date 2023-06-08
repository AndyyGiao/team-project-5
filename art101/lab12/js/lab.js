/**
 * Author:    Liyuan Tan
 * Created:   21.05.2023
 * 
 * (c) Copyright by Blub Corp.
 **/
$(document).ready(function () {

    var houseArray = ["Gryffindor", "Ravenclaw", "Slytherin", "Hufflepuff"];
    var houseDesc = ["This is Gryffindor", "This is Ravenclaw", "This is Slytherin", "This is Hufflepuff"];

    // function sortingHat
    function sortingHat(str) {
        var strLen = str.length;
        var mod = strLen % 4;
        if (mod == 0) {
            return "Gryffindor";
        }
        if (mod == 1) {
            return "Ravenclaw";
        }
        if (mod == 2) {
            return "Slytherin";
        }
        if (mod == 3) {
            return "Hufflepuff";
        }
    };

    function hashCode(str) {
        var hash = 0;
        for (let i = 0, len = str.length; i < len; i++) {
            let chr = str.charCodeAt(i);
            hash = (hash << 5) - hash + chr;
            hash |= 0; // Convert to 32bit integer
        }
        return Math.abs(hash) % (houseArray.length);
    }

    function newSortingHat(str) {
        var mod = hashCode(str)
        return houseArray[mod];
    };

    function getHouseDesc(str) {
        var mod = hashCode(str)
        return houseDesc[mod];
    };

    // Submit Listener
    $("#button").click(function () {
        var inputValue = $("#input")[0].value;
        var house = newSortingHat(inputValue);
        var desc = getHouseDesc(inputValue);
        $("#output").html("<h3>The Sorting Hat has sorted you into " + house + "</h3> <p>Description: " + desc + "</p>");
    });

    // Add Listener
    $("#add-btn").click(function () {
        var inputValue = $("#add")[0].value;
        houseArray.push(inputValue);
        houseDesc.push("This is " + inputValue);
    });

});
