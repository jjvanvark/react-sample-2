import styled from "styled-components";
import { rem } from "polished";
import fontParser from "../utils/fontParser";
import Icon from "./Icons";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export const StyledListItemContainer = styled.li`
  ${({ theme }) =>
    `
    list-style: none;
    flex: 0 0 auto;
    width: 100%;
    padding: 0 ${rem(24)};
    margin-bottom: ${rem(16)};

    @media only screen and (min-width: 720px) {
      margin-bottom: ${rem(24)};
      width: 50%;
  }

    @media only screen and (min-width: ${theme.breakPoint}px) {
        margin-bottom: ${rem(24)};
        width: 33.33333333%;
    }

    @media only screen and (min-width: 1200}px) {
      margin-bottom: ${rem(24)};
      width: 25%;
  }
`}
`;

export const StyledListItem = styled(Link)`
  ${({ theme, $isDetailOpen }) =>
    `
    width: 100%;
    border: ${rem(1)} solid ${theme.color.key.dark};
    box-sizing: border-box;
    display: block;
    text-decoration: none;
    color: ${theme.color.key.dark};
    cursor: pointer;
    position: relative;

    ${
      $isDetailOpen
        ? `
        &:after{
          content: '';
          background-color: ${theme.color.key.white};
          opacity: 0.4;
          left: 0;
          right: 0;
          top: 0;
          bottom: 0;
          position: absolute;
          z-index: 1;
        }
        `
        : ``
    }
`}
`;

export const StyledItemHeader = styled.div`
  ${({ theme }) =>
    `
    display: flex;
    align-items: center;
    background-color: ${theme.color.background.light};
    border-bottom: ${rem(1)} solid ${theme.color.key.dark};
    height: ${rem(26)};
`}
`;

export const StyledItemHeaderTitle = styled.h3`
  ${({ theme }) =>
    `
  ${fontParser("caption2")};
  padding: 0 0 0 ${rem(16)};
  text-transform: uppercase;

  @media only screen and (min-width: ${theme.breakPoint}px) {
    padding: 0 ${rem(24)};
}

`}
`;

export const StyledItemNumberHightlighted = styled.div`
  ${({ theme }) => `
    color: ${theme.color.key.white};
    background-color: ${theme.color.destination.dark};
    font-weight: bold;
    margin-left: auto;
    height: 100%;
    display: flex;
    align-items: center;
    padding: 0 ${rem(8)};
`}
`;

export const StyledItemBody = styled.div`
  ${({ theme }) =>
    `
    padding: ${rem(32)} ${rem(16)};
    background-color: ${theme.color.key.white};
    position: relative;
    min-height: ${rem(112)};
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media only screen and (min-width: ${theme.breakPoint}px) {
        padding: ${rem(32)} ${rem(24)};
        min-height: ${rem(136)};
    }
`}
`;

export const StyledName = styled.h4`
  ${({ theme }) => `
    ${fontParser("title4")};
    color:  ${theme.color.key.dark};
    z-index: 1;
`}
`;

export const StyledIcon = styled(Icon)`
  ${({ theme }) => `
    height: ${rem(100)};
    position: absolute;
    right: ${rem(16)};
    top: 50%;
    transform: translateY(-50%);
    color: ${theme.color.background.default};
    `}
`;

const OverviewListItem = ({ item, isDetailOpen }) => {
  const { t } = useTranslation();

  return (
    <StyledListItemContainer>
      <StyledListItem to={item.id} $isDetailOpen={isDetailOpen}>
        <StyledItemHeader>
          <StyledItemHeaderTitle>
            {t("ships.shipType")} {item.scheepstype.naam}
          </StyledItemHeaderTitle>
          <StyledItemNumberHightlighted>
            {item.aantal_reizen_mcc} {t("ships.travelLabel")}
          </StyledItemNumberHightlighted>
        </StyledItemHeader>
        <StyledItemBody>
          <StyledName>{item.naam}</StyledName>
          <StyledIcon id={item.scheepstype.naam} />
          ICONEN HIER
        </StyledItemBody>
      </StyledListItem>
    </StyledListItemContainer>
  );
};

export default OverviewListItem;
