export interface ServiceCategory {
  title: string;
  slug: string;
  image: string;
  description: string;
  services: ServiceItem[];
}

export interface ServiceItem {
  slug: string;
  title: string;
  description: string;
  heading: string;
  serviceName: string;
  content: string;
  image: string;
}

export const serviceCategories: ServiceCategory[] = [
  {
    title: "Architectural Glass",
    slug: "architectural-glass",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop",
    description: "High-performance glass solutions for structural and exterior applications.",
    services: [
      {
        slug: "toughened-glass",
        title: "Toughened & Structural Glass",
        description: "High-strength toughened architectural glass for facades, doors, and structural glazing.",
        heading: "Structural Toughened Glass",
        serviceName: "Toughened Glass",
        content: "Processed in advanced facilities, our toughened glass is up to 5 times stronger than standard annealed glass. We provide custom sizes and finishes for structural facades, frameless doors, and canopy systems.",
        image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop"
      },
      {
        slug: "laminated-glass",
        title: "Laminated Safety Glass",
        description: "Secure, acoustic, and resilient laminated glass for high-traffic zones.",
        heading: "Laminated Safety Glass",
        serviceName: "Laminated Glass",
        content: "Laminated glass provides maximum safety and sound insulation. Made by bonding two or more layers of glass with an interlayer, it holds together when shattered, making it ideal for skylights, railings, and security glazing.",
        image: "https://images.unsplash.com/photo-1541888042459-715569420dc8?q=80&w=2070&auto=format&fit=crop"
      },
      {
        slug: "bend-glass",
        title: "Curved & Bend Glass",
        description: "Custom curved glass for dynamic architectural designs.",
        heading: "Custom Curved Architectural Glass",
        serviceName: "Bend Glass",
        content: "Our custom bend glass adds fluid, organic forms to architectural projects. Ideal for panoramic windows, revolving doors, and bespoke facades, offering both aesthetic elegance and structural integrity.",
        image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop"
      },
      {
        slug: "insulated-glass",
        title: "Insulated Glass Units (IGU)",
        description: "Energy-efficient double and triple glazing for optimal thermal performance.",
        heading: "High-Performance Insulated Glass",
        serviceName: "Insulated Glass",
        content: "Reduce energy costs and enhance indoor comfort with our Insulated Glass Units (IGU). Designed to minimize heat transfer, they are perfect for energy-efficient commercial buildings and luxury residences.",
        image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop"
      },
      {
        slug: "ceramic-printing",
        title: "Ceramic Printed Glass",
        description: "Durable, high-resolution custom graphics fused into the glass.",
        heading: "Ceramic Fritted Architectural Glass",
        serviceName: "Ceramic Printing",
        content: "Incorporate permanent, UV-resistant designs onto your architectural glass. Ceramic frit is fused into the glass during the tempering process, providing solar control and unparalleled design flexibility.",
        image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=2069&auto=format&fit=crop"
      }
    ]
  },
  {
    title: "Decorative Glass",
    slug: "decorative-glass",
    image: "https://images.unsplash.com/photo-1549488344-c102a0a2df33?q=80&w=2070&auto=format&fit=crop",
    description: "Artistic and custom glass to elevate interior aesthetics.",
    services: [
      {
        slug: "painted-glass",
        title: "Back Painted Glass",
        description: "Vibrant and sleek painted glass for modern interiors and wall cladding.",
        heading: "Premium Back Painted Glass",
        serviceName: "Painted Glass",
        content: "Add a splash of color to your spaces with our back painted glass. Highly durable and easy to clean, it's perfect for kitchen backsplashes, office writing boards, and feature walls.",
        image: "https://images.unsplash.com/photo-1600566753086-00f18ef02ce4?q=80&w=2070&auto=format&fit=crop"
      },
      {
        slug: "stained-glass",
        title: "Stained & Art Glass",
        description: "Timeless stained glass pieces for decorative windows and partitions.",
        heading: "Bespoke Stained Glass Art",
        serviceName: "Stained Glass",
        content: "Bring classic elegance and colorful light play into your space. Our stained glass panels are handcrafted by artisans, suitable for churches, luxury homes, and boutique hospitality venues.",
        image: "https://images.unsplash.com/photo-1549488344-c102a0a2df33?q=80&w=2070&auto=format&fit=crop"
      },
      {
        slug: "etching-glass",
        title: "Frosted & Etched Glass",
        description: "Elegant frosted designs for privacy and subtle branding.",
        heading: "Custom Frosted & Etched Glass",
        serviceName: "Etching Glass",
        content: "Achieve the perfect balance of light and privacy. Our sandblasted and acid-etched glass can feature custom patterns, logos, or full frosted finishes for office partitions and shower doors.",
        image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=2070&auto=format&fit=crop"
      },
      {
        slug: "deep-carved-glass",
        title: "Deep Carved Glass",
        description: "3D sculpted glass for striking visual depth and texture.",
        heading: "Artisanal Deep Carved Glass",
        serviceName: "Deep Carved Glass",
        content: "Transform standard glass into a three-dimensional work of art. Deep carving creates distinct textures and shadows, making it an excellent focal point for luxury lobbies and entryways.",
        image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=2069&auto=format&fit=crop"
      },
      {
        slug: "fabric-laminated-glass",
        title: "Fabric Laminated Glass",
        description: "Textile interlayers for unique, tactile glass aesthetics.",
        heading: "Fabric & Mesh Laminated Glass",
        serviceName: "Fabric Laminated Glass",
        content: "Encapsulate beautiful fabrics, metallic meshes, or natural elements between glass layers. This technique offers endless design possibilities for bespoke room dividers and decorative panels.",
        image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=2069&auto=format&fit=crop"
      },
      {
        slug: "fragmental-glass",
        title: "Fragmental Cracked Glass",
        description: "Controlled cracked texture for an edgy, reflective look.",
        heading: "Fragmental & Crash Glass",
        serviceName: "Fragmental Glass",
        content: "Create a striking visual impact with crash glass, featuring a shattered central layer safely sandwiched between two solid panes. Ideal for modern bars, countertops, and avant-garde partitions.",
        image: "https://images.unsplash.com/photo-1541888042459-715569420dc8?q=80&w=2070&auto=format&fit=crop"
      },
      {
        slug: "planilaque-glass",
        title: "Planilaque Colored Glass",
        description: "High-gloss lacquered glass for sophisticated wall coverings.",
        heading: "Sleek Planilaque Glass",
        serviceName: "Planilacqe Glass",
        content: "Planilaque offers a brilliant, opaque, and highly reflective finish. It is the material of choice for high-end wardrobes, modern kitchens, and elegant interior wall cladding.",
        image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop"
      },
      {
        slug: "stacked-glass",
        title: "Stacked Glass Art",
        description: "Thick, layered glass for textured sculptural elements.",
        heading: "Architectural Stacked Glass",
        serviceName: "Stacked Glass",
        content: "Build volume and texture by stacking layers of glass edge-on. This dramatic technique is perfect for custom reception desks, water features, and bold architectural sculptures.",
        image: "https://images.unsplash.com/photo-1545083036-b179caebecab?q=80&w=2070&auto=format&fit=crop"
      },
      {
        slug: "glass-pillars",
        title: "Glass Pillars & Columns",
        description: "Luminous, load-bearing or decorative glass columns.",
        heading: "Luminous Glass Pillars",
        serviceName: "Glass Pillars",
        content: "Integrate light and structure with custom glass pillars. Whether used as decorative enclosures around existing structural columns or as standalone glowing features, they redefine interior spaces.",
        image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop"
      },
      {
        slug: "glass-digital-printing",
        title: "Digital Printed Glass",
        description: "High-fidelity digital prints directly on architectural glass.",
        heading: "Advanced Digital Glass Printing",
        serviceName: "Glass Digital Printing",
        content: "Print any photograph, pattern, or gradient directly onto glass with extreme precision and vibrant colors. Perfect for customized facades, branded corporate interiors, and unique art installations.",
        image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=2069&auto=format&fit=crop"
      },
      {
        slug: "slumped-glass",
        title: "Slumped & Textured Glass",
        description: "Kiln-formed textured glass for organic visual interest.",
        heading: "Kiln-Formed Slumped Glass",
        serviceName: "Slumped Glass",
        content: "Created by heating glass until it slumps over a custom mold, this technique results in stunning, organic textures like water ripples or bespoke patterns for privacy screens and feature windows.",
        image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=2070&auto=format&fit=crop"
      },
      {
        slug: "decorative-mirror",
        title: "Decorative Mirrors",
        description: "Custom-cut, tinted, and antique mirrors.",
        heading: "Bespoke Decorative Mirrors",
        serviceName: "Decorative Mirror",
        content: "Expand your space with our premium decorative mirrors. From bronze-tinted large-format mirrors to heavily distressed antique finishes, we offer custom reflections for luxury interiors.",
        image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=2069&auto=format&fit=crop"
      },
      {
        slug: "led-mirror",
        title: "Smart LED Mirrors",
        description: "Backlit and edge-lit mirrors for modern bathrooms and vanities.",
        heading: "Illuminated LED Mirrors",
        serviceName: "Led Mirror",
        content: "Combine flawless reflection with integrated lighting. Our LED mirrors feature dimmable, color-temperature adjustable lighting, anti-fog technology, and sleek frameless designs for modern bathrooms.",
        image: "https://images.unsplash.com/photo-1600566753086-00f18ef02ce4?q=80&w=2070&auto=format&fit=crop"
      }
    ]
  },
  {
    title: "Glass Services",
    slug: "glass-services",
    image: "https://images.unsplash.com/photo-1541888042459-715569420dc8?q=80&w=2070&auto=format&fit=crop",
    description: "Expert installation, systems, and architectural glass hardware.",
    services: [
      {
        slug: "automatic-doors",
        title: "Automatic Glass Doors",
        description: "Sensor-driven sliding and swing doors for commercial entrances.",
        heading: "Seamless Automatic Glass Doors",
        serviceName: "Automatic Doors",
        content: "Enhance accessibility and hygiene with our advanced automatic door systems. We integrate reliable European motors with premium toughened glass for smooth, silent, and secure commercial entryways.",
        image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=2069&auto=format&fit=crop"
      },
      {
        slug: "kitchen-shutters",
        title: "Glass Kitchen Shutters",
        description: "Sleek aluminum profile glass shutters for premium modular kitchens.",
        heading: "Modern Glass Kitchen Shutters",
        serviceName: "Kitchen Shutters",
        content: "Upgrade your kitchen cabinetry with ultra-slim aluminum framed glass shutters. Available in clear, frosted, or back-painted finishes, they bring a clean, European aesthetic to modular kitchens.",
        image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop"
      },
      {
        slug: "glass-partition",
        title: "Office Glass Partitions",
        description: "Acoustic and frameless partition systems for modern workspaces.",
        heading: "Minimalist Glass Partitions",
        serviceName: "Glass Partition",
        content: "Create fluid, light-filled workspaces with our minimalist glass partition systems. We offer single and double-glazed acoustic solutions with premium slimline aluminium tracks.",
        image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=2069&auto=format&fit=crop"
      },
      {
        slug: "canopy-system",
        title: "Glass Canopy Systems",
        description: "Overhead structural glass canopies and skylights.",
        heading: "Structural Glass Canopies",
        serviceName: "Canopy System",
        content: "Protect your entrances from the elements without blocking natural light. Our laminated safety glass canopies use premium stainless steel tension rods and spider fittings for a floating, modern look.",
        image: "https://images.unsplash.com/photo-1541888042459-715569420dc8?q=80&w=2070&auto=format&fit=crop"
      },
      {
        slug: "shower-cubicles",
        title: "Shower Cubicles",
        description: "Frameless, bespoke shower enclosures for luxury bathrooms.",
        heading: "Frameless Shower Enclosures",
        serviceName: "Shower Cubicles",
        content: "Transform your bathroom into a luxury spa experience. Our custom frameless shower cubicles are built using toughened safety glass and premium, corrosion-resistant hardware in bespoke finishes.",
        image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=2070&auto=format&fit=crop"
      },
      {
        slug: "bend-glass-railing",
        title: "Curved Glass Railings",
        description: "Seamless curved balustrades for spiral staircases and rounded balconies.",
        heading: "Curved Glass Balustrades",
        serviceName: "Bend Glass Railing",
        content: "Follow the elegant curves of your architecture with precision bend glass railings. We provide frameless, structural curved glass balustrades that offer uncompromising safety and striking visual flow.",
        image: "https://images.unsplash.com/photo-1545083036-b179caebecab?q=80&w=2070&auto=format&fit=crop"
      },
      {
        slug: "balcony-railing",
        title: "Balcony Glass Railings",
        description: "Uninterrupted views with frameless balcony balustrades.",
        heading: "Frameless Balcony Railings",
        serviceName: "Balcony Railing",
        content: "Achieve true seamless aesthetics for your balconies. Our frameless glass balustrades use heavy-duty base shoes or standoff hardware to provide maximum safety without compromising your architectural views.",
        image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop"
      },
      {
        slug: "patch-fitting-glass",
        title: "Patch Fitting Systems",
        description: "Frameless glass doors and partitions using sleek patch fittings.",
        heading: "Frameless Patch Fitting Assemblies",
        serviceName: "Patch Fitting Glass",
        content: "Maximize transparency with patch-fitted frameless glass assemblies. Using minimal stainless steel hardware at the corners, we create sweeping glass frontages for retail stores and modern offices.",
        image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop"
      },
      {
        slug: "sliding-systems",
        title: "Glass Sliding Systems",
        description: "Smooth operating sliding glass doors for patios and interiors.",
        heading: "Architectural Sliding Glass Systems",
        serviceName: "Sliding Systems",
        content: "Blur the lines between indoor and outdoor spaces with our premium sliding systems. Featuring heavy-duty bottom rollers or sleek top-hung tracks, our doors glide effortlessly even with large-format glass.",
        image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=2069&auto=format&fit=crop"
      }
    ]
  },
  {
    title: "Aluminium Systems",
    slug: "aluminium-systems",
    image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=2069&auto=format&fit=crop",
    description: "Premium aluminium profiles, partitions, and sliding systems for modern spaces.",
    services: [
      {
        slug: "kitchen-profiles",
        title: "Kitchen Profiles",
        description: "Sleek and durable aluminium profiles for modern modular kitchens.",
        heading: "Premium Kitchen Profiles",
        serviceName: "Kitchen Profiles",
        content: "Upgrade your kitchen cabinetry with our ultra-slim, high-strength aluminium profiles. Designed for seamless integration, they offer a clean, contemporary aesthetic while ensuring long-lasting durability for modular kitchen setups.",
        image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop"
      },
      {
        slug: "wardrobe-profiles",
        title: "Wardrobe Profiles - Sliding / Openable",
        description: "Elegant aluminium profiles for sliding and openable wardrobe systems.",
        heading: "Architectural Wardrobe Profiles",
        serviceName: "Wardrobe Profiles",
        content: "Create stunning, space-saving wardrobes with our advanced aluminium profiles. Available in both smooth sliding and traditional openable configurations, these systems provide a flawless finish and effortless operation for luxury bedroom interiors.",
        image: "https://images.unsplash.com/photo-1549488344-c102a0a2df33?q=80&w=2070&auto=format&fit=crop"
      },
      {
        slug: "aluminium-internal-partition",
        title: "Aluminium Internal Partition",
        description: "Minimalist aluminium framed glass partitions for offices and homes.",
        heading: "Minimalist Internal Partitions",
        serviceName: "Aluminium Internal Partition",
        content: "Define your interior spaces without sacrificing natural light. Our slimline aluminium internal partitions offer a sleek, industrial-chic aesthetic perfect for modern office environments and open-plan residential layouts.",
        image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=2069&auto=format&fit=crop"
      },
      {
        slug: "telescopic-sliding-system",
        title: "Telescopic Sliding System",
        description: "Space-saving telescopic sliding doors for wide architectural openings.",
        heading: "Advanced Telescopic Sliding Systems",
        serviceName: "Telescopic Sliding System",
        content: "Maximize your space with our synchronized telescopic sliding systems. Engineered to stack multiple glass panels neatly to one side, this system is ideal for creating wide, uninterrupted walkways in commercial and premium residential spaces.",
        image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=2069&auto=format&fit=crop"
      },
      {
        slug: "syncro-sliding-system",
        title: "Syncro Sliding System",
        description: "Synchronized dual-door sliding systems for grand, effortless entryways.",
        heading: "Synchronized Sliding Doors",
        serviceName: "Syncro Sliding System",
        content: "Experience the elegance of synchronized motion. When you open one door, the other opens simultaneously in the opposite direction. Perfect for grand conference rooms, master suites, and luxury retail entrances.",
        image: "https://images.unsplash.com/photo-1541888042459-715569420dc8?q=80&w=2070&auto=format&fit=crop"
      },
      {
        slug: "bifolding-system",
        title: "Bifolding System",
        description: "Folding aluminium door systems for seamless indoor-outdoor living.",
        heading: "Architectural Bifolding Systems",
        serviceName: "Bifolding System",
        content: "Completely open up your living space to the outdoors. Our premium bifolding systems accordion-fold away seamlessly, offering high thermal performance, weather resistance, and panoramic views when fully open.",
        image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop"
      },
      {
        slug: "exterior-windows-systems",
        title: "Exterior Windows Systems",
        description: "High-performance aluminium exterior windows for modern facades.",
        heading: "Premium Exterior Window Systems",
        serviceName: "Exterior Windows Systems",
        content: "Engineered for superior weather resistance and thermal efficiency, our exterior aluminium window systems provide sleek sightlines and robust security, making them the ultimate choice for contemporary architectural facades.",
        image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop"
      },
      {
        slug: "aluminium-shower-cubicle",
        title: "Aluminium Shower Cubicle",
        description: "Framed and semi-frameless aluminium shower enclosures.",
        heading: "Aluminium Framed Shower Cubicles",
        serviceName: "Aluminium Shower Cubicle",
        content: "Combine striking structural lines with water-tight performance. Our aluminium framed shower cubicles offer a modern, grid-like aesthetic (including popular matte black finishes) for luxury bathroom renovations.",
        image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=2070&auto=format&fit=crop"
      },
      {
        slug: "aluminium-railing",
        title: "Aluminium Railing",
        description: "Durable, maintenance-free aluminium balustrades and railings.",
        heading: "Architectural Aluminium Railings",
        serviceName: "Aluminium Railing",
        content: "Secure your balconies and staircases with our heavy-duty aluminium railing systems. Offering unparalleled structural integrity and a rust-free lifespan, they provide a clean, modern edge to any exterior or interior.",
        image: "https://images.unsplash.com/photo-1545083036-b179caebecab?q=80&w=2070&auto=format&fit=crop"
      },
      {
        slug: "aluminium-louver-doors",
        title: "Aluminium Louver Doors",
        description: "Ventilated aluminium louver systems for utility and architectural styling.",
        heading: "Functional Aluminium Louver Doors",
        serviceName: "Aluminium Louver Doors",
        content: "Ensure continuous airflow while maintaining privacy and security. Our precision-engineered aluminium louver doors are perfect for utility rooms, HVAC enclosures, and striking architectural exterior accents.",
        image: "https://images.unsplash.com/photo-1600566753086-00f18ef02ce4?q=80&w=2070&auto=format&fit=crop"
      },
      {
        slug: "aluminium-french-windows",
        title: "Aluminium French Windows",
        description: "Classic French window styling with modern aluminium engineering.",
        heading: "Modern Aluminium French Windows",
        serviceName: "Aluminium French Windows",
        content: "Bring timeless elegance into the modern era. Our aluminium French windows offer the classic divided-light aesthetic combined with the strength, slim profiles, and energy efficiency of contemporary aluminium extrusion.",
        image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=2069&auto=format&fit=crop"
      },
      {
        slug: "aluminium-pocket-sliding-door",
        title: "Aluminium Pocket Sliding Door",
        description: "Disappearing pocket doors for ultimate space efficiency.",
        heading: "Hidden Pocket Sliding Doors",
        serviceName: "Aluminium Pocket Sliding Door",
        content: "Maximize your floor plan with doors that vanish entirely into the wall. Our aluminium pocket sliding systems utilize premium track hardware for smooth, silent operation, creating wide-open transitions between rooms.",
        image: "https://images.unsplash.com/photo-1541888042459-715569420dc8?q=80&w=2070&auto=format&fit=crop"
      }
    ]
  }
];

export const servicesData: ServiceItem[] = serviceCategories.flatMap(cat => cat.services);
