import Demo from "./Components/Demo";
import FirstPageBundle from "./Components/FirstPageBundle";
import "./index.css";
import { Route, Routes } from "react-router-dom";
import FullNavigation from "./Components/FullNavigation";
import Sell from "./Components/Sell";
import ContactPage from "./Components/ContactPage";
import Agent from "./Components/Agent";
import Auction from "./Components/Auction";
import Agents from "./Components/Agents";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<FullNavigation />}>
          <Route exact path="/" element={<FirstPageBundle />} />
          <Route path="/Demo" element={<Demo />} />
          <Route path="/Sell" element={<Sell />} />
          <Route path="/Agents" element={<Agents />} />
        </Route>
        <Route path="/ContactPage" element={<ContactPage />} />
        <Route path="/Agent" element={<Agent />} />

        <Route path="*" element={<Agent />} />
      </Routes>
    </>
  );
}

export default App;
