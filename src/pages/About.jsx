export default function About() {
  return (
    <section className="container-max py-10">
      <h1 className="text-3xl font-bold">About AgriFarm360</h1>
      <p className="mt-4 text-gray-700">
        Our agriculture work and goat farm is located in Kanamadi village, Bijapur district.
        We provide quality goats, organic jaggery, natural manures, and reliable farm equipment.
      </p>
      <div className="grid md:grid-cols-2 gap-6 mt-6">
        <div className="card">
          <h2 className="font-semibold text-lg">Management</h2>
          <ul className="mt-2 text-gray-700 space-y-1">
            <li><b>Owner:</b> Satish B Patil</li>
            <li><b>Goat Farm Manager:</b> Mallu Tuppad — 8660570728</li>
            <li><b>Agri Farm Manager:</b> Mahantesh — 6363475984</li>
          </ul>
        </div>
        <div className="card">
          <h2 className="font-semibold text-lg">Address</h2>
          <p>Kotyal road, opp. HP Gas, near Kencharayanna Gudi, Kanamadi</p>
        </div>
      </div>
    </section>
  )
}
