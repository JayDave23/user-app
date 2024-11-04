# CRUD App with Next.js, Redux, and SCSS

This is a simple CRUD (Create, Read, Update, Delete) application built using **Next.js** with **Redux** for state management and **SCSS** for styling. The app displays a list of users on the home screen. Users can view detailed information, edit user data, or delete users.

## Features

- **View Users**: Users are fetched and displayed on the home screen.
- **User Details**: Clicking on a user shows their detailed information.
- **Edit Users**: User details can be modified and saved.
- **Delete Users**: Users can be deleted from the list.

## Technologies Used

- **Next.js**: A React framework for server-rendered and static web applications.
- **Redux**: For global state management of user data.
- **SCSS**: For styling the components with modular and customizable styles.

## Getting Started

1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   ```
   
2. **Navigate to the project directory**:
   ```bash
   cd userapp
   ```
   
3. **Install dependencies**:
   ```bash
   npm install
   ```

4. **Run the application**:
   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) to view the app in the browser.

## Project Structure
- `components/`: Reusable components used throughout the app.
- `redux/`: Contains Redux store, actions, and reducers.

## Usage

1. **View All Users**: The home screen displays a list of users fetched from the backend.
2. **View Details**: Click on any user to view more detailed information.
3. **Edit User**: Edit the user's details on the user details page, then save changes.
4. **Delete User**: Delete any user from the list.
