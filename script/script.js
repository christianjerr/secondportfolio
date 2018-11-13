let toggleNavStatus = false;
	


function menuToggle(){
	let mainHeaderNav = document.querySelector('.main-header nav');
	let mainHeaderLinks = document.querySelectorAll('.main-header a');
	
	
	if(toggleNavStatus == false){
		
		mainHeaderNav.style.left = "0";
		
		let arrayLength = mainHeaderLinks.length;
		for(let x = 0 ; x < arrayLength ; x++){
			mainHeaderLinks[x].style.opacity = "1";
		}
		
		toggleNavStatus = true;
	
	}
	else if(toggleNavStatus == true){
		mainHeaderNav.style.left = "-100%";
		
		let arrayLength = mainHeaderLinks.length;
		for(let x = 0 ; x < arrayLength ; x++){
			mainHeaderLinks[x].style.opacity = "0";
		}
		
		toggleNavStatus = false; 
	
	}
}


let letter = 0;
let speed = 100;
let str = document.querySelector('#type-writter').innerHTML;
document.querySelector('#type-writter').innerHTML = "";

function type(){
	if(letter < str.length){
		document.querySelector('#type-writter').innerHTML += str.charAt(letter);
		letter++;
		
		setTimeout(type , speed);
	}
}
setTimeout(type, speed);



function autoTitle(){
	let title = document.querySelector('#title');
	title.style.opacity = "1";
}



// skill set
function skillHover1(){
	let description = document.querySelector('.description1');
	description.style.opacity = "1";
}
function skillHoverOut1(){
	let description = document.querySelector('.description1');
	description.style.opacity = "0";
}

function skillHover2(){
	let description = document.querySelector('.description2');
	description.style.opacity = "1";
}
function skillHoverOut2(){
	let description = document.querySelector('.description2');
	description.style.opacity = "0";
}

function skillHover3(){
	let description = document.querySelector('.description3');
	description.style.opacity = "1";
}
function skillHoverOut3(){
	let description = document.querySelector('.description3');
	description.style.opacity = "0";
}


function arrow(){
	let downArrow = document.getElementById('downArrow');
	let downArrowSecond = document.getElementById('downArrowSecond');
	
	
	downArrow.setAttribute("style" , "width : 60px ; height : 60px ");
	
	downArrowSecond.setAttribute("style" , "width : 60px ; height : 60px ; ");
	
	
}

function arrowOut(){
	let downArrow = document.getElementById('downArrow');
	let downArrowSecond = document.getElementById('downArrowSecond');
	
	downArrow.setAttribute("style" , "width : 50px ; height : 50px");
	
	downArrowSecond.setAttribute("style" , "width : 50px ; height : 50px");
	
	
}

function scrollEffect(){		
	window.scrollTo({
	  top: 660,
	  behavior: 'smooth'
	});
}


function scrollToAbout(){		
	window.scrollTo({
	  top: 2200,
	  behavior: 'smooth'
	});
}
function scrollToHome(){		
	window.scrollTo({
	  top: 0,
	  behavior: 'smooth'
	});
}

window.onload = function(){
	autoTitle();
}
 

let thirdSectionTitleLetter = 0;
let thirdSectionTitleSpeed = 200;
let thirdStr = document.getElementById('thirdSectionTitle').innerHTML; 
document.getElementById('thirdSectionTitle').innerHTML = "";


function thirdSectionTitle(){
	if(thirdSectionTitleLetter < thirdStr.length){
		document.getElementById('thirdSectionTitle').innerHTML += thirdStr.charAt(thirdSectionTitleLetter);
		thirdSectionTitleLetter++;
		
		setTimeout(thirdSectionTitle , thirdSectionTitleSpeed);
	}
} 

setTimeout(thirdSectionTitle , thirdSectionTitleSpeed);
 
 
 
function zoomProfile(){
	let picture = document.querySelector('.profile');
	picture.setAttribute("style" , "box-shadow :0px 0px 15px  15px white");
} 

function zoomProfileOut(){
	let picture = document.querySelector('.profile');
	picture.setAttribute("style" , "width : 150px ; height : 150px");
} 

function zoomProfile2(){
	let picture = document.querySelector('#profileReal');
	picture.setAttribute("style" , "box-shadow :0px 0px 20px  20px black");
} 

function zoomProfileOut2(){
	let picture = document.querySelector('#profileReal');
	picture.setAttribute("style" , "");
} 



function albert(){
	let picture = document.querySelector('#greatMinds');
	picture.style.opacity = "1";
}

function albertOut(){
	let picture = document.querySelector('#greatMinds');
	picture.style.opacity = "0";
}

function abraham(){
	let picture = document.querySelector('#abraham');
	picture.style.opacity = "1";
}

function abrahamOut(){
	let picture = document.querySelector('#abraham');
	picture.style.opacity = "0";
}

function haynes(){
	let picture = document.querySelector('#haynes');
	picture.style.opacity = "1";
}

function haynesOut(){
	let picture = document.querySelector('#haynes');
	picture.style.opacity = "0";
}
 //fourthSection
function calc(){
	let operations = document.querySelector('.operations').value;
	let firstNumber = document.querySelector('.firstNumber').value;
	let secondNumber = document.querySelector('.secondNumber').value;
	let answer = document.querySelector('.answer');
	
	if(operations == 'addition' || operations == 'add'){
		let total = parseInt(firstNumber) + parseInt(secondNumber) ;
		answer.innerHTML =  `Total: ${total}` ;
	}
	else if(operations == 'subtraction' || operations == 'sub'){
		let total = parseInt(firstNumber) - parseInt(secondNumber) ;
		answer.innerHTML =  `Total: ${total}` ;
	}
	
	else if(operations == 'division' || operations == 'div'){
		let total = parseInt(firstNumber) / parseInt(secondNumber) ;
		answer.innerHTML =  `Total: ${total}` ;
	}
	
	else if(operations == 'multiplication' || operations == 'mult' || operations == 'times'){
		let total = parseInt(firstNumber) * parseInt(secondNumber) ;
		answer.innerHTML =  `Total: ${total}` ;
	}
	else if(operations == null | operations == "" ){
		alert('* Operation required');
	}
	
	else if(firstNumber == null | firstNumber == "" ){
		alert('* First number required');
	}
	
	else if(secondNumber == null | secondNumber == "" ){
		alert('* Second number required');
	}
	else{
		answer.innerHTML = `Syntax error or Unknown value`;
	}
}
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 































