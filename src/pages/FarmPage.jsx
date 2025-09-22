import React, { useState } from "react";

// Import images and videos
import goats1 from "../assets/goats1.jpg";
import goats2 from "../assets/goats2.jpg";
import sheep1 from "../assets/sheep1.jpg";
import farm1 from "../assets/farm1.jpg";
import farmg1 from "../assets/farmg1.jpg";
import farmg2 from "../assets/farmg2.jpg";
import farmg3 from "../assets/farmg3.jpg";
import farmg4 from "../assets/farmg4.jpg";
import farmg5 from "../assets/farmg5.jpg";

import farmVideo1 from "../assets/farm-video1.mp4";
import farmVideo2 from "../assets/farm-video2.mp4";
import farmVideo3 from "../assets/farm-video3.mp4";

// Farm media
const farmMedia = [
  { type: "image", src: goats1, alt: "Goats grazing" },
  { type: "image", src: goats2, alt: "Goat herd" },
  { type: "image", src: sheep1, alt: "Sheep herd" },
  { type: "image", src: farm1, alt: "Farm overview" },
  { type: "image", src: farmg1, alt: "Farm scene 1" },
  { type: "image", src: farmg2, alt: "Farm scene 2" },
  { type: "image", src: farmg3, alt: "Farm scene 3" },
  { type: "image", src: farmg4, alt: "Farm scene 4" },
  { type: "image", src: farmg5, alt: "Farm scene 5" },
  { type: "video", src: farmVideo1, alt: "Farm tour 1" },
  { type: "video", src: farmVideo2, alt: "Farm tour 2" },
  { type: "video", src: farmVideo3, alt: "Farm tour 3" },
];

// Livestock categories
const livestockCategories = [
  {
    name: "Goats",
    description:
      "Healthy, vaccinated goats available for breeding or meat purposes.",
    priceRange: "₹8,000 - ₹15,000",
    image: goats1,
  },
  {
    name: "Sheep",
    description:
      "Healthy sheep for sale, suitable for meat or breeding purposes.",
    priceRange: "₹7,000 - ₹12,000",
    image: sheep1,
  },
];

export default function FarmPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [enquiryProduct, setEnquiryProduct] = useState(null);

  const openModal = (index) => {
    setCurrentIndex(index);
    setModalOpen(true);
  };
  const closeModal = () => setModalOpen(false);
  const prevMedia = () =>
    setCurrentIndex((prev) => (prev === 0 ? farmMedia.length - 1 : prev - 1));
  const nextMedia = () =>
    setCurrentIndex((prev) => (prev === farmMedia.length - 1 ? 0 : prev + 1));

  const openEnquiryModal = (product) => setEnquiryProduct(product);
  const closeEnquiryModal = () => setEnquiryProduct(null);

  const whatsappNumber = "918073684699";
  const whatsappMessage = enquiryProduct
    ? `Hello! I am interested in your product: ${enquiryProduct.name}. Can you provide more details?`
    : "";

  return (
    <div className="min-h-screen bg-green-100 pt-24 space-y-12">
      {/* Page Title */}
      <h1 className="text-3xl font-bold text-center text-green-800 mb-8">
        Amrit Goat & Sheep Farm
      </h1>

      {/* Google Maps link */}
      <div className="text-center">
        <a
          href="https://www.google.com/maps/search/?api=1&query=Kotyal%20road%2C%20opp.%20HP%20Gas%2C%20near%20Kencharayanna%20Gudi%2C%20Kanamadi%2C%20Vijayapura"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          View Location on Google Maps
        </a>
      </div>

      {/* Farm Gallery */}
      <section className="p-6 bg-green-50 rounded-xl shadow-lg">
        <h2 className="text-2xl font-bold text-green-700 mb-6 text-center">
          Farm Gallery
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {farmMedia.map((item, idx) => (
            <div
              key={idx}
              className="rounded-lg overflow-hidden shadow-md cursor-pointer"
              onClick={() => openModal(idx)}
            >
              {item.type === "image" ? (
                <img
                  src={item.src}
                  alt={item.alt}
                  className="w-full h-48 object-cover"
                  loading="lazy"
                />
              ) : (
                <video
                  src={item.src}
                  className="w-full h-48 object-cover"
                  muted
                  loop
                  autoPlay
                  playsInline
                />
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Modal Slider */}
      {modalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex flex-col items-center justify-center z-50 p-4 overflow-auto">
          <div className="relative max-w-4xl w-full">
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-white text-2xl hover:text-red-500"
            >
              ✖
            </button>
            <button
              onClick={prevMedia}
              className="absolute left-2 top-1/2 transform -translate-y-1/2 text-white text-3xl hover:text-green-300"
            >
              ◀
            </button>
            <button
              onClick={nextMedia}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 text-white text-3xl hover:text-green-300"
            >
              ▶
            </button>

            {farmMedia[currentIndex].type === "image" ? (
              <img
                src={farmMedia[currentIndex].src}
                alt={farmMedia[currentIndex].alt}
                className="mx-auto max-h-[70vh] rounded-lg"
              />
            ) : (
              <video
                controls
                autoPlay
                className="mx-auto max-h-[70vh] rounded-lg"
              >
                <source src={farmMedia[currentIndex].src} type="video/mp4" />
              </video>
            )}
            <p className="text-white text-center mt-2">
              {farmMedia[currentIndex].alt}
            </p>

            {/* Thumbnails */}
            <div className="flex flex-wrap justify-center mt-4 gap-2 overflow-x-auto">
              {farmMedia.map((item, idx) => (
                <div
                  key={idx}
                  className={`w-20 h-20 border-2 rounded-lg cursor-pointer ${
                    idx === currentIndex
                      ? "border-green-500"
                      : "border-transparent"
                  }`}
                  onClick={() => setCurrentIndex(idx)}
                >
                  {item.type === "image" ? (
                    <img
                      src={item.src}
                      alt={item.alt}
                      className="w-full h-full object-cover rounded-lg"
                    />
                  ) : (
                    <video
                      src={item.src}
                      muted
                      className="w-full h-full object-cover rounded-lg"
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Livestock Section */}
      <section className="p-6 bg-green-50 rounded-xl shadow-lg">
        <h2 className="text-2xl font-bold text-green-700 mb-6 text-center">
          Livestock for Sale
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {livestockCategories.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl shadow-md p-4 flex flex-col items-center text-center hover:shadow-lg transition"
            >
              <img
                src={item.image}
                alt={item.name}
                className="h-40 w-full object-cover rounded-lg mb-4"
              />
              <h3 className="text-lg font-semibold text-green-700 mb-2">
                {item.name}
              </h3>
              <p className="text-gray-700 mb-2">{item.description}</p>
              <p className="text-gray-700 font-semibold mb-2">
                Price Range: {item.priceRange}
              </p>
              <button
                onClick={() => openEnquiryModal(item)}
                className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
              >
                Contact for Enquiry
              </button>
            </div>
          ))}
        </div>
      </section>

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
              Enquire about {enquiryProduct.name}
            </h3>
            <p className="text-gray-700 mb-6">
              How would you like to contact us?
            </p>
            <div className="flex justify-around">
              <a
                href="tel:8073684699"
                className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
              >
                Call
              </a>
              <a
                href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                  whatsappMessage
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
