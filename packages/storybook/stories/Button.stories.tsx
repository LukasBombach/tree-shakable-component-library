import React from "react";
import { withDesign } from "storybook-addon-designs";
import { Button } from "@storybook/react/demo";

export default { title: "Button", component: Button, decorators: [withDesign] };

export const withText = () => <Button>Hello Button</Button>;

withText.story = {
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/NfPcczxt0Verbv5NNvulS8",
    },
  },
};

export const withEmoji = () => (
  <Button>
    <span role="img" aria-label="so cool">
      😀 😎 👍 💯
    </span>
  </Button>
);

withEmoji.story = {
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/NfPcczxt0Verbv5NNvulS8",
    },
  },
};
