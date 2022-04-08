import styled from "styled-components";
import { rem } from "polished";

// icons

const Close = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      x="15.6772"
      y="14.3932"
      width="1.5"
      height="19.6479"
      transform="rotate(135 15.6772 14.3932)"
      fill="currentColor"
    />
    <rect
      x="1.78418"
      y="15.3405"
      width="1.5"
      height="19.6479"
      transform="rotate(-135 1.78418 15.3405)"
      fill="currentColor"
    />
  </svg>
);

const Min = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 14 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      x="13.3999"
      y="6.57336"
      width="1.5"
      height="12.8"
      transform="rotate(90 13.3999 6.57336)"
      fill="currentColor"
    />
  </svg>
);

const Pause = () => (
  <svg
    width="7"
    height="12"
    viewBox="0 0 7 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      x="0.5"
      y="0.166626"
      width="1.5"
      height="11.6667"
      fill="currentColor"
    />
    <rect
      x="4.6665"
      y="0.166626"
      width="1.5"
      height="11.6667"
      fill="currentColor"
    />
  </svg>
);

const Play = () => (
  <svg
    width="8"
    height="14"
    viewBox="0 0 8 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M8 7L0.5 13.0622L0.500001 0.937822L8 7Z" fill="currentColor" />
  </svg>
);

const Plus = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 14 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      x="6.57312"
      y="0.599976"
      width="1.5"
      height="12.8"
      fill="currentColor"
    />
    <rect
      x="13.3999"
      y="6.57336"
      width="1.5"
      height="12.8"
      transform="rotate(90 13.3999 6.57336)"
      fill="currentColor"
    />
  </svg>
);

const Speed = () => (
  <svg
    width="15"
    height="10"
    viewBox="0 0 15 10"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M6.03902 9.33337H0.0507412V8.07361L2.20113 5.89978C2.83785 5.24744 3.25387 4.79626 3.44918 4.54626C3.64449 4.29236 3.78512 4.05798 3.87105 3.84314C3.95699 3.6283 3.99996 3.40564 3.99996 3.17517C3.99996 2.83142 3.90426 2.57556 3.71285 2.40759C3.52535 2.23962 3.2734 2.15564 2.95699 2.15564C2.62496 2.15564 2.30269 2.23181 1.99019 2.38416C1.67769 2.5365 1.35152 2.7533 1.01168 3.03455L0.0273037 1.86853C0.449179 1.50916 0.798788 1.25525 1.07613 1.10681C1.35348 0.958374 1.65621 0.845093 1.98433 0.766968C2.31246 0.684937 2.67965 0.643921 3.0859 0.643921C3.62105 0.643921 4.09371 0.741577 4.50387 0.93689C4.91402 1.1322 5.23238 1.40564 5.45894 1.7572C5.68551 2.10876 5.79879 2.51111 5.79879 2.96423C5.79879 3.35876 5.72848 3.72986 5.58785 4.07751C5.45113 4.42126 5.23629 4.77478 4.94332 5.13806C4.65426 5.50134 4.14254 6.01892 3.40816 6.6908L2.3066 7.72791V7.80994H6.03902V9.33337ZM14.4296 9.33337H12.3554L10.3632 6.09314L8.37105 9.33337H6.42574L9.26754 4.91541L6.60738 0.766968H8.61129L10.457 3.849L12.2675 0.766968H14.2246L11.5351 5.01501L14.4296 9.33337Z"
      fill="currentColor"
    />
  </svg>
);

const Filter = () => (
  <svg
    width="19"
    height="20"
    viewBox="0 0 19 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      x="3"
      y="19.5"
      width="1.2"
      height="19"
      transform="rotate(-180 3 19.5)"
      fill="currentColor"
    />
    <rect
      x="10"
      y="19.5"
      width="1.2"
      height="19"
      transform="rotate(-180 10 19.5)"
      fill="currentColor"
    />
    <rect
      x="17"
      y="19.5"
      width="1.2"
      height="19"
      transform="rotate(-180 17 19.5)"
      fill="currentColor"
    />
    <circle
      cx="9.5"
      cy="14.5"
      r="1.9"
      transform="rotate(90 9.5 14.5)"
      fill="#333333"
      stroke="currentColor"
      strokeWidth="1.2"
    />
    <circle
      cx="2.5"
      cy="6.5"
      r="1.9"
      transform="rotate(90 2.5 6.5)"
      fill="#333333"
      stroke="currentColor"
      strokeWidth="1.2"
    />
    <circle
      cx="16.5"
      cy="8.5"
      r="1.9"
      transform="rotate(90 16.5 8.5)"
      fill="#333333"
      stroke="currentColor"
      strokeWidth="1.2"
    />
  </svg>
);

const StyledButton = styled.button`
  ${({ theme, $isSmall = false }) => `
    background-color: ${theme.color.key.dark};
    color: ${theme.color.key.white};
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    width: ${$isSmall ? rem(32) : rem(40)};
    height: ${$isSmall ? rem(32) : rem(40)};
    border: 0;

    &:hover {
        background-color: ${theme.color.key.default};
    }
  `}
`;

const Icon = ({ id }) => {
  switch (id) {
    case "close":
      return <Close />;
    case "min":
      return <Min />;
    case "pause":
      return <Pause />;
    case "play":
      return <Play />;
    case "plus":
      return <Plus />;
    case "speed":
      return <Speed />;
    case "filter":
      return <Filter />;
    default:
      return null;
  }
};

const RoundButton = ({ id, className, style, onClick }) => {
  return (
    <StyledButton
      className={className}
      style={style}
      onClick={onClick}
      $isSmall={id === "plus" || id === "min"}
    >
      <Icon id={id} />
    </StyledButton>
  );
};

export default RoundButton;
