import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { FaArrowTrendUp } from "react-icons/fa6";
import { SiPytest } from "react-icons/si";

function App() {
  const data = [
    {
      Rank: 1,
      name: "Selling With re entr",
      Calmar_Ratio: 3.96,
      Overall: 385454,
      Avg: 319.54,
      Win: 0.65,
      price: 50,
      Action: "View",
    },
    {
      Rank: 1,
      name: "Selling With re entr",
      Calmar_Ratio: 3.96,
      Overall: 385454,
      Avg: 319.54,
      Win: 0.65,
      price: 50,
      Action: "View",
    },
    {
      Rank: 1,
      name: "Selling With re entr",
      Calmar_Ratio: 3.96,
      Overall: 385454,
      Avg: 319.54,
      Win: 0.65,
      price: 50,
      Action: "View",
    },
    {
      Rank: 1,
      name: "Selling With re entr",
      Calmar_Ratio: 3.96,
      Overall: 385454,
      Avg: 319.54,
      Win: 0.65,
      price: 50,
      Action: "View",
    },
    {
      Rank: 1,
      name: "Selling With re entr",
      Calmar_Ratio: 3.96,
      Overall: 385454,
      Avg: 319.54,
      Win: 0.65,
      price: 50,
      Action: "View",
    },
    {
      Rank: 1,
      name: "Selling With re entr",
      Calmar_Ratio: 3.96,
      Overall: 385454,
      Avg: 319.54,
      Win: 0.65,
      price: 50,
      Action: "View",
    },
    {
      Rank: 1,
      name: "Selling With re entr",
      Calmar_Ratio: 3.96,
      Overall: 385454,
      Avg: 319.54,
      Win: 0.65,
      price: 50,
      Action: "View",
    },
    {
      Rank: 1,
      name: "Selling With re entr",
      Calmar_Ratio: 3.96,
      Overall: 385454,
      Avg: 319.54,
      Win: 0.65,
      price: 50,
      Action: "View",
    },
    {
      Rank: 1,
      name: "Selling With re entr",
      Calmar_Ratio: 3.96,
      Overall: 385454,
      Avg: 319.54,
      Win: 0.65,
      price: 50,
      Action: "View",
    },
    {
      Rank: 1,
      name: "Selling With re entr",
      Calmar_Ratio: 3.96,
      Overall: 385454,
      Avg: 319.54,
      Win: 0.65,
      price: 50,
      Action: "View",
    },
    {
      Rank: 1,
      name: "Selling With re entr",
      Calmar_Ratio: 3.96,
      Overall: 385454,
      Avg: 319.54,
      Win: 0.65,
      price: 50,
      Action: "View",
    },
    {
      Rank: 1,
      name: "Selling With re entr",
      Calmar_Ratio: 3.96,
      Overall: 385454,
      Avg: 319.54,
      Win: 0.65,
      price: 50,
      Action: "View",
    },
  ];
  return (
    // Rank	Name	Calmar Ratio	Overall Profit	Avg. Daily Profit	Win %(Day)	Price (Rs)	Action
    <>
      <div className="container">
        <h1>LeaderBoard</h1>
        <div className="hori"></div>
        <div className="leaderboard">
          <div className="head">
            <div className="ic">
              <SiPytest
                style={{
                  WebkitTransform: "scaleY(-1)",
                  transform: "scaleY(-1)",
                  color: "rgb(234 135 167)",
                  fontSize:"xxx-large"
                }}
              />
              <h2>Basic Backtest</h2>
            </div>
            <div className="select">
              <label htmlFor="slippage">SlipPage</label>
              <select name="slippage" id="slippage">
                <option value="volvo">0%</option>
                <option value="saab">0.5%</option>
                <option value="opel">1%</option>
              </select>
            </div>
          </div>
          <div className="table">
            <table>
              <tr className="top">
                <th>Rank</th>
                <th>Name</th>
                <th>Calmar Ratio</th>
                <th>Overall Profit</th>
                <th>Avg. Daily Profit</th>
                <th>Win %(Day)</th>
                <th>Price</th>
                <th>Action</th>
              </tr>
              {data.map((val, key) => {
                return (
                  <tr key={key}>
                    <td><b>{key+1}</b></td>
                    <td>{val.name}</td>
                    <td
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "0.5rem",
                        justifyContent:"center"
                      }}
                    >
                      <FaArrowTrendUp
                        style={{ color: "#0e6aff", fontSize: "18px" }}
                      />
                      {val.Calmar_Ratio}
                    </td>
                    <td>{val.Overall}</td>
                    <td>{val.Avg}</td>
                    <td>{val.Win}</td>
                    <td>{val.price}</td>
                    <td>
                      {" "}
                      <a href="/" target="_blank" rel="noopener noreferrer">
                        {val.Action}
                      </a>
                    </td>
                  </tr>
                );
              })}
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
