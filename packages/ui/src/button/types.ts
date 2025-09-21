import * as z from "zod";
import { ButtonStyleProps, ButtonStyleSchema } from "./button-styles";
import { createJsonSchema, stringify } from "../utility";
import { propertyConfigs } from "./property-configs";

export const ButtonSchema = z.object({
    disabled: z.boolean().optional().describe(stringify(propertyConfigs.disabled)),
    type: z.enum(["button", "submit", "reset"]).default("button").optional().describe(stringify(propertyConfigs.type)),
}).merge(ButtonStyleSchema).describe(stringify([propertyConfigs.variant, propertyConfigs.size]))

interface BaseButtonProps {
    children?: React.ReactNode;
}

export type ButtonSchemaType = z.infer<typeof ButtonSchema>

export type ButtonProps = ButtonSchemaType & ButtonStyleProps & BaseButtonProps

export const ButtonJsonSchema = createJsonSchema(ButtonSchema)