import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {render} from "@testing-library/react";
import "@testing-library/react/cleanup-after-each";
import Display from "./components/Display";


describe('<App/>', ()=>{
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
  it('renders without crashing', ()=> {
    render(<App/>);
  });
  describe('strike()', ()=> {
    it('should reset to 0 when a hit() is called')
    it('should reset to 0 when strikes is at 3')
  });
  describe('foul()', () => {
    it('should increase strikes up to 2')
    it('should have no effect on the strike count when strikes is at 2')
  });
  describe('ball()', ()=>{
    it('should reset to 0 when a hit() is called')
    it('should reset to 0 when balls is at 4')
  });
  describe('hit()', ()=> {
    it('should reset balls to 0')
    it('should reset strikes to 0')
  });


})


