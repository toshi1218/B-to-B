import { HTMLAttributes } from "react";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  hover?: boolean;
}

export default function Card({
  hover = false,
  className = "",
  children,
  ...props
}: CardProps) {
  return (
    <div
      className={`bg-white border border-gray-200 rounded-lg p-6 ${hover ? "hover:shadow-md transition-shadow" : ""} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
