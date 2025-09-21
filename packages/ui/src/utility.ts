import { z } from "zod";
import { tv } from "tailwind-variants/lite";
import zodToJsonSchema, { jsonDescription } from "zod-to-json-schema";

export const stringify = (obj: any) => {
    if(typeof obj === 'string') {
        return obj;
    }
    return JSON.stringify(obj);
}

export const createJsonSchema = (schema: z.ZodSchema) => {
    return zodToJsonSchema(schema, {
        $refStrategy: "root",
        postProcess : jsonDescription
    });
}


export function variantsToZod<
  T extends Record<string, Record<string, string>>
>(variants: T) {
  const shape: Record<string, z.ZodTypeAny> = {};
  for (const [key, values] of Object.entries(variants)) {
    shape[key] = z.enum(Object.keys(values) as [string, ...string[]]).optional();
  }
  return z.object(shape);
}

export const enumToArray = (variants: Record<string, Record<string, string>>) => {
    return Object.values(variants).flat();
}