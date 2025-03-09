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
│   │   ├── Navigation
│   │   │   └── Navbar.js            (Layout provided For Demo Purpose Only using Nav component)
│   │   ├── Layout
│   │   │   ├── Footer.js    
│   │   │   └── Header.js 
│   │   ├── SampleDynamicPaginatedTable.js  (Demo usage of Table component & pagination using dynamic data)
│   │   ├── SampleStaticPaginatedTable.js   (Demo usage of Table component & pagination using HTML table)
│   │   ├── SampleStaticTable.js            (Demo usage of Table component without pagination using HTML table)
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
│   │   ├── Salient                        (Salient is a custom CSS and Javascript Library that I've written)
│   │   │   ├── styles.scss                (Salient styles library)
│   │   │   │   ├── _salient-all.scss      (For packing all the salient styles library)
│   │   │   │   ├── _salient-accordian.scss
│   │   │   │   ├── _salient_breadcrumb.scss
│   │   │   │   ├── _salient_button.scss
│   │   │   │   ├── _salient_card.scss
│   │   │   │   ├── _salient-icons.scss
│   │   │   │   ├── _salient-modal.scss
│   │   │   │   ├── _salient-nav.scss
│   │   │   │   ├── _salient-table.scss
│   │   │   │   ├── _salient-tabs.scss
│   │   │   │   ├── _salient-timeline.scss
│   │   │   │   └── _salient-treeview.scss
│   │   │   ├── UI                         (Salient components library)
│   │   │   │   ├── Accordian  
│   │   │   │   │   └── Accordian.js    
│   │   │   │   ├── Breadcrumb  
│   │   │   │   │   └── Breadcrumb.js   
│   │   │   │   ├── Button  
│   │   │   │   │   └── Breadcrumb.js  
│   │   │   │   ├── Card  
│   │   │   │   │   └── Card.js 
│   │   │   │   ├── Modal  
│   │   │   │   │   └── Modal.js 
│   │   │   │   ├── Navigation  
│   │   │   │   │   └── Nav.js 
│   │   │   │   ├── Pagination  
│   │   │   │   │   └── Pagination.js 
│   │   │   │   ├── Tab  
│   │   │   │   │   └── Pagination.js 
│   │   │   │   ├── Table  
│   │   │   │   │   └── Table.js 
│   │   │   │   ├── Treeview  
│   │   │   │   │    └── Treeview.js 
│   │   │   │   └── Timeline  
│   │   │   │       └── Timeline.js 
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
| **Bootstrap**           | Not included                      | Integrated via npm (Note: Bootstrap is not used in any Salient components)                                                                                    |
| **Sample SPA Structure**| Not included                      | Provided for quick start                                                                              |
| **Custom SCSS Files**   | Basic SCSS setup                  | Includes detailed layout and component styles: <br> &nbsp;&nbsp; - Salient Buttons: `salient-button.scss` <br> &nbsp;&nbsp; - Salient Card: `salient-card.scss` <br> &nbsp;&nbsp; - Salient Navbar: `salient-nav.scss` <br> &nbsp;&nbsp; - Salient Accordian: `salient-accordian.scss` <br> &nbsp;&nbsp; - Salient Timeline: : `salient-timeline.scss` <br> &nbsp;&nbsp; - Salient Tabs: : `salient-tabs.scss` <br> &nbsp;&nbsp; - Salient Table: : `salient-table.scss` <br> &nbsp;&nbsp; - Salient Breadcrumbs: : `salient-breacrumb.scss` <br> &nbsp;&nbsp; - Salient Modal: : `salient-modal.scss` <br> &nbsp;&nbsp; - Salient Treeview: : `salient-treeview.scss` |
| **Font Awesome Support**| Not included                      | Integrated for icons                                                                                  |
| **JQuery Support**      | Not included                      | Configured with Webpack for global usage                                                              |
| **Built-in Components** | Not included                      | Custom Components for: <br> &nbsp;&nbsp; - Navbar component (`Nav.js`) <br> &nbsp;&nbsp; - Accordian component ( `Accordian.js`) <br> &nbsp;&nbsp; - Tab component ( `Tab.js`) <br> &nbsp;&nbsp; - Table component ( `Table.js`)  <br> &nbsp;&nbsp; - Modal component ( `Modal.js`) <br> &nbsp;&nbsp; - Card component ( `Card.js`) <br> &nbsp;&nbsp; - Button component ( `Button.js`) <br> &nbsp;&nbsp; - Breadcrumb component ( `Breadcrumb.js`)  <br> &nbsp;&nbsp; - Treeview component ( `Treeview.js`)  <br> &nbsp;&nbsp; - Timeline component ( `Timeline.js`) <br> Custom HOC: <br> &nbsp;&nbsp; - Pagination component ( `Pagination.js`) <br> - Bootstrap integration |

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
> The other components have been tested to work with multiple instance except for the below components:
> - Navbar

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

> Note: If no theme is specified, the navbar will default to the **default theme** automatically.

## Salient Timeline

The Salient Timeline is a customizable timeline component that can be easily configured using classes and attributes.

![Salient Timeline Demo](Salient_Timeline_Demo.gif)

### Parameters
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

### Usage:
```jsx
import Timeline, {TimelineEvent} from '../utils/Salient/UI/Timeline/Timeline';

<Timeline 
    showCount={3}
    isHorz={true} 
    isLoading={isLoading}
    isStaggered={true}
    centerEvents={true}
    showControls={true}
    isTimelineActive={true}
    activeEventID={3}>
      {data.map((item, index) => (
          <TimelineEvent 
          key={item.id} 
          icon={index === 0 ? 'icon-square' : 'icon-circle'}
          text={item.text}
          event={item.thumbnail}/>
      ))}
</Timeline>
```

## Salient Tabs

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

- **`activeTabIndex`**  (Optional)
  - **Type**: `Integer`
  - **Description**: Initialize the tab content based on the set index. Default to 0, the first tab

> Note: The tabs will automatically become an accordian when the screen size is less than 768px. This is to cater to mobile responsive design*

### Usage:
```jsx
<Tab sideTabs={isSideTab} activeTabIndex={1}>
  <TabItems tabStyleActive={tabStyle}>
      <li><a>Tab 1</a></li>
      <li><a>Tab 2</a></li>
      <li><a>Tab 3</a></li>
  </TabItems>
  <TabContent>  
      <section className="item" data-title="Tab 1">
          <div className="item-content">
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut dicta neque deleniti dignissimos doloribus asperiores vel velit recusandae quasi? Fugit?</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo doloribus quibusdam ratione aliquid ut, dolorem illum velit ad sunt dolorum!</p>
          </div>
      </section>
      <section className="item" data-title="Tab 2">
          <div className="item-content">
              Tab 2 content. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.
          </div>
      </section>
      <section className="item" data-title="Tab 3">
          <div className="item-content">
              Tab 3 content. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.
          </div>
      </section>
  </TabContent>
</Tab>
```

## Salient Accordian

The Salient Accordion is a customizable component designed for easy integration. It allows for smooth expand-and-collapse functionality and can be tailored using classes and attributes to fit any design need.

### Parameters

- **`activeToggle`**  (Optional)
  - **Type**: `String` (`single` | `multiple`)  
  - **Description**: Controls the accordion toggle behavior.
    - "single": Only one item can be expanded at a time.
    - "multiple": Allows multiple items to be expanded simultaneously.

### Usage:
```jsx
<Accordian activeToggle="single">
    <AccordianItem title="Section 1" content="Content for Section 1" />
    <AccordianItem title="Section 2" content="Content for Section 2" />
    <AccordianItem title="Section 3" content="Content for Section 3" />
</Accordian>
```

## Salient Card

### Parameters
- **`animation`**  (Optional)
  - **Type**: `String` (`flip-x` | `flip-x` | `tilt` | `scale`)  
  - **Description**: Add an in-built hover effect to the card.

### Usage:
```jsx
<Card className="card-flat" animation="tilt">
  <CardInfo>
    {Insert any HTML code here or add a card title as shown below}
    <CardTitle>Title</CardTitle>
  </CardInfo>
  <CardContent>
    {Insert any HTML code here}
  </CardContent>
</Card>
```

## Salient Modal

### Parameters
- **`showModal`**  (Required)
  - **Type**: `Boolean` (`true` | `false`)  
  - **Description**: Controls the visibility of the modal based on its state

- **`onCloseModal`**  (Required)
  - **Type**: `Function` 
  - **Description**: A callback function triggered to close the modal.

- **`hasSection`**  (Optional)
  - **Type**: `Boolean` (`true` | `false`)  
  - **Description**: Specifies whether the modal content should be displayed in sections. When set to `true`, a dot indicator appears at the bottom, along with left and right arrows for navigation. The default value is `false`, displaying all content on a single page.

- **`onModalBlur`**  (Optional)
  - **Type**: `Function` 
  - **Description**: A callback function invoked to close the modal when a click event occurs outside its boundaries.

- **`title`**  (Optional)
  - **Type**: `String` 
  - **Description**: Set the modal header title

### Usage:
```jsx
<Modal title="Header" showModal={showModal} onCloseModal={(e) => {e.preventDefault(); setShowModal(false)}} className="light-theme" hasSections={true} onModalBlur={() => setShowModal(false)}>
  <section className='center-content'>
          Section 1
  </section>
  <section className='fit-content'>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste corporis sunt culpa illum assumenda ex iusto totam mollitia facere. Libero deserunt natus ea ad sint ex voluptates repellendus architecto tenetur!
  </section>
  <section className='fit-content'>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem facere fuga rerum. Voluptate molestiae assumenda dicta velit perferendis exercitationem ratione eligendi amet, modi soluta praesentium fugit, quidem alias voluptatum illo iure. Beatae nobis ipsam dolor quam, ex, nesciunt ea pariatur in quas quo debitis, corrupti illum provident laborum cum expedita!
  </section>
</Modal>
```

> **Note:**  
> Any element can be added within the modal. In the example above, each section is displayed on a separate page.

## Salient Table

### Parameters:
- **`draggable`**  (Optional)
    - **Type**: `Boolean` (`true` | `false`)  
    - **Description**: Enables or disables row dragging in the table. By default, rows are not draggable.

- **`showColToggleUI`**  (Optional)
    - **Type**: `Boolean` (`true` | `false`)  
    - **Description**: Displays column toggle buttons when set to `true`. The default value is `false`.

- **`onRetrievedSelected`**  (Optional)
    - **Type**: `Function` 
    - **Description**: A callback function invoked to fetch the data of selected rows.

- **`showRowSelector`**  (Optional)
    - **Type**: `Boolean` (`true` | `false`)  
    - **Description**: Displays checkboxes for each row. Works in conjunction with the `onRetrievedSelected` prop.

- **`ref`**  (Optional)
  - **Type**: `Reference` 
  - **Description**: Provides access to the DOM elements for additional customization.

- **`data`**  (Optional)
  - **Type**: `Array<Object>` 
  - **Description**: Accepts an array of objects, where each object represents a row. Required for dynamic tables.

- **`columns`**  (Required)
  - **Type**: `Array` 
  - **Description**: An array of elements used to define and display the table headers (thead).

- **`retrieveRowsBtnTitle`** (Optional)
  - **Type**: `String`
  - **Description**: Customizes the default button title used for retrieving row data

### Usage:
```jsx
<Table draggable={true} columns={["Company", "Contact", "Country"]} showColToggleUI={true} showRowSelector={true} onRetrievedSelected={handleRetrievedRows} ref={tableRef}>
  <TableRow>
      <td data-field="Company">Alfreds Futterkiste</td>
      <td data-field="Contact">Maria Anders</td>
      <td data-field="Country">Germany</td>
  </TableRow>
  <TableRow>
      <td data-field="Company">Centro comercial Moctezuma</td>
      <td data-field="Contact">Francisco Chang</td>
      <td data-field="Country">Mexico</td>
  </TableRow>
  <TableRow>
      <td data-field="Company">Ernst Handel</td>
      <td data-field="Contact">Roland Mendel</td>
      <td data-field="Country">Austria</td>
  </TableRow>
</Table>
```

## Salient Treeview

### Parameters:
- **`text`**  (Required)
  - **Type**: `String` 
  - **Description**: Tree item title

- **`subtext`**  (Optional)
  - **Type**: `String` 
  - **Description**: Add a comment next to the main text.

### Usage:
```jsx
<Treeview>
  <TreeItem text='Item 1' subtext="(with levels)">
    <li><span>1.1</span></li>
    <li><span>1.2</span></li>
  </TreeItem>
  <TreeItem text='Item 2' subtext="(multilevel)">
    <li><span>2.1</span></li>
    <TreeItem text="2.2">
      <li><span>2.2.1</span></li>
      <li><span>2.2.2</span></li>
      <TreeItem text="2.2.3" subtext="(we can continue adding levels)">
        <li><span>2.2.3.1</span></li>
        <li><span>2.2.3.2</span></li>
      </TreeItem>
    </TreeItem>
  </TreeItem>
  <TreeItem text='Item 3' subtext="(No Level)"/>
</Treeview>
```

## Salient Breadcrumb

### Parameters:
- **`bcType`**  (Optional)
  - **Type**: `String` (`dot` | `triangle` | `multiStep`)  
  - **Description**: Specifies the breadcrumb style to be used by the component.

- **`centerBc`**  (Optional)
  - **Type**: `Boolean` (`true` | `false`) 
  - **Description**: Centers the breadcrumb items. By default, items are aligned to the left and placed next to each other.

- **`hasBadge`**  (Optional)
- **Type**: `Boolean` (`true` | `false`) 
- **Description**: Displays a counter badge on each breadcrumb item.

- **`separator`**  (Optional)
- **Type**: `String` 
- **Description**: Sets a custom separator between breadcrumb items. The default separator is `>>`.
> Note: Seperator will not work with multiStep and triangle breadcrumbs.

### Usage:
```jsx
<Breadcrumb bcType="dot" centerBc={true}>
  <li><a href="#0"><FontAwesomeIcon icon="house" style={{marginRight: '.6em'}}/>Home</a></li>
  <li><a href="#0">Gallery</a></li>
  <li className="active"><a href="#0">Web</a></li>
  <li><a href="#0">Project</a></li>
</Breadcrumb>
```

## Salient Pagination

The pagination component is a higher-order component (HOC) designed using the currying approach, allowing props to be passed seamlessly to child components. 

This flexible design lets you integrate pagination in two ways:
- **Direct Integration**: Use it within a custom component, passing props directly.
- **Wrapper Usage**: Wrap it around an external component to automatically forward props to its children.

This versatility makes it easy to manage paginated data while maintaining clean and reusable component structures.

### Parameters:
- **`itemsPerPage`**  (Required)
  - **Type**: `Integer` 
  - **Description**: Defines the number of items to display on each page.

- **`items`**  (Optional)
  - **Type**: `Array<Object>`
  - **Description**: An array of dynamic data to be paginated.

### Usage:

#### Method 1: Using in Custom Component
##### Write the following in a custom component:
```jsx
const StaticPaginatedTable = withPagination()(Table);
const SampleStaticPaginatedTable = (props) => {
    return (
        <StaticPaginatedTable {...props} columns={["Company", "Contact", "Country"]}>
            <TableRow>
                <td data-field="Company">Alfreds Futterkiste</td>
                <td data-field="Contact">Maria Anders</td>
                <td data-field="Country">Germany</td>
            </TableRow>
            <TableRow>
                <td data-field="Company">Centro comercial Moctezuma</td>
                <td data-field="Contact">Francisco Chang</td>
                <td data-field="Country">Mexico</td>
            </TableRow>
            <TableRow>
                <td data-field="Company">Ernst Handel</td>
                <td data-field="Contact">Roland Mendel</td>
                <td data-field="Country">Austria</td>
            </TableRow>
        </StaticPaginatedTable>
    )
}

export default SampleStaticPaginatedTable;
```

##### Write the following in the parent component:
```jsx
import SampleStaticPaginatedTable from '../components/SampleStaticPaginatedTable';

<SampleStaticPaginatedTable itemsPerPage={4}/>

```

#### Method 2: Using it Externally As Render Prop Pattern
- ExternalPaginatedTable invokes this function and passes the paginated data (paginatedItems) as an argument.
- The function returns JSX — a dynamic list of rows based on the current page’s data.


In this example, the ExternalPaginatedTable component is used to create a dynamic, paginated table with customizable features such as row dragging, column toggling, and row selection
```jsx
import Table, {TableRow} from '../utils/Salient/UI/Table/Table';
const ExternalPaginatedTable = withPagination()(Table);

<ExternalPaginatedTable 
  items={filteredTable} 
  itemsPerPage={5} 
  draggable={true} 
  showColToggleUI={true} 
  columns={["Type", "Name", "Description", "Tags", "Last Viewed", "Expiration"]} 
  showRowSelector={true}>
    {(paginatedItems) =>
      (Array.isArray(paginatedItems) ? paginatedItems : []).map((row, index) => (
        <TableRow key={index}>
          <td data-field="Type"><FontAwesomeIcon icon={"file-"+row.Type}></FontAwesomeIcon></td>
          <td data-field="Name">{row.Name} app</td>
          <td data-field="Description">{row.Description}</td>
          <td data-field="Tags">{row.Tags}</td>
          <td data-field="Last Viewed">{row.LastViewed}</td>
          <td data-field="Expiration">{row.Expiration}</td>
        </TableRow>
      ))
    }
</ExternalPaginatedTable>
```