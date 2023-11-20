import { useSelector } from "react-redux";
import { CarsList } from "../../components/CarsList/CarsList";
import { selectFavorites } from "../../redux/favorites/favoritesSelector";
import { LinkCatalog, Wrapper } from "./FavoritesPage.styled";

const FavoritesPage = () => {
  const { favorites } = useSelector(selectFavorites);
  return (
    <>
      {favorites.length > 0 ? (
        <CarsList cars={favorites} />
      ) : (
        <Wrapper>
          <h2>Oops, no favorites ;(</h2>
          <h2>
            Lets go to our <LinkCatalog to="/catalog">catalog</LinkCatalog> to
            find the car to rent
          </h2>
        </Wrapper>
      )}
    </>
  );
};
export default FavoritesPage;
