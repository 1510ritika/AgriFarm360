import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
  return (
    <div className="fixed bottom-8 right-8 group z-50">
      {/* Button */}
      <a
        href="https://wa.me/918073684699"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 text-white p-5 rounded-full shadow-lg hover:bg-green-600 transition duration-300 animate-pulseSlow flex items-center justify-center"
      >
        <FaWhatsapp size={40} />
      </a>

      {/* Tooltip */}
      <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-3 bg-gray-800 text-white text-sm px-3 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
        Chat with us on WhatsApp
      </span>
    </div>
  );
}
