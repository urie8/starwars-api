fetch("https://localhost:7279/api/Character").then((res) =>
  res.json().then((data) => console.log(data))
);

getCharacters();

function getCharacters() {
  fetch("https://localhost:7279/api/Character").then((res) =>
    res.json().then((data) => displayCharacters(data))
  );
}

let charactersContainer = document.querySelector("#characters-container");

function displayCharacters(characters) {
  characters.forEach((c) => {
    if (c.isGood === true) {
      charactersContainer.innerHTML += `
    <div class="character" id="${c.name}">
        <h1>${c.name}</h1>
        <h3>Alignment: Good</h3>
        <h3>Species: ${c.species}</h3>
        <h3>Height: ${c.height}m</h3>
        <h3>Role: ${c.role}</h3>
    </div>`;
    } else {
      charactersContainer.innerHTML += `
    <div class="character" id="${c.name}">
        <h1>${c.name}</h1>
        <h3>Alignment: Evil</h3>
        <h3>Species: ${c.species}</h3>
        <h3>Height: ${c.height}</h3>
        <h3>Role: ${c.role}</h3>
    </div>`;
    }
  });
}
