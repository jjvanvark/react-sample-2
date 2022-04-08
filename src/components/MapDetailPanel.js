import { useEffect, useRef } from "react";
import styled from "styled-components";
import RoundButton from "./RoundButton";
import { useNavigate, useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { journeyDetail } from "../api";
import MapDetailHeader from "./MapDetailHeader";

const StyledPanel = styled.div`
  ${({ theme, $open }) => `
  background-color: ${theme.color.background.xLight};
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  bottom: 0;
  right: ${$open ? "0" : "100%"};
  transition: right 0.35s ease;
  z-index: 10;
  @media only screen and (min-width: ${theme.breakPoint}px) {
    transition: none;
    ${
      $open
        ? `
        right: 100%;
        width: 520px;
        `
        : ``
    }
}
  `}
`;

const MapDetailPanel = () => {
  const ref = useRef();
  const navigate = useNavigate();
  const { voyageId } = useParams();
  const { data } = useQuery(journeyDetail(voyageId), {
    skip: voyageId === undefined,
  });

  useEffect(() => {
    if (voyageId !== undefined) {
      document.addEventListener("mousedown", handleDocumentClick);
    } else {
      document.removeEventListener("mousedown", handleDocumentClick);
    }
    return () => {
      document.removeEventListener("mousedown", handleDocumentClick);
    };
  }, [voyageId]);

  useEffect(() => {
    if (data === undefined) return;
    console.log("data", data);
  }, [data]);

  const handleDocumentClick = (event) => {
    navigate("/map");
  };

  const handleCloseDetail = () => {
    navigate("/map");
  };

  return (
    <StyledPanel $open={voyageId !== undefined} ref={ref}>
      {data !== undefined && (
        <>
          <MapDetailHeader
            voyageType={data.reizen_by_id.type.naam}
            voyageTitle={data.reizen_by_id.schip.naam}
          />
          <RoundButton id="close" onClick={handleCloseDetail} />
        </>
      )}
    </StyledPanel>
  );
};

export default MapDetailPanel;
