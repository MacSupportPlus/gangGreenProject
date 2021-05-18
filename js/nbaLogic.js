
const data = null;
let playerList = []
let allStarList = [136, 382, 1268, 525, 265, 126, 548, 124, 314, 189, 144, 432, 383, 279, 319, 347, 415, 64, 192, 840, 1487, 227, 463, 317, 544, 45, 538, 882, 86, 724, 20, 361, 441, 456, 761, 1046, 153, 261, 159, 481]

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
	id1: 11,
	id2: 17
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
		console.log(playerList[135].teamId)

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

	console.log("stars", stars1);


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

	console.log("stars", stars2);


	console.log(team1PlayerList);
	console.log(team2PlayerList);

}

getPlayers();
})()

