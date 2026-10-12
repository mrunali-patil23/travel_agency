import { Destination, CaseStudy } from '../types';

export const ASSETS = {
  emblem: "https://lh3.googleusercontent.com/aida/AEtjO1WuAkumuVPmOSsnNEoSujjX9wVEALgEvQazMv1wUHqHOqAGIfXY9Gj2rB4cSY_IGUTWWOaZY_A20XYBs9FEJy1FOfW1c1ICG59kUaLL8upILqoif8w1gplym8avHz6YkTLezkfPvgrsuMmpjp4p0c4er9zf_bTIQeIW64y4p_y11aGix8m5i3FLdATdxpsAJxvDz7hZ-8aurOLcxyLLMqcPEqTDBpMQgclr_8X1JExuHM0NJ03J3V_C6y4",
  hero: "https://lh3.googleusercontent.com/aida-public/AB6AXuCW9jZdkosqErwp8wy9dz5lOudf-qjT30-CU7wItxmwGLrt1iDv5a-3yH_MHSxKIpzirDc41bR8vka72PuXy86cMmTPpOxYgOHn5zSD_VgolsXf-AMhMOJmkn1Jo7LYE0-QTMhwRSton4d7ka3aoXR7qFWfQskAFbjjsQJg_IyfxTabCHY_5Tp6Bye2ghhBCQaREB7bT6blC2sdgNAJmLgTNK3t3jZaL9D3-C409DvqciC6BQrTZx9UtgwZk1duZ0kDq6E",
  corporateOffsites: "https://lh3.googleusercontent.com/aida-public/AB6AXuC4U9IgiG96CcOCTIK58vinaza2-wykbEjE7fIcHc7vpST_UIuHthkE4MJRmFzwtsuioHH8m10QdPELzBM79PTAG8j3g6gbBGVHTWIPTe-TCoeLtug8Y456uX0b0aV4GnpeWedP0p_DjAsaO-p8ZVdP-Jg4Vg_85NP_xEiugPAujtnu9UoaJYVCqyMw0IPIa83qrRtaCUw4t3pAaveNHaviZdrMY9_dO3saz2-vr4pXq2HOrPTtgbN5_w",
  leisureHolidays: "https://lh3.googleusercontent.com/aida-public/AB6AXuBrMzsjn-1foUnVjMjZE7Efp71XBM-r5_ZG_4vqSRzZ65eFBrmVKTxvrcGo2Spz9RTSyK3NwBtSX616mnF0eHonMB4kSnF2vbyhb7VdPjuanpwW697LjsWIM9GVoziTaFsYgW-KVDKjHQ_1KpmyfQsbkNXBNRqcE6248AkAuUJZ1AkV3_XqvEnrhPRmUteqRW6q9ls0bH7NYUbvJ8AipeWaSNQaf-6SVOyNP6LHpzl46ocnuiQc3lB9kQ",
  botswana: "https://lh3.googleusercontent.com/aida-public/AB6AXuCcFPTVhDz_lrOoEpnQTjveQ45s2WB-uNqu-zEK-HverZKcKZWhSh6SeXNz-9N-S7twWRmXYI8SjjVjlgB97uztUp20OL56p0pRD6mfukOPBrJapYPGkvNUrzYyIZYDrVJnTyrQm_J_rC3mDvrGM-JdFpxwo9CJ_i8XimTNUlHjhwDOzUSSsqJBRNcTdMrUijRvuNSw8C4k0FLJ-zaQ3hD7XXt0Lv4ppLWT7yqE0wG8y6l6roYGTBW-Wg",
  santorini: "https://lh3.googleusercontent.com/aida-public/AB6AXuDjkp_rYlxr1-LSTAKIxYVgMGI9T45fkjFJIyElIADzvbOXN5VU58qnNj6wRsWmtL8pb8Pf-1cRBd6nOKKRPg4cZcjf7i8kIF1JEZu-kh6W1Uw8L_9f67-SAp9CUpdz47Q0Qsk4nXGunj85dJEzBqLjwG_tCbwFrjMCx9x2IwfwPq59VADHpmRs7m8DHiBD8T4Iww1rlZuzzGKaOhqMaXa4-sSTXX3pDg1JO45R_MTArMwhYVk7w_InOQ",
  iceland: "https://lh3.googleusercontent.com/aida-public/AB6AXuDtfIup8WoZX8Da-ESnAg87WlTrlknKhd5TGPlbW107y5hqhrzvj1FYkQ2z6MsAs7jGl3GsT6M6BI4erpnq5yfgMIed0nrVJEAIZMeiDHyKPe9BIwFozO5EaxgwxAW8jn3kxl_fAySAA1aCZ0zuv9GivT2c7hefy3kroa-4oTIrvMLitI6WWsTqx1qLMu-Eb-bSraAUIDPhFl0XJGsZLJzRThC8vWhF63PsRIQkZ5q9w9582Bkuq2DoNw",
  dineshSeth: "https://lh3.googleusercontent.com/aida-public/AB6AXuCmYtS0knvPkm1PTragpJVVNdsFZijL5yOCOu6wX4Oxed0ZAjTmzD4qixfvrrTOM6Uhu1NWpTKb04XOM_TA9J2lk8Ah10QUD5atzG-bx2V1B-WmFFoiAWzOTVkwyeIWVIehDudTMQt46STQS9kJFFITU23w55KNRxUox1iovXKzyAha22PR1qnXnyVVwiq2PWQk2gIGWKYBFAHMgmZqjIctQRY465Az_xO8pUbLZkA_zCgKK7vrWHbXEw",
  puneetBhagchandani: "https://lh3.googleusercontent.com/aida-public/AB6AXuCJhEVZMNFSYdF3M28xpUh3e-pm72i-2cz3GrVWSjC7o92hUnrwRFvxW3giFfioniUZEM6L4lAiEgFgNvliNuNZJkUcA7WEnWAVxwaLf6_VrxdG8tXNdOm3H71TSnooqdlXuRxUd_u403E_5QsweZmG9wG7IzMNjLrJG3SSoytPKtABKnztPRv_7YJ8ziXyCFgxkiaV3ekIR8ylSlnYdsyw1lrR6YEN0kSXH_pCGdAuElu3KgW9r10ihg",
  map: "https://lh3.googleusercontent.com/aida-public/AB6AXuBvj6QnJ2gkFTg8BUFLm_VjCwY6Qdq-EA5IM5aaCO3SF6lIReobecVbzk_MaXv7IO-YLwnMPgEqPHi05eV2sIKy6lHYkLISS1jJFJqW4-qnsZhBTA4tqQFvG0RLkkBRBnuqWJTgmaEKGO5Qs-MIJAkc7mZUVIQ6VPODiypPFIS0cx-ngV2isbo5KEP2PhmuWM7x3_31Rfc1jP1geMMWJSOCaMe9y_06qWjOZ8M0SINWUnftNVRlaVxeuQ"
};

export const FEATURED_DESTINATIONS: Destination[] = [
  {
    id: "botswana",
    name: "Botswana Safari",
    subtitle: "Pristine Okavango Delta wilderness featuring private bush charters, low-impact luxury tented suites, and guided delta navigations.",
    duration: "7 Days • 6 Nights",
    category: "Wilderness & Conservation",
    region: "Southern Africa",
    bestSeason: "May to October (Dry Season)",
    imageUrl: ASSETS.botswana,
    description: "An unhurried journey through Botswana's legendary Okavango Delta and Linyanti Reserve. Experience intimate private concessions with world-class naturalists, chartered Cessna Grand Caravan flights between ultra-luxury tented camps, and private mokoro canoe trails beneath undisturbed Southern skies.",
    highlights: [
      "Exclusive private aviation transfers between remote bush airstrips",
      "Five-star tented camp buyout with private plunge pools and stargazing decks",
      "Guided Okavango floodplains tracking of leopards, lions, and African wild dogs",
      "Sundowner river cruises with dedicated private field sommelier"
    ],
    itinerary: [
      { day: "Day 1-2", title: "Arrival in Maun & Fly-in to Okavango Delta", detail: "Private chartered flight over the winding channels. Check-in to luxury tented sanctuary with private butler." },
      { day: "Day 3-4", title: "Deep Delta Tracking & Mokoro Excursions", detail: "Early morning big game tracking, followed by silent mokoro excursions through papyrus channels." },
      { day: "Day 5-6", title: "Linyanti Wilderness & Night Drives", detail: "Charter transfer north to Linyanti. Night safaris spotting nocturnal predators and boma fireside feast." },
      { day: "Day 7", title: "Scenic Delta Fly-Out & Departure", detail: "Final morning sunrise game drive, followed by charter flight return to Maun for international connections." }
    ],
    tags: ["Wilderness Concessions", "Private Charters", "Okavango Delta", "Ultra-Luxury Tents"]
  },
  {
    id: "santorini",
    name: "Santorini Coast",
    subtitle: "Exclusive catamaran charters, volcanic caldera hideaways, and curated private tastings through Santorini’s ancient terraced vineyards.",
    duration: "5 Days • 4 Nights",
    category: "Mediterranean Haven",
    region: "Cyclades, Greece",
    bestSeason: "April to October",
    imageUrl: ASSETS.santorini,
    description: "Experience the dramatic geology and refined Cycladic architecture of Oia and Imerovigli. From chartered private lagoon catamarans gliding across the sapphire caldera to cliffside private estates with personal chefs, every moment is tuned for unhurried elegance.",
    highlights: [
      "Cliffside caldera luxury estate buyout with infinity caldera views",
      "Full-day private crewed Lagoon 52 catamaran sail around volcanic hot springs",
      "Private sommelier-led vertical tastings of rare Assyrtiko at ancient ungrafted vineyards",
      "Helicopter island hopping directly between Mykonos and Santorini heli-pads"
    ],
    itinerary: [
      { day: "Day 1", title: "VIP Airport Meet & Cliffside Check-in", detail: "Helicopter or luxury Mercedes Maybach transfer to Oia private cliffside villa with welcoming Champagne reception." },
      { day: "Day 2", title: "Private Caldera Catamaran Charter", detail: "Full day private sail, snorkeling secluded coves, fresh seafood prepared on-board by your private chef." },
      { day: "Day 3", title: "Ancient Akrotiri & Terraced Vineyards", detail: "Curated archaeological private access followed by sunset cellar tasting at Santo and Sigalas estates." },
      { day: "Day 4", title: "Fira to Oia Ridge Walk & Private Dinner", detail: "Panoramic caldera rim walk accompanied by your concierge, culminating in a cliff-edge candlelit dinner." },
      { day: "Day 5", title: "Aegean Sunrise & Helicopter Departure", detail: "Relaxed breakfast overlooking the caldera before seamless private helicopter transfer." }
    ],
    tags: ["Caldera Buyout", "Private Catamaran", "Assyrtiko Vineyards", "VIP Concierge"]
  },
  {
    id: "iceland",
    name: "Iceland Northern Lights",
    subtitle: "Geothermal private lagoons, customized glacier expeditions by modified super-jeep, and private sky-domes beneath celestial auroras.",
    duration: "6 Days • 5 Nights",
    category: "Arctic Wonder",
    region: "Nordic / North Atlantic",
    bestSeason: "September to April (Aurora Season)",
    imageUrl: ASSETS.iceland,
    description: "An evocative winter expedition into Iceland's untamed volcanic landscapes. Venture into crystal ice caves by custom modified Arctic trucks, relax in geothermal springs reserved entirely for your group, and sleep beneath the ethereal aurora borealis in bespoke glass architectural suites.",
    highlights: [
      "Exclusive evening buyout of private silica geothermal lagoon",
      "Modified Super-Jeep traverse across Langjökull ice cap and blue ice caves",
      "Architectural glass pavilion accommodation with automated Aurora wake-up alerts",
      "Private helicopter fly-over of active volcanic fissure fields"
    ],
    itinerary: [
      { day: "Day 1", title: "Keflavík VIP Arrival & Private Retreat Lagoon", detail: "Meet-and-greet on the tarmac, private transit to Silica Retreat Hotel, private lagoon bathing." },
      { day: "Day 2", title: "Golden Circle by Helicopter & Snowmobiling", detail: "Aerial views of Gullfoss and Þingvellir, landing on glacier surface for private snowmobile excursion." },
      { day: "Day 3", title: "South Coast Waterfalls & Black Sand Basalt", detail: "Explore Seljalandsfoss and Reynisfjara private coastline before arriving at your glass-roofed eco-lodge." },
      { day: "Day 4", title: "Vatnajökull Crystal Ice Cave Expedition", detail: "Venture deep into jewel-blue subterranean glacier caverns with certified high-alpine guides." },
      { day: "Day 5", title: "Reykjavik Design & Nordic Michelin Dining", detail: "Return to capital, architecture tour of Harpa, and private dining room reservation at Dill." },
      { day: "Day 6", title: "Morning Geothermal Thermal Spa & Departure", detail: "Final restorative mineral soak before private expedited transfer to Keflavík International." }
    ],
    tags: ["Super-Jeep Glaciers", "Private Geothermal Lagoon", "Glass Sky Domes", "Aurora Alert Service"]
  },
  {
    id: "tuscany",
    name: "Tuscan Borgo Buyout",
    subtitle: "Private 16th-century Chianti estate buyout, truffle foraging with master tartufai, and vintage Alfa Romeo rallies.",
    duration: "5 Days • 4 Nights",
    category: "Heritage & Culinary",
    region: "Tuscany, Italy",
    bestSeason: "May to October",
    imageUrl: ASSETS.corporateOffsites,
    description: "Complete buyout of a restored medieval hamlet in the hills of Siena. Tailored for executive conclaves and multigenerational celebrations with private Michelin-starred chef residencies and estate olive groves.",
    highlights: [
      "100% exclusive privatized medieval Borgo estate with 35 luxury suites",
      "Vintage classic car rally through Val d'Orcia cypress avenues",
      "Private estate wine cellar banquet pairing rare Brunello di Montalcino vintages",
      "Helicopter transfers from Florence or Rome directly onto estate lawn"
    ],
    itinerary: [
      { day: "Day 1", title: "Arrive Florence & Borgo Welcome Banquet", detail: "Helicopter transit to the estate, courtyard reception with Tuscan string quartet and sommelier." },
      { day: "Day 2", title: "Val d'Orcia Vintage Car Rally", detail: "Self-drive classic Alfa Romeos and Spiders through UNESCO rolling hills with support team." },
      { day: "Day 3", title: "Truffle Foraging & Michelin Cooking Masterclass", detail: "Truffle hunt in private oak woods followed by pasta making in the historic estate kitchen." },
      { day: "Day 4", title: "Chianti Vineyards & Gala Olive Grove Dinner", detail: "Private cellar tours and an unforgettable 5-course black-tie gala dinner under fairy lights." },
      { day: "Day 5", title: "Morning Espresso & Private Transfer", detail: "Slow morning breakfast overlooking morning mist, executive departure via private transport." }
    ],
    tags: ["Estate Buyout", "Vintage Car Rally", "Brunello Cellars", "Executive Conclave"]
  },
  {
    id: "kyoto",
    name: "Kyoto Imperial Ryokan Retreat",
    subtitle: "Century-old private sukiya ryokan buyouts, closed-door temple tea ceremonies, and bamboo grove sound journeys.",
    duration: "6 Days • 5 Nights",
    category: "Zen & Cultural Mastery",
    region: "Kyoto & Nara, Japan",
    bestSeason: "March to May (Sakura) & October to November (Autumn Foliage)",
    imageUrl: ASSETS.leisureHolidays,
    description: "An intimate voyage into Japan's spiritual heartland. Access centuries-old Zen temples after public hours, learn meditation from head abbots, and rest in pristine tatami sanctuaries with private hinoki cypress onsen baths.",
    highlights: [
      "Exclusive buyout of an 8-room historic ryokan with private garden",
      "After-hours private contemplation inside Daitoku-ji Zen temples",
      "Personal tea ceremony with 15th-generation Urasenke grand master",
      "Curated Kaiseki dinners with geiko and maiko cultural discourse"
    ],
    itinerary: [
      { day: "Day 1", title: "VIP Shinkansen Arrival in Kyoto", detail: "Dedicated luggage courier to ryokan, private check-in with seasonal wagashi and matcha." },
      { day: "Day 2", title: "Private Access to Zen Gardens", detail: "Early morning private contemplation of Ryoan-ji rock garden before grounds open." },
      { day: "Day 3", title: "Arashiyama Bamboo Forest & River Cruise", detail: "Private wooden boat gliding down Oi River with traditional bento luncheon." },
      { day: "Day 4", title: "Master Artisan Workshops", detail: "Meet living national treasures in blade forging and Kintsugi ceramic repair." },
      { day: "Day 5", title: "Grand Kaiseki Feast in Gion", detail: "Exclusive multi-course Michelin 3-star Kaiseki in a private riverside teahouse." },
      { day: "Day 6", title: "Depart for Tokyo or Kansai Airport", detail: "Expedited private executive van transfer with English-speaking concierge." }
    ],
    tags: ["Ryokan Buyout", "Private Temple Access", "Hinoki Onsen", "Kaiseki Mastery"]
  }
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: "fullerton",
    client: "Fullerton India",
    role: "VP Human Resources & Executive Operations",
    executive: "Sunil Raghavan",
    title: "250-Delegate Annual Leadership Conclave",
    pax: 250,
    location: "Singapore & Sentosa Island",
    quote: "Around D World transformed our annual leadership summit into an effortless masterclass in hospitality. From chartered transit to seamless on-ground protocols in Singapore, their 18 years of operational mastery was evident at every turn.",
    metrics: ["250 Key Executives", "Zero Protocol Friction", "99.4% Participant Satisfaction", "48-Hour Rapid Visa Clearance"],
    challenge: "Moving 250 senior executives from 14 Indian cities into Singapore on staggered commercial flights, requiring synchronized customs clearances, dual-venue staging, and a private high-security gala.",
    solution: "Around D World chartered dedicated partner transit, stationed an 18-person on-ground Hindi & English executive concierge, and orchestrated an exclusive waterfront gala at Capella Sentosa."
  },
  {
    id: "kotak",
    client: "Kotak Mahindra Bank",
    role: "Head of Wealth Management",
    executive: "Ananya Deshmukh",
    title: "Top Performers Global Incentive & Retreat",
    pax: 85,
    location: "Tuscany & Florence, Italy",
    quote: "The attention to detail was staggering. An entire medieval Borgo privatized for our wealth leaders, with classic car rallies and bespoke culinary events that our delegates still speak of years later.",
    metrics: ["85 Private Wealth Leaders", "100% Estate Privatization", "3 Michelin Chefs Contracted", "Private Air Charters"],
    challenge: "High-net-worth leadership expecting uncompromising luxury, complete discretion, and immersive cultural exclusivity beyond traditional tourist circuits.",
    solution: "Negotiated complete buyout of Borgo Santo Pietro estate, organized private police escorts for a vintage Alfa Romeo rally, and secured private access to the Uffizi Gallery after closing."
  },
  {
    id: "tata",
    client: "Tata Communications",
    role: "Global Corporate Communications",
    executive: "Rajeshwar Rao",
    title: "Worldwide Strategy Forum & Innovation Summit",
    pax: 180,
    location: "Zurich & Interlaken, Switzerland",
    quote: "Executing a tech conclave in the Swiss Alps with zero delays across charter trains and mountain cable cars requires surgical discipline.  Rahul Sharma and Rohan Varma delivered perfection.",
    metrics: ["180 Global Delegates", "Chartered Panoramic Alpine Train", "Carbon-Neutral MICE Certification", "100% On-Time Agenda"],
    challenge: "Strict ESG governance mandates requiring audited carbon-neutral logistics, private transit through the Bernese Oberland, and high-security audiovisual infrastructure.",
    solution: "Chartered an entire SBB panoramic Alpine train exclusively for Tata delegates, coordinated with Swiss Tourism for zero-waste catering, and delivered 100% carbon-offset certification."
  },
  {
    id: "vip",
    client: "VIP Industries",
    role: "Director of National Sales",
    executive: "Vikram Singhania",
    title: "Mega Dealer & Distributor National Convention",
    pax: 420,
    location: "Bangkok & Hua Hin, Thailand",
    quote: "Managing 420 trade partners with complex dietary preferences, entertainment requirements, and logistics was seamless with Around D World. Their team was invisible yet omnipresent.",
    metrics: ["420 Key Trade Partners", "3 Dedicated Charter Aircraft", "100% Pure Jain & Vegetarian Kitchens", "Massive AV Stage Production"],
    challenge: "High-volume delegate movement requiring 3 chartered aircraft, strict Jain and vegetarian culinary supervision by top Indian chefs flown to Thailand, and complex awards staging.",
    solution: "Took over an entire beachfront Dusit Thani resort, flew in specialized Mumbai Maharaj chefs, and managed round-the-clock liaison desks at Suvarnabhumi Airport."
  }
];

export const GLOBAL_COUNTRIES = [
  { region: "Europe & Mediterranean", countries: ["Greece", "Italy", "Switzerland", "France", "Spain", "Iceland", "United Kingdom", "Portugal", "Norway", "Finland", "Austria", "Croatia", "Montenegro", "Germany"] },
  { region: "Africa & Indian Ocean", countries: ["Botswana", "Kenya", "Tanzania", "South Africa", "Seychelles", "Mauritius", "Namibia", "Rwanda", "Zambia", "Zimbabwe", "Morocco", "Egypt"] },
  { region: "Asia & Middle East", countries: ["United Arab Emirates", "Singapore", "Japan", "Vietnam", "Thailand", "Indonesia (Bali)", "Maldives", "Oman", "Saudi Arabia", "Turkey", "Uzbekistan", "Sri Lanka", "Bhutan"] },
  { region: "The Americas & Polar", countries: ["United States", "Canada", "Argentina (Patagonia)", "Chile", "Peru", "Costa Rica", "Brazil", "Antarctica Expeditions", "Arctic Svalbard", "Greenland"] },
  { region: "Australasia & Pacific", countries: ["New Zealand", "Australia", "Fiji", "French Polynesia (Bora Bora)", "Papua New Guinea"] }
];
