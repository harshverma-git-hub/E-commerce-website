import { ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useAuth } from "../context/AuthContext";
import { useState } from "react";

export default function Navbar() {
    // temporary login state (later we will connect with real auth)
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const { cartItems } = useCart();
  const { user, logout } = useAuth();

  const cartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);
  {isLoggedIn && (
  <Link to="/profile" className="text-gray-700 hover:text-blue-600">
    Profile
  </Link>
)}

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-blue-600">
          ShopEase
        </Link>

        {/* Nav Links */}
        <div className="hidden md:flex space-x-6 items-center">
          <Link to="/" className="text-gray-700 hover:text-blue-600">
            Home
          </Link>
          <Link to="/cart" className="text-gray-700 hover:text-blue-600">
            Cart
          </Link>
          <Link to="/checkout" className="text-gray-700 hover:text-blue-600">
            Checkout
          </Link>

          {/* Show Login/Signup only if NOT logged in */}
          {!user ? (
            <>
              <Link to="/login" className="text-gray-700 hover:text-blue-600">
                Login
              </Link>
              <Link to="/signup" className="text-gray-700 hover:text-blue-600">
                Signup
              </Link>
            </>
          ) : (
            <>
              <span className="text-gray-700">Hi, {user.name || user.email}</span>
              <button
                onClick={logout}
                className="text-red-500 hover:text-red-700 ml-4"
              >
                Logout
              </button>
            </>
          )}
        </div>

        {/* Cart Icon */}
        <Link to="/cart" className="relative">
          <ShoppingCart className="w-6 h-6 text-gray-700 hover:text-blue-600" />
          {cartCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-1.5 rounded-full">
              {cartCount}
            </span>
          )}
        </Link>
      </div>
    </nav>
  );
}
