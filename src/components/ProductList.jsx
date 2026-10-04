import { useSelector, useDispatch } from "react-redux";
import { addItem } from "../redux/CartSlice";

const products = [
  {
    id: 1,
    name: "Snake Plant",
    category: "Indoor Plants",
    price: 24.99,
    image: "https://images.unsplash.com/photo-1593691509543-c55fb32e5cee?auto=format&fit=crop&w=700&q=80"
  },
  {
    id: 2,
    name: "Peace Lily",
    category: "Indoor Plants",
    price: 29.99,
    image: "https://images.unsplash.com/photo-1593482892290-f54927ae1bb6?auto=format&fit=crop&w=700&q=80"
  },
  {
    id: 3,
    name: "ZZ Plant",
    category: "Indoor Plants",
    price: 27.5,
    image: "https://images.unsplash.com/photo-1614594975525-e45190c55d0b?auto=format&fit=crop&w=700&q=80"
  },
  {
    id: 4,
    name: "Aloe Vera",
    category: "Succulents",
    price: 18.99,
    image: "https://images.unsplash.com/photo-1596547609652-9cf5d8d2c2d8?auto=format&fit=crop&w=700&q=80"
  },
  {
    id: 5,
    name: "Jade Plant",
    category: "Succulents",
    price: 21.99,
    image: "https://images.unsplash.com/photo-1567183242400-3f8c6e6e0f6f?auto=format&fit=crop&w=700&q=80"
  },
  {
    id: 6,
    name: "Haworthia",
    category: "Succulents",
    price: 16.5,
    image: "https://images.unsplash.com/photo-1509423350716-97f9360b4e09?auto=format&fit=crop&w=700&q=80"
  },
  {
    id: 7,
    name: "Monstera Deliciosa",
    category: "Tropical Plants",
    price: 39.99,
    image: "https://images.unsplash.com/photo-1614594576373-acb2f5a2a1f7?auto=format&fit=crop&w=700&q=80"
  },
  {
    id: 8,
    name: "Areca Palm",
    category: "Tropical Plants",
    price: 34.99,
    image: "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=700&q=80"
  },
  {
    id: 9,
    name: "Calathea",
    category: "Tropical Plants",
    price: 32.99,
    image: "https://images.unsplash.com/photo-1616764122533-3c4b5c0f4a85?auto=format&fit=crop&w=700&q=80"
  }
];

const categories = ["Indoor Plants", "Succulents", "Tropical Plants"];

export default function ProductList() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const isInCart = (id) => cartItems.some((item) => item.id === id);

  return (
    <main className="page">
      <section className="page-heading">
        <p className="eyebrow">EXPLORE OUR COLLECTION</p>
        <h1>Choose your perfect plant</h1>
        <p>Bring a little more life into every room.</p>
      </section>

      {categories.map((category) => (
        <section className="category" key={category}>
          <div className="category-heading">
            <h2>{category}</h2>
            <span>{products.filter((p) => p.category === category).length} plants</span>
          </div>

          <div className="product-grid">
            {products
              .filter((product) => product.category === category)
              .map((product) => (
                <article className="product-card" key={product.id}>
                  <img src={product.image} alt={product.name} />
                  <div className="product-info">
                    <span className="category-tag">{product.category}</span>
                    <h3>{product.name}</h3>
                    <div className="product-bottom">
                      <strong>${product.price.toFixed(2)}</strong>
                      <button
                        className="add-btn"
                        disabled={isInCart(product.id)}
                        onClick={() => dispatch(addItem(product))}
                      >
                        {isInCart(product.id) ? "Added ✓" : "Add to Cart"}
                      </button>
                    </div>
                  </div>
                </article>
              ))}
          </div>
        </section>
      ))}
    </main>
  );
}

export { products };