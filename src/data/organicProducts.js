// ==================== IMPORTS ====================
import fomImg from "../assets/fom.jpg";             // Fermented Organic Manure
import ghanajeevamrutaImg from "../assets/ghanajeevamruta.jpg"; 
import cowDungCakeImg from "../assets/cow-dung-cake.jpg";
import goMutraImg from "../assets/go-mutra.jpg";
import lfomImg from "../assets/lfom.webp";
import certificateImg from "../assets/cowdung_certificate.jpg"; // Certification

// ==================== DATA ====================
const organicProducts = [
  {
    name: "Fermented Organic Manure (FOM)",
    image: fomImg,
    description: {
      application: "All types of crops and soil types",
      benefits:
        "Improves NPK, increases Organic Carbon, enhances soil fertility",
      packaging: "1, 2, 5, 25 & 50 kg HDPE bags",
      specifications: "Organic Carbon >40%, NPK Balanced, Heavy Metals within limits (Certified)",
      shelfLife: "6 months",
    },
  },
  {
    name: "Ghanajeevamruta (Dry Bio-Manure)",
    image: ghanajeevamrutaImg,
    description: {
      application: "Soil amendment and plant tonic",
      benefits: "Stimulates microbial activity, improves root strength",
      packaging: "1 kg and 5 kg units",
      shelfLife: "6 months",
      usage: "Mix in soil or dissolve in water for fertigation",
    },
  },
  {
    name: "Cow Dung Cake (Go Kanda)",
    image: cowDungCakeImg,
    description: {
      application:
        "Homa/Yajna, agnihotra, traditional cooking, and as fuel",
      size: "4-6 inch round or custom sizes",
      packaging: "12-pc / 24-pc packs",
      shelfLife: "12 months",
      note: "Smokeless burning option available",
    },
  },
  {
    name: "Go Mutra Arc (Distilled Cow Urine)",
    image: goMutraImg,
    description: {
      application: "Purification, spiritual, and mosquito repellent",
      benefits: "No chemical residue, safe for human use",
      packaging: "100 ml & 500 ml bottles",
      variants: "Amruta Balli, Tulsi",
    },
  },
  {
    name: "Liquid Fermented Organic Manure (LFOM)",
    image: lfomImg,
    description: {
      application: "Vegetables, fruits, and plantation crops",
      dosage: "250 ml per 15 L of water",
      packaging: "1L / 5L / 20L cans",
      shelfLife: "3 months (store in cool, dry place)",
      note: "Shake well before use",
    },
  },
  {
    name: "Organic Certification",
    image: certificateImg,
    isCertificate: true, // ✅ This makes it highlighted in Products.jsx
    description: {
      highlights: "Certified 100% organic and safe for farming, verified by lab tests",
    },
  },
];

export default organicProducts;
