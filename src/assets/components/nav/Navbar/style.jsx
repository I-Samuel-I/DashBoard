import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const NavBar = styled.div`
  width: 17%;
  border-radius: 10px;
  box-shadow: 10px 0px 15px #73737316;
  background-color: white;

  @media (width <= 1440px) {
    width: 20%;
  }
  @media (991px < width <= 1199px) {
    width: 30%;
  }
  h1 {
    padding: 30px;
    margin-top: 20%;
    font-size: 2em;
    color: #9e6efe;
  }

  ul {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: auto;
    list-style: none;
    gap: 10px;
  }
  button {
    width: 80%;
    outline: none;
    appearance: none;
    border: none;
    cursor: pointer;
    font: inherit;
    color: inherit;
    background: none;
  }
  li {
    display: flex;
    align-items: center;
    width: 100%;
    height: 5vh;
    padding: 10px;
    font-size: 1.2em;
    font-weight: 550;

    &:hover {
      border-radius: 5px;
      color: #9e6efe;
      background-color: #73737311;
    }
  }
`;

export const OptionsWrapped = styled.div`
  margin-top: 15px;
  ul {
    gap: 0px;
    border-top: 2px solid #73737318;
  }
  li {
    margin-top: 15px;
  }
  li:last-child {
    &:hover {
      color: #f03d3d;
    }
  }
`;

export const Icon = styled(FontAwesomeIcon)`
  margin-right: 5%;
  font-size: 20px;
`;
