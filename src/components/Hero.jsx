import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-green-100 via-yellow-50 to-white">
      <div className="container-max py-16 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-extrabold leading-tight">
            Fresh From Our Farm to Your Home
          </motion.h1>
          <p className="mt-4 text-gray-600">
            Jaggery, Goats & Sheep, Chaffcutters and Cow Dung Manure — raised and made in Kanamadi, Bijapur.
          </p>
          <div className="mt-6 flex gap-3">
            <Link to="/products" className="btn-primary">View Products</Link>
            <Link to="/enquiry" className="btn-accent">Enquire Now</Link>
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white rounded-2xl shadow-lg p-4">
          <img src="/goats-placeholder.jpg" alt="Goats" className="rounded-xl w-full h-72 object-cover"/>
        </motion.div>
      </div>
    </section>
  )
}
