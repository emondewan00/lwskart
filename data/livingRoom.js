const livingRoom = [
  {
    name: "Modern Sofa",
    image: [
      "https://source.unsplash.com/random/360x265?livingroom&1",
      "https://source.unsplash.com/random/360x265?livingroom&2",
      "https://source.unsplash.com/random/360x265?livingroom&3",
      "https://source.unsplash.com/random/360x265?livingroom&4",
    ],
    price: 899.99,
    discount_price: 799.99,
    reviewsNumber: 42,
    rating: 4.2,
    brand: "Urban Comfort",
    category: "living room",
    details: {
      type: "Modern Sofa",
      material: "Leather",
      dimensions: '78"W x 34"D x 30"H',
      features: "Comfortable, Stylish, Easy to Clean",
    },
    description:
      "Upgrade your living room with this sleek and comfortable modern sofa. Perfect for entertaining guests or lounging.",
    size: ["Medium", "Large"],
    colors: ["Slate Gray", "Neutral Beige"],
    sku: "LR1234",
    soldCount: 78,
    quantities: 50,
  },
  {
    name: "Coffee Table",
    image: [
      "https://source.unsplash.com/random/360x265?livingroom&5",
      "https://source.unsplash.com/random/360x265?livingroom&6",
      "https://source.unsplash.com/random/360x265?livingroom&7",
      "https://source.unsplash.com/random/360x265?livingroom&8",
    ],
    price: 149.99,
    discount_price: 129.99,
    reviewsNumber: 36,
    rating: 4.0,
    brand: "Elegant Living",
    category: "living room",
    details: {
      type: "Coffee Table",
      material: "Wood",
      dimensions: '40"W x 22"D x 18"H',
      features: "Sturdy, Stylish, Easy to Assemble",
    },
    description:
      "Complete your living room setup with this elegant coffee table. Perfect for displaying decor or serving snacks.",
    size: ["Medium"],
    colors: ["Warm Brown", "Soft Cream"],
    sku: "LR2345",
    soldCount: 64,
    quantities: 40,
  },
  {
    name: "Accent Chair",
    image: [
      "https://source.unsplash.com/random/360x265?livingroom&9",
      "https://source.unsplash.com/random/360x265?livingroom&10",
      "https://source.unsplash.com/random/360x265?livingroom&11",
      "https://source.unsplash.com/random/360x265?livingroom&12",
    ],
    price: 249.99,
    discount_price: 199.99,
    reviewsNumber: 48,
    rating: 4.1,
    brand: "Cosy Living",
    category: "living room",
    details: {
      type: "Accent Chair",
      material: "Fabric",
      dimensions: '30"W x 32"D x 34"H',
      features: "Comfortable, Stylish, Easy to Clean",
    },
    description:
      "Add style and comfort to your living room with this cozy accent chair. Perfect for reading or relaxing.",
    size: ["Medium"],
    colors: ["Deep Navy", "Soft Cream"],
    sku: "LR3456",
    soldCount: 82,
    quantities: 55,
  },
  {
    name: "Floor Lamp",
    image: [
      "https://source.unsplash.com/random/360x265?livingroom&13",
      "https://source.unsplash.com/random/360x265?livingroom&14",
      "https://source.unsplash.com/random/360x265?livingroom&15",
      "https://source.unsplash.com/random/360x265?livingroom&16",
    ],
    price: 79.99,
    discount_price: 59.99,
    reviewsNumber: 32,
    rating: 3.8,
    brand: "Chic Haven",
    category: "living room",
    details: {
      type: "Floor Lamp",
      material: "Metal",
      dimensions: '60"H',
      features: "Stylish, Adjustable, Easy to Assemble",
    },
    description:
      "Illuminate your living room with this stylish floor lamp. Perfect for adding ambient lighting to any space.",
    size: ["Medium", "Large"],
    colors: ["Neutral Beige", "Soft Cream"],
    sku: "LR4567",
    soldCount: 58,
    quantities: 35,
  },
  {
    name: "Area Rug",
    image: [
      "https://source.unsplash.com/random/360x265?livingroom&17",
      "https://source.unsplash.com/random/360x265?livingroom&18",
      "https://source.unsplash.com/random/360x265?livingroom&19",
      "https://source.unsplash.com/random/360x265?livingroom&20",
    ],
    price: 129.99,
    discount_price: 99.99,
    reviewsNumber: 44,
    rating: 4.2,
    brand: "Relaxation Retreat",
    category: "living room",
    details: {
      type: "Area Rug",
      material: "Polyester",
      dimensions: "5' x 7'",
      features: "Soft, Durable, Easy to Clean",
    },
    description:
      "Add warmth and style to your living room with this luxurious area rug. Perfect for tying the room together.",
    size: ["Medium", "Large"],
    colors: ["Slate Gray", "Warm Brown"],
    sku: "LR5678",
    soldCount: 72,
    quantities: 45,
  },
  {
    name: "Chaise Lounge",
    image: [
      "https://source.unsplash.com/random/360x265?livingroom&21",
      "https://source.unsplash.com/random/360x265?livingroom&22",
      "https://source.unsplash.com/random/360x265?livingroom&23",
      "https://source.unsplash.com/random/360x265?livingroom&24",
    ],
    price: 699.99,
    discount_price: 599.99,
    reviewsNumber: 38,
    rating: 4.0,
    brand: "Chic Haven",
    category: "living room",
    details: {
      type: "Chaise Lounge",
      material: "Fabric",
      dimensions: '70"W x 32"D x 34"H',
      features: "Comfortable, Stylish, Easy to Clean",
    },
    description:
      "Relax in style with this elegant chaise lounge. Perfect for lounging and enjoying your favorite book or movie.",
    size: ["Medium", "Large"],
    colors: ["Deep Navy", "Soft Cream"],
    sku: "LR6789",
    soldCount: 65,
    quantities: 50,
  },
  {
    name: "Wall Art",
    image: [
      "https://source.unsplash.com/random/360x265?livingroom&25",
      "https://source.unsplash.com/random/360x265?livingroom&26",
      "https://source.unsplash.com/random/360x265?livingroom&27",
      "https://source.unsplash.com/random/360x265?livingroom&28",
    ],
    price: 99.99,
    discount_price: 79.99,
    reviewsNumber: 35,
    rating: 3.7,
    brand: "Elegant Living",
    category: "living room",
    details: {
      type: "Wall Art",
      material: "Canvas",
      dimensions: '24" x 36"',
      features: "Stylish, Vibrant Colors, Easy to Hang",
    },
    description:
      "Elevate your living room decor with this beautiful wall art. Perfect for adding a pop of color and personality.",
    size: ["Medium"],
    colors: ["Neutral Beige", "Warm Brown"],
    sku: "LR7890",
    soldCount: 55,
    quantities: 40,
  },
  {
    name: "TV Stand",
    image: [
      "https://source.unsplash.com/random/360x265?livingroom&29",
      "https://source.unsplash.com/random/360x265?livingroom&30",
      "https://source.unsplash.com/random/360x265?livingroom&31",
      "https://source.unsplash.com/random/360x265?livingroom&32",
    ],
    price: 299.99,
    discount_price: 249.99,
    reviewsNumber: 40,
    rating: 3.9,
    brand: "Urban Comfort",
    category: "living room",
    details: {
      type: "TV Stand",
      material: "Wood",
      dimensions: '60"W x 18"D x 24"H',
      features: "Sturdy, Stylish, Ample Storage",
    },
    description:
      "Organize your entertainment area with this spacious and stylish TV stand. Perfect for TVs of all sizes.",
    size: ["Medium", "Large"],
    colors: ["Slate Gray", "Soft Cream"],
    sku: "LR9012",
    soldCount: 70,
    quantities: 45,
  },
  {
    name: "Bookshelf",
    image: [
      "https://source.unsplash.com/random/360x265?livingroom&33",
      "https://source.unsplash.com/random/360x265?livingroom&34",
      "https://source.unsplash.com/random/360x265?livingroom&35",
      "https://source.unsplash.com/random/360x265?livingroom&36",
    ],
    price: 199.99,
    discount_price: 169.99,
    reviewsNumber: 42,
    rating: 4.0,
    brand: "Relaxation Retreat",
    category: "living room",
    details: {
      type: "Bookshelf",
      material: "Wood",
      dimensions: '48"W x 12"D x 72"H',
      features: "Sturdy, Stylish, Adjustable Shelves",
    },
    description:
      "Display your favorite books and decor with this elegant bookshelf. Perfect for adding both style and function to your living room.",
    size: ["Medium", "Large"],
    colors: ["Neutral Beige", "Warm Brown"],
    sku: "LR3456",
    soldCount: 78,
    quantities: 50,
  },
  {
    name: "Side Table",
    image: [
      "https://source.unsplash.com/random/360x265?livingroom&37",
      "https://source.unsplash.com/random/360x265?livingroom&38",
      "https://source.unsplash.com/random/360x265?livingroom&39",
      "https://source.unsplash.com/random/360x265?livingroom&40",
    ],
    price: 79.99,
    discount_price: 59.99,
    reviewsNumber: 38,
    rating: 3.8,
    brand: "Chic Haven",
    category: "living room",
    details: {
      type: "Side Table",
      material: "Wood",
      dimensions: '22"W x 22"D x 24"H',
      features: "Sturdy, Stylish, Easy to Assemble",
    },
    description:
      "Complete your living room ensemble with this stylish side table. Perfect for holding drinks, snacks, or decor.",
    size: ["Small", "Medium"],
    colors: ["Slate Gray", "Soft Cream"],
    sku: "LR4567",
    soldCount: 65,
    quantities: 40,
  },
  {
    name: "Wall Mirror",
    image: [
      "https://source.unsplash.com/random/360x265?livingroom&41",
      "https://source.unsplash.com/random/360x265?livingroom&42",
      "https://source.unsplash.com/random/360x265?livingroom&43",
      "https://source.unsplash.com/random/360x265?livingroom&44",
    ],
    price: 99.99,
    discount_price: 79.99,
    reviewsNumber: 36,
    rating: 3.9,
    brand: "Cosy Living",
    category: "living room",
    details: {
      type: "Wall Mirror",
      material: "Glass",
      dimensions: '36"W x 24"H',
      features: "Stylish, Reflective, Easy to Hang",
    },
    description:
      "Add depth and style to your living room with this elegant wall mirror. Perfect for checking your look before heading out.",
    size: ["Medium"],
    colors: ["Deep Navy", "Soft Cream"],
    sku: "LR5678",
    soldCount: 60,
    quantities: 45,
  },
  {
    name: "Sectional Sofa",
    image: [
      "https://source.unsplash.com/random/360x265?livingroom&45",
      "https://source.unsplash.com/random/360x265?livingroom&46",
      "https://source.unsplash.com/random/360x265?livingroom&47",
      "https://source.unsplash.com/random/360x265?livingroom&48",
    ],
    price: 1299.99,
    discount_price: 1199.99,
    reviewsNumber: 48,
    rating: 4.1,
    brand: "Urban Comfort",
    category: "living room",
    details: {
      type: "Sectional Sofa",
      material: "Fabric",
      dimensions: '100"W x 80"D x 32"H',
      features: "Spacious, Comfortable, Modular Design",
    },
    description:
      "Create the ultimate lounging area with this luxurious sectional sofa. Perfect for movie nights and family gatherings.",
    size: ["Large", "Extra Large"],
    colors: ["Slate Gray", "Warm Brown"],
    sku: "LR7890",
    soldCount: 90,
    quantities: 55,
  },
  {
    name: "Table Lamp",
    image: [
      "https://source.unsplash.com/random/360x265?livingroom&49",
      "https://source.unsplash.com/random/360x265?livingroom&50",
      "https://source.unsplash.com/random/360x265?livingroom&51",
      "https://source.unsplash.com/random/360x265?livingroom&52",
    ],
    price: 49.99,
    discount_price: 39.99,
    reviewsNumber: 28,
    rating: 3.6,
    brand: "Relaxation Retreat",
    category: "living room",
    details: {
      type: "Table Lamp",
      material: "Metal",
      dimensions: '18"H',
      features: "Stylish, Adjustable, Easy to Assemble",
    },
    description:
      "Brighten up your living room with this stylish table lamp. Perfect for adding a warm glow to any space.",
    size: ["Small", "Medium"],
    colors: ["Neutral Beige", "Soft Cream"],
    sku: "LR8901",
    soldCount: 50,
    quantities: 30,
  },
  {
    name: "Bookcase",
    image: [
      "https://source.unsplash.com/random/360x265?livingroom&53",
      "https://source.unsplash.com/random/360x265?livingroom&54",
      "https://source.unsplash.com/random/360x265?livingroom&55",
      "https://source.unsplash.com/random/360x265?livingroom&56",
    ],
    price: 179.99,
    discount_price: 149.99,
    reviewsNumber: 40,
    rating: 4.0,
    brand: "Elegant Living",
    category: "living room",
    details: {
      type: "Bookcase",
      material: "Wood",
      dimensions: '36"W x 12"D x 72"H',
      features: "Sturdy, Stylish, Adjustable Shelves",
    },
    description:
      "Organize your books and decor in style with this elegant bookcase. Perfect for adding storage to your living room.",
    size: ["Medium", "Large"],
    colors: ["Slate Gray", "Neutral Beige"],
    sku: "LR9012",
    soldCount: 70,
    quantities: 45,
  },
  {
    name: "Wall Clock",
    image: [
      "https://source.unsplash.com/random/360x265?livingroom&57",
      "https://source.unsplash.com/random/360x265?livingroom&58",
      "https://source.unsplash.com/random/360x265?livingroom&59",
      "https://source.unsplash.com/random/360x265?livingroom&60",
    ],
    price: 39.99,
    discount_price: 29.99,
    reviewsNumber: 32,
    rating: 3.8,
    brand: "Urban Comfort",
    category: "living room",
    details: {
      type: "Wall Clock",
      material: "Plastic",
      dimensions: '12" Diameter',
      features: "Stylish, Silent Movement, Easy to Hang",
    },
    description:
      "Keep track of time in style with this sleek wall clock. Perfect for adding a functional and decorative touch to your living room.",
    size: ["Small", "Medium"],
    colors: ["Slate Gray", "Deep Navy"],
    sku: "LR3456",
    soldCount: 58,
    quantities: 35,
  },
  {
    name: "Floor Rug",
    image: [
      "https://source.unsplash.com/random/360x265?livingroom&61",
      "https://source.unsplash.com/random/360x265?livingroom&62",
      "https://source.unsplash.com/random/360x265?livingroom&63",
      "https://source.unsplash.com/random/360x265?livingroom&64",
    ],
    price: 99.99,
    discount_price: 79.99,
    reviewsNumber: 36,
    rating: 3.9,
    brand: "Cosy Living",
    category: "living room",
    details: {
      type: "Floor Rug",
      material: "Polyester",
      dimensions: "6' x 9'",
      features: "Soft, Durable, Easy to Clean",
    },
    description:
      "Add warmth and comfort to your living room with this cozy floor rug. Perfect for creating a welcoming atmosphere.",
    size: ["Medium", "Large"],
    colors: ["Warm Brown", "Soft Cream"],
    sku: "LR4567",
    soldCount: 60,
    quantities: 45,
  },
  {
    name: "Console Table",
    image: [
      "https://source.unsplash.com/random/360x265?livingroom&65",
      "https://source.unsplash.com/random/360x265?livingroom&66",
      "https://source.unsplash.com/random/360x265?livingroom&67",
      "https://source.unsplash.com/random/360x265?livingroom&68",
    ],
    price: 149.99,
    discount_price: 129.99,
    reviewsNumber: 34,
    rating: 3.7,
    brand: "Chic Haven",
    category: "living room",
    details: {
      type: "Console Table",
      material: "Wood",
      dimensions: '48"W x 12"D x 30"H',
      features: "Stylish, Versatile, Easy to Assemble",
    },
    description:
      "Enhance your entryway or living room with this stylish console table. Perfect for displaying decor or holding keys and mail.",
    size: ["Medium"],
    colors: ["Deep Navy", "Soft Cream"],
    sku: "LR5678",
    soldCount: 50,
    quantities: 30,
  },
  {
    name: "Throw Pillows",
    image: [
      "https://source.unsplash.com/random/360x265?livingroom&69",
      "https://source.unsplash.com/random/360x265?livingroom&70",
      "https://source.unsplash.com/random/360x265?livingroom&71",
      "https://source.unsplash.com/random/360x265?livingroom&72",
    ],
    price: 29.99,
    discount_price: 19.99,
    reviewsNumber: 28,
    rating: 3.6,
    brand: "Relaxation Retreat",
    category: "living room",
    details: {
      type: "Throw Pillows",
      material: "Polyester",
      dimensions: '18" x 18"',
      features: "Soft, Plush, Decorative",
    },
    description:
      "Add a pop of color and comfort to your living room with these stylish throw pillows. Perfect for accessorizing your sofa or chairs.",
    size: ["Small", "Medium"],
    colors: ["Slate Gray", "Warm Brown"],
    sku: "LR7890",
    soldCount: 45,
    quantities: 25,
  },
];

const livingRoomData = {
  brands: [
    "Urban Comfort",
    "Cosy Living",
    "Elegant Living",
    "Chic Haven",
    "Relaxation Retreat",
  ],
  sizes: ["Small", "Medium", "Large", "Extra Large"],
  colors: [
    { name: "Slate Gray", code: "#708090" },
    { name: "Neutral Beige", code: "#F5F5DC" },
    { name: "Deep Navy", code: "#000080" },
    { name: "Warm Brown", code: "#8B4513" },
    { name: "Soft Cream", code: "#FFFACD" },
  ],
};

export default livingRoom;
