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
    
    // Additional validation for days in each month
    const daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    // Leap year check
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        daysInMonth[1] = 29;
    }

    if (day > daysInMonth[month - 1]) {
        return false;
    }

    return true;
}