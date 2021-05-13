

for (let index = 1; index <= 50; index++){
fetch(`https://therundown-therundown-v1.p.rapidapi.com/sports`, {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "bd5ccc67e0msh4698b4ba2aa93dap19bf2djsnc4fab986bf8f",
		"x-rapidapi-host": "therundown-therundown-v1.p.rapidapi.com"
	}
})
.then(response => response.json())
.then((athlete) => {
	console.log(athlete);
})
.catch(err => {
	console.error(err);
});
}