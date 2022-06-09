var arr=[]
var con = document.getElementById("con")

function promt(){
    var span = document.createElement("button")
   
    var elem= document.createElement('h2')
    var name=prompt("enter the name","")
    if(!name)alert("retrey")
    arr.push(name)
    console.log(arr)
    con.appendChild(elem).innerHTML=name
    span.innerHTML="x"
    elem.appendChild(span)
    span.onclick=function ffun(){

    
        span.parentElement.remove()
        console.log(111111)
    }
    
}
function search(){
    var search=document.getElementById("search").value
    console.log(search)
    var newarr=arr.filter(fun)
    function fun(e){
        return search==e
    }
    newarr.forEach(function myfun(e){
      var h2=document.getElementsByTagName('h2')
      console.log(h2)
   for(var i =0;i<h2.length;i++){
       h2[i].style.display="none"
   }
      var elem =document.createElement("h2")
      elem.style.display="block"
         con.appendChild(elem).innerHTML=e
})
    console.log(newarr)
}
