import React from "react";
import Wallet from "../../components/Wallet/Wallet";
import Loot from "../../components/Loot/Loot";

const App = () => {
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

export default App;