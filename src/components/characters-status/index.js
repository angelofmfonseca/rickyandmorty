import React from "react";
import { Wrapper, CharacterSpecies, CharacterStatus } from "./styles";

const Status = ({ status, species }) => {
  return (
    <Wrapper>
      <CharacterSpecies>{species}</CharacterSpecies>-
      <CharacterStatus>{status}</CharacterStatus>
    </Wrapper>
  );
};

export default Status;
