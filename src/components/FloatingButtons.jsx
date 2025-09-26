import { FaWhatsapp, FaYoutube } from "react-icons/fa";

export default function FloatingButtons() {
  const whatsappNumber = "918073684699";

  return (
    <div className="fixed bottom-8 right-8 flex flex-col items-center gap-4 z-50">
      {/* YouTube Button */}
      <div className="relative group">
        <a
          href="https://www.youtube.com/@satishpatilkanamadi"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-red-500 text-white p-5 rounded-full shadow-lg hover:bg-red-600 transition duration-300 flex items-center justify-center"
        >
          <FaYoutube size={40} />
        </a>
        {/* Tooltip */}
        <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-black text-white text-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition">
          Visit our channel
        </span>
      </div>

      {/* WhatsApp Button */}
      <div className="relative group">
        <a
          href={`https://wa.me/${whatsappNumber}`}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 text-white p-5 rounded-full shadow-lg hover:bg-green-600 transition duration-300 flex items-center justify-center"
        >
          <FaWhatsapp size={40} />
        </a>
        {/* Tooltip */}
        <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-black text-white text-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition">
          Chat with us on WhatsApp
        </span>
      </div>
    </div>
  );
}
