# Lab 3: Project 1 - Starship

## Setup

This setup is similar to the previous lab. The `tp3` folder contains a project structure identical to the one described in this [document](https://www.fil.univ-lille.fr/~routier/enseignement/licence/js-s4/html/template-app.html). 

1. Inside the `tp3/` folder, run:
```bash    
tp3$ npm install
```  
2. Run `npm run build` to create the `./dist/` folder and generate the initial bundle.
3. Open the `dist/index.html` file to verify everything went smoothly by checking the developer console (<kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>K</kbd>), where you should see the message: `le bundle a été généré` (the bundle has been generated). 

> **Note:** Do **not** check the result using `src/index.html`. All your edits and work must be done inside the `src/` folder, **but the compiled result must be viewed inside the `dist/` folder**.

4. Throughout the lab, you will complete or create the required JavaScript modules.  
   Just like in the previous lab, take advantage of Webpack’s development features to build the bundle and preview changes live by starting the development server:

```bash
tp3$ npm run dev-server
```

**This is the recommended workflow.**

5. Don't forget to run `npm run build` after stopping the development server to ensure the `dist/` folder is up to date.

> **Note:** The `dist/` folder will not be committed to the repository, as it can be regenerated from the source files.

---

## Project Overview

A JavaScript game where the player controls a basket to collect falling eggs of different colors that drop randomly. Each time the player catches an egg, they earn 100 points. 

Rockets randomly launch from the left and right sides of the canvas. If a rocket hits the player, they lose 500 points and 1 life. The player starts with 3 lives, so it's best to avoid colliding with rockets! If a rocket hits an egg, the egg is destroyed.

### Architecture & Features
- Built in JS using Object-Oriented Programming (OOP) principles with several classes: `Basket`, `Egg`, `Game`, `Mobile`, `Rocket`.
- Implements class inheritance and private class fields (`#attribute`).
- Code refactoring: reduced the `animate` method in the `Game` class from 60 lines down to 10 lines.
- Mathematical collision detection between the player, eggs, and rockets, as well as custom movement mechanics.
- Spawn rates: 75% chance (0.75) for eggs and 50% chance (0.5) for rockets.

Play online: [Click here](https://example.com)

---

## Installation & Setup

1. **Install dependencies:**
   ```bash
   npm install
   ```
   This installs all required packages into the `node_modules` folder.

2. **Build the project:**
   ```bash
   npm run build
   ```
   This command creates the `dist` folder containing the compiled production build.

3. **Run the application:**
   Open the `dist/index.html` file in your browser directly or launch it using **Live Server**. The game will start automatically.

4. **Verify execution:**
   Open the browser developer console (<kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>K</kbd>) to ensure everything is running smoothly. A message confirms that the bundle was successfully generated.

---

## Implementation Details

The project complies with all specified guidelines:
- Structured classes (`Game`, `Basket`, etc.) using modern JS syntax.
- Standard method definitions combined with arrow functions where appropriate.
- Proper usage of getters and setters.
- Clean and modular project layout adhering to requested design patterns.