async function fetchCountriesData() {
  try {
    const response = await fetch("https://restcountries.com/v3.1/region/europe");

    if (!response.ok) {
      console.log(`Network response was not ok - Status: ${response.status}`);
      return;
    }

    const data = await response.json();
    displayCountriesData(data);

  } catch (error) {
    console.error("Error fetching countries:", error);
  }
}

function displayCountriesData(countriesArray) {
  const container = document.getElementById("remote-data-container");
  let htmlOutput = "";

  countriesArray.forEach(country => {
    htmlOutput += `
      <div class="card">
        <img src="${country.flags.png}" alt="Flag of ${country.name.common}" width="80">
        <p>
          <b>${country.name.common}</b><br>
          Capital: ${country.capital ? country.capital[0] : "N/A"}<br>
          Population: ${country.population.toLocaleString()}<br>
          Region: ${country.region}
        </p>
      </div>
    `;
  });

  container.innerHTML = htmlOutput;
}

async function fetchUsersData() {
  try {
    const response = await fetch("https://randomuser.me/api/?results=10");

    if (!response.ok) {
      console.log(`Network response was not ok - Status: ${response.status}`);
      return;
    }

    const data = await response.json();
    displayUsersData(data.results);

  } catch (error) {
    console.error("Error fetching users:", error);
  }
}

function displayUsersData(usersArray) {
  const container = document.getElementById("remote-data-container");
  let htmlOutput = "";

  usersArray.forEach(user => {
    htmlOutput += `
      <div class="card">
        <img src="${user.picture.thumbnail}" alt="Picture of ${user.name.first}">
        <p>
          <b>${user.name.first} ${user.name.last}</b><br>
          Email: ${user.email}<br>
          Location: ${user.location.city}, ${user.location.country}
        </p>
      </div>
    `;
  });

  container.innerHTML = htmlOutput;
}
// FETCH RICK & MORTY CHARACTERS
async function fetchCharacters() {
  try {
    const response = await fetch("https://rickandmortyapi.com/api/character");

    if (!response.ok) {
      console.log(`Error: ${response.status}`);
      return;
    }

    const data = await response.json();
    displayCharacters(data.results);

  } catch (error) {
    console.error("Fetch error:", error);
  }
}

function displayCharacters(characters) {
  const container = document.getElementById("remote-data-container");
  let html = "";

  characters.forEach(character => {
    html += `
      <div class="card">
        <img src="${character.image}" alt="${character.name}">
        <p>
          <b>${character.name}</b><br>
          Status: ${character.status}
        </p>
      </div>
    `;
  });

  container.innerHTML = html;
}
document.getElementById("button-container").addEventListener("click", function (e) {
  if (e.target.id === "btn-countries") {
    fetchCountriesData();
  }

  if (e.target.id === "btn-users") {
    fetchUsersData();
  }

  if (e.target.id === "btn-characters") {
    fetchCharacters();
  }
});