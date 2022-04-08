import styled from "styled-components";
import { rem } from "polished";
import fontParser from "../utils/fontParser";
import { useTranslation } from "react-i18next";
import CtaButton from "../components/CtaButton";
import { Link } from "react-router-dom";
import parse from "html-react-parser";

const StyledBlogItem = styled(Link)`
  ${({ theme }) =>
    `
    margin-bottom: ${rem(24)};
    border: ${rem(1)} solid ${theme.color.key.dark};
    display: flex;
    flex-direction: column;
    text-decoration: none;

    @media only screen and (min-width: ${theme.breakPoint}px) {
        margin-bottom: ${rem(12)}; 
        flex-direction: row;
    }
`}
`;

const StyledImageWrapper = styled.div`
  ${({ theme }) =>
    `
    padding: ${rem(5)} ${rem(6)};
    position: relative;
    background-color: ${theme.color.key.white};

    &::before {
        display: block;
        content: '';
        position: relative;
        padding-top: calc(100% / 3);
    }

    @media only screen and (min-width: ${theme.breakPoint}px) {
        width: ${rem(232)};
        min-height: ${rem(255)};
    }
`}
`;

const StyledCategoryWrapper = styled.div`
  ${({ theme }) =>
    `
  position: absolute;
  top: ${rem(5)};
  left: ${rem(6)};
  border: ${rem(1)} solid ${theme.color.key.dark};
  background-color: ${theme.color.destination.dark};
  color: ${theme.color.key.white};
  text-transform: uppercase;
  font-weight: bold;
  padding: ${rem(1)} ${rem(8)};
`}
`;

const StyledCategory = styled.span`
  font-size: ${rem(10)};
  line-height: ${rem(16)};
  &:after {
    margin: 0 ${rem(1)};
    content: "|";
  }

  &:last-child {
    &:after {
      content: none;
    }
  }
`;

const StyledImage = styled.img`
  top: ${rem(5)};
  bottom: ${rem(5)};
  left: ${rem(6)};
  right: ${rem(6)};
  object-fit: cover;
  position: absolute;
  vertical-align: bottom;
  width: calc(100% - (6px * 2));
  height: calc(100% - (5px * 2));
`;

const StyledContentWrapper = styled.div`
  ${({ theme }) =>
    `
    position: relative;
    color: ${theme.color.key.dark};

    @media only screen and (min-width: ${theme.breakPoint}px) {
        width: calc(100% - 220px);
        display: flex;
        flex-direction: column;
        border-left: ${rem(1)} solid ${theme.color.key.dark};
    }
`}
`;

const StyledTitle = styled.div`
  ${({ theme }) =>
    `
    ${fontParser("title3")};
    background-color: ${theme.color.destination.dark};
    border-top: ${rem(1)} solid ${theme.color.key.dark};
    border-bottom: ${rem(1)} solid ${theme.color.key.dark};
    color: ${theme.color.key.white};
    padding: ${rem(8)} ${rem(16)};

    @media only screen and (min-width: ${theme.breakPoint}px) {
        border-top: none;
        height: ${rem(87)};
        display: flex;
        align-items: center;
        padding: ${rem(8)} ${rem(24)};
    }

`}
`;

const StyledContent = styled.div`
  ${({ theme }) =>
    `
    background-color: ${theme.color.key.white};
    padding: ${rem(32)} ${rem(16)};
    position: relative;
    color: ${theme.color.key.dark};

    @media only screen and (min-width: ${theme.breakPoint}px) {
        padding: ${rem(16)} ${rem(24)};
        flex-grow: 1;
    }
`}
`;

const StyledDate = styled.div`
  ${({ theme }) =>
    `
  position: absolute;
  bottom: 0;
  right: 0;
  border: ${rem(1)} solid ${theme.color.key.dark};
  border-bottom: none;
  border-right: none;
  background-color: ${theme.color.background.xLight};
  text-transform: uppercase;
  font-weight: bold;
  padding: ${rem(1)} ${rem(8)};
  height: ${rem(34)};
  display: flex;
  align-items: center;
`}
`;

const StyledCtaButton = styled(CtaButton)`
  ${({ theme }) =>
    `
    margin-top: ${rem(16)};

    svg {
        position: relative;
        top: ${rem(3)};
    }

    @media only screen and (min-width: ${theme.breakPoint}px) {
        svg{
            top: ${rem(2)};
        }
    }
`}
`;

const BlogItem = ({ blog }) => {
  const { t } = useTranslation();

  return (
    <StyledBlogItem to={blog.translations[0].slug}>
      <StyledImageWrapper>
        <StyledImage
          src={`${process.env.REACT_APP_HOST}/assets/${blog.afbeelding}`}
        />
        <StyledCategoryWrapper>
          {blog.translations[0].tags.map((tag) => {
            return <StyledCategory>{tag}</StyledCategory>;
          })}
        </StyledCategoryWrapper>
      </StyledImageWrapper>
      <StyledContentWrapper>
        <StyledTitle>{blog.translations[0].title}</StyledTitle>
        <StyledContent>
          {parse(blog.translations[0].content)}
          <StyledCtaButton direction="right">
            {t("blogItem.link")}
          </StyledCtaButton>
        </StyledContent>
        <StyledDate>{blog.date_created}</StyledDate>
      </StyledContentWrapper>
    </StyledBlogItem>
  );
};

export default BlogItem;
