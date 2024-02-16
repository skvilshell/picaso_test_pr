import { type HTMLAttributes, forwardRef } from "react";
import s from './button.module.css'
import clsx from "clsx";

export interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(({ className, children, ...props }, ref) => {
   return (
      <button
         className={clsx([s.root, className])}
         {...props}
         ref={ref}
      >
         {children}
      </button>
   )
})

Button.displayName = "Button"
export { Button }