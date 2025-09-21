import { z } from "zod";
import type { DayPickerProps } from "react-day-picker";
import { createJsonSchema, stringify } from "../utility";
import { propertyConfigs } from "./property-configs";

const DisabledObjectSchema = z.object({
  before: z.date(),
  after: z.date(),
dayOfWeek: z.union([z.number(), z.array(z.number())]),
from: z.union([z.date(), z.undefined()]),
});

const DisabledSchema = z.union([
  z.boolean(),
  DisabledObjectSchema,
]);

// Base calendar schema with common props
const BaseCalendarSchema = z.object({
  className: z.string().optional(),
  disabled: DisabledSchema.optional(), 
  showOutsideDays: z.boolean().optional(),
  fixedWeeks: z.boolean().optional().describe(stringify(propertyConfigs.fixedWeeks)),
  numberOfMonths: z.number().optional(),
  hideNavigation: z.boolean().optional().describe(stringify(propertyConfigs.hideNavigation)),
});

// Single mode calendar schema
export const SingleCalendarSchema = BaseCalendarSchema.extend({
  mode: z.literal("single"),
  required: z.boolean().optional(),
  selected: z.date().optional(),
  onSelect: z.function().optional(),
});

// Multiple mode calendar schema
export const MultipleCalendarSchema = BaseCalendarSchema.extend({
  mode: z.literal("multiple"),
  required: z.boolean().optional(),
  selected: z.array(z.date()).optional(),
  onSelect: z.function().optional(),
  min: z.number().optional(),
  max: z.number().optional(),
});

// Range mode calendar schema
export const RangeCalendarSchema = BaseCalendarSchema.extend({
  mode: z.literal("range"),
  required: z.boolean().optional(),
  selected: z.object({
    from: z.date().optional(),
    to: z.date().optional(),
  }).optional(),
  onSelect: z.function().optional(),
});

// Default mode (no mode specified)
export const DefaultCalendarSchema = BaseCalendarSchema.extend({
  mode: z.undefined().optional(),
});

// Union of all calendar schemas
export const CalendarSchema = z.union([
  SingleCalendarSchema,
  MultipleCalendarSchema,
  RangeCalendarSchema,
  DefaultCalendarSchema,
]);

// Infer the Zod type
export type CalendarSchemaType = z.infer<typeof CalendarSchema>;

// Create a type that combines Zod validation with full DayPicker compatibility
export type CalendarProps = CalendarSchemaType & DayPickerProps;

// Export individual schema types for specific use cases
export type SingleCalendarProps = z.infer<typeof SingleCalendarSchema>;
export type MultipleCalendarProps = z.infer<typeof MultipleCalendarSchema>;
export type RangeCalendarProps = z.infer<typeof RangeCalendarSchema>;
export type DefaultCalendarProps = z.infer<typeof DefaultCalendarSchema>;

// Utility function to validate calendar props
export function validateCalendarProps(props: unknown): CalendarSchemaType {
  return CalendarSchema.parse(props);
}

export const CalendarJsonSchema = createJsonSchema(CalendarSchema);