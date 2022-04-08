import styled from "styled-components";
import { rem } from "polished";

const StyledPanel = styled.section`
  ${({ theme }) => `
    position: fixed;
    top: 0;
    bottom: ${rem(56)};
    left: 0;
    width: 100%;
    @media only screen and (min-width: ${theme.breakPoint}px) {
        bottom: 0;
        width: calc(100% - ${rem(92)});
        left: ${rem(92)}};
        transition: all ${theme.transition.timing} ${theme.transition.function};
    }
    `}
`;

const StyledPageContainer = styled.div`
  ${({ theme }) => `
        position: absolute;
        top: 0; 
        bottom: 0;
        left: ${theme.padding.outer};
        right: 0;
        padding-right: ${theme.padding.outer};
        z-index: 0;
        overflow-y: scroll;
        overflow-x: hidden;
        padding-bottom: ${theme.padding.outer};
    `}
`;

const PagePanel = ({ children = null }) => {
  return (
    <StyledPanel>
      <StyledPageContainer>{children}</StyledPageContainer>
    </StyledPanel>
  );
};

export default PagePanel;
