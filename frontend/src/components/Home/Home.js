import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Fish from '../Fish/Fish';
import './Home.scss';

const Home = () => {
  const [fishes, setFishes] = useState({ data: [] });

  useEffect(() => {
    axios
      .get('http://localhost:3000/fish/')
      .then(response => response.data)
      .then(data => setFishes(data));
  }, [fishes]);

  return (
    <div className='menu'>
      <h1>Fishes</h1>
      <ul>
        {Object.keys(fishes).map(key => (
          <Fish key={key} index={key} details={fishes[key]} />
        ))}
      </ul>
    </div>
  );
};

export default Home;
