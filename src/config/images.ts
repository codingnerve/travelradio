/**
 * Photography is sourced from Unsplash (https://unsplash.com/license) and
 * served through next/image. Photographer credit is not legally required but is
 * appreciated; swap any entry for a licensed or self-owned photograph by
 * changing the `id` or `src` here — nothing else in the codebase hard-codes
 * image URLs.
 */

export type Img = { src: string; alt: string };

const u = (id: string, alt: string): Img => ({
  src: `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=2000&q=80`,
  alt,
});

export const images = {
  // Hero + flights
  heroAirport: u(
    "1542296332-2e4473faf563",
    "A passenger aircraft on the apron at sunset beside an airport jet bridge",
  ),
  flightsHero: u(
    "1569154941061-e231b4725ef1",
    "A wide-body airliner on the runway in front of an airport terminal",
  ),
  windowWing: u(
    "1488085061387-422e29b40080",
    "Sunset seen over the wing from an aircraft window",
  ),
  wingClouds: u(
    "1436491865332-7a61a109cc05",
    "An aircraft wing above bright clouds",
  ),
  landing: u(
    "1556388158-158ea5ccacbd",
    "An airliner on final approach to a runway with lights",
  ),
  lounge: u(
    "1530521954074-e64f6810b32d",
    "A traveller relaxing in an airport lounge watching a plane take off",
  ),
  traveller: u(
    "1527631746610-bca00a040d60",
    "A traveller with a backpack walking down a narrow old-town street",
  ),
  mapFlatlay: u(
    "1488646953014-85cb44e25828",
    "A paper map, camera and travel notebook laid out on a table",
  ),

  // Destinations
  london: u("1529655683826-aba9b3e77383", "Big Ben and the Houses of Parliament at sunset"),
  newYork: u("1485871981521-5b1fd3805eee", "The Manhattan skyline glowing orange at sunset"),
  dubai: u("1512453979798-5ea266f8880c", "The Dubai skyline and Burj Khalifa at dusk"),
  paris: u("1502602898657-3e91760cbb34", "The Eiffel Tower and the River Seine in Paris"),
  singapore: u("1525625293386-3f8f99389edd", "Aerial view of Marina Bay in Singapore"),
  toronto: u("1507992781348-310259076fe0", "The Toronto skyline and CN Tower across the water at sunset"),
  sydney: u("1506973035872-a4ec16b8e8d9", "Sydney Harbour with the Opera House and city skyline"),
  rome: u("1552832230-c0197dd311b5", "The Colosseum in Rome at dusk"),
  santorini: u("1570077188670-e3a8d69ac5ff", "White-washed buildings on the cliffs of Santorini"),
  bali: u("1537996194471-e657df975ab4", "A Balinese temple reflected in still water"),
  maldives: u("1514282401047-d79a71a590e8", "Overwater villas in a turquoise Maldivian lagoon"),
  tokyo: u("1540959733332-eab4deabeeaf", "A neon-lit shopping street in Tokyo"),
  istanbul: u("1524231757912-21f4fe3a7200", "The Galata Tower above Istanbul rooftops"),
  barcelona: u("1583422409516-2895a77efded", "Aerial view of Barcelona's city grid"),
  amsterdam: u("1534351590666-13e3e96b5017", "A tree-lined canal in Amsterdam"),
  beach: u("1507525428034-b723cf961d3e", "A quiet beach at sunrise"),

  // Hotels
  hotelResort: u("1566073771259-6a8506099945", "A resort hotel with a pool terrace and sun loungers"),
  hotelPool: u("1520250497591-112f2f40a3f4", "A tropical resort pool surrounded by palms"),
  hotelNight: u("1542314831-068cd1dbfeeb", "A luxury hotel lit up beside its pool at dusk"),
  hotelPalms: u("1551882547-ff40c63fe5fa", "A hotel courtyard with palm trees at sunset"),
  hotelRoom: u("1576675784201-0e142b423952", "A bright, modern hotel room with a double bed"),

  // Cars
  carRoad: u("1568605117036-5fe5e7bab0b7", "A car driving along a winding road at golden hour"),
  carDriver: u("1449965408869-eaa3f722e40d", "A driver's hands on the steering wheel at dusk"),
  carEconomy: u("1541899481282-d53bffe3c35d", "A compact hatchback parked on a city street"),
  carSuv: u("1519641471654-76ce0107ad1b", "A white SUV on a wet, open road"),
  carPremium: u("1502877338535-766e1452684a", "A blue coupe parked on a city street"),
  carLuxury: u("1503376780353-7e6692767b70", "A black luxury saloon driving on a city road"),

  // Support
  support: u("1553775282-20af80779df7", "A customer-support headset on a desk beside a laptop"),
} satisfies Record<string, Img>;
