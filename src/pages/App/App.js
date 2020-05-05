import React, { Component } from "react";
import Wallet from "../../components/Wallet/Wallet";
import Loot from "../../components/Loot/Loot";

class App extends Component {
    render() {
        return (
            <div>
                <h2>Loot Check</h2>
                <hr />
                <Wallet />
                <hr />
                <Loot />
            </div>
        )
    }
}

export default App;