// player Logic
for (let index = 1; index <= 20; index++){
	fetch(`https://free-nba.p.rapidapi.com/players?per_page=25&page=0${index}`, {
		"method": "GET",
		"headers": {
			"x-rapidapi-key": "bd5ccc67e0msh4698b4ba2aa93dap19bf2djsnc4fab986bf8f",
			"x-rapidapi-host": "free-nba.p.rapidapi.com"
		}
	})
	.then(response => response.json()) 
	.then(athlete =>{
		console.log(athlete)
		// let players = athlete.data;
		// console.log(players);
	})
	.catch(err => {
		console.error(err);
	});
}

