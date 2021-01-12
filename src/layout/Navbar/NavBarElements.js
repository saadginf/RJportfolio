import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
import { Link as LinkS } from "react-scroll";
export const NavContainer = styled.div`
  background-color: #313133;
  height: 80px;
  position: fixed;
  margin-top: -80px;
  display: flex;
  position: sticky;
  top: 0;
  padding: 0 40px;
  font-size: 1rem;
  justify-content: space-between;
  align-items: center;
  z-index: 10;

  @media (max-width: 960px) {
    transition: 0.8s all ease;
  }
`;
export const Navlogo = styled(LinkR)`
  color: white;
  justify-self: flex-start;
  cursor: pointer;
  font-family: "Pacifico", cursive;
  text-decoration: none;
  font-size: 40px;
`;
export const MobileIcon = styled.div`
  cursor: pointer;

  display: flex;
  align-items: center;

  cursor: pointer;
  height: 100%;
`;

export const Navlinks = styled.div`
  display: flex;

  justify-content: space-around;
  align-items: center;
  list-style: none;
  height: 100%;

  display: none;
`;
export const NavItem = styled.div`
  display: flex;
  height: 40px;
  align-items: center;
  margin-right: 24px;
  height: "100%";
`;
export const NavA = styled(LinkS)`
  color: white;
  padding: 10px;
  margin-right: 1px;
  line-height: 16px;
  font-weight: bold;
  font-size: 25px;
  font-family: "Satisfy", cursive;
  text-decoration: none;
  height: 100%;
  cursor: pointer;
  display: flex;
  align-items: center;
  &.active {
    text-decoration: none;
    border-bottom: 3px solid green;
  }
`;
export const SideBar = styled.div`
  height: 100%;
  display: flex;
  cursor: pointer;
  align-items: center;
`;
export const NavBtn = styled.div`
  display: flex;
  align-items: center;
  @media (max-width: 960px) {
    display: none;
  }
`;
export const NavBtnLink = styled.div`
  border-radius: 50px;
  background: #01bf71;
  white-space: nowrap;
  padding: 10px 22px;
  color: #010606;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #010606;
    outline: none;
  }
`;
