import styled from "styled-components";
import { rem } from "polished";
import { useTranslation } from "react-i18next";

const StyledLanguageSwitch = styled.div`
  ${({ theme }) =>
    `
    display: none;

    button{
        all: unset;
        cursor: pointer;
        padding: ${rem(2)};
        position: relative;
        &:focus{
            outline: black 5px auto;
        }
        &.active{
            font-weight: 700;
        }

        &:first-child{
            margin-right: ${rem(2)};
            &:after{
                top: 50%;
                transform: translateY(-50%);
                position: absolute;
                font-weight: 700;
                content: '|';
                margin: 0 ${rem(2)}
            }

            + button{
                margin-left: ${rem(4)};
            }
        }
    }
    

    @media only screen and (min-width: ${theme.breakPoint}px) {
       display: flex;
       align-items: center;
       justify-content: center;
    }

    `}
`;

const LanguageSwitch = ({ className }) => {
  const { i18n } = useTranslation();
  const handleNL = () => i18n.changeLanguage("nl");
  const handleEN = () => i18n.changeLanguage("en");

  return (
    <StyledLanguageSwitch className={className}>
      <button
        onClick={handleNL}
        className={i18n.language === "nl" ? "active" : ""}
      >
        NL
      </button>
      <button
        onClick={handleEN}
        className={i18n.language === "en" ? "active" : ""}
      >
        EN
      </button>
    </StyledLanguageSwitch>
  );
};

export default LanguageSwitch;
