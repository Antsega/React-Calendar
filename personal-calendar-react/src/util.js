import dayjs from "dayjs"; // alows to manipulate time

export function getMonth(month = dayjs().month()) {
    const year = dayjs().year() // gives current year
    const firstDayOfTheMonth = dayjs(new Date(year, month, 1)).day() // represents first day of the month as an index. 0 to 6
    let currentMonthCount = 0 - firstDayOfTheMonth

    /*
     *  2D Matrix with 5 rows and 7 columns for days
     */
    const daysMatrix = new Array(5).fill([]).map(() => {
        return new Array(7).fill(null).map(() => {
            currentMonthCount++
            return dayjs(new Date(year, month, currentMonthCount))
        })
    })
    return daysMatrix
}