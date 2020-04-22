import React, { Component } from "react";
import { connect } from "react-redux";

// don't export Wallet class as default 
export class Wallet extends Component {
    render() {
        return (
            <div>
                <h3 className="balance">Wallet balance: { this.props.balance }</h3>
            </div>
        )
    }
}

export default connect(state => { balance: state }, null)(Wallet);