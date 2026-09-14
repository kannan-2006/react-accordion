# React Accordion

A simple accordion component built with React.

It supports both single selection and multi-selection. The content is rendered from a separate data file, so adding new accordion items is easy.

## Features

* Single item selection
* Multiple item selection
* Click to open and close an item
* Data-driven accordion items
* Simple React state management
* Clean and simple CSS

## Tech Stack

* React
* JavaScript
* CSS
* Vite

## How it works

By default, the accordion works in single-selection mode. Opening one item closes the previously opened item.

You can enable multi-selection using the button at the top. In this mode, multiple items can stay open at the same time.

The component uses `useState` to keep track of the selected item and the items selected in multi-selection mode.

The questions and answers are stored separately in `data.js` and rendered using `.map()`.

## Getting Started

Clone the repository:

```bash
git clone https://github.com/your-username/react-accordion.git
```

Move into the project:

```bash
cd react-accordion
```

Install the dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Then open the local URL shown in the terminal.

## Project Structure

```text
src/
├── data.js
├── index.css
└── index.jsx
```

## Example Data

The accordion currently contains basic React questions covering topics like components, JSX, props, `useState`, `useEffect`, `useRef`, and Context API.

