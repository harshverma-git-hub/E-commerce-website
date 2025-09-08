export default function Checkout() {
  // Dummy order data
  const orderSummary = [
    { id: 1, name: "Wireless Headphones", price: 2499, qty: 1 },
    { id: 2, name: "Smart Watch", price: 4999, qty: 2 },
  ];

  const subtotal = orderSummary.reduce(
    (acc, item) => acc + item.price * item.qty,
    0
  );
  const shipping = 99; // Flat rate
  const total = subtotal + shipping;

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Checkout Form */}
        <div className="lg:col-span-2 bg-white p-6 rounded-lg shadow">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Checkout</h2>

          {/* Shipping Info */}
          <form className="space-y-6">
            <div>
              <label className="block text-gray-700 font-medium">Full Name</label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full mt-2 border px-4 py-2 rounded-lg focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium">Address</label>
              <textarea
                placeholder="Street, Apartment, etc."
                rows="3"
                className="w-full mt-2 border px-4 py-2 rounded-lg focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-700 font-medium">City</label>
                <input
                  type="text"
                  placeholder="Enter city"
                  className="w-full mt-2 border px-4 py-2 rounded-lg focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium">Pincode</label>
                <input
                  type="text"
                  placeholder="Enter pincode"
                  className="w-full mt-2 border px-4 py-2 rounded-lg focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            <div>
              <label className="block text-gray-700 font-medium">Phone Number</label>
              <input
                type="text"
                placeholder="Enter phone"
                className="w-full mt-2 border px-4 py-2 rounded-lg focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Payment Method */}
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">Payment Method</h3>
              <div className="flex flex-col gap-2">
                <label className="flex items-center gap-2">
                  <input type="radio" name="payment" defaultChecked /> Cash on Delivery
                </label>
                <label className="flex items-center gap-2">
                  <input type="radio" name="payment" /> Credit / Debit Card
                </label>
                <label className="flex items-center gap-2">
                  <input type="radio" name="payment" /> UPI / Net Banking
                </label>
              </div>
            </div>

            <button
              type="submit"
              className="w-full mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
            >
              Place Order
            </button>
          </form>
        </div>

        {/* Order Summary */}
        <div className="bg-white p-6 rounded-lg shadow h-fit">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Order Summary</h2>
          <div className="space-y-3">
            {orderSummary.map((item) => (
              <div
                key={item.id}
                className="flex justify-between text-gray-700"
              >
                <span>
                  {item.name} x {item.qty}
                </span>
                <span>₹{(item.price * item.qty).toFixed(2)}</span>
              </div>
            ))}
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>₹{subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span>Shipping</span>
              <span>₹{shipping}</span>
            </div>
            <div className="flex justify-between font-bold text-lg">
              <span>Total</span>
              <span>₹{total.toFixed(2)}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
