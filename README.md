# Shopping Cart Application
This is a Shopping Cart application built using React, Redux, and React Bootstrap. It allows users to view a list of products, add products to the cart, and navigate to the cart page. The application consists of the following components: App, Navbar, ProductPage, and CartPage.

![MobileCart](https://github.com/TulasiSingampalli/MobileCartApp_React_redux-toolkit/assets/128671828/84521678-6cf6-4032-94d5-cdcb1bc95a11)

## Features
- View a list of products
- Add products to the cart
- Navigate to the cart page
- Display the total quantity of items in the cart in the navbar

## Dependencies
The following dependencies are used in this project:

**React**: A JavaScript library for building user interfaces. <br/>
**React-Redux**: Official React bindings for Redux. <br/>
**Redux**: A predictable state container for JavaScript applications.  <br/>
**Redux Toolkit**: A package that simplifies Redux development by providing utilities and abstractions.  <br/>
**React Router DOM**: A library for routing in React applications.  <br/>
**React Bootstrap**: A popular front-end framework for building responsive web applications.

## Components
## App
The App component is the entry point of the application. It sets up the navigation and renders the Navbar component and the corresponding page components based on the current route.

### Navbar
The Navbar component displays a navigation bar at the top of the application. It includes links to the home page and the cart page. The cart link also displays the total quantity of items in the cart.

### ProductPage
The ProductPage component displays a list of products available for purchase. Each product is rendered as a card and includes the product's image, title, price, and quantity. The ProductPage component is connected to the Redux store using the useSelector and useDispatch hooks. The addToCart action from the cartSlice is dispatched when the "Add to Cart" button is clicked.

### CartPage
The CartPage component displays the items in the cart, allows the user to remove items, and adjust item quantities. It also shows the total quantity and total price of items in the cart. The CartPage component is connected to the Redux store using the useSelector hook to retrieve the cart state.


## Try it on CodeSandbox

This App was built as a learning project. This project is also available on CodeSandbox, allowing you to explore and interact with the application directly in your browser without having to set up a local development environment. Follow the steps below to access the project on CodeSandbox:

1. Visit the [Mobile Cart React App on CodeSandbox](https://codesandbox.io/s/mobilecartapp-react-redux-toolkit-oin7rn) 

2. Once the CodeSandbox loads, you will see the project's file structure and code files.

3. To view the app in action, click the "▶️ Run" button located at the top of the CodeSandbox editor.

4. The application will be launched in a new tab, and you can interact with it just like you would in a local development environment.

Please note that any changes made on CodeSandbox will not affect the original project. If you wish to save your modifications, you can create a fork of the project on CodeSandbox or download the source code and run it locally.

## Contributing
Contributions are welcome! If you find any issues or want to contribute to the project, feel free to create a pull request or submit an issue in the GitHub repository.
