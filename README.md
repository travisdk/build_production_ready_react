# Firestock

Firestock is a small image gallery built with React and Firebase. Users sign in with Google, upload images and browse the shared gallery.

I built the project while following the LinkedIn Learning course *Build Production-Ready Apps in React*, and later moved it from Create React App to Vite.

## Features

* Google sign-in with Firebase Authentication
* Image upload to Firebase Cloud Storage with a preview in the form
* Image data stored in Cloud Firestore
* Gallery with a detail page for each image
* Title search that filters the loaded images in the browser
* Routes for signed-in users only (`/stockimages` and `/profile`)
* Not Found page for unknown routes

## Tech stack

* **UI:** React 18, function components and hooks
* **Language:** JavaScript (JSX)
* **Build tool:** Vite
* **Routing:** React Router 6
* **State:** Context API with `useReducer`
* **Backend services:** Firebase Authentication, Cloud Firestore and Cloud Storage
* **Styling:** Bootstrap 5 (loaded from CDN) and plain CSS

## How it is built

* **`src/components`:** UI components
* **`src/context`:** shared state for authentication and image data
* **`src/handlers`:** Firebase calls, kept apart from the UI
* **`src/lib`:** Firebase setup, configured with environment variables

The full image list is kept apart from the filtered list, so search needs no new database reads. `useMemo` and `useCallback` are used for derived values and to keep the Context value stable.

## Getting started

You need Node.js and your own Firebase project with Authentication (Google), Firestore and Storage enabled.

1. Clone the repository and install the packages:

   ```bash
   git clone https://github.com/travisdk/build_production_ready_react.git
   cd build_production_ready_react
   npm install
   ```

2. Copy `.env.example` to `.env` and fill in your Firebase values.

3. Start the development server:

   ```bash
   npm run dev
   ```

## Scope

This is a learning project. It has no automated tests yet.
