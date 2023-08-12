# Screenshot

1. Product list Page

![Product list Page](https://github.com/AvinashChandavar7/Product_Showcase/assets/122362595/3de9e669-5866-4527-b163-da6b16902520)

2. Product list details

![Product list details ](https://github.com/AvinashChandavar7/Product_Showcase/assets/122362595/02a25398-e37c-4883-bf88-d852d82c65ec)

3. Product

![Product](https://github.com/AvinashChandavar7/Product_Showcase/assets/122362595/73d8aa40-cccb-4ab5-b99f-aee89e75c60a)

4. Search

![Search](https://github.com/AvinashChandavar7/Product_Showcase/assets/122362595/bdbced90-aa5b-4510-b663-cca58a59b429)

# Product_Showcase

## Tech Details

1. React
2. Redux
3. React Router
4. Material-UI
5. Axios.

## Components

### App Component

- The `App` component serves as the entry point for the application.
- It provides the main layout and renders the `ProductList` component within a `Router` for navigation.

### ProductList Component

- The `ProductList` component displays a list of products, allows filtering and sorting, and renders the `ProductCard` components.
- It also utilizes the `FilterDrawer` component to manage filter options.

### ProductDetails Component

- The `ProductDetails` component displays detailed information about a selected product.
- It fetches product data using Axios based on the `productId` parameter.

### ProductCard Component

- The `ProductCard` component displays a single product's basic information, including its image, title, price, and rating.
- It is used within the `ProductList` component to represent each product.

### FilterDrawer Component

- The `FilterDrawer` component provides filter options for the user, including category selection, price range adjustment, and sorting preferences.
- It is used within the `ProductList` component to manage filters.

## Redux Setup

### Store Configuration

- The Redux store is configured in the `store.js` file using the `createStore` function from the `redux` library.
- Thunk middleware is applied to enable asynchronous actions.

### Reducers and Actions

- The `reducers.js` file contains the root reducer function that handles state changes based on different actions.
- The `action.js` file defines actions such as fetching products and updating the state.

## API Integration

- The app integrates with the Fake Store API to fetch product data.
- Axios is used to make asynchronous requests and retrieve the list of products and detailed information for a specific product.
