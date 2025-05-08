import styled from "styled-components";

export const Config = styled.main`
  display: flex;
  flex-direction: row-reverse;
`;
export const Options = styled.div`
  width: 90%;
  margin-left: 5%;
  margin-right: 5%;
  margin-top: 5%;
  h2 {
    font-size: 1.2rem;
  }

  div {
    box-shadow: 10px 1px 15px #73737316;
    padding: 20px;
    margin-bottom: 2%;
    background-color: white;
    border-radius: 15px;
  }
  div:nth-child(2) {
    margin-bottom: 5%;
  }
  button {
    width: 15%;
    height: 50px;
    border: none;
    border-radius: 10px;
    font-weight: 550;
    font-size: 0.9em;
  }
  button:hover {
    cursor: pointer;
    color: #9e6efe;
    background-color: #73737325;
  }

  h1 {
    padding-bottom: 2%;
  }
  h3 {
    color: #262626;
  }
  ul {
    list-style: none;
  }
  li {
    display: flex;
    justify-content: space-between;
    padding-bottom: 25px;
  }
  p {
    width: 80%;
    padding-top: 10px;
    font-weight: normal;
    color: #737373;
  }

  @media (width < 1200px) {
    button {
      width: 25%;
    }
  }
  @media (width < 992px) {
    margin-top: 15%;
    button {
      width: 30%;
    }
    li {
      flex-direction: column;
    }
    p {
      width: 100%;
      margin-bottom: 3%;
    }
  }
  @media (width < 600px) {
    margin-top: 25%;

    div {
      margin-bottom: 5%;
    }
    h1 {
      font-size: 1.5rem;
    }
    h2 {
      font-size: 1.2rem;
    }
    button {
      width: 45%;
    }
  }
`;
export const DeleteBtn = styled.button`
  &&:hover {
    color: red;
  }
`;
