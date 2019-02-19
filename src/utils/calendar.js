import moment from "./moment";

export const getWeeksGrid = (date) => {
    const NUMBER_OF_WEEKS = 6;
    const NUMBER_OF_DAYS = 7;
    const currentMonth = new moment(date);
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

export const getDaysOfWeek = () => {
    const NUMBER_OF_DAYS = 7;
    return Array.from({length: NUMBER_OF_DAYS}, (v, i) => {
        return moment().weekday(i).format('dd');
    })
};

export const getMonthsGrid = () => {
    const NUMBER_OF_MONTH = 12;
    return Array.from({length: NUMBER_OF_MONTH}, (v, i) => {
        return moment().month(i).format('MMMM');
    })
};