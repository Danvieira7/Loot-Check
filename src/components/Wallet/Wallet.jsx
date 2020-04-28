import React, { Component } from "react";
import { connect } from "react-redux";
import { deposit } from "../../actions/balance";

// don't export Wallet class as default 
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
    

    render() {
        return (
            <div>
                <h3 className="balance">Wallet balance: { this.props.balance }</h3>
                <br />
                <input className="input-wallet" onChange={this.updateBalance} />
                <button className="btn-deposit" onClick={this.deposit}>deposit</button>
            </div>
        )
    }
}

export default connect(state => { return { balance: state } }, { deposit })(Wallet);