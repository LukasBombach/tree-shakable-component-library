import { configure } from "@storybook/react";

const loader = require.context("../components", true, /\.stories\.tsx?$/);

configure(loader, module);
