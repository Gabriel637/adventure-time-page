import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import closeIcon from "../../assets/images/close.svg";

import {
  Header,
  Title,
  ButtonCloseStyled,
  ContainerStyled,
  OverflowStyled,
  CardBoxStyled,
  ModalContent,
  ProfileColumn,
  BiographyColumn,
  ProfileImage,
  ProfileInfoBox
} from "./styles";

function Modal({ visibility, modalHandler, character }) {
  const [show, setShow] = useState(visibility);

  useEffect(() => {
    setShow(visibility);
  }, [visibility]);

  const closeModal = () => {
    setShow(false);
    modalHandler({ visibility: false, activated: false });
  };

  console.log("imagem", character.img);

  return (
    <ContainerStyled visibility={show}>
      <OverflowStyled
        onClick={() => {
          closeModal();
        }}
      />
      <CardBoxStyled>
        <Header>
          <Title>{character.full_name}</Title>
          <ButtonCloseStyled src={closeIcon} onClick={() => closeModal()} />
        </Header>
        <ModalContent>
          <ProfileColumn>
            <ProfileImage src={character.profile} />
            <ProfileInfoBox>
              <p>Full name:</p>
              <h1>{character.real_name}</h1>
              <p>Age:</p>
              <h1>{character.age}</h1>
              <p>Occupation:</p>
              <h1>{character.occupation}</h1>
              <p>Specie:</p>
              <h1>{character.specie}</h1>
              <p>Sex:</p>
              <h1>{character.sex}</h1>
            </ProfileInfoBox>
          </ProfileColumn>
          <BiographyColumn>
            <p>{character.bio}</p>
          </BiographyColumn>
        </ModalContent>
      </CardBoxStyled>
    </ContainerStyled>
  );
}

Modal.propTypes = {
  visibility: PropTypes.bool.isRequired,
  modalHandler: PropTypes.func.isRequired
};

export default Modal;
