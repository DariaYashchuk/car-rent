import PropTypes from "prop-types";
import { CarCard } from "../CarCard/CarCard";
import { Wrapper } from "./CarsList.styled";

export const CarsList = ({ cars }) => {
  return (
    <Wrapper>
      {cars.map((car) => (
        <CarCard car={car} key={car.id} />
      ))}
    </Wrapper>
  );
};
CarsList.propTypes = {
  cars: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      address: PropTypes.string,
      functionalities: PropTypes.array,
      type: PropTypes.string,
      mileage: PropTypes.number,
      rentalCompany: PropTypes.string,
      img: PropTypes.string,
      model: PropTypes.string,
      make: PropTypes.string,
      rentalPrice: PropTypes.string,
      year: PropTypes.number,
    })
  ),
};
