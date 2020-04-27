// imports the action objects and change 
// the state acordingly to the action.type

import * as constants from "../actions/constants";

const balance = (state = 0, action) => {
    switch(action.type) {
        case constants.SET_BALANCE:
            return action.balance;
        case constants.DEPOSIT:
            return state + action.deposit;
        default:
            return state;
    }
}

export default balance