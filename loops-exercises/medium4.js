/* ***4*** Starting from the constants dateLimit and dates, make a loop (the one you consider) that shows in the console the dates in the array that are greater than or equal to the date stored in the constant dateLimite. */

const dateLimit = "1997-8-3"
const dates = ["1984-18-2", "1998-3-2", "1973-15-7", "2024-31-10", "2081-1-9"]

/* for (let index = 0; index < dates.length; index++) {
    if (dates[index] >= dateLimit) {
        console.log(dates[index]);
    }
} */

for (const date of dates) {
    if (date >= dateLimit) {
        console.log(date);
    }
} // funciona exactamente igual, pero menos complique. 