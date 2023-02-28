var now = new Date();
var datetimeString = now.toLocaleDateString() + " " + now.toLocaleTimeString();
document.getElementById("datetime_now").value = datetimeString;


document.getElementById("last_updated").innerHTML = "Last Updated: " + new Date(document.lastModified).toLocaleString() + "...  WDD230";

var d = new Date();
var year = d.getFullYear();
document.getElementById("current_year").innerHTML = year;


