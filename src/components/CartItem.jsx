import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { ArrowLeft, Minus, Plus, Trash2, ShoppingBag } from "lucide-react";
import { removeItem, updateQuantity } from "../redux/CartSlice";

export default function CartItem() {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.items);

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
  const totalCost = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  if (items.length === 0) {
    return (
      <main className="page cart-page">
        <section className="empty-cart">
          <ShoppingBag size={64} />
          <h1>Your cart is empty</h1>
          <p>Find a beautiful plant and start building your paradise.</p>
          <Link className="primary-btn" to="/plants">Continue Shopping</Link>
        </section>
      </main>
    );
  }

  return (
    <main className="page cart-page">
      <section className="page-heading cart-heading">
        <p className="eyebrow">YOUR PLANTS</p>
        <h1>Shopping Cart</h1>
        <p>{totalItems} plant{totalItems !== 1 ? "s" : ""} in your cart</p>
      </section>

      <div className="cart-layout">
        <section className="cart-list">
          {items.map((item) => (
            <article className="cart-item" key={item.id}>
              <img src={item.image} alt={item.name} />

              <div className="cart-item-info">
                <span className="category-tag">{item.category}</span>
                <h2>{item.name}</h2>
                <p>Unit price: <strong>${item.price.toFixed(2)}</strong></p>

                <div className="quantity-controls">
                  <button
                    aria-label={`Decrease ${item.name}`}
                    onClick={() =>
                      dispatch(updateQuantity({
                        id: item.id,
                        quantity: item.quantity - 1
                      }))
                    }
                  >
                    <Minus size={16} />
                  </button>

                  <span>{item.quantity}</span>

                  <button
                    aria-label={`Increase ${item.name}`}
                    onClick={() =>
                      dispatch(updateQuantity({
                        id: item.id,
                        quantity: item.quantity + 1
                      }))
                    }
                  >
                    <Plus size={16} />
                  </button>
                </div>
              </div>

              <div className="cart-item-total">
                <strong>${(item.price * item.quantity).toFixed(2)}</strong>
                <button
                  className="delete-btn"
                  onClick={() => dispatch(removeItem(item.id))}
                  aria-label={`Delete ${item.name}`}
                >
                  <Trash2 size={20} />
                  Delete
                </button>
              </div>
            </article>
          ))}
        </section>

        <aside className="summary-card">
          <h2>Order Summary</h2>
          <div className="summary-row">
            <span>Total plants</span>
            <strong>{totalItems}</strong>
          </div>
          <div className="summary-row total">
            <span>Total cost</span>
            <strong>${totalCost.toFixed(2)}</strong>
          </div>

          <button
            className="checkout-btn"
            onClick={() => alert("Coming Soon! Checkout will be available soon.")}
          >
            Checkout
          </button>

          <Link className="continue-btn" to="/plants">
            <ArrowLeft size={18} />
            Continue Shopping
          </Link>
        </aside>
      </div>
    </main>
  );
}