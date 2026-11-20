import { images, type Img } from "./images";

export type Destination = {
  slug: string;
  city: string;
  country: string;
  blurb: string;
  image: Img;
};

/** Destinations our team is frequently asked about. No fares or prices are shown. */
export const destinations: Destination[] = [
  {
    slug: "london",
    city: "London",
    country: "United Kingdom",
    blurb: "Royal parks, riverside walks and world-class museums, all within one well-connected city.",
    image: images.london,
  },
  {
    slug: "new-york",
    city: "New York",
    country: "United States",
    blurb: "Broadway lights, neighbourhood food and skyline views that live up to the reputation.",
    image: images.newYork,
  },
  {
    slug: "dubai",
    city: "Dubai",
    country: "United Arab Emirates",
    blurb: "Modern architecture, desert excursions and a major hub for onward connections.",
    image: images.dubai,
  },
  {
    slug: "paris",
    city: "Paris",
    country: "France",
    blurb: "Café terraces, galleries and long evenings along the Seine.",
    image: images.paris,
  },
  {
    slug: "singapore",
    city: "Singapore",
    country: "Singapore",
    blurb: "Hawker-centre dining, green spaces and a skyline built around the bay.",
    image: images.singapore,
  },
  {
    slug: "toronto",
    city: "Toronto",
    country: "Canada",
    blurb: "A lakeside city of distinct neighbourhoods, markets and day trips to Niagara.",
    image: images.toronto,
  },
  {
    slug: "sydney",
    city: "Sydney",
    country: "Australia",
    blurb: "Harbour ferries, coastal walks and beaches within reach of the city centre.",
    image: images.sydney,
  },
  {
    slug: "rome",
    city: "Rome",
    country: "Italy",
    blurb: "Ancient ruins, piazzas and trattorias layered into every street.",
    image: images.rome,
  },
];

export const experiences = [
  { city: "Santorini", country: "Greece", image: images.santorini, note: "Cliff-top sunsets over the caldera" },
  { city: "Bali", country: "Indonesia", image: images.bali, note: "Temples, rice terraces and slow mornings" },
  { city: "Maldives", country: "Maldives", image: images.maldives, note: "Overwater stays in a turquoise lagoon" },
  { city: "Tokyo", country: "Japan", image: images.tokyo, note: "Neon streets beside quiet shrines" },
  { city: "Istanbul", country: "Türkiye", image: images.istanbul, note: "Two continents, one skyline" },
  { city: "Barcelona", country: "Spain", image: images.barcelona, note: "Architecture, tapas and beaches" },
];
