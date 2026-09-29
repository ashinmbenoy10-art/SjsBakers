export interface Cake {
  id: string;
  name: string;
  price: string;
  numericPrice: number;
  image: string;
  category: "1Kg Custom (₹800)" | "1000 Onwards";
  description: string;
  popular?: boolean;
  flavors: string[];
  sizes: string[];
  rating: number;
  reviewsCount: number;
}

export const CAKES: Cake[] = [
  {
    id: "soccer-turf-3d",
    name: "3D Champion Soccer Football Cake",
    price: "₹1,200",
    numericPrice: 1200,
    image: "/images/theme-1000/soccer-turf-cake.jpg",
    category: "1000 Onwards",
    description: "Score the ultimate goal at your celebration with this 3D soccer ball cake featuring stadium grass frosting and dark chocolate patches.",
    popular: true,
    flavors: ["Vanilla & Chocolate Turf", "Eggless Option"],
    sizes: ["1.2 kg"],
    rating: 5.0,
    reviewsCount: 145
  },
  {
    id: "spiderman-web-hero",
    name: "Spiderman Action Web Hero Cake",
    price: "₹1,200",
    numericPrice: 1200,
    image: "/images/theme-1000/spiderman-action-cake.jpg",
    category: "1000 Onwards",
    description: "Vibrant red web mirror glaze cake with blue rosette trim. ⚠️ Includes reusable non-edible plastic Spiderman toy topper.",
    popular: true,
    flavors: ["Dutch Chocolate Web", "Eggless Option"],
    sizes: ["1.2 kg"],
    rating: 5.0,
    reviewsCount: 180
  },
  {
    id: "pink-barbie-doll-gown",
    name: "Pink Princess Rosette Barbie Gown Cake",
    price: "₹1,200",
    numericPrice: 1200,
    image: "/images/theme-1000/pink-barbie-doll-cake.jpg",
    category: "1000 Onwards",
    description: "3D pink buttercream rosette ballgown dress cake. ⚠️ Includes reusable non-edible plastic Barbie doll torso topper.",
    popular: true,
    flavors: ["Strawberry Pink Vanilla", "Eggless Option"],
    sizes: ["1.5 kg"],
    rating: 5.0,
    reviewsCount: 210
  },
  {
    id: "chocolate-barbie-doll-gown",
    name: "Chocolate Pearl Princess Barbie Gown Cake",
    price: "₹1,000",
    numericPrice: 1000,
    image: "/images/theme-1000/chocolate-barbie-doll-cake.jpg",
    category: "1000 Onwards",
    description: "Smooth Dutch chocolate cream ballgown skirt with white meringue drops. ⚠️ Includes reusable non-edible plastic Barbie doll torso topper.",
    popular: true,
    flavors: ["Dutch Chocolate Ganache", "Eggless Option"],
    sizes: ["1 kg"],
    rating: 4.9,
    reviewsCount: 95
  },
  {
    id: "lavender-purple-rosette-sheet",
    name: "Lavender Marble & Yellow Shell Party Sheet Cake",
    price: "₹1,600 (2 Kg)",
    numericPrice: 1600,
    image: "/images/custom-special/lavender-purple-rosette-sheet.jpg",
    category: "1000 Onwards",
    description: "A grand 2 Kg rectangular Black Forest sheet cake frosted with light lavender and white marble swirls, trimmed with vibrant yellow shell star borders, hand-piped purple rosette bouquets, and custom handwritten birthday greetings.",
    popular: true,
    flavors: ["Black Forest", "Vanilla Swirl", "Eggless Option"],
    sizes: ["2 kg"],
    rating: 5.0,
    reviewsCount: 135
  },
  {
    id: "pink-pearl-butterflies-amma",
    name: "Vintage Rose Pink & Pearl Butterflies",
    price: "₹800 (1 Kg)",
    numericPrice: 800,
    image: "/images/custom-800/custom-pink-pearl-butterflies.jpg",
    category: "1Kg Custom (₹800)",
    description: "An enchanting Victorian-style pink cake decorated with delicate swag garlands, pearl bead script 'Amma', piped rose bouquets, and golden butterfly accents.",
    popular: true,
    flavors: ["Strawberry Pink Velvet", "Vanilla Cream", "Eggless Option"],
    sizes: ["1 kg"],
    rating: 5.0,
    reviewsCount: 115
  },
  {
    id: "square-cherry-black-forest",
    name: "Classic Square Black Forest Cherry Deluxe",
    price: "₹800 (1 Kg)",
    numericPrice: 800,
    image: "/images/custom-800/custom-square-cherry-black-forest.jpg",
    category: "1Kg Custom (₹800)",
    description: "A timeless square Black Forest masterpiece loaded with rich Dutch cocoa shavings, ten velvety whipped cream clouds crowned with glossy cherries.",
    popular: true,
    flavors: ["Black Forest Cherry", "Vanilla Cream", "Eggless Option"],
    sizes: ["1 kg"],
    rating: 5.0,
    reviewsCount: 124
  },
  {
    id: "mocha-tiramisu-acha",
    name: "Mocha Tiramisu Cocoa Lace",
    price: "₹800 (1 Kg)",
    numericPrice: 800,
    image: "/images/custom-800/custom-mocha-tiramisu.jpg",
    category: "1Kg Custom (₹800)",
    description: "An elegant Black Forest cake featuring intricate lace artwork, piped whipped cream rosettes, gold pearls, and custom chocolate lettering.",
    popular: true,
    flavors: ["Black Forest", "Vanilla Cream", "Eggless Option"],
    sizes: ["1 kg"],
    rating: 5.0,
    reviewsCount: 108
  },
  {
    id: "caramel-drip-gold",
    name: "Golden Caramel Silk Drip",
    price: "₹800 (1 Kg)",
    numericPrice: 800,
    image: "/images/custom-800/custom-caramel-drip.jpg",
    category: "1Kg Custom (₹800)",
    description: "A golden celebration centerpiece featuring smooth golden caramel glaze, glistening edible gold pearls, and custom hand-piped red lettering.",
    popular: true,
    flavors: ["Golden Caramel", "Vanilla Buttercream", "Eggless Option"],
    sizes: ["1 kg"],
    rating: 5.0,
    reviewsCount: 88
  },
  {
    id: "half-and-half-drip",
    name: "Dual Delight Half-and-Half Glaze",
    price: "₹800 (1 Kg)",
    numericPrice: 800,
    image: "/images/custom-800/custom-half-and-half.jpg",
    category: "1Kg Custom (₹800)",
    description: "An exquisite Black Forest celebration cake adorned with glossy dark chocolate glaze, cherries, and delicate whipped cream rosettes.",
    popular: true,
    flavors: ["Black Forest", "Vanilla Cream", "Eggless Option"],
    sizes: ["1 kg"],
    rating: 5.0,
    reviewsCount: 104
  },
  {
    id: "almond-crunch-riya",
    name: "White Butterscotch Almond Crunch",
    price: "₹800 (1 Kg)",
    numericPrice: 800,
    image: "/images/custom-800/custom-almond-crunch.jpg",
    category: "1Kg Custom (₹800)",
    description: "A delicate White Forest cake covered in toasted golden almond flakes, rimmed with soft white shell piping and lavender pearl accents.",
    popular: true,
    flavors: ["White Forest", "Vanilla Swirl", "Eggless Option"],
    sizes: ["1 kg"],
    rating: 5.0,
    reviewsCount: 96
  },
  {
    id: "royal-blue-ombre-milan",
    name: "Royal Blue Ombré Rosette Crown",
    price: "₹800 (1 Kg)",
    numericPrice: 800,
    image: "/images/custom-800/custom-royal-blue-ombre.jpg",
    category: "1Kg Custom (₹800)",
    description: "A regal White Forest blue ombré masterpiece adorned with a crown of hand-piped two-tone rosettes, shimmering ocean pearls, and a golden acrylic topper.",
    popular: true,
    flavors: ["White Forest", "Cream Cheese", "Eggless Option"],
    sizes: ["1 kg"],
    rating: 5.0,
    reviewsCount: 120
  },
  {
    id: "pink-cherries-robin",
    name: "Blush Pink Rosette & Cherry Delights",
    price: "₹800 (1 Kg)",
    numericPrice: 800,
    image: "/images/custom-800/custom-pink-cherries.jpg",
    category: "1Kg Custom (₹800)",
    description: "A charming Black Forest pastel pink celebration cake lined with layered ruffle frosting, topped with glossy glazed cherries and golden pearl dusting.",
    popular: true,
    flavors: ["Black Forest", "Vanilla Cream", "Eggless Option"],
    sizes: ["1 kg"],
    rating: 4.9,
    reviewsCount: 84
  },
  {
    id: "sky-blue-square-amma",
    name: "Sky Blue Square Elegance",
    price: "₹800 (1 Kg)",
    numericPrice: 800,
    image: "/images/custom-800/custom-sky-blue-square.jpg",
    category: "1Kg Custom (₹800)",
    description: "A loving square White Forest creation crafted especially for Mom (Amma), featuring soft sky-blue rosette corners, ruffled white side piping, and gold script toppers.",
    popular: true,
    flavors: ["White Forest", "Vanilla Bean", "Eggless Option"],
    sizes: ["1 kg"],
    rating: 5.0,
    reviewsCount: 110
  },
  {
    id: "sapphire-pearls-shebin",
    name: "Sapphire Blue & Pearl Cascade",
    price: "₹800 (1 Kg)",
    numericPrice: 800,
    image: "/images/custom-800/custom-sapphire-pearls.jpg",
    category: "1Kg Custom (₹800)",
    description: "An opulent ocean-inspired Black Forest cake with a cascading wave of deep sapphire buttercream rosettes, luster pearls, and blue handwritten calligraphy.",
    popular: true,
    flavors: ["Black Forest", "Vanilla Cream", "Eggless Option"],
    sizes: ["1 kg"],
    rating: 5.0,
    reviewsCount: 95
  },
  {
    id: "square-black-forest",
    name: "Royal Square Black Forest Shavings",
    price: "₹800 (1 Kg)",
    numericPrice: 800,
    image: "/images/custom-800/custom-black-forest-square.jpg",
    category: "1Kg Custom (₹800)",
    description: "An elegant square artisan White Forest cake layered with white chocolate shavings, delicate cloud shell piping, and shimmering gold pearls.",
    popular: true,
    flavors: ["White Forest", "Vanilla Cream", "Eggless Option"],
    sizes: ["1 kg"],
    rating: 4.9,
    reviewsCount: 65
  },
  {
    id: "turquoise-ocean-ruffles",
    name: "Ocean Waves & Ruffles",
    price: "₹800 (1 Kg)",
    numericPrice: 800,
    image: "/images/custom-800/custom-turquoise-ruffles.jpg",
    category: "1Kg Custom (₹800)",
    description: "A show-stopping turquoise square masterpiece featuring cascading ocean-wave textures, layered ruffle borders, and gold pearl accents.",
    popular: true,
    flavors: ["Vanilla Berry Blue", "Cream Cheese", "Eggless Option"],
    sizes: ["1 kg"],
    rating: 5.0,
    reviewsCount: 92
  },
  {
    id: "basket-weave-butterflies",
    name: "Artisan Basket-Weave & Butterflies",
    price: "₹800 (1 Kg)",
    numericPrice: 800,
    image: "/images/custom-800/custom-basket-weave-butterflies.jpg",
    category: "1Kg Custom (₹800)",
    description: "A breathtaking 3D woven basket White Forest cake adorned with vibrant violet buttercream roses, coral blossoms, and elegant golden butterfly accents.",
    popular: true,
    flavors: ["White Forest", "Buttercream Classic", "Eggless Option"],
    sizes: ["1 kg"],
    rating: 5.0,
    reviewsCount: 112
  }
];
