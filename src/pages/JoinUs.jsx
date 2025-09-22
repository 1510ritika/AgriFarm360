import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function JoinUs({ onEnquireClick }) {
  const [openForm, setOpenForm] = useState(null);

  const closeModal = () => setOpenForm(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const name = formData.get("name");
    const phone = formData.get("phone");
    const email = formData.get("email");
    const company = formData.get("company");
    const region = formData.get("region");
    const country = formData.get("country");
    const experience = formData.get("experience");

    let message = `Want to join as ${openForm === "dealer" ? "Dealer" : "Agent"}%0A`;
    message += `Name: ${name}%0APhone: ${phone}%0AEmail: ${email}%0ACompany: ${company}%0A`;
    if (openForm === "dealer" && region) message += `Preferred Region: ${region}%0A`;
    if (openForm === "agent" && experience) message += `Experience: ${experience}%0A`;

    window.open(`https://wa.me/918073684699?text=${message}`, "_blank");
    closeModal();
  };

  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold text-center mb-10">Join Us</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Dealership */}
        <div className="bg-gray-50 rounded-lg p-6 shadow flex flex-col justify-between">
          <div>
            <h2 className="text-2xl font-semibold mb-4 text-blue-700">Dealership</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
              <li>Physical display of products</li>
              <li>Investment by dealer to purchase on dealer’s price</li>
              <li>Dealer decides selling price</li>
              <li>Sales and service by dealer</li>
            </ul>
          </div>
          <button onClick={() => setOpenForm("dealer")} className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 shadow">
            Join as Dealer
          </button>
        </div>

        {/* Agent/Influencer */}
        <div className="bg-gray-50 rounded-lg p-6 shadow flex flex-col justify-between">
          <div>
            <h2 className="text-2xl font-semibold mb-4 text-green-700">Agent / Influencer</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
              <li>No physical display needed</li>
              <li>No investment by agent</li>
              <li>Reference products to customers</li>
              <li>No shop required</li>
              <li>Work based on incentive</li>
            </ul>
          </div>
          <button onClick={() => setOpenForm("agent")} className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 shadow">
            Join as Agent
          </button>
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {openForm && (
          <motion.div
            className="fixed inset-0 flex items-center justify-center z-50 backdrop-blur-sm bg-black bg-opacity-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white rounded-lg shadow-lg w-full max-w-lg p-6 relative"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <button onClick={closeModal} className="absolute top-3 right-3 text-gray-500 hover:text-gray-700">✕</button>
              <h2 className="text-xl font-semibold mb-4 text-center">Apply as {openForm === "dealer" ? "Dealer" : "Agent"}</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <input type="text" name="name" placeholder="Full Name" className="w-full p-2 border rounded" required />
                <input type="email" name="email" placeholder="Email" className="w-full p-2 border rounded" required />
                <input type="tel" name="phone" placeholder="Phone Number" className="w-full p-2 border rounded" required />
                <input type="text" name="company" placeholder="Current Profession" className="w-full p-2 border rounded" required />
                <input type="text" name="region" placeholder="Location" className="w-full p-2 border rounded" />
                <input type="text" name="country" placeholder="Country" className="w-full p-2 border rounded" required />
                {openForm === "agent" && <input type="text" name="experience" placeholder="Sales Experience" className="w-full p-2 border rounded" /> }
                <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">Submit</button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
