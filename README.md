# React Boilerplate

This project provides two React boilerplate versions for starting your React applications with different levels of complexity:

- **react_bare**: A barebones React setup with no additional components, JS, or CSS. Ideal for starting a project from scratch.
- **react_basic**: A more feature-rich setup that includes **Bootstrap** integration, custom **CSS**, and a **Navbar** component. Also includes a sample single-page app to get started quickly.

---

## Versions

### 1. `react_bare` - Barebones React Setup

`react_bare` is a minimal setup with the basic React environment. It includes:

- **React** and **ReactDOM** installed
- **Babel** for JSX compilation
- **Webpack** for module bundling
- No additional components, JS, or CSS files
- SCSS files are provided but mostly empty to allow you to start with a clean slate

This version is suitable for starting with a clean slate, without any pre-configured components or styling.

### 2. `react_basic` - React with Bootstrap, Custom Navbar, and CSS

`react_basic` is a more advanced setup that includes:

- Integration with Bootstrap for UI components (installed via npm)
- A custom Navbar component built with customs classes (see salient.scss and salient.js)
- A sample single-page app (SPA) structure
- This version is ideal if you're looking for a quick start with a responsive layout and a basic page structure that includes common UI elements like a navbar.

## How to Use
1. Clone the repository or download the `react_basic` or `react_bare` folder.
2. Navigate to the folder in your terminal:
   ```bash
   cd react_bare  # or cd react_basic
3. Install dependencies by running:
   ```bash
   npm install
4. Start the development server:
   ```bash
   npm run dev-server
5. A browser will automatically open, you can see the Basic React app.
6. To run build:
   ```bash
   npm run build

## Project Structure
Here’s the basic file structure for both versions:

```plaintext
.
├── public
│   └── index.html
├── src
│   ├── components
│   │   ├── footer.js          (Both versions)
│   │   ├── header.js          (Both versions)
│   │   ├── container.js       (Only in `react_basic`)
│   │   └── navbar.js          (`react_basic` only, template together with salient)
│   ├── styles
│   │   ├── base
│   │   │   ├── _base.scss     (Both versions)
│   │   │   └── _settings.scss (Both versions)
│   │   ├── components
│   │   │   ├── _button.scss   (Both versions)
│   │   │   └── _card.scss     (Both versions)
│   │   ├── layout
│   │   │   ├── _footer.scss   (Both versions)
│   │   │   ├── _grid.scss     (Both versions)
│   │   │   ├── _header.scss   (Both versions)
│   │   │   └── _navbar.scss   (Only in `react_basic`)
│   │   ├── utilities
│   │   │   ├── _functions.scss    (Both versions)
│   │   │   └── _mixins.scss       (Both versions)
│   │   ├── styles.scss            (Combines all SCSS files)
│   │   └── custom-bootstrap.scss  (Only in `react_basic`)
│   ├── utils
│   │   ├── _bootstrap-table.scss (Only in `react_basic`, currently unused)
│   │   ├── _salient.scss         (Only in `react_basic`, custom navbar CSS)
│   │   ├── _fontAwesome.js       (Only in `react_basic`)
│   │   └── _salient.js           (Only in `react_basic`, custom navbar JavaScript)
│   ├── app.js
│   └── index.js
├── package.json
├── webpack.config.js
└── .gitignore
```

## Key Files:
- src/index.js: The entry point for the React app.
- src/app.js: The main React component that renders the content.
- src/components: Contains reusable components like footer.js and header.js.
- src/styles: SCSS files and partials for base, components, and layouts.
- webpack.config.js: Configured to handle modern setups, including Dart SASS and muted Bootstrap @import errors.

## Features
### Key Differences
| Feature                 | `react_bare`                        | `react_basic`                                   |
|-------------------------|--------------------------------------|------------------------------------------------|
| **Bootstrap**           | Not included                       | Integrated via npm for UI components                             |
| **Navbar Component**    | Not included                       | Included with reusable styling (`salient.scss`)|
| **Sample SPA Structure**| Not included                       | Provided for quick start                       |
| **Custom SCSS Files**   | Basic SCSS setup                   | Includes detailed layout and component styles  |
| **Font Awesome Support**| Not included                       | Integrated for icons                           |
| **JQuery Support**      | Not included                       | Configured with Webpack for global usage       |
| **JavaScript**          | No additional JavaScript           | Includes custom JavaScript for Navbar (`salient.js`), Bootstrap integration |

---

## Using Salient Navbar

The Salient Navbar is a customizable navigation bar that can be easily tailored using simple classes and attributes.

### Responsive Sidebar on Mobile
On mobile screen sizes, the navbar automatically transforms into a sidebar with the following settings:
- To enable the sidebar, add the `data-effect="shift"` attribute to the `<Nav>` tag.

### Slide Animation for Lists
The `<ul>` list within the navbar can display two types of slide animations:
- Use the `sd-slide-down` class for a slide-down effect.
- Use the `sd-slide-in` class for a slide-in effect.

If the `sd-slide-in` class is applied to `<ul>` without the `data-effect="shift"` attribute on the `<Nav>` tag, the sidebar will slide in from the left but will not shift the page content.

### Theme Customization
The navbar supports the following pre-defined themes. Apply one of these classes to the `<Nav>` tag to customize the theme:
- `dark-scheme`
- `offwhite-scheme`
- `grayscale-scheme`

*Note*: If no theme is specified, the navbar will default to the **default theme** automatically.




