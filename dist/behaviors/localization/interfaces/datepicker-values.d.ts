export declare type Septuple<T> = [T, T, T, T, T, T, T];
export declare type Duodecuple<T> = [T, T, T, T, T, T, T, T, T, T, T, T];
export interface IDatepickerFormatsLocaleValues {
    year: string;
    month: string;
    date: string;
    datetime: string;
    time: string;
}
export interface IDatepickerLocaleValues {
    months: Duodecuple<string>;
    monthsShort: Duodecuple<string>;
    weekdays: Septuple<string>;
    weekdaysShort: Septuple<string>;
    weekdaysNarrow: Septuple<string>;
    firstDayOfWeek: number;
    formats: IDatepickerFormatsLocaleValues;
}
