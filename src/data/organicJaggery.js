// src/data/organicJaggery.js
import jaggeryFine from "../assets/jaggery-fine.jpg";
import jaggeryGranules from "../assets/jaggery-granules.jpg";
import jaggeryCert1 from "../assets/jaggery-cert1.jpg";
import jaggeryCert2 from "../assets/jaggery-cert2.png";

const organicJaggery = [
  // Jaggery products
  {
    name: "Organic Jaggery - Fine Powder",
    image: jaggeryFine,
    description: {
      form: "Fine powder",
      packing: "1/2 kg in stand pouch",
    },
    benefits: [
      "Rich in iron and minerals, helps improve hemoglobin levels.",
      "Detoxifies the liver and improves digestion.",
      "Boosts immunity naturally.",
      "Natural energy booster without refined sugar.",
      "Aids in weight management by improving metabolism."
    ]
  },
  {
    name: "Organic Jaggery - Granules",
    image: jaggeryGranules,
    description: {
      form: "Granules",
      packing: "30 kg in HDPE bulk bag",
    },
    benefits: [
      "Helps maintain healthy blood sugar levels.",
      "Contains antioxidants that protect against free radicals.",
      "Supports respiratory health.",
      "Improves skin health and prevents premature aging.",
      "Promotes overall wellness and stamina."
    ]
  },
  // Certifications
  {
    name: "Organic Jaggery Certification 1",
    image: jaggeryCert1,
    description: {
      highlights: "Certified organic by ABC Organic Certifiers.",
    },
    isCertificate: true,
  },
  {
    name: "Organic Jaggery Certification 2",
    image: jaggeryCert2,
    description: {
      highlights: "ISO 22000 Food Safety Certification.",
    },
    isCertificate: true,
  },
];

export default organicJaggery;
