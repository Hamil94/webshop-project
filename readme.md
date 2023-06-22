# Yard Sales

Yard Sales is a web application that allows users to buy and sell items in their
local neighborhood. It provides a platform for individuals to list their items
for sale and for potential buyers to browse and purchase items of interest. The
application includes both an admin dashboard for managing products and a
customer interface for browsing and buying.

## Features

-   User registration and login: Users can create an account or log in using their
    credentials.
-   Admin dashboard: The admin account has access to a dashboard for managing
    products.
-   Product listing: Users can list their items for sale by providing details such
    as title, price, description, category, and images.
-   Category selection: Users can choose the appropriate category for their listed
    items.
-   Image upload: Users can upload images of the items they are selling.
-   Product browsing: Customers can browse the available products and view their
    details.
-   Purchase process: Customers can add items to their cart, proceed to checkout,
    and complete the purchase.
-   Notifications: Users receive notifications for successful transactions and
    other important updates.

## Installation

1. Clone the repository: git clone
   git@bitlab.bit-academy.nl:fd4cef68-db64-11ec-a693-4213e7ee7fac/31579337-3409-450a-9adf-0290aa70e64f/The-Webshop-97a58026-162dce26.git
2. Install the dependencies: npm install.
3. Configure the environment variables:

-   Create a `.env` file based on the provided `.env.example` file.
-   Set the appropriate values for the environment variables, such as database
    connection details and API endpoints.

4. Start the application: npm run dev.

5. Access the application:

## Usage

-   Admin account: Use the following credentials to access the admin dashboard:
-   Email: admin@mail.com
-   Password: admin123

-   Customer account: Use the following credentials to access the customer
    interface:
-   Email: john@mail.com
-   Password: changeme

## Known Issues

- If you encounter any issues related to the usage of `next/image` for image optimization and serving, please make sure to add the appropriate image source links to the `next.config.js` file in the root directory of the project. This step is necessary to ensure proper rendering and optimization of images throughout the application.


## Technologies Used

-   Front-end:
-   React: JavaScript library for building user interfaces.
-   Next.js: React framework for server-side rendering and routing.
-   Tailwind CSS: Utility-first CSS framework.
<!-- -   Back-end: -->
<!-- -   Node.js: JavaScript runtime for executing server-side code. -->
<!-- -   Express: Web application framework for Node.js. -->
<!-- -   MongoDB: NoSQL database for storing application data. -->
<!-- -   Authentication and Authorization: -->
<!-- -   JSON Web Tokens (JWT): Authentication method for secure communication between -->
<!--     client and server. -->
<!-- -   bcrypt: Password hashing library for secure storage of user passwords. -->

## Contributing

Contributions to Yard Sales are welcome! If you find any bugs or have
suggestions for new features, please open an issue or submit a pull request.

## License

This project is licensed under the
[MIT License](https://opensource.org/licenses/MIT).
