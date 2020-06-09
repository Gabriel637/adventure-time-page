import styled, { css } from "styled-components";
import px2vw from "../../utils/px2vw";
import { colors } from "../../utils/colors";

export const ImageLogo = styled.img`
  width: 60%;
`;

export const ImageCarousel = styled.img`
  width: 100%;
  height: 100%;
`;

export const HeaderPage = styled.div`
  display: flex;
  width: ${px2vw(100, 100)};
  min-height: ${px2vw(150, 768)};
  justify-content: center;

  @media (min-width: 768px) {
    width: ${px2vw(500, 768)};
    min-height: ${px2vw(150, 768)};
    height: 100%;
  }

  @media (min-width: 1024px) {
    width: ${px2vw(500)};
    min-height: ${px2vw(150)};
    height: 100%;
  }
`;

export const Container = styled.div`
  background-color: ${colors.blue_light};
  transition: background-color 0.5s;
  ${({ color }) =>
    color &&
    css`
      background-color: ${color};
    `};
  display: flex;
  flex-direction: column;
  min-height: 768px;
  width: 100%;
  align-items: center;
  justify-content: center;
`;

export const BoxCarousel = styled.div`
  display: flex;
  width: ${px2vw(320, 320)};
  min-height: ${px2vw(200, 320)};
  flex-direction: column;

  @media (min-width: 768px) {
    width: ${px2vw(768, 768)};
    min-height: ${px2vw(500, 768)};
    height: 100%;
  }

  @media (min-width: 1024px) {
    width: ${px2vw(1024)};
    min-height: ${px2vw(500)};
    height: 100%;
  }
`;

export const ItemCarousel = styled.div`
  max-height: ${px2vw(200, 320)};
  justify-content: center;
  align-items: center;
  :hover {
    cursor: pointer;
  }
  @media (min-width: 768px) {
    max-height: ${px2vw(450, 768)};
    height: 100%;
  }

  @media (min-width: 1024px) {
    max-height: ${px2vw(450)};
  }
`;

export const TextCarousel = styled.p`
  color: ${colors.red};
  font-size: 3.5vh;
  font-family: "Adventure Time Logo";
  text-align: center;
  text-decoration: underline;
  :hover {
    cursor: pointer;
    font-size: 4vh;
  }
  ${({ active }) =>
    active &&
    css`
      border-bottom: 4px solid ${colors.red};
      color: ${colors.red};
    `}
`;
