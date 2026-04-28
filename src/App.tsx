import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CountriesGrid } from "./features/countries/countries-grid";
import { TansTackProvider } from "./providers/tanstack-provider";
import { CountryCities } from "./pages/country-cities";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <TansTackProvider>
        <Routes>
          <Route index element={<CountriesGrid />} />
          <Route path=":countryCode/:country" element={<CountryCities />} />
        </Routes>
      </TansTackProvider>
    </BrowserRouter>
  );
}

export default App;
