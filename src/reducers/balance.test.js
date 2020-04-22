import balanceReducer from "./balance";
import * as constants from "../actions/constants";

describe('balance reducer', () => {
    
    it('sets a balance', () => {
        const balance = 10;
        expect(
            // balanceReducer() is a pure functionthat accepts 2 args: 
            // 1st arg is the previous state 
            // and the 2nd arg is the data for the action
            balanceReducer(undefined, { type: constants.SET_BALANCE, balance })
        ).toEqual(balance);
    });

})