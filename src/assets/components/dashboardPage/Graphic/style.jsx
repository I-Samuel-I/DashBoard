import styled from "styled-components";

export const Graphic = styled.section`
  display: flex;
  flex-wrap: nowrap;
  width: 90%;
  gap: 5%;
  margin-left: 5%;

  div {
    padding: 20px;
    border-radius: 15px;
    box-shadow: 10px 1px 15px #73737316;
    background-color: white;
  }
  ul {
    list-style: none;
  }
  li {
    padding: 10px;
  }

  @media (width < 1200px) {
    display: flex;
    flex-direction: column;

    div {
      margin-bottom: 5%;
    }
  }
`;
export const ResultWrapped = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  overflow-x: auto;
  li {
   
   
    font-weight: 500;
    color: #737373;
  }
  h1{
    margin-top: 1%;
    margin-bottom: 1%;
  }
`;
export const ColumnWrapped = styled.span`
  position: absolute;
  display: flex;
  flex-direction: column;
  bottom: 5px;
  left: 85px;

  li {
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
    margin-bottom: 30px;
    p {
      position: absolute;
      bottom: 5px;
    }
  }

`;
export const HistoricTransation = styled.span`
  width: 100%;
  li {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%; 
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
    li {
      font-size: 0.9rem;
    }
  }
`;
