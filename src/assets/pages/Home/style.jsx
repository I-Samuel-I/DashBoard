import styled from "styled-components";

export const Home = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
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
