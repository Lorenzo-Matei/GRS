// this creates an object to return sample products
const data = {
  //this defines data as an object
  products: [
    // this is an array of 6 products
    {
      _id: "1", //makes each product unique
      name: "Wustof Amici Chefs Knife 8-inch",
      slug: "wustof-amici-chefs-knife-8-inch",
      category: "Knives",
      image:
        "/assets/images/sample-products/wusthof-amici-chefs-knife-8-inch.webp",
      price: 360.0,
      countInStock: 10,
      brand: "Wusthof",
      brandLogo: "/assets/images/logos/wusthof.png", //for some reason you dont need to include public or src
      rating: 4.5,
      numReviews: 12,
      description:
        "Forged from a single piece of WÜSTHOF steel, the precision-sharpened, 8-inch blade makes this knife agile, intuitive, and easy to handle. A full bolster – the thicker area between the blade and the handle on forged knives – further protects your fingers during slicing and dicing. The custom-grained Calabrian olive wood handle is naturally water-resistant and antibacterial, and its organic shape fits comfortably in hands of any size.",
    },

    {
      _id: "2",
      name: "Wustof Performer Chefs Knife 6-inch",
      slug: "wustof-performer-chefs-knife-6-inch",
      category: "Knives",
      image:
        "/assets/images/sample-products/wusthof-performer-chefs-knife-6-inch.webp",
      price: 340.0,
      countInStock: 4,
      brand: "Wusthof",
      brandLogo: "/assets/images/logos/wusthof.png",
      rating: 4.7,
      numReviews: 23,
      description:
        "Consider the chef's knife the hero of your kitchen — it's an all-rounder in food preparation that supports the widest variety of kitchen tasks. A great chef's knife makes slicing and dicing a pleasure, which is one of the many reasons it is often the most used, most important kitchen tool for home cooks and professional chefs. Precision forged from a single piece of WÜSTHOF steel by our expert knife artisans in Solingen, Germany, each Performer blade is enhanced by an elegant, black Diamond-Like Carbon (DLC) coating. This DLC coating makes our steel exceptionally strong and durable, producing a long-lasting blade that is heat resistant, scratch proof, and resilient to damage, even after frequent use in your kitchen. (It also makes Performer blades largely water-repellent, mimicking the moisture-beading effect you might see on the sleeve of your rain jacket.) Handles are fitted with our innovative, ergonomic Hexagon Power Grip, a non-slip honeycomb design that guarantees each slicing moment is safe, comfortable, and precise. Combining centuries of expert artisanship with cutting-edge technology, the WÜSTHOF Performer 6inch Chef's Knife is an ideal addition to any kitchen.",
    },

    {
      _id: "3",
      name: "45LB POWERFRY3™ TR SERIES GAS FREESTANDING COMMERCIAL FRYER",
      slug: "45lb-powerfry3-tr-series-gas-freestanding-commercial-fryer",
      category: "Fryer",
      image:
        "/assets/images/sample-products/45LB-POWERFRYER-TR-SERIES-GAS-FREESTANDING-COMMERCIAL-FRYER.png",
      price: 1100.0,
      countInStock: 0,
      brand: "Vulcan",
      brandLogo: "/assets/images/logos/vulcan.png",
      rating: 3.9,
      numReviews: 41,
      description:
        "Vulcan’s PowerFry3™ Series uses a patented ThreePass™ heat transfer system to harness energy more efficiently to deliver greater throughput and shorter cook times. SoftStart™ Ignition System heats oil quickly while using half the BTUs at startup, resulting in extension of oil life. Solid state controls enable more precise temperature control for consistent cooking from batch to batch.",
    },

    {
      _id: "4",
      name: "40LB CEF SERIES ELECTRIC COUNTER FRYER",
      slug: "vulcan-40lb-cef-series-electric-counter-fryer",
      category: "Fryer",
      image:
        "/assets/images/sample-products/ENERGY-STAR-CERTIFIED-40LB-CEF-SERIES-ELECTRIC-COUNTER-FRYER.png",
      price: 1400.0,
      countInStock: 17,
      brand: "Vulcan",
      brandLogo: "/assets/images/logos/vulcan.png",
      rating: 4.3,
      numReviews: 33,
      description:
        "Industry’s first ENERGY STAR® certified 40 lb countertop electric fryer uses less energy resulting in lower energy bills and may qualify for rebates. Utilizes swing up, ribbon style heating elements that have more surface area than conventional elements for improved cooking efficiency and quick recovery. Large 1 1⁄4 inch drain valve with standard quick disconnect allows easy and fast filtration to encourage regular filtering, extending oil life and reducing weekly oil spend",
    },

    {
      _id: "5",
      name: "BX-14 Heavy Duty Combi",
      slug: "blodget-bx-14-heavy-duty-combi",
      category: "Ovens",
      image: "/assets/images/sample-products/BX-14.png",
      price: 3300.0,
      countInStock: 10,
      brand: "Blodgett",
      brandLogo: "/assets/images/logos/blodgett.png",
      rating: 4.5,
      numReviews: 12,
      description:
        "Built with solid, reliable construction, the BX-14 Series Boilerless Combi Ovens are designed to last for years of rigorous use in the commercial kitchen. The BX-14 provides all the features you need to increase production while decreasing your time, labor and maintenance costs.",
    },

    {
      _id: "6",
      name: "Centerline™ 20-Quart Mixer",
      slug: "hobart-centerline-20-quart-mixer",
      category: "Mixers",
      image: "/assets/images/sample-products/centerline-20-quart-mixer.png",
      price: 2200.0,
      countInStock: 10,
      brand: "Hobart",
      brandLogo: "/assets/images/logos/hobart.png",
      rating: 4.5,
      numReviews: 12,
      description:
        "The Centerline 20 qt mixer has the Hobart quality every kitchen wants. The essential performance most kitchens need. These mixers are the perfect fit for kitchens that depend on a mixer for multiple applications, need a heavy dough mixer, have limited batch use and operate a mixer for shorter periods of time.",
    },
    // {
    //   _id: "7", //makes each product unique
    //   name: "Wustof Amici Chefs Knife 8-inch",
    //   slug: "wustof-amici-chefs-knife-8-inch",
    //   category: "Knives",
    //   image:
    //     "/assets/images/sample-products/wusthof-amici-chefs-knife-8-inch.webp",
    //   price: 360.0,
    //   countInStock: 10,
    //   brand: "Wusthof",
    //   brandLogo: "/assets/images/logos/wusthof.png", //for some reason you dont need to include public or src
    //   rating: 4.5,
    //   numReviews: 12,
    //   description:
    //     "Forged from a single piece of WÜSTHOF steel, the precision-sharpened, 8-inch blade makes this knife agile, intuitive, and easy to handle. A full bolster – the thicker area between the blade and the handle on forged knives – further protects your fingers during slicing and dicing. The custom-grained Calabrian olive wood handle is naturally water-resistant and antibacterial, and its organic shape fits comfortably in hands of any size.",
    // },

    // {
    //   _id: "8",
    //   name: "Wustof Performer Chefs Knife 6-inch",
    //   slug: "wustof-performer-chefs-knife-6-inch",
    //   category: "Knives",
    //   image:
    //     "/assets/images/sample-products/wusthof-performer-chefs-knife-6-inch.webp",
    //   price: 340.0,
    //   countInStock: 4,
    //   brand: "Wusthof",
    //   brandLogo: "/assets/images/logos/wusthof.png",
    //   rating: 4.7,
    //   numReviews: 23,
    //   description:
    //     "Consider the chef's knife the hero of your kitchen — it's an all-rounder in food preparation that supports the widest variety of kitchen tasks. A great chef's knife makes slicing and dicing a pleasure, which is one of the many reasons it is often the most used, most important kitchen tool for home cooks and professional chefs. Precision forged from a single piece of WÜSTHOF steel by our expert knife artisans in Solingen, Germany, each Performer blade is enhanced by an elegant, black Diamond-Like Carbon (DLC) coating. This DLC coating makes our steel exceptionally strong and durable, producing a long-lasting blade that is heat resistant, scratch proof, and resilient to damage, even after frequent use in your kitchen. (It also makes Performer blades largely water-repellent, mimicking the moisture-beading effect you might see on the sleeve of your rain jacket.) Handles are fitted with our innovative, ergonomic Hexagon Power Grip, a non-slip honeycomb design that guarantees each slicing moment is safe, comfortable, and precise. Combining centuries of expert artisanship with cutting-edge technology, the WÜSTHOF Performer 6inch Chef's Knife is an ideal addition to any kitchen.",
    // },

    // {
    //   _id: "9",
    //   name: "45LB POWERFRY3™ TR SERIES GAS FREESTANDING COMMERCIAL FRYER",
    //   slug: "45lb-powerfry3-tr-series-gas-freestanding-commercial-fryer",
    //   category: "Fryer",
    //   image:
    //     "/assets/images/sample-products/45LB-POWERFRYER-TR-SERIES-GAS-FREESTANDING-COMMERCIAL-FRYER.png",
    //   price: 1100.0,
    //   countInStock: 0,
    //   brand: "Vulcan",
    //   brandLogo: "/assets/images/logos/vulcan.png",
    //   rating: 3.9,
    //   numReviews: 41,
    //   description:
    //     "Vulcan’s PowerFry3™ Series uses a patented ThreePass™ heat transfer system to harness energy more efficiently to deliver greater throughput and shorter cook times. SoftStart™ Ignition System heats oil quickly while using half the BTUs at startup, resulting in extension of oil life. Solid state controls enable more precise temperature control for consistent cooking from batch to batch.",
    // },

    // {
    //   _id: "10",
    //   name: "40LB CEF SERIES ELECTRIC COUNTER FRYER",
    //   slug: "vulcan-40lb-cef-series-electric-counter-fryer",
    //   category: "Fryer",
    //   image:
    //     "/assets/images/sample-products/ENERGY-STAR-CERTIFIED-40LB-CEF-SERIES-ELECTRIC-COUNTER-FRYER.png",
    //   price: 1400.0,
    //   countInStock: 17,
    //   brand: "Vulcan",
    //   brandLogo: "/assets/images/logos/vulcan.png",
    //   rating: 4.3,
    //   numReviews: 33,
    //   description:
    //     "Industry’s first ENERGY STAR® certified 40 lb countertop electric fryer uses less energy resulting in lower energy bills and may qualify for rebates. Utilizes swing up, ribbon style heating elements that have more surface area than conventional elements for improved cooking efficiency and quick recovery. Large 1 1⁄4 inch drain valve with standard quick disconnect allows easy and fast filtration to encourage regular filtering, extending oil life and reducing weekly oil spend",
    // },

    // {
    //   _id: "11",
    //   name: "BX-14 Heavy Duty Combi",
    //   slug: "blodget-bx-14-heavy-duty-combi",
    //   category: "Ovens",
    //   image: "/assets/images/sample-products/BX-14.png",
    //   price: 3300.0,
    //   countInStock: 10,
    //   brand: "Blodgett",
    //   brandLogo: "/assets/images/logos/blodgett.png",
    //   rating: 4.5,
    //   numReviews: 12,
    //   description:
    //     "Built with solid, reliable construction, the BX-14 Series Boilerless Combi Ovens are designed to last for years of rigorous use in the commercial kitchen. The BX-14 provides all the features you need to increase production while decreasing your time, labor and maintenance costs.",
    // },

    // {
    //   _id: "12",
    //   name: "Centerline™ 20-Quart Mixer",
    //   slug: "hobart-centerline-20-quart-mixer",
    //   category: "Mixers",
    //   image: "/assets/images/sample-products/centerline-20-quart-mixer.png",
    //   price: 2200.0,
    //   countInStock: 10,
    //   brand: "Hobart",
    //   brandLogo: "/assets/images/logos/hobart.png",
    //   rating: 4.5,
    //   numReviews: 12,
    //   description:
    //     "The Centerline 20 qt mixer has the Hobart quality every kitchen wants. The essential performance most kitchens need. These mixers are the perfect fit for kitchens that depend on a mixer for multiple applications, need a heavy dough mixer, have limited batch use and operate a mixer for shorter periods of time.",
    // },
  ],
};

export default data;

// product: [
//   {
//     id: 0,
//     productCategory: "Cooking",
//     productSubCategory: "Fryers",
//     productMicroCategory: "",
//     linkedItemName: "",
//     manufacturer: "Hobart",
//     distributor: "Hobart",
//     productBrand: "Vulcan",
//     productName: "LG Series Fryer",
//     modelVariant: "40 lb",
//     SKU: [
//       {
//         storeSKU: "LG300-1",
//       },
//       {
//         vendorSKU: "LG300-1",
//       },
//       {
//         linkedSKU: "",
//       },
//     ],
//     itemSerial: "",
//     itemWeight: "210 lb",
//     dimensions: "15.5 in x 30 in x 35 in",
//     freightClass: "85",
//     warranty: [
//       {
//         component1: "",
//         duration: 0,
//       },
//       {
//         component2: "",
//         duration: 0,
//       },
//       {
//         partsAndLabour: 0,
//       },
//       {
//         general: 12,
//       },
//     ],
//     shortDescription:
//       'Fryer, gas, 15-1/2" W, free-standing, 14" x 14" tank size, 35-40 lb shortening capacity, millivolt thermostat controls, twin baskets, 3/4" rear gas connection, legs, stainless steel front top, door & fry tank, 90,000 BTU, CSA Star, CSA Flame, NSF',
//     fuelSource: [
//       {
//         gasType: "Natural Gas",
//       },
//       {
//         phase: "",
//       },
//       {
//         voltage: "",
//       },
//       {
//         BTU: "90,000",
//       },
//       {
//         amps: "",
//       },
//     ],
//     additionalInfo: "",
//     clearance: false,
//     returnable: true,
//     onWebsite: true,
//     currency: "CAD",
//     pricing: [
//       {
//         instorePrice: [995.0, 775.0],
//       },
//       {
//         onlinePrice: [995.0, 775.0],
//       },
//       {
//         cost: [0.0, 0.0],
//       },
//       {
//         autoQuotesPrice: [0.0, 0.0],
//       },
//       {
//         shippingPrice: [0.0, 0.0],
//       },
//     ],
//     priceMod: [
//       {
//         marginPercentage: 0.0,
//       },
//       {
//         discountPercentage: 0.0,
//       },
//       {
//         marginDollar: 0.0,
//       },
//       {
//         discountDollar: 0.0,
//       },
//     ],
//     commission: [
//       {
//         commissionPercentage: 0.0,
//       },
//       {
//         fixedCommission: 0.0,
//       },
//     ],
//     images: ["Vulcan LG300.jpg"],
//   },
//   {
//     id: 7,
//     productCategory: "Cooking",
//     productSubCategory: "Fryers",
//     productMicroCategory: "",
//     linkedItemName: "",
//     manufacturer: "Hobart",
//     distributor: "Hobart",
//     productBrand: "Vulcan",
//     productName: "GR Series Fryer",
//     modelVariant: "40 lb",
//     SKU: [
//       {
//         storeSKU: "1GR35M-1",
//       },
//       {
//         vendorSKU: "1GR35M-1",
//       },
//       {
//         linkedSKU: "",
//       },
//     ],
//     itemSerial: "",
//     itemWeight: "175 lb",
//     dimensions: "15.5 in x 30 in x 35 in",
//     freightClass: "85",
//     warranty: [
//       {
//         component1: "Tank",
//         duration: 120,
//       },
//       {
//         component2: "",
//         duration: 0,
//       },
//       {
//         partsAndLabour: 0,
//       },
//       {
//         general: 12,
//       },
//     ],
//     shortDescription:
//       'Fryer, gas, 15-1/2"W, free-standing, 35-40 lb. shortening capacity, millivolt thermostat controls, twin baskets, stainless steel cabinet & fry tank, 6" adjustable casters - 2 locking, 90,000 BTU, CSA Star, CSA FLame, NSF',
//     fuelSource: [
//       {
//         gasType: "Natural Gas",
//       },
//       {
//         phase: "",
//       },
//       {
//         voltage: "",
//       },
//       {
//         BTU: "90,000",
//       },
//       {
//         amps: "",
//       },
//     ],
//     additionalInfo: "",
//     clearance: false,
//     returnable: true,
//     onWebsite: true,
//     currency: "CAD",
//     pricing: [
//       {
//         instorePrice: [1850.0, 1440.0],
//       },
//       {
//         onlinePrice: [1850.0, 1440.0],
//       },
//       {
//         cost: [0.0, 0.0],
//       },
//       {
//         autoQuotesPrice: [0.0, 0.0],
//       },
//       {
//         shippingPrice: [0.0, 0.0],
//       },
//     ],
//     priceMod: [
//       {
//         marginPercentage: 0.0,
//       },
//       {
//         discountPercentage: 0.0,
//       },
//       {
//         marginDollar: 0.0,
//       },
//       {
//         discountDollar: 0.0,
//       },
//     ],
//     commission: [
//       {
//         commissionPercentage: 0.0,
//       },
//       {
//         fixedCommission: 0.0,
//       },
//     ],
//     images: ["Vulcan 1GR35M.png"],
//   },

//   {
//     id: 13,
//     productCategory: "Cooking",
//     productSubCategory: "Fryers",
//     productMicroCategory: "",
//     linkedItemName: "",
//     manufacturer: "Hobart",
//     distributor: "Hobart",
//     productBrand: "Vulcan",
//     productName: "GR Series Fryer",
//     modelVariant: "90 lb",
//     SKU: [
//       {
//         storeSKU: "1GR85M-1",
//       },
//       {
//         vendorSKU: "1GR85M-1",
//       },
//       {
//         linkedSKU: "",
//       },
//     ],
//     itemSerial: "",
//     itemWeight: "265 lb",
//     dimensions: "21 in x 34.5 in x 36 in",
//     freightClass: "85",
//     warranty: [
//       {
//         component1: "Tank",
//         duration: 120,
//       },
//       {
//         component2: "",
//         duration: 0,
//       },
//       {
//         partsAndLabour: 0,
//       },
//       {
//         general: 12,
//       },
//     ],
//     shortDescription:
//       'Fryer, gas, 21"W, free-standing, 85-90 lb. shortening capacity, millivolt thermostat controls, twin baskets, stainless steel cabinet & fry tank, adjustable casters (2 swivel with locks; 2 rigid), 150,000 BTU, CSA Star, CSA Flame, NSF',
//     fuelSource: [
//       {
//         gasType: "Natural Gas",
//       },
//       {
//         phase: "",
//       },
//       {
//         voltage: "",
//       },
//       {
//         BTU: "150,000",
//       },
//       {
//         amps: "",
//       },
//     ],
//     additionalInfo: "",
//     clearance: false,
//     returnable: true,
//     onWebsite: true,
//     currency: "CAD",
//     pricing: [
//       {
//         instorePrice: [2650.0, 2065.0],
//       },
//       {
//         onlinePrice: [2650.0, 2065.0],
//       },
//       {
//         cost: [0.0, 0.0],
//       },
//       {
//         autoQuotesPrice: [0.0, 0.0],
//       },
//       {
//         shippingPrice: [0.0, 0.0],
//       },
//     ],
//     priceMod: [
//       {
//         marginPercentage: 0.0,
//       },
//       {
//         discountPercentage: 0.0,
//       },
//       {
//         marginDollar: 0.0,
//       },
//       {
//         discountDollar: 0.0,
//       },
//     ],
//     commission: [
//       {
//         commissionPercentage: 0.0,
//       },
//       {
//         fixedCommission: 0.0,
//       },
//     ],
//     images: ["1GR65M.jpg"],
//   },

//   {
//     id: 19,
//     productCategory: "Cooking",
//     productSubCategory: "Fryers",
//     productMicroCategory: "",
//     linkedItemName: "",
//     manufacturer: "Hobart",
//     distributor: "Hobart",
//     productBrand: "Vulcan",
//     productName: "PowerFry3 Fryer",
//     modelVariant: "50 lb with Filter and Digital Controls",
//     SKU: [
//       {
//         storeSKU: "1TR45DF-1",
//       },
//       {
//         vendorSKU: "1TR45DF-1",
//       },
//       {
//         linkedSKU: "",
//       },
//     ],
//     itemSerial: "",
//     itemWeight: "230 lb",
//     dimensions: "15.5 in x 30 in x 36 in",
//     freightClass: "85",
//     warranty: [
//       {
//         component1: "Tank",
//         duration: 120,
//       },
//       {
//         component2: "",
//         duration: 0,
//       },
//       {
//         partsAndLabour: 0,
//       },
//       {
//         general: 12,
//       },
//     ],
//     shortDescription:
//       'PowerFry3\u2122 Fryer, gas, 15-1/2"W, free-standing, 45-50 lb. shortening capacity, solid state digital control with melt cycles, ThreePass\u2122 heat exchanger, electronic ignition, KleenScreen PLUS\u00ae filtration system, twin baskets, stainless steel cabinet & fry tank, adjustable casters (2 swivel with locks; 2 rigid), 70,000 BTU, CSA, CSA STAR, NSF, ENERGY STAR\u00ae',
//     fuelSource: [
//       {
//         gasType: "Natural Gas",
//       },
//       {
//         phase: "1-Phase",
//       },
//       {
//         voltage: "120",
//       },
//       {
//         BTU: "70,000",
//       },
//       {
//         amps: "6",
//       },
//     ],
//     additionalInfo: "NEMA 5-15P Plug",
//     clearance: false,
//     returnable: true,
//     onWebsite: true,
//     currency: "CAD",
//     pricing: [
//       {
//         instorePrice: [0.0, 0.0],
//       },
//       {
//         onlinePrice: [0.0, 0.0],
//       },
//       {
//         cost: [0.0, 0.0],
//       },
//       {
//         autoQuotesPrice: [0.0, 0.0],
//       },
//       {
//         shippingPrice: [0.0, 0.0],
//       },
//     ],
//     priceMod: [
//       {
//         marginPercentage: 0.0,
//       },
//       {
//         discountPercentage: 0.0,
//       },
//       {
//         marginDollar: 0.0,
//       },
//       {
//         discountDollar: 0.0,
//       },
//     ],
//     commission: [
//       {
//         commissionPercentage: 0.0,
//       },
//       {
//         fixedCommission: 0.0,
//       },
//     ],
//     images: ["Vulcan 1TR45DF.jpg"],
//   },
//   {
//     id: 24,
//     productCategory: "Cooking",
//     productSubCategory: "Fryers",
//     productMicroCategory: "",
//     linkedItemName: "",
//     manufacturer: "Hobart",
//     distributor: "Hobart",
//     productBrand: "Vulcan",
//     productName: "PowerFry3 Fryer",
//     modelVariant: "90 lb double fryer with Filter and Digital Controls",
//     SKU: [
//       {
//         storeSKU: "2TR85DF-1",
//       },
//       {
//         vendorSKU: "2TR85DF-1",
//       },
//       {
//         linkedSKU: "",
//       },
//     ],
//     itemSerial: "",
//     itemWeight: "700 lb",
//     dimensions: "42 in x 34.5 in x 36 in",
//     freightClass: "85",
//     warranty: [
//       {
//         component1: "Tank",
//         duration: 120,
//       },
//       {
//         component2: "",
//         duration: 0,
//       },
//       {
//         partsAndLabour: 0,
//       },
//       {
//         general: 12,
//       },
//     ],
//     shortDescription:
//       'PowerFry3\u2122 Fryer, gas, 42"W, (2) battery, 65-70 lb. each shortening capacity, solid state digital control with melt cycles, ThreePass\u2122 heat exchanger, electronic ignition, KleenScreen PLUS\u00ae filtration system, twin baskets, stainless steel cabinet & fry tank, adjustable casters (2 swivel with locks; 2 rigid), 180,000 BTU, CSA, NSF, ENERGY STAR\u00ae',
//     fuelSource: [
//       {
//         gasType: "Natural Gas",
//       },
//       {
//         phase: "1-Phase",
//       },
//       {
//         voltage: "120",
//       },
//       {
//         BTU: "160,000",
//       },
//       {
//         amps: "6",
//       },
//     ],
//     additionalInfo: "NEMA 5-15P Plug",
//     clearance: false,
//     returnable: true,
//     onWebsite: true,
//     currency: "CAD",
//     pricing: [
//       {
//         instorePrice: [0.0, 0.0],
//       },
//       {
//         onlinePrice: [0.0, 0.0],
//       },
//       {
//         cost: [0.0, 0.0],
//       },
//       {
//         autoQuotesPrice: [0.0, 0.0],
//       },
//       {
//         shippingPrice: [0.0, 0.0],
//       },
//     ],
//     priceMod: [
//       {
//         marginPercentage: 0.0,
//       },
//       {
//         discountPercentage: 0.0,
//       },
//       {
//         marginDollar: 0.0,
//       },
//       {
//         discountDollar: 0.0,
//       },
//     ],
//     commission: [
//       {
//         commissionPercentage: 0.0,
//       },
//       {
//         fixedCommission: 0.0,
//       },
//     ],
//     images: ["Vulcan 2TR45DF.jpg"],
//   },

//   {
//     id: 35,
//     productCategory: "Cooking",
//     productSubCategory: "Fryers",
//     productMicroCategory: "Fryer Baskets & Accessories",
//     linkedItemName: "",
//     manufacturer: "Hobart",
//     distributor: "Hobart",
//     productBrand: "Vulcan",
//     productName: "Twin Fryer Baskets",
//     modelVariant: "65 - 70 lb",
//     SKU: [
//       {
//         storeSKU: "BASKETS-TWIN65",
//       },
//       {
//         vendorSKU: "BASKETS-TWIN65",
//       },
//       {
//         linkedSKU: "",
//       },
//     ],
//     itemSerial: "",
//     itemWeight: "",
//     dimensions: "",
//     freightClass: "",
//     warranty: [
//       {
//         component1: "",
//         duration: 0,
//       },
//       {
//         component2: "",
//         duration: 0,
//       },
//       {
//         partsAndLabour: 0,
//       },
//       {
//         general: 0,
//       },
//     ],
//     shortDescription:
//       "Set of Twin Baskets, for all Vulcan 65 - 70 lb. gas fryers. Size: 13.25 L x 9 W x 6 H inches",
//     fuelSource: [
//       {
//         gasType: "",
//       },
//       {
//         phase: "",
//       },
//       {
//         voltage: "",
//       },
//       {
//         BTU: "",
//       },
//       {
//         amps: "",
//       },
//     ],
//     additionalInfo: "Sold as a set of two baskets",
//     clearance: false,
//     returnable: true,
//     onWebsite: true,
//     currency: "CAD",
//     pricing: [
//       {
//         instorePrice: [0.0, 0.0],
//       },
//       {
//         onlinePrice: [0.0, 0.0],
//       },
//       {
//         cost: [0.0, 0.0],
//       },
//       {
//         autoQuotesPrice: [0.0, 0.0],
//       },
//       {
//         shippingPrice: [0.0, 0.0],
//       },
//     ],
//     priceMod: [
//       {
//         marginPercentage: 0.0,
//       },
//       {
//         discountPercentage: 0.0,
//       },
//       {
//         marginDollar: 0.0,
//       },
//       {
//         discountDollar: 0.0,
//       },
//     ],
//     commission: [
//       {
//         commissionPercentage: 0.0,
//       },
//       {
//         fixedCommission: 0.0,
//       },
//     ],
//     images: ["Vulcan Basket 65.jpg"],
//   },

//   {
//     id: 43,
//     productCategory: "Cooking",
//     productSubCategory: "Fryers",
//     productMicroCategory: "Fryer Baskets & Accessories",
//     linkedItemName: "",
//     manufacturer: "Hobart",
//     distributor: "Hobart",
//     productBrand: "Vulcan",
//     productName: "Crumb Screen Mesh with Handles",
//     modelVariant: "85 - 90 lb",
//     SKU: [
//       {
//         storeSKU: "85CRUMB-SCREEN",
//       },
//       {
//         vendorSKU: "85CRUMB-SCREEN",
//       },
//       {
//         linkedSKU: "",
//       },
//     ],
//     itemSerial: "",
//     itemWeight: "",
//     dimensions: "",
//     freightClass: "",
//     warranty: [
//       {
//         component1: "",
//         duration: 0,
//       },
//       {
//         component2: "",
//         duration: 0,
//       },
//       {
//         partsAndLabour: 0,
//       },
//       {
//         general: 0,
//       },
//     ],
//     shortDescription:
//       'Mesh Crumb Screen, 1/4", for all Vulcan 85 - 90 lb Fryers.',
//     fuelSource: [
//       {
//         gasType: "",
//       },
//       {
//         phase: "",
//       },
//       {
//         voltage: "",
//       },
//       {
//         BTU: "",
//       },
//       {
//         amps: "",
//       },
//     ],
//     additionalInfo: "",
//     clearance: false,
//     returnable: true,
//     onWebsite: true,
//     currency: "CAD",
//     pricing: [
//       {
//         instorePrice: [0.0, 0.0],
//       },
//       {
//         onlinePrice: [0.0, 0.0],
//       },
//       {
//         cost: [0.0, 0.0],
//       },
//       {
//         autoQuotesPrice: [0.0, 0.0],
//       },
//       {
//         shippingPrice: [0.0, 0.0],
//       },
//     ],
//     priceMod: [
//       {
//         marginPercentage: 0.0,
//       },
//       {
//         discountPercentage: 0.0,
//       },
//       {
//         marginDollar: 0.0,
//       },
//       {
//         discountDollar: 0.0,
//       },
//     ],
//     commission: [
//       {
//         commissionPercentage: 0.0,
//       },
//       {
//         fixedCommission: 0.0,
//       },
//     ],
//     images: ["Vulcan Crumb Screen.jpg"],
//   },

//   {
//     id: 56,
//     productCategory: "Cooking",
//     productSubCategory: "Charbroilers",
//     productMicroCategory: "",
//     linkedItemName: "",
//     manufacturer: "Hobart",
//     distributor: "Hobart",
//     productBrand: "Vulcan",
//     productName: "VACB Achiever Series Charbroiler",
//     modelVariant: "60 inch",
//     SKU: [
//       {
//         storeSKU: "VACB60-1",
//       },
//       {
//         vendorSKU: "VACB60-1",
//       },
//       {
//         linkedSKU: "",
//       },
//     ],
//     itemSerial: "",
//     itemWeight: "500 lb",
//     dimensions: "60 in x 31 in x 15.5 in",
//     freightClass: "85",
//     warranty: [
//       {
//         component1: "",
//         duration: 0,
//       },
//       {
//         component2: "",
//         duration: 0,
//       },
//       {
//         partsAndLabour: 0,
//       },
//       {
//         general: 12,
//       },
//     ],
//     shortDescription:
//       'Achiever Charbroiler, countertop, 62-1/8", (11) cast iron 17,000 BTU burners with standing pilots & cast iron radiants, heat deflector tray, supercharger burner dividers, high range infinite heat control valves, fully welded chassis, stainless steel front, sides, top trim, backsplash & grease trough, cast iron top grates, 4" adjustable legs, 187,000 BTU, CSA, NSF',
//     fuelSource: [
//       {
//         gasType: "Natural Gas",
//       },
//       {
//         phase: "",
//       },
//       {
//         voltage: "",
//       },
//       {
//         BTU: "187,000",
//       },
//       {
//         amps: "",
//       },
//     ],
//     additionalInfo: "",
//     clearance: false,
//     returnable: true,
//     onWebsite: true,
//     currency: "CAD",
//     pricing: [
//       {
//         instorePrice: [0.0, 0.0],
//       },
//       {
//         onlinePrice: [0.0, 0.0],
//       },
//       {
//         cost: [0.0, 0.0],
//       },
//       {
//         autoQuotesPrice: [0.0, 0.0],
//       },
//       {
//         shippingPrice: [0.0, 0.0],
//       },
//     ],
//     priceMod: [
//       {
//         marginPercentage: 0.0,
//       },
//       {
//         discountPercentage: 0.0,
//       },
//       {
//         marginDollar: 0.0,
//       },
//       {
//         discountDollar: 0.0,
//       },
//     ],
//     commission: [
//       {
//         commissionPercentage: 0.0,
//       },
//       {
//         fixedCommission: 0.0,
//       },
//     ],
//     images: ["Vulcan VACB60.png"],
//   },
//   {
//     id: 67,
//     productCategory: "Cooking",
//     productSubCategory: "Charbroilers",
//     productMicroCategory: "Charbroiler Accessories",
//     linkedItemName: "",
//     manufacturer: "Hobart",
//     distributor: "Hobart",
//     productBrand: "Vulcan",
//     productName: "VACB Achiever Series Splash Guard",
//     modelVariant: "72 inch",
//     SKU: [
//       {
//         storeSKU: "SPLASH6-CB72",
//       },
//       {
//         vendorSKU: "SPLASH6-CB72",
//       },
//       {
//         linkedSKU: "",
//       },
//     ],
//     itemSerial: "",
//     itemWeight: "",
//     dimensions: "",
//     freightClass: "",
//     warranty: [
//       {
//         component1: "",
//         duration: 0,
//       },
//       {
//         component2: "",
//         duration: 0,
//       },
//       {
//         partsAndLabour: 0,
//       },
//       {
//         general: 0,
//       },
//     ],
//     shortDescription: 'Splashguard, 6" add-on, sides & back',
//     fuelSource: [
//       {
//         gasType: "",
//       },
//       {
//         phase: "",
//       },
//       {
//         voltage: "",
//       },
//       {
//         BTU: "",
//       },
//       {
//         amps: "",
//       },
//     ],
//     additionalInfo: "",
//     clearance: false,
//     returnable: true,
//     onWebsite: true,
//     currency: "CAD",
//     pricing: [
//       {
//         instorePrice: [0.0, 0.0],
//       },
//       {
//         onlinePrice: [0.0, 0.0],
//       },
//       {
//         cost: [0.0, 0.0],
//       },
//       {
//         autoQuotesPrice: [0.0, 0.0],
//       },
//       {
//         shippingPrice: [0.0, 0.0],
//       },
//     ],
//     priceMod: [
//       {
//         marginPercentage: 0.0,
//       },
//       {
//         discountPercentage: 0.0,
//       },
//       {
//         marginDollar: 0.0,
//       },
//       {
//         discountDollar: 0.0,
//       },
//     ],
//     commission: [
//       {
//         commissionPercentage: 0.0,
//       },
//       {
//         fixedCommission: 0.0,
//       },
//     ],
//     images: ["Vulcan Splash 6.jpg"],
//   },
//   {
//     id: 90,
//     productCategory: "Cooking",
//     productSubCategory: "Griddles",
//     productMicroCategory: "",
//     linkedItemName: "",
//     manufacturer: "Hobart",
//     distributor: "Hobart",
//     productBrand: "Vulcan",
//     productName: "VCCG Series Griddle",
//     modelVariant: "24 inch",
//     SKU: [
//       {
//         storeSKU: "VCCG24-AC-1",
//       },
//       {
//         vendorSKU: "VCCG24-AC-1",
//       },
//       {
//         linkedSKU: "",
//       },
//     ],
//     itemSerial: "",
//     itemWeight: "380 lb",
//     dimensions: "24 in x 33 in x 19 in",
//     freightClass: "85",
//     warranty: [
//       {
//         component1: "",
//         duration: 0,
//       },
//       {
//         component2: "",
//         duration: 0,
//       },
//       {
//         partsAndLabour: 0,
//       },
//       {
//         general: 12,
//       },
//     ],
//     shortDescription:
//       'Heavy Duty Griddle, countertop, gas, 24"W x 24"D cooking surface, 3/4" thick Rapid Recovery\u2122 composite plate, (2) burners, solid state thermostat every 12",  atmospheric type \u201cU\u201d shaped aluminized steel burners, electronic spark ignition & pilot protection, wire knob guards, (1) drawer, stainless steel front, sides, front top ledge, front grease trough, 4" back & tapered side splashes, 4" adjustable legs, 60,000 BTU, NSF, CSA',
//     fuelSource: [
//       {
//         gasType: "Natural Gas",
//       },
//       {
//         phase: "1-Phase",
//       },
//       {
//         voltage: "120",
//       },
//       {
//         BTU: "60,000",
//       },
//       {
//         amps: "2",
//       },
//     ],
//     additionalInfo:
//       "Vulcan's exclusive Rapid Recovery composite plate and corner-to-corner temperature control gets 5X the heat transfer rate and allows for even heat distribution. You can cook perfect pancakes \u2014 golden brown and fluffy \u2014 on every inch of this griddle\u2019s surface.",
//     clearance: false,
//     returnable: true,
//     onWebsite: true,
//     currency: "CAD",
//     pricing: [
//       {
//         instorePrice: [0.0, 0.0],
//       },
//       {
//         onlinePrice: [0.0, 0.0],
//       },
//       {
//         cost: [0.0, 0.0],
//       },
//       {
//         autoQuotesPrice: [0.0, 0.0],
//       },
//       {
//         shippingPrice: [0.0, 0.0],
//       },
//     ],
//     priceMod: [
//       {
//         marginPercentage: 0.0,
//       },
//       {
//         discountPercentage: 0.0,
//       },
//       {
//         marginDollar: 0.0,
//       },
//       {
//         discountDollar: 0.0,
//       },
//     ],
//     commission: [
//       {
//         commissionPercentage: 0.0,
//       },
//       {
//         fixedCommission: 0.0,
//       },
//     ],
//     images: ["Vulcan VCCG24.png"],
//   },

//   {
//     id: 114,
//     productCategory: "Cooking",
//     productSubCategory: "Griddles",
//     productMicroCategory: "",
//     linkedItemName: "",
//     manufacturer: "Hobart",
//     distributor: "Hobart",
//     productBrand: "Vulcan",
//     productName: "VCRG Series Griddle",
//     modelVariant: "48 inch Thermostatic",
//     SKU: [
//       {
//         storeSKU: "VCRG48-T-1",
//       },
//       {
//         vendorSKU: "VCRG48-T-1",
//       },
//       {
//         linkedSKU: "",
//       },
//     ],
//     itemSerial: "",
//     itemWeight: "408 lb",
//     dimensions: "48 in x 27 in x 16 in",
//     freightClass: "85",
//     warranty: [
//       {
//         component1: "",
//         duration: 0,
//       },
//       {
//         component2: "",
//         duration: 0,
//       },
//       {
//         partsAndLabour: 0,
//       },
//       {
//         general: 12,
//       },
//     ],
//     shortDescription:
//       'Griddle, countertop gas, 48"W x 20-1/2"D cooking surface, 1" thick polished steel griddle plate, top seam welded, embedded mechanical snap action thermostat every 12", millivolt pilot safety, manual ignition, low profile, stainless steel front, sides, front top ledge, front grease trough, grease can, heavy gauge 4" back & tapered side splashes, 4" adjustable legs, 100,000 BTU, CSA, NSF',
//     fuelSource: [
//       {
//         gasType: "Natural Gas",
//       },
//       {
//         phase: "",
//       },
//       {
//         voltage: "",
//       },
//       {
//         BTU: "100,000",
//       },
//       {
//         amps: "",
//       },
//     ],
//     additionalInfo: "",
//     clearance: false,
//     returnable: true,
//     onWebsite: true,
//     currency: "CAD",
//     pricing: [
//       {
//         instorePrice: [0.0, 0.0],
//       },
//       {
//         onlinePrice: [0.0, 0.0],
//       },
//       {
//         cost: [0.0, 0.0],
//       },
//       {
//         autoQuotesPrice: [0.0, 0.0],
//       },
//       {
//         shippingPrice: [0.0, 0.0],
//       },
//     ],
//     priceMod: [
//       {
//         marginPercentage: 0.0,
//       },
//       {
//         discountPercentage: 0.0,
//       },
//       {
//         marginDollar: 0.0,
//       },
//       {
//         discountDollar: 0.0,
//       },
//     ],
//     commission: [
//       {
//         commissionPercentage: 0.0,
//       },
//       {
//         fixedCommission: 0.0,
//       },
//     ],
//     images: ["Vulcan VCRG48T.webp"],
//   },
//   {
//     id: 136,
//     productCategory: "Cooking",
//     productSubCategory: "Hotplates",
//     productMicroCategory: "",
//     linkedItemName: "",
//     manufacturer: "Hobart",
//     distributor: "Hobart",
//     productBrand: "Vulcan",
//     productName: "VCRH Series Hot Plate",
//     modelVariant: "24 inch",
//     SKU: [
//       {
//         storeSKU: "VCRH24-1",
//       },
//       {
//         vendorSKU: "VCRH24-1",
//       },
//       {
//         linkedSKU: "",
//       },
//     ],
//     itemSerial: "",
//     itemWeight: "207 lb",
//     dimensions: "24 in x 29.5 in x 13.5 in",
//     freightClass: "85",
//     warranty: [
//       {
//         component1: "",
//         duration: 0,
//       },
//       {
//         component2: "",
//         duration: 0,
//       },
//       {
//         partsAndLabour: 0,
//       },
//       {
//         general: 12,
//       },
//     ],
//     shortDescription:
//       'Hotplate, gas, countertop, 24", (4) 25,000 BTU open burners with lift-off burner heads & standing pilots, cast iron top grates, infinite heat controls, stainless steel front, sides & front top ledge, aluminized pull out crumb tray, 4" adjustable legs, 100,000 BTU, CSA, NSF',
//     fuelSource: [
//       {
//         gasType: "Natural Gas",
//       },
//       {
//         phase: "",
//       },
//       {
//         voltage: "",
//       },
//       {
//         BTU: "100,000",
//       },
//       {
//         amps: "",
//       },
//     ],
//     additionalInfo: "",
//     clearance: false,
//     returnable: true,
//     onWebsite: true,
//     currency: "CAD",
//     pricing: [
//       {
//         instorePrice: [0.0, 0.0],
//       },
//       {
//         onlinePrice: [0.0, 0.0],
//       },
//       {
//         cost: [0.0, 0.0],
//       },
//       {
//         autoQuotesPrice: [0.0, 0.0],
//       },
//       {
//         shippingPrice: [0.0, 0.0],
//       },
//     ],
//     priceMod: [
//       {
//         marginPercentage: 0.0,
//       },
//       {
//         discountPercentage: 0.0,
//       },
//       {
//         marginDollar: 0.0,
//       },
//       {
//         discountDollar: 0.0,
//       },
//     ],
//     commission: [
//       {
//         commissionPercentage: 0.0,
//       },
//       {
//         fixedCommission: 0.0,
//       },
//     ],
//     images: ["Vulcan VCRH24.webp"],
//   },

//   {
//     id: 157,
//     productCategory: "Cooking",
//     productSubCategory: "Ranges",
//     productMicroCategory: "",
//     linkedItemName: "",
//     manufacturer: "Hobart",
//     distributor: "Hobart",
//     productBrand: "Vulcan",
//     productName: "Endurance Series Range",
//     modelVariant: "60 inch 10 Burner with one Convection Oven",
//     SKU: [
//       {
//         storeSKU: "60SC-10BP",
//       },
//       {
//         vendorSKU: "60SC-10BP",
//       },
//       {
//         linkedSKU: "",
//       },
//     ],
//     itemSerial: "",
//     itemWeight: "950 lb",
//     dimensions: "60 in x 41 in x 37.5 in",
//     freightClass: "85",
//     warranty: [
//       {
//         component1: "",
//         duration: 0,
//       },
//       {
//         component2: "",
//         duration: 0,
//       },
//       {
//         partsAndLabour: 0,
//       },
//       {
//         general: 12,
//       },
//     ],
//     shortDescription:
//       'Endurance\u2122 Restaurant Range, gas, 60", (10) 30,000 BTU burners with lift-off burner heads, standard oven (left), (1) convection (right), stainless steel front, sides, backriser & high shelf, fully MIG welded frame, 6" adjustable legs, 358,000 BTU, CSA, NSF',
//     fuelSource: [
//       {
//         gasType: "Propane",
//       },
//       {
//         phase: "1-Phase",
//       },
//       {
//         voltage: "115",
//       },
//       {
//         BTU: "358,000",
//       },
//       {
//         amps: "4",
//       },
//     ],
//     additionalInfo: "Unit shown with optional casters (not included).",
//     clearance: false,
//     returnable: true,
//     onWebsite: true,
//     currency: "CAD",
//     pricing: [
//       {
//         instorePrice: [0.0, 0.0],
//       },
//       {
//         onlinePrice: [0.0, 0.0],
//       },
//       {
//         cost: [0.0, 0.0],
//       },
//       {
//         autoQuotesPrice: [0.0, 0.0],
//       },
//       {
//         shippingPrice: [0.0, 0.0],
//       },
//     ],
//     priceMod: [
//       {
//         marginPercentage: 0.0,
//       },
//       {
//         discountPercentage: 0.0,
//       },
//       {
//         marginDollar: 0.0,
//       },
//       {
//         discountDollar: 0.0,
//       },
//     ],
//     commission: [
//       {
//         commissionPercentage: 0.0,
//       },
//       {
//         fixedCommission: 0.0,
//       },
//     ],
//     images: ["Vulcan 60SS10B.png"],
//   },
//   {
//     id: 166,
//     productCategory: "Cooking",
//     productSubCategory: "Broilers",
//     productMicroCategory: "",
//     linkedItemName: "",
//     manufacturer: "Hobart",
//     distributor: "Hobart",
//     productBrand: "Vulcan",
//     productName: "Radiant Salamander Broiler",
//     modelVariant: "",
//     SKU: [
//       {
//         storeSKU: "36RB-N",
//       },
//       {
//         vendorSKU: "36RB-N",
//       },
//       {
//         linkedSKU: "",
//       },
//     ],
//     itemSerial: "",
//     itemWeight: "180 lb",
//     dimensions: "30 in x 19 in x 17.5 in",
//     freightClass: "85",
//     warranty: [
//       {
//         component1: "",
//         duration: 0,
//       },
//       {
//         component2: "",
//         duration: 0,
//       },
//       {
//         partsAndLabour: 0,
//       },
//       {
//         general: 12,
//       },
//     ],
//     shortDescription:
//       'Salamander Broiler, Gas, 36" wide, 50,000 BTU heavy duty burner, dual control, (6) grid positions, removable pan, stainless steel front, top & sides, 3/4" gas connection & pressure regulator',
//     fuelSource: [
//       {
//         gasType: "Natural Gas",
//       },
//       {
//         phase: "",
//       },
//       {
//         voltage: "",
//       },
//       {
//         BTU: "50,000",
//       },
//       {
//         amps: "",
//       },
//     ],
//     additionalInfo:
//       "Ranges with elevated salamander broilers should not be mounted on casters.",
//     clearance: false,
//     returnable: true,
//     onWebsite: true,
//     currency: "CAD",
//     pricing: [
//       {
//         instorePrice: [0.0, 0.0],
//       },
//       {
//         onlinePrice: [0.0, 0.0],
//       },
//       {
//         cost: [0.0, 0.0],
//       },
//       {
//         autoQuotesPrice: [0.0, 0.0],
//       },
//       {
//         shippingPrice: [0.0, 0.0],
//       },
//     ],
//     priceMod: [
//       {
//         marginPercentage: 0.0,
//       },
//       {
//         discountPercentage: 0.0,
//       },
//       {
//         marginDollar: 0.0,
//       },
//       {
//         discountDollar: 0.0,
//       },
//     ],
//     commission: [
//       {
//         commissionPercentage: 0.0,
//       },
//       {
//         fixedCommission: 0.0,
//       },
//     ],
//     images: ["Vulcan 36RB.png"],
//   },

//   {
//     id: 183,
//     productCategory: "Cooking",
//     productSubCategory: "Ovens",
//     productMicroCategory: "Combi",
//     linkedItemName: "",
//     manufacturer: "Hobart",
//     distributor: "Hobart",
//     productBrand: "Vulcan",
//     productName: "ABC7 Combi Oven",
//     modelVariant: "",
//     SKU: [
//       {
//         storeSKU: "ABC7E-240",
//       },
//       {
//         vendorSKU: "ABC7E-240",
//       },
//       {
//         linkedSKU: "",
//       },
//     ],
//     itemSerial: "",
//     itemWeight: "580 lb",
//     dimensions: "42.5 in x 43.5 in x 34.5 in",
//     freightClass: "85",
//     warranty: [
//       {
//         component1: "",
//         duration: 0,
//       },
//       {
//         component2: "",
//         duration: 0,
//       },
//       {
//         partsAndLabour: 0,
//       },
//       {
//         general: 12,
//       },
//     ],
//     shortDescription:
//       'Combi Oven/Steamer, electric, boilerless, (7) 18" x 26" full size sheet or (14) 12" x 20" full size hotel pan capacity, (3) knobs with LED displays for temperature, timer & humidity, auto-adjustment of humidity with temperature selection, auto-reversing fan with electronic braking system, cool to touch glass door, flashing door light & audible alert, (4) Grab n Go wire racks, stainless steel interior & exterior, engineered & assembled in USA, UL EPH Classified, cULus. 240v/60/3-ph, 57.8 amps, 24kW (field convertible to 1-ph).',
//     fuelSource: [
//       {
//         gasType: "",
//       },
//       {
//         phase: "3-Phase",
//       },
//       {
//         voltage: "240",
//       },
//       {
//         BTU: "",
//       },
//       {
//         amps: "60",
//       },
//     ],
//     additionalInfo:
//       "Oven shown with Equipment Stand with Casters (not included). Can be ordered with Stacking Kit, Equipment Stand (with legs or Casters) and with Food Probe (as ABC7E-240P). Please contact for ordering information. Note: Water filter needed for correct operation and is a warranty requirement for Vulcan Combi Ovens.",
//     clearance: false,
//     returnable: true,
//     onWebsite: true,
//     currency: "CAD",
//     pricing: [
//       {
//         instorePrice: [0.0, 0.0],
//       },
//       {
//         onlinePrice: [0.0, 0.0],
//       },
//       {
//         cost: [0.0, 0.0],
//       },
//       {
//         autoQuotesPrice: [0.0, 0.0],
//       },
//       {
//         shippingPrice: [0.0, 0.0],
//       },
//     ],
//     priceMod: [
//       {
//         marginPercentage: 0.0,
//       },
//       {
//         discountPercentage: 0.0,
//       },
//       {
//         marginDollar: 0.0,
//       },
//       {
//         discountDollar: 0.0,
//       },
//     ],
//     commission: [
//       {
//         commissionPercentage: 0.0,
//       },
//       {
//         fixedCommission: 0.0,
//       },
//     ],
//     images: ["Vulcan ABC7.png"],
//   },

//   {
//     id: 195,
//     productCategory: "Cooking",
//     productSubCategory: "Kettles",
//     productMicroCategory: "",
//     linkedItemName: "",
//     manufacturer: "Hobart",
//     distributor: "Hobart",
//     productBrand: "Vulcan",
//     productName: "Direct Steam Kettle",
//     modelVariant: "40 Gallon Tilting",
//     SKU: [
//       {
//         storeSKU: "K40DLT",
//       },
//       {
//         vendorSKU: "K40DLT",
//       },
//       {
//         linkedSKU: "",
//       },
//     ],
//     itemSerial: "",
//     itemWeight: "332 lb",
//     dimensions: "44 in x 44 in x 36 in",
//     freightClass: "85",
//     warranty: [
//       {
//         component1: "",
//         duration: 0,
//       },
//       {
//         component2: "",
//         duration: 0,
//       },
//       {
//         partsAndLabour: 0,
//       },
//       {
//         general: 12,
//       },
//     ],
//     shortDescription:
//       "Tilting Kettle, Direct, 40-gallon true working capacity, 2/3 jacketed, 316 series stainless steel liner with ellipsoidal bottom, manual tilt, faucet bracket on tilting console, stainless steel construction, tri-leg base, steam control assembly, 50 psi, 1.0 BHP",
//     fuelSource: [
//       {
//         gasType: "",
//       },
//       {
//         phase: "",
//       },
//       {
//         voltage: "",
//       },
//       {
//         BTU: "",
//       },
//       {
//         amps: "",
//       },
//     ],
//     additionalInfo: "\nEmbossed gallon/liter markings.",
//     clearance: false,
//     returnable: true,
//     onWebsite: true,
//     currency: "CAD",
//     pricing: [
//       {
//         instorePrice: [0.0, 0.0],
//       },
//       {
//         onlinePrice: [0.0, 0.0],
//       },
//       {
//         cost: [0.0, 0.0],
//       },
//       {
//         autoQuotesPrice: [0.0, 0.0],
//       },
//       {
//         shippingPrice: [0.0, 0.0],
//       },
//     ],
//     priceMod: [
//       {
//         marginPercentage: 0.0,
//       },
//       {
//         discountPercentage: 0.0,
//       },
//       {
//         marginDollar: 0.0,
//       },
//       {
//         discountDollar: 0.0,
//       },
//     ],
//     commission: [
//       {
//         commissionPercentage: 0.0,
//       },
//       {
//         fixedCommission: 0.0,
//       },
//     ],
//     images: ["Vulcan K40DLT.webp"],
//   },

//   {
//     id: 215,
//     productCategory: "Cooking",
//     productSubCategory: "Ovens",
//     productMicroCategory: "Combi",
//     linkedItemName: "",
//     manufacturer: "Hobart",
//     distributor: "Hobart",
//     productBrand: "Vulcan",
//     productName: "TCM10 Combi Oven",
//     modelVariant: "Full Size",
//     SKU: [
//       {
//         storeSKU: "TCM-102E-240",
//       },
//       {
//         vendorSKU: "TCM-102E-240",
//       },
//       {
//         linkedSKU: "",
//       },
//     ],
//     itemSerial: "",
//     itemWeight: "377 lb",
//     dimensions: "36.5 in x 46 in x 42 in",
//     freightClass: "85",
//     warranty: [
//       {
//         component1: "",
//         duration: 0,
//       },
//       {
//         component2: "",
//         duration: 0,
//       },
//       {
//         partsAndLabour: 0,
//       },
//       {
//         general: 12,
//       },
//     ],
//     shortDescription:
//       'Touch Combi Multi (TCM), 10 level full size, electric, boilerless, (10) 18"x 26"x 1" full sheet pan or (20) 12"x 20"x 2.5" steam pan capacity, (5) Grab n Go wire racks, twin control touch & knob, LCD display, Exclusive ABC, with JET & AUTO controls interface, customizable recipes & factory pre-programed, automatic cleaning with recirculation, auto descale, non proprietary chemicals, auto-reversing fan, LED light strip, cool touch door, USB port, multi point food probe, drain water tempering, 31 kW, 240v/60/3-ph, 74.7 amps, cULus, NSF',
//     fuelSource: [
//       {
//         gasType: "",
//       },
//       {
//         phase: "3-Phase",
//       },
//       {
//         voltage: "240",
//       },
//       {
//         BTU: "",
//       },
//       {
//         amps: "74.7",
//       },
//     ],
//     additionalInfo:
//       "Oven shown with Deluxe Stand (not included). Please contact for ordering information. Note: Water filter needed for correct operation and is a warranty requirement for Vulcan Combi Ovens.",
//     clearance: false,
//     returnable: true,
//     onWebsite: true,
//     currency: "CAD",
//     pricing: [
//       {
//         instorePrice: [0.0, 0.0],
//       },
//       {
//         onlinePrice: [0.0, 0.0],
//       },
//       {
//         cost: [0.0, 0.0],
//       },
//       {
//         autoQuotesPrice: [0.0, 0.0],
//       },
//       {
//         shippingPrice: [0.0, 0.0],
//       },
//     ],
//     priceMod: [
//       {
//         marginPercentage: 0.0,
//       },
//       {
//         discountPercentage: 0.0,
//       },
//       {
//         marginDollar: 0.0,
//       },
//       {
//         discountDollar: 0.0,
//       },
//     ],
//     commission: [
//       {
//         commissionPercentage: 0.0,
//       },
//       {
//         fixedCommission: 0.0,
//       },
//     ],
//     images: ["Vulcan TCM102.png"],
//   },

//   {
//     id: 235,
//     productCategory: "Cooking",
//     productSubCategory: "Broilers",
//     productMicroCategory: "",
//     linkedItemName: "",
//     manufacturer: "Hobart",
//     distributor: "Hobart",
//     productBrand: "Vulcan",
//     productName: "V Series Double Deck",
//     modelVariant: "Infrared over Ceramic Broiler",
//     SKU: [
//       {
//         storeSKU: "VIB2-1",
//       },
//       {
//         vendorSKU: "VIB2-1",
//       },
//       {
//         linkedSKU: "",
//       },
//     ],
//     itemSerial: "",
//     itemWeight: "1100 lb",
//     dimensions: "36 in x 37.5 in x 74 in",
//     freightClass: "85",
//     warranty: [
//       {
//         component1: "",
//         duration: 0,
//       },
//       {
//         component2: "",
//         duration: 0,
//       },
//       {
//         partsAndLabour: 0,
//       },
//       {
//         general: 12,
//       },
//     ],
//     shortDescription:
//       'V Series Deck-Broiler, Heavy Duty range match, Gas, double-deck, infrared over ceramic, (2) 25-1/2" x 24-1/2 cooking grids, spring balanced, 5 position grip, stainless steel front, top & sides, 6" stainless steel legs, 1" rear gas manifold with regulator, 200,000 BTU, NSF, CSA Star, CSA Flame',
//     fuelSource: [
//       {
//         gasType: "Natural Gas",
//       },
//       {
//         phase: "",
//       },
//       {
//         voltage: "",
//       },
//       {
//         BTU: "200,000",
//       },
//       {
//         amps: "",
//       },
//     ],
//     additionalInfo: "",
//     clearance: false,
//     returnable: true,
//     onWebsite: true,
//     currency: "CAD",
//     pricing: [
//       {
//         instorePrice: [0.0, 0.0],
//       },
//       {
//         onlinePrice: [0.0, 0.0],
//       },
//       {
//         cost: [0.0, 0.0],
//       },
//       {
//         autoQuotesPrice: [0.0, 0.0],
//       },
//       {
//         shippingPrice: [0.0, 0.0],
//       },
//     ],
//     priceMod: [
//       {
//         marginPercentage: 0.0,
//       },
//       {
//         discountPercentage: 0.0,
//       },
//       {
//         marginDollar: 0.0,
//       },
//       {
//         discountDollar: 0.0,
//       },
//     ],
//     commission: [
//       {
//         commissionPercentage: 0.0,
//       },
//       {
//         fixedCommission: 0.0,
//       },
//     ],
//     images: ["Vulcan VIR2.png"],
//   },

//   {
//     id: 241,
//     productCategory: "Cooking",
//     productSubCategory: "Ranges",
//     productMicroCategory: "Range Accessories",
//     linkedItemName: "",
//     manufacturer: "Hobart",
//     distributor: "Hobart",
//     productBrand: "Vulcan",
//     productName: "SX Series Oven Rack",
//     modelVariant: "SX24",
//     SKU: [
//       {
//         storeSKU: "RACK-SX24-1C",
//       },
//       {
//         vendorSKU: "RACK-SX24-1C",
//       },
//       {
//         linkedSKU: "",
//       },
//     ],
//     itemSerial: "",
//     itemWeight: "",
//     dimensions: "",
//     freightClass: "",
//     warranty: [
//       {
//         component1: "",
//         duration: 0,
//       },
//       {
//         component2: "",
//         duration: 0,
//       },
//       {
//         partsAndLabour: 0,
//       },
//       {
//         general: 0,
//       },
//     ],
//     shortDescription: "Extra oven rack for SX24 range",
//     fuelSource: [
//       {
//         gasType: "",
//       },
//       {
//         phase: "",
//       },
//       {
//         voltage: "",
//       },
//       {
//         BTU: "",
//       },
//       {
//         amps: "",
//       },
//     ],
//     additionalInfo: "",
//     clearance: false,
//     returnable: true,
//     onWebsite: true,
//     currency: "CAD",
//     pricing: [
//       {
//         instorePrice: [0.0, 0.0],
//       },
//       {
//         onlinePrice: [0.0, 0.0],
//       },
//       {
//         cost: [0.0, 0.0],
//       },
//       {
//         autoQuotesPrice: [0.0, 0.0],
//       },
//       {
//         shippingPrice: [0.0, 0.0],
//       },
//     ],
//     priceMod: [
//       {
//         marginPercentage: 0.0,
//       },
//       {
//         discountPercentage: 0.0,
//       },
//       {
//         marginDollar: 0.0,
//       },
//       {
//         discountDollar: 0.0,
//       },
//     ],
//     commission: [
//       {
//         commissionPercentage: 0.0,
//       },
//       {
//         fixedCommission: 0.0,
//       },
//     ],
//     images: ["Vulcan OVNRACKSX-1C.png"],
//   },

//   {
//     id: 260,
//     productCategory: "Cooking",
//     productSubCategory: "Heated Holding & Proofers",
//     productMicroCategory: "",
//     linkedItemName: "",
//     manufacturer: "Hobart",
//     distributor: "Hobart",
//     productBrand: "Vulcan",
//     productName: "Drawer Warmer",
//     modelVariant: "Double",
//     SKU: [
//       {
//         storeSKU: "VW2S",
//       },
//       {
//         vendorSKU: "VW2S",
//       },
//       {
//         linkedSKU: "",
//       },
//     ],
//     itemSerial: "",
//     itemWeight: "135 lb",
//     dimensions: "27.5 in x 23.5 in x 20 in",
//     freightClass: "85",
//     warranty: [
//       {
//         component1: "",
//         duration: 0,
//       },
//       {
//         component2: "",
//         duration: 0,
//       },
//       {
//         partsAndLabour: 0,
//       },
//       {
//         general: 12,
//       },
//     ],
//     shortDescription:
//       'Warming Drawer, Free Standing, (1) 12" x 20" x 6" pan per drawer, (2) drawer, individual thermostat controls, moist/crisp door vents, stainless steel construction, 5" adjustable legs',
//     fuelSource: [
//       {
//         gasType: "",
//       },
//       {
//         phase: "1-Phase",
//       },
//       {
//         voltage: "120",
//       },
//       {
//         BTU: "",
//       },
//       {
//         amps: "8",
//       },
//     ],
//     additionalInfo: "",
//     clearance: false,
//     returnable: true,
//     onWebsite: true,
//     currency: "CAD",
//     pricing: [
//       {
//         instorePrice: [0.0, 0.0],
//       },
//       {
//         onlinePrice: [0.0, 0.0],
//       },
//       {
//         cost: [0.0, 0.0],
//       },
//       {
//         autoQuotesPrice: [0.0, 0.0],
//       },
//       {
//         shippingPrice: [0.0, 0.0],
//       },
//     ],
//     priceMod: [
//       {
//         marginPercentage: 0.0,
//       },
//       {
//         discountPercentage: 0.0,
//       },
//       {
//         marginDollar: 0.0,
//       },
//       {
//         discountDollar: 0.0,
//       },
//     ],
//     commission: [
//       {
//         commissionPercentage: 0.0,
//       },
//       {
//         fixedCommission: 0.0,
//       },
//     ],
//     images: ["Vulcan VW2S.png"],
//   },
// ],
// };

// export default data;
