# Website


[![Netlify Status](https://api.netlify.com/api/v1/badges/af9f9088-4e9f-433e-b070-2edd6c7e8218/deploy-status)](https://app.netlify.com/sites/codemastermindhq/deploys)


This website is built using [Docusaurus 2](https://v2.docusaurus.io/), a modern static website generator.

Here's how you can deploy your Docusaurus 2 website using npm instead with GitHub Pages:

### Step 1: Install Dependencies
In your project directory, open a terminal and run the following command to install the dependencies:
```
npm install
```

### Step 2: Local Development
To start a local development server and open up a browser window, run the following command:
```
npm start
```
This will reflect most changes live without having to restart the server.

### Step 3: Build
To generate static content into the build directory, run the following command:
```
npm run build
```

### Step 4: Deployment
To deploy your website, you can use GitHub Pages or any other static content hosting service. Assuming you are using GitHub Pages, follow these steps:

1. Set up your repository for GitHub Pages as mentioned in the previous instructions.
2. Open your `package.json` file in a code editor.
3. Update the `"scripts"` section as follows:
   ```json
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d build",
     "clean": "gh-pages-clean",
     "start": "docusaurus start",
     "build": "docusaurus build",
     "serve": "docusaurus serve"
   }
   ```

### 4. In the terminal, run the following command to deploy your website to GitHub Pages:
   ```
   npm run deploy
   ```
   This command will build the website and push it to the `gh-pages` branch.

Ensure that the necessary changes are made to the `docusaurus.config.js` file according to your project and repository settings.
