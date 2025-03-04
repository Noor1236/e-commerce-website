import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import img1 from '../assets/Running_Shoes.webp';
import img2 from '../assets/Casual_Sneakerswebp.webp';
import img3 from '../assets/Formal_Shoes.webp';
import img4 from '../assets/High_Heels.jpg';
import img5 from '../assets/Slipper.webp';
import img6 from '../assets/Training_Shoes.jpg';
import img7 from '../assets/Sandals.webp';
import img8 from '../assets/Loafers.avif';
import img9 from '../assets/Chunky_Sneakers.avif';
import img10 from '../assets/Slip-On_Sneakers.jpg';

const products = {
  sneakers: [
    { id: 2, name: 'Casual Sneakers', price: 40, img: img2 },
    { id: 9, name: 'Chunky Sneakers', price: 75, img: img9 },
    { id: 10, name: 'Slip-On Sneakers', price: 45, img: img10 },
  ],
  formal: [
    { id: 3, name: 'Formal Shoes', price: 70, img: img3 },
    { id: 4, name: 'High Heels', price: 60, img: img4 },
    { id: 8, name: 'Loafers', price: 65, img: img8 },
  ],
  casual: [
    { id: 5, name: 'Slippers', price: 20, img: img5 },
    { id: 7, name: 'Sandals', price: 30, img: img7 },
  ],
  sports: [
    { id: 1, name: 'Running Shoes', price: 50, img: img1 },
    { id: 6, name: 'Training Shoes', price: 55, img: img6 },
  ],
};

function CategoryPage({ category, title }) {
  const [sortOrder, setSortOrder] = useState('');

  const addToCart = (product) => {
    const existingCart = JSON.parse(localStorage.getItem('cart')) || [];
    const existingProduct = existingCart.find((item) => item.id === product.id);

    if (existingProduct) {
      existingProduct.quantity += 1;
    } else {
      existingCart.push({ ...product, quantity: 1 });
    }

    localStorage.setItem('cart', JSON.stringify(existingCart));
    alert(`${product.name} added to cart!`);
  };

  const sortedProducts = [...products[category]].sort((a, b) => {
    if (sortOrder === 'low-to-high') return a.price - b.price;
    if (sortOrder === 'high-to-low') return b.price - a.price;
    return 0;
  });

  return (
    <div className="mt-4">
      <h2>{title}</h2>
      <div className="filters mb-4">
        <select onChange={(e) => setSortOrder(e.target.value)} className="form-select">
          <option value="">Sort by</option>
          <option value="low-to-high">Price: Low to High</option>
          <option value="high-to-low">Price: High to Low</option>
        </select>
      </div>
      <div className="row product-grid">
        {sortedProducts.map((product) => (
          <div className="col-md-3 mb-4" key={product.id}>
            <div className="product-card">
              <img src={product.img} className="card-img-top" alt={product.name} />
              <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">${product.price.toFixed(2)}</p>
                <Link to={`/product/${product.id}`} className="btn btn-primary">
                  View Details
                </Link>
                <button className="btn btn-success ms-2" onClick={() => addToCart(product)}>
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Link to="/" className="btn btn-primary mt-4">
        Back to Home
      </Link>
    </div>
  );
}

export { CategoryPage };

// You can now use this component in your routes like:
// <CategoryPage category="sneakers" title="Sneakers Collection" />
// <CategoryPage category="formal" title="Formal Shoes Collection" />
// <CategoryPage category="casual" title="Casual Shoes Collection" />
// <CategoryPage category="sports" title="Sports Shoes Collection" />

// Let me know if you want any changes or enhancements! 🚀
