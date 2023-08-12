#  Screenshot 
1.
![Product list Page](https://github.com/AvinashChandavar7/Product_Showcase/assets/122362595/3de9e669-5866-4527-b163-da6b16902520)

2.
![Product list details ](https://github.com/AvinashChandavar7/Product_Showcase/assets/122362595/02a25398-e37c-4883-bf88-d852d82c65ec)

3.
![Product](https://github.com/AvinashChandavar7/Product_Showcase/assets/122362595/73d8aa40-cccb-4ab5-b99f-aee89e75c60a)

4. ![Search](https://github.com/AvinashChandavar7/Product_Showcase/assets/122362595/bdbced90-aa5b-4510-b663-cca58a59b429)



# Full Stack E-Commerce App Documentation

This documentation provides a comprehensive guide to understand and work with a full-stack e-commerce application built using React, Redux, React Router, Material-UI, and Axios. The application allows users to view and filter products, see product details, and interact with a responsive user interface.



## Project Overview

This e-commerce app is designed to showcase products, provide detailed information about each product, and allow users to filter and sort products based on various criteria. The project is developed using React for the frontend, Redux for state management, React Router for navigation, and Material-UI for styling and UI components.


## Getting Started

1. Clone the repository: `git clone <repository-url>`
2. Navigate to the project directory: `cd <project-folder>`
3. Install dependencies: `npm install`
4. Run the development server: `npm start`

## Components

### App Component

The `App` component serves as the entry point for the application. It provides the main layout and renders the `ProductList` component within a `Router` for navigation.

### ProductList Component

The `ProductList` component displays a list of products, allows filtering and sorting, and renders the `ProductCard` components. It also utilizes the `FilterDrawer` component to manage filter options.

### ProductDetails Component

The `ProductDetails` component displays detailed information about a selected product. It fetches product data using Axios based on the `productId` parameter.

### ProductCard Component

The `ProductCard` component displays a single product's basic information, including its image, title, price, and rating. It is used within the `ProductList` component to represent each product.

### FilterDrawer Component

The `FilterDrawer` component provides filter options for the user, including category selection, price range adjustment, and sorting preferences. It is used within the `ProductList` component to manage filters.

## Redux Setup

### Store Configuration

The Redux store is configured in the `store.js` file using the `createStore` function from the `redux` library. Thunk middleware is applied to enable asynchronous actions.

### Reducers and Actions

The `reducers.js` file contains the root reducer function that handles state changes based on different actions. The `action.js` file defines actions such as fetching products and updating the state.

## API Integration

The app integrates with the Fake Store API to fetch product data. Axios is used to make asynchronous requests and retrieve the list of products and detailed information for a specific product.

## Styling

The app's user interface is styled using Material-UI components and custom CSS. Responsive design is implemented to ensure a seamless experience across different screen sizes.

## Running the Application

1. Install dependencies: `npm install`
2. Start the development server: `npm start`
3. Access the app in a web browser at `http://localhost:3000`

## Conclusion

This documentation provides a thorough understanding of the full-stack e-commerce application's structure, components, Redux setup, API integration, and styling. By following the steps outlined in the "Getting Started" section, you can set up and run the application to explore its features and functionalities.





# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
