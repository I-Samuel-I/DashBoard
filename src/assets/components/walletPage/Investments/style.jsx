import styled from "styled-components";

export const Investments = styled.section`
  padding: 30px;
  margin-right: 5%;
  margin-left: 5%;
  margin-top: 3%;
  border-radius: 20px;
  box-shadow: 10px 1px 15px #73737316;
  background-color: white;
  table {
    width: 100%;
    div {
      width: 15px;
      height: 50px;
      &:hover {
        cursor: pointer;
      }
      svg {
        position: relative;
        top: 15px;
        font-size: 1.3rem;
        &:hover {
          color: #9e6efe;
        }
      }
      &:hover div {
        display: block;
        width: 20px;
      }
    }
    tr {
      th {
        padding: 15px;
        text-align: start;
      }
      td {
        padding: 15px;
        font-weight: 550;
        color: #737373;
      }
    }
  }
  @media (width < 768px) {
    overflow-x: auto;
  }
  @media (width < 600px) {
    font-size: 0.9rem;

  }

`;

export const MoreOptions = styled.div`
  position: relative;
  display: none;
  ul {
    position: absolute;
    right: 10px;
    top: 15px;
    z-index: 1;
    border-radius: 10px;
    list-style: none;
    box-shadow: 10px 15px 20px #73737316;
    background-color: #ffff;

    li {
      width: 100%;
      padding: 15px;
      &:hover {
        cursor: pointer;
        color: #9e6efe;
        background-color: #73737316;
      }
    }
  }
`;
