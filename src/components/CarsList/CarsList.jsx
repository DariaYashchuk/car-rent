import PropTypes from "prop-types";

export const CarsList = ({ cars }) => {
  return (
    <ul>
      {cars.map((item) => (
        <li key={item.id}>{item.id}</li>
      ))}
    </ul>
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
