import { z } from "zod";

/**
 * Shared enquiry validation. The same field schemas are used by the browser
 * forms (via react-hook-form) and by the API route, so rules can never drift.
 */

export const ENQUIRY_TYPES = [
  "flight",
  "hotel",
  "car-rental",
  "radio-support",
  "booking-modification",
  "cancellation",
  "general",
] as const;
export type EnquiryType = (typeof ENQUIRY_TYPES)[number];

export const enquiryTypeLabels: Record<EnquiryType, string> = {
  flight: "Flight Enquiry",
  hotel: "Hotel Enquiry",
  "car-rental": "Car Rental Enquiry",
  "radio-support": "Radio Support",
  "booking-modification": "Booking Modification",
  cancellation: "Cancellation",
  general: "General Enquiry",
};

/* ------------------------------------------------------------------ */
/* Primitives                                                         */
/* ------------------------------------------------------------------ */

const isoDate = /^\d{4}-\d{2}-\d{2}$/;

const toIso = (ms: number) => new Date(ms).toISOString().slice(0, 10);

/** True when the date is today or later (one day of leniency for time zones). */
export function isNotInPast(value: string): boolean {
  return value >= toIso(Date.now() - 24 * 60 * 60 * 1000);
}

const requiredDate = z
  .string()
  .regex(isoDate, "Please choose a date")
  .refine((v) => !Number.isNaN(Date.parse(v)), "Please choose a valid date")
  .refine(isNotInPast, "The date cannot be in the past");

const optionalDate = z
  .string()
  .refine((v) => v === "" || isoDate.test(v), "Please choose a valid date")
  .refine((v) => v === "" || isNotInPast(v), "The date cannot be in the past");

const place = (label: string) =>
  z
    .string()
    .trim()
    .min(2, `Please enter ${label}`)
    .max(80, "That looks too long");

const count = (min: number, max: number, label: string) =>
  z
    .string()
    .regex(/^\d+$/, `Choose ${label}`)
    .refine((v) => Number(v) >= min && Number(v) <= max, `Choose ${label}`);

export const phoneSchema = z
  .string()
  .trim()
  .min(1, "Please enter your telephone number")
  .regex(
    /^\+?[0-9\s().-]{7,20}$/,
    "Enter a valid telephone number, for example +44 20 1234 5678",
  )
  .refine((v) => {
    const digits = v.replace(/\D/g, "").length;
    return digits >= 7 && digits <= 15;
  }, "Enter a valid telephone number, for example +44 20 1234 5678");

const contactFields = {
  fullName: z
    .string()
    .trim()
    .min(2, "Please enter your full name")
    .max(100, "That name looks too long"),
  email: z
    .string()
    .trim()
    .min(1, "Please enter your email address")
    .max(254, "That email address looks too long")
    .pipe(z.email("Enter a valid email address, for example name@example.com")),
  phone: phoneSchema,
  consent: z.literal(true, {
    error: "Please confirm that you agree to us contacting you",
  }),
};

const optionalMessage = z.string().trim().max(2000, "Please keep this under 2000 characters");
const requiredMessage = z
  .string()
  .trim()
  .min(10, "Please tell us a little more (at least 10 characters)")
  .max(2000, "Please keep this under 2000 characters");

/* ------------------------------------------------------------------ */
/* Per-type details                                                   */
/* ------------------------------------------------------------------ */

export const tripTypes = ["one-way", "round-trip", "multi-city"] as const;
export const travelClasses = ["economy", "premium-economy", "business", "first"] as const;

export const travelClassLabels: Record<(typeof travelClasses)[number], string> = {
  economy: "Economy",
  "premium-economy": "Premium Economy",
  business: "Business",
  first: "First",
};

const flightLeg = z.object({
  from: place("a departure city or airport"),
  to: place("a destination city or airport"),
  date: requiredDate,
});

export const flightDetails = z
  .object({
    tripType: z.enum(tripTypes),
    from: place("a departure city or airport"),
    to: place("a destination city or airport"),
    departDate: requiredDate,
    returnDate: optionalDate,
    adults: count(1, 9, "number of adults"),
    children: count(0, 8, "number of children"),
    infants: count(0, 4, "number of infants"),
    travelClass: z.enum(travelClasses),
    legs: z.array(flightLeg).max(4).optional(),
  })
  .superRefine((d, ctx) => {
    if (d.tripType === "round-trip") {
      if (!d.returnDate) {
        ctx.addIssue({ code: "custom", path: ["returnDate"], message: "Choose a return date" });
      } else if (d.returnDate < d.departDate) {
        ctx.addIssue({
          code: "custom",
          path: ["returnDate"],
          message: "Return date must be on or after departure",
        });
      }
    }
    if (d.tripType === "multi-city") {
      if (!d.legs || d.legs.length < 1) {
        ctx.addIssue({
          code: "custom",
          path: ["legs"],
          message: "Add at least one more flight leg",
        });
      }
    }
    if (Number(d.infants) > Number(d.adults)) {
      ctx.addIssue({
        code: "custom",
        path: ["infants"],
        message: "There can be no more infants than adults",
      });
    }
    if (Number(d.adults) + Number(d.children) > 9) {
      ctx.addIssue({
        code: "custom",
        path: ["children"],
        message: "Adults and children together cannot exceed 9",
      });
    }
  });

export const hotelStayTypes = [
  "any",
  "city-hotel",
  "resort",
  "boutique",
  "apartment",
  "family",
] as const;
export const hotelStayTypeLabels: Record<(typeof hotelStayTypes)[number], string> = {
  any: "No preference",
  "city-hotel": "City hotel",
  resort: "Resort",
  boutique: "Boutique hotel",
  apartment: "Serviced apartment",
  family: "Family-friendly stay",
};

export const hotelDetails = z
  .object({
    destination: place("a destination"),
    checkIn: requiredDate,
    checkOut: requiredDate,
    rooms: count(1, 6, "number of rooms"),
    adults: count(1, 12, "number of adults"),
    children: count(0, 8, "number of children"),
    stayType: z.enum(hotelStayTypes),
  })
  .superRefine((d, ctx) => {
    if (d.checkIn && d.checkOut && d.checkOut <= d.checkIn) {
      ctx.addIssue({
        code: "custom",
        path: ["checkOut"],
        message: "Check-out must be after check-in",
      });
    }
  });

export const vehicleCategories = ["any", "economy", "suv", "luxury", "premium"] as const;
export const vehicleCategoryLabels: Record<(typeof vehicleCategories)[number], string> = {
  any: "Not sure yet",
  economy: "Economy",
  suv: "SUV",
  luxury: "Luxury",
  premium: "Premium",
};

export const carDetails = z
  .object({
    pickupLocation: place("a pickup location"),
    dropoffLocation: z.string().trim().max(80, "That looks too long"),
    pickupDate: requiredDate,
    dropoffDate: requiredDate,
    vehicleCategory: z.enum(vehicleCategories),
  })
  .superRefine((d, ctx) => {
    if (d.pickupDate && d.dropoffDate && d.dropoffDate < d.pickupDate) {
      ctx.addIssue({
        code: "custom",
        path: ["dropoffDate"],
        message: "Return date must be on or after pickup",
      });
    }
  });

export const radioIssueTypes = [
  "activation",
  "signal",
  "missing-channels",
  "subscription",
  "other",
] as const;
export const radioIssueLabels: Record<(typeof radioIssueTypes)[number], string> = {
  activation: "Radio activation",
  signal: "Signal or reception problem",
  "missing-channels": "Missing channels",
  subscription: "Subscription enquiry",
  other: "Something else",
};

export const radioDetails = z.object({
  issueType: z.enum(radioIssueTypes),
  vehicleOrDevice: z.string().trim().max(120, "That looks too long"),
});

export const bookingCategories = [
  "new-booking",
  "flight-change",
  "cancellation",
  "refund",
  "passenger-correction",
  "general-support",
] as const;
export type BookingCategory = (typeof bookingCategories)[number];
export const bookingCategoryLabels: Record<BookingCategory, string> = {
  "new-booking": "New Booking",
  "flight-change": "Flight Change",
  cancellation: "Cancellation",
  refund: "Refund Enquiry",
  "passenger-correction": "Passenger Details Correction",
  "general-support": "General Support",
};

/** Which stored enquiry type each Manage Booking category maps to. */
export const bookingCategoryToType: Record<BookingCategory, EnquiryType> = {
  "new-booking": "general",
  "flight-change": "booking-modification",
  cancellation: "cancellation",
  refund: "cancellation",
  "passenger-correction": "booking-modification",
  "general-support": "general",
};

export const bookingDetails = z.object({
  category: z.enum(bookingCategories),
  bookingReference: z
    .string()
    .trim()
    .max(20, "Booking references are usually under 20 characters")
    .regex(/^[A-Za-z0-9-]*$/, "Use letters, numbers and hyphens only"),
  travelDate: z
    .string()
    .refine((v) => v === "" || isoDate.test(v), "Please choose a valid date"),
});

export const generalDetails = z.object({
  topic: z.enum(["travel", "hotel", "car", "radio", "other"]),
});
export const generalTopicLabels = {
  travel: "Flights or travel planning",
  hotel: "Hotels",
  car: "Car rentals",
  radio: "Radio services",
  other: "Something else",
} as const;

/* ------------------------------------------------------------------ */
/* Browser-form schemas (no transport metadata)                       */
/* ------------------------------------------------------------------ */

export const flightForm = z.object({
  ...contactFields,
  message: optionalMessage,
  details: flightDetails,
});
export const hotelForm = z.object({
  ...contactFields,
  message: optionalMessage,
  details: hotelDetails,
});
export const carForm = z.object({
  ...contactFields,
  message: optionalMessage,
  details: carDetails,
});
export const radioForm = z.object({
  ...contactFields,
  message: requiredMessage,
  details: radioDetails,
});
export const bookingForm = z.object({
  ...contactFields,
  message: requiredMessage,
  details: bookingDetails,
});
export const generalForm = z.object({
  ...contactFields,
  message: requiredMessage,
  details: generalDetails,
});

export type FlightFormValues = z.infer<typeof flightForm>;
export type HotelFormValues = z.infer<typeof hotelForm>;
export type CarFormValues = z.infer<typeof carForm>;
export type RadioFormValues = z.infer<typeof radioForm>;
export type BookingFormValues = z.infer<typeof bookingForm>;
export type GeneralFormValues = z.infer<typeof generalForm>;

/* ------------------------------------------------------------------ */
/* API payload                                                        */
/* ------------------------------------------------------------------ */

const meta = {
  sourcePage: z
    .string()
    .max(200)
    .regex(/^\/[A-Za-z0-9\-._~/%?=&#]*$/, "Invalid source page"),
  /** Honeypot: real visitors never fill this in. */
  website: z.string().max(200).optional(),
  /** Epoch ms when the form was first rendered (anti-bot timing check). */
  startedAt: z.number().int().positive(),
  /** Random token to make retries / double-clicks idempotent. */
  clientToken: z.string().regex(/^[A-Za-z0-9-]{16,64}$/),
};

export const enquiryPayloadSchema = z.discriminatedUnion("type", [
  flightForm.extend({ type: z.literal("flight"), ...meta }),
  hotelForm.extend({ type: z.literal("hotel"), ...meta }),
  carForm.extend({ type: z.literal("car-rental"), ...meta }),
  radioForm.extend({ type: z.literal("radio-support"), ...meta }),
  bookingForm.extend({ type: z.literal("booking-modification"), ...meta }),
  bookingForm.extend({ type: z.literal("cancellation"), ...meta }),
  generalForm.extend({ type: z.literal("general"), ...meta }),
]);

export type EnquiryPayload = z.infer<typeof enquiryPayloadSchema>;
