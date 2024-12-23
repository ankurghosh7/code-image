<div align="center">
<a href="https://github.com/ankurghosh7/code-image">
<img src="public/logo.svg" alt="Logo" width="" height="80">
</a>
<h3 align="center">codeimage.ankurghosh.xyz</h3>
<p align="center">
Code snippets Image Generator! with Dark mode & stylish themes, 🔧 Adjustable padding, 💻 Multi-language syntax highlighting, Perfect for sharing code on socials or docs! 🚀
<br/>
<br/>
<a href="https://code-image.ankurghosh.xyz/">View Demo.</a>  
<a href="https://github.com/ankurghosh7/code-image/issues/new?labels=bug&amp;template=bug_report.md">Report Bug .</a>
<a href="https://github.com/ankurghosh7/code-image/issues/new?labels=enhancement&amp;&template=feature_request.md">Request Feature</a>
</p>
</div>

## 📍 Overview

CodeImage is a code snippet image generator that allows you to create beautiful images of your code snippets. It is perfect for sharing code on social media or documentation. It supports multiple languages and themes, and you can customize the padding to fit your needs.

### Built With

This project was built with the following technologies:

- [Next.js](https://nextjs.org/)
- [React](https://react.dev/)
- [Shadcn/ui](https://ui.shadcn.com/)
- [Typescript](https://www.typescriptlang.org/)
- [Highlight.js](https://highlightjs.org/)
- [Tailwindcss](https://tailwindcss.com/)
- [Radix UI](https://www.radix-ui.com/)
- [react-simple-code-editor](https://www.npmjs.com/package/react-simple-code-editor)
- [html-to-image](https://www.npmjs.com/package/html-to-image)

---

## 📁 Project Structure

```sh
└── code-image/
    ├── public
    │   └── code-image-logo.svg
    ├── src
    │   ├── app
    │   ├── components
    │   │   ├── CodeEditor.tsx
    │   │   ├── CodeImage.tsx
    │   │   ├── CodeImagePreview.tsx
    │   │   ├── CodeImageSettingsDialog.tsx
    │   │   └── CodeImageToolbar.tsx
    ├── services
    │   ├── code-editor.provider.ts
    │   └── code-image.provider.ts
    ├── styles
    │   └── code-editor.css
    ├── types
    │   └── index.d.ts
    ├── utils
    ├── constants.ts
    ├── .gitignore
    ├── .eslintrc.json
    ├── next.config.js
    ├── LICENSE
    ├── README.md
    ├── package-lock.json
    ├── package.json
    ├── postcss.config.mjs
    ├── tailwind.config.js
    └── tsconfig.json
```

## 🚀 Getting Started

### ☑️ Prerequisites

Before getting started with code-image, ensure your runtime environment meets the following requirements:

- **Programming Language:** Node.js (v18.0.0 or higher)

### ⚙️ Installation

1. Clone the code-image main repository:

```sh
❯ git clone https://github.com/ankurghosh7/code-image
```

2. Navigate to the project directory:

```sh
❯ cd code-image
```

3. Install the project dependencies:

**Using `npm`** &nbsp; [<img align="center" src="https://img.shields.io/badge/npm-CB3837.svg?style={badge_style}&logo=npm&logoColor=white" />](https://www.npmjs.com/)

```sh
❯ npm i
```

**Using `bun`** &nbsp; [<img align="center" src="https://img.shields.io/badge/bun-2CA5E0.svg?style={badge_style}&logo=bun&logoColor=white" />](https://bun.sh/)

```sh
❯ bun i
```

**Using `pnpm`** &nbsp; [<img align="center" src="https://img.shields.io/badge/pnpm-2CA5E0.svg?style={badge_style}&logo=pnpm&logoColor=white" />](https://pnpm.io/)

```sh
❯ pnpm i
```

### 🚀 Running the Application

To run the application in development mode, execute the following command:

**Using `npm`** &nbsp; [<img align="center" src="https://img.shields.io/badge/npm-CB3837.svg?style={badge_style}&logo=npm&logoColor=white" />](https://www.npmjs.com/)

```sh
❯ npm run dev
```

**Using `bun`** &nbsp; [<img align="center" src="https://img.shields.io/badge/bun-2CA5E0.svg?style={badge_style}&logo=bun&logoColor=white" />](https://bun.sh/)

```sh
❯ bun dev
```

**Using `pnpm`** &nbsp; [<img align="center" src="https://img.shields.io/badge/pnpm-2CA5E0.svg?style={badge_style}&logo=pnpm&logoColor=white" />](https://pnpm.io/)

```sh
❯ pnpm dev
```

## License

Distributed under the Apache License. See [Mozilla Public License 2.0 License](https://github.com/ankurghosh7/code-image/blob/dev/LICENSE) for more information.
