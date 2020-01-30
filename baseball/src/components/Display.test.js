import React from 'react';
import { render } from "@testing-library/react";
import Display from "./Display";
import "@testing-library/react/cleanup-after-each";

describe('<Display/>', ()=> {
    it('renders without crashing',()=>{
        render(<Display/>);
    })
    it('should render strikes', ()=> {
        const strike = 2;
        const displayStrikes = render(<Display strike={strike}/>);
        displayStrikes.getByText(new RegExp(`strikes: ${strike}`, 'i'))
    })
    it('should render balls', ()=> {
        const ball = 3;
        const displayBalls = render(<Display ball={ball}/>);
        displayBalls.getByText(new RegExp(`balls: ${ball}`, 'i'))
    })

})