import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const NavBar = styled.div`
    background-color: white;
    width: 15%;
    border-radius: 10px;
    box-shadow: 10px 0px  15px #73737316;
    
    @media (width <= 1440px) {
      width: 20%;
    }
    @media (991px < width <= 1199px) {
      width: 30%;
      height: 150vh;
    }
    @media (767px < width <= 991px) {
      width: 50%;
    }

  h1 {
    padding: 30px;
    font-size: 2.5em;
    color: #9e6efe;
  }

  ul {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    width: auto;
    list-style: none;
  }
  button {
    width: 80%;
    background: none;
    border: none;
    font: inherit;
    color: inherit;
    cursor: pointer;
    outline: none;
    appearance: none;
  }
  li {
    display: flex;
    padding: 10px;
    align-items: center;
    width: 100%;
    height: 5vh;
    font-size: 1.2em;
    font-weight: 550;
   

    &:hover {
      color: #9e6efe;
      background-color: #73737311;
      border-radius: 5px;
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