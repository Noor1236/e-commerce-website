import { useParams, useNavigate } from 'react-router-dom';
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
  { 
    id: 1, 
    name: 'Running Shoes', 
    price: 50, 
    category: 'Sports Shoes', 
    img: img1, 
    description: 'Lightweight and comfortable running shoes designed for maximum performance and support during your workouts.'
  },
  { 
    id: 2, 
    name: 'Casual Sneakers', 
    price: 40, 
    category: 'Sneakers', 
    img: img2, 
    description: 'Stylish and versatile sneakers perfect for everyday wear, combining comfort and fashion effortlessly.'
  },
  { 
    id: 3, 
    name: 'Formal Shoes', 
    price: 70, 
    category: 'Formal Shoes', 
    img: img3, 
    description: 'Elegant and polished formal shoes crafted with premium materials, ideal for business or special occasions.'
  },
  { 
    id: 4, 
    name: 'High Heels', 
    price: 60, 
    category: 'Formal Shoes', 
    img: img4, 
    description: 'Chic and sophisticated high heels that elevate your style, perfect for parties, weddings, or a night out.'
  },
  { 
    id: 5, 
    name: 'Slippers', 
    price: 20, 
    category: 'Casual Shoes', 
    img: img5, 
    description: 'Soft and cozy slippers for ultimate comfort at home, with a non-slip sole for safety and convenience.'
  },
  { 
    id: 6, 
    name: 'Training Shoes', 
    price: 55, 
    category: 'Sports Shoes', 
    img: img6, 
    description: 'Durable and flexible training shoes built to support a wide range of exercises, from weightlifting to HIIT workouts.'
  },
  { 
    id: 7, 
    name: 'Sandals', 
    price: 30, 
    category: 'Casual Shoes', 
    img: img7, 
    description: 'Breathable and comfy sandals designed for warm days, with cushioned soles for all-day comfort and ease.'
  },
  { 
    id: 8, 
    name: 'Loafers', 
    price: 65, 
    category: 'Formal Shoes', 
    img: img8, 
    description: 'Classic loafers with a sleek design, perfect for adding a touch of class to your formal or semi-formal outfit.'
  },
  { 
    id: 9, 
    name: 'Chunky Sneakers', 
    price: 75, 
    category: 'Sneakers', 
    img: img9, 
    description: 'Bold and trendy chunky sneakers that make a statement, with extra cushioning for standout style and comfort.'
  },
  { 
    id: 10, 
    name: 'Slip-On Sneakers', 
    price: 45, 
    category: 'Sneakers', 
    img: img10, 
    description: 'Convenient and sleek slip-on sneakers for on-the-go fashion, combining ease of wear with modern design.'
  },
];

function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) return <h2>Product not found!</h2>;

  const addToCart = () => {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const existingProduct = cart.find((item) => item.id === product.id);
    if (existingProduct) {
      existingProduct.quantity += 1;
    } else {
      cart.push({ ...product, quantity: 1 });
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    alert(`${product.name} added to cart!`);
  };

  return (
    <div className="product-container mt-5">
      <div className="left-side">
        <button className="back-btn" onClick={() => navigate(-1)}>
          ← Back
        </button>
      </div>
      <h2 className="product-title">{product.name}</h2>
      <div className="item-showcase">
        <img src={product.img} className="product-image" alt={product.name} />
        <div className="product-details">
          <h5 className="product-name">{product.name}</h5>
          <p className="product-price">${product.price}</p>
          <p className="product-description">{product.description}</p>
          <label className="product-size-label">Size:</label>
          <select className="product-size-select">
            <option>6</option>
            <option>7</option>
            <option>8</option>
            <option>9</option>
          </select>
          <button className="product-add-btn" onClick={addToCart}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
