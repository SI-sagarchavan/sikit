import { defineConfig } from "tsup";
import figlet from "figlet";

export default defineConfig((options) => ({
  entryPoints: ["src/index.ts"],
  format: ["esm", "iife"],
  dts: true,
  globalName: "AcmeCore",
  platform: "browser",
  esbuildOptions: (options) => {
    options.banner = {
      js: `/* ${figlet.textSync("SkyDrop Core")} */`
    };
  },
  ...options,
})); 