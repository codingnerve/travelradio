import { contact } from "./contact";

export type Faq = { q: string; a: string };

/**
 * Answers describe an enquiry-based service. Travel Station does not take
 * payments on this website, display live fares or issue tickets online.
 */
export const generalFaqs: Faq[] = [
  {
    q: "How can I request flight booking assistance?",
    a: "Complete the flight enquiry form on the home page or the Flights page with your route, dates and passenger numbers. Our team reviews your request and contacts you with the options they can arrange. You can also call customer support.",
  },
  {
    q: "Can I enquire about international flights?",
    a: "Yes. You can send an enquiry for international one-way, return or multi-city journeys. Availability and fares depend on your route and dates, and our team will discuss them with you directly. No fares are shown on this website.",
  },
  {
    q: "How can I change my existing booking?",
    a: "Use the Manage Booking page, choose the type of change you need and include your booking reference if you have one. Change and cancellation options depend on the fare rules and the supplier of your booking, and our team will explain what is possible. This site does not retrieve booking details automatically.",
  },
  {
    q: "How do I contact customer support?",
    a: `Call ${contact.phoneDisplay}, email ${contact.email}, or use the contact form on the Contact Us page.`,
  },
  {
    q: "Is customer support available 24/7?",
    a: `Our telephone customer support line is available 24/7. Written enquiries are reviewed by the support team and answered as soon as possible.`,
  },
  {
    q: "How do I submit a travel enquiry?",
    a: "Choose the relevant form, such as flights, booking help or general enquiry, complete the required fields and submit it. You will see a confirmation with a reference number, and our team will follow up using the contact details you provided.",
  },
];

export const flightFaqs: Faq[] = [
  {
    q: "Does the Find Flights button show live fares?",
    a: "No. The form sends your trip details to our customer support team as an enquiry. We do not show live fares or availability on this website, and nothing is booked until you have confirmed the arrangements with our team.",
  },
  {
    q: "Can I enquire about multi-city trips?",
    a: "Yes. Select Multi-City in the enquiry form and add each leg of your journey. Our team will review the full itinerary.",
  },
  {
    q: "Can you help if I need to change or cancel a flight?",
    a: "Yes, we can help you understand your options. Use the Manage Booking page. Whether a change or refund is possible depends on the fare conditions of your ticket.",
  },
  {
    q: "Are you affiliated with any airline?",
    a: "No. Travel Station is an independent third-party travel service provider and is not affiliated with or endorsed by any airline.",
  },
  {
    q: "What details should I have ready?",
    a: "Your departure and destination cities, preferred dates, the number of passengers, and the travel class you would like. If the passenger names are known, our team will ask for them when they contact you.",
  },
];

export const hotelFaqs: Faq[] = [
  {
    q: "Can you help me find a hotel anywhere in the world?",
    a: "Our team assists with accommodation enquiries for destinations worldwide. Send your destination and dates and we will tell you what we can arrange.",
  },
  {
    q: "Do I pay anything when I send a hotel enquiry?",
    a: "No. Submitting an enquiry is free and does not commit you to a booking. This website does not collect payments.",
  },
  {
    q: "Can I ask for a specific hotel or area?",
    a: "Yes. Add the hotel name, neighbourhood or any preferences in the message box and the team will take them into account.",
  },
  {
    q: "Can I change or cancel a hotel reservation?",
    a: "Use the Manage Booking page. Whether a reservation can be changed or refunded depends on the rate conditions of that booking.",
  },
];

export const carFaqs: Faq[] = [
  {
    q: "Can I collect a car at the airport?",
    a: "Airport pickup is one of the most common requests. Include your arrival airport and flight time in the enquiry so the team can discuss the options.",
  },
  {
    q: "Can I rent a vehicle for several weeks?",
    a: "Yes, you can enquire about both short-term and long-term rentals. Tell us your pickup and return dates.",
  },
  {
    q: "Which vehicle types can I ask about?",
    a: "You can enquire about economy, SUV, luxury and premium vehicle categories. Availability depends on the location and dates.",
  },
  {
    q: "What do I need to have when collecting a vehicle?",
    a: "Requirements such as driving licence, driver age and a payment card are set by the rental supplier. Our team will let you know what applies to your rental.",
  },
];
