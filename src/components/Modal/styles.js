import styled, { css, keyframes } from "styled-components";
import { bounceIn } from "react-animations";
import px2vw from "../../utils/px2vw";
import { colors } from "../../utils/colors";

const bounceAnimation = keyframes`${bounceIn}`;

export const ContainerStyled = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  ${({ visibility }) =>
    !visibility &&
    css`
      display: none;
    `}
`;

export const CardBoxStyled = styled.div`
  animation: 1.2s ${bounceAnimation};
  border-radius: 1%;
  width: ${px2vw(90, 100)};
  height: ${px2vw(700, 768)};

  @media (min-width: 768px) {
    width: ${px2vw(600, 768)};
    height: ${px2vw(500, 768)};
  }

  @media (min-width: 1024px) {
    width: ${px2vw(1024)};
    height: ${px2vw(700)};
  }
  z-index: 2;
  background: white;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 5%;
  padding: 1%;
  margin: 1%;
  border-bottom: 0.2px solid ${colors.black2};
`;

export const Title = styled.h1`
  color: ${colors.gray_light};
  font-size: 4vh;
  font-family: "Comic Neue";
  font-style: italic;
  text-align: center;
`;

export const ButtonCloseStyled = styled.img`
  cursor: pointer;
  height: 4vh;
  width: 4vh;
`;

export const OverflowStyled = styled.div`
  width: 100%;
  height: 100%;
  background: #000000;
  position: absolute;
  opacity: 0.7;
`;

export const ModalContent = styled.div`
  width: 100%;
  height: 90%;
  display: flex;
  flex-direction: row;
`;

export const ProfileColumn = styled.div`
  width: 35%;
  height: 95%;
  margin: 1%;
  border-right: 0.2px solid ${colors.gray_light};
  display: flex;
  flex-direction: column;
`;

export const ProfileImage = styled.img`
  width: 90%;
  height: 35%;
  margin: 5%;
`;

export const ProfileInfoBox = styled.div`
  width: 90%;
  height: 60%;
  margin: 0 5% 5% 5%;
  p {
    color: ${colors.gray_light};
    font-family: "Comic Neue";
    font-size: 2vh;
    font-style: italic;
    margin-top: 3%;
  }
  h1 {
    color: ${colors.black2};
    font-size: 4vh;
    font-family: "Comic Neue";
    font-style: italic;
    font-weight: bold;
  }
`;

export const BiographyColumn = styled.div`
  width: 65%;
  height: 95%;
  margin: 1%;
  display: flex;
  flex-direction: column;
  p {
    color: ${colors.gray_light};
    font-size: 2vh;
    letter-spacing: 1px;
    line-height: 1.5;
    margin: 2.5% 2% 3% 0;
    text-align: justify;
    font-family: "Comic Neue";
    font-style: italic;
  }
`;
