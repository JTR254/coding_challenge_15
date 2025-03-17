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
        event.stopPropagation() // Task 6
        riskDashboard.removeChild(riskCard)});
    
    riskCard.appendChild(resolveButton); // appends the resolve button to the card

    highlightHighRiskCards(); // calls function
    highlightMediumRiskCards(); // calls function
    highlightLowRiskCards(); // calls function
};

addRiskItem("Data Breach", "High", "IT");
addRiskItem("Supply Chain Disruption", "Medium", "Operations");

// Task 3 - Removing RIsk Items
// completed above
addRiskItem("Market Fluctuations", "High", "Finance");
// Clicking "Resolve" should remove this risk from the dashboard.

// Task 4 - Risk Categorization

function highlightHighRiskCards() {
    const highRiskCards = document.querySelectorAll(".risk-card"); // Select all cards with "High" priority

    const riskArray = Array.from(highRiskCards); // convert to an array
    riskArray.forEach(card => {
        if (card.textContent.includes("High")) {
            card.style.backgroundColor = "#ffcccc"; // light red background if it is a high priority card
        }
    });
};

function highlightMediumRiskCards() {
    const mediumRiskCards = document.querySelectorAll(".risk-card"); // Select all cards with "Medium" priority

    const riskArray = Array.from(mediumRiskCards); // convert to an array
    riskArray.forEach(card => {
        if (card.textContent.includes("Medium")) {
            card.style.backgroundColor = "#2aa311"; // sea green background if it is a medium priority card
        }
    });
};

function highlightLowRiskCards() {
    const lowRiskCards = document.querySelectorAll(".risk-card"); // Select all cards with "Low" priority

    const riskArray = Array.from(lowRiskCards); // convert to an array
    riskArray.forEach(card => {
        if (card.textContent.includes("Low")) {
            card.style.backgroundColor = "#dbf712"; // yellow background if it is a Low priority card
        }
    });
};

addRiskItem("Cybersecurity Threat", "High", "IT");
addRiskItem("HR Compliance Issue", "Low", "Human Resources");

// Task 5 - Bulk Risk Updates

const increaseRiskButton = document.createElement("button"); // creates a button
increaseRiskButton.textContent = "Increase Risk Levels"; // includes text "Increase Risk Levels" within the button
increaseRiskButton.setAttribute("class", "increase-risk-btn");

riskDashboard.appendChild(increaseRiskButton) // appends child to the dashboard

addRiskItem("Employee Retention", "Low", "HR"); // test case

// Task 6 - Event Propagation Fix
// done above