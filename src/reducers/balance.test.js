import balanceReducer from "./balance";
import balanceReducer2 from "./balance";
import * as constants from "../actions/constants";

describe('balance reducer', () => {
    
    describe('when initializing', () => {
        const balance = 10;
        
        it('sets a balance', () => {
            expect(
                // balanceReducer() is a pure function that accepts 2 args: 
                // 1st arg is the previous state 
                // and the 2nd arg is the data for the action
                balanceReducer(undefined, { type: constants.SET_BALANCE, balance })
            ).toEqual(balance);
        });
    
        describe('then re-initializing', () => {
            it('reads the balance from cookies', () => {
                expect(balanceReducer2(undefined, {})).toEqual(balance)
            });
        });
    })

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