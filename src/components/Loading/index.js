import PropTypes from "prop-types";
import React from "react";
import Lottie from "react-lottie";
import loading from "../../assets/images/loading.json";
import { LoadingBoxStyled } from "./styles";
import { colors } from "../../utils/colors.js";

function Loading({ show, backgroundColor }) {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: loading,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

  return (
    <LoadingBoxStyled backgroundColor={backgroundColor} show={show}>
      <Lottie
        options={defaultOptions}
        height={100}
        width={100}
        isStopped={false}
        isPaused={false}
      />
    </LoadingBoxStyled>
  );
}

Loading.defaultProps = {
  backgroundColor: colors.blue_light
};
Loading.propTypes = {
  show: PropTypes.bool.isRequired,
  backgroundColor: PropTypes.string
};

export default Loading;
