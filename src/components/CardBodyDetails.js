import styled from "styled-components";
import { rem } from "polished";

const StyledDetails = styled.div`
  ${({ theme }) => `
  background-color: ${theme.color.key.white};
  border: ${rem(1)} solid ${theme.color.key.dark};
  width: 100%;
  padding: ${rem(8)} 0;
  margin-bottom: ${rem(16)};

  @media only screen and (min-width: ${theme.breakPoint}px) {
    margin-bottom: 0;
    border-top: none;
    display: flex;
    flex-wrap: wrap;
  }
  `}
`;

export const StyledDetailsRow = styled.div`
  ${({ theme }) => `
  padding: ${rem(24)} ${rem(12)};
  border-bottom: ${rem(1)} solid ${theme.color.background.light};
  display: flex;
  flex-wrap: wrap;

  &:last-child{
    border-bottom: none;
  }

  @media only screen and (min-width: ${theme.breakPoint}px) {
    border: none;
    flex: 0 0 auto;
    width: 100%;

    &:nth-child(1){
      > div{
        padding-right: ${rem(75)};
        + div{
          padding-right: 0;
          padding-left: ${rem(75)};
        }
      }
    }

    &:nth-child(2),
    &:nth-child(3){
      width: 50%;
    }

    &:nth-child(2){
      padding-right: ${rem(6)};
    }
    &:nth-child(3){
      padding-left: ${rem(6)};
    }
  }
  `}
`;

export const StyledDetailColumn = styled.div`
  ${({ theme }) => `
  flex: 0 0 auto;
  width: 50%;

  @media only screen and (min-width: ${theme.breakPoint}px) {
    text-align: center;
  }
  `}
`;

const CardBodyDetails = ({ children }) => {
  return <StyledDetails>{children}</StyledDetails>;
};

export default CardBodyDetails;
