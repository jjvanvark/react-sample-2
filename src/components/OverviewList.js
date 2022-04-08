import styled from "styled-components";
import { rem } from "polished";

const StyledList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  padding: 0;
  margin: 0 ${rem(-24)};
`;

const OverviewList = ({ children = null }) => {
  return <StyledList>{children}</StyledList>;
};

export default OverviewList;
