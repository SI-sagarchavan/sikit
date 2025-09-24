import { buttonStyles } from './button-styles'
import { ButtonProps } from './types';

const Button = ({ variant, size, disabled, children, ...props }: ButtonProps) => {

const styles = buttonStyles({ variant, size, disabled });

  return (
    <button className={styles} disabled={disabled} {...props}>
      {children}
    </button>
  )
}

export default Button