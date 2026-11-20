import type { UseFormReturn } from "react-hook-form";

/**
 * The shared field components work on any form shape (the Zod schema guarantees
 * field names), so forms are handed to them loosely typed.
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type AnyForm = UseFormReturn<any>;
