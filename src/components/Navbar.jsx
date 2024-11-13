import React, { useEffect, useRef, useState } from 'react';
import '../Navbar.css';
import DisplayIcon from '../assets/Display.svg';
import downIcon from '../assets/down.svg';

function Navbar({ Grouping, Ordering, SetGrouping, SetOrdering }) {
  const [showModal, setShowModal] = useState(false);
  const displayButtonRef = useRef(null);
  const modalContentRef = useRef(null);

  const handleGroupingChange = (e) => {
    localStorage.setItem("Grouping", e.target.value);
    SetGrouping(e.target.value);
  };

  const handleOrderingChange = (e) => {
    localStorage.setItem("Ordering", e.target.value);
    SetOrdering(e.target.value);
  };

  const handleDisplayClick = () => {
    setShowModal(!showModal);
  };

  const handleClickOutside = (event) => {
    if (
      showModal &&
      modalContentRef.current &&
      !modalContentRef.current.contains(event.target) &&
      displayButtonRef.current &&
      !displayButtonRef.current.contains(event.target)
    ) {
      setShowModal(false);
    }
  };

  useEffect(() => {
    if (showModal) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showModal]);

  return (
    <div className="navbar">
      <button
        ref={displayButtonRef}
        className="display-button"
        onClick={handleDisplayClick}
      >
        <img src={DisplayIcon} alt="Display Icon" id="displayIcon"/>
        <span>Display</span>
        <img src={downIcon} className="downIcon" alt="Down Icon" />
      </button>

      {showModal && (
        <div className="modal-overlay">
          <div
            ref={modalContentRef}
            className="modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <div>
              <div className="select-container">
                <label htmlFor="grouping">Grouping:</label>
                <select id="grouping" value={Grouping} onChange={handleGroupingChange}>
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
