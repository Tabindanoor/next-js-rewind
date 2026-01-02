import { ReactNode } from "react";

type CardProps = {
  children: ReactNode;
  className?: string;
  padding?: "sm" | "md" | "lg";
};

const paddingStyles = {
  sm: "p-4",
  md: "p-6",
  lg: "p-8",
};

export default function Card({
  children,
  className = "",
  padding = "md",
}: CardProps) {
  return (
    <div
      className={`rounded-lg border border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-800 ${paddingStyles[padding]} ${className}`}
    >
      {children}
    </div>
  );
}
