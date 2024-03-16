import React from 'react';
import './FlipCard.css';
const FlipCard = (props) => {
 
 
    return (
        <>
        <div className='FlipCard'  >
            <div className="insideCard">
                <div className='frontCard'style={{backgroundColor:props.FrontColor}}>
                        <h2>{props.Que}</h2>
                </div>
                <div className='backCard'style={{backgroundColor:props.BackColor}}>
                       <h2>{props.Ans}</h2>
                </div>
            </div>
        </div>
        
        </>
    );
};

export default FlipCard;