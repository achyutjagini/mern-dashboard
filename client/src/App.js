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
            {/* layout has navbar and sidebar which will exist on every page */}
            <Route element={<Layout />}></Route>
            <Route path="/" element={<Navigate to="/dashboard" replace />} />
            <Route path="/dashboard" element={<Dashboard />} />



          </Routes>
        </ThemeProvider>
      </BrowserRouter >
    </div >
  );
}

export default App;
