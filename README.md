# React App with Routing and Components

## Assignment Overview

This project was created as part of the assignment titled "React App with Routing and Components." The objective was to build a React application with three components (Home, Navbar, and FormAction) and implement routing to navigate between these components. Additionally, a FormAction component was designed to gather user input.

In the project directory , execute following commands:
1. npm install
2. npm install bootstrap
3. npm install bootstrap@5 bootstrap-icons
4. Run the react application : npm start



## Components

### 1. Home
The Home component is responsible for displaying user details, including name, age, email, and address.

### 2. Navbar
The Navbar component serves as the navigation bar for the application.

### 3. FormAction
FormAction is a component that includes a form to collect user input. It features input fields for Name, Age, Address, and EmailID.


Screen Recording of the React App :

https://github.com/itsDivya24/Winter_PEP_ReactApp/assets/118042383/8ef9dab0-93a0-4bcd-9945-eb24cab0d9a3


## Challenges Faced

### Routing Implementation

**Challenge:**
Configuring and setting up routing in a React application can be complex, especially if it's your first time using a routing library like React Router.

**Solution:**
I addressed the routing challenges by carefully following the documentation of React Router. Key concepts I learned include creating routes, using `BrowserRouter`, and integrating `Link` components for navigation. Understanding nested routes was crucial for rendering components based on user navigation.

### State Management

**Challenge:**
Managing and passing state between components, especially when dealing with user input in the FormAction component, can pose challenges.

**Solution:**
For state management, I opted for lifting state up to a common parent component and passing down the necessary state and functions as props. This ensured synchronization between components. The `useState` hook was crucial for managing local state within components.

### Styling and Layout

**Challenge:**
Achieving a cohesive and visually appealing design that works well across different screen sizes can be a challenge.

**Solution:**
Styling was approached using a combination of CSS modules and a mobile-first design strategy. I leveraged media queries for responsive layouts. The use of a design system or a CSS framework can also be considered for more extensive styling needs.

### Debugging

**Challenge:**
Identifying and fixing bugs during development is a common challenge.

**Solution:**
My debugging process involved using browser developer tools, console logging, and React DevTools. VSCode extensions like Debugger for Chrome were useful for setting breakpoints. I learned the importance of systematic debugging and maintaining a clear code structure for easier issue identification.



Feel free to explore the code and provide feedback or suggestions. Thank you for checking out this project!
