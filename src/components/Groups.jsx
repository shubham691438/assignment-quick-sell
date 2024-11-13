import React,{useState,useEffect} from 'react';
import '../App.css';
import Card from './Card';
import ThreeDotMenuIcon from '../assets/threeDotMenu.svg';
import AddIcon from '../assets/add.svg';
import AvatarIcon from '../assets/img_avatar.png';

import DoneIcon from '../assets/Done.svg';
import InProgressIcon from '../assets/in-progress.svg';
import CancelledIcon from '../assets/Cancelled.svg';
import BackLogIcon from '../assets/Backlog.svg';
import Todo from '../assets/To-do.svg';
import HighPriorityIcon from '../assets/HighPriority.svg';
import MediumPriorityIcon from '../assets/MediumPriority.svg';
import LowPriorityIcon from '../assets/LowPriority.svg';
import NoPriorityIcon from '../assets/No-priority.svg';
import UrgentIcon from '../assets/urgentPriority.svg';


function Groups({ ele, heading ,GroupingType}) {

    const [image, setImage] = useState(AvatarIcon);

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

    

    useEffect(() => {
        if(heading === "Done"){
            setImage(DoneIcon);
        }
        else if(heading === "In progress" || heading === "In Progress" || heading === "in progress"){
            setImage(InProgressIcon);
        }
        else if(heading === "Cancelled" || heading === "cancelled"){
            setImage(CancelledIcon);
        }
        else if(heading === "Backlog" || heading === "Backlog"){
            setImage(BackLogIcon);
        }
        else if(heading === "Todo" || heading === "To-do" || heading === "todo"){
            setImage(Todo);}
        else if(heading === "Urgent"){
            setImage(UrgentIcon);
        }
        else if(heading === "High"){
            setImage(HighPriorityIcon);
        }
        else if(heading === "Medium"){
            setImage(MediumPriorityIcon);
        }
        else if(heading === "Low"){
            setImage(LowPriorityIcon);
        }
        else if(heading === "No priority"){
            setImage(NoPriorityIcon);
        }    
    }, [image])


    return (
        <div className='member'>
            <div className="columnHead">
                <div className='columnHeadLeft'>
                     <img src={image} alt="Avatar" className="avatar"/>
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
                        GroupingType={GroupingType}
                    />
                ))}
            </div>
        </div>
    );
}

export default Groups;
