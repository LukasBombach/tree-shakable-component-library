import { configure } from "@storybook/react";

const loader = require.context("../stories", true, /\.stories\.tsx?$/);

configure(loader, module);
