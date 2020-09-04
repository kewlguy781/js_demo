

// Commenting this out as its already populated via demo.js
// let games = [
//     {title: "Super Mario Brother", platform:"Nintendo"},
//     {title: "Super Mario World", platform:"Super Nintendo"},
//     {title: "Super Mario Galaxy", platform:"Nintendo Wii"},
//     {title: "Super Mario Odsessy", platform:"Nintendo Switch"},
// ];

//Main Header
let state = {
    pageHeader: "Video Games List",
    games: games,
  };

  // List games

  // Rendering all information into "cache" gamestring, then RETURN that will be printed
  function renderGames() {
    gamesString = "";
    state.games.forEach(function (games, index) {
      gamesString += `<div>
      Game: ${games.title} Platform: ${games.platform} 
      <span onclick='editGame()'>[Edit Game]</span> 
      <span onclick='destroyGame()'>[Delete Game]</span>
      </div>`;
    });
    //THIS IS A MUST! Return this which will then be printed when called
    return gamesString;
  }

  // Add a game to the list
  function addGame(){
        let game ={};

        let title = prompt("Enter Name of the game");
        game.title = title;

        let platform = prompt("Enter Name of the platform of the game");
        game.platform = platform;

        console.log(game)

        games.push(game)
        // This return [object?]

        render();
  }

  // Edit a games to the list
  function editGame(){
// TODO Save index, edit it, render
console.log("edit game")

let title = prompt("Enter Name of the game");
console.log(games[0].title)
games[0].title = title;
console.log(games[0].title)

let platform = prompt("Enter Name of the platform of the game");
games[0].platform = platform;

        render();
  }

  // Delete a game from the list
function destroyGame(){
    console.log("destroy game")

}




  //Rendering the main part
  function render() {
    htmlString = `<div>
                  <h1>${state.pageHeader}</h1>
                  ${renderGames()} 
                  <div onclick='addGame()'>[Add Games]</div>
                  </div>`;

    document.getElementById("app").innerHTML = htmlString;
  }

  render()