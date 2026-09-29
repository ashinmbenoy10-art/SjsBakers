export interface Custom800Cake {
  id: string;
  name: string;
  price: number; // Price in Rupees (e.g. 650, 800, 900)
  weight: string; // "1/2 Kg" or "1 Kg"
  tagline: string;
  description: string;
  image: string;
  flavor: string;
  designHighlights: string[];
  egglessAvailable: boolean;
}

export const CUSTOM_800_CAKES: Custom800Cake[] = [
  {
    id: "butterscotch-almond-sabu",
    name: "White Butterscotch Flake Delights",
    price: 700,
    weight: "1 Kg",
    tagline: "Toasted Almond Flake Skirt, White Rosette Ring & Blue Custom Inscription",
    description:
      "A delightful 1 Kg custom creation iced in white whipped cream, coated in golden vanilla almond flakes, crowned with rosette swirls, and custom-inscribed in vibrant blue.",
    image: "/images/custom-special/butterscotch-almond-sabu.jpg",
    flavor: "Vanilla",
    designHighlights: [
      "Special 1 Kg budget celebration size",
      "Golden crispy toasted almond coating",
      "Piped white whipped rosette ring",
      "Custom blue handwritten name script",
    ],
    egglessAvailable: true,
  },
  {
    id: "crimson-red-velvet-heart",
    name: "Crimson Red Velvet Heart Blossom",
    price: 900,
    weight: "1 Kg",
    tagline: "Heart-Shaped Velvet Crumb Coating, Cream Cheese Rosette Bouquet & Star Border",
    description:
      "A romantic heart-shaped Red Velvet centerpiece frosted with velvety red cocoa crumbs, a lush two-tone cream cheese rosette bouquet, and piped star borders.",
    image: "/images/custom-special/crimson-red-velvet-heart.jpg",
    flavor: "Classic Red Velvet Cream Cheese",
    designHighlights: [
      "Custom 1Kg heart-shaped red velvet sponge",
      "Two-tone cream cheese rosette bouquet",
      "Soft cocoa velvet crumb shell",
      "Star piping border trim",
    ],
    egglessAvailable: true,
  },
  {
    id: "caramel-drip-gold",
    name: "Golden Caramel Silk Drip",
    price: 800,
    weight: "1 Kg",
    tagline: "Smooth Golden Caramel Glaze with Edible Gold Pearls & Custom Red Lettering",
    description:
      "A golden celebration centerpiece featuring smooth golden caramel glaze, glistening edible gold pearls, and custom hand-piped red lettering. Pure indulgence in every 1Kg slice for just ₹800.",
    image: "/images/custom-800/custom-caramel-drip.jpg",
    flavor: "Golden Caramel",
    designHighlights: [
      "Silky caramel drip edge",
      "Hand-piped custom name inscription",
      "Edible gold pearls & sprinkles",
      "Fresh small-batch sponge",
    ],
    egglessAvailable: true,
  },
  {
    id: "half-and-half-drip",
    name: "Dual Delight Half-and-Half Glaze",
    price: 800,
    weight: "1 Kg",
    tagline: "Black Forest Special — Rich Chocolate & Cherry Glaze with Piped Buttercream Swirls",
    description:
      "An exquisite Black Forest celebration cake adorned with glossy dark chocolate glaze, cherries, and delicate whipped cream rosettes with personalized greetings.",
    image: "/images/custom-800/custom-half-and-half.jpg",
    flavor: "Black Forest",
    designHighlights: [
      "Black Forest signature style",
      "Belgian dark chocolate drip",
      "Creamy vanilla rosette border",
      "Gold pearl accents",
    ],
    egglessAvailable: true,
  },
  {
    id: "pink-pearl-butterflies-amma",
    name: "Vintage Rose Pink & Pearl Butterflies",
    price: 800,
    weight: "1 Kg",
    tagline: "Victorian Swag Garlands, Pearl Script, Pink Rosettes & Golden Butterflies",
    description:
      "An enchanting Victorian-style pink cake decorated with delicate swag garlands, pearl bead script, piped rose bouquets, and shimmering gold butterfly accents.",
    image: "/images/custom-800/custom-pink-pearl-butterflies.jpg",
    flavor: "Strawberry Pink Velvet",
    designHighlights: [
      "Victorian piped swag garland borders",
      "Pearl bead custom name lettering",
      "3D golden metal butterfly toppers",
      "Lush pink buttercream rosette crown",
    ],
    egglessAvailable: true,
  },
  {
    id: "square-cherry-black-forest",
    name: "Classic Square Black Forest Cherry Deluxe",
    price: 800,
    weight: "1 Kg",
    tagline: "Dutch Cocoa Shavings, 10 Glazed Cherry Crowns & Cloud Swirl Whipped Piping",
    description:
      "A timeless square Black Forest masterpiece loaded with rich Dutch cocoa shavings, ten velvety whipped cream clouds crowned with glossy cherries, and a gold birthday topper.",
    image: "/images/custom-800/custom-square-cherry-black-forest.jpg",
    flavor: "Black Forest Cherry",
    designHighlights: [
      "Generous bed of Dutch cocoa shavings",
      "10 whipped cream rosettes with cherries",
      "Square modern party cut",
      "Gold acrylic Happy Birthday topper",
    ],
    egglessAvailable: true,
  },
  {
    id: "mocha-tiramisu-acha",
    name: "Mocha Tiramisu Cocoa Lace",
    price: 800,
    weight: "1 Kg",
    tagline: "Black Forest Sponge, Whipped Cream Rosette Crown & Dark Chocolate Script",
    description:
      "An elegant Black Forest cake featuring intricate lace artwork, piped whipped cream rosettes, gold pearls, and custom chocolate lettering.",
    image: "/images/custom-800/custom-mocha-tiramisu.jpg",
    flavor: "Black Forest",
    designHighlights: [
      "Stenciled lace top pattern",
      "Black Forest whipped cream rosette border",
      "Dark chocolate handwritten script",
      "Gold pearls & star piping edge",
    ],
    egglessAvailable: true,
  },
  {
    id: "almond-crunch-riya",
    name: "White Butterscotch Almond Crunch",
    price: 800,
    weight: "1 Kg",
    tagline: "Toasted Almond Flakes, Shell Whipped Piping & Lavender Pearl Sprinkles",
    description:
      "A delicate White Forest cake covered in toasted golden almond flakes, rimmed with soft white shell piping and lavender pearl accents. Hand-inscribed for your special day at ₹800/1Kg.",
    image: "/images/custom-800/custom-almond-crunch.jpg",
    flavor: "White Forest",
    designHighlights: [
      "Toasted crispy almond flake coating",
      "Dual-tone white & lavender piping",
      "Custom name script in blue",
      "Gold Happy Birthday acrylic topper",
    ],
    egglessAvailable: true,
  },
  {
    id: "royal-blue-ombre-milan",
    name: "Royal Blue Ombré Rosette Crown",
    price: 800,
    weight: "1 Kg",
    tagline: "Gradient Ombré Blue Rosettes, Gold Acrylic Birthday Topper & Ocean Pearls",
    description:
      "A regal White Forest blue ombré masterpiece adorned with a crown of hand-piped two-tone rosettes, shimmering ocean pearls, and a golden acrylic birthday topper.",
    image: "/images/custom-800/custom-royal-blue-ombre.jpg",
    flavor: "White Forest",
    designHighlights: [
      "Two-tone ombré rosette crown border",
      "Ocean blue pearl scatter",
      "Golden calligraphy topper",
      "Light whipping cream finish",
    ],
    egglessAvailable: true,
  },
  {
    id: "pink-cherries-robin",
    name: "Blush Pink Rosette & Cherry Delights",
    price: 800,
    weight: "1 Kg",
    tagline: "Delicate Pink Ruffle Borders, Glazed Cherries & Golden Pearl Dusting",
    description:
      "A charming Black Forest pastel pink celebration cake lined with layered ruffle frosting, topped with glossy glazed cherries and golden pearl dusting.",
    image: "/images/custom-800/custom-pink-cherries.jpg",
    flavor: "Black Forest",
    designHighlights: [
      "3D ruffled side piping & rosettes",
      "Glossy maraschino cherry crown",
      "Gold edible dust & pearl accents",
      "Custom piped name inscription",
    ],
    egglessAvailable: true,
  },
  {
    id: "sky-blue-square-amma",
    name: "Sky Blue Square Elegance",
    price: 800,
    weight: "1 Kg",
    tagline: "Sky Blue Rosette Corners, Ruffled White Sides & Gold Script Birthday Crown",
    description:
      "A loving square White Forest creation, featuring soft sky-blue rosette corners, ruffled white side piping, and elegant gold script toppers.",
    image: "/images/custom-800/custom-sky-blue-square.jpg",
    flavor: "White Forest",
    designHighlights: [
      "Square artisan cut with white ruffle skirt",
      "Sky-blue rosette corner bouquet",
      "Gold acrylic Happy Birthday crown",
      "Custom name script in teal blue",
    ],
    egglessAvailable: true,
  },
  {
    id: "sapphire-pearls-shebin",
    name: "Sapphire Blue & Pearl Cascade",
    price: 800,
    weight: "1 Kg",
    tagline: "Deep Sapphire Buttercream Rosette Wave, Luster Pearls & Custom Calligraphy",
    description:
      "An opulent ocean-inspired Black Forest cake with a cascading wave of deep sapphire buttercream rosettes, luster pearls, and blue handwritten calligraphy.",
    image: "/images/custom-800/custom-sapphire-pearls.jpg",
    flavor: "Black Forest",
    designHighlights: [
      "Asymmetric rosette cascade design",
      "Large white luster pearls & blue sprinkles",
      "Textured ombré side finish",
      "Handwritten custom message",
    ],
    egglessAvailable: true,
  },
  {
    id: "square-black-forest",
    name: "Royal Square Black Forest Shavings",
    price: 800,
    weight: "1 Kg",
    tagline: "Classic White Chocolate Shavings, Fluffy White Shell Piping & Golden Birthday Topper",
    description:
      "An elegant square artisan White Forest cake layered with white chocolate shavings, delicate cloud shell piping, and shimmering gold pearls, complete with custom name detailing.",
    image: "/images/custom-800/custom-black-forest-square.jpg",
    flavor: "White Forest",
    designHighlights: [
      "Square modern cake cut",
      "Generous white chocolate shavings rim",
      "Gold acrylic Happy Birthday topper",
      "Custom gold script lettering",
    ],
    egglessAvailable: true,
  },
  {
    id: "turquoise-ocean-ruffles",
    name: "Ocean Waves & Ruffles",
    price: 800,
    weight: "1 Kg",
    tagline: "Vibrant Turquoise Ocean Buttercream Waves, Tiered Ruffle Edges & Golden Topper",
    description:
      "A show-stopping turquoise square masterpiece featuring cascading ocean-wave textures, layered ruffle borders, and gold pearl accents custom-crafted for memorable celebrations.",
    image: "/images/custom-800/custom-turquoise-ruffles.jpg",
    flavor: "Vanilla Berry Blue",
    designHighlights: [
      "Textured ocean wave top surface",
      "3D ruffled side piping",
      "Golden birthday crown acrylic",
      "Personalized white inscription",
    ],
    egglessAvailable: true,
  },
  {
    id: "basket-weave-butterflies",
    name: "Artisan Basket-Weave & Butterflies",
    price: 800,
    weight: "1 Kg",
    tagline: "Hand-Woven Buttercream Basket-Weave, Violet & Coral Rosettes with Golden Monarchs",
    description:
      "A breathtaking 3D woven basket White Forest cake adorned with vibrant violet buttercream roses, coral blossoms, and elegant golden butterfly accents. High-end bakery artistry at just ₹800.",
    image: "/images/custom-800/custom-basket-weave-butterflies.jpg",
    flavor: "White Forest",
    designHighlights: [
      "Intricate hand-woven basket weave texture",
      "Two-tone violet & coral piped rosettes",
      "3D golden metal butterfly toppers",
      "Custom dark chocolate script lettering",
    ],
    egglessAvailable: true,
  },
];
