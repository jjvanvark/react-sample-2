import { useState } from "../hooks/useReducer";
import styled from "styled-components";
import { rem } from "polished";
import fontParser from "../utils/fontParser";

const StyledError = styled.div`
  ${({ theme, $error }) => `
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: ${theme.color.key.white};
    z-index: 10;
    transition: all ${theme.transition.timing} ${theme.transition.function};
    opacity: ${$error ? "0" : "1"};
    visibility: ${$error ? "hidden" : "visible"};
    border: ${rem(1)} solid ${theme.color.key.dark};
    border-radius: ${rem(4)};
    width: 100%;
    max-width: ${rem(364)};
`}
`;

const StyledErrorHeader = styled.div`
  ${({ theme }) => `
    ${fontParser("title6")}
    background-color: ${theme.color.background.dark};
    border-bottom: ${rem(1)} solid ${theme.color.key.dark};
    color: ${theme.color.key.white};
    padding: ${rem(8)} ${rem(24)};
`}
`;
const StyledErrorBody = styled.div`
  ${({ theme }) => `
    padding: ${rem(8)} ${rem(24)};
    color: ${theme.color.key.default};
  `}
`;

const Error = () => {
  const { error } = useState();

  return (
    <StyledError $error={!error}>
      <StyledErrorHeader>Error</StyledErrorHeader>
      <StyledErrorBody>Something has happend</StyledErrorBody>
    </StyledError>
  );
};

export default Error;
