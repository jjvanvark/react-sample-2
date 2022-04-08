import styled from "styled-components";
import fontParser from "../utils/fontParser";
import { rem } from "polished";
import { useTranslation } from "react-i18next";
import CtaButton from "../components/CtaButton";
import Logo from "../components/Logo";
import LanguageSwitch from "../components/LanguageSwitch";
import Flag from "../assets/flag.png";

const StyledHome = styled.div`
  ${({ theme }) =>
    `
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: ${theme.padding.inner} ${theme.padding.inner} 0;

    @media only screen and (min-width: ${theme.breakPoint}px) {
      padding: ${rem(48)} ${rem(48)} 0;
    }
`}
`;

const StyledLogo = styled(Logo)`
  ${({ theme }) => `
  width: ${rem(136)};

  @media only screen and (min-width: ${theme.breakPoint}px) {
    width: ${rem(208)}
  }
`}
`;

const StyledContent = styled.div`
  ${({ theme }) => `
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;

    @media only screen and (min-width: ${theme.breakPoint}px) {
      width: 50%;
    }
`}
`;

const StyledHeadLine = styled.h3`
  ${({ theme }) => `
    ${fontParser("headline")};
    margin-bottom: ${rem(8)};
    letter-spacing: 0.01em;
    text-transform: uppercase;

    @media only screen and (min-width: ${theme.breakPoint}px) {
      margin-bottom: ${rem(16)};
    }
`}
`;

const StyledTitle = styled.h1`
  ${({ theme }) => `
    ${fontParser("largeTitle")};
    margin-bottom: ${rem(8)};

    @media only screen and (min-width: ${theme.breakPoint}px) {
      margin-bottom: ${rem(24)};
    }
`}
`;

const StyledText = styled.p`
  ${({ theme }) => `
    ${fontParser("title3")};
    margin-bottom: ${rem(16)};
    color: ${theme.color.key.default};

    @media only screen and (min-width: ${theme.breakPoint}px) {
      margin-bottom: ${rem(32)};
    }
`}
`;

const StyledLanguageSwitch = styled(LanguageSwitch)`
  display: flex;
  margin-bottom: ${rem(16)};
`;

const StyledHomeFooter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledCtaButton = styled(CtaButton)`
  ${({ theme }) => `
  font-size: ${rem(12)};

  @media only screen and (min-width: ${theme.breakPoint}px) {
    font-size: ${rem(16)};
  }
  `}
`;

const StyledFlag = styled.img`
  ${({ theme }) => `
    width: ${rem(72)};

    @media only screen and (min-width: ${theme.breakPoint}px) {
      width: ${rem(120)}
    }
`}
`;

const Home = () => {
  const { t } = useTranslation();

  return (
    <StyledHome>
      <StyledLogo />
      <StyledContent>
        <StyledHeadLine>{t("home.subtitle")}</StyledHeadLine>
        <StyledTitle>{t("home.title")}</StyledTitle>
        <StyledText>{t("home.content")}</StyledText>
        <StyledCtaButton direction="right" to="/map">
          {t("home.link")}
        </StyledCtaButton>
      </StyledContent>
      <StyledHomeFooter>
        <StyledLanguageSwitch />
        <StyledFlag src={Flag} alt="Zeeuws Archief" />
      </StyledHomeFooter>
    </StyledHome>
  );
};

export default Home;
