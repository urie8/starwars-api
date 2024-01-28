let charactersContainer = document.querySelector("#characters-container");
let idInput = document.querySelector("#id-input");
let nameInput = document.querySelector("#name-input");
let speciesInput = document.querySelector("#species-input");
let genderInput = document.querySelector("#gender-input");
let heightInput = document.querySelector("#height-input");
let roleInput = document.querySelector("#role-input");
let goodInput = document.querySelector("#good-input");
let imgInput = document.querySelector("#img-input");

let addCharBtn = document.querySelector("#add-char-btn");
let deleteCharBtn = document.querySelector("#delete-char-btn");

fetch("https://localhost:7279/api/Character").then((res) =>
  res.json().then((data) => console.log(data))
);

getCharacters();
addCharBtn.addEventListener("click", addChar);

const buttons = document.getElementsByClassName("delete-button");

for (var i = 0; i < buttons.length; i++) {
  console.log(buttons[i].id);
  buttons[i].addEventListener("click", deleteChar(buttons[i].id));
}

function getCharacters() {
  fetch("https://localhost:7279/api/Character").then((res) =>
    res.json().then((data) => displayCharacters(data))
  );
}

function addChar() {
  let newChar;
  if (goodInput.checked) {
    newChar = {
      id: Number(idInput.value),
      name: nameInput.value,
      species: speciesInput.value,
      gender: genderInput.value,
      height: Number(heightInput.value),
      role: roleInput.value,
      img: imgInput.value,
      good: true,
    };
  } else {
    newChar = {
      id: Number(idInput.value),
      name: nameInput.value,
      species: speciesInput.value,
      gender: genderInput.value,
      height: Number(heightInput.value),
      role: roleInput.value,
      img: imgInput.value,
      good: false,
    };
  }

  fetch("https://localhost:7279/api/Character", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newChar),
  }).then((res) => {
    if (res.ok) {
      getCharacters();
    } else {
      console.warn("Something is wrong with the API!");
    }
  });
}

function deleteChar(id) {
  fetch(`"https://localhost:7279/api/Character/${id}"`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  }).then((res) => {
    if (res.ok) {
      getCharacters();
    } else {
      console.warn("Something is wrong with the API!");
    }
  });
}

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
        <button class="delete-button onclick="deleteChar( {{$id}} )" id="${c.id}">Delete</button>
    </div>`;
    } else {
      charactersContainer.innerHTML += `
    <div class="character" id="${c.name}">
        <h1>${c.name}</h1>
        <h3>Alignment: Evil</h3>
        <h3>Species: ${c.species}</h3>
        <h3>Height: ${c.height}</h3>
        <h3>Role: ${c.role}</h3>
        <button class="delete-button" id="${c.id}">Delete</button>
    </div>`;
    }
  });
}
