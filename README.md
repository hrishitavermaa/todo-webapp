# FocusFlow

FocusFlow is a simple Todo web application built using the MERN stack. It allows users to create, delete, and view a list of todos. The application utilizes ReactJS for the frontend, NodeJS and Express for the backend, and MongoDB for the database. Recoil is used for state management in the frontend.

![image](https://github.com/user-attachments/assets/c734f63e-7200-49d5-bbb9-cbd485979e40)


## Technologies Used

- **ReactJS**: A JavaScript library for building user interfaces.
- **NodeJS**: A JavaScript runtime built on Chrome's V8 JavaScript engine.
- **Express**: A fast, unopinionated, minimalist web framework for Node.js.
- **MongoDB**: A NoSQL database program, using JSON-like documents with optional schemas.
- **Mongoose**: An elegant MongoDB object modeling for Node.js.
- **Recoil**: A state management library for React.

## Features

- **Create Todo**: Add a new todo item to the list.
- **Delete Todo**: Remove a todo item from the list.
- **View Todos**: Display a list of all todos.

## Installation

To get a local copy up and running follow these simple steps.

### Prerequisites

Make sure you have the following installed on your machine:

- Node.js
- npm (Node Package Manager)
- MongoDB

### Backend

1. Clone the repository:
   
   ```sh
   git clone
   cd tasknest
   
3. Navigate to the backend directory:
   
   ```sh
   cd backend

5. Install backend dependencies:
   
   ```sh
   npm install

7. Create a .env file in the backend directory and add the following environment variables:
   
    ```sh
    MONGO_URI=your_mongo_db_connection_string
    PORT=4000

9. Start the backend server:
    
    ```sh
    node index.js

### Frontend

1. Open a new terminal and navigate to the frontend directory:

   ```sh
   cd frontend

2. Install frontend dependencies:
   
    ```sh
    npm install

3. Start the frontend development server:

    ```sh
    npm run dev

The application should now be running, with the frontend accessible at http://localhost:5173 and the backend at http://localhost:4000.

## Usage

1. Open your web browser and navigate to http://localhost:5173.
2. Add a new todo item by typing in the input field and clicking the "Add" button.
3. View the list of all todos.
4. Delete a todo item by clicking the "Delete" button next to the respective todo.

## Project Structure

    tasknest/
    ├── backend/
    │   ├── config/ (.env)
    │   ├── controllers/
    │   ├── middlewares/
    │   ├── models/
    │   ├── routes/
    │   ├── utils/
    │   ├── index.js
    │   └── ...
    └── frontend/
        ├── src/
        │   ├── components/
        │   ├── store/
        │   ├── App.js
        │   ├── index.css
        │   ├── index.js
        │   └── ...
        ├── public/
        │   └── logo.png
        ├── index.html
        └── ...

## Contributing
Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are greatly appreciated.

1. Fork the Project
2. Create your Feature Branch (git checkout -b feature/<feature-name>)
3. Commit your Changes (git commit -m 'Add some <feature-name>')
4. Push to the Branch (git push origin feature/<feature-name>)
5. Open a Pull Request

## License
Distributed under the MIT License. See LICENSE for more information.
