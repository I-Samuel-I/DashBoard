import styled from "styled-components";
export const Balance = styled.header`
  display: flex;
  justify-content: space-between;
  width: 90%;
  padding: 15px;
  margin-top: 5%;
  margin-left: 5%;
  box-shadow: 10px 1px 15px #73737316;
  border-radius: 15px;
  background-color: white;
  nav {
    padding: 10px;
    height: 50px;
    ul {
      display: flex;
      list-style: none;
      gap: 15px;

      li {
        padding: 10px;
        border-radius: 10px;
        font-weight: 550;
        color: #262626;
        background-color: #73737312;

        &:hover {
          cursor: pointer;
          scale: 1.05;
          transition: all 0.2s ease-in-out;
          color: #9e6efe;
          background-color: #73737329;
        }
      }
    }
  }
  @media (width < 992px) {
    margin-top: 15%;
  }
  @media (width < 768px) {
    flex-direction: column;
    margin-top: 15%;

    gap: 10px;
    nav {
      width: 100%;
    }
    @media (width < 600px) {
      li {
        width: 100%;
        text-align: center;
      }
    }
    @media (width < 500px) {
      margin-top: 25%;
      nav {
        ul {
          display: flex;
          gap: 10px;

          li {
            font-size: 0.8rem;
          }
        }
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

  @media (width < 500px) {
    h1 {
      font-size: 1.7rem;
    }
    h2 {
      font-size: 1.2rem;
    }
  }
`;
