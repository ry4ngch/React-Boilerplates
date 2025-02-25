# React Boilerplate

This project provides three React boilerplate versions for starting your React applications with different levels of complexity:

- **react_bare**: A barebones React setup with no additional components, JS, or CSS. Ideal for starting a project from scratch.
- **react_basic**: A more feature-rich setup that includes **Bootstrap** integration, custom **CSS**, and a **Navbar** component. Also includes a sample single-page app to get started quickly.
- **react_bootstrap**: React setup with **Bootstrap** integration, using Offcanvas **Navbar** component.

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
- A custom Navbar component built with customs classes (see salient folder in utils)
- A sample single-page app (SPA) structure
- This version is ideal if you're looking for a quick start with a responsive layout and a basic page structure that includes common UI elements like a navbar.

### 3. `react_bootstrap` - React with Bootstrap

- Integration with Bootstrap version 5 for UI components (installed via npm)
- Navbar using Bootstrap Offcanvas design

> **Note:** 
> Bootstrap 5 currently has some issues with the latest SASS implementation, webpack has been configured to ignore the @import warnings.
> It is recommended to use tailwind for more seamless development experience with react.

## How to Use
1. Clone the repository or download the `react_basic` or `react_bare` or `react_bootstrap` folder.
2. Navigate to the folder in your terminal:
   ```bash
   cd react_bare  # or cd react_basic or cd react_bootstrap
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
Here’s the basic file structure for `react_bare` versions:

```plaintext
.
├── public
│   ├── images
│   │   └── favicon.png 
│   └── index.html
├── src
│   ├── components
│   │   ├── footer.js          
│   │   └── header.js          
│   ├── styles
│   │   ├── base
│   │   │   ├── _base.scss     
│   │   │   └── _settings.scss 
│   │   ├── components
│   │   │   ├── _button.scss   
│   │   │   └── _card.scss     
│   │   ├── layout
│   │   │   ├── _footer.scss   
│   │   │   ├── _grid.scss     
│   │   │   └── _header.scss   
│   │   ├── utilities
│   │   │   ├── _functions.scss    
│   │   │   └── _mixins.scss       
│   │   └── styles.scss            (Combines all SCSS files)
│   └── app.js
├── package.json
├── webpack.config.js
└── .gitignore
```

Here’s the basic file structure for `react_basic` versions:

```plaintext
.
├── public
│   ├── assets
│   │   └── timeline_data.json       (Dummy data for populating timeline and testing) 
│   ├── images
│   │   └── favicon.png       
│   └── index.html
├── src
│   ├── components
│   │   ├── Accordian
│   │   │   ├── Accordian.js         (Layout provided For Demo Purpose Only)
│   │   │   └── AccordianItem.js     (Layout provided For Demo Purpose Only)
│   │   ├── Buttons    
│   │   │   └── Button.js            (Layout provided For Demo Purpose Only) 
│   │   ├── Card   
│   │   │   └── Card.js              (Layout provided For Demo Purpose Only) 
│   │   ├── Layout
│   │   │   ├── Footer.js    
│   │   │   └── Header.js
│   │   ├── Modal
│   │   │   └── Modal.js             (Layout provided For Demo Purpose Only) 
│   │   ├── Navigation
│   │   │   ├── Nav.js               (Layout provided For Demo Purpose Only) 
│   │   │   └── NavMenu.js           (Layout provided For Demo Purpose Only)  
│   │   ├── Tab
│   │   │   ├── Tab.js               (Layout provided For Demo Purpose Only)  
│   │   │   ├── TabContent.js        (Layout provided For Demo Purpose Only)  
│   │   │   └── TabItems.js          (Layout provided For Demo Purpose Only)  
│   │   ├── Table
│   │   │   └── Table.js             (Layout provided For Demo Purpose Only)  
│   │   ├── Timeline
│   │   │   ├── Timeline.js          (Layout provided For Demo Purpose Only)  
│   │   │   └── TimelineEvents.js    (Layout provided For Demo Purpose Only)  
│   ├── containers  
│   │   ├── demo_data.js             (Dummy data For Demo Purpose Only, remove this if actual data is available)     
│   │   └── Container.js           
│   ├── styles                       (Note: The styles folder contains recommended styles structure, remove the files it if not necessary for your project)
│   │   ├── base
│   │   │   ├── _base.scss
│   │   │   └── _settings.scss 
│   │   ├── components
│   │   │   ├── _button.scss   
│   │   │   └── _card.scss     
│   │   ├── layout
│   │   │   ├── _footer.scss   
│   │   │   ├── _grid.scss   
│   │   │   ├── _container.scss 
│   │   │   ├── _navbar.scss 
│   │   │   └── _header.scss   
│   │   ├── utilities
│   │   │   ├── _functions.scss    
│   │   │   └── _mixins.scss  
│   │   ├── custom-bootstrap.scss          (For packing only the necessary css from bootstrap) 
│   │   └── styles.scss                    (Combines all SCSS files)
│   ├── utils  
│   │   ├── FontAwesome
│   │   │   └── fontAwesome.js             (For Packing all the font awesome library)  
│   │   └── Salient                        (Salient is a custom CSS and Javascript Library that I've written)
│   │       ├── _salient-all.scss          (For packing all the salient styles library)
│   │       ├── _salient-breadcrumb.scss   (custom Breadcrumb CSS)
│   │       ├── _salient-button.scss       (custom Button CSS)
│   │       ├── _salient-card.scss         (custom Card CSS)
│   │       ├── _salient-nav.scss          (custom Navbar CSS)
│   │       ├── _salient-modal.scss        (custom Modal CSS)
│   │       ├── _salient-accordian.scss    (custom Accordian CSS)
│   │       ├── salient-accordian.js       (custom Accordian Javascript)
│   │       ├── _salient-table.scss        (custom Table CSS)
│   │       ├── salient-table.js           (custom Table Javascript)
│   │       ├── _salient-treeview.scss     (custom Treeview CSS)
│   │       ├── salient-treeview.js        (custom Treeview Javascript)
│   │       ├── _salient-timeline.scss     (custom Timeline CSS)
│   │       ├── salient-timeline.js        (custom Timeline Javascript, Workable with Axios)
│   │       ├── salient-tabs.js            (custom Tabs Javascript)
│   │       ├── _salient-tabs.scss         (custom Tabs CSS)
│   │       └── salient-nav.js             (custom Navbar JavaScript)
│   └── app.js
├── package.json
├── webpack.config.js
└── .gitignore
```

## Key Files:
- src/app.js: The entry point for the React app.
- src/components: Contains reusable components like footer.js and header.js (see features section for more description).
- src/styles: SCSS files and partials for base, components, and layouts.
- webpack.config.js: Configured to handle modern setups, including Dart SASS and muted Bootstrap @import errors.

## Features
### Key Differences
| **Feature**             | **`react_bare`**                   | **`react_basic`**                                                                                     |
|-------------------------|-------------------------------------|-------------------------------------------------------------------------------------------------------|
| **Bootstrap**           | Not included                      | Integrated via npm for UI components                                                                  |
| **Navbar Component**    | Not included                      | Included with reusable styling (`salient-nav.scss`)                                                   |
| **Sample SPA Structure**| Not included                      | Provided for quick start                                                                              |
| **Custom SCSS Files**   | Basic SCSS setup                  | Includes detailed layout and component styles: <br> &nbsp;&nbsp; - Salient Buttons: `salient-button.scss` <br> &nbsp;&nbsp; - Salient Card: `salient-card.scss` <br> &nbsp;&nbsp; - Salient Navbar: `salient-nav.scss` <br> &nbsp;&nbsp; - Salient Accordian: `salient-accordian.scss` <br> &nbsp;&nbsp; - Salient Timeline: : `salient-timeline.scss` <br> &nbsp;&nbsp; - Salient Tabs: : `salient-tabs.scss` <br> &nbsp;&nbsp; - Salient Table: : `salient-table.scss` <br> &nbsp;&nbsp; - Salient Breadcrumbs: : `salient-breacrumb.scss` <br> &nbsp;&nbsp; - Salient Modal: : `salient-modal.scss` |
| **Font Awesome Support**| Not included                      | Integrated for icons                                                                                  |
| **JQuery Support**      | Not included                      | Configured with Webpack for global usage                                                              |
| **JavaScript**          | No additional JavaScript          | Custom JavaScript for: <br> &nbsp;&nbsp; - Navbar component (`salient-nav.js`) <br> &nbsp;&nbsp; - Timeline component (`salient-timeline.js`) <br> &nbsp;&nbsp; - Accordian component ( `salient-accordian.js`) <br> &nbsp;&nbsp; - Tab component ( `salient-tabs.js`) <br> &nbsp;&nbsp; - Table component ( `salient-table.js`) <br> Bootstrap integration |

---

## Why Salient?

The **Salient library** was developed with a core goal: to simplify the development process by eliminating the need to manually define custom states for controlling UI animations, styles, and effects. By leveraging Salient, developers can focus on building robust applications without worrying about intricate UI configurations.

This library offers:
- Predefined animations and styles that integrate seamlessly into React projects. 
- An easy-to-use structure for dynamic UI effects without the overhead of managing custom state logic.
- A faster development workflow, reducing boilerplate code while maintaining flexibility for customization.

> **Note:**  
> While controlling animations and effects in React is simple, it often requires managing additional state variables, which can complicate the codebase and lead to unnecessary boilerplate. Salient was created to address this issue by providing a streamlined solution that abstracts these complexities.

> **Note:**  
> The current salient library is only tested to work for a single component, this library is still under development. You are free to customize the code for your project.

## Using Salient Navbar

The Salient Navbar is a customizable navigation bar that can be easily tailored using simple classes and attributes.

![Salient Navbar Demo](Salient_Navbar_Demo.gif)

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

## Using Salient Timeline

The Salient Timeline is a customizable timeline component that can be easily configured using classes and attributes.

![Salient Timeline Demo](Salient_Timeline_Demo.gif)

### Parameters

- **`data`** (Required)  
  - **Type:** `Array<Object>`
  - **Description:** Accepts an array of objects, where each object represents an item with specific properties.
  
#### Example:
```jsx
const data = [
  { id: 1, thumbnail: "Timeline 1", text: Lorem ipsum dolor sit amet.},
  { id: 2, thumbnail: "Timeline 2", text: Lorem ipsum dolor sit amet.}
];

<Timeline data={data} />
```

- **`isHorz`** (Optional)
  - **Type**: `Boolean` (`true` | `false`)  
  - **Description**: Determines the timeline's orientation.  
    - `true`: Displays the timeline horizontally (`timeline-horz` class is applied).  
    - `false`: Default. Displays the timeline vertically.

- **`isLoading`** (Required)
  - **Type**: `Boolean` (`true` | `false`)  
  - **Description**: Used with React state to determine if data has been fetched.  
    - Use `setIsLoaded` to update the state when data is fetched.  
    - When loaded, the `loaded` class is applied to the timeline.

- **`isStaggered`**  (Optional)
  - **Type**: `Boolean` (`true` | `false`)  
  - **Description**: Applies a staggered layout to timeline items.  
    - `true`: Adds the `timeline-staggered` class.  
      - **Horizontal timeline**: Items stagger up and down.  
      - **Vertical timeline**: Items stagger left and right.  
    - `false`: Default. No staggering applied.

- **`showCount`** (Optional)
  - **Type**: `Integer`  
  - **Description**: Limits the number of timeline events displayed per page. Defaults to 3 if data-show-count attribute in Timeline.js is not found. However, it is better to set it as the props.showCount is use by React state. 
    - Events exceeding this count are pushed to subsequent pages.  
    - **Up and Down Arrow Buttons**: Always visible for navigation between pages (See `showControls` props below).  
      - **Up Arrow**: Navigates to the previous page.  
      - **Down Arrow**: Navigates to the next page.

- **`centerEvents`** (Optional)
  - **Type**: `Boolean` (`true` | `false`)  
  - **Description**: Centers the events items of the timeline on a horizontal timeline. This will apply the `center-events` class. 
    - `true`: Applies the `center-events` class.  
    - `false`: Default. Each events items are place at the left.
  - Note: This props works only for horizontal timeline, when `screen size <= 768px`, the timeline will automatically become a vertical timeline.

- **`showControls`** (Optional)
  - **Type**:  `Boolean` (`true` | `false`) 
  - **Description**: Conditions for showing the up and down arrow buttons  
    - `true`: Default. To change the default behaviour, adjust the defaultProps in Timeline.js. Otherwise, the up and down arrow buttons will be visible.
    - `false`: Will remove the up and down arrows from the DOM.
  - **Example Usage with Dynamic data**: 
    - `showControls={data.length > 0 && data.length > showCount}` may be set in Container.js where `data` refers to the an array fetch through axios or other means.
    - Note: for the above example to work, ensure showCount is a variable instead of defining it as part of Timeline attribute directly. ie: `showCount = {showCount}`

- **`isTimelineActive`** (Optional)
  - **Type**: `Boolean` (`true` | `false`) 
  - **Description**: Apply the `timeline-active` class to the timeline
    - `true`: Adds the `timeline-active` class.  
    - `false`: Default. `timeline-active` class is not applied.
    - Note: To apply the style, `activeEventID` props must also be defined (see `activeEventID` below) 

- **`activeEventID`** (Optional)
  - **Type**: `Integer` 
  - **Description**: Apply the `active-event` class to the timeline event
    - Adds the `active-event` class to the timeline event where the index matches the `activeEventID`. The event item having matching index as `activeEventID` will have an effect similar to hovering state. Defaults to `undefined` if data-active-id attribute in Timeline.js is not found. When `undefined`, both `active-event` class and `timeline-active` class will not be applied.

## Using Salient Tabs

The Salient Tabs is a customizable component that can be easily configured using classes and attributes.

### Parameters

- **`sideTabs`**  (Optional)
  - **Type**: `Boolean` (`true` | `false`)  
  - **Description**: Determines the tab orientation.  
    - `true`: Displays the tabs vertically (`tabs-side` class is applied).  
    - `false`: Default. Displays the tabs horizontally.

- **`tabStyleActive`**  (Optional)
  - **Type**: `String` (`box` | `underline`)  
  - **Description**: Determine the tab style effect when active state, either box or underline. Default will be `box` tab style.

*Note: The tabs will automatically become an accordian when the screen size is less than 768px. This is to cater to mobile responsive design*

## Using Salient Accordian

The Salient Accordian is a customizable component that can be easily configured using classes and attributes.

### Parameters

- **`data`** (Required)  
  - **Type:** `Array<Object>`
  - **Description:** Accepts an array of objects, where each object represents an item with specific properties.

- **`activeToggle`**  (Optional)
  - **Type**: `String` (`single` | `multiple`)  
  - **Description**: Controls the accordion toggle behavior.
    - "single": Only one item can be expanded at a time.
    - "multiple": Allows multiple items to be expanded simultaneously.
