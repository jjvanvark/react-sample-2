import theme from "../theme";

const parse = ({
  fontFamily = null,
  fontWeight = null,
  size = null,
  lineHeight = null,
  letterSpacing = null,
  fontStyle = null,
}) => {
  let result = "";

  if (!!fontFamily) {
    result += `font-family: ${fontFamily};`;
  }

  if (!!fontWeight) {
    result += `font-weight: ${fontWeight};`;
  }

  if (!!size) {
    result += `font-size: ${size};`;
  }

  if (!!lineHeight) {
    result += `line-height: ${lineHeight};`;
  }

  if (!!letterSpacing) {
    result += `letter-spacing: ${letterSpacing};`;
  }

  if (!!fontStyle) {
    result += `font-style: ${fontStyle};`;
  }

  return result;
};

const parser = (id) => {
  const font = theme.fonts[id];

  if (font === undefined) {
    return "";
  }

  const large = parse(font.large);

  if (large === "") {
    return parse(font.small);
  } else {
    const result = `
      ${parse(font.small)}
      @media screen and (min-width: ${theme.breakPoint}px) {
          ${large}
      }
      `;
    return result;
  }
};

export default parser;
