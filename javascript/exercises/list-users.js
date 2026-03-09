async function fetchUserData() {
  try {
    const response = await fetch("data/users.json");

    if (!response.ok) {
      console.log(`Error: ${response.status}`);
      return;
    }

    const data = await response.json();

    console.log(data);
    displayUsers(data);

  } catch (error) {
    console.error("Fetch error:", error);
  }
}

fetchUserData();

function displayUsers(usersArray) {
  const container = document.getElementById("users-container");
  let htmlOutput = "";

  usersArray.forEach(user => {
    htmlOutput += `
      <p>
        <b>${user.firstName} ${user.lastName}</b><br>
        Age: ${user.age}<br>
        Active: ${user.isActive ? "Yes" : "No"}
      </p>
    `;
  });

  container.innerHTML = htmlOutput;
}