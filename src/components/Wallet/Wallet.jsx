import React, { Component } from "react";
import { connect } from "react-redux";
import { deposit, withdraw } from "../../actions/balance";

export class Wallet extends Component {
    constructor() {
        super()
        this.state = {
            balance: undefined
        }
    }

    updateBalance = evt => {
        this.setState({ 
            balance: parseInt(evt.target.value) 
        });
    }

    deposit = () => this.props.deposit(this.state.balance);
    
    withdraw = () => this.props.withdraw(this.state.balance);

    render() {
        return (
            <div>
                <div className="card">
                    <h3 className="balance">Wallet Balance: <br/>${ this.props.balance }</h3>
                    <br />
                    <input className="input-wallet" onChange={this.updateBalance} /><br/>
                    <button className="btn-deposit btn btn-success" onClick={this.deposit}>Deposit</button>
                    <button className="btn-withdraw btn btn-success" onClick={this.withdraw}>Withdraw</button>
                </div>
            </div>
        )
    }
}

export default connect(state => { return { balance: state.balance } }, { deposit, withdraw })(Wallet);