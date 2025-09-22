import { useState } from "react";
import { useNavigate } from "react-router-dom";

// Import all images from assets
import farm1 from "../assets/farm1.jpg";
import farm2 from "../assets/farm2.jpg";
import farm3 from "../assets/farm3.jpg";
import goat from "../assets/goat.jpg";
import jaggery from "../assets/jaggery.jpeg";

import cowdung from "../assets/cowdung.jpg";
import clmLure from "../assets/clm-lure.webp";
import dbmLure from "../assets/dbm-lure.png";
import esbLure from "../assets/esb-lure.webp";
import fruitFly from "../assets/fruit-fly.png";
import gulabiFly from "../assets/gulabi-fly.png";
import helicOLure from "../assets/helic-o-lure.png";
import melonFly from "../assets/melon-fly.png";
import mvLure from "../assets/mv-lure.png";
import ysbLure from "../assets/ysb-lure.png";
import whiteGrub from "../assets/white-grub-lure.png";
import tomatoLure from "../assets/tomato-lure.png";
import thrips2Lure from "../assets/thrips2-lure.jpg";
import thripsLure from "../assets/thrips-lure.webp";
import spodLureF from "../assets/spodopteraf-lure.png";
import spodOLure from "../assets/spod-o-lure.png";
import redPalmLure from "../assets/red-palm-lure.png";
import pomoLure from "../assets/pomo-lure.webp";
import brinjalLure from "../assets/brinjal-lure.png";
import beetleLure from "../assets/beetle-lure.jpeg";
import bactroceraMinax from "../assets/bactrocera-minax.jpg";
import jaggeryFine from "../assets/jaggery-fine.jpg";
import goat2 from "../assets/goat2.jpg";
import chaffcutter1 from "../assets/cc15.png";

// Import logo
import logo from "../assets/AgriFarm360 Logo.png";

export default function Home() {
  const navigate = useNavigate();
  const [formOpen, setFormOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    product: "",
    city: "",
    country: ""
  });

  const backgrounds = [farm1, farm2, farm3];

  const products = [
    { name: "Jaggery & Organic Produce", image: jaggeryFine, description: "Pure, chemical-free jaggery and natural farm produce." },
    { name: "Goats & Sheep", image: goat2, description: "Healthy goats & sheep — for farms, mutton shops, and festivals." },
    { name: "Chaffcutters", image: chaffcutter1, description: "Motor & engine-operated chaffcutters" },
    { name: "Cow Dung & Manures", image: cowdung, description: "Natural manures (powder, cakes, liquid) and Jeevamrutha." },
  ];

  const movingImages = [
    farm1, farm2, farm3, goat, jaggery, cowdung,
    clmLure, dbmLure, esbLure, fruitFly, gulabiFly, helicOLure, melonFly,
    mvLure, ysbLure, whiteGrub, tomatoLure, thrips2Lure, thripsLure,
    spodLureF, spodOLure, redPalmLure, pomoLure, brinjalLure, beetleLure, bactroceraMinax
  ];

  const openForm = (productName) => {
    setFormData(prev => ({ ...prev, product: productName }));
    setFormOpen(true);
  };

  const closeForm = () => setFormOpen(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const whatsappMessage = `Hello! I am interested in your product: ${formData.product}%0AName: ${formData.name}%0APhone: ${formData.phone}%0ACity: ${formData.city}%0ACountry: ${formData.country}`;
    const whatsappUrl = `https://wa.me/918073684699?text=${whatsappMessage}`;
    window.open(whatsappUrl, "_blank");
    setFormOpen(false);
    setFormData({ name: "", phone: "", product: "", city: "", country: "" });
  };

  return (
    <div className="relative">
      {/* Site Header / Navbar */}
      <header className="w-full bg-white shadow-md fixed top-0 left-0 z-50">
        <div className="container-max mx-auto flex items-center justify-between py-4 px-6">
          {/* Logo + Site Name */}
          <div className="flex items-center gap-3">
            <img src={logo} alt="AgriFarm360 Logo" className="h-12 w-auto" />
            <h1 className="text-2xl font-bold text-green-700">AgriFarm360</h1>
          </div>

          {/* Navigation links */}
         

<nav className="flex gap-6 text-green-700 font-semibold">
  <button onClick={() => navigate("/")} className="hover:text-green-900 transition">Home</button>
  <button onClick={() => navigate("/products")} className="hover:text-green-900 transition">Products</button>
  <button onClick={() => navigate("/our-farm")} className="hover:text-green-900 transition">Our Farm</button>
  <button onClick={() => navigate("/join-us")} className="hover:text-green-900 transition">Join Us</button>
  <button onClick={() => navigate("/contact")} className="hover:text-green-900 transition">Contact</button>
</nav>


        </div>
      </header>

      {/* Hero Section */}
      <section
        className="h-screen flex flex-col justify-center items-center text-white text-center bg-cover bg-center relative pt-16"
        style={{ backgroundImage: `url(${backgrounds[0]})` }}
      >
        <div className="absolute inset-0 bg-black opacity-40 z-0"></div>
        <div className="relative z-10 px-4">
          <h1 className="text-5xl font-bold mb-4">AgriFarm360</h1>
          <p className="text-xl mb-6">
            A Complete Modern Integrated Farming Ecosystem
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a
              href="/products"
              className="bg-green-600 px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition"
            >
              View Products
            </a>
            <button
              onClick={() => openForm()}
              className="bg-yellow-500 px-6 py-3 rounded-lg font-semibold hover:bg-yellow-600 transition"
            >
              Enquire Now
            </button>
          </div>
        </div>
      </section>

      {/* Main Products Section */}
      <section className="py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-12 text-green-800">Main Products</h2>
        <div className="grid md:grid-cols-4 gap-8">
          {products.map((prod, idx) => (
            <div key={idx} className="rounded-lg shadow-lg overflow-hidden cursor-pointer">
              <img src={prod.image} alt={prod.name} className="w-full h-60 object-contain bg-white" />
              <div className="p-4 bg-white">
                <h3 className="font-bold text-xl mb-2">{prod.name}</h3>
                <p>{prod.description}</p>
                <div className="flex gap-2 mt-4 flex-wrap">
                  <button
                    className="bg-green-600 px-4 py-2 rounded-full text-white hover:bg-green-700 transition"
                    onClick={() => openForm(prod.name)}
                  >
                    Request Price
                  </button>
                  <button
                    className="bg-blue-500 px-4 py-2 rounded-full text-white hover:bg-blue-600 transition"
                    onClick={() => navigate("/products", { state: { category: prod.name } })}
                  >
                    View Products
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Moving Images Section */}
      <section className="py-10 bg-gray-100">
        <div className="overflow-hidden relative">
          <div className="flex animate-marquee gap-6">
            {movingImages.map((img, idx) => (
              <img key={idx} src={img} alt={`moving-${idx}`} className="w-64 h-40 object-cover rounded-lg shadow-md" />
            ))}
            {movingImages.map((img, idx) => (
              <img key={`dup-${idx}`} src={img} alt={`moving-dup-${idx}`} className="w-64 h-40 object-cover rounded-lg shadow-md" />
            ))}
          </div>
        </div>
      </section>

      {/* Enquiry Form Modal */}
      {formOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-lg max-w-sm w-full p-6 relative">
            <button
              onClick={closeForm}
              className="absolute top-2 right-2 text-gray-500 hover:text-red-600 text-xl"
            >
              ✖
            </button>
            <h3 className="text-xl font-bold text-green-700 mb-4">
              Enquire about {formData.product}
            </h3>
            <form className="space-y-3" onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Full Name"
                className="w-full p-2 border rounded"
                value={formData.name}
                required
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full p-2 border rounded"
                value={formData.phone}
                required
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              />
              <input
                type="text"
                placeholder="Product"
                className="w-full p-2 border rounded"
                value={formData.product}
                required
                onChange={(e) => setFormData({ ...formData, product: e.target.value })}
              />
              <input
                type="text"
                placeholder="City"
                className="w-full p-2 border rounded"
                value={formData.city}
                required
                onChange={(e) => setFormData({ ...formData, city: e.target.value })}
              />
              <input
                type="text"
                placeholder="Country"
                className="w-full p-2 border rounded"
                value={formData.country}
                required
                onChange={(e) => setFormData({ ...formData, country: e.target.value })}
              />
              <button
                type="submit"
                className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Tailwind keyframes for marquee animation */}
      <style>
        {`
          @keyframes marquee {
            0% { transform: translateX(0%); }
            100% { transform: translateX(-50%); }
          }
          .animate-marquee {
            display: flex;
            gap: 2rem;
            animation: marquee 25s linear infinite;
          }
        `}
      </style>
    </div>
  );
}
