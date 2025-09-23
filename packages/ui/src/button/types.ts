import * as z from "zod";
import { ButtonStyleProps, ButtonStyleSchema } from "./button-styles";
import { createJsonSchema, stringify } from "../utility";

export const ButtonSchema = z.object({
    disabled: z.boolean().optional(),
    type: z.enum(["button", "submit", "reset"]).default("button").optional(),
}).merge(ButtonStyleSchema).describe(stringify(["variant", "size"]))

interface BaseButtonProps {
    children?: React.ReactNode;
}

export type ButtonSchemaType = z.infer<typeof ButtonSchema>

export type ButtonProps = ButtonSchemaType & ButtonStyleProps & BaseButtonProps

export const ButtonJsonSchema = createJsonSchema(ButtonSchema)