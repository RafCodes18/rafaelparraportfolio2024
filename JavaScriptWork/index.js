var data = [1, 2, 3, 4, 5];

var button = document.getElementById("btn-click");
var selectList = document.getElementById("mySelect");
var option = document.createElement("option");

button.onclick = function()
{
 console.log("button clicked");

 if(!selectList.hasChildNodes()){
  for(var i = 0; i < data.length; i++){
   option.text = data[i];
   option.value = data[i];
   selectList.appendChild(option);
  }
 }
}