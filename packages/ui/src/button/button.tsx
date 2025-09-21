import { buttonStyles } from './button-styles'
import { ButtonProps } from './types';

const Button = ({ variant, children, ...props }: ButtonProps) => {

const styles = buttonStyles({variant});

  return (
    <div className={styles}>
        <button {...props}>{children}</button>
    </div>
  )
}

export default Button