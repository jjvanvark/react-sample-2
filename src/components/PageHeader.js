import styled from "styled-components";
import { rem } from "polished";
import fontParser from "../utils/fontParser";

export const StyledPageHeader = styled.header`
  ${({ theme }) =>
    `
  display: flex;
  align-items: center;
  padding-bottom: ${rem(16)};
  padding-top: ${rem(18)};
  margin-bottom: ${rem(20)};
  border-bottom: ${rem(1)} solid ${theme.color.key.dark};

  @media only screen and (min-width: ${theme.breakPoint}px) {
    margin-bottom: ${rem(16)};
    padding-bottom: ${rem(8)};
    padding-top: ${rem(32)};
  }
  `}
`;

const StyledTitle = styled.h1`
  ${fontParser("title1")};
`;

const PageHeader = ({ title = "", children = null }) => {
  return (
    <StyledPageHeader>
      <StyledTitle>{title}</StyledTitle>
      {children}
    </StyledPageHeader>
  );
};

export default PageHeader;
