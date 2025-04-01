import styled from "styled-components";

export const WrappedFinance = styled.section`
  section {
    display: flex;
    justify-content: space-around;
    width: 90%;
    margin-left: 5%;
    gap: 6%;
  }
  div {
    margin-top: 3%;
    background-color: white;
    border-radius: 15px;
    padding: 15px;
    box-shadow: 10px 1px 15px #73737316;
    width: 30%;
  }
  h1 {
    font-weight: 550;
    padding: 10px;
  }
  p {
    font-size: 2em;
    font-weight: 550;
    padding-left: 10px;
  }
  @media (width <= 1199px) {
    section {
      flex-wrap: wrap;
      gap: 0;
      width: 90%;
      margin-top: -2%;
    }
    div {
      width: 47%;
    }
  }
  @media (width <= 600px) {
    section{
      margin: auto;
    }
    div {
      width: 100%;
      margin-top: 5%;
    }
  }
`;
export const WrappedIconGreen = styled.h1`
  color: #0bb07b;
  font-size: 15px;
  display: flex;
  align-items: center;
  margin-top: 5%;
  margin-left: 5%;
  background-color: #73737309;
  border-radius: 50px;
  width: 40%;
  p {
    font-size: 15px;
  }
`;
export const WrappedIconRed = styled.h1`
  color: red;
  font-size: 15px;
  display: flex;
  align-items: center;
  gap: 5px;
  margin-top: 5%;
  margin-left: 5%;
  background-color: #73737309;
  border-radius: 50px;
  width: 40%;
  p {
    font-size: 15px;
  }
`;
