import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import FloatingButtons from "./components/FloatingButtons";

import Home from "./pages/Home";
import Products from "./pages/Products";
import FarmPage from "./pages/FarmPage";
import About from "./pages/About";
import Contact from "./pages/Contact";
import EnquiryForm from "./pages/EnquiryForm";
import JoinUs from "./pages/JoinUs";

function App() {
  const [enquiryProduct, setEnquiryProduct] = useState(null);

  const openEnquiryModal = (product) => setEnquiryProduct(product);
  const closeEnquiryModal = () => setEnquiryProduct(null);

  return (
    <div className="flex flex-col min-h-screen relative">
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home onEnquireClick={openEnquiryModal} />} />
          <Route path="/products" element={<Products onEnquireClick={openEnquiryModal} />} />
          <Route path="/farm" element={<FarmPage onEnquireClick={openEnquiryModal} />} />
          <Route path="/about" element={<About onEnquireClick={openEnquiryModal} />} />
          <Route path="/contact" element={<Contact onEnquireClick={openEnquiryModal} />} />
          <Route path="/enquiry" element={<EnquiryForm onEnquireClick={openEnquiryModal} />} />
          <Route path="/join-us" element={<JoinUs onEnquireClick={openEnquiryModal} />} />
        </Routes>
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating YouTube & WhatsApp Buttons */}
      <FloatingButtons />

      {/* Enquiry Modal */}
      {enquiryProduct && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-lg max-w-sm w-full p-6 relative text-center">
            <button
              onClick={closeEnquiryModal}
              className="absolute top-2 right-2 text-gray-500 hover:text-red-600 text-xl"
            >
              ✖
            </button>
            <h3 className="text-xl font-bold text-green-700 mb-4">
              Enquire about {enquiryProduct.name || enquiryProduct}
            </h3>
            <p className="text-gray-700 mb-6">How would you like to contact us?</p>
            <div className="flex justify-around">
              <a
                href="tel:8073684699"
                className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
              >
                Call
              </a>
              <a
                href={`https://wa.me/918073684699?text=${encodeURIComponent(
                  `Hello! I am interested in: ${enquiryProduct.name || enquiryProduct}`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition"
              >
                Message
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
