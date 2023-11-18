import styled from "styled-components";

export const Button = styled.button`
  color: var(--regular-btn-color);

  font-size: 16px;
  font-weight: 500;
  text-decoration-line: underline;
  transition: all 250ms ease-in-out;

  margin-top: 100px;
  margin-bottom: 150px;

  &:hover {
    color: var(--active-btn-color);
  }
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;
