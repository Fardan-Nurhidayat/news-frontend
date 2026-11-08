"use client";

import React from "react";
import { ButtonProps } from "@/types/data";

export function Button({
  children,
  variant = "primary",
  size = "md",
  className = "",
  type = "button",
  disabled,
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-medium transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-600 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer rounded-md";

  const sizeStyles = {
    sm: "px-3 py-1.5 text-xs",
    md: "px-4 py-2 text-sm",
    lg: "px-5 py-2.5 text-base",
  }[size];

  const variantStyles = {
    primary:
      "bg-red-700 hover:bg-red-800 text-white dark:bg-red-600 dark:hover:bg-red-700",
    secondary:
      "bg-gray-100 hover:bg-gray-200 text-gray-900 dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-gray-100",
    outline:
      "border border-gray-300 hover:bg-gray-50 text-gray-800 dark:border-gray-700 dark:text-gray-200 dark:hover:bg-gray-800",
    ghost:
      "text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800",
  }[variant];

  return (
    <button
      type={type}
      disabled={disabled}
      className={`${baseStyles} ${sizeStyles} ${variantStyles} ${className}`.trim()}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
