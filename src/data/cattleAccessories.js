// ==================== IMPORTS ====================

// Milking Machine Spares
import pulsator from "../assets/p1milking.png";
import pulsatorStand from "../assets/p2milking.png";
import bucketAssembly from "../assets/p3milking.png";
import completeClaw from "../assets/p4milking.png";
import vaccumGuage from "../assets/p5milking.png";   // ✅ Added missing import
import liner from "../assets/p6milking.png";
import transparentShell from "../assets/p7milking.png";

// Other Equipments
import calfPuller from "../assets/p1other.png";
import highPressureSprayer from "../assets/p2other.png";
import sailageBag from "../assets/p3other.png";
import animalLiftingTravis from "../assets/p4other.png";

// Cow Accessories
import earTagPlier from "../assets/p1cow.png";
import earTag from "../assets/p2cow.png";
import feedingBottle from "../assets/p3cow.png";
import noseRing from "../assets/p4cow.png";
import waterBowl from "../assets/p5cow.png";
import hoofKnife from "../assets/p6cow.png";
import hoofTrimming from "../assets/p7cow.png";
import teatDipCup from "../assets/p8cow.png";
import calfWeaner from "../assets/p9cow.png";
import plasticWeaner from "../assets/p10cow.png";
import rubberBrush from "../assets/p11cow.png";
import rubberGloves from "../assets/p12cow.png";
import basoCleaning from "../assets/p13cow.png";

// ==================== EXPORTS ====================

// Milking Machine Spares
export const milkingMachineSpares = [
  { name: "PULSATOR", image: pulsator },                 // ✅ Now used
  { name: "PULSATOR STAND", image: pulsatorStand },
  { name: "BUCKET & ASSEMBLY", image: bucketAssembly },
  { name: "COMPLETE CLAW", image: completeClaw },
  { name: "VACCUM GUAGE", image: vaccumGuage },
  { name: "LINER", image: liner },
  { name: "TRANSPARENT SHELL ASSEMBLY", image: transparentShell },
];

// Other Equipments
export const otherEquipments = [
  { name: "CALF PULLER", image: calfPuller },
  { name: "HIGH PRESSURE SPRAYER", image: highPressureSprayer },
  { name: "SAILAGE BAG", image: sailageBag },
  { name: "ANIMAL LIFTING TRAVIS", image: animalLiftingTravis },
];

// Cow Accessories
export const cowAccessories = [
  { name: "EAR TAG PLIER", image: earTagPlier },
  { name: "EAR TAG", image: earTag },
  { name: "FEEDING BOTTLE", image: feedingBottle },
  { name: "NOSE RING", image: noseRing },
  { name: "CATTLE WATER BOWL", image: waterBowl },
  { name: "HOOF KNIFE", image: hoofKnife },
  { name: "HOOF TRIMMING FORCEPS", image: hoofTrimming },
  { name: "TEAT DIP CUP", image: teatDipCup },
  { name: "CALF WEANING WEANER", image: calfWeaner },
  { name: "PLASTIC CATTLE WEANER", image: plasticWeaner },
  { name: "RUBBER BRUSH", image: rubberBrush },
  { name: "RUBBER HAND GLOVES", image: rubberGloves },
  { name: "BASO CLEANING SOLUTION", image: basoCleaning },
];
