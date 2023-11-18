import { LearnMoreButtonStyle } from "./LearnMoreButton.styled";

export const LearnMoreButton = ({ openModal }) => {
  return (
    <LearnMoreButtonStyle onClick={openModal}>Learm More</LearnMoreButtonStyle>
  );
};
