import styled from "styled-components";

export const MainTitle = styled.h1`
  width: 100%;
  margin-left: 20px;
  color: #333;
`;

export const Screen = styled.main`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
`;

export const Card = styled.article`
  width: 660px;
  height: 220px;
  display: flex;
  overflow: hidden;
  border-radius: 0.5rem;
  margin: 1rem;
  border: 1px solid #ccc;
  box-shadow: 1px 1px 1px #ccc;
`;

export const Info = styled.div`
  color: #333;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;
