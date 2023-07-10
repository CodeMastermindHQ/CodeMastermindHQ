/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/* eslint-disable global-require */

import {sortBy} from '@site/src/utils/jsUtils';

/*
 * ADD YOUR SITE TO THE DOCUSAURUS SHOWCASE:
 *
 * Requirements for adding your site to our showcase:
 * - It is a production-ready site with real content and decent customizations
 * (different from the init templates)
 * - It is NOT a work-in-progress with empty pages
 * - It has a stable domain (a Netlify/Vercel deploy preview is not allowed)
 *
 * Instructions:
 * - Add your site in the json array below
 * - `title` is your project's name (no need for the "Docs" suffix)
 * - A short (≤120 characters) description of your project
 * - Use relevant tags to categorize your site (read the tag descriptions below)
 * - Add a local image preview (decent screenshot of your Docusaurus site)
 * - The image MUST be added to the GitHub repository, and use `require("img")`
 * - The image has to have minimum width 640 and an aspect of no wider than 2:1
 * - If your website is open-source, add your source link. The link should open
 *   to a directory containing the `docusaurus.config.js` file
 * - Open a PR and check for reported CI errors
 *
 * Example PR: https://github.com/CodeMastermindHQ/CodeMastermindHQ/pull/3976
 *
 * If you edit this file through the GitHub interface, you can:
 * - Submit first your users.tsx edit PR
 * - This will create a branch on your Docusaurus fork (usually "patch-1")
 * - Go to https://github.com/<username>/docusaurus/tree/<branch>/website/src/data/showcase
 * - Drag-and-drop an image here to add it to your existing PR
 *
 * Please help us maintain this showcase page data:
 * - Update sites with wrong data
 * - Ensure site tags remain correct over time
 * - Remove sites not using Docusaurus anymore
 * - Add missing Docusaurus sites (if the site owner agreed)
 */

export type Tag = {
  label: string;
  description: string;
  color: string;
};

export type TagType =
  | 'favorite'
  | 'opensource'
  | 'product'
  | 'design'
  | 'i18n'
  | 'versioning'
  | 'large'
  | 'meta'
  | 'personal'
  | 'templates'
  | 'portfolio'  
  | 'clone';

export type User = {
  title: string;
  description: string;
  preview: string;
  website: string;
  source: string | null;
  tags: TagType[];
};

// LIST OF AVAILABLE TAGS
// Available tags to assign to your site
// Please choose all tags that you think might apply.
// We'll remove inappropriate tags, but it's less likely that we add tags.
export const Tags: {[type in TagType]: Tag} = {
  // DO NOT USE THIS TAG: we choose sites to add to favorites
  favorite: {
    label: 'Favorite',
    description:
      'Our favorite CodeMastermindHQ sites that you must absolutely check-out!',
    color: '#e9669e',
  },

  // For open-source sites, a link to the source code is required
  // The source should be your *website's* source, not your project's source!
  opensource: {
    label: 'Open-Source',
    description: 'Open-Source CodeMastermindHQ sites can be useful for inspiration!',
    color: '#39ca30',
  },

  product: {
    label: 'Product',
    description: 'CodeMastermindHQ sites associated to a commercial product!',
    color: '#dfd545',
  },

  design: {
    label: 'Design',
    description:
      'Beautiful CodeMastermindHQ sites, polished and standing out from the initial template!',
    color: '#a44fb7',
  },

  i18n: {
    label: 'I18n',
    description:
      'Translated CodeMastermindHQ sites using the internationalization support with more than 1 locale.',
    color: '#127f82',
  },

  versioning: {
    label: 'Versioning',
    description:
      'CodeMastermindHQ sites using the versioning feature of the docs plugin to manage multiple versions.',
    color: '#fe6829',
  },

  // Large sites, with a lot of content (> 200 pages, excluding versions)
  large: {
    label: 'Large',
    description:
      'Very large CodeMastermindHQ sites, including many more pages than the average!',
    color: '#8c2f00',
  },

  meta: {
    label: 'Meta',
    description: 'CodeMastermindHQ sites of Meta projects',
    color: '#4267b2', // CodeMastermindHQ blue
  },

  personal: {
    label: 'Personal',
    description:
      'Personal websites, blogs and digital gardens built with CodeMastermindHQ',
    color: '#14cfc3',
  },

  templates: {
    label: 'Templates',
    description:
      'CodeMastermindHQ sites using the templates reading direction support.',
    color: '#ffcfc3',
  },
  portfolio: {
    label: 'portfolio',
    description:
      'CodeMastermindHQ sites using the coding direction for portfolio.',
    color: '#ff4400',
  },

  clone: {
    label: 'Clone',
    description:
      'CodeMastermindHQ sites using the clone projects reading',
    color: '#004400',
  },

};

// Add your site to this list
// prettier-ignore
const Users: User[] = [
 
  {
    title: 'You Tube Clone',
    description: 'Build and Deploy a Modern YouTube Clone Application in React JS with Material UI 5',
    preview: require('./showcase/YouTube-Clone.jpg'),
    website: 'https://my-youtube-ajay.vercel.app/',
    source: 'https://github.com/Ajay-Dhangar/youtube_clone',
    tags: ['opensource', 'clone', 'templates'],
  },
  {
    title: 'EnvShare',
    description: 'Share Environment Variables Securely. Your document is encrypted in your browser before being stored for a limited period of time and read operations.',
    preview: require('./showcase/envshare.jpg'),
    website: 'https://envshare-ajay-dhangar.vercel.app/',
    source: 'https://github.com/Ajay-Dhangar/envshare',
    tags: ['opensource', 'clone', 'templates'],
  },
  {
    title: 'Quiz App',
    description: 'Explore and test your knowledge with the Quiz app. Engaging quizzes to challenge your mind and expand your horizons. Try it now!',
    preview: require('./showcase/quiz-app.jpg'),
    website: 'https://quiz-app-ajay-dhangar.vercel.app/',
    source: 'https://github.com/Ajay-Dhangar/Quiz-app',
    tags: ['opensource', 'clone', 'templates'],
  },
  {
    title: 'AI Mock Interview',
    description: 'Enhance your interview skills with AI-powered simulations, feedback, and personalized guidance.',
    preview: require('./showcase/ai-mock-interview.jpg'),
    website: 'https://ai-mock-interview.vercel.app/',
    source: 'https://github.com/Ajay-Dhangar/ai-mock-interview',
    tags: ['opensource', 'clone', 'templates'],
  },

  {
    title: 'TailwindBlog',
    description: 'The Starter app is a feature-rich Next.js and Tailwind CSS blogging starter template.',
    preview: require('./showcase/TailwindBlog.jpg'),
    website: 'https://starter-aj-zero-coding.vercel.app/',
    source: 'https://github.com/Ajay-Dhangar/starter',
    tags: ['opensource', 'clone', 'templates'],
  },

  {
    title: 'GERIGHT',
    description: 'Experience culinary excellence at Gericht Restaurant: Modern UI, showcasing The Key To Fine Dining.',
    preview: require('./showcase/gericht-restaurant-modern-ui.jpg'),
    website: 'https://ajay-1.vercel.app/',
    source: 'https://github.com/Ajay-Dhangar/gericht-restaurant-modern-ui',
    tags: ['opensource', 'templates', 'clone'],
  },

  {
    title: 'portfolio',
    description: "Check out Ajay Dhangar's impressive portfolio showcasing skills, projects, and achievements. Explore now!",
    preview: require('./showcase/ajay-dhangar.jpg'),
    website: 'https://ajay-dhangar.github.io/',
    source: 'https://github.com/Ajay-Dhangar/Ajay-Dhangar.github.io',
    tags: ['portfolio', 'personal'],
  },
  {
    title: 'To Do Js App',
    description: "To Do App with the help of JavaScript",
    preview: require('./showcase/to-do-js-app.png'),
    website: 'https://ajay-dhangar.github.io/To-Do-App-Js/',
    source: 'https://github.com/Ajay-Dhangar/To-Do-App-Js',
    tags: ['opensource', 'personal', 'templates'],
  },
  {
    title: 'CodeMastermindHQ',
    description: "Experience the power of real-world coding with CodeMastermindHQ.",
    preview: require('./showcase/CodeMastermindhq.jpg'),
    website: 'https://codemastermindhq.vercel.app/',
    source: 'https://github.com/Ajay-Dhangar/CodeMastermindHQ',
    tags: ['opensource', 'personal', 'templates'],
  },
  /*
  Pro Tip: add your site in alphabetical order.
  Appending your site here (at the end) is more likely to produce Git conflicts.
   */
];

export const TagList = Object.keys(Tags) as TagType[];
function sortUsers() {
  let result = Users;
  // Sort by site name
  result = sortBy(result, (user) => user.title.toLowerCase());
  // Sort by favorite tag, favorites first
  result = sortBy(result, (user) => !user.tags.includes('favorite'));
  return result;
}

export const sortedUsers = sortUsers();
