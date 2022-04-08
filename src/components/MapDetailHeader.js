import styled from "styled-components";
import { rem } from "polished";
import Icon from "./Icons";
import fontParser from "../utils/fontParser";
import { Link } from "react-router-dom";

const StyledPanel = styled.div`
  ${({ theme }) => `
  padding: ${rem(22)} ${rem(16)};
  background-color: ${theme.color.destination.dark};
  color: ${theme.color.key.white};
  @media only screen and (min-width: ${theme.breakPoint}px) {
      border: ${rem(1)} solid ${theme.color.key.dark};
      margin-top: ${rem(24)};
      margin-left: ${rem(24)};
      margin-bottom: ${rem(16)};
  }
  `}
`;

const StyledInnerPanel = styled.div`
  display: flex;
  align-items: center;
`;

const StyledIcon = styled(Icon)`
  ${({ theme }) => `
  width: ${rem(40)};
  height: ${rem(40)};
  border: ${rem(1)} solid ${theme.color.key.white};
  border-radius: ${rem(20)};
  margin-right: ${rem(12)};
  
  @media only screen and (min-width: ${theme.breakPoint}px) {
    width: ${rem(48)};
    height: ${rem(48)};
    border-radius: ${rem(24)};
  }
 `}
`;

const Spacer = styled.div`
  ${({ theme }) => `
    width: ${rem(1)};
    background-color: ${theme.color.key.white};
    align-self: stretch;
`}
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: ${rem(12)};
`;

const VoyageType = styled.h5`
  ${fontParser("title5")}
`;

const VoyageTitle = styled.h2`
  ${fontParser("title1")}
  margin-bottom: ${rem(4)};
`;

const StyledArchiveIcon = styled(Icon)`
  width: ${rem(8)};
  margin-right: ${rem(4)};
`;

const StyledLink = styled(Link)`
  ${({ theme }) => `
  color: ${theme.color.key.white};
  display: flex;
  margin-right: ${rem(8)};
  &:last-child {
      margin-right: 0;
  }
  `}
`;

const StyledLinks = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const MapDetailHeader = ({ voyageType, voyageTitle, links = [] }) => {
  return (
    <StyledPanel>
      <StyledInnerPanel>
        <StyledIcon id="Travel" />
        <Spacer />
        <Content>
          <VoyageType>{voyageType}</VoyageType>
          <VoyageTitle>{voyageTitle}</VoyageTitle>
          <StyledLinks>
            {links.map(({ url, title }) => (
              <StyledLink to={url}>
                <StyledArchiveIcon id="Link" />
                {title}
              </StyledLink>
            ))}
          </StyledLinks>
        </Content>
      </StyledInnerPanel>
    </StyledPanel>
  );
};

export default MapDetailHeader;
