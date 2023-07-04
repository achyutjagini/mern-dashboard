import { useSelector } from "react-redux";
import { themeSettings } from "theme";

import { useMemo } from "react";
import { createTheme } from "@mui/material";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CssBaseline, ThemeProvider } from "@mui/material";
import Layout from "./scenes/layout/index";
import Dashboard from "./scenes/dashboard/index";
import { Navigate } from "react-router-dom";
import Navbar from "components/Navbar";
import Sidebar from "components/Sidebar";
import Products from "scenes/Products";
import Customers from "scenes/customers";
import Transactions from "scenes/Transactions";
import Geography from "scenes/geography";
import Overview from "scenes/overview";
import Daily from "scenes/daily";
import Monthly from "scenes/monthly";
import Breakdown from "scenes/breakdown";
import Admin from "scenes/admin"

//useSelector to get the state value
//if want to call function to change state then useDispatch
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
            <Route element={<Layout />}>
              <Route path="/" element={<Navigate to="/dashboard" replace />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/products" element={<Products />} />
              <Route path="/customers" element={<Customers />} />
              <Route path="/transactions" element={<Transactions />} />
              <Route path="/geography" element={<Geography />} />
              <Route path="/overview" element={<Overview />} />
              <Route path="/daily" element={<Daily />} />
              <Route path="/monthly" element={<Monthly />} />
              <Route path="/breakdown" element={<Breakdown />} />
              <Route path="/admin" element={<Admin />} />
            </Route>
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
