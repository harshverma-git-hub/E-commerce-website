import { useState } from "react";

export default function Profile() {
  const [user, setUser] = useState({
    name: "Harsh Verma",
    email: "harsh@example.com",
    address: "Agra, Uttar Pradesh",
  });

  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState(user);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    setUser(formData);
    setIsEditing(false);
  };

  return (
    <div className="container mx-auto px-6 py-10">
      <h2 className="text-3xl font-bold mb-6">My Profile</h2>

      <div className="bg-white shadow-md rounded-lg p-6 w-full md:w-2/3 lg:w-1/2">
        {isEditing ? (
          <div className="space-y-4">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-2 border rounded-md"
              placeholder="Name"
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 border rounded-md"
              placeholder="Email"
            />
            <textarea
              name="address"
              value={formData.address}
              onChange={handleChange}
              className="w-full p-2 border rounded-md"
              placeholder="Address"
            />
            <div className="flex gap-4">
              <button
                onClick={handleSave}
                className="bg-blue-600 text-white px-4 py-2 rounded-md"
              >
                Save
              </button>
              <button
                onClick={() => setIsEditing(false)}
                className="bg-gray-400 text-white px-4 py-2 rounded-md"
              >
                Cancel
              </button>
            </div>
          </div>
        ) : (
          <div className="space-y-4">
            <p><span className="font-semibold">Name:</span> {user.name}</p>
            <p><span className="font-semibold">Email:</span> {user.email}</p>
            <p><span className="font-semibold">Address:</span> {user.address}</p>

            <div className="flex gap-4 mt-4">
              <button
                onClick={() => setIsEditing(true)}
                className="bg-blue-600 text-white px-4 py-2 rounded-md"
              >
                Edit Profile
              </button>
              <button
                className="bg-green-600 text-white px-4 py-2 rounded-md"
              >
                View Orders
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
