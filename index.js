

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
      Game: ${games.title} Platform: ${games.platform} [Edit Games][Delete Game]
      </div>`;
    });
    //THIS IS A MUST! Return this which will then be printed when called
    return gamesString;
  }

  // Add a game to the list

  // Edit a games to the list

  // Delete a game from the list




  //Rendering the main part
  function render() {
    htmlString = `<div>
                  <h1>${state.pageHeader}</h1>
                  ${renderGames()} [Add Games]
                  </div>`;

    document.getElementById("app").innerHTML = htmlString;
  }

  render()