import styled, { keyframes } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: space-between;
`;

export const Title = styled.h1`
  font-size: 4.5em;
  text-align: center;
`;

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 50px;
`;

export const Button = styled.span`
  font-size: 1.5em;
  text-align: center;
  padding: 10px;
  background-color: #05386b;
  border-radius: 15px;
  &:hover {
    background-color: #5cdb95;
    border: 2px solid #05386b;
    color: #05386b;
    cursor: pointer;
  }
`;
export const LoadingContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;
  color: #05386b;
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }`;

export const LoadingFruit = styled.span`
  margin: 25px;
  animation: ${rotate} 2s linear infinite;
  font-size: 6rem;
`;
