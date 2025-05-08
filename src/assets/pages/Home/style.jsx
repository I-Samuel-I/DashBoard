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
  margin-top: 10%;
  margin-right: 5%;

  h1 {
    font-size: 5.5rem;
    color: #262626;
  }
  h2 {
    font-size: 2.8rem;
    
  }
  p {
    width: 55%;
    margin-top: 3%;
    font: 700 1.5rem;
    color: #737373;
  }
`;
export const EnterButton = styled.button`
  width: 200px;
  height: 50px;
  border: none;
  border-radius: 10px;
  margin-top: 3%;
  font-size: 1.2em;
  color: #ffff;
  background-color: #9e6efe;
  
  &:hover {
    transform: scale(1.1);
    transition: 0.3s ease-in-out;
    cursor: pointer;
    background-color: #7f58cc;
  }
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
`;
