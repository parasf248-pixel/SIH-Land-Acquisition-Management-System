import React, { useEffect, useState } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  Polygon,
} from "react-leaflet";

import "leaflet/dist/leaflet.css";

import { getPlots } from "../services/api";

const PlotMap = () => {
  const [plots, setPlots] = useState([]);

  useEffect(() => {
    const loadPlots = async () => {
      const data = await getPlots();
      setPlots(data);
    };

    loadPlots();
  }, []);

  return (
    <div className="w-full h-screen">
      <MapContainer
        center={[28.6995, 77.2765]}
        zoom={15}
        className="w-full h-full"
      >
        <TileLayer
          attribution="&copy; OpenStreetMap contributors"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {plots.map((plot) => (
          <React.Fragment key={plot.id}>

            {/* Plot Marker */}
            <Marker position={[plot.latitude, plot.longitude]}>
              <Popup>
                <div>
                  <h2 className="font-bold text-lg">
                    Plot #{plot.id}
                  </h2>

                  <p>
                    <b>Area:</b> {plot.area}
                  </p>

                  <p>
                    <b>Street:</b> {plot.street}
                  </p>

                  <p>
                    <b>House No:</b> {plot.houseNo}
                  </p>

                  <p>
                    <b>Size:</b> {plot.size}
                  </p>
                </div>
              </Popup>
            </Marker>

            {/* Plot Boundary */}
            <Polygon
              positions={plot.polygon}
              pathOptions={{
                color: "blue",
                fillColor: "blue",
                fillOpacity: 0.35,
              }}
            />

          </React.Fragment>
        ))}
      </MapContainer>
    </div>
  );
};

export default PlotMap;