import { Header, LinkCatalog, Wrapper } from "./HomePage.styled";

const HomePage = () => {
  return (
    <Wrapper>
      <Header>
        Hello! Lets go to our <LinkCatalog to="/catalog">catalog</LinkCatalog>{" "}
        to find the car to rent
      </Header>
    </Wrapper>
  );
};
export default HomePage;
