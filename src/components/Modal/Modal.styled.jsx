import styled from "styled-components";

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: var(--backdrop-color);

  z-index: 998;

  transition: all 250ms ease-in-out;
`;

export const Container = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: var(--white-color);
  border-radius: 24px;
  padding: 40px;

  z-index: 999;

  transition: all 250ms ease-in-out;
`;

export const ContentWrapper = styled.div`
  max-width: 461px;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 16px;
  right: 16px;
  cursor: pointer;

  font-size: 24px;
  transition: all 250ms ease-in-out;
  &:hover {
    transform: scale(1.2);
  }
`;

export const Image = styled.img`
  border-radius: 14px;
`;

export const Header = styled.h2`
  margin-top: 14px;
  font-weight: 500;
  font-size: 18px;
`;

export const Model = styled.span`
  color: var(--accent-text-color);
`;
