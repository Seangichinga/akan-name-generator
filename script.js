const akanNames = {
    male: ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"],
    female: ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"]
};

const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

const daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}

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

    let maxDaysInMonth = daysInMonth[month - 1];
    if (month === 2 && isLeapYear(year)) {
        maxDaysInMonth = 29;
    }

    if (day > maxDaysInMonth) {
        return false;
    }

    return true;
}

function calculateDayOfWeek(day, month, year) {
    let m = month;
    let y = year;
    
    if (m < 3) {
        m += 12;
        y -= 1;
    }

    const q = day;
    const K = y % 100;
    const J = Math.floor(y / 100);

    const h = (q + Math.floor((13 * (m + 1)) / 5) + K + Math.floor(K / 4) + Math.floor(J / 4) - 2 * J) % 7;
    const dayOfWeek = (h + 6) % 7;
    
    return dayOfWeek;
}

function getAkanName(dayOfWeek, gender) {
    return akanNames[gender][dayOfWeek];
}
function displayResult(akanName, dayOfWeek) {
    const resultSection = document.getElementById("resultSection");
    const akanNameDisplay = document.getElementById("akanName");
    const dayOfWeekDisplay = document.getElementById("dayOfWeekDisplay");
    akanNameDisplay.textContent = akanName;
    dayOfWeekDisplay.textContent = `Born on a ${daysOfWeek[dayOfWeek]}`;
    
    resultSection.classList.remove("hidden");
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
    
        displayResult(akanName, dayOfWeek);
    }


document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("birthdateForm");
    form.addEventListener("submit", handleFormSubmit);
});
