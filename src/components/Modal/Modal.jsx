import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

import {
  Backdrop,
  Container,
  CloseButton,
  ContentWrapper,
  Image,
  Header,
  InfoWrapper,
  Description,
  Access,
  Funcs,
  InfoHeader,
  DecorWrapper,
  Accent,
  RentCondWrapper,
  RentCarButton,
} from "./Modal.styled";
import { IoCloseOutline } from "react-icons/io5";

const Modal = ({ isModalOpened, closeModal, car }) => {
  const {
    model,
    img,
    description,
    make,
    address,
    year,
    id,
    type,
    fuelConsumption,
    engineSize,
    accessories,
    functionalities,
    rentalConditions,
    mileage,
    rentalPrice,
  } = car;

  const rentalConditionsModified = rentalConditions.split("\n");
  const minAge = rentalConditionsModified[0].split(": ");
  const newMileage = mileage.toString().split("");
  newMileage.splice(-3, 0, ",");
  const newMileageModified = newMileage.join("");

  const newRentalPrice = rentalPrice.split("");
  newRentalPrice.splice(0, 1);
  newRentalPrice.push("$");
  const modiifiedRentalPrice = newRentalPrice.join("");

  // const newrentalPrice1Modified = newrentalPrice1.join("");
  // console.log(modiifiedRentalPrice);
  const onBackdropClick = (event) => {
    if (event.target === event.currentTarget) {
      closeModal();
    }
  };

  useEffect(() => {
    const onEscPress = (event) => {
      if (isModalOpened && event.key === "Escape") {
        closeModal();
      }
    };

    document.body.style.overflow = isModalOpened ? "hidden" : "auto";
    window.addEventListener("keydown", onEscPress);

    return () => {
      window.removeEventListener("keydown", onEscPress);
      document.body.style.overflow = "auto";
    };
  }, [isModalOpened, closeModal]);

  if (!isModalOpened) {
    return null;
  }

  const carAddress = address.split(", ");
  const city = carAddress[1];
  const country = carAddress[2];

  return ReactDOM.createPortal(
    <Backdrop onClick={onBackdropClick}>
      <Container>
        <CloseButton onClick={closeModal}>
          <IoCloseOutline />
        </CloseButton>
        <ContentWrapper>
          <Image src={img} alt={model} />
          <Header>
            {make} <Accent>{model}</Accent>, {year}
          </Header>
          <InfoWrapper>
            <p>{city}</p>
            <span>|</span>
            <p>{country}</p>
            <span>|</span>
            <p>Id: {id}</p>
            <span>|</span>
            <p>Year: {year}</p>
            <span>|</span>
            <p>Type: {type}</p>
            <span>|</span>
            <p>Fuel Consumption: {fuelConsumption}</p>
            <span>|</span>
            <p>Engine Size: {engineSize}</p>
          </InfoWrapper>
          <Description>{description}</Description>
          <InfoHeader>Accessories and functionalities:</InfoHeader>
          <Access>
            <p>{accessories[0]}</p>
            <span>|</span>
            <p>{accessories[1]}</p>
            <span>|</span>
            <p>{accessories[2]}</p>
          </Access>
          <Funcs>
            <p>{functionalities[0]}</p>
            <span>|</span>
            <p>{functionalities[1]}</p>
            <span>|</span>
            <p>{functionalities[2]}</p>
          </Funcs>
          <InfoHeader>Rental Conditions: </InfoHeader>
          <RentCondWrapper>
            <DecorWrapper>
              <p>
                {minAge[0]}: <Accent>{minAge[1]}</Accent>
              </p>
            </DecorWrapper>
            <DecorWrapper>
              <p>{rentalConditionsModified[1]}</p>
            </DecorWrapper>
            <DecorWrapper>
              <p>{rentalConditionsModified[2]}</p>
            </DecorWrapper>
            <DecorWrapper>
              <p>
                Mileage: <Accent>{newMileageModified}</Accent>
              </p>
            </DecorWrapper>
            <DecorWrapper>
              <p>
                Price: <Accent>{modiifiedRentalPrice}</Accent>
              </p>
            </DecorWrapper>
          </RentCondWrapper>
          <RentCarButton href="tel:+380730000000">Rental car</RentCarButton>
        </ContentWrapper>
      </Container>
    </Backdrop>,
    document.getElementById("modal")
  );
};

Modal.propTypes = {
  isModalOpened: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
  children: PropTypes.node,
};

export default Modal;
