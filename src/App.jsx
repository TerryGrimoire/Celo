import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Mentions from "./pages/Mentions";
import Error from "./pages/Error";

import "./App.css";

function App() {
  const helmet = {
    title: "À la table de Celo",
    href: "https://changehref.com",
    description: "Les pizzas Hallal de Saint-Denis",
  };
  return (
    <BrowserRouter>
      <HelmetProvider>
        <Header helmet={helmet} />
        <Routes>
          <Route path="/" element={<Home helmet={helmet} />} />
          <Route path="/Services" element={<Services helmet={helmet} />} />
          <Route path="/Mentions" element={<Mentions />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </HelmetProvider>
    </BrowserRouter>
  );
}

export default App;
