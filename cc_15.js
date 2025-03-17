// Task 1 - Base Structure Setup

const riskDashboard = document.getElementById("riskDashboard")
console.log("Risk Dashboard Loaded") // logs "Risk Dashboard Loaded" to the console

// Task 2 - Adding Risk Items

function addRiskItem(riskItem, riskLevel, department) { // creates function that adds a Risk Item

    const riskDashboard = document.getElementById("riskDashboard");

    const riskCard = document.createElement("div"); // creates "div" element
    riskCard.setAttribute("class", "risk-card");
    riskCard.setAttribute("id", department);

    const nameHeading = document.createElement("h3"); // creates a heading that includes the Risk Item
    nameHeading.textContent = riskItem;

    const riskLabel = document.createElement("span"); 
    riskLabel.textContent = `Risk Level: ${riskLevel}`; // creates a "span" element that includes the Risk Level

    const itemDepartment = document.createElement("p"); // creates a "paragraph" element that includes the Item Department
    itemDepartment.textContent = `Department: ${department}`;

    riskCard.appendChild(nameHeading); // appends the Risk Item to the card
    riskCard.appendChild(riskLabel); // appends the Risk Level to the card
    riskCard.appendChild(itemDepartment); // appends the Item Department to the card

    riskDashboard.appendChild(riskCard);

    const resolveButton = document.createElement("button"); // Task 3 - creates resolve button to remove the risk card
    resolveButton.setAttribute ("class", "remove-btn");
    resolveButton.textContent = "Resolve"; // puts the word "resolve" inside the button
    resolveButton.addEventListener("click", (event) => { // function so when resolve is clicked, the card disappears.
        event.stopPropagation()
        riskDashboard.removeChild(riskCard)});
    
    riskCard.appendChild(resolveButton); // appends the resolve button to the card
};

addRiskItem("Data Breach", "High", "IT");
addRiskItem("Supply Chain Disruption", "Medium", "Operations");

// Task 3 - Removing RIsk Items
// completed above