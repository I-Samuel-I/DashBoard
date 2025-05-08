import styled from "styled-components";

export const MainContainer = styled.main`
  display: flex;
  flex-direction: row-reverse;
  @media (width <= 750px) {
    flex-direction: column;
  }
`;
export const DashBoard = styled.div`
  flex: 1;
  header {
    display: flex;
    flex-direction: row;
    width: 90%;
    margin-left: 5%;
    margin-top: 5%;
  }
  figure {
    display: flex;
    position: relative;
    margin-left: auto;
    margin-right: 2%;
    img {
      position: relative;
      width: 50px;
      height: 50px;
      border-radius: 50%;
      background-color: #ffff;
    }
    p {
      display: flex;
      align-items: center;
      height: 50px;
      margin-left: 10px;
      font-weight: 500;
    }
  }
  @media (width < 1200px) {
    header {
      margin-top: 15%;
    }
    figure {
      p {
        display: none;
      }
    }
  }
  @media (width < 992px) {
    header {
      align-items: center;
    }
    figure {
      img {
        width: 60px;
        height: 60px;
      }
    }
  }
  @media (width < 768px) {
    figure {
      img {
        width: 55px;
        height: 55px;
      }
    }
  }
  @media (width < 600px) {
    header {
      margin-top: 20%;
    }
    figure {
      img {
        width: 50px;
        height: 50px;
      }
    }
  }
  @media (width < 500px) {
    header {
      margin-top: 25%;
    }
  }
`;
export const Title = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 3%;
  h2 {
    font-weight: 500;
    font-size: 1.2rem;
    color: #737373;
  }

  @media (width < 768px) {
    h1 {
      font-size: 2rem;
    }
    h2 {
      font-size: 1.2rem;
    }
  }
  @media (width < 600px) {
    h1 {
      font-size: 1.7rem;
    }
    h2 {
      font-size: 1rem;
    }
  }
  @media (width < 500px) {
    h1 {
      font-size: 1.5rem;
    }
    h2 {
      font-size: 0.8rem;
    }
  }
`;
