import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import FloatingButtons from "../components/FloatingButtons";

import logo from "../assets/AgriFarm360 Logo.png";

// Backgrounds
import farm1 from "../assets/farm1.jpg";
import farm2 from "../assets/farm2.jpg";
import farm3 from "../assets/farm3.jpg";

// Products & other images
import cc1 from "../assets/cc1.jpg";
import cc2 from "../assets/cc2.jpg";
import cc4 from "../assets/cc4.jpg";
import cc5 from "../assets/cc5.jpg";
import cc6 from "../assets/cc6.png";
import cc9 from "../assets/cc13.jpg";
import cc10 from "../assets/cc14.jpg";
import cc11 from "../assets/cc15.png";

import jaggeryFine from "../assets/jaggery-fine.jpg";
import jaggeryGranules from "../assets/jaggery-granules.jpg";
import jaggeryCert1 from "../assets/jaggery-cert1.jpg";
import jaggeryCert2 from "../assets/jaggery-cert2.png";

import papaya1 from "../assets/papaya1.jpg";
import papaya2 from "../assets/papaya2.jpg";
import papaya3 from "../assets/papaya3.jpg";
import papaya4 from "../assets/papaya4.jpg";
import papaya5 from "../assets/papaya5.jpg";
import papaya6 from "../assets/papaya6.jpg";
import papaya7 from "../assets/papaya7.jpg";

import fomImg from "../assets/fom.jpg";
import ghanajeevamrutaImg from "../assets/ghanajeevamruta.jpg"; 
import cowDungCakeImg from "../assets/cow-dung-cake.jpg";
import goMutraImg from "../assets/go-mutra.jpg";
import lfomImg from "../assets/lfom.webp"; 

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

import sprayer1 from "../assets/sprayer1.png";
import sprayer2 from "../assets/sprayer2.png";
import sprayer3 from "../assets/sprayer3.png";
import sprayer4 from "../assets/sprayer4.png";
import sprayer5 from "../assets/sprayer5.jpg";
import sprayer6 from "../assets/sprayer6.jpg";
import sprayer7 from "../assets/sprayer7.png";
import sprayer8 from "../assets/sprayer7.png";

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

  const images = [
    cc1, cc2, cc4, cc5, cc6, cc9, cc10, cc11,
    jaggeryFine, jaggeryGranules, jaggeryCert1, jaggeryCert2,
    papaya1, papaya2, papaya3, papaya4, papaya5, papaya6, papaya7,
    fomImg, ghanajeevamrutaImg, cowDungCakeImg, goMutraImg, lfomImg,
    clmLure, dbmLure, esbLure, fruitFly, gulabiFly, helicOLure,
    melonFly, mvLure, ysbLure, whiteGrub, tomatoLure, thrips2Lure,
    thripsLure, spodLureF, spodOLure, redPalmLure, pomoLure,
    brinjalLure, beetleLure, bactroceraMinax,
    sprayer1, sprayer2, sprayer3, sprayer4, sprayer5, sprayer6, sprayer7, sprayer8
  ];

  const [shuffledImages, setShuffledImages] = useState([]);

  useEffect(() => {
    const shuffled = [...images].sort(() => 0.5 - Math.random());
    setShuffledImages(shuffled);
  }, []);

  const openForm = (productName = "") => {
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
      {/* Navbar */}
      <header className="w-full bg-white shadow-md fixed top-0 left-0 z-50">
        <div className="container-max mx-auto flex items-center justify-between py-4 px-6">
          <div className="flex items-center gap-3">
            <img src={logo} alt="AgriFarm360 Logo" className="h-12 w-auto" />
            <h1 className="text-2xl font-bold text-green-700">AgriFarm360</h1>
          </div>
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

      {/* Dealer / Agent Section */}
      <section className="py-16 px-6 bg-green-50 text-center">
        <h2 className="text-3xl font-bold text-green-800 mb-4">What are the advantages if you join us?</h2>
        <p className="mb-6">
          • Grow with us as a trusted partner<br/>
          • Get high-quality products at wholesale rates<br/>
          • Access training & support<br/>
          • Expand your business network
        </p>
        <button
          onClick={() => openForm("Dealer/Agent")}
          className="bg-blue-600 px-6 py-3 rounded-lg font-semibold text-white hover:bg-blue-700 transition"
        >
          Join as Dealer/Agent
        </button>
      </section>

      {/* Moving Images Section */}
      <section className="py-10 bg-gray-100">
        <div className="overflow-hidden py-6 bg-gray-50">
          <div className="flex animate-marquee gap-4">
            {shuffledImages.map((img, idx) => (
              <img key={idx} src={img} alt={`product-${idx}`} className="h-32 w-auto object-contain" />
            ))}
            {shuffledImages.map((img, idx) => (
              <img key={`dup-${idx}`} src={img} alt={`product-dup-${idx}`} className="h-32 w-auto object-contain" />
            ))}
          </div>
          <style>{`
            @keyframes marquee {
              0% { transform: translateX(0%); }
              100% { transform: translateX(-50%); }
            }
            .animate-marquee {
              display: flex;
              width: max-content;
              animation: marquee 40s linear infinite;
            }
          `}</style>
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
              <input type="text" placeholder="Full Name" className="w-full p-2 border rounded" value={formData.name} required onChange={(e) => setFormData({ ...formData, name: e.target.value })}/>
              <input type="tel" placeholder="Phone Number" className="w-full p-2 border rounded" value={formData.phone} required onChange={(e) => setFormData({ ...formData, phone: e.target.value })}/>
              <input type="text" placeholder="Product" className="w-full p-2 border rounded" value={formData.product} required onChange={(e) => setFormData({ ...formData, product: e.target.value })}/>
              <input type="text" placeholder="City" className="w-full p-2 border rounded" value={formData.city} required onChange={(e) => setFormData({ ...formData, city: e.target.value })}/>
              <input type="text" placeholder="Country" className="w-full p-2 border rounded" value={formData.country} required onChange={(e) => setFormData({ ...formData, country: e.target.value })}/>
              <button type="submit" className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700">Submit</button>
            </form>
          </div>
        </div>
      )}

      {/* Floating WhatsApp / YouTube Buttons */}
      <FloatingButtons />
    </div>
  );
}
