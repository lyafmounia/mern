import axios from 'axios';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import AddFishForm from '../AddFishForm/AddFishForm';
import EditFishForm from '../EditFishForm/EditFishForm';
import './Inventory.scss';

const Inventory = props => {
  const [fishes, setFishes] = useState({});

  const loadSampleFishes = () => {
    axios
      .get('http://localhost:3000/fish/')
      .then(response => response.data)
      .then(data => setFishes(data));
  };

  return (
    <div className='inventory'>
      <h1>Inventory</h1>
      {Object.keys(fishes).map(key => (
        <EditFishForm
          fish={fishes[key]}
          key={key}
          index={key}
          updateFish={props.updateFish}
          deleteFish={props.deleteFish}
        />
      ))}
      <AddFishForm addFish={props.addFish} />
      <button onClick={loadSampleFishes}>Load sample fishes</button>
    </div>
  );
};

Inventory.propTypes = {
  fishes: PropTypes.object,
  updateFish: PropTypes.func,
  deleteFish: PropTypes.func,
  loadSampleFishes: PropTypes.func,
  addFish: PropTypes.func
};

export default Inventory;
