import styled from "styled-components";

export const BuyerHistory = styled.section`
  background-color: white;
  width: 90%;
  height: auto;
  border-radius: 20px;
  margin-left: 5%;
  margin-top: 3%;
  margin-bottom: 3%;
  padding: 30px;
  box-shadow: 10px 1px 15px #73737316;

  h1 {
    font-weight: 550;
    font-size: 1.4em;
    @media (width <= 799px) {
      font-size: 1.2em;
    }
  }
`;

export const TableContainer = styled.div`
  width: 100%;
  overflow-x: auto; 
  
`;

export const WrappedTabble = styled.table`
  width: 100%;
  height: 100%;
  margin-top: 3%;
  border-collapse: collapse;

  thead {
    font-size: 1.1em;
    @media (width <= 600px) {
      font-size: 0.9em;
    }
  }
  tbody {
    text-align: center;
    color: #737373;
    font-weight: 550;
    overflow-x: auto;
    @media (width <= 600px) {
      font-size: 0.9em;
    }
  }
  tbody tr:first-child td {
    height: 10vh;
    border-bottom: solid 2px #7373731d;
    @media (width <= 600px) {
      height: 8vh;
    }
  }
  tbody tr:nth-child(2) td {
    height: 10vh;
  }
  tbody tr:first-child td:last-child {
    color: #0bb07b;
  }
  tbody tr:nth-child(2) td:last-child {
    color: orange;
  }
`;
export const StatusCircle = styled.span`
  display: inline-block;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin-right: 8px;
`;
