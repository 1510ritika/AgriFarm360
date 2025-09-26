export default function Footer() {
  return (
    <footer className="bg-white border-t mt-10">
      <div className="container-max py-8 grid md:grid-cols-3 gap-6 text-sm">
        {/* Farm Info */}
        <div>
          <div className="font-bold text-lg mb-2">AgriFarm360</div>
          <p className="text-gray-600">Healthy Goats • Pure Jaggery • Natural Products</p>
        </div>

        {/* Contact Info */}
        <div>
          <div className="font-semibold mb-2">Contact</div>
          <p>📍 Kotyal road, opp. HP Gas, near Kencharayanna Gudi, Kanamadi, Vijayapura</p>
          <p>📍 Plot no 37, Sankeshwar villa layout, Second main near Varasidhi vinayak temple, Athani road, Vijayapura  586108</p>
          <p>👨‍🌾 Owner: Satish B Patil(Kanamadi) ph: 9620313227</p>
          <p>🐐 Farm Manager: Mallu Tuppad ph: 8660570728</p>
          <div className="mt-2">
          <a
  href="https://www.google.com/maps/dir/?api=1&destination=Shri+Kencharaya+Temple,+Kanamadi,+Karnataka+586114"
  target="_blank"
  rel="noopener noreferrer"
  className="px-3 py-1 bg-green-500 text-white rounded-lg hover:bg-green-600 transition text-xs inline-block mt-1"
>
  Get Directions
</a>


          </div>
        </div>

        {/* Request Details / Enquiry Button */}
        <div className="md:text-right">
          <a href="/enquiry" className="btn-accent">Request Details</a>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="text-center text-xs text-gray-500 py-4 border-t">
        © 2025 AgriFarm360
      </div>
    </footer>
  )
}
