# ShoppyGlobe E Commerce Application (React + Vite)

This project is a modern, responsive e-commerce web application built with React and Vite. It features a dynamic product catalog, detailed product views, a fully functional shopping cart managed by Redux, and a simulated checkout process.

## Features
* **Product Discovery:** Browse a wide range of products fetched from the DummyJSON API.
* **Search & Filter:** Real-time product searching powered by Redux state.
* **Dynamic Routing:** Detailed product pages using dynamic route parameters.
* **Shopping Cart:** 
    * Add/Remove items.
    * Modify quantities (with a minimum limit of 1).
    * Persistent state management via Redux.
* **Checkout System:** A dummy checkout form with order summary and automatic cart clearing upon success.
* **Performance Optimized:**
    * **Code Splitting:** Components are loaded lazily using React.lazy andSuspence.
    * **Image Lazy Loading:** Optimized asset loading for better UX.
* **Error Handling:** Custom 404 "Not Found" page and graceful API error management.

## UI & UX
* Fully responsive interface
* Smooth transitions

## Technologies Used
* **Framework:** React v19+
* **Bundler:** Vite
* **Routing:** React Router
* **State Management:** Redux Toolkit & React Redux
* **Styling:** CSS3 (Responsive Design)
* **API:** DummyJSON

## Getting Started

Follow these steps to set up and run the project locally.

### Prerequisites

You need to have **Node.js** and **npm** (Node Package Manager) installed on your machine.

### Installation

### Clone the Repository

```bash
git clone https://github.com/GuduruVinay/ShoppyGlobe-E-Commerce-Application.git
```

Or download the ZIP manually and extract it.

### Install Dependencies

Open the project folder in your terminal :

```bash
cd shoppyglobe-e-commerce-application
npm install
```

This installs React, Vite and required dependencies.

### Run the Development Server

```bash
npm run dev
```

Then open the local server link shown in the terminal, for example :

```bash
http://localhost:5173/
```

The ShoppyGlobe E Commerce Application will now be running !

## GitHub Link

https://github.com/GuduruVinay/ShoppyGlobe-E-Commerce-Application