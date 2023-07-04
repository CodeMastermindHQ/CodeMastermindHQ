---
id: intro-html
title: Introduction to HTML
date: 2022-05-11 16:49:29
sidebar_position: 2
---


```mdx-code-block
import BrowserWindow from '@site/src/components/BrowserWindow';
import CodeBlock from '@theme/CodeBlock';
import card from '@site/src/css/markdown.module.css'
```

## What is HTML?
HTML ( [Hypertext Markup Language](/blog/2023/07/04/hypertext-markup-language) ) is the standard markup language used for creating and structuring web pages. It provides a way to describe the structure and content of a webpage using tags and elements. HTML documents are interpreted by web browsers to display the webpage to users.


### HTML Structure and Syntax
HTML documents follow a specific structure and syntax:

```html title="index.html"
<!DOCTYPE html>
<html>
<head>
    <title>Page Title</title>
</head>
<body>
    <h1>Heading 1</h1>
    <p>This is a paragraph.</p>
</body>
</html>
```

<BrowserWindow>
      
      <body>
          <h1>Heading 1</h1>
          <p>This is a paragraph.</p>
      </body>
      
 </BrowserWindow>

:::tip Code Explaination:

- `<!DOCTYPE html>`: This declaration defines the document type and version of HTML being used (HTML5 in this case).
- `<html>`: The root element of an HTML document. It contains the entire content of the webpage.
- `<head>`: This element represents the head section of the HTML document. It contains meta information, title, and linked CSS or JavaScript files.
- `<title>`: The title of the webpage that appears in the browser's title bar or tab.
- `<body>`: The body section of the HTML document. It contains the visible content of the webpage, including headings, paragraphs, images, links, etc.

:::

## Setting up an HTML Document
To create an HTML document, follow these steps:

1. Open a text editor (e.g., Notepad, Sublime Text, Visual Studio Code).
2. Start with the `<!DOCTYPE html>` declaration to specify the HTML version.
3. Add the `<html>` element as the root element.
4. Inside the `<html>` element, add the `<head>` and `<body>` elements.
5. Within the `<head>` element, include the `<title>` element to specify the webpage's title.
6. Within the `<body>` element, add the desired content using HTML tags and elements.

## Viewing an HTML File in a Web Browser
To view an HTML file in a web browser, follow these steps:

1. Save the HTML file with the .html extension (e.g., index.html).
2. Open a web browser (e.g., Chrome, Firefox, Safari).
3. In the browser, go to the File menu and choose "Open File" or use the keyboard shortcut (e.g., Ctrl+O).
4. Browse and select the HTML file you want to view.
5. Click "Open" or press Enter.
6. The web browser will render and display the HTML content, showing the webpage as intended.

By following these steps, you can create an HTML file and view it in a web browser to see how the tags and elements are interpreted and displayed.

Here's an example of the basic structure of an HTML document:

```html title="index.html"
<!DOCTYPE html>
<html>
  <head>
    <title>My First Web Page</title>
  </head>
  <body>
    <h1>Welcome to My Website</h1>
    <p>This is the content of my web page.</p>
    <img src="https://ajay-dhangar.github.io/portfolio/Assets/img/author.jpg" alt="My Image" width="100px" border="1px"> <br /><br />
    <a href="https://ajay-dhangar.github.io/portfolio/">Click here</a> to visit a website.
  </body>
</html>
```

 <BrowserWindow>
      
          <body>
            <h1>Welcome to My Website</h1>
            <p>This is the content of my web page.</p>
            <img src="https://ajay-dhangar.github.io/portfolio/Assets/img/author.jpg" alt="My Image" width="100px" border="1px" /> <br /><br />
            <a href="https://ajay-dhangar.github.io/portfolio/">Click here</a> to visit a website.
          </body>

</BrowserWindow>

## Basic HTML Tags: `<html>`, `<head>`, `<body>`

- `<html>`: The `<html>` element is the root element of an HTML document. It wraps all the other elements on the page and serves as the starting point for every HTML document.

- `<head>`: The `<head>` element contains meta-information about the HTML document, such as the document title, character encoding, linked stylesheets, and scripts. It does not display any content directly on the page.

- `<body>`: The `<body>` element represents the main content of the web page. It contains all the visible elements that are displayed in the browser window, such as headings, paragraphs, images, links, and more.

These tags work together to structure and define the content of an HTML document. The `<html>` tag encapsulates the entire document, the `<head>` tag provides metadata, and the `<body>` tag holds the visible content.

Understanding the basic structure and tags of an HTML document is essential before diving deeper into building web pages and applications.

## History of HTML:
The history of HTML (Hypertext Markup Language) dates back to the early days of the World Wide Web. Here's a brief overview of its evolution:

**1. Birth of HTML (1989-1990)**: HTML was initially developed by ***Tim Berners-Lee***, a British computer scientist, while working at CERN (European Organization for Nuclear Research). In 1989, Berners-Lee created the first version of HTML, which included basic tags for structuring documents and embedding links.

**2. HTML 2.0 (1995)**: HTML 2.0 was the first official specification for HTML. It introduced features like tables, image embedding, form elements, and basic styling. HTML 2.0 formed the foundation for the early web and standardized many elements and attributes.

**3. HTML 3.2 (1997)**: HTML 3.2 introduced further enhancements and new features, such as support for frames, client-side image maps, and improved form controls. It was widely adopted by web browsers and laid the groundwork for more complex web designs.

**4. HTML 4.01 (1999)**: HTML 4.01 refined and expanded the features of previous versions. It introduced more sophisticated styling options through the use of Cascading Style Sheets (CSS). This version also provided better support for scripting languages like JavaScript.

**5. XHTML (2000-2002)**: XHTML (Extensible Hypertext Markup Language) aimed to combine the flexibility of HTML with the stricter syntax of XML (eXtensible Markup Language). XHTML 1.0 was based on HTML 4.01 and followed the rules of XML, enforcing strict syntax and proper nesting of elements.

**6. HTML5 (2008-2014)**: HTML5 represented a significant milestone in the evolution of HTML. It introduced new semantic elements, multimedia support (audio and video), canvas for graphics, drag-and-drop functionality, local storage, and improved form controls. HTML5 also emphasized compatibility with mobile devices and provided better accessibility features.

**7. HTML5.1, HTML5.2, and Beyond**: After the release of HTML5, subsequent minor revisions like HTML5.1 (2016) and HTML5.2 (2017) followed, introducing additional features and improvements. The HTML working group continues to develop new versions, enhancing existing capabilities and addressing emerging web technologies.

---------------------------------------------

## HTML versions features / differences:

***Here's a comparison of the major HTML versions along with their defining features:***

1. **HTML 2.0 (1995):**
   - Introduced basic structure and elements for web documents.
   - Supported headings, paragraphs, lists, links, images, and basic tables.
   - Provided support for forms and form elements.
   - Laid the foundation for subsequent HTML versions.

2. **HTML 3.2 (1997):**
   - Introduced new features and improvements over HTML 2.0.
   - Added support for frames, client-side image maps, and improved tables.
   - Included support for aligning and styling text and images.
   - Enhanced accessibility with alt attributes for images.

3. **HTML 4.01 (1999):**
   - Refined the HTML syntax and introduced better compatibility.
   - Introduced the use of Cascading Style Sheets (CSS) for styling web pages.
   - Provided enhanced support for scripting languages like JavaScript.
   - Introduced more robust form controls and input types.
   - Supported multimedia embedding through the object and embed elements.

4. **XHTML 1.0 (2000):**
   - Combined the flexibility of HTML with the stricter syntax of XML.
   - Required adherence to XML rules, including proper nesting and closing tags.
   - Improved support for accessibility and device compatibility.
   - XHTML 1.0 Strict emphasized separation of content and presentation.

5. **HTML5 (2008-2014):**
   - A major revision that introduced numerous new features and improvements.
   - Introduced semantic elements (header, footer, nav, article, section, etc.) for better document structure.
   - Supported multimedia elements natively, such as audio and video.
   - Introduced the canvas element for graphics and animations.
   - Provided support for offline web applications with local storage.
   - Improved form controls and introduced new input types (email, date, range, etc.).
   - Included geolocation API, drag-and-drop functionality, and WebSockets.
   - Enhanced accessibility features and introduced ARIA attributes.
   - Improved mobile device compatibility and responsiveness.

6. **HTML5.1 (2016) and HTML5.2 (2017):**
   - Minor revisions that introduced additional features and improvements.
   - HTML5.1 introduced new elements like `<main>`, `<dialog>`, and `<picture>`.
   - HTML5.2 introduced new form validation attributes and web component specifications.
   - Both versions focused on refining and clarifying existing features.

:::tip interview questions

1. **What is HTML?**
   - HTML stands for Hypertext Markup Language. It is the standard markup language used for creating the structure and content of web pages.

2. **What is the purpose of HTML in web development?**
   - HTML provides a way to describe the structure and content of a webpage. It defines the elements and tags used to display text, images, links, forms, and other content on a website.

3. **What is the structure of an HTML document?**
   - An HTML document has a specific structure consisting of `<html>`, `<head>`, and `<body>` elements. The `<html>` element is the root element that contains the entire webpage. The `<head>` element contains meta information, title, and linked CSS or JavaScript files. The `<body>` element holds the visible content of the webpage.

4. **What is the purpose of the `<!DOCTYPE html>` declaration?**
   - The `<!DOCTYPE html>` declaration specifies the HTML version and document type being used. It helps web browsers understand and render the HTML document correctly.

5. **How do you set the title of a webpage?**
   - The title of a webpage is set using the `<title>` element within the `<head>` section of the HTML document. The text placed within the `<title>` tags will be displayed as the title of the webpage in the browser's title bar or tab.

6. **How do you view an HTML file in a web browser?**
   - To view an HTML file in a web browser, you need to save the HTML file with the .html extension and open it in a web browser by using the "Open File" option or dragging the file into the browser window. The web browser will render and display the HTML content.

7. **Can you explain the difference between the `<head>` and `<body>` sections in an HTML document?**
   - The `<head>` section contains metadata about the document, such as the title, linked CSS or JavaScript files, and other related information. It is not visible on the webpage. The `<body>` section contains the visible content of the webpage, including text, images, links, and other elements that users can see and interact with.
:::