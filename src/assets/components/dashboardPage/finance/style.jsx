import styled from "styled-components";

export const Finance = styled.div`
  section {
    display: flex;
    justify-content: space-around;
    width: 90%;
    gap: 6%;
    margin-left: 5%;
  }
  div {
    width: 100%;
    margin-top: 3%;
    padding: 15px;
    border-radius: 15px;
    box-shadow: 10px 1px 15px #73737316;
    background-color: white;
  }
  h1 {
    font-size: 1.2rem;
    font-weight: 550;
  }
  p {
    font-size: 1.5rem;
    font-weight: 550;
    margin-top: 10%;
  }
  @media (width < 1200px) {
    section {
      flex-wrap: wrap;
      width: 90%;
      gap: 0;
      margin-top: -2%;
    }
    div {
      width: 47%;
    }
  }
  @media (width < 600px) {
    section {
      margin: auto;
    }
    div {
      width: 100%;
      margin-top: 5%;
    }
  }
`;

export const Icons = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60%;
  padding: 10px;
  gap: 10px;
  margin-top: 5%;
  border-radius: 50px;
  background-color: #73737309;

  color: ${({ positive, negative }) =>
    positive ? "#4caf50" : negative ? "#f44336" : "#737373"};

  p {
    position: relative;
    bottom: 5px;
    font-size: 15px;
  }
  @media (width < 1200px) {
    width: 35%;
    padding: 5px;

    svg {
      position: relative;
      top: 1px;
    }
  }
`;
