let defaultState = {
    time: 25,
    status: 'paused',
    shortBreak : '5',
    longBreak :'10',
    pomoLength : '25',
};

const pomoReducer = (state = defaultState, action) => {
    switch (action.type) {
        case 'TOGGLE_POMO': // replace this with const
            console.log("am toggled");
            if (state.status === 'running') {
                return {
                    time: action.newTime,
                    status: 'paused'
                }
            } else {
                return { status: 'running' };
            }
        default:
            return state;
    }
}

export default pomoReducer;