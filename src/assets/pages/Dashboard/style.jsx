import styled from "styled-components";

export const ContentWrapped = styled.div`
  display: flex;
  flex-direction: row-reverse;
  @media (width <= 750px) {
    flex-direction: column;
  }
`;
export const DashBoard = styled.header`
  flex: 1;
  background-color: #73737309;
  
  header {
    margin-left: 5%;
    margin-top: 3%;
    display: flex;
    flex-direction: row;
  }
  figure {
    display: flex;
    margin-left: auto;
    position: relative;
    right: 10%;
    
    img {
      position: relative;
      width: 50px;
      height: 50px;
      border-radius: 50%;
      background-color: #ffff;
    }
    p {
      display: flex;
      height: 50px;
      align-items: center;
      margin-left: 10px;
      font-weight: 500;
    }
    @media (width <= 750px) {
    
      right: 2%;
      top: 20px;
      img{
      width: 40px;
      height: 40px;
    }
    p{
      height: 40px;
    }
    }
  }
`;
export const WrappedTittle = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 3%;
  @media (width <= 750px) {
    h1 {
      font-size: 1.6em;
    }
  }
  h3 {
    color: #737373;
    font-weight: 500;

    @media (width <= 750px) {
      font-size: 0.9em;
    }
  }
`;
