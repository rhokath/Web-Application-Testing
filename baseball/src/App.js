import React, {useState} from 'react';
import './App.css';
import Display from "./components/Display";
import Dashboard from './components/Dashboard';

function App() {
  const[count, setCount] = useState({strikeCounter: 0, ballCounter: 0})
  const ball = ()=>{
    if( count.ballCounter < 4){
      const newBallValue = count.ballCounter + 1
      setCount({ballCounter: newBallValue} )
      console.log("count strike counter", count.ballCounter)
      } else {
        setCount({ballCounter: 0})
      }
  }
  const foul = ()=> {
    if(count.strikeCounter = 2){
      return count
    } else if (count.strikeCounter >= 0 && count.strikeCounter < 2)
     setCount(count.strikeCounter + 1)

  }
  const strike = ()=> {
    // console.log('in strike', count)
    // // if(count.strikeCounter >3 ){
    // //  setCount(count.strikeCounter = 0)
    // // } else{]

    if( count.strikeCounter < 3){
    const newStrikeValue = count.strikeCounter + 1
    setCount({strikeCounter: newStrikeValue} )
    console.log("count strike counter", count.strikeCounter)
    } else {
      setCount({strikeCounter: 0})
    }
    

  }
  const hit = ()=> {
    setCount({strikeCounter: 0, ballCounter:0})

  }
  return (
    <div className="App">
      <header className="App-header">
        <Display ball={count.ballCounter}  strike={count.strikeCounter}/>
        <Dashboard strike={strike} foul={foul} ball={ball} hit={hit}/>
      </header>
    </div>
  );
}

export default App;
