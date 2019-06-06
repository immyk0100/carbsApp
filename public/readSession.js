window.onload = function(){
	var name = sessionStorage.getItem("food-name");
	document.getElementById("name").innerHTML = name;
	
	var fat = sessionStorage.getItem("food-fat");
	document.getElementById("fat").innerHTML = fat;
	
	var carbs = sessionStorage.getItem("food-carbs");
	document.getElementById("carbs").innerHTML = carbs;
	
	var sugar = sessionStorage.getItem("food-sugar");
	document.getElementById("sugar").innerHTML = sugar;
	
	
	
}