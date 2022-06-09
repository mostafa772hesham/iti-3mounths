//funcation 1
function printName() {
    var userName = prompt("enter your name", "ali")
    return userName
}
var userName = printName()

if (userName) {
    alert(userName)
}
else alert("retry")
//funcatiom 2
function triangle(base, heght) {
    return .5 * base * heght
}
console.log(triangle(5, 7))

//funcation 3
function setH2() {
    var arr = document.getElementsByTagName("h2")
    for (var key in arr) {
        arr[key].innerHTML = "hellow from h2"

    }
}
setH2()
//function 4
function upLowerCase(word) {

    var newName = []
    word.forEach(e => {




        if (e.toUpperCase() == e) {

            var upper = e.toLowerCase()

            newName.push(upper)

        }
        if (e.toLowerCase() == e) {

            var lower = e.toUpperCase()

            newName.push(lower)
        }

    });
    console.log(newName)


}
word = ["A", "b", "c", "D"]
console.log(upLowerCase(word))










