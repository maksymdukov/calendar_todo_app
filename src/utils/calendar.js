import moment from "./moment";

export const getWeeksGrid = (date) => {
    const NUMBER_OF_WEEKS = 6;
    const NUMBER_OF_DAYS = 7;
    const currentMonth = moment(date);
    const firstDay = {
        'date': 1,
        'hour': 0
    };
    currentMonth.set({...firstDay});
    currentMonth.weekday(0);
    let grid = [];
    for (let i = 0; i < NUMBER_OF_WEEKS; i++) {
        let subArr = [];
        for (let j = 0; j < NUMBER_OF_DAYS; j++) {
            subArr.push(currentMonth.weekday(j).format('YYYY MM DD'));
            currentMonth.add(1, 'days');
        }
        grid.push(subArr);
    }
    return grid;
};

export const getDaysOfWeek = ( () => {
    const NUMBER_OF_DAYS = 7;
    return Array.from({length: NUMBER_OF_DAYS}, (v, i) => {
        return moment().weekday(i).format('dd');
    })
} )();

export const getMonthsGrid = (() => {
    const NUMBER_OF_MONTH = 12;
    return Array.from({length: NUMBER_OF_MONTH}, (v, i) => {
        return moment().month(i).format('MMMM');
    })
})();

const MODES = {
    CALENDAR_GRID: "months",
    SINGLE_DAY: "days",
    MONTHS_GRID: "years"
};

export const getSlides = (activeDay, activeMode) => {
    const NUMBER_OF_SLIDES = 30;
    activeDay.subtract(16, MODES[activeMode]);
    return Array.from({length: NUMBER_OF_SLIDES+1}, () => {
        return moment(activeDay.add(1, MODES[activeMode]));
    })
};

export const getInitialSlides = (centralDay, activeMode) => {
    const activeDay = moment(centralDay);
    const NUMBER_OF_SLIDES = 5;
    activeDay.subtract(3, MODES[activeMode]);
    return Array.from({length: NUMBER_OF_SLIDES}, () => {
        return moment(activeDay.add(1, MODES[activeMode]));
    })
};

export const addTime = (date, amount, activeMode ) => {
  return moment(date).add(amount, MODES[activeMode]);
};

export const subtractTime = (date, amount, activeMode) => {
    return moment(date).subtract(amount, MODES[activeMode]);
};