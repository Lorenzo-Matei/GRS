// this creates an object to return sample products
const data = {
  //this defines data as an object
  products: [
    // this is an array of 6 products
    {
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
      name: "45LB POWERFRY3™ TR SERIES GAS FREESTANDING COMMERCIAL FRYER",
      slug: "45lb-powerfry3-tr-series-gas-freestanding-commercial-fryer",
      category: "Fryer",
      image:
        "/assets/images/sample-products/45LB-POWERFRYER-TR-SERIES GAS-FREESTANDING-COMMERCIAL-FRYER.png",
      price: 1100.0,
      countInStock: 6,
      brand: "Vulcan",
      brandLogo: "/assets/images/logos/vulcan.png",
      rating: 3.9,
      numReviews: 41,
      description:
        "Vulcan’s PowerFry3™ Series uses a patented ThreePass™ heat transfer system to harness energy more efficiently to deliver greater throughput and shorter cook times. SoftStart™ Ignition System heats oil quickly while using half the BTUs at startup, resulting in extension of oil life. Solid state controls enable more precise temperature control for consistent cooking from batch to batch.",
    },

    {
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
  ],
};

export default data;
