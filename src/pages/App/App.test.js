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
});