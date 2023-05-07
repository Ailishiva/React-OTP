// Install dependencies
// Make sure you have the following packages installed in your project:
// axios, react, react-dom, recharts

import React, { useEffect, useState } from "react";
import axios from "axios";
import { LineChart, Line, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from "recharts";

const Dashboard = () => {
  const [graphData, setGraphData] = useState([]);

  useEffect(() => {
    // Fetch worldwide historical cases data
    axios
      .get("https://disease.sh/v3/covid-19/historical/all?lastdays=all")
      .then(response => setGraphData(Object.entries(response.data?.cases || {})))
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      <h2>Worldwide COVID-19 Cases Fluctuations</h2>
      {graphData.length > 0 ? (
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={graphData}>
            <XAxis dataKey="0" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="1" name="Cases" stroke="#8884d8" />
          </LineChart>
        </ResponsiveContainer>
      ) : (
        <p>Loading data...</p>
      )}
    </div>
  );
};

export default Dashboard;
