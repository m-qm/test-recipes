## Test for Badi - Recipes App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

## `npm i``

Installs the required libraries for running the project.

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>

Chromium needs to be installed.

## Project Architecture

The app is divided in a Search Input component that receives the query and parses the results in a Card component.

The state of the app is contained in the SearchInput, that queries the API and renders the results when the query has more than 3 characters and the enter button is pressed.

The card component contains all the sections of Title, Image, Ingredients, Label and FavoriteButton.

## APP Schema

├── Tests                    # Test files #   
├── Utils                    # Scripts #     
│   ├── App         
│      ├── components        
│           └── SearchInput
│           └── RecipeCard
│                 └── Title
│                 └── Image
│                 └── Ingredients
│                 └── Label
|__________________________


## Reason of choices





