import { useTranslation } from "react-i18next";
import styled from "styled-components";
import { rem } from "polished";
import fontParser from "../utils/fontParser";

const StyledSwitch = styled.div`
  ${({ $on, theme }) => `
  width: ${rem(115)};
  height: ${rem(32)};
  display: flex;
  justify-content: space-around;
  align-items: center;
  border: ${rem(1)} solid ${theme.color.key.dark};
  background-color: ${theme.color.key.dark};
  border-radius: ${rem(16)};
  position: relative;
  overflow: hidden;
  cursor: pointer;
  &:before {
    content: '';
    background-color: ${theme.color.key.white};
    width: 50%;
    position: absolute;
    top: 0;
    bottom: 0;
    left: ${$on ? "0%" : "50%"};
    right: auto;
  }
  `}
`;
const StyledPart = styled.span`
  ${({ $on, theme }) => `
    ${fontParser("body")}
    color: ${$on ? theme.color.key.white : theme.color.key.default};
    position: relative;
    -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
    -khtml-user-select: none; /* Konqueror HTML */
    -moz-user-select: none; /* Old versions of Firefox */
    -ms-user-select: none; /* Internet Explorer/Edge */
    user-select: none;
  `}
`;

const SwitchButton = ({ onClick, on = true }) => {
  const { t } = useTranslation();

  return (
    <StyledSwitch onClick={onClick} $on={on}>
      <StyledPart $on={!on}>{t("buttons.switchOn")}</StyledPart>
      <StyledPart $on={on}>{t("buttons.switchOff")}</StyledPart>
    </StyledSwitch>
  );
};

export default SwitchButton;
