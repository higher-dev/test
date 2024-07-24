import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import TimeChecker from "./pages/TimeChecker";
import "./App.css";

const App = () => {
  return (
    <>
      <div className="p-2 flex justify-center items-center">
        <TimeChecker />
      </div>
    </>
  );
};

export default App;