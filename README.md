# MongoDB Aggregation with Mongoose and React

This project demonstrates the use of aggregate functions in MongoDB with Mongoose through an Express.js backend and a React.js frontend. It covers the following:

- Connecting to a MongoDB database using Mongoose.
- Performing various MongoDB aggregation functions such as `grouping`, `average calculation`, and `sorting`.
- A React frontend for submitting data to the backend and fetching/displaying the aggregated results.

## Live Demo

- [Frontend Link](https://aggregate-function.vercel.app/)
- [Backend Link](https://aggregate-function-backend.vercel.app/)
- [Frontend Repository Link](https://github.com/nks854338/AggregateFunction)
- [Backend Repository Link](https://github.com/nks854338/AggregateFunctionBackend)

## API Endpoints

### POST `/data`
Adds data to the MongoDB collection.

- **Method**: `POST`
- **URL**: `https://aggregate-function-backend.vercel.app/data`

### GET `/aggregate`
Performs aggregation operations such as grouping, averaging, and sorting.

- **Method**: `GET`
- **URL**: `https://aggregate-function-backend.vercel.app/aggregate`

## Example Aggregate Operations

- **Group by City**: Groups users by their city and returns the count of users in each city.
- **Average Age**: Calculates the average age of users.
- **Sort by Name**: Sorts the user data alphabetically by name.

## Technologies Used

- **Backend**: Node.js, Express.js, Mongoose, MongoDB
- **Frontend**: React.js
- **Deployment**: Vercel, MongoDB Atlas

## How to Contribute

Feel free to fork this project, make improvements, and submit a pull request. Any feedback or suggestions are welcome!
