import React from "react";
import { CharacterImage } from "./styles";

const Image = ({ image, name }) => {
  return <CharacterImage src={image} alt={`image of ${name}`} />;
};

export default Image;
