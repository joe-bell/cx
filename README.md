> ⚠️ **This project has been deprecated in favour of [`cva`](https://github.com/joe-bell/cva)**

<h1 align="center">
  cx 🔗
</h1>

<p align="center">
  <strong>
    Concatenate your classes (with shortcuts)
  </strong>
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/@joebell/cx">
    <img alt="NPM Version" src="https://badgen.net/npm/v/@joebell/cx" />
  </a>
  <a href="https://www.npmjs.com/package/@joebell/cx">
    <img alt="Types Included" src="https://badgen.net/npm/types/@joebell/cx" />
  </a>
  <a href="https://bundlephobia.com/result?p=@joebell/cx@0.1.0">
    <img alt="Minizipped Size" src="https://badgen.net/bundlephobia/minzip/@joebell/cx" />
  </a>
  <a href="https://github.com/joe-bell/cx/blob/main/LICENSE">
    <img alt="MIT License" src="https://badgen.net/github/license/joe-bell/cx" />
  </a>
  <a href="https://www.npmjs.com/package/@joebell/cx">
    <img alt="NPM Downloads" src="https://badgen.net/npm/dm/@joebell/cx" />
  </a>
  <a href="https://twitter.com/joebell_">
    <img alt="Follow @joebell_ on Twitter" src="https://img.shields.io/twitter/follow/joebell_.svg?style=social&label=Follow" />
  </a>
</p>

<br/>

**`cx`** is a <small><strong>tiny</strong></small> function that mimics and extends the popular [`classnames`][classnames] utility with **"shortcuts"** to re-use common classes (with TypeScript autocompletion)

> 💡 Works especially nicely with [Tailwind IntelliSense][tw]

## Setup

1. Install the package via your favourite package manager:

   ```sh
   npm i @joebell/cx
   ```

2. Create a custom `cx` function for later use.

   Common styles can be defined in the `shortcuts` and accessed by it's `"key"` for re-use later.

   > ⚠️ **FYI**: At this point in time, your shortcuts must be a flat object with no nested keys.

   ```ts
   // styles/index.ts
   import { createCx } from "@joebell/cx";

   const shortcuts = {
     // Components
     "c-container": ["block", "max-w-5xl", "mx-auto", "px-4"],
     // Utilities
     "u-border": ["border-dashed", "border-black"],
   };

   export const cx = createCx(shortcuts);
   ```

3. Import `cx` into your component or layout.

   **For example, in React.js:**

   ```tsx
   // pages/index.tsx
   import { cx } from "../styles";

   const Page: React.FC = ({ children }) => (
     <main className={cx("c-container", "mt-4")}>{children}</main>
   );
   ```

   _returns…_

   ```html
   <main class="block max-w-5xl mx-auto px-4 mt-4">…</main>
   ```

   > 💡 **Tip**: If you're having issues with [Tailwind IntelliSense][tw] in VSCode, try reloading the window

## Acknowledgements

Without these projects/people, this project wouldn't exist…

- [**classnames** - Jed Watson][classnames]

[classnames]: https://github.com/JedWatson/classnames
[tw]: https://github.com/tailwindlabs/tailwindcss-intellisense
