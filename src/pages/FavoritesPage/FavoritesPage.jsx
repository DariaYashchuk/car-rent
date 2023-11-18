import { useSelector } from "react-redux";
import { CarsList } from "../../components/CarsList/CarsList";
import { selectFavorites } from "../../redux/favorites/favoritesSelector";

const FavoritesPage = () => {
  const { favorites } = useSelector(selectFavorites);
  console.log(favorites);
  return (
    <>
      {favorites.length > 0 ? (
        <CarsList cars={favorites} />
      ) : (
        <p>NO FAVORITES</p>
      )}
    </>
  );
};
export default FavoritesPage;
