# Skillflash Start up guide

## Table of contents

- [File Structure](#file-structure)
- [Web Structure](#web-structure)
- [Web running](#web-running)

## File Structure

- The Skillflash repository contains, the folder for the web application `skillflash.github.io`. The Web platform is a project created with `npx create-react-app <app-name>`

## Web Structure

- This is where the Skillflash code for the web architecture will reside. This architecture consist of the `src` folder where all the code will reside. This folder consist of various folders which is used for specific purposes (components, hooks, redux, resources, routes, pages, translation, utils, sections)

### Pages

- Where complete architecture of a Page will be developed then used in the routes folder for navigation

### Sections

- Where larger components are developed, components that can be used only once, to reduce code crowding in pages (viewports), examples include headers, sections to display all the experts, sections to display projects

### Components

- Used for the development of resusable code (React based code), that is code that is used atleast twice in different locations of the code.

### Hooks

- Used for the development of hooks, that's code that communicate with APi's

### Redux

- Code used for state management.

### resources

- Where all static code lies, ( Images, and the application's theme, ie color etc)

### Routes

- Where the code to control navigation will reside

### Utils

- Where resubale code will reside, (sorting code, Separator or Hyphenator, queries, code etc)

## Web running

- Clone the repository from GitHub `https://github.com/Skillflash/skillflash.github.io.git`
- Navigate to the web folder ` cd skillflash.github.io/`
- Add the .env file with the environment variables.
- Run `npm i` or use a similar `yarn` command to install all dependencies
- After completion run `npm start` you should have the application running on `http://localhost:3000/` or on you network address port `:3000`, open a web browser of choice and open this address you should have the platform running.
