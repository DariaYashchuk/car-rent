import { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchAdvertById } from "../../redux/adverts/operations";
import { LearnMoreButton } from "../LearnMoreButton/LearnMoreButton";
import Modal from "../Modal/Modal";
import {
  Wrapper,
  HeaderWrapper,
  Header,
  Image,
  ImgWrapper,
  InfoWrapper,
  Model,
  RegularIcon,
  IconWrapper,
} from "./CarCard.styled";

export const CarCard = ({ car }) => {
  const {
    id,
    year,
    make,
    model,
    type,
    img,
    functionalities,
    rentalPrice,
    rentalCompany,
    address,
  } = car;

  const [isModalOpened, setIsModalOpened] = useState(false);
  const dispatch = useDispatch();

  const openModal = () => {
    setIsModalOpened(true);
    dispatch(fetchAdvertById(id));
  };

  const closeModal = () => {
    setIsModalOpened(false);
  };

  const carAddress = address.split(", ");
  const city = carAddress[1];
  const country = carAddress[2];

  return (
    <Wrapper key={id}>
      <ImgWrapper>
        <Image src={img} alt={model} />
        <IconWrapper>
          <RegularIcon />
        </IconWrapper>
      </ImgWrapper>
      <HeaderWrapper>
        <Header>
          {make} <Model>{model}</Model>, {year}
        </Header>
        <Header>{rentalPrice}</Header>
      </HeaderWrapper>
      <InfoWrapper>
        <p>{city}</p>
        <span>|</span>
        <p>{country}</p>
        <span>|</span>
        <p>{rentalCompany}</p>
        <span>|</span>
        <p>{type}</p>
        <span>|</span>
        <p>{model}</p>
        <span>|</span>
        <p>{id}</p>
        <span>|</span>
        <p>{functionalities[0]}</p>
      </InfoWrapper>
      <LearnMoreButton openModal={openModal} />
      {isModalOpened && (
        <Modal
          isModalOpened={isModalOpened}
          closeModal={closeModal}
          car={car}
        />
      )}
    </Wrapper>
  );
};
