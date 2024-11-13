import React from 'react';
import './App.css';
import Card from './Card';

function Groups({ ele, heading }) {
    if (heading === "Priority 4") {
        heading = "Urgent";
    } else if (heading === "Priority 3") {
        heading = "High";
    } else if (heading === "Priority 2") {
        heading = "Medium";
    } else if (heading === "Priority 1") {
        heading = "Low";
    } else if (heading === "Priority 0")
        heading = "No priority";
    console.log(heading)
    return (
        <div className='member'>
            <h3 className='pad'>{heading}</h3>
            <div className='member'>
                {ele.map((card) => (
                    <Card
                        key={card.id}  // Add key prop to Card component
                        id={card.id}
                        title={card.title}
                        tags={card.tag}
                    />
                ))}
            </div>
        </div>
    );
}

export default Groups;
