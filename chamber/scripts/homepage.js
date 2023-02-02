// date
const meetingWelcome = document.querySelector('#meetingWelcome');

var dayoftheweek = new Date().getDay();
if([1,2].includes(dayoftheweek)){
    meetingWelcome.innerHTML = "COME TO THE MEETING TODAY AT 4AM OR ELSE"
}

var today = new Date();
var day = today.toLocaleString('default', { weekday: 'long' });
var date = today.toLocaleString('default', { day: 'numeric', month: 'long', year: 'numeric' });
document.querySelector("#today-text").innerHTML = day + ',\t' + date;

