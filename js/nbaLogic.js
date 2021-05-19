
const data = null;
var cardNewImage1 = document.querySelector(".cardImg1");
var cardNewImage2 = document.querySelector(".cardImg2");
var cardNewImage3 = document.querySelector(".cardImg3");
var cardNewImage4 = document.querySelector(".cardImg4");
var cardNewLogo1 = document.querySelector(".logo1");
var cardNewLogo2 = document.querySelector(".logo2");
var cardNewName1 = document.querySelector(".player1name");
var cardNewName2 = document.querySelector(".player2name");
var cardNewName3 = document.querySelector(".player3name");
var cardNewName4 = document.querySelector(".player4name");
var voteNewName1 = document.querySelector(".player1vote");
var voteNewName2 = document.querySelector(".player2vote");
var cardNewCollege1 = document.querySelector(".player1College");
var cardNewCollege2 = document.querySelector(".player2College");
var cardNewCollege3 = document.querySelector(".player3College");
var cardNewCollege4 = document.querySelector(".player4College");
let playerList = []
let allStarList = [136, 382, 525, 265, 126, 548, 124, 314, 189, 215, 432, 383, 279, 319, 347, 415, 64, 192, 840, 1487, 227, 463, 71, 544, 45, 538, 882, 86, 724, 20, 361, 441, 456, 761, 1046, 153, 261, 159, 481, 458, ]
console.log(allStarList);
var stars1 = [{}]
var stars2 = [{}]
/*
[{}, {}, {}]

// index in the array */

let games = [{
	gameID: 1,
	date: "May 18th, 2021",
	id1: 41,
	id2: 15,

},

{
	gameID: 2,
	date: "May 18th, 2021",
	id1: 17,
	id2: 11
},
{
	gameID: 3,
	date: "May 18th, 2021",
	id1: 8,
	id2: 16
},
{
	gameID: 4,
	date: "May 18th, 2021",
	id1: 9,
	id2: 29
},
{
	gameID: 5,
	date: "May 18th, 2021",
	id1: 21,
	id2: 20
},
{
	gameID: 6,
	date: "May 18th, 2021",
	id1: 24,
	id2: 1
},
{
	gameID: 7,
	date: "May 18th, 2021",
	id1: 11,
	id2: 17
},
{
	gameID: 8,
	date: "May 18th, 2021",
	id1: 2,
	id2: 5
}


]





let teamID = [1, 2, 4, 5, 8, 9, 11, 15, 16, 17, 19, 20, 21, 24, 27, 28, 29, 30,40,41];


(()=>{


		

const xhr = new XMLHttpRequest();
xhr.withCredentials = true;

function getPlayers(){


xhr.addEventListener("readystatechange", function () {

	if (this.readyState === this.DONE) {
		//console.log(JSON.parse(this.responseText));
		let playerObj = (JSON.parse(this.responseText));
		let index = 0
		
		
		
		for (index = 0; index < playerObj.api.players.length; index++) {
			playerList.push(playerObj.api.players[index])
			
		}
		console.log(playerList)

		displayDetails();

		// function displayTeams(player){
		// 	newPlayer1 = player 
		// 	console.log(newPlayer1.firstName)
			

		// }

		// displayTeams(playerList[135])

		
		// window.addEventListener('DOMContentLoaded', function() {
		// 	let playerCard = query.querySelector('.flip-card');
		// 	let playerCardImg = query.querySelector('.flip-card-front');
		// 	let playerCardInfo = query.querySelector('.flip-card-back');
		// 	let playerCardName = query.querySelector('h1');
			// let playerCardInfo = query.querySelector('p');

			
	
	// 	function filterItems(arr, query) {
	// 		return arr.filter(function(el) {
	// 			return el.toLowerCase().indexOf(query.toLowerCase()) !== -1
	// 		})
	// 	  }
	// 	  console.log(filterItems(playerList, 'anthony'))  // ['apple', 'grapes']
	// let container = document.getElementById('eventcontainer')
	
	
// 	let container = document.getElementById("eventContainer");
// //li id="4"
// container.addEventListener("click", (e) => {
//   let teamID = e.target.id;
//   localStorage.teamID = e.target.id;
//   window.location.href = "/events.html";
// });
// //new api call
// //new query to display detailed information
// function showDetails(){
//     //make onload event so that function gets called when page loads
//     //<body onload="showDetails()">
//         //next page
// let teamID = localStorage.teamID;
//     //query inside of your array
//     //show details on html page
// }
// 		}
// 	}
		
	}
});

} //end of getPlayer

xhr.open("GET", "https://api-nba-v1.p.rapidapi.com/players/league/standard");
xhr.setRequestHeader("x-rapidapi-key", "bd5ccc67e0msh4698b4ba2aa93dap19bf2djsnc4fab986bf8f");
xhr.setRequestHeader("x-rapidapi-host", "api-nba-v1.p.rapidapi.com");

xhr.send(data);

	function getTeamIds(){
		const data = null;

		const xhr = new XMLHttpRequest();
		xhr.withCredentials = true;

		xhr.addEventListener("readystatechange", function () {
			if (this.readyState === this.DONE) {
				//console.log(this.responseText);
				let teamObj = (JSON.parse(this.responseText));
				console.log(teamObj)
			}
		});

		xhr.open("GET", "https://api-nba-v1.p.rapidapi.com/teams/league/standard");
		xhr.setRequestHeader("x-rapidapi-key", "bd5ccc67e0msh4698b4ba2aa93dap19bf2djsnc4fab986bf8f");
		xhr.setRequestHeader("x-rapidapi-host", "api-nba-v1.p.rapidapi.com");

		xhr.send(data);
	}
	getTeamIds();


function displayDetails(){

	//on results page 

	//get team ids for this game 
	let gameID = localStorage.gameID;
	let gameObj = {};

	games.forEach(game =>{
		if(game.gameID == gameID){
			gameObj =game;
		}
	})

	let team1ID = gameObj.id1;
	let team2ID = gameObj.id2;


	//show all stars

	//loop through and find all players for teamid1 and store in plyaers1
	let team1PlayersList = [];

	team1PlayerList = playerList.filter(playerObj =>{

		return playerObj.teamId == team1ID  
	})


	//loop through player list
	
	
	let stars1 = team1PlayerList.filter(player =>{
	
		try{
			
		return allStarList.includes(parseInt(player.playerId));
		}
		catch{
			return false;
		}
	})
	console.log(stars1)

	let lilTeam1Players= stars1.map((player)=> { 
		return `images/nba stars/${player.playerId}.png>`
		
	
	
	})
	console.log(stars1[1].playerId)
	cardNewLogo1.src = `images/teams/${stars1[0].teamId}.png`;
	cardNewImage1.src = `images/nba stars/${stars1[0].playerId}.png`;
	cardNewImage2.src = `images/nba stars/${stars1[1].playerId}.png`;
	cardNewName1.innerHTML = `${stars1[0].firstName} ${stars1[0].lastName}`
	cardNewName2.innerHTML = `${stars1[1].firstName} ${stars1[1].lastName}`
	cardNewCollege1.innerHTML = `College: ${stars1[0].collegeName}`
	cardNewCollege2.innerHTML = `College: ${stars1[1].collegeName}`
	voteNewName1.innerHTML = `${stars1[0].firstName} ${stars1[0].lastName}`
	voteNewName2.innerHTML = `${stars1[1].firstName} ${stars1[1].lastName}`
	console.log(cardNewName2);
	console.log(cardNewLogo1)
	console.log(cardNewImage1)
	console.log(cardNewImage2)

	//loop through and find all players for teamid2 and store in plyaers2
	let team2PlayersList = []

	team2PlayerList = playerList.filter(playerObj =>{

		return playerObj.teamId == team2ID 
	})

	let stars2 = team2PlayerList.filter(player =>{
		
		try{
			
		return allStarList.includes(parseInt(player.playerId));
		}
		catch{
			return false;
		}
		


	})
	console.log(stars2)
	
	
	
	// for (i = 0; i < stars2.length; i++){
	let lilTeam2Players= stars2.map((player)=> { 
		return `images/nba stars/${player.playerId}.png>`
	})
	console.log(stars2[1])
	cardNewLogo2.src = `images/teams/${stars2[1].teamId}.png`;

	cardNewImage3.src = `images/nba stars/${stars2[0].playerId}.png`;
	cardNewImage4.src = `images/nba stars/${stars2[1].playerId}.png`;
	cardNewName3.innerHTML = `${stars2[0].firstName} ${stars2[0].lastName}`
	cardNewName4.innerHTML = `${stars2[1].firstName} ${stars2[1].lastName}`
	cardNewCollege3.innerHTML = `College: ${stars2[0].collegeName}`
	cardNewCollege4.innerHTML = `College: ${stars2[1].collegeName}`
	console.log(cardNewLogo2)
	console.log(cardNewImage3)
	console.log(cardNewImage4)
	//cardNewImage.innerHTML(lilTeam2Players.join(''));

	console.log("stars", stars2);
	console.log(stars2)


	console.log(team2PlayerList);
	

		
	
}
getPlayers();



})()

