import styled from "styled-components";
import { rem } from "polished";
import fontParser from "../utils/fontParser";

const StyledPageHeader = styled.header`
  ${({ theme }) =>
    `
  display: flex;
  align-items: center;
  margin-bottom: ${rem(20)};
  border-bottom: ${rem(1)} solid ${theme.color.key.dark};

  @media only screen and (min-width: ${theme.breakPoint}px) {
    margin-bottom: ${rem(16)};
  }
  `}
`;

const StyledTitle = styled.h1`
  ${fontParser("title1")};
`;

const OverviewHeader = ({ title = "", children = null }) => {
  return (
    <StyledPageHeader>
      <StyledTitle>{title}</StyledTitle>
      {children}
    </StyledPageHeader>
  );
};

export default OverviewHeader;
