import { useState as useGlobalState } from "../hooks/useReducer";
import { useState } from "react";
import styled from "styled-components";
import { rem } from "polished";
import OverviewHeader from "../components/OverviewHeader";
import OverviewList from "../components/OverviewList";
import OverviewListShipItem from "../components/OverviewListShipItem";
import ShipDetailHeader from "../components/ShipDetailHeader";
import ShipDetailBody from "../components/ShipDetailBody";
import RoundButton from "../components/RoundButton";
import Dropdown from "../components/Dropdown";
import { StyledDropDownItem } from "../components/Dropdown";
import { useParams, useNavigate } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { getVoyagesByShip, getVoyageTypesByIDs, shipByID } from "../api";
import { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch } from "../hooks/useReducer";

const StyledPanel = styled.section`
  ${({ theme, $detail }) => `
    position: fixed;
    top: 0;
    bottom: ${rem(56)};
    left: 0;
    width: 100%;
    display: flex;
    @media only screen and (min-width: ${theme.breakPoint}px) {
        bottom: 0;
        width: calc(100% - ${rem(92)});
        left: ${$detail ? rem(-428) : rem(92)}};
        transition: all ${theme.transition.timing} ${theme.transition.function};
    }
    `}
`;

const StyledOverviewContainer = styled.div`
  ${({ theme, $detail }) => `
        position: absolute;
        bottom: 0;
        left: ${theme.padding.outer};
        padding-right: ${theme.padding.outer};
        top: 0; 
        z-index: 0;
        overflow-y: ${$detail ? "hidden" : "scroll"};
        overflow-x: ${$detail ? "unset" : "hidden"};

        @media only screen and (min-width: ${theme.breakPoint}px) {
          transition: all ${theme.transition.timing} ${
    theme.transition.function
  };
            width: calc(100% - ${theme.padding.outer});
            padding-bottom: ${theme.padding.outer};
            padding-top: ${theme.padding.outer};
        }
    `}
`;

const StyledDetailPanel = styled.div`
  ${({ theme, $detail }) => `
        background-color: transparent;
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        bottom: 0;
        left: ${$detail ? "0" : "100%"};
        transition: left ${theme.transition.timing} ${
    theme.transition.function
  };
        z-index: 10;
        overflow-y: auto;
        display: flex;
        flex-direction: column;

        @media only screen and (min-width: ${theme.breakPoint}px) {
            transition: none;
            left: ${$detail ? "100%" : "0"};
            width: ${$detail ? `${rem(520)}` : "0"};
            padding: ${rem(16)};        
        }
    `}
`;

const StyledRoundButton = styled(RoundButton)`
  ${({ theme }) => `
      position: absolute;
      top: ${rem(76)};
      right: ${rem(16)};
      z-index: 1;

        @media only screen and (min-width: ${theme.breakPoint}px) {
          top: ${rem(212)};
          right: ${rem(40)};       
        }
    `}
`;

const Ships = () => {
  const { ships } = useGlobalState();
  const { shipId } = useParams();
  const [shipData, setShipData] = useState(null);
  const [voyageData, setVoyageData] = useState([]);
  const [voyageTypeIDs, setVoyageTypeIDs] = useState([]);
  const [isOpenDropdown, setIsOpenDropdown] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const navigate = useNavigate();
  const ref = useRef();
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const { data, loading, error } = useQuery(shipByID(shipId), {
    skip: shipId === undefined,
  });

  useEffect(() => {
    if (data !== undefined || error !== undefined) {
      if (error) {
        dispatch({ type: "SET_ERROR" });
      } else {
        if (data.schepen_by_id !== null) {
          setShipData(data.schepen_by_id);
          document.addEventListener("mousedown", handleDocumentClick);
        } else {
          document.removeEventListener("mousedown", handleDocumentClick);
        }
      }

      return () => {
        document.removeEventListener("mousedown", handleDocumentClick);
      };
    }
  }, [data, error]);

  useEffect(() => {
    if (shipId !== undefined) {
      getVoyagesByShip(shipId).then((data) => {
        setVoyageData(data.data);

        setVoyageTypeIDs(
          data.data.map(({ type }) => {
            return type;
          })
        );
      });
    }
  }, [shipId]);

  useEffect(() => {
    if (voyageTypeIDs.length > 0) {
      getVoyageTypesByIDs(voyageTypeIDs).then((data) => {
        setVoyageData((voyages) => {
          return voyages.map((voyage) => {
            voyage.voyage = data.data.find((e) => e.id === voyage.type);
            return voyage;
          });
        });
      });
    }
  }, [voyageTypeIDs]);

  const handleCloseDetail = () => {
    setShipData(null);
    navigate("/ships");
  };

  const handleDocumentClick = (event) => {
    if (ref && !ref.current.contains(event.target)) {
      handleCloseDetail();
    }
  };

  const handlePageFilter = (id, value) => {
    setSelectedOption(value);
    setIsOpenDropdown(false);
  };

  const handleOpenFilter = () => {
    setIsOpenDropdown(!isOpenDropdown);
  };

  return (
    <StyledPanel $detail={shipData}>
      <StyledOverviewContainer $detail={shipData}>
        <OverviewHeader title={selectedOption || t(`ships.headerDefault`)}>
          <Dropdown
            isOpen={isOpenDropdown}
            selectedOption={selectedOption || t(`ships.headerDefault`)}
            items={ships}
            onDataClick={handlePageFilter}
            onDropDownClick={handleOpenFilter}
          >
            <StyledDropDownItem
              index={0}
              onClick={() => handlePageFilter(null, t(`ships.headerDefault`))}
            >
              {t(`ships.headerDefault`)}
            </StyledDropDownItem>
            {ships.map((ship, index) => {
              return (
                <StyledDropDownItem
                  key={index + 1}
                  onClick={() => handlePageFilter(ship.id, ship.naam)}
                >
                  {ship.naam}
                </StyledDropDownItem>
              );
            })}
          </Dropdown>
        </OverviewHeader>
        <OverviewList>
          {ships.map((item, index) => {
            return (
              <OverviewListShipItem
                item={item}
                key={index}
                isDetailOpen={shipId !== undefined}
              />
            );
          })}
        </OverviewList>
      </StyledOverviewContainer>
      {shipData && (
        <StyledDetailPanel $detail={shipData} ref={ref}>
          <StyledRoundButton id="close" onClick={handleCloseDetail} />
          <ShipDetailHeader data={shipData} />
          <ShipDetailBody data={shipData} voyageData={voyageData} />
        </StyledDetailPanel>
      )}
    </StyledPanel>
  );
};

export default Ships;
