import { tv, type VariantProps } from 'tailwind-variants/lite';
import { variantsToZod } from '../utility';

export const buttonStyles = tv({
    base: "inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
    variants: {
        variant: {
            primary: "bg-primary text-primary-foreground hover:bg-primary/90",
            secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/90",
            destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
            outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
            ghost: "hover:bg-accent hover:text-accent-foreground",
            link: "text-primary underline-offset-4 hover:underline",
        },
        size: {
            sm: "text-sm",
            md: "text-md",
            lg: "text-lg",
        },
    },
   
});

export const ButtonStyleSchema = variantsToZod(buttonStyles.variants);

export type ButtonStyleProps = VariantProps<typeof buttonStyles>;