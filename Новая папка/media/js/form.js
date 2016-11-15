//alert("On")
addEventListener("load", initiate);
function initiate(){
	name1=document.getElementById("firstname");
	name2=document.getElementById("lastname");
	name1.addEventListener("input", validation);
	name2.addEventListener("input", validation);
	validation();
};

function validation() {
	//console.log(name1.value+name2.value);
	if(name1.value=="" && name2.value==""){
	name1.setCustomValidity("Fill in at least one field");
	name1.style.background="orange";
	name2.style.background="orange";
	
	}else{
	name1.setCustomValidity("");
    name1.style.background="white";
	name2.style.background="white";	
	}
};
