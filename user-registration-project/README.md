# User Registration Project

This project is a user registration system built with Node.js, Express, and MongoDB Atlas. It provides functionalities for user registration, login, and fetching user details.

## Project Structure

```
user-registration-project
├── src
│   ├── app.ts                # Entry point of the application
│   ├── controllers
│   │   └── userController.ts # Handles user-related operations
│   ├── models
│   │   └── userModel.ts      # Defines user schema
│   ├── routes
│   │   └── userRoutes.ts     # Sets up user routes
│   └── types
│       └── index.ts          # Type definitions for user data
├── package.json               # npm configuration file
├── tsconfig.json              # TypeScript configuration file
└── README.md                  # Project documentation
```

## Setup Instructions

1. **Clone the repository:**
   ```
   git clone <repository-url>
   cd user-registration-project
   ```

2. **Install dependencies:**
   ```
   npm install
   ```

3. **Set up environment variables:**
   Create a `.env` file in the root directory and add your MongoDB Atlas connection string:
   ```
   MONGODB_URI=<your_mongodb_connection_string>
   ```

4. **Run the application:**
   ```
   npm start
   ```

## Usage Examples

- **Register a new user:**
  - Endpoint: `POST /api/users/register`
  - Body: `{ "username": "example", "email": "example@example.com", "password": "password123" }`

- **Login a user:**
  - Endpoint: `POST /api/users/login`
  - Body: `{ "email": "example@example.com", "password": "password123" }`

- **Get user details:**
  - Endpoint: `GET /api/users/:id`

## License

This project is licensed under the MIT License.