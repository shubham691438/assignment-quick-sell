import React from 'react';

const Card = ({ id, title, tags, userImageSrc }) => {
  return (
    <div style={styles.card}>
      <div style={styles.cardHeader}>{id}</div>
      <div style={styles.cardTitle}>{title}</div>
      <div style={styles.cardFooter}>
        <div style={styles.icon}>!</div>
        {tags.map((tag, index) => (
          <span key={index} style={styles.tag}>
            {tag}
          </span>
        ))}
      </div>
      {userImageSrc && <img src={userImageSrc} alt="User" style={styles.userImage} />}
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
    backgroundColor: '#e0e0e0',
    borderRadius: '50%',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#757575',
    fontSize: '14px',
  },
  tag: {
    display: 'inline-block',
    padding: '4px 8px',
    borderRadius: '12px',
    backgroundColor: '#f0f0f0',
    fontSize: '12px',
    color: '#757575',
    marginRight: '4px',
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
