import React from 'react';
import './FlipCard.css';
const FlipCard = (props) => {
 
 
    return (
        <>
        <div className='FlipCard' >
            <div className="insideCard">
                <div className='frontCard'>
                        <h2>{props.Que}</h2>
                </div>
                <div className='backCard'>
                       <h2>{props.Ans}</h2>
                </div>
            </div>
        </div>
        
        </>
    );
};

export default FlipCard;