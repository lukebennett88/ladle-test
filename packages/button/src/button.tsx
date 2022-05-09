import type { ButtonHTMLAttributes } from "react";
import { forwardRef } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  function Button({ children, ...props }, forwardedRef) {
    return (
      <button ref={forwardedRef} {...props}>
        {children}
      </button>
    );
  }
);
