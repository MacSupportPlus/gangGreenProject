// for (let index = 1; index <= 50; index++){
// 	fetch("https://api-nba-v1.p.rapidapi.com/", {
// 	"method": "GET",
// 	"headers": {
// 		"x-rapidapi-key": "bd5ccc67e0msh4698b4ba2aa93dap19bf2djsnc4fab986bf8f",
// 		"x-rapidapi-host": "api-nba-v1.p.rapidapi.com"
// 	}
// })
// .then(response => response.json()) 
// .then(athlete => {
// console.log(athlete);
// })

// .catch(err => {
// 	console.error(err);
// });
// }

// fetch("https://api-nba-v1.p.rapidapi.com/players/league/standard", {
// 	"method": "GET",
// 	"headers": {
// 		"x-rapidapi-key": "bd5ccc67e0msh4698b4ba2aa93dap19bf2djsnc4fab986bf8f",
// 		"x-rapidapi-host": "api-nba-v1.p.rapidapi.com"
// 	}
// })
// .then(response => {
// 	console.log(response);
// })
// .catch(err => {
// 	console.error(err);
// });

const data = null;

const xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function () {
	if (this.readyState === this.DONE) {
		console.log(this.responseText);
	}
});

xhr.open("GET", "https://api-nba-v1.p.rapidapi.com/teams/teamId/1");
xhr.setRequestHeader("x-rapidapi-key", "bd5ccc67e0msh4698b4ba2aa93dap19bf2djsnc4fab986bf8f");
xhr.setRequestHeader("x-rapidapi-host", "api-nba-v1.p.rapidapi.com");

xhr.send(data);