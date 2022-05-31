import styled from "styled-components";

export const Container = styled.div`
  height: 40vh;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;
`;

export const FruitContainer = styled.div`
  display: flex;
  flex-flow: row nowrap;
`;

export const Fruit = styled.span`
  font-size: 4.5em;
  text-align: center;
  cursor: pointer;
`;

export const FruitList = styled.div`
  height: 200px;
  color: 05386B;
  font-size: 2em;
`;

export const RemoveButton = styled.span`
  font-size: 0.5em;
  &:hover {
    background-color: #5cdb95;
    color: #05386b;
    cursor: pointer;
  }
`;
