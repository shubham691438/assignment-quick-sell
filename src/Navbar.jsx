import React, { useEffect, useState } from 'react';
import './Navbar.css';

function Navbar({ Grouping, Ordering, SetGrouping, SetOrdering }) {
  const [showModal, setShowModal] = useState(false);
  const handleGroupingchange = (e) => {
    localStorage.setItem("Grouping", e.target.value);
    SetGrouping(e.target.value)
    console.log(e.target.value)
  }
  const handleOrderingChange = (e) => {
    localStorage.setItem("Ordering", e.target.value)
    SetOrdering(e.target.value)
  }
  const handleDisplayClick = () => {
    setShowModal(!showModal);
  };
  return (
    <div className="navbar">
      <button className="display-button" onClick={handleDisplayClick}>
        Display
      </button>

      {showModal && (
        <div className="modal-overlay">
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div>
              <div className="select-container">
                <label htmlFor="grouping">Grouping:</label>
                <select id="grouping" value={Grouping} onChange={handleGroupingchange}>
                  <option value="Status">Status</option>
                  <option value="User">User</option>
                  <option value="Priority">Priority</option>
                </select>
              </div>
            </div>
            <div>
              <div className="select-container">
                <label htmlFor="ordering">Ordering:</label>
                <select id="ordering" value={Ordering} onChange={handleOrderingChange}>
                  <option value="Priority">Priority</option>
                  <option value="Title">Title</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;
