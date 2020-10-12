import styled from "styled-components";
import { Grid } from "@material-ui/core";

export const ScrollableDiv = styled.div`
    height: 550px;
    overflow: auto;
`
export const Wrapper = styled(Grid)({
    display: "flex",
    justifyContent: "center",
});

export const Card = styled.div`
    display: flex;
    height: 200px;
    width: 290px;
    flex-direction: column;
    border-radius: 10px;
    position: relative;
    box-shadow: 1px 1px 1px 1px rgba(0,0,0,0.3), 1px 2px 2px 2px rgb(147 163 175);
    padding: 5px;
    }`;

export const UpperCard = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  `;
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
  background: linear-gradient(to right, #304352, #d7d2cc);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: rgba(255, 255, 255, 0);
`;

export const SideButton = styled.div`
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 24px;
    width: 70px;
    box-shadow: 0 0 5px rgba(0,0,0,0.08), 0 0 5px rgb(147 163 175);
`;

export const SideButtonText = styled.h5`
  cursor: pointer;
  font-size: 15px;
  background: ${props => `linear-gradient(to right, #c0c0aa, ${props.color})`};
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: rgba(255, 255, 255, 0);
`;

export const ModalWrapper = styled.div`
  background-color: rgb(32, 32, 32, 0.9);
  width: 65%;
  position: absolute;
  top: 50%;
  left: 18%;
  transform: translate(0, -50%);
  overflow-y: auto;
  outline: none;
  border-radius: 12px;
  height: 500px;
  @media (max-width: 600px) {
    width: 350px;
    left: 3%;
    flex-direction: column;
  }
`;

export const ViewButton = styled.div`
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 24px;
    width: 100%;
    cursor: pointer;
    box-shadow: 0 0 5px rgba(0,0,0,0.08), 0 0 5px rgb(147 163 175);
`;