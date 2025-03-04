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


const products = [
  { id: 1, name: 'Running Shoes', price: 50, category: 'Sports Shoes', img: img1 },
  { id: 2, name: 'Casual Sneakers', price: 40, category: 'Sneakers', img: img2 },
  { id: 3, name: 'Formal Shoes', price: 70, category: 'Formal Shoes', img: img3 },
  { id: 4, name: 'High Heels', price: 60, category: 'Formal Shoes', img: img4 },
  { id: 5, name: 'Slippers', price: 20, category: 'Casual Shoes', img: img5 },
  { id: 6, name: 'Training Shoes', price: 55, category: 'Sports Shoes', img: img6 },
  { id: 7, name: 'Sandals', price: 30, category: 'Casual Shoes', img: img7 },
  { id: 8, name: 'Loafers', price: 65, category: 'Formal Shoes', img: img8 },
  { id: 9, name: 'Chunky Sneakers', price: 75, category: 'Sneakers', img: img9 },
  { id: 10, name: 'Slip-On Sneakers', price: 45, category: 'Sneakers', img: img10 },
];

function ProductListing() {
  const [sortOrder, setSortOrder] = useState('');
  const [filterCategory, setFilterCategory] = useState('');
  const [filterPrice, setFilterPrice] = useState(0);

  // Add to cart function
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

  const filteredProducts = products
    .filter((product) => !filterCategory || product.category === filterCategory)
    .filter((product) => !filterPrice || product.price <= filterPrice)
    .sort((a, b) => {
      if (sortOrder === 'low-to-high') return a.price - b.price;
      if (sortOrder === 'high-to-low') return b.price - a.price;
      return 0;
    });

  return (
    <div className="mt-4">
      <h2>Product Listing</h2>
      <div className="filters mb-4">
        <select onChange={(e) => setSortOrder(e.target.value)} className="form-select">
          <option value="">Sort by</option>
          <option value="low-to-high">Price: Low to High</option>
          <option value="high-to-low">Price: High to Low</option>
        </select>
        <select onChange={(e) => setFilterCategory(e.target.value)} className="form-select">
          <option value="">All Categories</option>
          <option value="Sports Shoes">Sports Shoes</option>
          <option value="Casual Shoes">Casual Shoes</option>
          <option value="Formal Shoes">Formal Shoes</option>
          <option value="Sneakers">Sneakers</option>
        </select>
        <input
          type="number"
          className="form-control"
          placeholder="Max Price"
          onChange={(e) => setFilterPrice(Number(e.target.value))}
        />
      </div>
      <div className="row product-grid">
        {filteredProducts.map((product) => (
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
    </div>
  );
}

export default ProductListing;
