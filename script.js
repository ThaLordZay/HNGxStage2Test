// Get the current date
const currentDate = new Date();

// Function to get the current day of the week
const getCurrentDayOfWeek = () => {
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const dayIndex = currentDate.getUTCDay();
    return daysOfWeek[dayIndex];
};

// Update the elements with data-testid attributes
document.getElementById('dayOfWeek').textContent = getCurrentDayOfWeek();
document.getElementById('utcTime').textContent = currentDate.getTime() + ' ms';
