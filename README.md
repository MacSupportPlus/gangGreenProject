# <p align="center"> NBA-Playoff Voting App(NPVA) </p>
<br>
<br>

## About this project 📝
<hr>
  NPVA allows users to pick their MVP as well as read statistic regarding players.
<br>
<br>
<br>
<br>

## languages Used and technology 💻
<hr>
<br>
<img alt="HTML5" src="https://img.shields.io/badge/html5%20-%23E34F26.svg?&style=for-the-badge&logo=html5&logoColor=white"/>
<img alt="JavaScript" src="https://img.shields.io/badge/javascript%20-%23323330.svg?&style=for-the-badge&logo=javascript&logoColor=%23F7DF1E"/>
<img alt="CSS3" src="https://img.shields.io/badge/css3%20-%231572B6.svg?&style=for-the-badge&logo=css3&logoColor=white"/>
<br>


## Code snipets
<hr>


<p> This is the api component that calls the objects of players in adds them to the player list. This is where we get the player card information. 
<br>

```jsx
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

```

<br>
<br>

## Challenges Faced
<hr>
We had trouble with using the format fetch to retrieve our API call so we had to learn how to use the Xmlhttprequest call to make our api call. 
By using this we had to learn how to make the call and return the JSON package (strings) and convert them to a set of player list objects to make our players display. 
In all this was a good chanllenge for us as a team. 
<br>
<br>
<br>
<br>


## List of API's used
<hr>
<br>

* [NBA API](https://rapidapi.com/)

<br>
<br>


## Authors
<hr>
 
* [Jason McElvain](https://github.com/MacSupportPlus)
* [Destiny Turnage](https://github.com/Destinyaaiyana)
* [Syreeta Greene](https://github.com/Sr-GrEeNe18)
* [LaQuinta Williams](https://github.com/willarmy20)

<br>
<br>
