import classNames from "classnames";
import { FC } from "react";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  size?: "base" | "lg";
  variant?: "primary" | "secondary";
  as?: React.ElementType;
}

const Button: FC<Props> = ({
  children,
  size = "base",
  variant = "primary",
  as,
  className,
  ...props
}) => {
  const Element = as || "div";

  return (
    <Element
      className={classNames(
        "rounded-xl transition font-bold cursor-pointer border-2 text-center",
        { "px-4 py-1.5 text-base": size === "base" },
        { "px-8 py-3 text-lg": size === "lg" },
        {
          "bg-primary-600 border-primary-600 hover:bg-primary-500 hover:border-primary-400":
            variant === "primary",
        },
        {
          "border-primary-600 hover:border-primary-500":
            variant === "secondary",
        },
        className
      )}
      {...props}
    >
      {children}
    </Element>
  );
};

export default Button;