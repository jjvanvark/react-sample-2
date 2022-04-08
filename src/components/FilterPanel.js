import { useEffect, useRef, useState as useReactState } from "react";
import styled from "styled-components";
import { useState, useDispatch } from "../hooks/useReducer";
import RoundButton from "./RoundButton";
import SwitchButton from "./SwitchButton";
import { rem } from "polished";
import fontParser from "../utils/fontParser";
import { useTranslation } from "react-i18next";
import Icon from "./Icons";

const StyledTitle = styled.div`
  ${({ theme }) => `
    ${fontParser("title2")}
    background-color: ${theme.color.background.dark};
    color: ${theme.color.key.white};
    padding: ${rem(8)} ${rem(16)};
    @media only screen and (min-width: ${theme.breakPoint}px) {
      padding: ${rem(18)} ${rem(56)};
    }
  `}
`;

const StyledInnerPanel = styled.div`
  ${({ theme, $colored = false, $hideOnMobile = false }) => `
    border-top: ${rem(1)} solid ${theme.color.key.dark};
    padding: ${rem(16)} ${rem(16)} ${rem(24)};
    display: ${$hideOnMobile ? "none" : "block"};
    ${$colored ? `background-color: ${theme.color.background.xLight};` : ""}
    @media only screen and (min-width: ${theme.breakPoint}px) {
      padding: ${rem(24)} ${rem(56)};
      display: block;
    }
  `}
`;

const StyledCloseButton = styled(RoundButton)`
  ${({ theme }) => `
    position: absolute;
    top: ${rem(20)};
    right: ${rem(16)};
    @media only screen and (min-width: ${theme.breakPoint}px) {
      top: ${rem(48)};
      right: ${rem(48)};
    }
  `}
`;

const StyledMainFilterTitle = styled.div`
  ${fontParser("title3")}
  display: flex;
  align-items: center;
  margin-bottom: ${rem(8)};
`;

const StyledIcon = styled(Icon)`
  ${({ theme }) => `
  background-color: ${theme.color.humanTrafficking.default};
  width: ${rem(16)};
  height: ${rem(16)};
  border-radius: ${rem(16)};
  border: ${rem(1)} solid ${theme.color.key.dark};
  margin-left: ${rem(16)};
  color: ${theme.color.humanTrafficking.default};
  @media only screen and (min-width: ${theme.breakPoint}px) {
    color: ${theme.color.key.dark};
    width: ${rem(32)};
    height: ${rem(32)};
  }
`}
`;

const StyledLegendaItem = styled.div`
  display: flex;
  align-items: center;
  margin-top: ${rem(12)};
`;

const StyledLegendaIcon = styled(Icon)`
  ${({ theme, $tint = "dark" }) => `
  width: ${rem(16)};
  height: ${rem(16)};
  border-radius: ${rem(16)};
  border: ${rem(1)} solid ${theme.color.key.dark};
  background-color: ${theme.color.destination[$tint]};
  color: ${theme.color.destination[$tint]};
  margin-right: ${rem(8)};
  @media only screen and (min-width: ${theme.breakPoint}px) {
    width: ${rem(32)};
    height: ${rem(32)};
    background-color: ${theme.color.destination.xLight};
    border-color: ${theme.color.destination.dark};
    color: ${theme.color.destination.dark};
  }
  `}
`;

const StyledTravelTypeList = styled.ul`
  padding-left: 0;
  list-style: none;
`;

const StyledTravelTypeItem = styled.li`
  display: flex;
  align-items: center;
  margin-top: ${rem(12)};
`;

const StyledTravelTypeIcon = styled(Icon)`
  ${({ theme, $color }) => `
  width: ${rem(16)};
  height: ${rem(16)};
  border-radius: ${rem(16)};
  color: ${theme.color.travel[$color]};
  background-color: ${theme.color.travel[$color]};
  margin-right: ${rem(8)};
  @media only screen and (min-width: ${theme.breakPoint}px) {
    width: ${rem(32)};
    height: ${rem(32)};
    color: ${theme.color.key.white};
  }
  `}
`;

const StyledFilterPanel = styled.div`
  ${({ theme, $filter }) => `
        background-color: ${theme.color.key.white};
        border: ${rem(1.5)} solid ${theme.color.key.dark};
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        bottom: 0;
        left: ${$filter ? "0" : "100%"};
        transition: left 0.35s ease;
        z-index: 10;
        overflow-y: scroll;
        @media only screen and (min-width: ${theme.breakPoint}px) {
            transition: none;
            ${
              $filter
                ? `
                left: 100%;
                width: 520px;
                `
                : ``
            }
            
        }
    `}
`;

const FilterPanel = () => {
  const { filterPanel, reis_types } = useState();
  const dispatch = useDispatch();
  const ref = useRef();
  const { t } = useTranslation();

  // temp
  const [sw, setSw] = useReactState(true);

  useEffect(() => {
    if (filterPanel) {
      document.addEventListener("mousedown", handleDocumentClick);
    } else {
      document.removeEventListener("mousedown", handleDocumentClick);
    }
    return () => {
      document.removeEventListener("mousedown", handleDocumentClick);
    };
  }, [filterPanel]);

  const handleDocumentClick = (event) => {
    if (ref && !ref.current.contains(event.target)) {
      handleCloseFilter();
    }
  };

  const handleCloseFilter = () => {
    dispatch({ type: "CLOSE_FILTER_PANEL" });
  };

  return (
    <StyledFilterPanel ref={ref} $filter={filterPanel}>
      <StyledTitle>{t("mapFilterPanel.title")}</StyledTitle>
      <StyledCloseButton id="close" onClick={handleCloseFilter} />
      <StyledInnerPanel $hideOnMobile={true}>
        <StyledMainFilterTitle>
          {t("mapFilterPanel.mainFilterTitle")}
          <StyledIcon id="Enslaved" />
        </StyledMainFilterTitle>
        <SwitchButton on={sw} onClick={() => setSw(!sw)} />
      </StyledInnerPanel>
      <StyledInnerPanel $colored={true}>
        <StyledMainFilterTitle>
          {t("mapFilterPanel.travelFilterTitle")}
        </StyledMainFilterTitle>
        <StyledTravelTypeList>
          {reis_types.map(({ id, naam, color }) => (
            <StyledTravelTypeItem key={id}>
              <StyledTravelTypeIcon id="Travel" $color={color} />
              {naam}
            </StyledTravelTypeItem>
          ))}
        </StyledTravelTypeList>
      </StyledInnerPanel>
      <StyledInnerPanel>
        <StyledMainFilterTitle>
          {t("mapFilterPanel.legendaFilterTitle")}
        </StyledMainFilterTitle>
        <StyledLegendaItem>
          <StyledLegendaIcon id="Sunk" $tint="dark" />
          {t("mapFilterPanel.legenda.perish")}
        </StyledLegendaItem>
        <StyledLegendaItem>
          <StyledLegendaIcon id="Seized" $tint="default" />
          {t("mapFilterPanel.legenda.confiscated")}
        </StyledLegendaItem>
        <StyledLegendaItem>
          <StyledLegendaIcon id="Cancelled" $tint="light" />
          {t("mapFilterPanel.legenda.disapproved")}
        </StyledLegendaItem>
        <StyledLegendaItem>
          <StyledLegendaIcon id="Cancelled" $tint="xLight" />
          {t("mapFilterPanel.legenda.cancelled")}
        </StyledLegendaItem>
      </StyledInnerPanel>
    </StyledFilterPanel>
  );
};

export default FilterPanel;
