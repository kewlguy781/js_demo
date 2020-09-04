

// let games = [
//     {title: "Super Mario Brother", platform:"Nintendo"},
//     {title: "Super Mario World", platform:"Super Nintendo"},
//     {title: "Super Mario Galaxy", platform:"Nintendo Wii"},
//     {title: "Super Mario Odsessy", platform:"Nintendo Switch"},
// ];

let state = {
    pageHeader: "Video Games List",
    games: games,
  };

  function render() {
    htmlString = `<div>
                  <h1>${state.pageHeader}</h1>
                  </div>`;

    document.getElementById("app").innerHTML = htmlString;
  }

  render()