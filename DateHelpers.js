

/**
 * Get Occourances between dates for specified day
 * @param {StartDate} d1 
 * @param {EndDate} d2 
 * @param {Day} day 
 */
export const countOccuranceBetweenDates = (d1, d2, day = 0) => {
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
export const getDateAfterOccurance = (n = 0, day = 0, calcDate = new Date()) => {
    let startDate = new Date(calcDate)
    let startDatePresentDay = startDate.getDay();
    let startDatePresentTime = startDate.getTime();
    if (day < startDatePresentDay) {
        day = day + 7;
    }
    let diff = day - startDatePresentDay;
    let daysAfter = (n - 1) * 7 + diff;
    let timeAfter = startDatePresentTime + daysAfter * 86400000;
    let nextDate = new Date(timeAfter);
    return nextDate
}

/**
 * Get number of days in month
 * @param {Year} year year 
 * @param {Month} month month
 */
export const getMonthNumberOfDays = (year, month) => new Date(year, month, 0).getDate()

/**
 * Get Occourance count between month
 * @param {Date} d1 Start date
 * @param {Date} d2 End Date
 * @param {Number} monthOc Month addition
 * @param {Number} dayNo Date of month
 * 
 * @returns Number occourance
 */
export const getCountBetweenMonths = (d1 = new Date(), d2 = new Date(), monthOc = 1, dayNo = 0) => {
    let startDate = new Date(d1)
    let endDate = new Date(d2)
    let occourence = 0;
    if (startDate < endDate) {
        if (startDate.getDate() <= dayNo && getMonthNumberOfDays(startDate.getFullYear(), startDate.getMonth() + 1) >= dayNo) {
            occourence = occourence + 1
        }
        startDate.setDate(1)
        startDate.setMonth(startDate.getMonth() + monthOc);
        for (let i = startDate; i <= endDate;) {
            const endDays = endDate.getDate()
            if (i.getMonth() !== endDate.getMonth()) {
                occourence = occourence + 1
            }
            if (i.getMonth() === endDate.getMonth() && dayNo <= endDays) {
                occourence = occourence + 1
            }
            i.setMonth(i.getMonth() + monthOc);
        }
    }

    return occourence
}

/**
 * 
 * @param {Date} d1 Date From
 * @param {Number} count After number of month
 * @param {Number} occ Number of occourance
 * @param {Day} checkDate Check date of month
 * 
 * @returns Final date after calculation
 */
export const getLastDateAfter = (d1 = new Date(), count = 0, occ = 0, checkDate = 1) => {
    let calcDate = new Date(d1)
    if (occ === 0) {
        return calcDate
    }
    if (calcDate.getDate() <= checkDate && getMonthNumberOfDays(calcDate.getFullYear(), calcDate.getMonth() + 1) >= checkDate) {
        occ = occ - 1
    }
    let addMonth = count * occ
    if (calcDate.getDate() >= 15) {
        calcDate.setDate(1)
    }
    calcDate.setMonth(calcDate.getMonth() + addMonth)
    let monthDays = getMonthNumberOfDays(calcDate.getFullYear(), (calcDate.getMonth() + 1))
    calcDate.setDate(checkDate)
    if (checkDate > monthDays) {
        let diff = checkDate - monthDays
        calcDate.setDate(calcDate.getDate() - diff)
        return calcDate
    }
    return calcDate
}

/**
 * Get number of occourance between years for specified date of month in every nt year between dates
 * @param {Date} d1 Start Date
 * @param {Date} d2 End Date
 * @param {Number} years Number of years
 * @param {*} month Month of occoured year
 * @param {*} date Date of month for occoured year
 */
export const getOccouranceCountBetweenYears = (d1 = new Date(), d2 = new Date(), years = 1, month = 0, date = 1) => {
    let startDate = new Date(d1)
    let endDate = new Date(d2)
    let occourence = 0;
    startDate.setHours(0, 0, 0, 0)
    endDate.setHours(0, 0, 0, 0)
    if (startDate <= endDate) {
        let yearEndTime = new Date(`${startDate.getFullYear()} ${month + 1} ${date}`)
        if (yearEndTime >= startDate && yearEndTime <= endDate) {
            occourence = 1
        }
        startDate.setFullYear(startDate.getFullYear() + years)
        for (let i = startDate; i <= endDate;) {
            let yearEndTime = new Date(`${i.getFullYear()} ${month + 1} ${date}`)
            if (yearEndTime <= endDate) {
                occourence = occourence + 1
            }
            i.setFullYear(i.getFullYear() + years);
        }
        return occourence
    }
    return occourence
}


export const getCountAfterYears = (d1 = new Date(), years = 1, month = 0, date = 1, occourence = 0) => {
    let startDate = new Date(d1)
    occourence = parseInt(occourence)
    if (occourence === 0) {
        return startDate
    }
    startDate.setHours(0, 0, 0, 0)
    let endTime = new Date(`${startDate.getFullYear()} ${month + 1} 01`)
    endTime.setHours(0, 0, 0, 0)
    let monthDays = getMonthNumberOfDays(endTime.getFullYear(), (endTime.getMonth() + 1))
    if (date > monthDays) {
        endTime.setDate(monthDays)
    } else {
        endTime.setDate(date)
    }
    if (startDate <= endTime) {
        occourence = occourence - 1
    }
    let addition = years * occourence
    endTime.setFullYear(endTime.getFullYear() + addition)
    return endTime
}
