const initialState = 0;

const ChangeNumber = (state = initialState, action) => {
    switch(action.type) {
        case "Inc" : return state + 1;
        case "Dec" : return state - 1;
        default : return state;
    }
}

export default ChangeNumber;