export default function Contact() {
  return (
    <section className="container-max py-10">
      <h1 className="text-3xl font-bold">Contact Us</h1>
      <div className="grid md:grid-cols-2 gap-8 mt-6">
        
        {/* Contact Info */}
        <div className="card">
          <h2 className="font-semibold text-lg">Phone</h2>
          <p>Farm Manager: 8660570728</p>
          <p>Agri Manager: 6363475984</p>
          <div className="mt-4">
            <a href="/enquiry" className="btn-primary">
              Send an Enquiry
            </a>
          </div>
        </div>

        {/* Location Info */}
        <div className="card">
          <h2 className="font-semibold text-lg">Location</h2>
          <p>Kotyal road, opp. HP Gas, near Kencharayanna Gudi, Kanamadi</p>
          
          {/* Embedded Google Map */}
          <div className="mt-4">
            <iframe
              className="w-full h-64 rounded-xl"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps?q=Shri+Kencharaya+Temple,+Kanamadi,+Karnataka+586114&output=embed"
              allowFullScreen
            ></iframe>
          </div>

          {/* Get Directions Button */}
          <div className="mt-4 text-center">
            <a
              href="https://www.google.com/maps/dir/?api=1&destination=Shri+Kencharaya+Temple,+Kanamadi,+Karnataka+586114"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
            >
              Get Directions
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
