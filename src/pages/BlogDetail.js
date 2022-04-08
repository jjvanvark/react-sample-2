import { useState, useEffect } from "react";
import { useState as useGlobalState, useDispatch } from "../hooks/useReducer";
import PagePanel from "../components/PagePanel";
import BlogDetailHeader from "../components/BlogDetailHeader";
import PageContent from "../components/PageContent";
import { getBlogsBySlug } from "../api";
import { useParams } from "react-router-dom";
import PageSubNavigation from "../components/PageSubNavigation";
import { StyledListItem } from "../components/PageSubNavigation";
import CtaButton from "../components/CtaButton";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import { rem } from "polished";
import parse from "html-react-parser";
import fontParser from "../utils/fontParser";
import { useNavigate } from "react-router-dom";

const StyledPageContent = styled(PageContent)`
  ${({ theme }) => `
      background-color: ${theme.color.key.white};

      @media only screen and (min-width: ${theme.breakPoint}px) {
        padding: ${rem(32)};
      }
  `}
`;

const StyledImageWrapper = styled.div`
  ${({ theme }) =>
    `
    padding: ${rem(5)} ${rem(6)};
    position: relative;
    background-color: ${theme.color.key.white};
    border: ${rem(1)} solid ${theme.color.key.dark};
    border-bottom: none;

    &::before {
        display: block;
        content: '';
        position: relative;
        padding-top: calc(100% / 3);
    }
`}
`;

const StyledImage = styled.img`
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  object-fit: cover;
  position: absolute;
  vertical-align: bottom;
  width: 100%;
  height: 100%;
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

const StyledTitle = styled.div`
  ${({ theme }) =>
    `
    ${fontParser("title3")};
    background-color: ${theme.color.destination.dark};
    border: ${rem(1)} solid ${theme.color.key.dark};
    color: ${theme.color.key.white};
    padding: ${rem(8)} ${rem(16)};

    @media only screen and (min-width: ${theme.breakPoint}px) {
        height: ${rem(87)};
        display: flex;
        align-items: center;
        padding: ${rem(8)} ${rem(24)};
    }

`}
`;

const StyledContentWrapper = styled.div`
  ${({ theme }) => `
  padding: ${rem(40)} ${rem(16)};
  position: relative;
  @media only screen and (min-width: ${theme.breakPoint}px) {
    padding: ${rem(40)} ${rem(8)};
  }
`}
`;

const StyledContent = styled.div``;

const StyledDate = styled.div`
  ${({ theme }) =>
    `
    position: absolute;
    top: 0;
    right: 0;
    border: ${rem(1)} solid ${theme.color.key.dark};
    border-top: none;
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
  ${({ theme }) => `
  display: none;

  @media only screen and (min-width: ${theme.breakPoint}px) {
    display: flex;
  }
`}
`;

const BlogDetail = () => {
  const { blogActiveFilter } = useGlobalState();
  const { blogFilterList } = useGlobalState();
  const dispatch = useDispatch();
  const { slug } = useParams();
  const [blog, setBlog] = useState(null);
  const { t } = useTranslation();
  const navigate = useNavigate();

  useEffect(() => {
    if (slug !== undefined) {
      getBlogsBySlug(slug).then((data) => {
        const result = data.data
          .filter((blog) => {
            return blog.translations[0]?.slug === slug;
          })
          .map((b) => {
            b.title =
              b.translations.length > 0 && b.translations[0]?.title !== ""
                ? b.translations[0].title
                : "";
            b.content =
              b.translations.length > 0 && b.translations[0]?.content !== ""
                ? b.translations[0].content
                : "";
            b.tags =
              b.translations.length > 0 && b.translations[0]?.tags.length > 0
                ? b.translations[0].tags
                : [];

            return b;
          });

        if (result.length > 0) {
          setBlog(result[0]);
        }
      });
    }
  }, [slug]);

  const handleSubNavClick = (index) => {
    dispatch({
      type: "SET_BLOG_FILTER",
      payload: index,
    });

    navigate("/blog");
  };

  return (
    <PagePanel>
      <BlogDetailHeader title={"Blog"}>
        <PageSubNavigation>
          {blogFilterList.map((item, index) => {
            return (
              <StyledListItem
                key={index}
                $active={blogActiveFilter === index}
                onClick={() => handleSubNavClick(index)}
              >
                {item.title}
              </StyledListItem>
            );
          })}
        </PageSubNavigation>
      </BlogDetailHeader>
      <StyledCtaButton to={"/blog"} direction="left">
        {t("buttons.return")}
      </StyledCtaButton>

      {blog === null && <></>}
      {blog && (
        <StyledPageContent>
          <StyledImageWrapper>
            <StyledImage
              src={`${process.env.REACT_APP_HOST}/assets/${blog.afbeelding}`}
            />
            {blog.tags && (
              <StyledCategoryWrapper>
                {blog.tags.map((tag) => {
                  return <StyledCategory>{tag}</StyledCategory>;
                })}
              </StyledCategoryWrapper>
            )}
          </StyledImageWrapper>
          <StyledTitle>{blog.title}</StyledTitle>

          <StyledContentWrapper>
            <StyledDate>{blog.date_created}</StyledDate>
            {blog.content && (
              <StyledContent>{parse(blog.content)}</StyledContent>
            )}
          </StyledContentWrapper>
        </StyledPageContent>
      )}
    </PagePanel>
  );
};

export default BlogDetail;
