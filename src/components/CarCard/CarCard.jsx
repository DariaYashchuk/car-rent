import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAdvertById } from "../../redux/adverts/operations";
import { selectFavorites } from "../../redux/favorites/favoritesSelector";
import {
  addFavorite,
  removeFavorite,
} from "../../redux/favorites/favoritesSlice";
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
  FavoriteIcon,
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

  const [isCarFavorite, setIsCarFavorite] = useState(false);
  const [isModalOpened, setIsModalOpened] = useState(false);
  const dispatch = useDispatch();
  const { favorites } = useSelector(selectFavorites);

  useEffect(() => {
    if (favorites.some((favorite) => favorite.id === car.id)) {
      setIsCarFavorite(true);
    }
  }, [favorites, car]);

  const addToFavorite = () => {
    setIsCarFavorite(!isCarFavorite);

    if (favorites.some((favorite) => favorite.id === car.id)) {
      dispatch(removeFavorite(car));
    } else {
      dispatch(addFavorite(car));
    }
  };

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
    <Wrapper>
      <ImgWrapper>
        <Image src={img} alt={model} />
        <IconWrapper onClick={addToFavorite}>
          {isCarFavorite ? <FavoriteIcon /> : <RegularIcon />}
        </IconWrapper>
      </ImgWrapper>
      <HeaderWrapper>
        <Header>
          {make} <Model>{model}</Model>, {year}
        </Header>
        <Header>{rentalPrice}</Header>
      </HeaderWrapper>
      <InfoWrapper>
        {city} | {country} | {rentalCompany} | {type}
      </InfoWrapper>
      <InfoWrapper>
        {model} | {id} | {functionalities[0]}
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
