const products = [
  // ... (previous vanilla products remain the same)
  {
    id: "cocoa-beans",
    name: "Premium Cocoa Beans",
    hsCode: "18010000",
    description: "High-quality cocoa beans sourced from sustainable farms in Indonesia, perfect for premium chocolate production and confectionery applications.",
    longDescription: `Our premium cocoa beans are carefully selected from sustainable farms across Indonesia's prime growing regions. Each batch is meticulously fermented and dried to develop the complex flavor profiles that set our cocoa apart.

    We offer three main varieties to cater to different chocolate-making needs:

    1. Criollo: Known as the "prince of cocoa," this rare variety offers a complex, delicate flavor profile with notes of caramel, nuts, and vanilla.
    2. Forastero: Our most robust variety, perfect for creating full-bodied chocolate products with a strong cocoa flavor.
    3. Trinitario: A hybrid of Criollo and Forastero, offering a balance of fine flavor and good productivity.

    Our cocoa beans are ideal for artisanal chocolate makers, gourmet confectioners, and premium food manufacturers looking for exceptional quality and taste.`,
    image: "/images/cocoa-beans.jpg",
    gallery: [
      "/images/cocoa-beans-1.jpg",
      "/images/cocoa-beans-2.jpg",
      "/images/cocoa-beans-3.jpg",
    ],
    category: "Cocoa",
    variants: [
      { name: "Criollo", description: "Rare and prized for its fine, complex flavor" },
      { name: "Forastero", description: "Robust and full-bodied, ideal for most chocolate products" },
      { name: "Trinitario", description: "A hybrid variety offering a balance of flavor and productivity" },
    ],
    specifications: [
      { name: "Origin", value: "Indonesia (Sulawesi, Papua, Bali)" },
      { name: "Fermentation", value: "5-7 days" },
      { name: "Moisture Content", value: "6.5-7.5%" },
      { name: "Bean Count", value: "85-100 beans/100g" },
      { name: "Fat Content", value: "52-55%" },
      { name: "pH Level", value: "5.2-5.8" },
      { name: "Packaging", value: "60kg jute bags or custom packaging" },
    ],
    packaging: [
      "60kg food-grade jute bags with inner liner",
      "Custom packaging available for specific requirements",
      "Bulk options for large orders",
    ],
    certifications: [
      "UTZ Certified",
      "Rainforest Alliance",
      "Organic Certification (available upon request)",
    ],
  },
  {
    id: "coffee-beans",
    name: "Specialty Coffee Beans",
    hsCode: "09011100",
    description: "Expertly cultivated and processed coffee beans from Indonesia's finest growing regions, offering unique flavor profiles and exceptional quality.",
    longDescription: `Our specialty coffee beans represent the pinnacle of Indonesian coffee production. Sourced from small-holder farmers in the country's most renowned coffee-growing regions, each batch is carefully processed to highlight its unique terroir and varietal characteristics.

    We offer four distinct origins, each with its own flavor profile:

    1. Sumatra Mandheling: Known for its full body, low acidity, and complex earthy, herbal notes.
    2. Java Arabica: Smooth and well-balanced with a sweet overall impression and subtle hints of chocolate.
    3. Sulawesi Toraja: Well-balanced with a syrupy body, featuring notes of dark chocolate and warm spices.
    4. Bali Kintamani: Bright and clean with a light body, showcasing citrus and floral notes.

    Our coffee beans are perfect for specialty roasters, high-end cafes, and discerning coffee enthusiasts looking for exceptional and unique flavor experiences.`,
    image: "/images/coffee-beans.jpg",
    gallery: [
      "/images/coffee-beans-1.jpg",
      "/images/coffee-beans-2.jpg",
      "/images/coffee-beans-3.jpg",
    ],
    category: "Coffee",
    variants: [
      { name: "Sumatra Mandheling", description: "Full-bodied with earthy, herbal notes" },
      { name: "Java Arabica", description: "Smooth with a sweet overall impression" },
      { name: "Sulawesi Toraja", description: "Well-balanced with notes of dark chocolate and spice" },
      { name: "Bali Kintamani", description: "Bright acidity with citrus and floral notes" },
    ],
    specifications: [
      { name: "Origin", value: "Indonesia (Sumatra, Java, Sulawesi, Bali)" },
      { name: "Process", value: "Washed, Natural, or Honey (varies by origin)" },
      { name: "Altitude", value: "1,200-2,000 meters above sea level" },
      { name: "Grading", value: "Specialty Grade (80+ points)" },
      { name: "Moisture Content", value: "10-12%" },
      { name: "Density", value: "0.7-0.8 g/ml" },
      { name: "Packaging", value: "60kg GrainPro bags or custom packaging" },
    ],
    packaging: [
      "60kg GrainPro bags for optimal freshness",
      "Vacuum-sealed options available",
      "Custom packaging for roasters and private labels",
    ],
    certifications: [
      "Specialty Coffee Association (SCA) Certified",
      "Rainforest Alliance",
      "Organic and Fair Trade certifications available upon request",
    ],
  },
]

// ... (rest of the component remains the same)

