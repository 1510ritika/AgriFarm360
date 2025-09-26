// ==================== IMPORTS ====================
import sprayer1 from "../assets/sprayer1.png"; // Battery & Manual Operated Sprayer BRP - BS - 01
import sprayer2 from "../assets/sprayer2.png"; // 2 Stroke Knapsack Sprayer BRP - KS - 02
import sprayer3 from "../assets/sprayer3.png"; // 4 Stroke Knapsack Sprayer BRP - KS(R) - 03
import sprayer4 from "../assets/sprayer4.png"; // 4 Stroke Knapsack Sprayer BRP - KS(H) - 04
import sprayer5 from "../assets/sprayer5.jpg"; // HTP Power Operated Sprayer Petrol BRP - PSH - 05
import sprayer6 from "../assets/sprayer6.jpg"; // HTP Power Operated Sprayer Diesel BRP - PSD - 06
import sprayer7 from "../assets/sprayer7.png"; // HTP Power Sprayer BRP - HTP - 07
import sprayer8 from "../assets/sprayer7.png"; // HTP Power Sprayer BRP - HTP - 08

// ==================== PRODUCTS ====================
const sprayers = [
  {
    name: "Battery & Manual Operated Sprayer",
    image: sprayer1,
    description: {
      model: "Manual & Battery operated",
      chemicalTankCapacity: "16 ltrs",
      sprayHoseLength: "1.5 feet",
      noOfSprayerGuns: "1",
      sprayingDistance: "3 feet",
      nozzleMaterial: "Steel",
      fuelType: "Electric",
      battery: "12 volts",
      reChargingTime: "8 hours",
      outputPerCharge: "300 - 350 liters per charge",
    },
  },
  {
    name: "2 Stroke Knapsack Sprayer ",
    image: sprayer2,
    description: {
      model: "Petrol Engine",
      engineCapacity: "25 cc",
      engineType: "2 Stroke",
      chemicalTankCapacity: "20 ltrs",
      sprayHoseLength: "1.5 feet",
      noOfSprayerGuns: "1",
      sprayingDistance: "5 feet",
      nozzleMaterial: "Steel",
      fuelType: "Petrol",
      fuelTankCapacity: "600 ml",
      pumpQuality: "Brass",
      fuelConsumptionApprox: "800 ml per ltr",
      engineOilUsed: "20w40",
      sparkPlugCleanInterval: "Every 3 months",
    },
  },
  {
    name: "4 Stroke Knapsack Sprayer ",
    image: sprayer3,
    description: {
      model: "Petrol Engine",
      engineType: "4 Stroke",
      chemicalTankCapacity: "20 ltrs",
      sprayHoseLength: "1.5 feet",
      noOfSprayerGuns: "1",
      sprayingDistance: "5 feet",
      nozzleMaterial: "Steel",
      fuelType: "Petrol",
      fuelTankCapacity: "600 ml",
      fuelConsumptionApprox: "600 ml per hour",
      engineCapacityCC: "21 cc",
      engineOilUsed: "20w40",
      engineOilCapacity: {
        front: "100 ml",
        back: "250 ml",
      },
      oilEnginePeriodHours: {
        first: "20 hours",
        second: "20 hours",
        third: "100 hours",
      },
      sparkPlugCleanInterval: "Every 3 months",
    },
  },
  {
    name: "4 Stroke Knapsack Sprayer ",
    image: sprayer4,
    description: {
      model: "Petrol Engine",
      chemicalTankCapacity: "20 ltrs",
      sprayHoseLength: "1.5 feet",
      engineMake: "Honda",
      noOfSprayerGuns: "1",
      sprayingDistance: "5 feet",
      nozzleMaterial: "Steel",
      fuelType: "Petrol",
      fuelTankCapacity: "600 ml",
      fuelConsumptionApprox: "600 ml per hour",
      engineCapacityCC: "22 cc",
      engineOilUsed: "20w40",
      engineOilCapacity: {
        front: "100 ml",
        back: "250 ml",
      },
      oilEnginePeriodHours: {
        first: "20 hours",
        second: "20 hours",
        third: "100 hours",
      },
      sparkPlugCleanInterval: "Every 3 months",
    },
  },
  {
    name: "HTP Power Operated Sprayer (Petrol Engine)",
    image: sprayer5,
    description: {
      model: "Petrol Engine",
      sprayHoseLength: "300 feet",
      engineMake: "Honda",
      noOfSprayerGuns: "2",
      sprayingDistance: "8 feet",
      nozzleMaterial: "Steel",
      fuelType: "Diesel",
      fuelTankCapacity: "2 ltrs",
      fuelConsumptionApprox: "600 - 700 ml per hour",
      engineCapacityHP: "4 Hp",
      engineOilUsed: "20w40",
      engineOilCapacity: {
        front: "500 ml",
        back: "1.5 ltrs",
      },
      oilEnginePeriodHours: {
        first: "20 hours",
        second: "50 hours",
        third: "100 hours",
      },
      sparkPlugCleanInterval: "Every 3 months",
    },
  },
  {
    name: "HTP Power Operated Sprayer (Diesel Engine)",
    image: sprayer6,
    description: {
      model: "Diesel Engine",
      sprayHoseLength: "300 feet",
      noOfSprayerGuns: "2",
      sprayingDistance: "8 feet",
      nozzleMaterial: "Steel",
      fuelType: "Diesel",
      fuelTankCapacity: "2 ltrs",
      fuelConsumptionApprox: "800 - 900 ml per hour",
      engineCapacityHP: "4 Hp",
      engineOilUsed: "20w40",
      engineOilCapacity: {
        front: "500 ml",
        back: "1.5 ltrs",
      },
      oilEnginePeriodHours: {
        first: "20 hours",
        second: "50 hours",
        third: "100 hours",
      },
      sparkPlugCleanInterval: "Every 3 months",
    },
  },
  {
    name: "HTP Power Sprayer ",
    image: sprayer7,
    description: {
      usage: "Agriculture",
      rpm: "800 - 1000",
      requiredPower: "1.5 - 2 Hp",
      piston: "3 (triple)",
      discharge: "14 - 22 Ltrs per min",
      workingPressure: "20 - 45 kg/cm2",
    },
  },
  {
    name: "HTP Power Sprayer",
    image: sprayer8,
    description: {
      usage: "Agriculture",
      rpm: "800 - 1000",
      requiredPower: "3 - 5 Hp",
      piston: "3 (triple)",
      discharge: "30 - 40 Ltrs per min",
      workingPressure: "20 - 45 kg/cm2",
    },
  },
];

export default sprayers;
