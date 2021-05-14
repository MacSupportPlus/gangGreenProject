<<<<<<< HEAD

	let listOfPlayers = [];
	let pageNumber = 0;
	function getNames(pageNumber){
		fetch(`https://free-nba.p.rapidapi.com/players?per_page=25&page=0${pageNumber}`, {
			"method": "GET",
			"headers": {
				"x-rapidapi-key": "bd5ccc67e0msh4698b4ba2aa93dap19bf2djsnc4fab986bf8f",
				"x-rapidapi-host": "free-nba.p.rapidapi.com"
			}
			})
		.then((response) => {

			if(response.length > 0) {
				pageNumber +=1;
				playerArr = [...playerArr,...response];
				console.log(playerArr);
				getNames(pageNumber)
			}
			else{
				//dom manipulation
				console.log(listOfPlayers);
					let $listGroupContainer = $('.list-group');
					console.log($listGroupContainer);
					let lilTags = listOfPlayers.map((char)=> {

						return `<a href="${char.first_name}" class="list-group-item list-group-item-action">${char.last_name}<b>houses</b><a/>`
					})
					$listGroupContainer.html(lilTags.join(' '));
			}
		})
	}
		





		
		
	// 	.then(response => response.json()) 
	// 		console.log(response);
	// 		listOfPlayers = [...listOfPlayers, ...response]
	// 		getList(pageNumber);
	// 		console.log(listOfPlayers)
	// 		.then((response) => {
			
	// 		}
			
	getNames(pageNumber);
		// ballerList.filter((player) => {
// 		// let playerlist = player["0"]["team"]["id"]["11"]
// 			return console.log(ballerList)
// 		// let players = athlete.data;
// 	})
// 	.catch(err => {
// 		console.error(err);
// 	})

// }
	



	

// $(() => {
//     // 1. using for loop regualar
//     let listOfPlayers = [];
//     let flag = false;
//     for(let index = 0; index <= 50; index++) {
//         $.get("https://free-nba.p.rapidapi.com/players?per_page=25&page=0")
//         .done((player) =>{
//             //listOfCharacters.push(character) 
//             listOfPlayers = [...listOfPlayers, ...player]
            
//         })
//         .done(() => {
//             if(listOfPlayers.length >= 3458 && flag == false) {
//                 flag = true;
//             console.log(listOfPlayers);
//             }
//         })
//     } 


// })
// // Let playerList = response.find(playerObj => {
// 	Return playerObj.firstName.toLowerCase().includes(‘a’) = “Lebron
// 	.toLowerCase()
	
=======
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
>>>>>>> main
