import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {

  const nagivateHome = useNavigate();

  return (
    <div>
      <h1>Home Page</h1>
    </div>
  )
}

export default Home
