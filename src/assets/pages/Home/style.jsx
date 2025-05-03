import styled from "styled-components";

export const Home = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  padding: 15px;
  h1{
    text-align: center;
  }
  @media(width < 600px) {
    h1{
      font-size: 1.2rem;
    }
  }
`;
export const EnterButton = styled.button`
  width: 200px;
  height: 50px;
  border-radius: 5px;
  font-size: 1.2em;
  color: #262626;

  &:hover {
    border: 1px solid black;
    color: #9e6efe;
    background-color: #73737309;
  }
`;
