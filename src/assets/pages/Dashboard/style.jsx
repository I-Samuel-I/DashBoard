import styled from "styled-components";

export const ContentWrapped = styled.div`
  display: flex;
  flex-direction: row-reverse;
`;

export const DashBoard = styled.header`
  flex: 1;
  background-color: #73737310;
  header {
    margin-left: 5%;
    margin-top: 3%;
    display: flex;
    flex-direction: row;
  }
  figure {
    display: flex;
    margin-left: auto;
    position: relative;
    top: 25px;
    right: 250px;
    img {
      position: relative;
      width: 50px;
      height: 50px;
      border-radius: 50%;
      background-color: #ffff;
    }
    p {
      display: flex;
      height: 50px;
      align-items: center;
      margin-left: 10px;
      font-weight: 500;
    }
  }
`;

export const WrappedTittle = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 3%;

  h3{
    color: #737373;
    font-weight: 500;
  }
`;
