import { useEffect } from "react";
import styled from "styled-components";
import { rem } from "polished";
import TheMap from "../components/Map";
import { useState, useDispatch } from "../hooks/useReducer";
import FilterPanel from "../components/FilterPanel";
import MapDetailPanel from "../components/MapDetailPanel";
import RoundButton from "../components/RoundButton";
import Timeline from "../components/Timeline";
import YearLabel from "../components/YearLabel";
import { useParams, Link } from "react-router-dom";

const StyledPanel = styled.section`
  ${({ theme, $filter, $detail }) => `
    position: fixed;
    top: 0;
    bottom: ${rem(56)};
    left: 0;
    width: 100%;

    @media only screen and (min-width: ${theme.breakPoint}px) {
        bottom: 0;
        width: calc(100% - ${rem(92)});
        left: ${$filter ? rem(-428) : $detail ? rem(612) : rem(92)};

        transition: all ${theme.transition.timing} ${theme.transition.function};
    }
    `}
`;

const MapContainer = styled.div`
  ${({ theme, $detail }) => `
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        top: 0;
        z-index: 0;
        @media only screen and (min-width: ${theme.breakPoint}px) {
          transition: all ${theme.transition.timing} ${
    theme.transition.function
  };
            bottom: ${theme.padding.outer};
            left: ${theme.padding.outer};
            right: ${$detail ? rem(544) : theme.padding.outer};
            top: ${theme.padding.outer};
        }
    `}
`;

const ButtonPanel = styled.aside`
  ${({ theme }) => `
    position: absolute;
    top: 0;
    right:0;
    z-index: 9999;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: ${rem(24)} ${rem(24)} 0 0;
  `}
`;

const StyledYearLabel = styled(YearLabel)`
  ${({ theme }) => `
  position: absolute;
  top: ${rem(16)};
  left: ${rem(16)};
  z-index: 9999;
  @media only screen and (min-width: ${theme.breakPoint}px) {
    top: ${rem(24)};
    left: ${rem(24)};
  }
`}
`;

const Map = () => {
  const { filterPanel, mapDetailPanel } = useState();
  const dispatch = useDispatch();
  const { voyageId } = useParams();

  useEffect(() => {
    if (voyageId === undefined) {
      dispatch({ type: "CLOSE_MAP_DETAIL_PANEL" });
    } else {
      dispatch({ type: "OPEN_MAP_DETAIL_PANEL", payload: voyageId });
    }
  }, [voyageId]);

  const handleOpenFilter = () => {
    if (!filterPanel) {
      dispatch({ type: "OPEN_FILTER_PANEL" });
    }
  };

  const handleOpenDetail = () => {
    if (!mapDetailPanel.open && voyageId !== undefined) {
      dispatch({ type: "OPEN_MAP_DETAIL_PANEL", payload: voyageId });
    }
  };
  return (
    <StyledPanel
      $filter={filterPanel}
      $detail={!filterPanel && mapDetailPanel.open}
    >
      <MapDetailPanel />
      <MapContainer $detail={!filterPanel && mapDetailPanel.open}>
        <TheMap />
        <StyledYearLabel />
        <ButtonPanel>
          <RoundButton
            id="filter"
            style={{ marginBottom: rem(16) }}
            onClick={handleOpenFilter}
          />
          <RoundButton id="plus" style={{ marginBottom: rem(8) }} />
          <RoundButton id="min" onClick={handleOpenDetail} />
        </ButtonPanel>
        <Timeline />
      </MapContainer>
      <FilterPanel />
    </StyledPanel>
  );
};

export default Map;
