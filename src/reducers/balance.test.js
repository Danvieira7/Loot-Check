import balanceReducer from "./balance";
import * as constants from "../actions/constants";

describe('balance reducer', () => {
    
    it('sets a balance', () => {
        const balance = 10;
        expect(
            // balanceReducer() is a pure function that accepts 2 args: 
            // 1st arg is the previous state 
            // and the 2nd arg is the data for the action
            balanceReducer(undefined, { type: constants.SET_BALANCE, balance })
        ).toEqual(balance);
    });

    it("deposits into the balance", () => {
        const deposit = 10;
        const initialState = 5;

        expect(
            balanceReducer(initialState, { type: constants.DEPOSIT, deposit })
        ).toEqual(initialState + deposit);
    });

    it("withdraw from the balance", () => {
        const withdraw = 5;
        const initialState = 10;

        expect(
            balanceReducer(initialState, { type: constants.WITHDRAW, withdraw})
        ).toEqual(initialState - withdraw);
    });
})