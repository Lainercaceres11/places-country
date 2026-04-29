import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CountriesGrid } from "./features/countries/components/countries-grid";
import { TansTackProvider } from "./providers/tanstack-provider";
import { CountryCities } from "./pages/country-cities";
import "./App.css";
import { CountryPlaces } from "@pages/country-places";

function App() {
  return (
    <BrowserRouter>
      <TansTackProvider>
        <Routes>
          <Route index element={<CountriesGrid />} />
          <Route path=":countryCode/:country" element={<CountryCities />} />
          <Route path=":cityName" element={<CountryPlaces />} />
        </Routes>
      </TansTackProvider>
    </BrowserRouter>
  );
}

export default App;
