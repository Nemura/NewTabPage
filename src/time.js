function updateClock() {
    var days = ['SUNDAY','MONDAY','TUESDAY','WEDNESDAY','THURSDAY','FRIDAY','SATURDAY'];
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var m = new Date();
    var dateString =
      (days[ m.getDay() ]) + " " +
      ("0" + m.getDate()).slice(-2) + "/" +
      ("0" + (m.getMonth()+1)).slice(-2) +"/"+
      m.getFullYear() +" "+
      ("0" + m.getHours()).slice(-2) + ":" +
      ("0" + m.getMinutes()).slice(-2) + ":" +
      ("0" + m.getSeconds()).slice(-2);

    // set the content of the element with the ID time to the formatted string
    document.getElementById('time').innerHTML = dateString;

    // call this function again in 1000ms
    setTimeout(updateClock, 1000);
}
updateClock(); // initial call