export interface Theme1000Cake {
  id: string;
  name: string;
  price: number; // 1000 or 1200
  priceText: string;
  weight: string;
  tagline: string;
  description: string;
  image: string;
  flavor: string;
  isPlasticTopper: boolean;
  topperNotice?: string;
  designHighlights: string[];
  egglessAvailable: boolean;
}

export const THEME_1000_CAKES: Theme1000Cake[] = [
  {
    id: "square-chocolate-lattice",
    name: "Square Dutch Chocolate Lattice Drip",
    price: 1000,
    priceText: "₹1,000",
    weight: "1 Kg",
    tagline: "Dark Chocolate Grid Lattice Glaze, Mocha Rosette Corner & Glazed Cherries",
    description:
      "An opulent square chocolate creation coated in smooth vanilla glaze, criss-crossed with dark Dutch chocolate lattice drizzle, mocha rosette trio, and glazed cherries.",
    image: "/images/custom-special/square-chocolate-lattice.jpg",
    flavor: "Dutch Chocolate Lattice",
    isPlasticTopper: false,
    designHighlights: [
      "Dutch dark chocolate lattice drizzle grid",
      "Corner mocha cream rosette bouquet",
      "Glossy red cherries & gold pearl sprinkles",
      "Square modern party cake cut",
    ],
    egglessAvailable: true,
  },
  {
    id: "all-chocolate-rosette-bloom",
    name: "All-Chocolate Dutch Rosette Bloom",
    price: 1000,
    priceText: "₹1,000",
    weight: "1 Kg",
    tagline: "3D Piped Cocoa Rosette Carpet with Gold & Silver Pearl Accents",
    description:
      "A chocoholic's ultimate dream! Completely covered with rich Belgian chocolate buttercream rosettes, glistening gold and silver edible pearls, and deep cocoa sponge layers.",
    image: "/images/custom-special/all-chocolate-rosette-bloom.jpg",
    flavor: "Belgian Chocolate Truffle",
    isPlasticTopper: false,
    designHighlights: [
      "Full top surface 3D chocolate rosette piping",
      "Deep cocoa sponge with truffle ganache filling",
      "Gold & silver pearl accents on each rose",
      "Intense chocolate indulgence",
    ],
    egglessAvailable: true,
  },
  {
    id: "soccer-turf-3d",
    name: "3D Champion Soccer Football Cake",
    price: 1200,
    priceText: "₹1,200",
    weight: "1.2 Kg",
    tagline: "Hand-Piped Stadium Grass Base with 3D Soccer Ball Dome & Chocolate Patch Details",
    description:
      "Score the ultimate goal at your celebration with this handcrafted 3D soccer ball cake! Features fresh vanilla sponge dome layered with cream, hand-piped lush green stadium grass frosting, and rich chocolate pentagon patches.",
    image: "/images/theme-1000/soccer-turf-cake.jpg",
    flavor: "Vanilla & Chocolate Turf",
    isPlasticTopper: false,
    designHighlights: [
      "3D dome-shaped soccer ball sponge",
      "Hand-piped green buttercream grass border",
      "Hand-drawn dark chocolate pentagon patches",
      "Perfect for sports & birthday parties",
    ],
    egglessAvailable: true,
  },
  {
    id: "spiderman-web-hero",
    name: "Spiderman Action Web Hero Cake",
    price: 1200,
    priceText: "₹1,200",
    weight: "1.2 Kg",
    tagline: "Vibrant Red Web Glaze, Chocolate Web Drizzle & Blue Rosette Trim",
    description:
      "Swing into action with this epic Spiderman hero cake! Features a vibrant red mirror web glaze, dark chocolate web piping, electric blue rosette borders, and a gold acrylic birthday ring.",
    image: "/images/theme-1000/spiderman-action-cake.jpg",
    flavor: "Dutch Chocolate Web",
    isPlasticTopper: true,
    topperNotice: "⚠️ Includes reusable non-edible plastic Spiderman action figure toy (keepsake for birthday child)",
    designHighlights: [
      "Reusable plastic Spiderman action figure topper",
      "Vibrant red glaze with dark chocolate web grid",
      "Electric blue rosette base piping",
      "Gold acrylic Happy Birthday ring",
    ],
    egglessAvailable: true,
  },
  {
    id: "pink-barbie-doll-gown",
    name: "Pink Princess Rosette Barbie Gown Cake",
    price: 1200,
    priceText: "₹1,200",
    weight: "1.5 Kg",
    tagline: "3D Layered Pink Buttercream Ballgown, Rosette Bodice & Silver Tiara",
    description:
      "Fulfill every little princess's dream with this fairytale Barbie gown cake! Layered with fresh strawberry vanilla sponge, a 3D hand-piped pink buttercream rosette ballgown dress, and tiara detailing.",
    image: "/images/theme-1000/pink-barbie-doll-cake.jpg",
    flavor: "Strawberry Pink Vanilla",
    isPlasticTopper: true,
    topperNotice: "⚠️ Includes reusable non-edible plastic Barbie doll torso figure (keepsake for birthday child)",
    designHighlights: [
      "Reusable plastic Barbie doll torso with tiara",
      "Full 3D piped pink buttercream rosette dress",
      "Rich strawberry cream sponge layers",
      "High-end princess party centerpiece",
    ],
    egglessAvailable: true,
  },
  {
    id: "chocolate-barbie-doll-gown",
    name: "Chocolate Pearl Princess Barbie Gown Cake",
    price: 1000,
    priceText: "₹1,000",
    weight: "1 Kg",
    tagline: "Dutch Chocolate Cream Gown, White Meringue Drop Trims & Gold Pearl Bodice",
    description:
      "An exquisite chocolate princess cake featuring a smooth Dutch chocolate cream ballgown skirt, delicate white meringue drops, and a shimmering gold pearl bodice dress.",
    image: "/images/theme-1000/chocolate-barbie-doll-cake.jpg",
    flavor: "Dutch Chocolate Ganache",
    isPlasticTopper: true,
    topperNotice: "⚠️ Includes reusable non-edible plastic Barbie doll torso figure (keepsake for birthday child)",
    designHighlights: [
      "Reusable plastic Barbie doll torso figure",
      "Dutch chocolate cream frosted gown skirt",
      "White meringue drops & gold pearl bodice",
      "Unbeatable value at ₹1,000",
    ],
    egglessAvailable: true,
  },
  {
    id: "lavender-purple-rosette-sheet",
    name: "Lavender Marble & Yellow Shell Party Sheet Cake",
    price: 1600,
    priceText: "₹1,600",
    weight: "2 Kg",
    tagline: "Yellow Star Shell Border, Lavender Swirls, Corner Rosette Bouquet & Custom Script",
    description:
      "A grand 2 Kg rectangular Black Forest sheet cake frosted with light lavender and white marble swirls, trimmed with vibrant yellow shell star borders, hand-piped purple rosette bouquets, and custom handwritten birthday greetings.",
    image: "/images/custom-special/lavender-purple-rosette-sheet.jpg",
    flavor: "Black Forest",
    isPlasticTopper: false,
    designHighlights: [
      "Grand 2 Kg party sheet cake cut for large celebrations",
      "Vibrant yellow star shell piped border",
      "Lavender & white marble top with purple rosette clusters",
      "Gold acrylic Happy Birthday crown & custom handwritten script",
    ],
    egglessAvailable: true,
  },
];
