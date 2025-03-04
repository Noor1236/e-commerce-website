import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function CartPage() {
  const [cart, setCart] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCart(savedCart);
  }, []);

  const updateQuantity = (id, quantity) => {
    const updatedCart = cart.map(item => item.id === id ? { ...item, quantity } : item);
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  const removeItem = (id) => {
    const updatedCart = cart.filter(item => item.id !== id);
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  const getTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  const proceedToCheckout = () => {
    navigate('/checkout', { state: { totalAmount: getTotal() } });
  };

  return (
    <div className="mt-4 checkout-container">
      <div className="left-side">
        <button className="back-btn" onClick={() => navigate(-1)}>
          ← Back
        </button>
      </div>
      <h2>Shopping Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cart.map((item) => (
            <div key={item.id} className="cart-item d-flex justify-content-between align-items-center p-3 border">
              <img src={item.img} alt={item.name} className="cart-item-image" style={{ width: '80px', borderRadius: '5px' }} />
              <div className="cart-item-details">
                <h5>{item.name}</h5>
                <p>${item.price} x {item.quantity} = ${item.price * item.quantity}</p>
                <input 
                  type="number" 
                  min="1" 
                  value={item.quantity} 
                  onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))} 
                  className="form-control w-25"
                />
                <button className="btn btn-danger mt-2" onClick={() => removeItem(item.id)}>
                  Remove
                </button>
              </div>
            </div>
          ))}
          <div className="cart-total mt-4">
            <h4>Total: ${getTotal()}</h4>
          </div>
          <button className="btn btn-primary mt-3" onClick={proceedToCheckout}>Proceed to Checkout</button>
        </div>
      )}
    </div>
  );
}

export default CartPage;
