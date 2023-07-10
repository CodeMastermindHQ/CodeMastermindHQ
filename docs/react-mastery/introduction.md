---
id: intro-react
title: React Introduction
date: 2021-02-21 16:12:28
description: React
---

Components are like JavaScript functions. Takes input (called _props_) and return DOM element.

```jsx live
function Welcome(props) {
  const [likes, increaseLikes] = React.useState(0);

  return (
    <>
      <p>{likes} Likes</p>
      <h1>Hello, {props.name}</h1>
      <button class="button" onClick={() => increaseLikes(likes + 1)} />
    </>
  );
}
```
