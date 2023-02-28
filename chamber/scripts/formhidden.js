var now = new Date();
var datetimeString = now.toLocaleDateString() + " " + now.toLocaleTimeString();
document.getElementById("datetime_now").value = datetimeString;