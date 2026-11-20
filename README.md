# TravelStation

Enquiry-driven travel assistance website (flights, hotels, car rentals, existing-booking
help and radio-services support). Next.js 16 App Router, React 19, TypeScript, Tailwind CSS 4,
Framer Motion, React Hook Form + Zod, MongoDB (Mongoose) and Nodemailer.

> This project uses a Next.js version with breaking changes. Read the bundled docs in
> `node_modules/next/dist/docs/` before changing framework-level code. Cache Components is
> enabled, so request-time data (e.g. `useSearchParams`) must sit inside `<Suspense>`.

## Getting started

```bash
npm install
cp .env.example .env.local   # then fill in values
npm run dev                  # http://localhost:3000
npm run build && npm start   # production
```

Without `MONGODB_URI`, development stores enquiries in `.data/enquiries.jsonl` so forms can be
tested locally. **Production requires `MONGODB_URI`** and returns 503 without it.

## How enquiries work

- Every form posts to `POST /api/enquiries` (`src/app/api/enquiries/route.ts`).
- Validation lives in `src/lib/validation.ts` and is shared by the browser forms and the API.
- Stored in MongoDB (`src/models/Enquiry.ts`) with reference number, type, category, source page.
- Emails (`src/lib/email.ts`): staff notification + customer acknowledgement. A failed email never
  loses a stored enquiry (`emailStatus` records the outcome).
- Spam/abuse protection: honeypot field, minimum fill time, per-IP rate limit (in memory, see
  note below), same-origin check, body-size cap and an idempotency token so double-clicks and
  retries create one enquiry. IP addresses are stored only as a salted hash.
- The site never shows live fares, takes payment or claims a booking was made.

> The rate limiter is in-memory, i.e. per server instance. On multi-instance/serverless
> hosting, back it with a shared store (e.g. Redis/Upstash) or add a WAF rule.

## Where to change things

| What | Where |
| --- | --- |
| Phone, email, company/legal details | `src/config/contact.ts` (**verify authorisation before launch**) |
| Navigation, footer links, site name/URL | `src/config/site.ts` |
| Photography (Unsplash IDs) | `src/config/images.ts` |
| Destinations | `src/config/destinations.ts` |
| FAQ copy | `src/config/faq.ts` |
| Design tokens (colours, fonts, radii) | `src/app/globals.css` |
| Legal page text | `src/app/{privacy-policy,terms,cancellation-policy,refund-policy,disclaimer}` |

## Before going live

1. Confirm the business owner authorises the company details in `src/config/contact.ts`
   (taken from the supplied RadioTravoAssist reference) and the exact legal-entity / trading-name
   relationship.
2. Have the legal pages reviewed by a qualified professional.
3. Set `MONGODB_URI`, SMTP variables and `IP_HASH_SALT` in the hosting environment.
4. Replace or licence-check the stock photography if needed.
5. Consider adding a CAPTCHA (e.g. Cloudflare Turnstile) if spam becomes an issue.
