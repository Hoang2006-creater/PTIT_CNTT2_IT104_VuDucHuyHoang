"use strict";
var weekDays;
(function (weekDays) {
    weekDays["Monday"] = "Thu Hai";
    weekDays["Tuesday"] = "Thu Ba";
    weekDays["Wednesday"] = "Thu Tu";
    weekDays["Thursday"] = "Thu Nam";
    weekDays["Friday"] = "Thu Sau";
    weekDays["Saturday"] = "Thu Bay";
    weekDays["Sunday"] = "Chu Nhat";
})(weekDays || (weekDays = {}));
for (const day in weekDays) {
    console.log(weekDays);
}
