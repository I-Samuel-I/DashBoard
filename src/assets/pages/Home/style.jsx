import styled from "styled-components";

export const Home = styled.section`
  section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    color: white;
  }
`;
export const AntButton = styled.button`
  background-color: black;
  font-size: 1.2em;
  width: 200px;
  height: 50px;
  border-radius: 5px;
  border: 1px solid #9e6efe;

  &:hover {
    background-color: #9e6efe;
    border: 1px solid black;
  }
`;
