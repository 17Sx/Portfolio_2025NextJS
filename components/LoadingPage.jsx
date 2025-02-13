import React, { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';
const rotate = keyframes`
  from {
    stroke-dasharray: 0 100;
  }
  to {
    stroke-dasharray: 100 100;
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
    visibility: hidden;
  }
`;

const LoadingContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  animation: ${props => props.loading ? 'none' : fadeOut} 0.5s ease forwards;
  z-index: 1000;
`;

const Logo = styled.img`
  width: 150px; 
  margin-bottom: 20px;
`;

const CircleContainer = styled.div`
    position: relative;
    width: 200px;
    height: 200px;
    display: flex;
    justify-content: center;
    align-items: center;

`;

const Circle = styled.svg`
    transform: rotate(-90deg);
    `;

const CirclePath = styled.circle`
    fill: none;
    stroke: white; 
    stroke-width: 4;
    animation: ${rotate} 2s ease forwards;
    filter: drop-shadow(0 0 5px white);
    `;

const Percentage = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
    font-size: 20px;
`;

const LoadingPage = () => {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => setLoading(false), 500);
          return 100;
        }
        return prev + 1;
      });
    }, 10); 

    return () => clearInterval(timer);
  }, []);

  return (
    <LoadingContainer loading={loading}>
      <CircleContainer>
        <Circle width="100" height="100">
          <CirclePath cx="50" cy="50" r="45" strokeDasharray={`${progress} 100`}/>
        </Circle>
        <Percentage>{progress}%</Percentage>
      </CircleContainer>
    </LoadingContainer>
  );
};

export default LoadingPage;
