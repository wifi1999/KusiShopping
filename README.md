# KusiShopping App

## Overview 

KusiShopping is a full-stack Clothing Shopping App offering seamless shopping process. Users can browse, select, and purchase clothes. The App incorperate search filters for color, size, price, and earliest arrivals to refine results. 

## Project Structure

### Backend 
The backend, powered by Node.js and Express.js, handles efficient routing. MongoDB, managed with Mongoose, facilitates user authentication, clothes selection, filtering, and payment handling. Integration of JsonWebToken API ensures a secure authentication and authorization system.

### Frontend
The frontend is powered by React.js to deliver responsive pages. The Redux API is utilized for persistent cart operations and user states across multiple pages. Stripe's API is utilized for secure order placement and payment handling. 

## Features 

### User Authentication
- Secure user registration, login, and logout
- Statement management via Redux's API and JsonWebToken for authentication and authorization

### Clothes Filtering 
- Filter clothes based on color, size, price, and earliest arrivals

### Automated Price Calculation
- Automatically calculate prices based on purchasing amounts, color, and size

### Payment Handling
- Intergrated Stripe's API for secure real-time transcation handling


## Getting Started

### Prerequisties

Make sure you have the following installed on your machine:

- Node.js
- MongoDB


1. Clone the repository:
   ```bash
      git clone https://github.com/wifi1999/KusiShopping.git

2. Install the dependencies:
   ```bash
      cd api
      npm install
   ```
   ```bash
      cd client
      npm install
   ```

3. Create Environmental Variables:
```bash
   cd api
   touch .env
   MONGO_URL=your_mongodb_connection_url # insert this line to the .env file
   PASS_SEC=your_password_secure # insert this line to the .env file
   JWT_SEC=your_JWT_secret # insert this line to the .env file
   STRIPE_KEY=your_secret_stripe_key # insert this line to the .env file
```
```bash
   cd client
   touch .env
   REACT_APP_STRIPE=your_public_stripe_key # insert this line to the .env file
```

4. Starting the Application:
```bash
   cd api
   npm run dev
```
   The server will run on http://localhost:8080.

```bash
   cd client
   npm start
```
   The server will run on http://localhost:3000.

### Open your browser and go to http://localhost:3000 to use the application. Enjoy!


