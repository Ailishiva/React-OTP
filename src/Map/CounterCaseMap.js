// // Install dependencies
// // Make sure you have the following packages installed in your project:
// // axios, react, react-dom, react-leaflet

// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

// const CountryCasesMap = () => {
//   const [countriesData, setCountriesData] = useState([]);

//   useEffect(() => {
//     // Fetch country-specific COVID-19 cases data
//     axios
//       .get("https://disease.sh/v3/covid-19/countries")
//       .then(response => setCountriesData(response.data || []))
//       .catch(error => console.error(error));
//   }, []);

//   return (
//     <div>
//       <h2>COVID-19 Cases by Country</h2>
//       <MapContainer center={[0, 0]} zoom={2} style={{ height: "400px", width: "100%" }}>
//         <TileLayer
//           url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//           attribution="© OpenStreetMap contributors"
//         />
//         {countriesData.map(country => (
//           <Marker
//             key={country.country}
//             position={[country.countryInfo.lat, country.countryInfo.long]}
//           >
//             <Popup>
//               <div>
//                 <h3>{country.country}</h3>
//                 <p>Total Active Cases: {country.active}</p>
//                 <p>Total Recovered Cases: {country.recovered}</p>
//                 <p>Total Deaths: {country.deaths}</p>
//               </div>
//             </Popup>
//           </Marker>
//         ))}
//       </MapContainer>
//     </div>
//   );
// };

// export default CountryCasesMap;
import React, { useEffect, useState } from "react";
import axios from "axios";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css"; // Import leaflet CSS
import L from "leaflet";

// Fix leaflet marker icon issue
delete L.Icon.Default.prototype._getIconUrl;

// Define custom marker icon
const customMarkerIcon = new L.Icon({
  iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  tooltipAnchor: [16, -28],
  shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
  shadowSize: [41, 41],
});

const CountryCasesMap = () => {
  const [countriesData, setCountriesData] = useState([]);

  useEffect(() => {
    // Fetch country-specific COVID-19 cases data
    axios
      .get("https://disease.sh/v3/covid-19/countries")
      .then((response) => setCountriesData(response.data || []))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      <h2>COVID-19 Cases by Country</h2>
      <MapContainer
        center={[20, 0]}
        zoom={2}
        style={{ height: "400px", width: "100%" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="© OpenStreetMap contributors"
        />
        {countriesData.map((country) => {
          const { lat, long } = country.countryInfo;
          if (!lat || !long) return null;
          return (
            <Marker
              key={country.country}
              position={[country.countryInfo.lat, country.countryInfo.long]}
              icon={customMarkerIcon}
            >
              <Popup>
                <div>
                  <h3>{country.country}</h3>
                  <p>Total Active Cases: {country.active}</p>
                  <p>Total Recovered Cases: {country.recovered}</p>
                  <p>Total Deaths: {country.deaths}</p>
                </div>
              </Popup>
            </Marker>
          );
        })}
      </MapContainer>
    </div>
  );
};

export default CountryCasesMap;
