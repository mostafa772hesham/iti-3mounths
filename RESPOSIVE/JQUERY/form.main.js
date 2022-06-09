var storgeData = JSON.parse(localStorage.getItem('user'));
$.ajax({ type: 'Get' , url :` https://jsonplaceholder.typicode.com/posts/${storgeData}` }) .  done( function( data , status) {


document.getElementById("conant").value= data.title
// $('form').append(`<a href="./index.html"><button " >save</button></a>`).click((e)=>{
// e.preventDefault()
// alert("data has saved")
// })

} ).fail(function(error){

})
