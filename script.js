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

    // Leap year check
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        daysInMonth[1] = 29;
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