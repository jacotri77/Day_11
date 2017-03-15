$(document).ready(function(){

function timeOut(cb,timeFrame){
	setTimeout(function(){
    cb()
    timeOut(cb,timeFrame)
  },timeFrame)
}
  timeOut(function(){
    console.log("hello")
  }, 1000)


	