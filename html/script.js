function get_show() {
  var title = document.getElementById("title").value;
  var des = document.getElementById("des").value;

  var datetime = new Date();
  var date =
    "Created on: " +
    datetime.getDate() +
    " / " +
    datetime.getMonth() +
    " / " +
    datetime.getFullYear();
  var time =
    "At: " +
    datetime.getHours() +
    ":" +
    datetime.getMinutes() +
    ":" +
    datetime.getSeconds();

  document.getElementById("t").innerHTML = title;
  document.getElementById("d").innerHTML = des;
  document.getElementById("footer_date").innerHTML = date;
  document.getElementById("footer_time").innerHTML = time;
}


var modal = document.getElementById("modal");

var open_modal = document.getElementById("open_modal");

var close_modal = document.getElementById("close_modal");
  
open_modal.onclick = function(){
  modal.style.display = "block";
}

close_modal.onclick = function() { 
  modal.style.display = "none";
}

