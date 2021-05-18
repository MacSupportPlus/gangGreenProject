

let gameContainer = document.querySelector('.events');

gameContainer.addEventListener('click', e=>{

	e.preventDefault();

	if(e.target.tagName == "A"){
		let id = e.target.id;
		console.log(id);

		localStorage.gameID = id;

		window.location.href = "teams.html";
	}
})