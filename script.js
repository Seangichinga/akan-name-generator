const akanNames = {
    male: ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"],
    female: ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"]
};

const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

function isValidDate(day, month, year) {
    // Check if day is between 1 and 31
    if (day < 1 || day > 31) {
        return false;
    }

    // Check if month is between 1 and 12
    if (month < 1 || month > 12) {
        return false;
    }

        // Check if year is valid (not in the future and reasonable)
        const currentYear = new Date().getFullYear();
        if (year > currentYear || year < 1900) {
            return false;
        }

    if (day > daysInMonth[month - 1]) {
        return false;
    }

    return true;
}

function calculateDayOfWeek(day, month, year) {
   
    const CC = Math.floor(year / 100);
    const YY = year % 100;
    const MM = month;
    const DD = day;

    // Apply the formula: d = ((4CC - 2×CC-1) + (45×YY) + (1026×(MM+1)) + DD) mod 7
    const d = (
        (4 * CC - Math.floor(2 * CC - 1)) +
        (Math.floor(45 * YY / 12)) +
        (Math.floor((1026 * (MM + 1)) / 12)) +
        DD
    ) % 7;

    return d;
}

function getAkanName(dayOfWeek, gender) {
    return akanNames[gender][dayOfWeek];
}

function handleFormSubmit(event) {
    event.preventDefault();

    // Get form values
    const dayInput = document.getElementById("dayInput").value.trim();
    const monthInput = document.getElementById("monthInput").value.trim();
    const yearInput = document.getElementById("yearInput").value.trim();
    const genderInput = document.getElementById("genderSelect").value;
    
    if (!dayInput) {
        alert("Please enter your day of birth (1-31).");
        return;
    }

    if (!monthInput) {
        alert("Please enter your month of birth (1-12).");
        return;
    }

    if (!yearInput) {
        alert("Please enter your year of birth (YYYY).");
        return;
    }

    if (!genderInput) {
    alert("Please select your gender.");
    return;
} 
    
        // Parse input values
        const day = parseInt(dayInput, 10);
        const month = parseInt(monthInput, 10);
        const year = parseInt(yearInput, 10);
    
        // Validate date
        if (!isValidDate(day, month, year)) {
            alert("Please enter a valid date.");
            return;
        }
    
        // Calculate day of week
        const dayOfWeek = calculateDayOfWeek(day, month, year);
    
        // Get Akan name
        const akanName = getAkanName(dayOfWeek, genderInput);
    
        displayResult(akanName);
    }

function displayResult(akanName) {
    const resultSection = document.getElementById("resultSection");
    const akanNameDisplay = document.getElementById("akanName");
    akanNameDisplay.textContent = akanName;
    resultSection.style.display = "block";
}

document.getElementById("akanForm").addEventListener("submit", handleFormSubmit);
