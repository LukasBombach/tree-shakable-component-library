# Tree-shakable component library with TypeScript, StoryBook & Next.js

This repository is the demonstration of my dev.to article

👉 https://dev.to/lukasbombach/how-to-write-a-tree-shakable-component-library-4ied

demonstrating how to implement a tree-shakable component library (with TypeScript, StoryBook & Next.js
all in a Monorepo).

For questions you can find me on twitter as [@luke_schmuke](https://twitter.com/luke_schmuke/)

## Install

```bash
git clone https://github.com/LukasBombach/tree-shakable-component-library
cd tree-shakable-component-library
yarn
```

## Run

This MonoRepo has 2 packages

- [`app`](./packages/app) and
- [`ui-library`](./packages/ui-library)

The `app` is a Next.js app that _consumes_ the `ui-library` in the [`index.tsx` page](./packages/app/pages/index.tsx) while the `ui-library` provides bundled [components](./packages/ui-library/components).

You can run the app by switching to the app folder and run `yarn dev` or `yarn start`<sup>\*</sup><br />
<sub>\* both packages have `postinstall` script that runs `yarn build` in each project</sub>

### Run the app

```bash
cd packages/app
yarn dev
```

You can also run StoryBook from within the `ui-library`

### Run StoryBook

```bash
cd packages/ui-library
yarn storybook
```

You can change or add new components by running

### Develop new components

```bash
cd packages/ui-library
yarn build -w
```

in another terminal you can run the app in parallel and it will auto-update with hot-module-reloading

```bash
cd packages/app
yarn dev
```

## See the tree-shaking

You can very simple see that the app actually does tree-shake your code by opening this project in a code
editor and searching all files in `packages/app/.next` and

1. searching for the string `I SHOULD BE HERE`, which should be found.
   This string is part of the [`Button`](./packages/ui-library/components/Button/Button.tsx) component
   which has been loaded into the app
2. then search for the string `I MUST NOT BE HERE`
   This string is part of the [`Link`](./packages/ui-library/components/Link/Link.tsx) component which has
   **not** been loaded into the app even though it has been bundled in the ui library and should not be
   bundled in the app.
3. check out the file `packages/ui-library/lib/index.esm.js` which is the bundled file of the ui-library which
   includes all components
