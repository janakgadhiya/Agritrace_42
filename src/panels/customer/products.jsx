import React from "react";
import { useNavigate } from "react-router-dom"; // Import the useNavigate hook
import "./products.css"; // Import the CSS file for styling

const ProductContainer = ({ handleAddToCart }) => {
  const navigate = useNavigate(); // Initialize the navigate function

  // Sample product data
  const products = [
    {
      name: "Wheat",
      price: "₹500/kg",
      image: "/wheat.jpg",
      farmer: "Farmer: Rajesh Patel",
    },
    {
      name: "Rice",
      price: "₹300/kg",
      image: "/rice.jpeg",
      farmer: "Farmer: Sunil Mehta",
    },
    {
      name: "Potatoes",
      price: "₹30/kg",
      image: "/potato.jpeg",
      farmer: "Farmer: Priya Desai",
    },
    {
      name: "Tomatoes",
      price: "₹40/kg",
      image: "/tomato.jpeg",
      farmer: "Farmer: Rakesh Chauhan",
    },
  ];

  // Function to handle Add to Cart and navigate to the customer panel
  const handleAddToCartAndRedirect = (product) => {
    handleAddToCart(product); // Add the product to the cart
    navigate("/customer"); // Redirect to the customer panel
  };

  return (
    <div>
      <h2 className="product-heading">Our Products</h2>
      <div className="product-container">
        {products.map((product) => (
          <div className="product-card" key={product.name}>
            <img
              src={product.image}
              alt={product.name}
              className="product-image"
            />
            <h3 className="product-name">{product.name}</h3>
            <p className="product-price">{product.price}</p>
            <button
              className="add-to-cart-btn"
              onClick={() => handleAddToCartAndRedirect(product)} // Call the new function
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductContainer;
