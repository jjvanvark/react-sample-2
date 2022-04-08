import styled from "styled-components";
import { rem } from "polished";

const StyledPageContent = styled.div`
  ${({ theme }) =>
    `
    margin: 0 auto;

    @media only screen and (min-width: ${theme.breakPoint}px) {
       max-width: ${rem(798)};
    }
    `}
`;

const PageContent = ({ children, className = "" }) => {
  return (
    <StyledPageContent className={className}>{children}</StyledPageContent>
  );
};

export default PageContent;
