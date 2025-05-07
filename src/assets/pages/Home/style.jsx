import styled from "styled-components";

export const Home = styled.section`
  display: flex;
  justify-content: space-between;
`;

export const DashGif = styled.figure``;
export const WelcomeInfo = styled.section`
  display: flex;
  flex-direction: column;
  align-items: end;
  justify-content: center;
  padding: 25px;
  margin-top: 5%;
  margin-right: 5%;
  border: solid 1px;
  
  h1{
    font-size: 5.5rem;
  }
  h2{
    font-size: 2.8rem;
  }
  p{
    width: 55%;
    margin-top: 3%;
  }
`;
export const EnterButton = styled.button`
  width: 200px;
  height: 50px;
  border-radius: 5px;
  font-size: 1.2em;
  color: #262626;
  margin-top: 3%;

  &:hover {
    border: 1px solid black;
    color: #9e6efe;
    background-color: #73737309;
  }
`;

export const TextWrapper = styled.div `
    display: flex;
    flex-direction: column;
    align-items: end;
`
