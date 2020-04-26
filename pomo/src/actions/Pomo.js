// We're lazy and they're related so we just gonna chug em here

// Start stop clock
const TOGGLE_POMO = 'TOGGLE_POMO';

export const togglePomo = (newTime) => ({
    type: TOGGLE_POMO,
    newTime
});

// Adjust POMO length
/*
const INCREASE_POMO = 'INCREASE';
const DECREASE_POMO = 'DECREASE';
const ADJUST_POMO = 'ADJUST';

export const INCREASE_POMO = (pomoLength) => ({
    type: INCREASE_POMO,
});
*/