$(document).ready(function(){
var dd = "AM"
setInterval (function(clockStart){
  var newDate = new Date()
  var hh = newDate.getHours()
  var m = newDate.getMinutes()
  var s = newDate.getSeconds()
  if(hh >= 12) {

      hh = hh - 12
      dd = "PM"
    } 

  hh = hh < 10 ? "0" + hh : hh
  m = newDate.getMinutes() < 10 ? "0" + newDate.getMinutes() : newDate.getMinutes()
  s = newDate.getSeconds() < 10 ? "0" + newDate.getSeconds() : newDate.getSeconds()

  var correction = hh +":"+ m +":" + s + " " + dd
  var backColor = "#" + hh.toString(16) + m.toString(16) + s.toString(16)
  var opposite = "#" + s.toString(16) + m.toString(16) + hh.toString(16) 
console.log(backColor)
  $("#finalCountdown").html(`${correction}`)
  $("#finalCountdown").css('background-color', backColor)
  $("body").css('background-color', opposite)
  $("#finalCountdown").css("color", opposite)
 
}, 1000)


})