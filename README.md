# Retail Web App For QA

A React + Vite retail storefront demo focused on QA and user-flow validation.

## Overview
This project is a single-page e-commerce experience with:
- Product browsing and category filtering
- Product detail pages
- Cart drawer with quantity updates and subtotal
- Login/logout with seeded demo users
- Protected checkout and order confirmation routes

The app uses in-memory product data and localStorage-backed auth state for predictable testing.

## Tech Stack
- React 19
- React Router DOM 7
- Vite 7
- ESLint 9

## Project Structure

```text
src/
  components/        UI components (home, product, cart, auth, checkout)
  context/           Auth and cart context providers
  data/              Static product catalog and derived categories
  App.jsx            Router + app shell
  main.jsx           App entry point
```

## Routes
- `/` Home page (hero, slideshow, category sidebar, product grid)
- `/product/:id` Product details
- `/login` Sign in page
- `/logout` Signs out and redirects home
- `/checkout` Protected route (requires login)
- `/order-confirmation` Protected route (requires login)

> Router and Vite are configured with the base path `/RetailWebAppForQA/` for repository-path deployments (for example GitHub Pages).

## Demo Credentials
Use either seeded account:
- `alice / password1`
- `bob / password2`

## Getting Started

### Prerequisites
- Node.js 18+
- npm 9+

### Install
```bash
npm install
```

### Run Dev Server
```bash
npm run dev
```

### Build Production Assets
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

### Lint
```bash
npm run lint
```

## QA Notes
- Auth state is stored in localStorage key `rwa_user`.
- Cart state is session-only (in-memory context) and resets on refresh.
- Checkout submission is mocked (1.5s delay) and then redirects to order confirmation.
- Product catalog is static (`src/data/products.js`) and currently contains 20 products across multiple categories.

## Deployment Note
Because `vite.config.js` sets `base: '/RetailWebAppForQA/'`, keep that value aligned with your deployment path. If you deploy at the domain root, update both:
- `vite.config.js` base value
- `Router basename` in `src/App.jsx`
