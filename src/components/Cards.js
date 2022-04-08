import styled from "styled-components";
import { rem } from "polished";
import Icon from "../components/Icons";
import fontParser from "../utils/fontParser";

const StyledCard = styled.article`
  ${({ theme }) =>
    `
    border: ${rem(1)} solid ${theme.color.key.dark};
`}
`;

const StyledCardHeader = styled.header`
  ${({ theme }) =>
    `
    background-color: ${theme.color.background.light};
    border-bottom: ${rem(1)} solid ${theme.color.key.dark};
    color: ${theme.color.key.dark};
    display: flex;
    padding: ${rem(16)} ${rem(12)};

    .crew & {
        color: ${theme.color.destination.dark};
    }
    .location &,
    .destination &  {
        color: ${theme.color.location.dark};
    }
    .date & {
        color: ${theme.color.date.dark};
    }
    .enslaved & {
        background-color: ${theme.color.humanTrafficking.default};
    }

    @media only screen and (min-width: ${theme.breakPoint}px) {
        padding: ${rem(16)} ${rem(24)};
     }
`}
`;

const StyledCardHeaderSeparator = styled.span`
  ${({ theme }) =>
    `
    width: 1px;
    background-color: ${theme.color.background.dark};
    margin: 0 ${rem(12)} 0 ${rem(10)};
    display: flex;

    @media only screen and (min-width: ${theme.breakPoint}px) {
        margin: 0 ${rem(24)};
    }
 `}
`;

const StyledTitle = styled.h3`
  ${fontParser("title3")};
  align-self: center;
  color: inherit;
  font-weight: 400;
`;

const StyledIconWrapper = styled.div`
  ${({ theme }) =>
    `
    background-color: ${theme.color.background.xLight};
    border: ${rem(2)} solid ${theme.color.key.dark};
    border-radius: 50%;
    height: ${rem(32)};
    width: ${rem(32)};
    display: flex;
    align-items: center;
    justify-content: center;
    padding: ${rem(6)};

    .crew & {
        background-color: ${theme.color.destination.xLight};
        border-color: ${theme.color.destination.dark};
    }
    .location &,
    .destination & {
        background-color: ${theme.color.location.xLight};
        border-color: ${theme.color.location.dark};
    }
    .date & {
        background-color: ${theme.color.date.xLight};
        border-color: ${theme.color.date.dark};
    }
    .enslaved & {
        background-color: ${theme.color.humanTrafficking.light};
        border-color: ${theme.color.key.dark};
    }

    @media only screen and (min-width: ${theme.breakPoint}px) {
        height: ${rem(48)};
        width: ${rem(48)};
        padding: ${rem(12)};
     }
`}
`;

const StyledCardBody = styled.div`
  ${({ theme }) =>
    `
    background-color: ${theme.color.key.white};
`}
`;

const Card = ({
  title = "",
  icon = null,
  category = "",
  children = null,
  className = "",
}) => {
  return (
    <StyledCard className={`${className} ${category}`}>
      <StyledCardHeader>
        <StyledIconWrapper>
          <Icon id={icon} />
        </StyledIconWrapper>
        <StyledCardHeaderSeparator></StyledCardHeaderSeparator>
        <StyledTitle>{title}</StyledTitle>
      </StyledCardHeader>
      <StyledCardBody>{children}</StyledCardBody>
    </StyledCard>
  );
};

export default Card;
