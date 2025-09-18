import React from "react";

export interface BadgeProps {
  children: React.ReactNode;
}

export function Badge({ children }: BadgeProps): JSX.Element {
  return <div>{children}</div>;
}

Badge.displayName = "Badge";