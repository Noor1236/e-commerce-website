import { Link } from 'react-router-dom';
import banner from '../assets/banner-1.webp';
import formal from '../assets/classic_formal.webp';
import sneaker from '../assets/Urban_sneakers.webp';
import casual from '../assets/Casual_Loafers.jpg';
import sport from '../assets/Running_Pro.webp';



function HomePage() {
    return (
        <div className="mt-4 text-center">
            <div className="banner">
                <img
                    src={banner}
                    alt="Featured Shoes"
                    className="banner-image"
                />
                <div className="banner-content">
                    <h1>Step Into Style</h1>
                    <p>Discover our handpicked collection of trending and top-rated shoes.</p>
                    <Link to="/product" className="btn btn-primary">Shop Now</Link>
                </div>
            </div>

            <h2 className="mt-5">Categories</h2>
            <div className="categories">
                <Link to="/product/formal-shoes" className="category-card">
                    Formal Shoes
                </Link>
                <Link to="/product/sneakers" className="category-card">
                    Sneakers
                </Link>
                <Link to="/product/casual-shoes" className="category-card">
                    Casual Shoes
                </Link>
                <Link to="/product/sports-shoes" className="category-card">
                    Sports Shoes
                </Link>

            </div>

            <h2 className="mt-5">Trending Shoes</h2>
            <div className="trending-shoes">
                <Link to="/product/formal-shoes" className="shoe-card">
                    <img
                        src={formal}
                        alt="Formal Shoe"
                    />
                    <h3>Classic Oxford</h3>
                    <p>Perfect for formal occasions.</p>
                </Link>
                <Link to="/product/sneakers" className="shoe-card">
                    <img
                        src={sneaker}
                        alt="Sneaker"
                    />
                    <h3>Urban Sneakers</h3>
                    <p>Stay stylish on the streets.</p>
                </Link>
                <Link to="/product/casual-shoes" className="shoe-card">
                    <img
                        src={casual}
                        alt="Casual Shoe"
                    />
                    <h3>Casual Loafers</h3>
                    <p>Relaxed and comfortable.</p>
                </Link>
                <Link to="/product/sports-shoes" className="shoe-card">
                    <img
                        src={sport}
                        alt="Sports Shoe"
                    />
                    <h3>Running Pro</h3>
                    <p>For your active lifestyle.</p>
                </Link>
            </div>

        </div>
    );
}

export default HomePage;
