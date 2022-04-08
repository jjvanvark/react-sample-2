import styled from "styled-components";
import { rem } from "polished";
import Icon from "./Icons";
import fontParser from "../utils/fontParser";

const StyledRow = styled.div`
  ${({ theme }) =>
    `
    background-color: ${theme.color.background.xLight};
    padding: ${rem(20)} ${rem(12)};
    border-top: ${rem(1)} solid ${theme.color.key.dark};
    display: flex;  

    @media only screen and (min-width: ${theme.breakPoint}px) {
        padding: ${rem(20)} ${rem(24)} ${rem(20)} ${rem(32)};
     }
  `}
`;

const StyledRowPosition = styled.div`
  ${({ theme }) =>
    `
     width: ${rem(32)};
     height: ${rem(32)};
     border-radius: 50%;
     border: ${rem(2)} solid ${theme.color.location.dark};
     color: ${theme.color.location.dark};
     display: flex;
     justify-content: center;
     align-items: center;
     font-weight: bold;
     align-self: center;
    `}
`;

const StyledRowPositionSeparator = styled.span`
  ${({ theme }) =>
    `
    width: ${rem(1)};
    background-color: ${theme.color.background.dark};
    margin: 0 ${rem(12)} 0 ${rem(10)};
    display: flex;

    @media only screen and (min-width: ${theme.breakPoint}px) {
        margin: 0 ${rem(24)} 0 ${rem(32)};
    }
 `}
`;

const StyledBody = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledMetaData = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: ${rem(1)};
`;

const StyledMetaDataItem = styled.h4`
  ${({ theme }) =>
    `
    ${fontParser("caption6")}
    color: ${theme.color.location.dark};

`}
`;

const StyledIcon = styled(Icon)`
  ${({ theme }) =>
    `
  width: ${rem(13)};
  height: ${rem(6)};
  margin: 0 ${rem(4)};
  color: ${theme.color.humanTrafficking.dark};
`}
`;

const StyledName = styled.h2`
  ${fontParser("title6")}
  text-decoration: underline;
`;

const CardListItem = ({ data, position }) => {
  return (
    <StyledRow>
      <StyledRowPosition>{position}</StyledRowPosition>
      <StyledRowPositionSeparator />
      <StyledBody>
        <StyledMetaData>
          <StyledMetaDataItem>{data.datum_aanvang_reis}</StyledMetaDataItem>
          <StyledIcon id="ArrowRight" />
          <StyledMetaDataItem>{data.datum_einde_reis}</StyledMetaDataItem>
        </StyledMetaData>
        {!!data?.voyage?.naam && <StyledName>{data?.voyage?.naam}</StyledName>}
      </StyledBody>
    </StyledRow>
  );
};

export default CardListItem;
