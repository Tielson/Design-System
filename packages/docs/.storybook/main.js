/** @type { import('@storybook/react-vite').StorybookConfig } */
const config = {
  stories: [
    "../src/pages/**/*.mdx",
    "../src/stories/**/*.stories.tsx",
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-docs",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-a11y",
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
  viteFinal:(config, {configType})=> {
    if (configType === 'PRODUCTION'){
      config.base = '/Design-System/'
    }

    return config
  }
};

export default config;
