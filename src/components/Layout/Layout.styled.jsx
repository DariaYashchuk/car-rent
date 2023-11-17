import { styled } from "styled-components";
import { NavLink } from "react-router-dom";

export const Wrapper = styled.div`
  width: 100vw;
  max-width: 1440px;
  overflow: hidden;
  padding-left: 120px;
  padding-right: 120px;
`;

export const NavList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

export const NavListItem = styled.li``;

export const StyledNavLink = styled(NavLink)`
  color: var(--white-color);
  border-radius: 12px;
  background: #3470ff;
  width: 168px;
  height: 44px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
