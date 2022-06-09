var random = []
var arr = []
var count = 0
var idarr = ['ba1', 'ba2', 'ba3', 'ba4', 'ba5', 'ba6', 'ba7', 'ba8', 'ba9', 'ba10', 'ba11', 'ba12']
var hearts=document.getElementsByClassName('heart')
var br = document.getElementById("ba1")
var arrclasses = document.getElementsByClassName("card_dimantion")
document.getElementById("hint").addEventListener('click',showCards)
for (var i = 0; i < arrclasses.length; i++) {
    for (var y = 0; y < 12; y++) {
        random.unshift(Math.trunc(Math.random() * 10 + 3).toString())
        arrclasses[i].style.order = random[y]
    }
}
for (var i = 0; i <= idarr.length; i++) {
    document.getElementById(idarr[i]).addEventListener("click", fun)
}
function fun(e) {
    e.target.style.display = "none"
    arr.unshift(e.target)
    setTimeout(check, 100)
    function check() {
        var x = arr[0].parentElement
        var y = x.parentElement
        var x1 = arr[1].parentElement
        var y1 = x1.parentElement
        if (y.className == y1.className) {
            y.style.display = "none"
            y1.style.display = "none"
        }
        arr[0].style.display = "block"
        arr[1].style.display = "block"
        arr = []
            ;
    }
}
function showCards() {
    arr=[]
        setTimeout(hintTimer,500)
        for(var i=0;i<idarr.length;i++){
            document.getElementById(idarr[i]).style.display='none'
        }
        function hintTimer(){
            for(var i=0;i<idarr.length;i++){
                document.getElementById(idarr[i]).style.display='block' 
            }
        }
        count++
        switch (count) {
            case 1:
                hearts[0].style.display='none'
                break;
                case 2:
                    hearts[1].style.display='none'
                    break;
                    case 3:
                        hearts[2].style.display='none'
                        break;
            default:
                break;
        }
        if(count >=3)
            document.getElementById('hint').disabled =true
    }
