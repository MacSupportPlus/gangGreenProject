fetch("https://api-basketball.p.rapidapi.com/games?season=2020&league=1&date=2019-11-26&team=1", {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "eb2f99bc89msh5ddb3ef01b4cb06p19f493jsn25b29d062ef5",
		"x-rapidapi-host": "api-basketball.p.rapidapi.com"
	}
})
.then(response => {
	console.log(response);
})
.catch(err => {
	console.error(err);
});