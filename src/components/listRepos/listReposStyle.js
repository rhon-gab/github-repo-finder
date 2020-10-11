import styled from "styled-components";
import { Grid } from "@material-ui/core";

export const Wrapper = styled(Grid)({
  display: "flex",
  justifyContent: "center",
});

export const Card = styled.a`
    display: flex;
    height: 200px;
    width: 260px;
    flex-direction: column;
    border-radius: 10px;
    position: relative;
    cursor: pointer;
    box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.3), 3px 3px 3px rgb(147, 163, 175, 4);
    }`;

export const Poster = styled.img`
  width: 100px;
  border-radius: 10px;
`;

export const TextCard = styled.div`
  width: 100%;
  display: flex;
`;
export const Text = styled.h5`
  font-family: Montserrat;
  font-weight: bolder;
  font-size: 15px;
  margin-left: 5px;
  color: ${props => props.color};
`;

export const Bottom = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 15px;
`;
export const LoadMoreButton = styled.div`
  font-size: 16px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 24px;
  width: 300px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.08), 0 0 5px rgb(147, 163, 175, 4);
`;

export const ButtonText = styled.h5`
  cursor: pointer;
  font-size: 18px;
  color: #ffffff;
  background: linear-gradient(to right, #c9d6ff, #e2e2e2);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: rgba(255, 255, 255, 0);
`;
