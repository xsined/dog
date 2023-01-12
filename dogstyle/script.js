let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = () => {
	menu.classList.toggle('bx-x');
	navlist.classList.toggle('open');
}



/*theme*/

if(!localStorage.theme)localStorage.theme = "light"
	document.body.className = localStorage.theme
togglethemeBtn.innerText = document.body.classList.contains("dark") ? "day" : "night"

togglethemeBtn.onclick = () =>{
	document.body.classList.toggle("dark")
	togglethemeBtn.innerText = document.body.classList.contains("dark") ? "day" : "night"
localStorage.theme = document.body.className || "light"
}