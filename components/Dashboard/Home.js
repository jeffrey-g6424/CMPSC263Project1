import React from 'react';
import Link  from 'next/link';
import { RiMovieFill } from 'react-icons/ri'; //I imported a video/movie icon from react-icons
import styled from 'styled-components';

const Home = () => {
  return (
    <Square href="/dashboard">
      <RiMovieFill />
    </Square>
  );
};

const Square = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px; // Adjust the size as needed
  height: 50px; // Adjust the size as needed
  background-color: #2F1F0E; // Adjust the background color as needed
  color: white;
  border-radius: 4px; // Adjust for square or rounded corners
  text-decoration: none;
  
  svg {
    width: 24px; // Adjust icon size as needed
    height: 24px; // Adjust icon size as needed
  }

  &:hover {
    background-color: #8E5C29; // Adjust hover effect as needed
  }
`;

export default Home;
