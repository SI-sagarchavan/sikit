import { defineConfig } from "tsup";
import figlet from "figlet";

export default defineConfig((options) => ({
  entryPoints: ["src/index.ts"],
  format: ["esm", "iife"],
  dts: true,
  globalName: "AcmeUI",
  platform: "browser",
  esbuildOptions: (options) => {
    options.external = ["react", "react-dom", "react/jsx-runtime"];
    options.banner = {
      js: `/* ${figlet.textSync("SkyDrop UI")} */`
    };
  },
  ...options,
}));
