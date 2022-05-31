import React, { useState } from "react";
import { Container, Title, ButtonContainer, Button, LoadingContainer, LoadingFruit } from "./styles";
const { REACT_APP_MY_ENV } = process.env;

import axios from "axios";
import qs from "qs";

import FruitCart from "./components/FruitCart/index";
import PriceList from "./components/PriceList";

export interface CalculatedPriceObject {
  subtotal: number;
  taxes: number;
  discounts: { [key: string]: number };
  total: number;
}

const apiUrl = process.env.API_URL || "http://localhost:3000";

function App() {
  const [loading, setLoading] = useState<boolean>(false);
  const [calculatedPrice, setCalculatedPrice] = useState<CalculatedPriceObject | null>(null);
  const [amountOfApplesInCart, setAmountOfApplesInCart] = useState<number>(0);
  const [amountOfPineapplesInCart, setAmountOfPineapplesInCart] = useState<number>(0);
  const [amountOfStrawberriesInCart, setAmountOfStrawberriesInCart] = useState<number>(0);
  const [amountOfOrangesInCart, setAmountOfOrangesInCart] = useState<number>(0);

  const calculatePrice = async () => {
    try {
      setLoading(true);
      const response = await axios.post(
        `${apiUrl}/cart`,
        qs.stringify({
          apple: amountOfApplesInCart,
          pineapple: amountOfPineapplesInCart,
          strawberry: amountOfStrawberriesInCart,
          orange: amountOfOrangesInCart,
        }),
        {
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
        }
      );
      setCalculatedPrice(response.data);
      setLoading(false);
    } catch (error) {
      console.log("error calculating price", error);
    }
  };

  const resetCartAndPrices = () => {
    setCalculatedPrice(null);
    setAmountOfApplesInCart(0);
    setAmountOfPineapplesInCart(0);
    setAmountOfStrawberriesInCart(0);
    setAmountOfOrangesInCart(0);
  };

  return (
    <Container>
      <Title>Fruit Cart</Title>
      {!loading && !calculatedPrice && (
        <FruitCart
          amountOfApplesInCart={amountOfApplesInCart}
          amountOfPineapplesInCart={amountOfPineapplesInCart}
          amountOfStrawberriesInCart={amountOfStrawberriesInCart}
          amountOfOrangesInCart={amountOfOrangesInCart}
          setAmountOfApplesInCart={(amount: number) => setAmountOfApplesInCart(amount)}
          setAmountOfPineapplesInCart={(amount: number) => setAmountOfPineapplesInCart(amount)}
          setAmountOfStrawberriesInCart={(amount: number) => setAmountOfStrawberriesInCart(amount)}
          setAmountOfOrangesInCart={(amount: number) => setAmountOfOrangesInCart(amount)}
        />
      )}
      {!loading && calculatedPrice && <PriceList calculatedPrice={calculatedPrice} />}
      {loading && (
        <LoadingContainer>
          <LoadingFruit>🍓</LoadingFruit>
          Loading...
        </LoadingContainer>
      )}
      <ButtonContainer>
        {!loading && !calculatedPrice && <Button onClick={() => calculatePrice()}>Calculate Price</Button>}
        {!loading && calculatedPrice && <Button onClick={() => resetCartAndPrices()}>Get some more fruit!</Button>}
      </ButtonContainer>
    </Container>
  );
}

export default App;
