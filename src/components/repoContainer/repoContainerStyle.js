import styled from "styled-components";

export const HeaderBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 10px;
  padding-right: 10px;
  background-color: rgb(229, 229, 229, .1);
  margin-bottom: 5vh;
`

export const TextLogo = styled.h1`
  font-family: Montserrat;
  font-size: 30px;
  background: linear-gradient(to right, #bdc3c7, #2c3e50);
  background-clip: text;
  text-fill-color: rgba(255, 255, 255, 0);
  -webkit-background-clip: text;
  -webkit-text-fill-color: rgba(255, 255, 255, 0);
`;

export const P = styled.p`
  font-family: Montserrat;
  font-size: 18px;
  font-weight: bold;
  color: #203A43;
`;