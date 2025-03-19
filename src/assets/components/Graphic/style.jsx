import styled from "styled-components";

export const Graphic = styled.section`
  display: flex;
  width: 95%;

  @media (width <= 1199px) {
    display: flex;
    flex-direction: column;
    width: 90%;
    div {
      margin-bottom: 5%;
    }
  }
  div {
    background-color: white;
    height: auto;
    width: 100%;
    margin-left: 5%;
    box-shadow: 10px 1px 15px #73737316;
    padding: 20px;
  }
  ul {
    list-style: none;
  }
  li {
    display: flex;
    justify-content: space-between;
    padding: 5px;
  }
`;
export const ColumnWrapped = styled.span`
  ul {
    display: flex;
  }
  li {
    display: flex;
    flex-direction: column;
  }

  div {
    position: relative;

    transition: height 0.3s ease-in-out;
  }
`;
export const WrappedHistoric = styled.span`
  li {
    color: #9e6efe;
    background-color: #73737310;
    display: flex;
    align-items: center;
  }
  li,
  p {
    margin-bottom: 2%;
    font-weight: 550;
    padding: 3px;
    border-radius: 10px;
  }
  li {
    padding-left: 3%;
  }
  h1 {
    margin-bottom: 3%;
  }
`;
export const WrappedFinance = styled.section`
  section {
    display: flex;
    width: 90%;
    margin-left: 5%;
  }
  div {
    background-color: white;
    height: 20vh;
    border-radius: 15px;
    padding: 15px;
    box-shadow: 10px 1px 15px #73737316;
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
      flex-direction: column;
      gap: 15px;
      width: 100%;
    }
    div {
      width: 43.5%;
    }
  }
`;
export const WrappedResponsiveFinance = styled.span`
  display: flex;
  flex-direction: row;

  margin-top: 3%;

  
  div {
  }
  @media (width <= 1199px) {
    display: flex;
    gap: 20px;
    width: 100%;
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
