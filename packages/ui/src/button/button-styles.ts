import { tv, type VariantProps } from 'tailwind-variants/lite';
import { variantsToZod } from '../utility';

export const buttonStyles = tv({
    base: "inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 px-4 py-2",
    variants: {
        variant: {
            primary: "bg-blue-500 text-primary-foreground hover:bg-blue-600",
            secondary: "bg-purple-500 text-secondary-foreground hover:bg-purple-600",
            destructive: "bg-red-500 text-destructive-foreground hover:bg-red-600",
            outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground hover:border-blue-600",
            ghost: "hover:bg-accent hover:text-accent-foreground",
            link: "text-primary underline-offset-4 hover:underline hover:text-blue-600",
        },
        size: {
            sm: "text-sm",
            md: "text-md",
            lg: "text-lg",
        },
        disabled: {
            true: "opacity-50 cursor-not-allowed",
        },
    },
   
});

export const ButtonStyleSchema = variantsToZod(buttonStyles.variants);

export type ButtonStyleProps = VariantProps<typeof buttonStyles>;