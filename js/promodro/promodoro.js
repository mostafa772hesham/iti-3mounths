document.getElementById("start_work").addEventListener("click",mysecound)
document.getElementById("start_Break").addEventListener("click",mysecound_br)
document.getElementById("Resume_work").addEventListener("click",mysecound_re_wo)
document.getElementById("End_work").addEventListener("click",mysecound_End_work)
document.getElementById("Resume_work").disabled=true;
document.getElementById("start_Break").disabled=true;
document.getElementById("End_work").disabled = true;
// //////////////////////////variable///////////////////////
var secount_interval
var minutes_interval
var hours_interval
var secount_interval_br
var minutes_interval_br
var hours_interval_br
var minute
var secound
var hours
var secound_br
var minute_br
var hours_br
var secount_interval_re_wo
var minutes_interval_re_wo
var hours_interval_re_wo
// //////////////////////////////////////////////////

function mysecound(){ 
    document.getElementById("start_Break").disabled=false;
    document.getElementById("End_work").disabled = false;
    document.getElementById("start_work").disabled=true;

 secount_interval= setInterval(secound_fun,1000)
 secound = 0

 minutes_interval= setInterval(minutes,60000)
 minute = 0

hours_interval= setInterval(hours,3600000)
 hours = 0

}





// ///////////////////////////////////////////////////////////


function mysecound_br(){ 
    document.getElementById("start_Break").disabled=true;
    document.getElementById("start_work").disabled=true;
    document.getElementById("Resume_work").disabled=false;
    document.getElementById("End_work").disabled = false;
    clearInterval(secount_interval)
    clearInterval(hours_interval)
    clearInterval(minutes_interval)
    clearInterval(secount_interval_re_wo)
    clearInterval(minutes_interval_re_wo)
    clearInterval(hours_interval_re_wo)
    secount_interval_br= setInterval(secoundfun_br,1000)

 if(document.getElementById("secound_br").innerText==0)secound_br = 0

minutes_interval_br= setInterval(minutesfun_br,60000)
 if(document.getElementById("minute_br").innerText==0)minute_br = 0

hours_interval_br= setInterval(hours_fun_br,3600000)
 if( document.getElementById("hours_br").innerText==0) hours_br = 0

}

console.log(secound_br,minute_br,hours_br)


// ////////////////////////////////////////////////////////
function mysecound_re_wo(){ 
    document.getElementById("start_Break").disabled=false;
    document.getElementById("start_work").disabled=true;
    document.getElementById("Resume_work").disabled=true;
    document.getElementById("End_work").disabled = false;
    clearInterval(secount_interval_br)
    clearInterval(hours_interval_br)
    clearInterval(minutes_interval_br)
     secount_interval_re_wo= setInterval(secound_fun,1000)

secound 

 minutes_interval_re_wo= setInterval(minutes,60000)
minute 

 hours_interval_re_wo= setInterval(hours,3600000)
hours 

}
function mysecound_End_work(){
    alert("you spend time of work is "+secound+" secound "+minute+" minute "+hours+" hours ")
  document.getElementById("refrish").href = ""
}


//////////////////////////////////////// global funcation////////////////////////

function secound_fun(){
    secound++
    document.getElementById("secound").innerText=secound
}
function minutes(){
    secound=0

minute++
    document.getElementById("minute").innerText=minute
}
function hours(){
    minute=0

    hours++
    document.getElementById("hours").innerText=hours
}



function secoundfun_br(){
    secound_br++
    document.getElementById("secound_br").innerText=secound_br
}

function minutesfun_br(){
    secound_br=0

minute_br++
    document.getElementById("minute_br").innerText=minute_br
}

function hours_fun_br(){
    minute_br=0
    hours_br++
    document.getElementById("hours_br").innerText=hours_br
}