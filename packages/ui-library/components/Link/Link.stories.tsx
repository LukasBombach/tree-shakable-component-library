import React from "react";
import { withDesign } from "storybook-addon-designs";
import Link from "./Link";

export default { title: "Link", component: Link, decorators: [withDesign] };

export const withText = () => <Link>Hello Link</Link>;

withText.story = {
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/NfPcczxt0Verbv5NNvulS8",
    },
  },
};

export const withEmoji = () => <Link>😀 😎 👍 💯</Link>;

withEmoji.story = {
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/NfPcczxt0Verbv5NNvulS8",
    },
  },
};
