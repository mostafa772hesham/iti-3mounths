var form = document.getElementById("form");
var progress = document.getElementById("Progress").id;
var countid = 0;
var arrstorge = [];
var container = document.getElementsByClassName("tasksSection");

form.addEventListener('submit', function(e){
    e.preventDefault();    
    countid++;
    var inpuVleu = form.input_project.value;
    
    addVlue(inpuVleu, countid,progress);
});



function addVlue(inpuVleu, id,perentId) {
  //
  var li = document.createElement("li");
  li.innerHTML = inpuVleu;
  li.setAttribute("id", id);
  li.setAttribute("draggable", true);

  document.getElementById(perentId).appendChild(li);

  li.addEventListener("dragstart", function (e) {
    e.dataTransfer.setData("text", this.id);
  });
  var obj = {
    id: li.id,
    value: li.innerHTML,
    perent: li.parentElement.id,
  };
  arrstorge.push(obj);
  setLocalStorge();
}

for (var i = 0;i< container.length ; i++) {
    container[i].addEventListener("dragover", dragoverFun);
    container[i].addEventListener("drop", dropFun);
}

function dragoverFun(e) {
  e.preventDefault();
}

function dropFun(event) {
  var droplist = event.dataTransfer.getData("text");

  var droppedItem= this.appendChild(document.getElementById(droplist));
  console.log(droppedItem)
  for(var i=0;i<arrstorge.length;i++){
      console.log(droppedItem)
      if(arrstorge[i].id==droppedItem.id){
          arrstorge[i]={
              id:droppedItem.id,
              value:droppedItem.innerHTML,
              perent: droppedItem.parentElement.id

          }
      }
  }
  setLocalStorge()
}
function setLocalStorge() {
  localStorage.setItem("projects", JSON.stringify(arrstorge));
}

var getLocalStorge=JSON.parse(localStorage.getItem('projects'))
if(getLocalStorge){
    for(var i=0;i<getLocalStorge.length;i++){
        addVlue(getLocalStorge[i].value,getLocalStorge[i].id,getLocalStorge[i].perent)
    }
}
