import styled from "styled-components";

export const LearnMoreButtonStyle = styled.button`
  width: 100%;
  height: 44px;
  border-radius: 12px;
  background: var(--regular-btn-color);
  color: var(--white-color);
  margin-top: 28px;

  font-weight: 600;
  line-height: 1.43;

  transition: all 250ms ease-in-out;
  &:hover {
    transform: scale(1.01);
    background: var(--active-btn-color);
  }
`;
