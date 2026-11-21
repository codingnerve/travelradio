import { images, type Img } from "@/config/images";

export type FlightDeal = { from: string; city: string; price: number; image: Img };
export type HotelDeal = { name: string; location: string; price: number };

export const flightDeals: FlightDeal[] = [
  { from: "JFK", city: "London", price: 399, image: images.london },
  { from: "LAX", city: "Sydney", price: 899, image: images.sydney },
  { from: "JFK", city: "Dubai", price: 549, image: images.dubai },
  { from: "LAX", city: "New York", price: 299, image: images.newYork },
];

export const hotelDeals: HotelDeal[] = [
  { name: "London City Hotel", location: "London, UK", price: 89 },
  { name: "Sydney Harbour Inn", location: "Sydney, AU", price: 129 },
  { name: "Dubai Marina Resort", location: "Dubai, UAE", price: 159 },
  { name: "Manhattan Suite", location: "New York, US", price: 199 },
];
