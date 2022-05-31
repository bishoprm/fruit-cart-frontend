import React from "react";
import { CalculatedPriceObject } from "../../App";
import { Container, Prices } from "./priceList.styles";

interface PriceListProps {
  calculatedPrice: CalculatedPriceObject;
}

const PriceList = (props: PriceListProps) => {
  console.log("price", props.calculatedPrice);
  return (
    <Container>
      <Prices>
        <ul>
          <li>Subtotal: {props.calculatedPrice.subtotal}</li>
          <li>Taxes: {props.calculatedPrice.taxes}</li>
          <li>
            Discounts:
            <ul>
              <li>10% off Pineapple: {props.calculatedPrice.discounts.pineapple}</li>
              <li>50% off Strawberry: {props.calculatedPrice.discounts.strawberry}</li>
            </ul>
          </li>
          <li>Total: {props.calculatedPrice.total}</li>
        </ul>
      </Prices>
    </Container>
  );
};

export default PriceList;
