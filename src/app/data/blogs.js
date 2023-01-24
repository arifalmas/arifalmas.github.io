export const BLOGS = {
  title: "Latest Blogs",
  subtitle: "From My",
  typeWriter: ["Blogs", "Posts"],
  blogs: [
    {
      title: "Regular Expression or Regex",
      published_at: "2023-June-01",
      image: '/Asset/blog/regex.jpg',
      category: "Regular Expressions",
      author: "sumit saha",
      content: `Regular Expression or Regex //////
 
      With Regular Expression or Regex you can search text according to specific pattern from small or large String. Suppose you are given a website - https://www.learnwithsumit.com Now you are told to extract only the text "learnwithsumit" from this url. So how do you do it? Such problems can be solved easily with regex.
       
      What is regex used for?
      Regex can be used to join, separate and manipulate all types of text and data. It can be used as a simple command, like search and replace etc.
       
      How to use Regex in your daily work -
      1. User submits a form, can validate whether it is correct or not
      2. We can validate what is written in the search field.
      3. We can also check if a user is submitting a strong password
      
      Also this Regex can simplify many of our daily tasks. But now you may think I don't know JavaScript, how can I use Regex, or Regex is very difficult. Can I learn? So the answer is, Regex is not dependent on any programming language. You can use it with any language. And the answer to the second question is that before something is learned, it will be difficult. Don't be afraid of writing HGB, give some time, practice and watch the video, I hope you can do it. Now let's see some characters or some simple keys -

      1. /d = to select any digit
      2. /w = to select any word
      3. /s = to select any space
      4. /W = will select everything except word
      5. /D = will select everything except numbers
      6. /S = selects everything except white space or space
      7. /. = new will select everything except the line
      8. /[abc] = Select any one of these three words
      
      Let's see some examples now -
      Javascript REGEX USES
      1.const matches = 'aBC'.match(/[A-Z]/g);
      //Output: Array [B,C]
      You can find any matching pattern in the string by using *match
      2.const index = 'aBC'.search(/[A-Z]/);
      //Output: 1
      *You can use search to find out whether there is a single match or not
      3.const replaced = 'aBC'.replace(/a/,'A');
      //Output: ABC
You can replace the matching pattern by using *replace`,
    },
    {
      title: "What is Redux? Why do you need to learn Redux?",
      published_at: "2023-June-01",
      image: '/Asset/blog/redux.jpg',
      category: "React Redux",
      author: "learnwithsumit",
      content: `What is Redux? Why do you need to learn Redux?
      At the beginning, let's say Redux, nothing about React. Redux and React are two completely different libraries. However, seeing React and Redux used together, we may think that Redux seems to be a part of React. It is a complete mistake to assume that they are actually two different things. With Redux, we basically do state management work. Redux can be used with any UI library like - React, Angular, Vue etc.
      What is the state again?
      The general meaning of State is 'state', this state is understood by Data. Suppose you are on the Learn With Summit website. If you are logged in, some data will come from the database of LWS, maybe the 2nd batch of our THINK IN A REDUX WAY course, because of which you will get access to the videos and see some changes of the website that you cannot see when you are not logged in. This is the state.
      Can't React do state management by itself?
      Good question - React certainly can. React's component can be done by putting state in it. React's Unidirectional Data Flow manages state from parent component to child component. Let's make it simple: A tree flows water through its roots to its stem, from the stem to its branches, then to the branches, then to the leaves. Conversely, it does not. Now think about how many branches this water has to go through to reach the leaves. It may be that a stem does not need water at this moment, but it needs water to flow. 'Lifting state up' means the tree is working by keeping water/data in the root/parent component. A sprig grew, now it needs mineral salts, what will the tree do? From the beginning, he has to bring the mineral salt flow, because of this, he has to go through so many branches to take the mineral salt to the desired branch. Wouldn't it be easier if we could get water/sea salt directly to specific leaves/stems?
      Yes, let's come to a simple solution without making so much trouble. Well, coming to work. You can do this simple task with Redux. You could mineralize that specific pulse directly with Redux if you were to use Redux.
      However, if you intend to always project this problem, then you can run the work with React's state. Redux isn't mandatory for you, Redux keeps code organized and is more commonly used in large projects. Before learning Redux, these words are very necessary for you to know.
      Let's now know what Redux is?
      First I said Redux is a JavaScript library. The core of Redux is 3:
      Actions
      Reducers
      Store
      Redux saves all the data of the application in one place and that is called Store. Redux won't let you make changes to this store directly. You will tell Redux in advance what kind of changes should be made in the Store, and this is the Reducer (the most important part). Action is the message sent to Redux to tell it 'what is happening'. This is Redux.`,
    },
    {
      title: "A Complete Guide to CSS Grid | CSS-Tricks",
      published_at: "2023-June-01",
      image: '/Asset/blog/photo-3.webp',
      category: "CSS Grid",
      author: "Safvan P",
      content: `CSS Grid is a two-dimensional layout system that, compared to any web layout system of the past, completely changes the way we design user interfaces. Grid is the very first CSS module created specifically to solve the layout problems we've all been hacking our way around for as long as we’ve been making websites.`,
    },
    {
      title: "How ArrowJS compares to React and Vue.js",
      published_at: "2023-June-01",
      image: '/Asset/blog/photo-4.avif',
      category: "React & Vue",
      author: "teamliapp",
      content: `The frontend ecosystem is saturated with a plethora of frameworks, and it seems like new ones are being released daily. While many of these frameworks may not be as widely used as the more popular ones, some of them offer unique approaches that might pique your interest.

      In this article, we will introduce ArrowJS, a JavaScript tool for building reactive user interfaces, and compare its approach to those of popular UI frameworks such as React and Vue.js. We’ll explore how ArrowJS differs from these conventional frameworks and what sets it apart.
      What is ArrowJS?
ArrowJS is an experimental tool for building reactive user interfaces using pure JavaScript. It uses modern JavaScript features, such as template literals, modules, and proxies, to implement its templating structure, observable data, and declarative/reactive DOM rendering capabilities.

The creator of ArrowJS believes it’s not necessary to have a complex framework to create impressive and performant user interfaces on the web because JavaScript has evolved to be powerful enough to handle these tasks natively.

As a result, ArrowJS has no dependencies, no Virtual DOM, no build tool, and no special templating language. It is also very lightweight, weighing less than 3kB (min+Gzip). This makes it ultra-fast compared to frameworks like React and Vue, which have comparable features.

Unlike many other JavaScript frameworks, ArrowJS does not use a build tool or a templating language. This means there is no need for compilation or conversion during build time, leading to better performance.

In contrast, React uses JSX as its templating language, which must be compiled and converted into native JavaScript render functions before it can be run in the browser.

Why use ArrowJS?
There are several reasons to consider using ArrowJS, including the following key benefits:

Build UIs with plain JavaScript: With ArrowJS, there’s no need to learn a new language or framework as you can use your existing JavaScript knowledge to create powerful user interfaces
Reactive programming model: With ArrowJS, your UI updates automatically whenever the underlying data changes, making it easy to build dynamic and responsive user interfaces that can react to changes in real time
Lightweight and easy to use: ArrowJS has a simple API and a small footprint, so you can add it to your projects without adding much extra code or complexity
We’ll dive into each of these benefits a little later in this article.

Getting started with ArrowJS
There are three possible ways to set up an ArrowJS application: using a package manager, installing locally, or via CDN. Let’s take a look at each option.`,
    },
  ],
};
