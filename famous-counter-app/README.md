# Next.js Template

A modern Next.js template project, designed for rapid front-end development with best practices and a robust developer experience. This template leverages the latest technologies and tools to help you kickstart your next web application.

## Project Overview

This template provides a solid foundation for building scalable, high-performance web applications with Next.js. It includes essential tooling, code quality integrations, and a ready-to-use Docker setup for local development and deployment.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Development Scripts](#development-scripts)

## Features

- **Responsive Design**: Fully responsive layout with smooth animations.
- **Interactive Animations**: Seamless transitions powered by Next View Transition.
- **Tailwind CSS Integration**: Utility-first CSS framework for rapid UI development.
- **TypeScript Support**: Enhanced type safety and development experience.
- **Image Optimization**: Efficient image handling with Sharp for performance.
- **Linting and Formatting**: Code quality maintained with ESLint and Prettier.
- **Dockerized Development**: Easy setup and consistent environments using Docker.

## Technologies Used

- **[Next.js](https://nextjs.org/)** - React framework for server-side rendering and static website generation.
- **[React](https://reactjs.org/)** - JavaScript library for building user interfaces.
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework for rapid UI development.
- **[TypeScript](https://www.typescriptlang.org/)** - JavaScript with static typing.
- **[Sharp](https://sharp.pixelplumbing.com/)** - High-performance image processing.
- **[Knip](https://knip.dev/)** - Tool for managing your Next.js project's file and folder structure.
- **[Docker](https://www.docker.com/)** - Containerization platform for consistent development and deployment.

## Installation

To set up this project locally with Docker, follow these steps:

1. **Clone the repository**:

   ```bash
   git clone https://github.com/Danielkhakbaz/Nextjs-Template
   cd Nextjs-Template
   ```

2. **Build the Docker image**:

   ```bash
   docker build -t next-template:dev .
   ```

3. **Run the development server in Docker** (with live reload):

   ```bash
   docker run -p 3000:3000 -v $(pwd):/app -v /app/node_modules next-template:dev
   ```

   - The app will be available at [http://localhost:3000](http://localhost:3000)
   - Changes to your code will be reflected automatically.

   **Alternatively, using Docker Compose:**

   ```bash
   docker compose up --build
   ```

   (Edit `compose.yml` as needed for custom settings.)

4. **(Optional) Local development without Docker**:

   Install dependencies and run the dev server:

   ```bash
   pnpm install
   pnpm dev
   ```

## Development Scripts

Here are some helpful scripts to assist in the development and maintenance of this project:

- `dev`: Runs the app in development mode.
- `build`: Compiles the app for production.
- `start`: Starts the production server.
- `lint`: Lints and fixes files using ESLint.
- `fix`: Formats files using Prettier.
- `knip`: Analyzes the project structure and provides suggestions for improvement.
- `check-prettier`: Checks the code format without making changes.
