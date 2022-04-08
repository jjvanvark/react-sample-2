import { useState as useGlobalState, useDispatch } from "../hooks/useReducer";
import PagePanel from "../components/PagePanel";
import PageHeader from "../components/PageHeader";
import PageContent from "../components/PageContent";
import PageSubNavigation from "../components/PageSubNavigation";
import { StyledListItem } from "../components/PageSubNavigation";
import BlogItem from "../components/BlogItem";

const Blog = () => {
  const { blogs } = useGlobalState();
  const { blogActiveFilter, blogFilterList } = useGlobalState();
  const dispatch = useDispatch();

  const handleSubNavClick = (index) => {
    dispatch({
      type: "SET_BLOG_FILTER",
      payload: index,
    });
  };

  return (
    <PagePanel>
      <PageHeader title={"Blog"}>
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
      </PageHeader>
      <PageContent>
        {blogs.map((blog, index) => {
          if (blog) {
            return <BlogItem key={index} blog={blog} />;
          }
        })}
      </PageContent>
    </PagePanel>
  );
};

export default Blog;
