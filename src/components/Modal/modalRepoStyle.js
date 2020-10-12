import styled from "styled-components";

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

export const Containter = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
  @media (max-width: 800px) {
    flex-direction: column;
  }
`;
export const LeftBox = styled.div`
  margin: 10px;
  text-justify: inter-word;
  color: #ffffff;
  width: 70%;
  @media (max-width: 800px) {
    width: 90%;
  }
`;

export const LeftHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const RightBox = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 30%;
  @media (max-width: 800px) {
    width: 90%;
  }
`;

export const LeftContentBottom = styled.div`
  width: 100%;
  height: 30%;
`;
export const LeftContentTop = styled.div`
  width: 100%;
  height: 40%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  @media (max-width: 800px) {
    display: none;
  }
`;

export const Poster = styled.img`
    width: 150px;
    height: 150px;
    border-radius: 18px;
    position: fixed;
    top: 0;
    margin-top: 20px;
}
`;

export const TextColumn= styled.div`
  display: flex;
  flex-direction: column;
`;
