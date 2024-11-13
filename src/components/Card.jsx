import React,{useState,useEffect} from 'react';
import './card.css'

const Card = ({ id, title, tags, userImageSrc,GroupingType,cardIcon,cardIcon2 }) => {

  return (
    <div style={styles.card}>
      <div style={styles.cardHeader}>
        <div>
          {id}
        </div>
        {GroupingType != "User" && <img className='cardAvatar' src={userImageSrc}/>}
      </div>
      <div style={styles.cardTitle}>
        {GroupingType != "Status" &&<img src={cardIcon2}/> }
       {title}</div>
      <div style={styles.cardFooter}>
        {GroupingType != "Priority" &&<div style={styles.icon}><img src={cardIcon}/></div>}
        {tags.map((tag, index) => (
          <span key={index} style={styles.tag}>
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

const styles = {
  card: {
    backgroundColor: '#fff',
    border: '1px solid #e0e0e0',
    borderRadius: '8px',
    padding: '16px',
    maxWidth: '400px',
    fontFamily: 'Arial, sans-serif',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    position: 'relative',
    boxSizing: 'border-box',
  },
  cardHeader: {
    fontSize: '14px',
    color: '#757575',
    marginBottom: '4px',
    display: 'flex',
    justifyContent: 'space-between',
  },
  cardTitle: {
    fontSize: '14px',
    fontWeight: '500',
    color: '#333',
    marginBottom: '8px',
  },
  cardFooter: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    flexWrap: 'wrap', // Wrap tags if there are many
  },
  icon: {
    display: 'inline-flex',
    width: '24px',
    height: '24px',
    // backgroundColor: '#e0e0e0',
    // borderRadius: '50%',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#757575',
    fontSize: '14px',
  },
  tag: {
    display: 'inline-block',
    padding: '4px 8px',
    borderRadius: '4px',
    backgroundColor: '',
    fontSize: '12px',
    color: '#757575',
    marginRight: '4px',
    border: '1px solid #e0e0e0',
    fontWeight: '500',
  },
  userImage: {
    width: '32px',
    height: '32px',
    borderRadius: '50%',
    position: 'absolute',
    top: '16px',
    right: '16px',
  },
};

export default Card;
