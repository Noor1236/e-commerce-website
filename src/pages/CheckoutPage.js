import { useLocation , useNavigate } from 'react-router-dom';
import { useState } from 'react';

function CheckoutPage() {
  const location = useLocation();
  const totalAmount = Number(location.state?.totalAmount || 0);
  const [orderPlaced, setOrderPlaced] = useState(false);
  const navigate = useNavigate();

  const handleOrder = (e) => {
    e.preventDefault();
    setOrderPlaced(true);

    // Clear the cart after placing the order
    localStorage.removeItem('cart');
  };

  return (
    <div className="checkout-container mt-4">
      <div className="left-side">
        <button className="back-btn" onClick={() => navigate(-1)}>
          ← Back
        </button>
      </div>
      {orderPlaced ? (
        <div className="thank-you-message text-center">
          <h3>Thank you for shopping! 🎉</h3>
          <p>Your order has been placed successfully. We’ll deliver your items soon.</p>
        </div>
      ) : (
        <>
          <h2>Checkout</h2>
          <form className="checkout-form" onSubmit={handleOrder}>
            <div className="form-group">
              <label>Name</label>
              <input type="text" className="form-control" placeholder="Enter your name" required />
            </div>
            <div className="form-group">
              <label>Address</label>
              <textarea className="form-control" placeholder="Enter your address" required></textarea>
            </div>
            <div className="form-group">
              <label>Contact Number</label>
              <input type="tel" className="form-control" placeholder="Enter your contact number" required />
            </div>
            <div className="form-group">
              <label>Payment Method</label>
              <input type="text" className="form-control" value="Cash on Delivery" readOnly />
            </div>
            <div className="order-amount">
              <h4>Total Amount: ${totalAmount.toFixed(2)}</h4>
            </div>
            <button type="submit" className="btn btn-success">Place Order</button>
          </form>
        </>
      )}
    </div>
  );
}

export default CheckoutPage;
