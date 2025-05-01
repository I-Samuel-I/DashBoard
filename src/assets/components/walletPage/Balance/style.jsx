import styled from "styled-components";
export const Balance = styled.header`
  display: flex;
  justify-content: space-between; 
  padding: 15px;
  margin-top: 5%;
  margin-left: 5%;
  margin-right: 5%;
  box-shadow: 10px 1px 15px #73737316;
  border-radius: 15px;
  background-color: white;
  nav {
    padding: 15px;
    height: 50px;

    ul {
      display: flex;
      list-style: none;
      gap: 15px;
      li {
        padding: 5px;
        border-radius: 10px;
        font-weight: 550;
        color: #262626;
        background-color: #73737312;
      }
    }
  }
`;
export const Info = styled.div`
  display: flex;
  flex-direction: column;
  padding: 15px;
  h1 {
    margin-top: 5%;
  }
`;
