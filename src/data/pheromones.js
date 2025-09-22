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
      targetPest: "Citrus Leaf Miner",
      crop: "Citrus Plants",
      lureType: "Pheromone Dispenser",
      lifeSpan: "30–45 Days",
    },
  },
  {
    name: "DBM Lure (Diamondback Moth)",
    image: dbmLure,
    description: {
      targetPest: "Diamondback Moth",
      crop: "Cabbage, Cauliflower, Crucifers",
      lureType: "Pheromone Dispenser",
      lifeSpan: "30–45 Days",
    },
  },
  {
    name: "ESB Lure (Early Shoot Borer)",
    image: esbLure,
    description: {
      targetPest: "Early Shoot Borer",
      crop: "Sugarcane",
      lureType: "Pheromone Dispenser",
      lifeSpan: "30–45 Days",
    },
  },
  {
    name: "Fruit Fly Lure (Bactrocera spp.)",
    image: fruitFly,
    description: {
      targetPest: "Fruit Fly",
      crop: "Guava, Mango, Papaya, Cucurbits",
      lureType: "Methyl Eugenol Trap",
      lifeSpan: "30 Days",
    },
  },
  {
    name: "Gulabi Fly Lure",
    image: gulabiFly,
    description: {
      targetPest: "Pink Bollworm",
      crop: "Cotton",
      lureType: "Pheromone Dispenser",
      lifeSpan: "30–45 Days",
    },
  },
  {
    name: "Helicoverpa Armigera Lure",
    image: helicOLure,
    description: {
      targetPest: "Helicoverpa Armigera",
      crop: "Cotton, Chickpea, Tomato",
      lureType: "Pheromone Dispenser",
      lifeSpan: "30–45 Days",
    },
  },
  {
    name: "Melon Fly Lure",
    image: melonFly,
    description: {
      targetPest: "Melon Fly",
      crop: "Cucurbits (Melon, Cucumber, Gourds)",
      lureType: "Cue-lure Dispenser",
      lifeSpan: "30 Days",
    },
  },
  {
    name: "Maruca Vitrata Lure",
    image: mvLure,
    description: {
      targetPest: "Maruca Vitrata",
      crop: "Pigeon Pea, Cowpea",
      lureType: "Pheromone Dispenser",
      lifeSpan: "30–45 Days",
    },
  },
  {
    name: "Yellow Stem Borer (YSB) Lure",
    image: ysbLure,
    description: {
      targetPest: "Yellow Stem Borer",
      crop: "Paddy / Rice",
      lureType: "Pheromone Dispenser",
      lifeSpan: "30 Days",
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
    },
  },
  {
    name: "Thrips Lure",
    image: thripsLure,
    description: {
      targetPest: "Thrips",
      crop: "Chilli, Onion",
      lureType: "Pheromone Dispenser",
      lifeSpan: "30 Days",
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
    },
  },
  {
    name: "Spodoptera Frugiperda Lure",
    image: spodLureF,
    description: {
      targetPest: "Fall Armyworm",
      crop: "Maize",
      lureType: "Pheromone Dispenser",
      lifeSpan: "30–45 Days",
    },
  },
  {
    name: "Spodoptera Litura Lure",
    image: spodOLure,
    description: {
      targetPest: "Spodoptera Litura",
      crop: "Soybean, Cotton",
      lureType: "Pheromone Dispenser",
      lifeSpan: "30–45 Days",
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
    },
  },
  {
    name: "Pomegranate Fruit Borer Lure",
    image: pomoLure,
    description: {
      targetPest: "Pomegranate Fruit Borer",
      crop: "Pomegranate",
      lureType: "Pheromone Dispenser",
      lifeSpan: "30 Days",
    },
  },
  {
    name: "Brinjal Fruit Borer Lure",
    image: brinjalLure,
    description: {
      targetPest: "Brinjal Fruit Borer",
      crop: "Brinjal",
      lureType: "Pheromone Dispenser",
      lifeSpan: "30–45 Days",
    },
  },
  {
    name: "Beetle Lure",
    image: beetleLure,
    description: {
      targetPest: "Various Beetle Pests",
      crop: "Sugarcane, Groundnut",
      lureType: "Pheromone Dispenser",
      lifeSpan: "30–45 Days",
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
    },
  },
];

export default pheromones;
