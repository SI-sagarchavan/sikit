import type { ComponentType } from "react";

declare global {
  interface Window {
    AcmeCore: Record<string, ComponentType<Record<string, unknown>>>;
  }
}

export {};
