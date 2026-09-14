import React from "react";

import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  Polygon,
} from "react-leaflet";

import "leaflet/dist/leaflet.css";

import DaskNav from "../DaskBoard/DaskNavbar";
import plotData from "../data/plotData";

const PlotMap = () => {
  return (
    <div className="scroll-zoom flex min-h-screen bg-[#f5f6f8] text-gray-900">

      {/* SIDEBAR */}
      <aside className="w-[230px] shrink-0 min-h-screen">
        <DaskNav />
      </aside>

      {/* MAP */}
      <main className="flex-1 min-w-0 p-6">

        <div className="w-full h-[calc(100vh-48px)] rounded-2xl overflow-hidden shadow-lg">

          <MapContainer
            center={[28.6995, 77.2765]}
            zoom={15}
            className="w-full h-full"
          >

            <TileLayer
              attribution="&copy; OpenStreetMap contributors"
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            {plotData.map((plot) => (

              <React.Fragment key={plot.id}>

                {/* MARKER */}
                <Marker
                  position={[
                    plot.latitude,
                    plot.longitude,
                  ]}
                >

                  <Popup>

                    <div className="w-[260px]">

                      <h2 className="text-xl font-bold mb-3">
                        Plot #{plot.id}
                      </h2>

                      <div className="space-y-1 text-sm">

                        <p>
                          <b>Owner:</b>{" "}
                          {plot.ownerName}
                        </p>

                        <p>
                          <b>Father Name:</b>{" "}
                          {plot.fatherName}
                        </p>

                        <p>
                          <b>Area:</b>{" "}
                          {plot.area}
                        </p>

                        <p>
                          <b>Size:</b>{" "}
                          {plot.size}
                        </p>

                        <p>
                          <b>Street:</b>{" "}
                          {plot.street}
                        </p>

                        <p>
                          <b>House No:</b>{" "}
                          {plot.houseNo}
                        </p>

                        <p>
                          <b>Khasra No:</b>{" "}
                          {plot.khasraNo}
                        </p>

                        <p>
                          <b>Village:</b>{" "}
                          {plot.village}
                        </p>

                        <p>
                          <b>District:</b>{" "}
                          {plot.district}
                        </p>

                        <p>
                          <b>State:</b>{" "}
                          {plot.state}
                        </p>

                        <p>
                          <b>Mobile:</b>{" "}
                          {plot.mobile}
                        </p>

                        <hr className="my-2" />

                        <p>
                          <b>Project:</b>{" "}
                          {plot.projectName}
                        </p>

                        <p>
                          <b>Status:</b>{" "}
                          {plot.acquisitionStatus}
                        </p>

                        <p>
                          <b>Compensation:</b>{" "}
                          {plot.compensation}
                        </p>

                      </div>

                    </div>

                  </Popup>

                </Marker>


                {/* PLOT BOUNDARY */}
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

      </main>

    </div>
  );
};

export default PlotMap;