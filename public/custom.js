var food = {};
function handleSuccess()
{
var data = JSON.parse(this.responseText);
for (var item in data){
if(data.hasOwnProperty(item)){
	
var li = document.createElement("li");
li.className += "collection-item avatar";

var item1 = document.createElement("i");
item1.className += "material-icons circle green";
item1.textContent = "brightness_1"

var item2 = document.createElement("span");
item2.className += "title";
item2.textContent = data[item]['name'];

var item3 = document.createElement("p");
item3.textContent = "Carbohydrate Value: " + data[item]['nutritionper100gcarbohydrate'];

var item4 = document.createElement("p");
item4.textContent = "energy: " + data[item]['nutritionper100genergy'];

var item5 = document.createElement("a");
item5.href = "/food";
item5.className += "secondary-content";
item5.setAttribute("data-name", data[item]['name']);
item5.setAttribute("data-fat", data[item]['nutritionper100gfat']);
item5.setAttribute("data-carbs", data[item]['nutritionper100gcarbohydrate']);
item5.setAttribute("data-sugar", data[item]['nutritionper100gsugars']);

var item5child = document.createElement("i"); 
item5child.className = "material-icons";
item5child.innerHTML = "grade";


li.appendChild(item1);
li.appendChild(item2);
li.appendChild(item3);
li.appendChild(item4);
li.appendChild(item5);
item5.appendChild(item5child);



var result = document.getElementById("foods")
result.appendChild(li);
}
//check to see eventlistener
if(item5.addEventListener){
	item5.addEventListener("click", function(event){
		var target = event.currentTarget;
		sessionStorage.clear();
		
		sessionStorage.setItem('food-name', target.getAttribute("data-name"));
		sessionStorage.setItem('food-fat', target.getAttribute("data-fat"));
		sessionStorage.setItem('food-carbs', target.getAttribute("data-carbs"));
		sessionStorage.setItem('food-sugar', target.getAttribute("data-sugar"));
		
		
	});
}


}

}


function handleError()
{
var h5 = document.getElementsByID("list");
h5.style.color = "red";
h5.innerHTML=" An Error Occured"
var Error = document.getElementById("main");
error.appendChild(h5);
}



//create an xhr object
const xhr = new XMLHttpRequest();
xhr.open('get','/foods');
xhr.onload=handleSuccess;
xhr.onerror = handleError;
xhr.send();