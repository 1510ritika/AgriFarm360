import { useState, useEffect } from "react";
import chaffcutters from "../data/chaffcutters";
import pheromones from "../data/pheromones";
import organicProducts from "../data/organicProducts";
import organicPapaya from "../data/organicPapaya";
import organicJaggery from "../data/organicJaggery";
import sprayers from "../data/sprayers";

export default function Products() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedCategoryData, setSelectedCategoryData] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [enquiryProduct, setEnquiryProduct] = useState(null);

  const categories = [
    { name: "Chaff Cutters", data: chaffcutters },
    { name: "Phermone Traps", data: pheromones },
    { name: "Organic Products", data: organicProducts },
    { name: "Organic Papaya", data: organicPapaya },
    { name: "Organic Jaggery", data: organicJaggery },
    { name: "Sprayers & HTP Pumps", data: sprayers },
  ];

  useEffect(() => {
    if (selectedCategory) {
      const category = categories.find((cat) => cat.name === selectedCategory);
      setSelectedCategoryData(category ? category.data : []);
    }
  }, [selectedCategory]);

  const isOrganicCategory =
    selectedCategory === "Organic Products" ||
    selectedCategory === "Organic Papaya" ||
    selectedCategory === "Organic Jaggery";

  return (
    <section className="container-max py-10">
      <h1 className="text-3xl font-bold text-center text-green-700 mb-8">
        Our Products
      </h1>

      {/* Category list vertically */}
      <div className="flex flex-col items-center gap-4 mb-10">
        {categories.map((cat) => (
          <button
            key={cat.name}
            onClick={() => setSelectedCategory(cat.name)}
            className={`px-6 py-2 rounded-full font-medium transition w-64 text-center ${
              selectedCategory === cat.name
                ? "bg-green-600 text-white"
                : "bg-green-100 text-green-700 hover:bg-green-200"
            }`}
          >
            {cat.name}
          </button>
        ))}
      </div>

      {/* Products Grid / Modal */}
      {selectedCategory && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-lg w-full max-w-5xl max-h-[90vh] p-6 relative overflow-auto">
            <button
              onClick={() => setSelectedCategory(null)}
              aria-label="Close"
              className="absolute top-2 right-2 text-gray-500 hover:text-red-600 text-xl z-10"
            >
              ✖
            </button>

            <h2 className="text-2xl font-bold text-green-700 mb-6 text-center">
              {selectedCategory}
            </h2>

            {isOrganicCategory ? (
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
    {selectedCategoryData.map((product, idx) => (
      <div
        key={`organic-${idx}`}
        className="flex flex-col gap-2 items-center text-center"
      >
        {/* Images */}
        {product.images && product.images.length > 0 ? (
          <div
            className={`grid gap-4 justify-center items-center ${
              selectedCategory === "Organic Papaya"
                ? "grid-cols-2"
                : "grid-cols-1"
            }`}
          >
            {product.images.map((img, i) => (
              <img
                key={`img-${idx}-${i}`}
                src={img}
                alt={`${product.name} image ${i + 1}`}
                className="w-full max-h-60 object-contain rounded-lg p-1 mx-auto"
              />
            ))}
          </div>
        ) : product.image ? (
          <img
            src={product.image}
            alt={product.name}
            className="w-full max-h-60 object-contain rounded-lg mx-auto"
          />
        ) : null}

        {/* Videos */}
        {product.videos && product.videos.length > 0 && (
          <div
            className={`grid gap-4 justify-center items-center ${
              selectedCategory === "Organic Papaya"
                ? "grid-cols-2"
                : "grid-cols-1"
            }`}
          >
            {product.videos.map((vid, i) => (
              <video
                key={`vid-${idx}-${i}`}
                controls
                className="w-full max-h-60 rounded-lg p-1 mx-auto"
              >
                <source src={vid} type="video/mp4" />
              </video>
            ))}
          </div>
        )}

                    <div className="flex justify-center mt-2">
                      <button
                        onClick={() => setEnquiryProduct(product)}
                        className="px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition"
                      >
                        Contact for Enquiry
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {selectedCategoryData.map((product, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-2xl shadow-md p-4 flex flex-col items-center text-center hover:shadow-lg transition"
                  >
                    <img
                      src={product.images ? product.images[0] : product.image}
                      alt={product.name}
                      className="h-40 w-auto object-contain mb-4 rounded-lg"
                    />
                    <h3 className="text-lg font-semibold text-green-700">
                      {product.name}
                    </h3>

                    {selectedCategory === "Phermone Traps" && (
                      <>
                        {product.description?.crop && (
                          <p className="text-gray-600 text-sm mt-1">
                            Plant:{" "}
                            <span className="font-medium">
                              {product.description.crop}
                            </span>
                          </p>
                        )}
                        {product.description?.targetPest && (
                          <p className="text-gray-600 text-sm">
                            Target Pest:{" "}
                            <span className="font-medium">
                              {product.description.targetPest}
                            </span>
                          </p>
                        )}
                      </>
                    )}

                    <div className="flex flex-col gap-2 mt-4 w-full">
                      <button
                        onClick={() => setSelectedProduct(product)}
                        className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
                      >
                        View Details
                      </button>
                      <button
                        onClick={() => setEnquiryProduct(product)}
                        className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition"
                      >
                        Contact for Enquiry
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}

      {/* Product Details Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-lg w-full max-w-3xl max-h-[90vh] p-6 relative overflow-auto">
            <button
              onClick={() => setSelectedProduct(null)}
              aria-label="Close"
              className="absolute top-2 right-2 text-gray-500 hover:text-red-600 text-xl"
            >
              ✖
            </button>

            <h3 className="text-xl font-bold text-green-700 mb-4">
              {selectedProduct.name}
            </h3>

            {selectedProduct.images ? (
              selectedProduct.images.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt={`${selectedProduct.name} ${i}`}
                  className="w-full max-h-64 object-contain rounded-lg mb-4"
                />
              ))
            ) : (
              <img
                src={selectedProduct.image}
                alt={selectedProduct.name}
                className="w-full max-h-64 object-contain rounded-lg mb-4"
              />
            )}

            <div className="text-gray-700 space-y-1 mt-4">
              {typeof selectedProduct.description === "string" ? (
                <p>{selectedProduct.description}</p>
              ) : (
                Object.entries(selectedProduct.description).map(
                  ([key, value], i) => (
                    <p key={i}>
                      <span className="font-semibold capitalize">
                        {key.replace(/([A-Z])/g, " $1")}:
                      </span>{" "}
                      {typeof value === "object"
                        ? JSON.stringify(value)
                            .replace(/[{}"]/g, "")
                            .replace(/,/g, ", ")
                        : value}
                    </p>
                  )
                )
              )}
            </div>

            <div className="flex justify-center mt-6">
              <button
                onClick={() => setEnquiryProduct(selectedProduct)}
                className="px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition"
              >
                Contact for Enquiry
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Enquiry Modal */}
      {enquiryProduct && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-lg w-full max-w-md p-6 relative">
            <button
              onClick={() => setEnquiryProduct(null)}
              aria-label="Close"
              className="absolute top-2 right-2 text-gray-500 hover:text-red-600 text-xl"
            >
              ✖
            </button>

            <h3 className="text-lg font-bold text-green-700 mb-4">
              Enquiry for {enquiryProduct.name}
            </h3>
            <p className="text-gray-600 mb-6">
              Please contact us on WhatsApp at{" "}
              <a
                href="https://wa.me/918073684699"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-600 underline"
              >
                +91 80736 84699
              </a>{" "}
              with your requirements.
            </p>

            <div className="flex justify-center">
              <a
                href={`https://wa.me/918073684699?text=Hello, I'm interested in ${enquiryProduct.name}.`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition"
              >
                Contact on WhatsApp
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
