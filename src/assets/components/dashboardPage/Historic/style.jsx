import styled from "styled-components";

export const BuyerHistory = styled.section`
  width: 90%;
  padding: 30px;
  border-radius: 20px;
  margin-left: 5%;
  margin-top: 3%;
  margin-bottom: 3%;
  box-shadow: 10px 1px 15px #73737316;
  background-color: white;

  h1 {
    font-weight: 550;
    font-size: 1.4rem;
  }
  @media (width < 768px) {
    h1 {
      margin-bottom: 5%;
      font-size: 1.2rem;
    }
  }
  @media (width < 500px) {
    h1 {
      margin-bottom: 5%;
      font-size: 1rem;
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
  }
  tbody {
    overflow-x: auto;
    text-align: center;
    font-weight: 550;
    color: #737373;
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

  @media (width < 1200px) {
    td {
      padding-left: 25px;
      padding-right: 25px;
    }
  }
  @media (width <= 600px) {
    thead {
      font-size: 0.9em;
    }
    td{
      font-size: 0.85rem;
    }
  }
`;
export const StatusCircle = styled.span`
  display: inline-block;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  margin-right: 8px;
  background-color: ${(props) => props.color};
`;
