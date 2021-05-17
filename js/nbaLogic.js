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

fetch("https://api-nba-v1.p.rapidapi.com/standings/standard/2019/conference/east", {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "bd5ccc67e0msh4698b4ba2aa93dap19bf2djsnc4fab986bf8f",
		"x-rapidapi-host": "api-nba-v1.p.rapidapi.com"
	}
})
.then(response => {
	console.log(response);
})
.catch(err => {
	console.error(err);
});