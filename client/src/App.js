import logo from "./logo.svg";
import "./App.css";

import { useSelector } from "react-redux";
import { themeSettings } from "theme";
import { useMemo } from "react";
import { createTheme } from "@mui/material";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { CssBaseline, ThemeProvider } from "@mui/material"


function App() {
  const mode = useSelector((state) => state.global.mode);

  //memoized value recomputed when mode changes
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);

  return (
    <div className="App">
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Routes>
            <Route element={<Layout />}></Route>
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
