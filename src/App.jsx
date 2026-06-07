import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Destination from "./pages/Destination";
import Crew from "./pages/Crew";
import Home from "./pages/Home";
import Technology from "./pages/Technology";
import PageNotFound from "./pages/PageNotFound";
import DestinationSection from "./components/DestinationSection";
import CrewSection from "./components/CrewSection";
import MainLayout from "./layout/MainLayout";
import TechnologySection from "./components/TechnologySection";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="/destination" element={<Destination />}>
            <Route index element={<Navigate to="moon" replace />} />
            <Route path=":planet" element={<DestinationSection />} />
          </Route>
          <Route path="/crew" element={<Crew />}>
            <Route index element={<Navigate to="douglas-hurley" replace />} />
            <Route path=":crewMember" element={<CrewSection />} />
          </Route>
          <Route path="/technology" element={<Technology />}>
            <Route index element={<Navigate to="launch-vehicle" replace />} />
            <Route path=":tech" element={<TechnologySection />} />
          </Route>
          <Route path="/404" element={<PageNotFound />} />
          <Route path="*" element={<Navigate to="/404" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
