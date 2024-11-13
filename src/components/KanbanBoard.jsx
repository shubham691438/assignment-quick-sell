import React from 'react';
import Card from './Card';
import './KanbanBoard.css';

const KanbanBoard = () => {
  const columns = [
    {
      title: 'Todo',
      cards: [
        { id: 'CAM-5', title: 'Add Multi-Language Support', assignedTo: 'User1' },
        { id: 'CAM-8', title: 'Create Onboarding Tutorial for New Users', assignedTo: 'User2' },
        { id: 'CAM-4', title: 'Add Multi-Language Support', assignedTo: null },
        { id: 'CAM-2', title: 'Implement Email Notification System', assignedTo: 'User3' },
        { id: 'CAM-1', title: 'Update User Profile Page UI', assignedTo: null },
      ],
    },
    {
      title: 'In Progress',
      cards: [
        { id: 'CAM-3', title: 'Optimize Database Queries for Performance', assignedTo: 'User4' },
      ],
    },
    {
      title: 'Done',
      cards: [
        { id: 'CAM-6', title: 'Enhance Search Functionality', assignedTo: 'User1' },
        { id: 'CAM-7', title: 'Integrate Third-Party Payment Gateway', assignedTo: 'User5' },
        { id: 'CAM-11', title: 'Conduct Security Vulnerability Assessment', assignedTo: 'User6' },
        { id: 'CAM-10', title: 'Upgrade Server Infrastructure', assignedTo: 'User3' },
        { id: 'CAM-9', title: 'Implement Role-Based Access Control (RBAC)', assignedTo: 'User4' },
      ],
    },
    {
      title: 'Canceled',
      cards: [],
    },
  ];

  return (
    <div className="kanban-board">
      {columns.map((column, index) => (
        <div key={index} className="kanban-column">
          <div className="kanban-column-header">
            <h2>{column.title}</h2>
            <span>{column.cards.length}</span>
          </div>
          <div className="kanban-column-content">
            {column.cards.map((card) => (
              <Card key={card.id} card={card} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default KanbanBoard;