import styled from "styled-components";
import { rem } from "polished";
import fontParser from "../utils/fontParser";

const StyledContainer = styled.div`
  ${({ theme }) =>
    `
    padding: ${rem(16)} ${rem(24)};
    display: flex;
    flex-wrap: wrap;


    @media only screen and (min-width: ${theme.breakPoint}px) {
      padding: ${rem(24)}; 
     }
  `}
`;

export const StyledColumn = styled.div`
  ${({ theme }) => `
  flex: 0 0 auto;
  width: 50%;
  margin-bottom: ${rem(16)};

  &:nth-last-child(-n+2){
    margin-bottom: 0;
  }

  @media only screen and (min-width: ${theme.breakPoint}px) {
    margin-bottom: ${rem(24)}; 
  }
`}
`;

export const StyledLabel = styled.span`
  ${({ theme }) => `
  ${fontParser("caption2")}
  display: block;
  color: ${theme.color.key.default};
  text-transform: uppercase;
  `}
`;

export const StyledValue = styled.span`
  ${fontParser("title6")}
  display: block;
`;

const CardBodyContent = ({ children }) => {
  return <StyledContainer>{children}</StyledContainer>;
};

export default CardBodyContent;
