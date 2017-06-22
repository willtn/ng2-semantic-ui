export const DateUtil = {
    startOfYear(date:Date, resetAll:boolean = false):Date {
        date.setMonth(0);
        if (resetAll) {
            DateUtil.startOfMonth(date, resetAll);
        }
        return date;
    },
    startOfMonth(date:Date, resetAll:boolean = false):Date {
        date.setDate(1);
        if (resetAll) {
            DateUtil.startOfDay(date, resetAll);
        }
        return date;
    },
    startOfDay(date:Date, resetAll:boolean = false):Date {
        date.setHours(0);
        if (resetAll) {
            DateUtil.startOfHour(date, resetAll);
        }
        return date;
    },
    startOfHour(date:Date, resetAll:boolean = false):Date {
        date.setMinutes(0);
        if (resetAll) {
            DateUtil.startOfMinute(date, resetAll);
        }
        return date;
    },
    startOfMinute(date:Date, resetAll:boolean = false):Date {
        date.setSeconds(0);
        date.setMilliseconds(0);
        return date;
    },

    minutesEqual(date1:Date, date2:Date):boolean {
        let equal = true;
        equal = equal && DateUtil.hoursEqual(date1, date2);
        equal = equal && date1.getMinutes() === date2.getMinutes();
        return equal;
    },
    hoursEqual(date1:Date, date2:Date):boolean {
        let equal = true;
        equal = equal && DateUtil.datesEqual(date1, date2);
        equal = equal && date1.getHours() === date2.getHours();
        return equal;
    },
    datesEqual(date1:Date, date2:Date):boolean {
        let equal = true;
        equal = equal && DateUtil.monthsEqual(date1, date2);
        equal = equal && date1.getDate() === date2.getDate();
        return equal;
    },
    monthsEqual(date1:Date, date2:Date):boolean {
        let equal = true;
        equal = equal && DateUtil.yearsEqual(date1, date2);
        equal = equal && date1.getMonth() === date2.getMonth();
        return equal;
    },
    yearsEqual(date1:Date, date2:Date):boolean {
        let equal = true;
        equal = equal && date1.getFullYear() === date2.getFullYear();
        return equal;
    },

    clone(date:Date):Date {
        return new Date(date.toString());
    },

    rewriteTimezone(date:Date):Date {
        date.setTime(date.getTime() - new Date().getTimezoneOffset() * 60000);
        return date;
    }
};