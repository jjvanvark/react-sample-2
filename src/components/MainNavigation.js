import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { rem } from "polished";
import { useLocation } from "react-router-dom";
import Icon from "../components/Icons";
import Logo from "../components/Logo";
import LanguageSwitch from "./LanguageSwitch";

const StyledNav = styled.nav`
  ${({ theme }) =>
    `
    background-color: ${theme.color.key.white};
    width: 100%;
    position: fixed;
    bottom: 0;
    z-index: 10;

    ul{
        padding: 0;
        list-style: none;
        display: flex;
        flex-direction: row;
    }
    li{
        flex: 1 0 0%;
        min-width: 0;
    }
    li:first-child{
        display: none;
    }

    @media only screen and (min-width: ${theme.breakPoint}px) {
        width: ${rem(92)};
        min-height: 100vh;
        position: relative;
        padding: ${rem(24)} 0;
        display: flex;
        flex-direction: column;
        ul{
            flex-direction: column;
        }

        li:first-child{
            display: block;
        }

        > div {
          margin-top: auto;
        }
    }
`}
`;

const StyledNavLink = styled(NavLink)`
  ${({ theme }) => `
    text-decoration: none;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${theme.color.key.dark};
    box-shadow: 0px 1px 0px 0px ${theme.color.key.light} inset;
    height: 100%;
    height: ${rem(56)};

    svg{
        width: 100%;
        height: 100%;
        max-width: ${rem(26)};
    }

    &:hover{
        background-color: ${theme.color.background.light};
    }
    &.active {
        box-shadow: 0px 1px 0px 0px ${theme.color.key.dark} inset;
        background-color: ${theme.color.background.light};
    }
    &.logo{
      padding: 0 0 ${rem(20)};
      &:hover{
        background-color: transparent;
      }
      svg{
        width: ${rem(70)};
        height: auto;
        max-width: none;
      }
    }
  
    @media only screen and (min-width: ${theme.breakPoint}px) {
        height: 100%;
        box-shadow: none;
        padding: ${rem(20)} ${rem(32)};

        &.active {
            box-shadow: -1px 0px 0px 0px ${theme.color.key.dark} inset;
        }
    }
`}
`;

const Nav = () => {
  let { pathname } = useLocation();

  if (pathname === "/" || pathname === "/404") {
    return null;
  }

  return (
    <StyledNav>
      <ul>
        <li>
          <StyledNavLink to="/" className={"logo"}>
            <Logo />
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/map">
            <Icon id="Map" />
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/ships">
            <Icon id="Ship" />
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/people">
            <Icon id="Person" />
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/information">
            <Icon id="Data" />
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/explain">
            <Icon id="Explain" />
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/blog">
            <Icon id="Blog" />
          </StyledNavLink>
        </li>
      </ul>
      <LanguageSwitch />
    </StyledNav>
  );
};

export default Nav;
