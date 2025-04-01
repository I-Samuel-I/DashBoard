import styled from "styled-components";

export const Graphic = styled.section`
  display: flex;
  width: 90%;
  margin-left: 5%;
  flex-wrap: nowrap;
  gap: 5%;
  @media (width <= 1199px) {
    display: flex;
    flex-direction: column;
    width: 90%;
    div {
      border-radius: 15px;
      margin-bottom: 5%;
    }
  }
  div {
    background-color: white;
    height: auto;
    width: 100%;
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
export const ResultWrapped = styled.span`
    ul:nth-child(2){
      position: relative;
      top: 10%;

      li{
        margin-bottom: 3%;
        color: #737373;
      }
    }
    ul:nth-child(1){
      display: flex;
      align-items: flex-end;
      margin-left: 10%;
    }
  
  `;
export const ColumnWrapped = styled.span`
  display: flex;
  align-items: flex-start;
  overflow-x: auto;
  @media (width <= 768px) {
    overflow-x: auto;
  }
  ul {
    position: relative;
    display: flex;
    align-items: flex-end;
    width: 100%;
    gap: 2%;
    @media (width <=768px) {
      gap: 4%;
    }
  }
  li {
    display: flex;
    flex-direction: column;
  }

  div {
    width: 20px;
    box-shadow: none;
    border-radius: 10px;
  }
  p {
    color: #737373;
    text-align: center;
  }
`;
export const WrappedHistoric = styled.span`
  li {
    color: #9e6efe;
    background-color: #73737310;
    display: flex;
    align-items: center;
    display: flex;
    margin-bottom: 2%;
    font-weight: 550;
    border-radius: 10px;
    padding-left: 3%;
  }
  ul li ul li {
    width: 100%;
    padding: 5px;
    align-items: center;
    margin-bottom: 2%;
    background-color: #73737307;
  }
  h1 {
    margin-bottom: 3%;
  }
`;
