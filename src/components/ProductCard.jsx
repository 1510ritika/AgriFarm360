export default function ProductCard({ title, desc, link }) {
  return (
    <div className="card h-full">
      <div className="font-semibold text-lg">{title}</div>
      <p className="text-gray-600 mt-1">{desc}</p>
      {link && (
        <a href={link} className="btn-primary mt-4 inline-block">Request Price</a>
      )}
    </div>
  )
}
