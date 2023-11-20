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

  overflow: auto;
`;

export const ContentWrapper = styled.div`
  max-width: 461px;
  overflow: scroll;
  height: 500px;
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

export const Accent = styled.span`
  color: var(--accent-text-color);
`;

export const InfoWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;

  margin-top: 8px;

  color: rgba(18, 20, 23, 0.5);

  font-size: 12px;
`;

export const Description = styled.p`
  margin-top: 14px;
`;

export const InfoHeader = styled.p`
  margin-top: 24px;
  font-weight: 500;
`;

export const Access = styled.p`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;

  margin-top: 8px;

  color: rgba(18, 20, 23, 0.5);

  font-size: 12px;
`;

export const Funcs = styled.p`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;

  margin-top: 4px;

  color: rgba(18, 20, 23, 0.5);

  font-size: 12px;
`;

export const DecorWrapper = styled.div`
  padding: 7px 14px;
  font-size: 12px;
  border-radius: 35px;
  background: #f9f9f9;
`;
export const RentCondWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;

  margin-top: 8px;
`;

export const RentCarButton = styled.a`
  display: inline-block;

  padding: 12px 50px;
  border-radius: 12px;
  background: var(--regular-btn-color);
  color: var(--white-color);
  margin-top: 24px;

  font-weight: 600;
  line-height: 1.43;

  transition: all 250ms ease-in-out;
  &:hover {
    transform: scale(1.01);
    background: var(--active-btn-color);
  }
`;
