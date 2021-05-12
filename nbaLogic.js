fetch("https://api-basketball.p.rapidapi.com/standings/groups?season=2019-2020&league=3", {
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