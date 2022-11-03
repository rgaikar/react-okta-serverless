# React Okta Serveless Starterkit

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Table of Content:

- [About The App](#about-the-app)
- [Technologies](#technologies)
- [Setup](#setup)
- [Deployment](#deployment)
- [License](#license)

## About The App

This app shows how to create React based app using Okta as authentication provider. This app showcase the serverless deployment using github actions on AWS S3 bucket and Cloudfront Distributions.

This project contains source code and supporting files for single page application. It includes following folders:

- **assets**: Images and Logos for the application.
- **auth**: Roles Access and Permissions.
- **components**: React components code for the application.
- **config**: Okta configuration for the application.
- **pages**: Pages in the application
- **services**: To make API calls.

## Technologies

We have used `html`, `scss`, `js`, `typescript` to build the Single Page App

### Third party Libraries

We have used the following libraries.

- [React](https://reactjs.org/)
- [React Router Dom](https://reactrouter.com/)
- [Material UI](https://mui.com/)
- [Okta Auth JS](https://www.npmjs.com/package/@okta/okta-auth-js)
- [Okta React](https://www.npmjs.com/package/@okta/okta-react)

## Setup

1. Download and install [Node.js](https://nodejs.org/en/download/).
2. Download and install [Git](https://git-scm.com/downloads).
3. Clone [this](https://github.com/oneTakeda/lrcp_automation_frontend.git) repositry.

In the cloned project directory, you can run:

### `yarn install`

This will install all the project dependecies.

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Deployment

### Environments

User can create different environments on the Github

Github -> Settings -> Environment

We have created three different environemnts for LRCP application deployment

1. Development
2. Staging
3. Production

### Enviornment Variables

Environment variables can be directly added to Github Respository for a particular environment.

Github -> Setting -> Environemnt

- **REACT_APP_API_ENDPOINT_URL**: AWS API Gateway URL
- **REACT_APP_ISSUER**: OKTA APP ISSUER URL
- **REACT_APP_CLIENT_ID**: OKTA APP Client Id
- **AWS_CLOUDFRONT_DISTRIBUTION_ID**: AWS Clouddfront Distribution Id
- **AWS_REGION**: AWS Region (This is the region where AWS S3 is created)
- **AWS_ROLE_TO_ASSUME**: AWS ROLE to Deploy the build files to AWS S3 and to invalidate Cloudfront Cache
- **AWS_S3_BUCKET** : AWS S3 bucket where frontend code will be deployed

### Deploy to Development environment

The deployment to development environment is automated and gets triggered from `develop` branch when a Pull Request is merged into develop.

### Deploy to Staging / Production environment

The deploymemt to staging / production environemnt can be triggered manually from the Github Actions. User can select the branch name and environemnt to deploy to.

Github -> Actions -> Select Workflow (Manual Deploy to S3)
