import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./components/Landing";
import Cake from "./components/Cake";
import Montage from "./components/Montage";
import "./App.css";
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/cake" element={<Cake />} />
        <Route path="/montage" element={<Montage />} />
      </Routes>
    </BrowserRouter>
  );
}
