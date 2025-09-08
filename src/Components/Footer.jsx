import { Facebook, Twitter, Instagram, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 mt-12">
      <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-4 gap-10">
        
        {/* Brand / About */}
        <div>
          <h2 className="text-2xl font-bold text-white">MyShop</h2>
          <p className="mt-4 text-gray-400">
            Your one-stop destination for fashion, electronics, and accessories.
            Shop smart, shop easy.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="/" className="hover:text-white">Home</a></li>
            <li><a href="/shop" className="hover:text-white">Shop</a></li>
            <li><a href="/categories" className="hover:text-white">Categories</a></li>
            <li><a href="/contact" className="hover:text-white">Contact</a></li>
          </ul>
        </div>

        {/* Customer Support */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Customer Support</h3>
          <ul className="space-y-2">
            <li><a href="/faq" className="hover:text-white">FAQ</a></li>
            <li><a href="/shipping" className="hover:text-white">Shipping & Returns</a></li>
            <li><a href="/privacy" className="hover:text-white">Privacy Policy</a></li>
            <li><a href="/terms" className="hover:text-white">Terms & Conditions</a></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Stay Updated</h3>
          <p className="text-gray-400 mb-4">Subscribe to our newsletter for exclusive offers.</p>
          <form className="flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-3 py-2 rounded-l-lg focus:outline-none text-gray-800"
            />
            <button
              type="submit"
              className="bg-blue-600 px-4 py-2 rounded-r-lg text-white hover:bg-blue-700 transition"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-12 border-t border-gray-700 pt-6 flex flex-col md:flex-row items-center justify-between px-6 md:px-12">
        <p className="text-gray-400 text-sm">
          © {new Date().getFullYear()} MyShop. All rights reserved.
        </p>

        {/* Social Media */}
        <div className="flex gap-4 mt-4 md:mt-0">
          <a href="#" className="hover:text-white"><Facebook /></a>
          <a href="#" className="hover:text-white"><Twitter /></a>
          <a href="#" className="hover:text-white"><Instagram /></a>
          <a href="#" className="hover:text-white"><Youtube /></a>
        </div>
      </div>
    </footer>
  );
}