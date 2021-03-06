

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
      <span onclick='editGame(${index})'>[Edit Game]</span> 
      <span onclick='destroyGame(${index})'>[Delete Game]</span>
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

        render();
  }

  // Edit a games to the list
  function editGame(index){
// Save index, edit it, render

        console.log("edit game")
        let title = prompt("Enter Name of the game");
        games[index].title = title;

        let platform = prompt("Enter Name of the platform of the game");
        games[index].platform = platform;

        render();
  }
  // Delete a game from the list
function destroyGame(index){
    console.log("destroy game")
    games.splice(index, 1)
    render();
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