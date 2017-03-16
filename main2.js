$(document).ready(function(){
var dd = "AM"
setInterval (function(clockStart){
  var newDate = new Date()
  var hh = newDate.getHours()
  var m = newDate.getMinutes()
  var s = newDate.getSeconds()
  var h = hh

  if(hh >= 12) {

      h = hh - 12

      dd = "PM"
    } 

    if (hh == 0) {
      hh = 12
    }

  h = h < 10 ? "0" + h : h
  m = m < 10 ? "0" + m: m
  s = s < 10 ? "0" + s : s

  var correction = h +":"+ m +":" + s + " " + dd
  var backColor = "#" + h.toString(16) + m.toString(16) + s.toString(16)
  var opposite = "#" + s.toString(16) + m.toString(16) + h.toString(16) 

  $("#finalCountdown").html(`${correction}`)
  $("#finalCountdown").css('background-color', backColor)
  $("body").css('background-color', opposite)
 console.log(opposite)
}, 1000)


})