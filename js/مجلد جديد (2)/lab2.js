//Exercise 1
var arr1 =[1,0,2,3,4]
var arr2 =[3,5,6,7,8,13]
var arr3=[]
var maxLenth = Math.max(arr1.length,arr2.length);
function sumArray(){
    for(var i=0;i<maxLenth;i++){
        if(!arr1[i]) arr1[i]=0
        if(!arr2[i]) arr2[i]=0
    arr3.push(arr1[i]+arr2[i])
    }
}
sumArray()
console.log(arr3)
// ///////////////////////////////////////////////////
// Exercise 2
function search(){

    var arrFiveNames=[]
    var arrOrder=['first','secound','third','fourth','fivth']
    for(i=0 ;i<5;i++){
        arrFiveNames.push(prompt("enter 5  names")) 
    }
    var yourName=prompt("enter your name for sarch")
    var yourIndex=arrFiveNames.indexOf(yourName)
    if(!arrOrder[yourIndex]) alert("your name not found")
    else alert(arrOrder[yourIndex])
}
search()
// /////////////////////////////////////////////
// Exercise 3
var arrupercase=["Ahmed",'mohmed']
var arrLowecase=[]
 function lowercase(arr){
 
arr.forEach(function(e){
        arrLowecase.push(e.toLowerCase())})
 }
 lowercase(arrupercase)
 console.log(arrLowecase)
//  ///////////////////////////////////////
// Exercise 4
var obj={
name:"Ahmed",
age:22,
trach:"ui",
fun:function(){console.log("hhhhhhhhhhhhhh")}
}
function ignorFuncatio(obj){
   var strObj= JSON.stringify(obj)
    JSON.parse(strObj)
}
ignorFuncatio(obj)
console.log(obj)