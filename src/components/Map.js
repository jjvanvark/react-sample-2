import { MapContainer, TileLayer } from "react-leaflet";
import styled from "styled-components";

const StyledMap = styled.div`
  height: 100%;
  .leaflet-container {
    height: 100%;
  }
`;

const Map = () => {
  const handleCreated = (map) => {
    setTimeout(() => {
      map.invalidateSize(true);
    }, 500);
  };

  return (
    <StyledMap>
      <MapContainer
        style={{ width: "100%", height: "100%" }}
        center={[45.4, -75.7]}
        zoom={12}
        scrollWheelZoom={false}
        whenCreated={handleCreated}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
      </MapContainer>
    </StyledMap>
  );
};

export default Map;
