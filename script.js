var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");


button.addEventListener("click", function(){
	if(input.value.length < 1){
		return;
	}
	console.log(input.value);
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value = "";
});

input.addEventListener("keypress", function(){
	if(input.value.length < 1){
		return;
	}
	console.log(input.value);
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value = "";
});