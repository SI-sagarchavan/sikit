import { tv, type VariantProps } from "tailwind-variants/lite";

export const badgeStoryConfig = {
    args: {
        variant: "primary",
    },
    argTypes: {
        variant: {
            control: "select",
            options: ["primary", "secondary", "destructive", "outline", "ghost", "link"],
        },
    },
}

const badgeStyles = tv({
    base: "inline-flex items-center justify-center gap-2 rounded-full text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 px-4 py-2",
    variants: {
        variant: {
            primary: "bg-primary text-primary-foreground hover:bg-primary/90",
            secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/90",
            outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
            ghost: "hover:bg-accent hover:text-accent-foreground",
        },
    },
})

const Badge = ({variant}: VariantProps<typeof badgeStyles>) => {
      const styles = badgeStyles({variant});
  return (
    <div className={styles}>
        <span>Badge</span>
    </div>
  )
}

export default Badge