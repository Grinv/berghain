import terser from "@rollup/plugin-terser";
import typescript from "@rollup/plugin-typescript";

const outputDir = "dist";

export default {
  input: "src/index.ts",
  output: [
    {
      dir: outputDir,
      entryFileNames: "[name].js",
      name: "lectera",
      sourcemap: true,
    },
    {
      dir: outputDir,
      format: "cjs",
      entryFileNames: "[name].cjs",
      name: "lectera",
      sourcemap: true,
    },
  ],

  plugins: [typescript(), terser()],
};
