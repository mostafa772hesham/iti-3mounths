var mydate = new Date()
var ampm="Am"
var arrday=["jan","feb","march","april","may","jun","jul","augs","sep","nov","des"]
var mydatte
for(var i=0;i<12;i++){
 if(  mydate.getMonth()==i) mydatte=arrday[i]
}
console.log(mydatte)
if(mydate.getHours()>12){
    var hours = document.getElementById('hours').innerHTML=mydate.getHours()-12+":"+mydate.getMinutes()+ampm
ampm="Pm"
}else var hours = document.getElementById('hours').innerHTML=mydate.getHours()+":"+mydate.getMinutes()+ampm
var year = document.getElementById('year').innerHTML=mydate.getDay() +" " +mydatte+" "+mydate.getFullYear()
