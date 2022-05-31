import React from "react";
import { Container, FruitContainer, Fruit, FruitList, RemoveButton } from "./fruitCart.styles";

interface FruitCartProps {
  amountOfApplesInCart: number;
  amountOfPineapplesInCart: number;
  amountOfStrawberriesInCart: number;
  amountOfOrangesInCart: number;
  setAmountOfApplesInCart: (amount: number) => void;
  setAmountOfPineapplesInCart: (amount: number) => void;
  setAmountOfStrawberriesInCart: (amount: number) => void;
  setAmountOfOrangesInCart: (amount: number) => void;
}
const FruitCart = (props: FruitCartProps) => {
  return (
    <Container>
      <FruitContainer>
        <Fruit onClick={() => props.setAmountOfApplesInCart(props.amountOfApplesInCart + 1)}>🍎</Fruit>
        <Fruit onClick={() => props.setAmountOfPineapplesInCart(props.amountOfPineapplesInCart + 1)}>🍍</Fruit>
        <Fruit onClick={() => props.setAmountOfStrawberriesInCart(props.amountOfStrawberriesInCart + 1)}>🍓</Fruit>
        <Fruit onClick={() => props.setAmountOfOrangesInCart(props.amountOfOrangesInCart + 1)}>🍊</Fruit>
      </FruitContainer>
      <FruitList>
        <ul>
          {props.amountOfApplesInCart > 0 && (
            <li>
              Apples: {props.amountOfApplesInCart}{" "}
              <RemoveButton onClick={() => props.setAmountOfApplesInCart(props.amountOfApplesInCart - 1)}>
                [delete 1]
              </RemoveButton>
            </li>
          )}
          {props.amountOfPineapplesInCart > 0 && (
            <li>
              Pineapples: {props.amountOfPineapplesInCart}{" "}
              <RemoveButton onClick={() => props.setAmountOfPineapplesInCart(props.amountOfApplesInCart - 1)}>
                [delete 1]
              </RemoveButton>
            </li>
          )}
          {props.amountOfStrawberriesInCart > 0 && (
            <li>
              Strawberries: {props.amountOfStrawberriesInCart}{" "}
              <RemoveButton onClick={() => props.setAmountOfStrawberriesInCart(props.amountOfApplesInCart - 1)}>
                [delete 1]
              </RemoveButton>
            </li>
          )}
          {props.amountOfOrangesInCart > 0 && (
            <li>
              Oranges: {props.amountOfOrangesInCart}{" "}
              <RemoveButton onClick={() => props.setAmountOfOrangesInCart(props.amountOfApplesInCart - 1)}>
                [delete 1]
              </RemoveButton>
            </li>
          )}
        </ul>
      </FruitList>
    </Container>
  );
};

export default FruitCart;
