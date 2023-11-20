import Selection from "../Select/Select";
import brands from "../../data/makes.json";
import { useDispatch, useSelector } from "react-redux";
import {
  brandSelector,
  pricePerHourSelector,
} from "../../redux/filter/filterSelector";
import { setBrand, setPricePerHour } from "../../redux/filter/filterSlice";
import { useState } from "react";
import {
  Button,
  From,
  InputWrapper,
  ItemWrapper,
  SelectMileageWrapper,
  SelectTitle,
  SpanForFrom,
  SpanForTo,
  To,
  Wrapper,
} from "./Filter.styled";

export const Filter = ({ pricesArray }) => {
  const [filter, setFilter] = useState("");
  const [price, setPrice] = useState("");
  const dispatch = useDispatch();
  const brand = useSelector(brandSelector);
  const pricePerHour = useSelector(pricePerHourSelector);
  const handleChangeBrand = (changeValue) => {
    setFilter(changeValue);
  };
  const handleChangePrice = (changeValue) => {
    setPrice(changeValue);
  };

  const handleSearch = () => {
    dispatch(setBrand(filter));
    dispatch(setPricePerHour(price));
  };

  return (
    <Wrapper>
      <ItemWrapper>
        <SelectTitle>Car brand</SelectTitle>
        <Selection
          placeholder="Enter the text"
          options={brands}
          onChange={handleChangeBrand}
          value={brand}
        />
      </ItemWrapper>
      <ItemWrapper>
        <SelectTitle>Price/ 1 hour</SelectTitle>
        <Selection
          placeholder="To $"
          options={pricesArray}
          onChange={handleChangePrice}
          value={pricePerHour}
        />
      </ItemWrapper>
      <SelectMileageWrapper>
        <SelectTitle>Car mileage / km</SelectTitle>
        <InputWrapper>
          <From type="text" />
          <SpanForFrom>From</SpanForFrom>
          <To type="text" />
          <SpanForTo>To</SpanForTo>
        </InputWrapper>
      </SelectMileageWrapper>

      <Button onClick={handleSearch}>Search</Button>
    </Wrapper>
  );
};
