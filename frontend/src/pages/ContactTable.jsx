import React, { useState, useEffect } from 'react';
import '../styles/ContactTable.css';
import axios from 'axios';

const ContactTable = () => {
  const [queries, setQueries] = useState([]);

  const fetchQueries = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/query');
      setQueries(response.data);
    } catch (error) {
      console.error('Error fetching queries:', error);
    }
  };

  useEffect(() => {
    fetchQueries();

    
    const refreshInterval = setInterval(() => {
      fetchQueries();
    }, 5000);

    
    return () => clearInterval(refreshInterval);
  }, []);

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Message</th>
          </tr>
        </thead>
        <tbody>
          {queries.map((query) => (
            <tr key={query._id}>
              <td>{query.name}</td>
              <td>{query.email}</td>
              <td>{query.message}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default ContactTable;
