import { Routes, Route, Link } from "react-router-dom";
import { ShoppingCart, Leaf } from "lucide-react";
import { useSelector } from "react-redux";
import ProductList from "./components/ProductList";
import CartItem from "./components/CartItem";
import AboutUs from "./components/AboutUs";

function Navbar() {
  const totalItems = useSelector((state) =>
    state.cart.items.reduce((sum, item) => sum + item.quantity, 0)
  );

  return (
    <header className="navbar">
      <Link className="brand" to="/">
        <Leaf size={28} />
        <span>Paradise Nursery</span>
      </Link>

      <nav>
        <Link to="/">Home</Link>
        <Link to="/plants">Plants</Link>
        <Link className="cart-link" to="/cart" aria-label={`Cart with ${totalItems} items`}>
          <ShoppingCart size={22} />
          <span>Cart</span>
          <span className="cart-badge">{totalItems}</span>
        </Link>
      </nav>
    </header>
  );
}

function Home() {
  return (
    <main className="landing-page">
      <div className="landing-overlay">
        <section className="hero-card">
          <div className="hero-icon"><Leaf size={44} /></div>
          <p className="eyebrow">WELCOME TO YOUR GREEN SPACE</p>
          <h1>Paradise Nursery</h1>
          <AboutUs />
          <Link className="primary-btn" to="/plants">Get Started</Link>
        </section>
      </div>
    </main>
  );
}

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/plants" element={<ProductList />} />
        <Route path="/cart" element={<CartItem />} />
      </Routes>
    </>
  );
}