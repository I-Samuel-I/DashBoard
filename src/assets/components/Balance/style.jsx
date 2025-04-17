import styled from "styled-components";
export const Balance = styled.header`
  display: flex;
  justify-content: space-between;
  margin-top: 5%;
  margin-left: 5%;
  margin-right: 5%;
  max-height: 20%;
  padding: 15px;
  box-shadow: 10px 1px 15px #73737316;
  background-color: white;
  border-radius: 15px;
  nav {
    padding: 15px;
    height: 50px;

    ul {
      list-style: none;
      display: flex;
      gap: 15px;
      li {
        padding: 5px;
        border-radius: 10px;
        color: #262626;
        font-weight: 550;
        background-color: #73737312;
      }
    }
  }
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  padding: 15px;
  h1{
    margin-top: 5%;
  }
`;
