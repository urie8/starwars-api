fetch("https://localhost:7279/api/Character").then((res) =>
  res.json().then((data) => displayCharacters(data.characters))
);

let charactersContainer = document.querySelector("#characters-container");

function displayCharacters(characters) {
  characters.forEach((c) => {
    charctersCon.innerHTML += `
    <div class="user" id="${u.firstName}">
        <h1>${u.firstName} ${u.lastName}</h1>
        <h3>Age: ${u.age}</h3>
        <h3>Username: ${u.username}</h3>
        <h3>Address: ${u.address.address}</h3>
        <img src="${u.image}" style="width:150px">
    </div>`;
  });
}
