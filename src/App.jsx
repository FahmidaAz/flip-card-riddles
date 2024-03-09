import './App.css'
import FlipCard from './Flipcard/FlipCard';
import { useState } from 'react';

function App() {
  const riddles=[
    {Que:'Are you ready? 💁🏽‍♀️ Lets get started',Ans:'Press Soon key 🔜'},
   {Que:'I speak without a mouth and hear without ears. I have no body, but I come alive with the wind. What am I?', Ans:"Echo!" },
  {Que:'What has cities but no houses, forests but no trees, and rivers but no water?', Ans:'A Map'},
  {Que:'If a plane crashes on the border between the United States and Canada, where do they bury the survivors?', Ans:'Survivors aren’t buried.'},
  {Que:'How many letters are in the alphabet?', Ans:'Eleven. T-h-e -a-l-p-h-a-b-e-t'},
  {Que:'How do you make the number one disappear?', Ans:'Add the letter “g” to it, and it’s gone.'},
  {Que:'If you were running a race and passed the person in second place, what place would you be in now?', Ans:'Second place'},
  {Que:'Who is bigger: Mr. Bigger, Mrs. Bigger, or their baby?', Ans:'The baby, because he’s a little Bigger.'},
  {Que:'You see a truck driver going the wrong way down a one-way street. He passes at least 10 police but doesn’t get stopped. Why?', Ans:'The truck driver was walking, not driving.'},
  {Que:'You’re riding an electric train at 120mph, moving north with the wind blowing east at 15 mph. Which way does the smoke blow?', Ans:'Electric trains don’t smoke.'},
  {Que:'I travel the world, and I am drunk constantly. Who am I?', Ans:'Water.'},
  {Que:'Some months have 31 days, others have 30 days, but how many have 28 days?', Ans:'All 12'},
  {Que:'A boy and an engineer were fishing. The boy is the son of the engineer but the engineer is not the father of the boy. Then who is the engineer?', Ans:'The engineer is the boy’s mother. '},
  {Que:'🎉Completed!🎉 How many did you score? ', Ans:'Well Done!!!👏👏'},

]
  const [count, setCount] = useState(0)

  const handleIncrease = () =>{
    if(count < riddles.length-1){
      setCount(count +1);
    }
  }
  const handleDecrease = () =>{
    if(count>0){
      setCount(count -1);
    }
  }
  return (
   
    <>
     <div className="Container">
      <h1>Flip Riddles Fun</h1>
      <h2>Guess the Answer</h2>
      <h3>Riddle: {count}</h3>
      <br />
      <br />
    <FlipCard Que={riddles[count].Que} Ans={riddles[count].Ans}/>
    
     <br />
     <br />
     <div className="arrows">
                <button onClick={handleDecrease}>🔙</button>
                <button onClick={handleIncrease}>🔜</button>
            </div>
            </div>
    </>
  )
}

export default App
