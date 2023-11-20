import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "../../pages/CatalogPage/CatalogPage.styled";
import { getAdvert, getIsLoading } from "../../redux/adverts/advertsSelector";
import { fetchAdvert } from "../../redux/adverts/operations";
import { CarsList } from "../CarsList/CarsList";
import { Loader } from "../Loader/Loader";

export const AllCars = () => {
  const dispatch = useDispatch();
  const [cars, setCars] = useState([]);
  const [page, setPage] = useState(1);
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
  return isLoading ? (
    <Loader />
  ) : (
    <>
      <CarsList cars={cars} />
      {items.length === 12 && !isLoading && (
        <Button onClick={onLoadMore}>Load More</Button>
      )}
    </>
  );
};
