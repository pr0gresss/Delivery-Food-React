import { Button } from "@components/atoms";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const HomeHero = () => {
  const navigate = useNavigate();

  return (
    <StyledHeroContainer>
      <StyledLeftHeroContainer>
        <StyledContainerGap>
          <StyledHeading>
            Beautiful food & takeaway, <StyledCyanText>delivered </StyledCyanText>
            to your door.
          </StyledHeading>
          <StyledParagraph>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500.
          </StyledParagraph>
        </StyledContainerGap>
        <StyledContainerGap>
          <StyledButton onClick={() => navigate("/menu")}>Place an order</StyledButton>
          <StyledRatingContainer>
            <img src="src/assets/images/trustpilot-logo.svg" alt="" />
            <p>
              <StyledCyanText>4.8 out of 5 </StyledCyanText>
              based on 2000+ reviews
            </p>
          </StyledRatingContainer>
        </StyledContainerGap>
      </StyledLeftHeroContainer>
      <img src="src/assets/images/props/homepage-banner.svg" alt="" />
    </StyledHeroContainer>
  );
};

const StyledHeroContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  gap: 20px;
  align-items: center;
  justify-content: center;
  height: 100%;
  padding: 100px 120px;
  z-index: 1;
  position: relative;
  overflow: hidden;
  background: var(--bg-main);

  ::before {
    content: "";
    position: absolute;
    inset: 0;
    background-color: var(--bg-secondary);
    clip-path: polygon(0 0, 100% 0%, 100% 100%, 20% 70%, 9% 30%);
    z-index: -1;
  }
`;

const StyledButton = styled(Button)`
  max-width: 200px;
`;

const StyledLeftHeroContainer = styled.div`
  display: flex;
  flex-flow: column;
  flex: 1;
  justify-content: center;
  gap: 50px;
  height: 100%;
  align-items: flex-start;
  max-width: 650px;
`;

const StyledCyanText = styled.span`
  color: var(--text-tetriary);
`;

const StyledRatingContainer = styled.div`
  display: flex;
  flex-flow: column;
  gap: 10px;

  img {
    max-width: 110px;
  }
`;

const StyledParagraph = styled.p`
  color: var(--text-secondary);
  font-size: 18px;
  font-weight: 400;
  line-height: 24px;
`;

const StyledContainerGap = styled.div`
  display: flex;
  flex-flow: column;
  gap: 30px;
`;

const StyledHeading = styled.h1`
  font-weight: 400;
  font-size: 60px;
  line-height: 60px;
  letter-spacing: 2px;
`;

export default HomeHero;
