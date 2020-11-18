var id="current_date", dt= new Date();
var time = dt.getHours() + ":" + dt.getMinutes() + ":" + dt.getSeconds();
document.write(time);

document.querySelector(".todays-date").innerText=moment().format("MM/DD/YYYY")

  console.log(moment().format("MM/DD/YYYY"));



  