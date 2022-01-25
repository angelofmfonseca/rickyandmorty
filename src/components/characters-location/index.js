import React from "react";
import { Wrapper, CharacterLocation, LocationTitle } from "./styles";

const Location = ({ location }) => {
  return (
    <Wrapper>
      <LocationTitle>Location:</LocationTitle>
      <CharacterLocation>{location}</CharacterLocation>
    </Wrapper>
  );
};

export default Location;
