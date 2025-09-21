import { defineConfig } from "tsup";
import figlet from "figlet";

export default defineConfig((options) => ({
  entryPoints: ["src/index.ts"],
  format: ["esm", "iife"],
  dts: true,
  globalName: "AcmeCore",
  platform: "browser",
  target: "es2020",
  esbuildOptions: (options) => {
    options.banner = {
      js: `/* ${figlet.textSync("SkyDrop Core")} */`
    };
  },
  ...options,
})); 