import clmLure from "../assets/clm-lure.webp";
import dbmLure from "../assets/dbm-lure.png";
import esbLure from "../assets/esb-lure.webp";
import fruitFly from "../assets/fruit-fly.png";
import gulabiFly from "../assets/gulabi-fly.png";
import helicOLure from "../assets/helic-o-lure.png";
import melonFly from "../assets/melon-fly.png";
import mvLure from "../assets/mv-lure.png";
import ysbLure from "../assets/ysb-lure.png";
import whiteGrub from "../assets/white-grub-lure.png";
import tomatoLure from "../assets/tomato-lure.png";
import thrips2Lure from "../assets/thrips2-lure.jpg";
import thripsLure from "../assets/thrips-lure.webp";
import spodLureF from "../assets/spodopteraf-lure.png";
import spodOLure from "../assets/spod-o-lure.png";
import redPalmLure from "../assets/red-palm-lure.png";
import pomoLure from "../assets/pomo-lure.webp";
import brinjalLure from "../assets/brinjal-lure.png";
import beetleLure from "../assets/beetle-lure.jpeg";
import bactroceraMinax from "../assets/bactrocera-minax.jpg";

const pheromones = [
  {
    name: "CLM Lure (Citrus Leaf Miner)",
    image: clmLure,
    description: {
      
    category: "Pheromone Lure Trap",
    crop: "Orange, Citrus, Lime",
    targetPest: "Citrus Leaf Miner",
    scientificName: "Phyllocnistis citrella",
    trap: "Delta Trap",
    timeOfTrapInstall: "After Plantation",
    lureReplacement: "45 Days",
    monitoring: "10 Traps / Acre",
    massTrapping: "20-25 Traps / Acre"
    },
  },
  {
    name: "DBM Lure (Diamondback Moth)",
    image: dbmLure,
    description: {
      
    category: "Pheromone Lure Trap",
    crop: "Cabbage, Flower, Broccoli, Mustard",
    targetPest: "Diamond Back Moth",
    scientificName: "Plutella xylostella",
    trap: "Delta Trap / Water Trap",
    timeOfTrapInstall: "After Plantation",
    lureReplacement: "45 Days",
    monitoring: "10 Traps / Acre",
    massTrapping: "20-25 Traps / Acre"
    },
  },
  {
    name: "ESB Lure (Early Shoot Borer)",
    image: esbLure,
    description: {
      
    category: "Pheromone Lure Trap",
    crop: "Sugarcane",
    targetPest: "SUGARCANE EARLY SHOOT BORER",
    scientificName: "Chilo infuscatellus",
    trap: "Funnel Trap",
    timeOfTrapInstall: "After Plantation",
    lureReplacement: "45 Days",
    monitoring: "10 Traps / Acre",
    massTrapping: "20-25 Traps / Acre"
    },
  },
  {
    name: "Fruit Fly Lure (Bactrocera spp.)",
    image: fruitFly,
    description: {
      
      category: "Pheromone Lure Trap",
      crop: "Melon, Watermelon, Bitter Gourd, Muskmelon, Pointed Gourd, Pumpkin, Gherkin, Ridge Gourd, Cucumber",
           targetPest: "Melon Fruit Fly",
      scientificName: "Bactrocera cucurbitae",
      trap: "IPM Trap / MaxPlus Trap",
      timeOfTrapInstall: "Before Flowering",
      lureReplacement: "60 Days",
      monitoring: "10 Traps / Acre",
      massTrapping: "20-25 Traps / Acre"
    },
  },
  {
    name: "Gulabi Fly Lure",
    image: gulabiFly,
    description: {
      
    category: "Pheromone Lure Trap",
    crop: "Cotton, Okra",
    targetPest: "Pink Ballworm",
    scientificName: "Pectinophora gossypiella",
    trap: "Funnel Trap",
    timeOfTrapInstall: "Before Flowering",
    lureReplacement: "45 Days",
    monitoring: "10 Traps / Acre",
    massTrapping: "20-25 Traps / Acre"
    },
  },
  {
    name: "Helicoverpa Armigera Lure",
    image: helicOLure,
    description: {
     
    category: "Pheromone Lure Trap",
    crop: "Bengal Gram, Red Gram, Black Gram, Chilli, Cotton, etc",
    targetPest: "Helicoverpa armigera",
    scientificName: "Helicoverpa armigera",
    trap: "Funnel Trap",
    timeOfTrapInstall: "Before Flowering",
    lureReplacement: "45 Days",
    monitoring: "10 Traps / Acre",
    massTrapping: "20-25 Traps / Acre"
    },
  },
  {
    name: "Melon Fly Lure",
    image: melonFly,
    description: {
      
    category: "Pheromone Lure Trap",
    crop: "Melon, Watermelon, Bitter Gourd, Muskmelon, Pointed Gourd, Pumpkin, Gherkin, Ridge Gourd, Cucumber",
    targetPest: "Melon Fruit Fly",
    scientificName: "Bactrocera cucurbitae",
    trap: "IPM Trap / MaxPlus Trap",
    timeOfTrapInstall: "Before Flowering",
    lureReplacement: "60 Days",
    monitoring: "10 Traps / Acre",
    massTrapping: "20-25 Traps / Acre"
    },
  },
  {
    name: "Maruca Vitrata Lure",
    image: mvLure,
    description: {
      crop: "Pigeon Pea, Mung Bean, Yard Long Bean, Cow Peas",
      targetPest: "Spotted Pod Borer",
      lureType: "Funnel Trap",
      lifeSpan: "45 Days",
      scientificName: "Maruca Vitrata",
      trap: "Funnel Trap",
      timeOfTrapInstall: "After Plantation",
      lureReplacement: "45 Days",
      monitoring: "10 Traps / Acre",
      massTrapping: "20 - 25 Traps / Acre"
    },
  },
  {
    name: "Yellow Stem Borer (YSB) Lure",
    image: ysbLure,
    description: {
      
    category: "Pheromone Lure Trap",
    crop: "Rice / Paddy, Sugarcane",
    targetPest: "Yellow Stem Borer",
    scientificName: "Scirpophaga incertulas",
    trap: "Funnel Trap",
    timeOfTrapInstall: "After Plantation",
    lureReplacement: "45 Days",
    monitoring: "10 Traps / Acre",
    massTrapping: "20-25 Traps / Acre"
    },
  },
  {
    name: "White Grub Lure",
    image: whiteGrub,
    description: {
      targetPest: "White Grub Beetle",
      crop: "Sugarcane, Groundnut",
      lureType: "Pheromone Dispenser",
      lifeSpan: "30–45 Days",
      cientificName: "Various White Grub species",
    trap: "Pheromone Trap / Pitfall Trap",
    timeOfTrapInstall: "After Plantation",
    lureReplacement: "30–45 Days",
    monitoring: "10 Traps / Acre",
    massTrapping: "20–25 Traps / Acre"
    },
  },
  {
    name: "Tomato Fruit Borer Lure",
    image: tomatoLure,
    description: {
      targetPest: "Tomato Fruit Borer",
      crop: "Tomato, Brinjal, Chilli",
      lureType: "Pheromone Dispenser",
      lifeSpan: "30–45 Days",
      scientificName: "Helicoverpa armigera",
    trap: "Funnel Trap",
    timeOfTrapInstall: "After Plantation",
    lureReplacement: "30–45 Days",
    monitoring: "10 Traps / Acre",
    massTrapping: "20–25 Traps / Acre"
    },
  },
  {
    name: "Thrips Lure",
    image: thripsLure,
    description: {
      
    category: "Pheromone Lure Trap",
    crop: "Gerbera, Geranium, Marigold, Chrysanthemum",
    targetPest: "Western Flower Thrips",
    scientificName: "Frankliniella occidentalis",
    trap: "Delta Trap / Sticky Trap",
    timeOfTrapInstall: "After Plantation",
    lureReplacement: "45 Days",
    monitoring: "50-60 Traps / Acre",
    massTrapping: "70-80 Traps / Acre"
    },
  },
  {
    name: "Thrips Lure 2",
    image: thrips2Lure,
    description: {
      targetPest: "Thrips (Alternate)",
      crop: "Chilli, Onion",
      lureType: "Pheromone Dispenser",
      lifeSpan: "30 Days",
      scientificName: "Frankliniella occidentalis",
    trap: "Delta Trap / Sticky Trap",
    timeOfTrapInstall: "After Plantation",
    lureReplacement: "45 Days",
    monitoring: "50–60 Traps / Acre",
    massTrapping: "70–80 Traps / Acre"
    },
  },
  {
    name: "Spodoptera Frugiperda Lure",
    image: spodLureF,
    description: {
      
    category: "Pheromone Lure Trap",
    crop: "Bengal Gram, Red Gram, Black Gram, Chilli, Chrysanthemum, Cotton, Cow Pea, etc",
    targetPest: "Cotton Bollworm",
    scientificName: "Helicoverpa armigera",
    trap: "Funnel Trap",
    timeOfTrapInstall: "Before Flowering",
    lureReplacement: "45 Days",
    monitoring: "10 Traps / Acre",
    massTrapping: "20-25 Traps / Acre"
    },
  },
  {
    name: "Spodoptera Litura Lure",
    image: spodOLure,
    description: {
      
    category: "Pheromone Lure Trap",
    crop: "Tobacco, Redgram, Tomato, Chilli, Castor, Cotton, Maize and other 130 vegetables",
    targetPest: "Tobacco Caterpillar",
    scientificName: "Spodoptera litura",
    trap: "Funnel Trap",
    timeOfTrapInstall: "After Plantation",
    lureReplacement: "45 Days",
    monitoring: "10 Traps / Acre",
    massTrapping: "20-25 Traps / Acre"
    },
  },
  {
    name: "Red Palm Weevil Lure",
    image: redPalmLure,
    description: {
      targetPest: "Red Palm Weevil",
      crop: "Coconut, Date Palm",
      lureType: "Pheromone Dispenser",
      lifeSpan: "60 Days",
      scientificName: "Oryctes rhinoceros",
    trap: "Bucket Trap",
    timeOfTrapInstall: "All Time",
    lureReplacement: "90–120 Days",
    monitoring: "4–5 Traps / Acre",
    massTrapping: "8–10 Traps / Acre"
    },
  },
  {
    name: "Pomegranate Fruit Borer Lure",
    image: pomoLure,
    description: {
      
    category: "Pheromone Lure Trap",
    crop: "Pomegranate, Coffee, Tea, Guava, Lemon, Orange, Lemon, Wild Lime, Citron, Mango, Figs, Sour Orange",
    targetPest: "Shot Hole Borer",
    scientificName: "Xyleborus perforance/X. Fornicatus",
    trap: "Pomo Trap",
    timeOfTrapInstall: "After Plantation",
    lureReplacement: "60-90 Days",
    monitoring: "8 Traps near Infested Plants",
    massTrapping: "Cover all Infested Areas"
    },
  },
  {
    name: "Brinjal Fruit Borer Lure",
    image: brinjalLure,
    description: {
      
    category: "Pheromone Lure Trap",
    crop: "Brinjal",
    targetPest: "Brinjal Fruit Shoot Borer",
    scientificName: "Leucinodes orbonalis",
    trap: "Funnel Trap / Watertrap",
    timeOfTrapInstall: "After Plantation",
    lureReplacement: "45 Days",
    monitoring: "10 Traps / Acre",
    massTrapping: "20-25 Traps / Acre"
    },
  },
  {
    name: "Beetle Lure",
    image: beetleLure,
    description: {
      
    category: "Pheromone Lure Trap",
    crop: "Coconut, Date Palm, Oil Palm",
    targetPest: "Rhinoceros Beetle",
    scientificName: "Oryctes rhinoceros",
    trap: "Bucket Trap",
    timeOfTrapInstall: "All Time",
    lureReplacement: "90-120 Days",
    monitoring: "4-5 Traps / Acre",
    massTrapping: "8-10 Traps / Acre"
    },
  },
  {
    name: "Bactrocera Minax Lure",
    image: bactroceraMinax,
    description: {
      targetPest: "Chinese Citrus Fruit Fly",
      crop: "Citrus Fruits",
      lureType: "Pheromone Dispenser",
      lifeSpan: "30–45 Days",
      scientificName: "Bactrocera minax",
    trap: "IPM Trap / MaxPlus Trap",
    timeOfTrapInstall: "Before Flowering",
    lureReplacement: "60 Days",
    monitoring: "10 Traps / Acre",
    massTrapping: "20–25 Traps / Acre"
    },
  },
];

export default pheromones;
