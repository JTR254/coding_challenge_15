// Task 1 - Base Structure Setup

const riskDashboard = document.getElementById("riskDashboard")
console.log("Risk Dashboard Loaded")

// Task 2 - Adding Risk Items

function addRiskItem(riskItem, riskLevel, department) {

    const riskDashboard = document.getElementById("riskDashboard");

    const riskCard = document.createElement("div");
    riskCard.classList.add("risk-card");

    const nameHeading = document.createElement("h3");
    nameHeading.textContent = riskItem;

    const riskLabel = document.createElement("span");
    riskLabel.textContent = `Risk Level: ${riskLevel}`;

    const itemDepartment = document.createElement("p");
    itemDepartment.textContent = `Department: ${department}`;

    riskCard.appendChild(nameHeading);
    riskCard.appendChild(riskLabel);
    riskCard.appendChild(itemDepartment);

    riskDashboard.appendChild(riskCard);
}

addRiskItem("Data Breach", "High", "IT");
addRiskItem("Supply Chain Disruption", "Medium", "Operations");