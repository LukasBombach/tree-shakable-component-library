# poc-figma-storybook-next

Repository to evaluate using Next with Storybook and Figma. The setup is a monorepo with 3 packages

- Storybook
- A UI library (Braid Design System)
- An app (A Next app)

For the UI library we just use a clone of the _Braid Design System_ just so we have something wo work on.

## Installation

```bash
git clone https://github.com/stroeer/poc-figma-storybook-next
cd poc-figma-storybook-next
yarn
```

> ##### Info
>
> The Braid Design System cannot handle monorepos 🙄 and injects
> some files into the root directory. We added those files to the
> `.gitignore` so we don't have unstaged files everytime we install
> Unfortunately, this also messes with the prettier config, but hey
> it's just a POC
