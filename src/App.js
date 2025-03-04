import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProductListing from './pages/ProductListing';
import ProductDetails from './pages/ProductDetails';
import CartPage from './pages/CartPage';
import CheckoutPage from './pages/CheckoutPage';
import Layout from './components/Layout';
import { FormalShoes, Sneakers, CasualShoes, SportsShoes, CategoryPage } from './pages/CategoryPages';

function App() {
  return (
    <Router>
      <div className="container-fluid p-0">
        <Layout>
          <div className="container mt-4">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/product" element={<ProductListing />} />
              <Route path="/product/:id" element={<ProductDetails />} />
              <Route path="/cart" element={<CartPage />} />
              <Route path="/checkout" element={<CheckoutPage />} />
              {/* <Route path="/category" element={<CategoryPage />} /> */}
              <Route path="/product/sneakers" element={<CategoryPage category="sneakers" title="Sneakers Collection" />} />
              <Route path="/product/formal-shoes" element={<CategoryPage category="formal" title="Formal Shoes Collection" />} />
              <Route path="product/casual-shoes" element={<CategoryPage category="casual" title="Casual Shoes Collection" />} />
              <Route path="/product/sports-shoes" element={<CategoryPage category="sports" title="Sports Shoes Collection" />} />

            </Routes>
          </div>
        </Layout>
      </div>
    </Router>
  );
}

export default App;
