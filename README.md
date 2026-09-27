# React Intro Exercise

Welcome to the react intro exercise. You will learn how react works, how to use components.

## Instructions

- Clone this repo to your local machine
- Push this to your branch
- Open you terminal in the exercise directory and run `npm install`. This installs all dependencies needed for the exercise, including react
- You can run the code with `npm run dev` in your terminal

## The Goal

When you open the exercise, you will realise the code is bunched up in the `App.jsx`. Your job will be separate the code into components in order to make the code more readable and reusable

## Requirements

- Create a new folder inside the `src/` folder called `components/`
- Look at the code in `App.jsx` and separate it into sections (such as the navigation bar, main page sections, and individual cards)
- Create separate `.jsx` files for these sections inside your components folder (e.g., `Navbar.jsx`, `Section.jsx`, `Card.jsx`)
- **Important for `Card.jsx`:** Instead of making multiple individual card components, make **one generic, reusable `Card` component**. Use **React Props** to dynamically pass down the unique data (like the image source, title, and description) for each of the portfolio projects.
- Move the respective code into your new files and export them as functional components
- Import your new components back into `src/App.jsx`. Make sure the application compiles successfully and looks completely identical to how it looked before you started

## Things to Know & Keep in Mind

- React files have the `.jsx` extension
- **Class vs ClassName:** In React, standard HTML `class="..."` attributes must be changed to `className="..."`. Keep an eye out for this when moving code over!
- **Self-Closing Tags:** Every single HTML tag in React must be closed. Tags like `<img />`, `<input />`, and `<br />` require a trailing slash.
- **Rule of Props:** Props are read-only (meaning they are immutable). A child component (like `Card.jsx`) should only read the data it receives, never try to change it directly.
- **Exporting and Importing:** Don't forget to use `export default ComponentName` at the bottom of your new files so that you can successfully `import` them inside `App.jsx`.
- **One Parent Element:** Every React component can only return _one_ single outer parent element. If you have multiple sections, wrap them in a single parent tag or a blank React fragment (`<> ... </>`).
