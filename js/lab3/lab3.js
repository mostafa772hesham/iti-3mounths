//Exercise 1
var newArr=[]
var arr=["a2",'a2','a3',1,1]
function removeDoubrecated(arr){
     newArr = [...new Set(arr)]
}
removeDoubrecated(arr)
console.log(newArr)
// //////////////////////
// Exercise 2
function countLenth(){
     var newsentence =sentence.split(' ')
     var lenthSentence=newsentence.length
     alert("your number of word is"+lenthSentence)
}
var sentence =prompt("enter your sentence to calculation number of word").trim()
countLenth(sentence)
// ///////////////////////////////////////////
// Exercise 3
var count=0
function countVol(vowlsentence){
     var arrVowl = ['a','o','u','e','i']
     var arrvowlsentence =Array.from(vowlsentence)
     var maxlenth = Math.max(arrvowlsentence.length,arrVowl.length)
     for(var i=0; i<maxlenth;i++){
          if(arrvowlsentence[i]=='a'||arrvowlsentence[i]=='o'||arrvowlsentence[i]=='u'||arrvowlsentence[i]=='e'||arrvowlsentence[i]=='i') ++count
     }
return count
}
var vowlsentence = prompt("enter your sentence to count your number of vowl")
countVol(vowlsentence)
alert("your count of vowl is"+count)
// //////////////////////////////////////////////////////
// Exercise 4
function factorial(num){
var num 
     for (var i =num-1;i>0;i--){
         num=num *i
     }
    alert("yor factorial result is "+num)
}

var strnum = prompt("enter your number to calculate the factorial")
var num = Number(strnum) 
factorial(num)
// //////////////////////////////
// Exercise 5
function random(){
     var numRandom=parseInt(Math.random()*10)
     
     document.getElementById("random").innerHTML = numRandom;}
// //////////////////////////////////////////////////////////////
// Exercise 6
function hideEmail(email){
     var myemail = email.split("_"||"$"||"%"||"-" ||"*"||"?"||"#"||"!"||"&")
     myemail[0]=myemail[0]+"......"
     var myemail2=myemail[1].split("@").pop()
         console.log(myemail2)
         var myemailFull = myemail[0]+"@"+myemail2
         return myemailFull
     }
     var email = prompt('enter your email')
     var hideEmail =hideEmail
     
     alert(hideEmail(email))