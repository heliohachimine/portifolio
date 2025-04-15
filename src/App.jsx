import "react-calendar/dist/Calendar.css";
import "./index.css";
import Landing from "./pages/Landing";
import ExperiencePage from "./pages/ExperiencePage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import { AnimatePresence } from "framer-motion";
import Details from "./pages/CurriculumDetail";

export default function App() {
  return (
    <div className="w-screen min-h-screen overflow-x-hidden">
      <Router>
        <Header />
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/experience" element={<ExperiencePage />} />
            <Route path="/details/:id" element={<Details />} />
          </Routes>
        </AnimatePresence>
      </Router>
    </div>
  );
}
