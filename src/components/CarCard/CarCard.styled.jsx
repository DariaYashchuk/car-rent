import { BiHeart, BiSolidHeart } from "react-icons/bi";
import styled from "styled-components";

export const Wrapper = styled.li`
  max-width: 274px;
`;

export const ImgWrapper = styled.div`
  position: relative;
  transition: all 250ms ease-in-out;
  &:hover {
    transform: scale(1.01);
  }
`;

export const Image = styled.img`
  width: 274px;
  height: 268px;
  border-radius: 14px;
  object-fit: cover;
  cursor: pointer;
`;

export const IconWrapper = styled.div`
  position: absolute;
  width: 20px;
  height: 20px;
  top: 14px;
  right: 14px;
  cursor: pointer;
  transition: all 250ms ease-in-out;

  &:hover {
    transform: scale(1.2);
  }
`;

export const RegularIcon = styled(BiHeart)`
  fill: #ffffff;
  width: 100%;
  height: 100%;
`;

export const FavoriteIcon = styled(BiSolidHeart)`
  fill: var(--button-color);
  width: 100%;
  height: 100%;
`;

export const HeaderWrapper = styled.div`
  margin-top: 14px;
  display: flex;
  justify-content: space-between;
`;

export const Header = styled.h2`
  font-weight: 500;
  font-size: 16px;
`;

export const Model = styled.span`
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
