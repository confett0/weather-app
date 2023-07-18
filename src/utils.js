import { format, add } from 'date-fns';

const date = {
    today: format(new Date(), "EEEE, LLLL do"),
    day1: format(add(new Date(), {
        days: 1,
    }), "EEEE, LLLL do"),
    day2: format(add(new Date(), {
        days: 2,
    }), "EEEE, LLLL do"),
    day3: format(add(new Date(), {
        days: 3,
    }), "EEEE, LLLL do"),
}

export { date };
