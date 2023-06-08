/**
 * Author:    Liyuan Tan
 * Created:  09.06.2023
 **/

// define array
myTransport = ["Ford Taurus", "bike", "rides from friends", "Lime Scooter"];

// define object
myMainRide = {
    make: "Ford",
    model: "Taurus",
    color: "Rusty",
    year: 1995,
    age: function () {
        return 2022 - this.year;
    }
}

// output
document.writeln("Kinds of transportion I use: ", myTransport, "</br>");
document.writeln("My Main Ride: <pre>" + JSON.stringify(myMainRide, null, '\t'), "</pre>");
