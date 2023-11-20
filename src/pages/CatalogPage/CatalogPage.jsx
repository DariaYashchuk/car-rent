import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CarsList } from "../../components/CarsList/CarsList";
import { Loader } from "../../components/Loader/Loader";
import { getAdvert, getIsLoading } from "../../redux/adverts/advertsSelector";
import { fetchAdvert } from "../../redux/adverts/operations";
import { Button, Wrapper } from "./CatalogPage.styled";

const CatalogPage = () => {
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const [cars, setCars] = useState([]);

  useEffect(() => {
    dispatch(fetchAdvert(page));
  }, [dispatch, page]);
  const { items } = useSelector(getAdvert);
  const { isLoading } = useSelector(getIsLoading);

  useEffect(() => {
    setCars(items);
  }, [items]);

  const onLoadMore = () => {
    setPage(page + 1);
    setCars((prev) => [...prev, ...items]);
  };

  return (
    <Wrapper>
      {isLoading ? <Loader /> : <CarsList cars={cars} />}

      {items.length === 12 && !isLoading && (
        <Button onClick={onLoadMore}>Load More</Button>
      )}
    </Wrapper>
  );
};
export default CatalogPage;
