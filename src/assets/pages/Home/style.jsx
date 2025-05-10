import styled from "styled-components";

export const Home = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;

  @media (width < 991px) {
    flex-direction: column;
  }
`;

export const ImgHome = styled.figure`
  display: flex;
  img {
    width: 650px;
  }
  @media (width < 1550px) {
    img {
      width: 500px;
    }
  }
  @media (width < 1200px) {
    img {
      width: 450px;
    }
  }
  @media (width < 768px) {
    img {
      width: 400px;
    }
  }
  @media (width < 600px) {
    img {
      width: 350px;
    }
  }
`;
export const WelcomeInfo = styled.section`
  display: flex;
  flex-direction: column;
  align-items: end;
  justify-content: center;
  padding: 25px;
  margin: 10% 5% 0% 0%;
  h1 {
    font-size: 5rem;
    color: #262626;
  }
  h2 {
    font-size: 2.5rem;
  }
  p {
    width: 55%;
    margin-top: 3%;
    font: 700 1.5rem;
    color: #737373;
  }

  @media (width < 1550px) {
    h1 {
      font-size: 4rem;
    }
    h2 {
      font-size: 2rem;
    }
  }
  @media (width < 1200px) {
    h1 {
      font-size: 3.5rem;
    }
    h2 {
      font-size: 1.7rem;
    }
    p {
      width: 75%;
    }
  }
  @media (width < 991px) {
    align-items: center;
    margin: 5% 0% 0% 0%;
    p {
      width: 50%;
      text-align: center;
    }
  }
  @media (width < 768px) {
    p {
      width: 55%;
    }
  }
  @media (width < 600px) {
    h1 {
      font-size: 3rem;
    }
    h2 {
      font-size: 1.4rem;
    }
    p {
      width: 65%;
      margin-bottom: 2%;
    }
  }
  @media (width < 500px) {
    h1 {
      font-size: 2.5rem;
    }
    h2 {
      font-size: 1.2rem;
    }
    p {
      width: 100%;
      margin-bottom: 5%;
    }
  }
  @media (width < 400px) {
    h1{
      font-size: 2rem;
    }
    h2{
      font-size: 1.1rem;
    }
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
