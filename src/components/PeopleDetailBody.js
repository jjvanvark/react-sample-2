import styled from "styled-components";
import { rem } from "polished";
import Cards from "./Cards";
import CardVoyageListItem from "./CardVoyageListItem";
import CardBodyContent from "./CardBodyContent";
import { StyledColumn, StyledLabel, StyledValue } from "./CardBodyContent";
import CardBodyDetails from "./CardBodyDetails";
import { StyledDetailsRow, StyledDetailColumn } from "./CardBodyDetails";
import { useTranslation } from "react-i18next";

const StyledDetailBody = styled.div`
  ${({ theme }) => `
    height: 100%;
    color: ${theme.color.key.dark};
    background-color: ${theme.color.background.xLight};
    display: flex;
    flex-direction: column;
    padding: ${rem(16)};

    @media only screen and (min-width: ${theme.breakPoint}px) {
      padding: 0;
   }
`}
`;

const StyledCard = styled(Cards)`
  ${({ theme }) => `
margin-bottom: ${rem(16)};
@media only screen and (min-width: ${theme.breakPoint}px) {
  margin-bottom: 0;
  border-top: 0;
}
`}
`;

const DetailBody = ({ data, voyageData }) => {
  const { t } = useTranslation();

  return (
    <StyledDetailBody>
      <CardBodyDetails>
        <StyledDetailsRow>
          <StyledDetailColumn>
            <StyledLabel>{t("peopleDetail.dateOfBirth")}</StyledLabel>
            <StyledValue>-</StyledValue>
          </StyledDetailColumn>
          <StyledDetailColumn>
            <StyledLabel>{t("peopleDetail.dateOfDeath")}</StyledLabel>
            <StyledValue>-</StyledValue>
          </StyledDetailColumn>
        </StyledDetailsRow>
        <StyledDetailsRow>
          <StyledDetailColumn>
            <StyledLabel>Nog niet bekent</StyledLabel>
            <StyledValue>-</StyledValue>
          </StyledDetailColumn>
          <StyledDetailColumn>
            <StyledLabel>Nog niet bekent</StyledLabel>
            <StyledValue>-</StyledValue>
          </StyledDetailColumn>
        </StyledDetailsRow>
        <StyledDetailsRow>
          <StyledDetailColumn>
            <StyledLabel>Nog niet bekent</StyledLabel>
            <StyledValue>-</StyledValue>
          </StyledDetailColumn>
          <StyledDetailColumn>
            <StyledLabel>Nog niet bekent</StyledLabel>
            <StyledValue>-</StyledValue>
          </StyledDetailColumn>
        </StyledDetailsRow>
      </CardBodyDetails>
      <StyledCard title={"Bouw"} icon={"Construction"} category="">
        <CardBodyContent>
          <StyledColumn>
            <StyledLabel>Label</StyledLabel>
            <StyledValue>Value</StyledValue>
          </StyledColumn>
          <StyledColumn>
            <StyledLabel>Label</StyledLabel>
            <StyledValue>Value</StyledValue>
          </StyledColumn>
          <StyledColumn>
            <StyledLabel>Label</StyledLabel>
            <StyledValue>Value</StyledValue>
          </StyledColumn>
          <StyledColumn>
            <StyledLabel>Label</StyledLabel>
            <StyledValue>Value</StyledValue>
          </StyledColumn>
        </CardBodyContent>
      </StyledCard>
      {voyageData && (
        <StyledCard
          title={"Reizen"}
          icon={"Destination"}
          category="destination"
        >
          <CardBodyContent>
            <StyledColumn>
              <StyledLabel>Label</StyledLabel>
              <StyledValue>Value</StyledValue>
            </StyledColumn>
            <StyledColumn>
              <StyledLabel>Label</StyledLabel>
              <StyledValue>Value</StyledValue>
            </StyledColumn>
            <StyledColumn>
              <StyledLabel>Label</StyledLabel>
              <StyledValue>Value</StyledValue>
            </StyledColumn>
            <StyledColumn>
              <StyledLabel>Label</StyledLabel>
              <StyledValue>Value</StyledValue>
            </StyledColumn>
          </CardBodyContent>
          {voyageData.map((element, id) => {
            return (
              <CardVoyageListItem key={id} data={element} position={id + 1} />
            );
          })}
        </StyledCard>
      )}
      <StyledCard title={"Archiefstukken"} icon={"Archive"} category="">
        <CardBodyContent>
          <StyledColumn>
            <StyledLabel>Label</StyledLabel>
            <StyledValue>Value</StyledValue>
          </StyledColumn>
          <StyledColumn>
            <StyledLabel>Label</StyledLabel>
            <StyledValue>Value</StyledValue>
          </StyledColumn>
          <StyledColumn>
            <StyledLabel>Label</StyledLabel>
            <StyledValue>Value</StyledValue>
          </StyledColumn>
          <StyledColumn>
            <StyledLabel>Label</StyledLabel>
            <StyledValue>Value</StyledValue>
          </StyledColumn>
        </CardBodyContent>
      </StyledCard>
      <StyledCard title={"Blog artikelen"} icon={"Blog"} category="">
        <CardBodyContent>
          <StyledColumn>
            <StyledLabel>Label</StyledLabel>
            <StyledValue>Value</StyledValue>
          </StyledColumn>
          <StyledColumn>
            <StyledLabel>Label</StyledLabel>
            <StyledValue>Value</StyledValue>
          </StyledColumn>
          <StyledColumn>
            <StyledLabel>Label</StyledLabel>
            <StyledValue>Value</StyledValue>
          </StyledColumn>
          <StyledColumn>
            <StyledLabel>Label</StyledLabel>
            <StyledValue>Value</StyledValue>
          </StyledColumn>
        </CardBodyContent>
      </StyledCard>
    </StyledDetailBody>
  );
};

export default DetailBody;
