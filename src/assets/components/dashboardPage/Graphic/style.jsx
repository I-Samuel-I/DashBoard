import styled from "styled-components";

export const Graphic = styled.section`
  display: flex;
  flex-wrap: nowrap;
  width: 90%;
  gap: 5%;
  margin-left: 5%;
  @media (width <= 1199px) {
    display: flex;
    flex-direction: column;
    width: 90%;
    div {
      margin-bottom: 5%;
      border-radius: 15px;
    }
  }
  div {
    width: 100%;
    height: auto;
    padding: 20px;
    box-shadow: 10px 1px 15px #73737316;
    background-color: white;
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
  ul:nth-child(2) {
    position: relative;
    top: 10%;
    z-index: 1;

    li {
      margin-bottom: 3%;
      color: #737373;
    }
  }
  ul:nth-child(1) {
    display: flex;
    align-items: flex-end;
    margin-left: 10%;
  }
`;
export const ColumnWrapped = styled.span`
  display: flex;
  overflow-x: auto;
  margin-top: 5%;
  @media (width <= 768px) {
    overflow-x: auto;
  }
  ul {
    display: flex;
    position: relative;
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
    justify-content: flex-end;
  }

  div {
    width: 20px;
    box-shadow: none;
    border-radius: 10px;
  }
  p {
    text-align: center;
    color: #737373;
  }
`;
export const HistoricTransation = styled.span`
  li {
    display: flex;
    align-items: center;
    padding-left: 3%;
    margin-bottom: 4%;
    border-radius: 10px;
    font-weight: 550;
    color: #9e6efe;
    background-color: #73737309;
  }
  ul li ul li {
    align-items: center;
    width: 100%;
    padding: 5px;
    margin-bottom: 2%;
  }
  h1 {
    margin-bottom: 3%;
  }
  @media (width <= 500px) {
    li{
      font-size: 0.9rem;
    }

  }
`;
