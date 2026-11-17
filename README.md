# Alharam Feed Catalog

Arabic, right-to-left product catalog for Alharam Feed in Bani Mohammed Sultan, Minya, Egypt.

## Features

- Arabic RTL layout and responsive design
- Product categories and live search
- Product imagery
- WhatsApp, telephone, and Google Maps contact links

## Run locally

Requirements: Node.js 22 or newer and npm.

```bash
npm install
npm run dev
```

Vite prints a local development URL (normally http://localhost:5173).

## Build locally

```bash
npm run build
npm run preview
```

The production website is generated in `dist/`.

## Publish with GitHub Pages

1. Create a new **public** GitHub repository, for example `alharam-feed-catalog`.
2. Upload the contents of this project to the repository root. Do not upload the original Replit workspace or its `.git` directory.
3. Install dependencies locally with `npm install` and commit the generated `package-lock.json` if you want reproducible installs. (The included deployment workflow uses `npm install` and does not require a lockfile.)
4. In GitHub, open **Settings → Pages**.
5. Under **Build and deployment → Source**, select **GitHub Actions**.
6. Push to the `main` branch. The workflow in `.github/workflows/deploy.yml` builds the Vite site and publishes `dist/`.
7. Open the URL shown in **Settings → Pages**. For a repository named `alharam-feed-catalog`, it will normally be `https://YOUR-USERNAME.github.io/alharam-feed-catalog/`.

The workflow automatically sets Vite's base path to the repository name, so images and assets work on a GitHub project page.

## Updating the site

Edit the source files, then commit and push to `main`. GitHub Actions will build and publish the new version automatically.

## Before going public

- Confirm the phone number, WhatsApp number, and Google Maps link in `src/App.tsx`.
- Confirm product names, product availability, and product images.
- Confirm the developer credit in the footer and page title. The supplied Replit source currently credits **Fady Ayman**; it has been preserved rather than silently changed.
- Only publish contact details and business information that the owner has approved.

## Project structure

```text
.
├── .github/workflows/deploy.yml
├── public/
│   ├── products/
│   ├── alharam-logo.jpeg
│   ├── favicon.svg
│   └── robots.txt
├── src/
│   ├── components/error-boundary.tsx
│   ├── App.tsx
│   ├── index.css
│   └── main.tsx
├── index.html
├── package.json
├── package-lock.json
├── tsconfig.json
└── vite.config.ts
```
