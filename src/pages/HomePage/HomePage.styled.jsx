import { Link } from "react-router-dom";
import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
`;

export const Header = styled.h1`
  text-align: center;
`;

export const LinkCatalog = styled(Link)`
  color: #3470ff;
  &:hover {
    color: var(--active-btn-color);
  }
`;
