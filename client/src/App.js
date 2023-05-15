import logo from "./logo.svg";
import "./App.css";
import { useSelector } from "react-redux";
import { themeSettings } from "theme";
import { useMemo } from "react";
import { createTheme } from "@mui/material";

function App() {
  const mode = useSelector((state) => state.global.mode);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  return <div className="App"></div>;
}

export default App;
