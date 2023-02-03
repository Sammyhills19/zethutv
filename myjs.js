var x = 0;
setInterval(move, 3000);

function move() {
if(x == 3) {
  x = 0;
  el.src=arr[x];
  }
else {
  x += 1;
 el.src = arr[x];
  }
}

function printTime() {
            var week = new Array("Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday");
            var year = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var d = new Date();
    var u = d.getDate();
    var day = d.getDay();
    var month = d.getMonth();
    var hours = d.getHours();
    var mins = d.getMinutes();
    var secs = d.getSeconds();
    var x = week[day];
    var y = year[month];
    var elem = document.getElementById('time');
    elem.innerHTML = x + " " + u + " " +y+" "+hours+":"+mins+":"+secs;
    }
setInterval(printTime, 1000);