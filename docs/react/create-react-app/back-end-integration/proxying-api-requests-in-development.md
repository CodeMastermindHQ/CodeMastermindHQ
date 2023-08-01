---
id: proxying-api-requests-in-development
title: Proxying API Requests in Development
sidebar_label: Proxying API Requests
sidebar_position: 1
date: 2021-02-25 11:08:29
---

```mdx-code-block
import BrowserWindow from '@site/src/components/BrowserWindow';
import CodeBlock from '@theme/CodeBlock';
import card from '@site/src/css/markdown.module.css'
import './../css/style.css'
```

When building a React app, you might encounter a common scenario where your frontend and backend are served from different hosts or ports. This separation could lead to [CORS issues](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS) during development, causing your API requests to fail and producing error messages in your browser console.

To tackle this problem and make your development process smoother, Create React App offers a straightforward way to proxy API requests during development. In this guide, we'll explore how to set up proxying, understand its benefits, and handle some common issues that might arise.


## Introduction:
In this guide, we'll explore how to efficiently handle API requests during the development of your React app using Create React App (CRA). Proxying API requests is a crucial step to avoid CORS issues and seamlessly interact with your backend server while developing locally. We'll break down the process step-by-step and sprinkle in some fun details to make your learning journey enjoyable!

## Section 1: Setting up a Create React App project
Before we delve into proxying API requests, let's set up a new Create React App project to get started:

### Step 1: Install Create React App
First, ensure you have Node.js and npm installed on your machine. Open your terminal and run the following command:

```bash
npx create-react-app my-react-app
```

### Step 2: Navigate to your project
Next, move into your newly created project directory:

```bash
cd my-react-app
```

### Step 3: Start the development server
To launch your React app in development mode, run:

```bash
npm start
```

Now your app should be running at `http://localhost:3000/`.

<BrowserWindow style={{backgroundColor: "#282c34"}}>
    <body >
    <div style={{textAlign: 'center'}}>
      <header style={{minHeight: '80vh', display:' flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', fontSize: 'calc(10px + 2vmin)', color: '#fff'}}>
        <img src="https://raw.githubusercontent.com/CodeMastermindHQ/CodeMastermindHQ/7072abb527b8d225d5646fe4a2d73b7dc50ef7ae/static/dev-img/react.svg" className="App-logo" alt="logo" />
        <br/>
        <p>
          Edit src/App.js and save to reload.
        </p> 
        <a
          style={{color: '#61dafb'}}
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
    </body>
</BrowserWindow>

## Section 2: Understanding the need for proxying API requests
When you develop a React app, you'll often need to fetch data from an API hosted on a different domain or port. Browsers enforce a security feature called the Same-Origin Policy, which restricts cross-origin requests. As a result, you might encounter CORS errors when trying to access the API directly from your React app.

Proxying solves this problem by creating a tunnel between your frontend and backend, allowing you to make requests as if they were originating from the same domain.

## What is Proxying in Development?

Proxying is a technique used to redirect certain requests from one server to another. In the context of Create React App, we can use proxying to redirect our API requests from the development server (running on, for example, `http://localhost:3000`) to our backend server (e.g., `http://localhost:4000`).

By setting up a proxy, you can avoid CORS-related headaches during development and make API requests as if they were coming from the same host and port as your frontend, simplifying your code and making your development environment more comfortable.

## Setting Up Proxying

Create React App makes proxying API requests incredibly easy. To get started, follow these steps:

1. Locate the `proxy` Field:

In your React app's `package.json` file, add a `proxy` field. This field specifies the address of your backend API server.

```json title="package.json"
{
  "name": "your-react-app",
  "version": "x.x.x",
  "proxy": "http://localhost:4000",
  // ... other configurations ...
}
```

2. Restart the Development Server:

Once you've added the `proxy` field, stop your development server (if it's running) and start it again using the command `npm start`. This will activate the proxy settings and enable you to make API requests from your React app without encountering CORS issues.


## Section 3: Configuring proxy in Create React App
Now, let's configure the proxy for our API requests in the Create React App project:

### Step 1: Create a `setupProxy.js` file
Inside the `src` folder of your project, create a file named `setupProxy.js`. This file will contain our proxy configuration.

### Step 2: Install http-proxy-middleware
To set up the proxy, we need a middleware package called `http-proxy-middleware`. Install it by running:

```bash
npm install http-proxy-middleware --save
```

### Step 3: Proxy configuration
In the `setupProxy.js` file, add the following code to set up the proxy for your API:

```javascript title="setupProxy.js "
const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://your-backend-server.com', // Replace this with your backend server URL
      changeOrigin: true,
    })
  );
};
```

Replace `'http://your-backend-server.com'` with the base URL of your backend server.

## Section 4: Fetching data from the API
With the proxy set up, you can now fetch data from your backend server without worrying about CORS issues. Let's create a sample API request to illustrate this:

```javascript title="App.js"
import React, { useState, useEffect } from 'react';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('/api/data') // This will be proxied to 'http://your-backend-server.com/api/data'
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <div>
      <h1>Welcome to My React App</h1>
      <ul>
        {data.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
```

## "Invalid Host Header" Error and How to Handle It

In some cases, after configuring the proxy, you might encounter an "Invalid Host Header" error when developing remotely. This issue arises due to stricter host checks to prevent DNS rebinding attacks.

To resolve this error, create a `.env.development` file at the root of your project and specify your public development host:

```
HOST=mypublicdevhost.com
```

Restart the development server, and the error should disappear.

:::note
If you're using a more exotic environment like a cloud editor, you can bypass the host check entirely, but this is risky and not recommended:
:::

```ini
# NOTE: THIS IS DANGEROUS!
# It exposes your machine to attacks from the websites you visit.
DANGEROUSLY_DISABLE_HOST_CHECK=true
```

Use this approach with caution and only when necessary.

## Configuring the Proxy Manually (Advanced Option)

While the built-in `proxy` field in `package.json` works well for most cases, there might be situations where you need more flexibility. In such cases, you can configure the proxy manually by setting up a `setupProxy.js` file in your `src` directory.

Here's how:

1. Install `http-proxy-middleware`:

```sh
$ npm install http-proxy-middleware --save
$ # or
$ yarn add http-proxy-middleware
```

2. Create `src/setupProxy.js`:

```javascript
const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://localhost:5000',
      changeOrigin: true,
    })
  );
};
```
:::note
This file is automatically registered when you start the development server, so there's no need to import it elsewhere.
:::

By using the manual setup, you gain more control over your proxy configuration, allowing for advanced routing and customization.


## Conclusion:
Congratulations! You've successfully learned how to proxy API requests during development with Create React App. By using proxying, you've simplified your development environment and avoided troublesome CORS issues.

Whether you choose the built-in `proxy` field or the more flexible manual setup, understanding how to handle API requests effectively will boost your productivity and make building React apps a delightful experience.

Happy coding! 🚀

:::caution warn
Remember to replace `'http://your-backend-server.com'` with your actual backend server URL. Feel free to explore more about the `http-proxy-middleware` and other exciting features of Create React App as you continue your journey as a Code Mastermind!
:::

<!-- ========================================================== -->

