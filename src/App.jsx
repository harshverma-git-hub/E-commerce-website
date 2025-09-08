import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import FeaturedProducts from "./Components/FeaturedProducts";
import Categories from "./Components/Categories";
import CategoryPage from "./Components/CategoryPage";
import Footer from "./Components/Footer";
import ProductDetails from "./Components/ProductDetails";
import Cart from "./Components/Cart";
import Checkout from "./Components/Checkout";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import Profile from "./Components/Profile";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <FeaturedProducts />
              <Categories />
            </>
          }
        />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/category/:id" element={<CategoryPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
