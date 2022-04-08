import styled from "styled-components";
import { rem } from "polished";
import CtaButton from "./CtaButton";
import fontParser from "../utils/fontParser";
import { useTranslation } from "react-i18next";
import { StyledPageHeader } from "./PageHeader";

const StyledTitle = styled.h1`
  ${fontParser("title1")};
  display: none;

  ${({ theme }) => `
  @media only screen and (min-width: ${theme.breakPoint}px) {
    display: inline-block;
  }
  `}
`;

const StyledCtaButton = styled(CtaButton)`
  ${({ theme }) => `
  svg{
    min-width: ${rem(21)};
  }

  @media only screen and (min-width: ${theme.breakPoint}px) {
    display: none;
  }
`}
`;

const PageHeader = ({ title = "", children = null }) => {
  const { t } = useTranslation();

  return (
    <StyledPageHeader>
      <StyledTitle>{title}</StyledTitle>
      <StyledCtaButton to={"/blog"} direction="left">
        {t("buttons.return")}
      </StyledCtaButton>
      {children}
    </StyledPageHeader>
  );
};

export default PageHeader;
