import * as constants from "./constants";
import * as actions from "./balance";

it('creates an action to set the balnce', () => {
    
    // value to be passed in the test to the action (setBalance())
    const balance = 0;

    // parameter to be compared to the result of the test
    const expectedAction = {type: constants.SET_BALANCE, balance };

    // passes the value to the action setBalance() and expects it's 
    // type to be equal the expectedAction object
    expect(
        actions.setBalance(balance)
    ).toEqual(expectedAction);

})

it("creates an action to deposit into the balance", () => {
    const deposit = 10;    
    const expectedAction = { type: constants.DEPOSIT, deposit };
    expect(actions.deposit(deposit)).toEqual(expectedAction);
});

it("creates an action to withdraw from the balance", () => {
    const withdraw = 5;
    const expectedAction = { type: constants.WITHDRAW, withdraw };
    expect(actions.withdraw(withdraw)).toEqual(expectedAction);
});