let toggleNavStatus = false;
	


function menuToggle(){
	let mainHeaderNav = document.querySelector('.main-header nav');
	let mainHeaderLinks = document.querySelectorAll('.main-header a');
	
	
	if(toggleNavStatus == false){
		
		mainHeaderNav.setAttribute('style' , 'top : 64px ; border-bottom : 1px solid rgba(100,100,100,0.5)')
		let arrayLength = mainHeaderLinks.length;
		for(let x = 0 ; x < arrayLength ; x++){
			mainHeaderLinks[x].setAttribute('style' , 'transition : 5s ; opacity : 1 ; ');
		}
		
		toggleNavStatus = true;
	
	}
	else if(toggleNavStatus == true){
		mainHeaderNav.style.top = "-400%";
		mainHeaderNav.setAttribute('style' , "border-bottom : 0 ");
		
		let arrayLength = mainHeaderLinks.length;
		for(let x = 0 ; x < arrayLength ; x++){
			mainHeaderLinks[x].style.opacity = "0";
			
			mainHeaderLinks[x].setAttribute('style' , 'transition : 0.7s ');
		}
		
		toggleNavStatus = false; 
		
		
		
		
	}
}






/*


// facebook mini 




const list = document.querySelector('#booklist ul');

//remove books

list.addEventListener('click' , function(x){
	if(x.target.className == 'delete'){
		
		const li = x.target.parentElement;
		list.removeChild(li);
		
	}
})

// add books
const addForm = document.forms['add-book'];

addForm.addEventListener('submit' , function(e){
	e.preventDefault();
	const val = addForm.querySelector('input[type = "text"]').value;
	
	//create element
	
	const li = document.createElement('li');
	const bookName = document.createElement('span');
	const deleteBtn = document.createElement('span');
	// add content
	deleteBtn.textContent = 'delete';
	bookName.textContent = val;
	
	//add classes
	bookName.classList.add('name');
	deleteBtn.classList.add('delete');
	
	
	// append to dom
	
	li.appendChild(bookName);
	li.appendChild(deleteBtn);
	list.appendChild(li);
	
})


// hide books

const hideBox = document.querySelector('#hide');

hideBox.addEventListener('change' , function(e){
	if(hideBox.checked){
		list.style.display = "none";
	}
	else{
		list.style.display = "block";
	}
})



// filter books
const searchBar = document.forms['search-books'].querySelector('input');
searchBar.addEventListener('keyup' , function(e){
	const term = e.target.value.toLowerCase();
	const books = list.getElementsByTagName('li');
	Array.from(books).forEach(function(book){
		const title = book.firstElementChild.textContent;
		if(title.toLowerCase().indexOf(term) != -1){
			book.style.display = 'block';
		}
		else{
			book.style.display = 'none';
		}
	})
})

*/


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
	title.style.transition = "10s";
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

function skillHover4(){
	let description = document.querySelector('.description4');
	description.style.opacity = "1";
}
function skillHoverOut4(){
	let description = document.querySelector('.description4');
	description.style.opacity = "0";
}

function skillHover5(){
	let description = document.querySelector('.description5');
	description.style.opacity = "1";
}
function skillHoverOut5(){
	let description = document.querySelector('.description5');
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


function scrollToHome(){		
	window.scrollTo({
	  top: 0,
	  behavior: 'smooth'
	});
}


function scrollToContact(){		
	window.scrollTo({
	  top: 8000,
	  behavior: 'smooth'
	});
}


 function scrollBugAbout(){
	 if(window.innerWidth > 1000){
		document.getElementById('bug').addEventListener('click', function(){
			window.scrollTo({
				top: 2300,
				behavior : 'smooth'
			});
		});
	 }else if(window.innerWidth < 1000){
		 document.getElementById('bug').addEventListener('click', function(){
			window.scrollTo({
				top: 2990,
				behavior : 'smooth'
			});
		});
	 }
 }

window.onload = function(){
	autoTitle();
	scrollBugAbout();
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


//fiftSection
let form = document.querySelector('.form');
let btnForm = document.querySelector('.btnMsg');
let close = document.querySelector('.close');
let guestPassword = document.querySelector('.form-password').value;
let button = document.querySelector('.form-submit');
let hiddenLink = document.querySelector('.hiddenLink');



btnForm.addEventListener('click', function(){
	form.style.left = "0";
})

close.addEventListener('click', function(){
	form.style.left = "-102%";
})

button.addEventListener('click' , function(){
	let guestPassword = document.querySelector('.form-password').value;
	
	
	if(guestPassword == 'admin'){
		hiddenLink.style.visibility = "visible"	;
	}
	else{
		alert('* Access Denied');
	}
})
 
 
let sideForm = document.querySelector('.form');
sideForm.style.zIndex = "1"; 
 
 
 
 /* vue */

let works = new Vue ({
    
   el : '#works',
   data : {
       
   },
   methods : {
       access : function(){
          window.open("https://christianjerr.github.io/access", '_blank');
       },
	   jp : function(){
		   window.open("https://jptorrecarion.github.io/website", '_blank');
	   },
       intra : function(){
		   window.open("https://christianjerr.github.io/intra", '_blank');
	   }
   },
   computed :{
       
   }
    
    
    
    
    
});

let contact = new Vue ({
    
    el : '#contact' ,
    data : {
        
        end : false ,
        title : 'Contact and location'
        
    },
    methods :{
        calling : function(){
            this.end = true
            this.title = 'Live call is under maintenance'
        },
        ending : function(){
            this.end = false ,
            this.title = 'Contact and location'
        }
    },
    computed : {
        
    }
    
    
})
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 































