import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Loader } from "../Loader/Loader";
import { NavList, NavListItem, StyledNavLink, Wrapper } from "./Layout.styled";

const Layout = () => {
  return (
    <Wrapper>
      <header>
        <NavList>
          <NavListItem>
            <StyledNavLink to="/">Home</StyledNavLink>
          </NavListItem>
          <NavListItem>
            <StyledNavLink to="/catalog">Catalog</StyledNavLink>
          </NavListItem>
          <NavListItem>
            <StyledNavLink to="/favorites">Favorites</StyledNavLink>
          </NavListItem>
        </NavList>
      </header>
      <main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
    </Wrapper>
  );
};
export default Layout;
