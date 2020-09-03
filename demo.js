console.log("test")

// Setting up games variables
let game = {title: "Super Mario Brother", platform:"Nintendo"}
let game1 = {title: "Super Mario World", platform:"Super Nintendo"}
let game2 = {title: "Super Mario Galaxy", platform:"Nintendo Wii"}
let game3 = {title: "Super Mario Odsessy", platform:"Nintendo Switch"}

// echo the games variables
console.log(game)
console.log(game1)
console.log(game2)
console.log(game3)

// putting games into object
let games = [game, game1, game2, game3]
console.log(games)

//looping using for loop
for (i = 0; i < games.length; i++){
    console.log(games[i].title + " " + games[i].platform)
}

//looping using forEach
games.forEach(game => {
    console.log(game.title + " " + game.platform);
});

//Running "loop" for the games
// function renderGames() {
//     games.forEach(function (game, index) {
//         printGame +=
//         `
//         <div>
//         Game: ${game.title} Platform: ${game.platform}
//         </div>
//         `
//     })
//     document.getElementById("app").innerHTML = printGames;
// }

// function render(){
//     document.getElementById("app").innerHTML = htmlString;
// }

// renderGames()