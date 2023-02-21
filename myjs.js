//Slide Show for banners
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

//Date function for *Today's Date*
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

//Image slider for headline images
var num = 0;
function next() {
    var slider = document.getElementById('slider');
    num++;
    if(num >= headLine.length) {
        num = 0;
    }
    slider.src = headLine[num];
}
function previous() {
    var slider = document.getElementById('slider');
    num--;
    if(num < 0) {
        num = headLine.length-1;
    }
    slider.src = headLine[num];
}

// Drop Down Menu functions
function pop() {
  dropdwn.style.display = "none";
  vanish.style.display = "block";
  list.style.display = "block";
}

function disappear() {
  dropdwn.style.display = 'block';
  vanish.style.display = 'none';
  list.style.display = 'none';
}