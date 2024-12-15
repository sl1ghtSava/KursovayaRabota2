import "./App.css";
import { Header } from "./header/Header";
import { Footer } from "./footer/Footer";
import { Main } from "./main/Main";
import { Catalog } from "./catalog/Catalog";
import { Aboutus } from "./aboutus/Aboutus";
import { Cart } from "./catalog/Cart";
import { Product } from "./catalog/Product";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="main">
      <Router>
        <Header />
        <div class="mainContent">
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/catalog" element={<Catalog />} />
            <Route path="/aboutus" element={<Aboutus />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/product" element={<Product />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
