import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Search from "./pages/Search";
import Cifra from "./pages/Cifra";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/music/:id" element={<Cifra />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
