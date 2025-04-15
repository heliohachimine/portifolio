import "react-calendar/dist/Calendar.css";
import "./index.css";
import Landing from "./pages/Landing";
import ExperiencePage from "./pages/ExperiencePage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";

export default function App() {
  return (
    <div className="w-screen min-h-screen overflow-x-hidden">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/experience" element={<ExperiencePage />} />
        </Routes>
      </Router>
    </div>

  );
}
