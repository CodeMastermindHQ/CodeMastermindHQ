---
id: available-scripts
title: Available Scripts
sidebar_position: 4
---

In your project directory, you can use the following scripts:

## `npm start`

This script runs your app in development mode. It starts a local server and opens your app in a web browser at [http://localhost:3000](http://localhost:3000). Whenever you make changes to your code, the page will automatically reload. If there are any errors in your code, you will see them in the console.

## `npm test`

This script launches the test runner in interactive watch mode. It helps you run tests for your app and provides feedback. You can learn more about running tests in the [running tests](running-tests) section.

## `npm run build`

This script builds your app for production. It creates an optimized version of your app in the `build` folder. The production build is minified and the filenames include unique hashes to ensure browser caching works correctly. React is also bundled in production mode for better performance. If needed, you can enable class and function names for profiling purposes. You can find more information about the production build process in the [production build](production-build) section.

Your app is now ready to be deployed! Check out the [deployment](./deployment) section to learn how to deploy your application to popular hosting providers.

## `npm run eject`

**Note: This is a one-way operation. Once you `eject`, you can't go back!**

If you're not satisfied with the build tool and configuration choices, you can use this script to eject. Ejecting removes the single build dependency from your project.

Instead, it copies all the configuration files and the necessary dependencies (like webpack, Babel, ESLint, etc.) into your project's `package.json`. The distinction between regular dependencies and development dependencies is less important for front-end apps that produce static bundles.

In the past, this separation caused issues with some hosting platforms that didn't install development dependencies. As a result, they couldn't build or test the project properly before deployment. By ejecting, you're free to arrange your dependencies in `package.json` as you see fit.

All the commands except `eject` will continue to work, but they will now refer to the copied scripts, allowing you to customize them. However, from this point forward, you're responsible for maintaining and configuring the build tools on your own.

Remember, you don't have to use `eject`. The pre-configured features are suitable for small to medium deployments, and you're not obligated to use this customization feature. However, we understand that customization is important when you're ready for it.
