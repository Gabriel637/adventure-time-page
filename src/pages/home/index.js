import React, { useState } from "react";
import logo from "../../assets/images/logo.png";
import { characters } from "../../utils/characters.js";
import { Carousel } from "react-responsive-carousel";
import Modal from "../../components/Modal";
import disableScroll from "disable-scroll";
import Loading from "../../components/Loading";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import {
  Container,
  HeaderPage,
  ImageLogo,
  ImageCarousel,
  TextCarousel,
  BoxCarousel,
  ItemCarousel
} from "./styles";

export default function Home() {
  disableScroll.on();
  const [loading, setLoading] = useState(true);
  const [color, setColor] = useState();
  const [selected, setSelected] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const visibilityModal = () => {
    setShowModal(false);
  };

  const handleChange = selectedIndex => {
    setSelected(selectedIndex);
    setTimeout(() => {
      setColor(characters[selectedIndex].color);
    }, 200);
  };

  setTimeout(() => {
    setLoading(false);
  }, 2500);

  return (
    <>
      <Container color={color}>
        <Loading show={loading} />
        <HeaderPage>
          <ImageLogo src={logo} alt="logo" />
        </HeaderPage>
        <BoxCarousel>
          <Carousel
            showStatus={false}
            infiniteLoop={true}
            onChange={handleChange}
            showIndicators={false}
          >
            {characters.map(character => (
              <ItemCarousel
                color={color}
                onClick={() => {
                  setShowModal(true);
                }}
              >
                <ImageCarousel src={character.img} alt="logo" />
              </ItemCarousel>
            ))}
          </Carousel>
          <TextCarousel
            onClick={() => {
              setShowModal(true);
            }}
          >
            {characters[selected].name}
          </TextCarousel>
        </BoxCarousel>
      </Container>
      <Modal
        visibility={showModal}
        modalHandler={visibilityModal}
        character={characters[selected]}
      />
    </>
  );
}
