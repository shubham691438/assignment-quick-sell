import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Body from './components/Body'

function App() {
  const [error, setError] = useState(false)
  const [data, setData] = useState({})
  const getInitialGrouping = () => localStorage.getItem("Grouping") || "Status";
  const getInitialOrdering = () => localStorage.getItem("Ordering") || "Priority";
  const [Grouping, setGrouping] = useState(getInitialGrouping)
  const [Ordering, setOrdering] = useState(getInitialOrdering)
  const [upDatedData, setUpdatedData] = useState([])
  const [groupData, setGroupedData] = useState({})

  useEffect(() => {
    fetch("https://api.quicksell.co/v1/internal/frontend-assignment", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (!response.ok) {
          setError(true)
          return "404"
        }
        return response.json();
      })
      .then((res) => {
        setData(res)
        const updatedTickets = res.tickets.map(ticket => {
          const userDetails = res.users.find(user => user.id === ticket.userId);
          return userDetails ? { ...ticket, userDetails } : ticket; // If user is found, attach userDetails
        });
        setUpdatedData(updatedTickets)
        console.log("Data received from API:", updatedTickets);
      })
      .catch((error) => {
        console.error("There was an error fetching the API:", error);
        setError(true)
      });

  }, [])

  const sortGroupedData = (data) => {
    const sortedData = {};
    Object.keys(data).forEach((key) => {
      sortedData[key] = [...data[key]].sort((a, b) => {
        if (Ordering === 'Priority') {
          return b.priority - a.priority; // Descending by priority
        } else if (Ordering === 'Title') {
          return a.title.localeCompare(b.title); // Ascending by title
        }
        return 0;
      });
    });
    return sortedData;
  };


  useEffect(() => {
  
    const groupData = () => {
      if (!upDatedData)
        return
      const grouped = upDatedData.reduce((acc, item) => {
        let key;

  
        if (Grouping === 'User') {
          key = item.userDetails.name;
        } else if (Grouping === 'Priority') {
          key = `Priority ${item.priority}`;
        } else if (Grouping === 'Status') {
          key = item.status;
        }

        if (!acc[key]) {
          acc[key] = [];
        }

      
        acc[key].push(item);

        return acc;
      }, {});
      const sorted = sortGroupedData(grouped)
      setGroupedData(sorted);
      
    };

    groupData();
  }, [Grouping, upDatedData, Ordering]);
  return (
    <div style={{ overflow: 'hidden' }}>
      <Navbar SetGrouping={setGrouping} SetOrdering={setOrdering} Grouping={Grouping} Ordering={Ordering} />
      <Body FinalData={groupData} GroupingType={Grouping}/>
    </div>
  )
}

export default App
