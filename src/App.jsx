import './App.css'
import FlipCard from './Flipcard/FlipCard';
import {useState } from 'react';

function App() {
  const riddles=[
   {Que:'Are you ready? 💁🏽‍♀️ Lets get started',Ans:'Press Soon key 🔜',FrontColor:'#08203E', BackColor:'#152F4C'},
   {Que:'I speak without a mouth and hear without ears. I have no body, but I come alive with the wind. What am I?', Ans:"Echo",FrontColor:'#2F4E69', BackColor:'#557C93' },
   {Que:'What has cities but no houses, forests but no trees, and rivers but no water?', Ans:'A Map',FrontColor:'#eeaeca', BackColor:'#94bbe9'},
   {Que:'If a plane crashes on the border between the United States and Canada, where do they bury the survivors?', Ans:'Survivors aren’t buried.',FrontColor:'#E8DDB5', BackColor:'#666A86'},
   {Que:'How many letters are in the alphabet?', Ans:'Eleven. T-h-e -a-l-p-h-a-b-e-t',FrontColor:'#1B28B9', BackColor:'#666FDA'},
   {Que:'How do you make the number one disappear?', Ans:'Add the letter “g” to it, and it’s gone.',FrontColor:'#682BB5', BackColor:'#A96BF7'},
   {Que:'If you were running a race and passed the person in second place, what place would you be in now?', Ans:'Second place',FrontColor:'#F76B73', BackColor:'#C4F76B '},
   {Que:'Who is bigger: Mr. Bigger, Mrs. Bigger, or their baby?', Ans:'The baby, because he’s a little Bigger.',FrontColor:'#6B7BF7', BackColor:'#D96BF7'},
   {Que:'You see a truck driver going the wrong way down a one-way street. He passes at least 10 police but doesn’t get stopped. Why?', Ans:'The truck driver was walking, not driving.',FrontColor:'#4C055F', BackColor:'#5C5F05 '},
   {Que:'You’re riding an electric train at 120mph, moving north with the wind blowing east at 15 mph. Which way does the smoke blow?', Ans:'Electric trains don’t smoke.',FrontColor:'#ABAF4E', BackColor:'#AF4EA6'},
   {Que:'I travel the world, and I am drunk constantly. Who am I?', Ans:'Water.',FrontColor:'#793730', BackColor:'#79304E'},
   {Que:'Some months have 31 days, others have 30 days, but how many have 28 days?', Ans:'All 12',FrontColor:'#305D79 ', BackColor:'#3C09AB'},
   {Que:'A boy and an engineer were fishing. The boy is the son of the engineer but the engineer is not the father of the boy. Then who is the engineer?', Ans:'The engineer is the boy’s mother. ',FrontColor:'#A37849', BackColor:'#A1A34'},
   {Que:'🎉Completed!🎉 How many did you score? ', Ans:'Well Done!!!👏👏',FrontColor:'#A35249', BackColor:'#152F4C'},

]
  const [count, setCount] = useState(0);
  const [userAnswer, setUserAnswer] = useState('');
  const [feedback, setFeedback] = useState('');
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);

  const handleIncrease = () =>{
    if(count < riddles.length-1){
      setCount(count +1);
      setUserAnswer('');
      setFeedback('');
    }
  }
  const handleDecrease = () =>{
    if(count>0){
      setCount(count -1);
      setUserAnswer('');
      setFeedback('');
    }
  }
  const checkAnswer = () => {
    if (userAnswer.trim().toLowerCase() === riddles[count].Ans.toLowerCase()) {
      setFeedback('Correct! 👍');
      const newScore = score + 1;
      setScore(newScore); 
  
      if (newScore > highScore) {
        setHighScore(newScore);
      }
    } else {
      setFeedback('Try again. 👎');
      setScore(0); 
    }
  };
  
  return (
   
    <>
     <div className="Container">
      <h1>Flip Riddles Fun</h1>
      <h2>Guess the Answer</h2>
      <h3>Riddle: {count}</h3>
      <div className="score">
      <h4>Your Score: {score} </h4>
      <h4>Longest Streak: {highScore}</h4>
      </div>
    <FlipCard Que={riddles[count].Que} Ans={riddles[count].Ans} FrontColor={riddles[count].FrontColor} BackColor={riddles[count].BackColor}/>
     <br/>
     <br />
   <div className="answer">
    <h3>Your Answer: </h3>
    <input type="text" value={userAnswer} onChange={(e) => setUserAnswer(e.target.value)} />
    <button onClick={checkAnswer}>Check Answer!!</button>
    
   </div>
   <div>{feedback}</div>
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
