const data = null;

[{}, {}, {}]
// index in the array
let games = {

	gameId:1,
    date: "May 18th, 2021",
    team1ID: 41,
    teame2ID: 15,

	gameId:2,
	date: "May 18th, 2021",
	teamId:11,
	teame2ID:17,
}

const xhr = new XMLHttpRequest();
xhr.withCredentials = true;
xhr.addEventListener("readystatechange", function () {
    if (this.readyState === this.DONE) {
        console.log(JSON.parse(this.responseText));
        let playerObj = (JSON.parse(this.responseText));
        let index = 0
        let playerList = []
        let allStarsWest = [135, 381, 1267, 524, 264, 125, 547, 123, 313, 188, 143, 431, 382, 278, 318, 346, 414, 63, 191, 839]
        let allStarsEast = [1486, 226, 462, 316, 543, 44, 537, 881, 85, 723, 19, 360, 440, 455, 760, 1045, 152, 260, 158, 480]
        for (index = 0; index < playerObj.api.players.length; index++) {
            playerList.push(playerObj.api.players[index])
        }
        console.log(playerList)
        function displayTeams(player){
            newPlayer1 = player
            console.log(newPlayer1.firstName)
        }
        displayTeams(playerList[135])
	})