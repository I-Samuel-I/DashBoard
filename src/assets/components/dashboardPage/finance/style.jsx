import styled from "styled-components";

export const WrappedFinance = styled.div`
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
  @media (width <= 1199px) {
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
  @media (width <= 600px) {
    section {
      margin: auto;
    }
    div {
      width: 100%;
      margin-top: 5%;
    }
  }
`;

export const WrappedIconGreen = styled.h1`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50%;
  padding: 5px;
  gap: 10px;
  margin-top: 5%;
  font-size: 15px;
  border-radius: 50px;
  color: green;
  background-color: #73737309;
  p {
    font-size: 15px;
  }
`;

export const WrappedIconRed = styled.h1`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50%;
  padding: 10px;
  gap: 10px;
  margin-top: 5%;
  font-size: 15px;
  border-radius: 50px;
  color: red;
  background-color: #73737309;
  p {
    font-size: 15px;
  }

  @media (width <= 1199px) {
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
  @media (width <= 600px) {
    section {
      margin: auto;
    }
    div {
      width: 100%;
      margin-top: 5%;
    }
  }
`;
