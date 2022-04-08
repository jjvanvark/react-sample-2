import styled from "styled-components";
import { useState } from "../hooks/useReducer";
import { fromRatio } from "./Timeline";
import { rem } from "polished";
import { useTranslation } from "react-i18next";
import fontParser from "../utils/fontParser";

const StyledPanel = styled.div`
  ${({ theme }) => `
      padding: ${rem(8)} ${rem(16)};
      display: flex;
      flex-direction: column;
      justify-content: center;
      background-color: ${theme.color.date.xLight};
      border: ${rem(1)} solid ${theme.color.date.default};
      @media only screen and (min-width: ${theme.breakPoint}px) {
        padding: ${rem(24)} ${rem(16)};
      }
    `}
`;

const StyledTitle = styled.span`
  ${({ theme }) => `
  font-size: ${rem(10)};
  line-height: ${rem(16)};
  color: ${theme.color.key.dark};
  `}
`;

const StyledYear = styled.span`
  ${({ theme }) => `
  ${fontParser("title1")}
  color: ${theme.color.date.default};
  text-align: center;
  `}
`;

const YearLabel = ({ className }) => {
  const { time } = useState();
  const { t } = useTranslation();

  return (
    <StyledPanel className={className}>
      <StyledTitle>{t("map.year.title")}</StyledTitle>
      <StyledYear>{fromRatio(time)}</StyledYear>
    </StyledPanel>
  );
};

export default YearLabel;
