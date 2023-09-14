# MovieBox - Movie Discovery Web Application

MovieBox is a dynamic movie discovery web application built with React and Vite. It allows users to search for movies, view movie details, and save their favorite movies. This README provides an overview of the project, instructions for running it locally, and other relevant information.

## Table of Contents
- [Demo](#demo)
- [Features](#features)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Dependencies](#dependencies)
- [Usage](#usage)
- [License](#license)

### Demo

You can check out the live demo of MovieBox [here](https://warm-bonbon-72cdea.netlify.app/). (Add the URL once your project is hosted)

### Features

1. **Top 10 Movies**: Displays the top 10 movies on the homepage in a grid layout with movie posters, titles, and release dates.

2. **Movie Search**: Allows users to search for movies by title, displaying search results with movie posters, titles, and release dates.

3. **Movie Details**: Users can click on a movie card to view movie details, including the title, release date, runtime, and overview.

4. **API Integration**: Fetches movie data from the TMDB API using various endpoints.

5. **Error Handling**: Provides meaningful error messages to users in case of API failures or other issues.

### Getting Started

Follow these instructions to set up and run the MovieBox web application locally on your machine.

#### Prerequisites

Before you begin, make sure you have the following installed on your system:

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/) (Node Package Manager)

#### Installation

1. Clone the repository to your local machine:

`git clone https://github.com/your-username/moviebox.git`

2. Navigate to the project directory:

`cd moviebox`

3. Install project dependencies:

`npm install`

### Usage

To start the development server and run the MovieBox web application, use the following command:

`npm run dev`

This will start the development server, and you can access the application in your web browser at `http://localhost:3000`.

#### Build for Production

To build the project for production, use the following command:

`npm run build`

This will create an optimized production build in the `dist` folder.

#### Linting

You can lint your code using ESLint with the following command:

`npm run lint`

### Project Structure

The project structure is organized as follows:

- `src/`: Contains the application source code.
  - `components/`: Includes React components.
  - `styles/`: Contains CSS stylesheets.
  - `assets/`: Stores images and other static assets.
- `public/`: Contains public assets and HTML template.
- `package.json`: Lists project dependencies and scripts.
- `vite.config.js`: Vite configuration file.

### Dependencies

MovieBox uses the following key dependencies:

- React: A JavaScript library for building user interfaces.
- React Router: For handling routing within the application.
- Vite: A build tool for JavaScript projects.

Refer to the `package.json` file for a complete list of dependencies and devDependencies.

### License

This project is licensed under the [MIT License](LICENSE).
