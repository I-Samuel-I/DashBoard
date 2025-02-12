import styled from "styled-components";

export const Graphic = styled.section`
  width: 100%;
  section {
    display: flex;
    margin-left: 5%;
    gap: 2%;
    width: 100%;
  }

  div {
    display: flex;
    flex-direction: column;
    background-color: white;
    border-radius: 15px;
    height: auto;
    padding: 20px;
  }
  ul {
    flex-direction: column;
    list-style: none;
    display: flex;

    gap: 10px;
    padding: 10px;
  }
  h1 {
    padding: 10px;
    font-size: 1.5em;
    font-weight: 550;
  }
`;
export const WrappedMonth = styled.nav`
  border: solid 1px;
  ul {
    display: flex;
    flex-direction: row;
    padding-left: 2%;
    color: #414141;
  }
  ul:first-child {
    display: flex;
    flex-direction: column;
    position: relative;
    width: 10%;
    gap: 30px;
    font-size: 1.1em;
  }
  ul:nth-child(2) {
    padding-left: 50px;
  }
`;

export const WrappedGraphColumn = styled.div`
  nav {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }

  li {
    display: flex;
    justify-content: center;
  }
  div {
    background-color: #e8dcff;
    border: solid 1px;
  }
  div:first-child {
    color: red;
  }
`;

export const WrappedTransaction = styled.div`
  
  width: 100%;
  div {
    color: #9e6efe;
    width: 100%;
    margin-bottom: 10%;
    background-color: #73737313;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 10px 15px;
    border-radius: 8px;
    font-weight: 600;
  }
  h1{
    margin-bottom: 5%;
  }
`;

export const WrappedFinance = styled.section`
  section {
    margin-left: 5%;
    margin-top: 3%;
    gap: 35px;
    display: flex;
  }
  div {
    background-color: white;
    width: 22%;
    height: 20vh;
    border-radius: 15px;
  }
  h1 {
    font-weight: 500;
    padding: 10px;
  }
  p {
    font-size: 2em;
    font-weight: 550;
    padding-left: 10px;
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
