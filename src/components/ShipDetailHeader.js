import Icon from "./Icons";
import styled from "styled-components";
import { rem } from "polished";
import fontParser from "../utils/fontParser";
import { useTranslation } from "react-i18next";

const StyledDetailHeader = styled.div`
  ${({ theme }) => `
    color: ${theme.color.key.white};
    background-color: ${theme.color.destination.dark};
    padding: ${rem(22)} ${rem(16)};
    display: flex;
    border: ${rem(1)} solid ${theme.color.key.dark};
    height: ${rem(96)};
    position: relative;

    @media only screen and (min-width: ${theme.breakPoint}px) {
      min-height: ${rem(216)};
      padding: ${rem(24)} ${rem(16)} 0;
      justify-content: center;
   }
`}
`;

const StyledIconWrapper = styled.div`
  ${({ theme }) => `
    background-color: transparent;
    border-radius: 50%;
    border: ${rem(2)} solid ${theme.color.key.white};
    width: ${rem(40)};
    height: ${rem(40)};
    padding: ${rem(4)};
    align-self: center;

    @media only screen and (min-width: ${theme.breakPoint}px) {
      width: ${rem(180)};
      height: ${rem(180)};
      position: absolute;
      top: calc(100% - 90px);
      left: 50%;
      transform: translateX(-50%);
      background-color: ${theme.color.destination.xLight};
      border: ${rem(4)} solid ${theme.color.destination.dark};
      padding: ${rem(22)};
   }
    `}
`;

const StyledIcon = styled(Icon)`
  ${({ theme }) => `
    color: ${theme.color.key.white};
    width: 100%;
    height: 100%;

    @media only screen and (min-width: ${theme.breakPoint}px) {
     color:  ${theme.color.destination.dark};
   }
    `}
`;

const StyledDetailHeaderSeparator = styled.span`
  ${({ theme }) =>
    `
    width: 1px;
    background-color: ${theme.color.key.white};
    margin: 0 ${rem(12)};
    display: flex;

    @media only screen and (min-width: ${theme.breakPoint}px) {
       display: none;
    }
 `}
`;

const StyledDetailHeaderContent = styled.div`
  ${({ theme }) =>
    `
    display: flex;
    flex-direction: column;

    @media only screen and (min-width: ${theme.breakPoint}px) {
      align-items: center;
    }
 `}
`;

const StyledHeaderTopTitle = styled.h3`
  ${fontParser("title5")}
  font-weight: 400;
`;

const StyledHeaderTitle = styled.h2`
  ${fontParser("title1")}
`;

const StyledArchiveLink = styled.a`
  ${fontParser("archive")}
  display: flex;
  align-items: center;
  text-decoration: underline;

  svg {
    width: ${rem(8)};
    height: ${rem(8)};
    margin-right: ${rem(4)};
  }
`;

const DetailHeader = ({ data }) => {
  const { t } = useTranslation();

  return (
    <StyledDetailHeader>
      <StyledIconWrapper>
        <StyledIcon id={data.scheepstype.naam} />
      </StyledIconWrapper>
      <StyledDetailHeaderSeparator></StyledDetailHeaderSeparator>
      <StyledDetailHeaderContent>
        <StyledHeaderTopTitle>
          {t("ships.shipType")} {data.scheepstype.naam}
        </StyledHeaderTopTitle>
        <StyledHeaderTitle>{data.naam}</StyledHeaderTitle>
        <StyledArchiveLink>
          <Icon id={"Link"} />
          {t("shipDetail.archiveLink")}
        </StyledArchiveLink>
      </StyledDetailHeaderContent>
    </StyledDetailHeader>
  );
};

export default DetailHeader;
