import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CarsList } from "../../components/CarsList/CarsList";
import { Filter } from "../../components/Filter/Filter";
import { getAdvertAll } from "../../redux/adverts/advertsSelector";
import { fetchAdvertAll } from "../../redux/adverts/operations";

import { brandSelector } from "../../redux/filter/filterSelector";
import { AllCars } from "../../components/AllCars/AllCars";
import { Wrapper } from "./CatalogPage.styled";

const CatalogPage = () => {
  const dispatch = useDispatch();
  const a = 25;

  const brand = useSelector(brandSelector);
  //  const brand = useSelector(brandSelector);

  useEffect(() => {
    dispatch(fetchAdvertAll());
  }, [dispatch]);

  const { itemsAll } = useSelector(getAdvertAll);

  const allRentalPrices = [];

  for (const item of itemsAll) {
    const newRentalPrice = item.rentalPrice.split("");
    newRentalPrice.splice(0, 1);
    const modifiedPrice = newRentalPrice.join("");
    allRentalPrices.push(Number(modifiedPrice));
  }

  const minPricePerHour = Math.round(Math.min(...allRentalPrices) / 10) * 10;
  const maxPricePerHour = Math.round(Math.max(...allRentalPrices) / 10) * 10;

  const pricesArray = [];
  for (let i = minPricePerHour; i <= maxPricePerHour; i += 10) {
    pricesArray.push(i);
  }

  const filteredItems = itemsAll.filter((car) => {
    return car.make.toLowerCase() === brand.value.toLowerCase();
  });

  return (
    <Wrapper>
      <Filter pricesArray={pricesArray} />
      {filteredItems.length === 0 ? (
        <AllCars />
      ) : (
        <CarsList cars={filteredItems} />
      )}
    </Wrapper>
  );
};
export default CatalogPage;
