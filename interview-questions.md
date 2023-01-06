# ASSESSMENT 3: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory as if you were in a job interview.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. What is JSX? What is one syntax difference between HTML and JSX?

Your answer:  JSX is a JavaScript syntax extension that allows HTML elements to be written directly into JavaScript.  This is beneficial because one major syntax difference is that you typically cannot assign attributes to an element in JavaScript, but JSX allows you to put HTML code (along with its various attributes) directly into your JavaScript elements.
Another difference between JSX and HTML is that JSX requires you to return a "parent" element or the code will not work, while HTML is able to be compiled without a parent element being assigned.

Researched answer:  One major item I found while I was researching JSX versus HTML is this:
    HTML is supported by all major browsers, JSX was never intended to be and will not work correctly without a translator such as Babel or WebPack to transpile the JavaScript code.

2. What is yarn? What file(s) are modified in a React application when you run the command yarn in your terminal?

Your answer:  YARN is first and foremost a package manager for JavaScript and other programming languages that allow ease of managing the various elements needed for JS to compile easily.  If you were to try to keep track of all of the packages needed, you could take weeks to locate, update, utilize the necessary packages, as well as remove the unneeded ones.  Specifically in reference to a REACT application, the files that are modified when you run the command YARN in a terminal are 

Researched answer:  One key thing I noted in my research for this question is that YARN is not only a package manager, but it doubles as a project manager.  

3. What is a React component?

Your answer: A REACT component is an independent and reusable piece of code, which runs in isolation and returns HTML.  REACT components must start with a capital letter.

Researched answer:  There are two types of components in REACT, these being CLASS and FUNCTION.  In REACT, a CLASS component must include the extends React.Component statement.  This statement will allow the creation of an inheritance to React.Component and allows the function to utilize the React.Component functions.  A REACT Function, on the other hand, will provide the same information as a React Class, but will need much less code to accomplish the same thing.  The CLASS component is mostly used in older versions of React, while the preferred way to write component now is to use the FUNCTION component.


4. What is the difference between state values and props in React?

Your answer:  Props in React are used to pass arguments to the component, similar to parameters in a function.  State in React is used to manage data within the component, in the same manner as one would declare a variable within a function.

Researched answer:  During my research, I noted that there are 4 main similarities between state and props in React, which I list as follows:
    1. Both props and state are plain JS objects.
    2. Both props and state are used to trigger  a render update.
    3. Both props and state are deterministic, in that they both should return the same render when used.
In noting the similarities, I noted the one big difference in that Props are required to render one's output correctly, while State is not required to do a render correctly.


5. What is the DOM?

Your answer:  The DOM (Document Object Model) represents the web page using a family-like system.  It shows the top level, or parent element, and below that it will show the various components being used, similar to the children elements in a family tree.

Researched answer:  While researching, one key thing I learned about the DOM is that React uses a browser independent DOM to both improve performance and also to allow for cross-browser compatability.  This is important, in that a developer would not want his DOM to only work in one browser (such as Google Chrome), and not be usable in other major browsers, such as Mozilla Firefox or Microsoft Edge.

6. STRETCH: Which is the difference between a div and a span?

Your answer:  The major difference between div and span in HTML is what they are used for.  div is used for block-level organization of a web page, while span is used more for inline organization and styling.

Researched answer:  One key difference between div and span is that when div is used, it will take up the entire width of the web page, regardless of how much of that space is used to show information, while span will only take up the space needed to show the contents contained within the span element.  This is a key distinction and becomes important when you recognize that whichever you use will vastly impact the look of your web page and it's rendering to the user.

## Looking Ahead: Terms for Next Week

1. Object-oriented programming: Object-oriented programming is a programming method that takes software design and organizes it around data or objects, instead of being focused on function or logic.

2. Ruby: Ruby is a programming language focused on simplicity and productivity.  It is very simple to use, and is natural to understand when reading it.  Ruby is a programming language in which everything is an object, and these objects are able to be used through methods.

3. Implicit return: Implicit return is one that does not require the RETURN keyword in order to allow the function to work.  This makes coding simpler to read, in that an implicit return is used in concise bits of code.

4. Ruby blocks: Ruby blocks are reusable anonymous functions that are passed into methods.  Blocks are frequently used in either do / end statements or between curly braces {}.

5. Ruby hashes: Ruby hashes are a collection of key: value pairs.  The major difference between a ruby hash and an array is that the ruby hash is accessd using arbitrary keys, instead of integer index values.
