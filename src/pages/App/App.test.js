import React from "react";
import { shallow } from "enzyme";
import App from "./App";

describe('app', () => {
    const app = shallow(<App />);

    it('renders properly', () => {
        expect(app).toMatchSnapshot();
    });

    it('contains a Wallet component', () => {
        
        expect(app.find('Connect(Wallet)').exists()).toBe(true);
    });
    
    it('contains a Loot component', () => {
        
        expect(app.find('Connect(Loot)').exists()).toBe(true);
    });
    
    it("contains a link to the coindesk price page", () =>{
        expect(app.find('a').props().href).toBe("https://www.coindesk.com/price")
    });
});