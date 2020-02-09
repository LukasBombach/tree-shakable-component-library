import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import typescript from "rollup-plugin-typescript2";
import postcss from "rollup-plugin-postcss";
import postcssPresetEnv from "postcss-preset-env";
import pkg from "./package.json";

export default {
  input: "components/index.ts",
  output: [
    {
      file: pkg.main,
      format: "cjs",
    },
    {
      file: pkg.module,
      format: "es",
    },
  ],
  external: ["react", "react-primitives"],
  plugins: [
    resolve(),
    commonjs(),
    typescript({
      useTsconfigDeclarationDir: true,
    }),
    postcss({
      extract: true,
      modules: true,
      minimize: true,
      sourceMap: true,
      plugins: [postcssPresetEnv()],
    }),
  ],
};
