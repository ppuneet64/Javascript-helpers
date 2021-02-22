/**
 * Get Occourances between dates for specified day
 * @param {StartDate} d1 
 * @param {EndDate} d2 
 * @param {Day} day 
 */
Date.prototype.countOccuranceBetweenDates = (d1, d2, day = 0) => {
    let total = 0;
    let startDate = new Date(d1)
    let endDate = new Date(d2)
    for (let i = startDate; i <= endDate;) {
        if (i.getDay() === day) {
            total++;
        }
        i.setTime(i.getTime() + 86400000);
    }
    return total
}

/**
 * Get Last Date of Day after nth number of occourance
 * @param {Occourance} n
 * @param {Day} day
 * @param {Date} calcDate
 */
Date.prototype.getDateAfterOccurance = (n = 0, day = 0, calcDate = new Date()) => {
    let today = new Date(calcDate)
    let presentDay = today.getDay();
    let presentTime = today.getTime();
    if (day < presentDay) {
        day = day + 6 + 1;
    }
    let diff = day - presentDay;
    let daysAfter = (n - 1) * 7 + diff;
    let timeAfter = presentTime + daysAfter * 86400000;
    let nextDate = new Date(timeAfter);
    return nextDate
}
