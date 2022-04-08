import styled from "styled-components";
import { rem } from "polished";
import { Link } from "react-router-dom";
import Icon from "./Icons";

const StyledLink = styled(Link)`
  ${({ theme }) => `
    color: ${theme.color.key.default};
    text-transform: uppercase;
    text-decoration: none;
    font-weight: 700;
    display: flex;

    &:hover {
        color: ${theme.color.key.dark};

        svg{
            color: ${theme.color.destination.dark};
        }
    }

    &.left {
        justify-content: flex-end;
        flex-direction: row-reverse;
    }
`}
`;

const StyledButton = styled.button`
  ${({ theme }) => `
    color: ${theme.color.key.default};
    text-transform: uppercase;
    text-decoration: none;
    font-weight: 700;
    display: flex;
    background-color: transparent;
    padding: 0;
    border: none;
    cursor: pointer;

    &:hover {
        color: ${theme.color.key.dark};

        svg{
            color: ${theme.color.destination.dark};
        }
    }

    &.left {
        justify-content: flex-end;
        flex-direction: row-reverse;
    }
`}
`;

const StyledIcon = styled(Icon)`
  ${({ theme }) => `
    width: ${rem(21)};
    color: ${theme.color.humanTrafficking.dark};
    margin-left: ${rem(8)};

    .left & {
        margin-left: ${rem(0)};
        margin-right: ${rem(8)};
    }

    @media only screen and (min-width: ${theme.breakPoint}px) {
        width: ${rem(24)};
    }
`}
`;

const CtaButton = ({
  direction = "right",
  to = null,
  children,
  className = "",
}) => {
  if (to === null) {
    return (
      <StyledButton
        className={`${className} ${direction}`}
        $direction={direction}
      >
        {children}
        <StyledIcon id={direction === "right" ? "ArrowRight" : "ArrowLeft"} />
      </StyledButton>
    );
  }

  return (
    <StyledLink
      to={to}
      className={`${className}  ${direction}`}
      $direction={direction}
    >
      {children}
      <StyledIcon id={direction === "right" ? "ArrowRight" : "ArrowLeft"} />
    </StyledLink>
  );
};

export default CtaButton;
