export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

const Button = ({ children, ...other }: ButtonProps): JSX.Element => {
  return (
    <button type="button" {...other}>
       rendered from lib{children}
    </button>
  );
}

Button.displayName = "Button";

export { Button};