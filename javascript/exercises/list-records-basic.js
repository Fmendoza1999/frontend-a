// Array of user objects
const arrUsers = [
    { id: 1001, firstName: "Alice", lastName: "Smith", age: 25, city: "New York", isActive: true },
    { id: 1002, firstName: "Bob", lastName: "Jones", age: 30, city: "Los Angeles", isActive: false },
    { id: 1003, firstName: "Charlie", lastName: "Murphy", age: 35, city: "Chicago", isActive: true },
    { id: 1004, firstName: "Diana", lastName: "Wilson", age: 28, city: "Houston", isActive: true },
    { id: 1005, firstName: "Ethan", lastName: "Brown", age: 42, city: "Phoenix", isActive: false },
    { id: 1006, firstName: "Fiona", lastName: "Davis", age: 31, city: "Philadelphia", isActive: true },
    { id: 1007, firstName: "George", lastName: "Miller", age: 27, city: "San Antonio", isActive: true },
    { id: 1008, firstName: "Hannah", lastName: "Garcia", age: 38, city: "San Diego", isActive: false },
    { id: 1009, firstName: "Ian", lastName: "Rodriguez", age: 29, city: "Dallas", isActive: true },
    { id: 1010, firstName: "Julia", lastName: "Martinez", age: 33, city: "San Jose", isActive: false }
];

// Create header
const mainHeadingContainer = document.createElement("header");

const mainHeading = document.createElement("h1");
mainHeading.innerText = "List of users";

mainHeadingContainer.appendChild(mainHeading);
document.body.appendChild(mainHeadingContainer);

// Create output container
const displayOutputDIV = document.createElement("div");
displayOutputDIV.classList.add("data-output");
document.body.appendChild(displayOutputDIV);

// Variables for totals
let htmlOutput = "";
let totalUsers = arrUsers.length;
let totalAge = 0;
let userStatus = "";

// Loop through users
arrUsers.forEach(user => {

    if (user.isActive === true) {
        userStatus = "<span class='active-user'>ACTIVE</span>";
    } else {
        userStatus = "<span class='inactive-user'>INACTIVE</span>";
    }

    htmlOutput += `
        <div>
            <p>
                <b>${user.lastName.toUpperCase()}</b> ${user.firstName} 
                (ID: ${user.id}) Age: ${user.age} from ${user.city} 
                ${userStatus}
            </p>
        </div>
    `;

    totalAge += user.age;
});

// Display users
displayOutputDIV.innerHTML = htmlOutput;

// Calculate average age
let averageAge = totalAge / totalUsers;

// Totals section
const totalsOutputDiv = document.createElement("div");
totalsOutputDiv.classList.add("totals-output");

const totalsOutput = document.createElement("p");
totalsOutput.innerHTML = `<b>Total Users:</b> ${totalUsers} Average Age: ${averageAge.toFixed(2)}`;

totalsOutputDiv.appendChild(totalsOutput);
document.body.appendChild(totalsOutputDiv);
