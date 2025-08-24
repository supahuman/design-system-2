import type { StorybookConfig } from "@storybook/react-vite";
import { mergeConfig } from "vite";
import path from "path";

const config: StorybookConfig = {
  stories: ["../components/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-a11y",
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  viteFinal: async (config) => {
    return mergeConfig(config, {
      resolve: {
        alias: {
          "@": path.resolve(__dirname, "../"),
        },
        extensions: [".js", ".jsx", ".ts", ".tsx"],
      },
      esbuild: {
        tsconfigRaw: {
          compilerOptions: {
            moduleResolution: "node",
            allowSyntheticDefaultImports: true,
          },
        },
      },
    });
  },
  docs: {
    autodocs: "tag",
  },
};

export default config;
