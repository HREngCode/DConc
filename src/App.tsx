import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
} from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Commercial from "./pages/Commercial";
import Residential from "./pages/Residential";
import Decorative from "./pages/Decorative";

function App() {
  return (
    <Router>
      <div className="relative min-h-screen before:content-[''] before:absolute before:inset-0 before:bg-[url('./assets/PageBackground.jpg')] before:bg-cover before:bg-center before:bg-fixed before:bg-no-repeat before:opacity-60 before:-z-10">
        <Header />
        <main>
          <Outlet /> {/* This renders your pages like Home, Commercial, etc. */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/commercial" element={<Commercial />} />
            <Route path="/residential" element={<Residential />} />
            <Route path="/decorative" element={<Decorative />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
