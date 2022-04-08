import styled from "styled-components";
import { rem } from "polished";
import fontParser from "../utils/fontParser";

const StyledNavigation = styled.nav`
  display: flex;
`;

const StyledList = styled.ul`
  display: flex;
  list-style: none;
  padding: 0;
  margin-left: ${rem(44)};
`;

export const StyledListItem = styled.li`
  ${({ theme, $active }) => `
    margin-right: ${rem(24)};
    padding: ${rem(6)} ${rem(16)};
    font-size: ${rem(14)};
    line-height: ${rem(16)};
    background-color: ${$active ? theme.color.destination.dark : "transparent"};
    color: ${$active ? theme.color.key.white : theme.color.key.dark};
`}
`;

const SubNavigation = ({ children = null }) => {
  return (
    <StyledNavigation>
      <StyledList>{children}</StyledList>
    </StyledNavigation>
  );
};

export default SubNavigation;
