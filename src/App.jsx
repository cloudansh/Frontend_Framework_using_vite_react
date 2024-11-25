import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import UserProfiles from "./components/UserProfiles";
import ProductInfo from "./components/ProductInfo";

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gradient-to-r from-blue-50 to-gray-100 p-6">
        {/* Navigation Bar */}
        <nav className="flex justify-center space-x-6 mb-8">
          <Link
            to="/profile"
            className="px-6 py-3 text-lg font-medium bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition"
          >
            User Profiles (QUESTION 1)
          </Link>
          <Link
            to="/product"
            className="px-6 py-3 text-lg font-medium bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition"
          >
            Products (QUESTION 2)
          </Link>
        </nav>

        {/* Routes */}
        <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6">
          <Routes>
            <Route path="/profile" element={<UserProfiles />} />
            <Route path="/product" element={<ProductInfo />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
