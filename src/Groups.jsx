import React from 'react';
import './App.css';
import Card from './Card';
import ThreeDotMenuIcon from './assets/threeDotMenu.svg';
import AddIcon from './assets/add.svg';
import AvatarIcon from './assets/img_avatar.png';

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
            <div className="columnHead">
                <div className='columnHeadLeft'>
                     <img src={AvatarIcon} alt="Avatar" className="avatar"/>
                     <p className='heading' >{heading}</p>
                     <p>{ele.length}</p>
                </div>
                <div className="columnHeadRight">
                    
                    <img src={AddIcon} alt="Add Icon" className="addIcon" />
                    <img src={ThreeDotMenuIcon} alt="Three Dot Menu Icon" className="threeDotMenuIcon" />
                </div>
                
            </div>
           
            <div className='member'>
                {ele.map((card) => (
                    <Card
                        key={card.id}  
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
