// App.js
import React from "react";
import { ThemeProvider } from "./ThemeContext";
import ThemeSwitcher from "./ThemeSwitcher";
import "./App.css"; // Create a new App.css file for styling

function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <header>
          <h1>React JS</h1>
          <ThemeSwitcher />
        </header>
        <main>
          <div className="content">
            <h2>What is React.js?</h2>
            <p>
              React is a JavaScript library for building user interfaces. It
              allows developers to create reusable UI components and manage the
              state of an application efficiently.
            </p>
            <h2>Key Features of React</h2>
            <ul>
              <li>
                Declarative: Describe the desired UI and React takes care of
                updating it.
              </li>
              <li>
                Component-Based: Build UIs using components that manage their
                state.
              </li>
              <li>
                Virtual DOM: Efficiently update the DOM by using a virtual
                representation.
              </li>
              <li>
                JSX: Write UI components using a syntax that looks similar to
                XML or HTML.
              </li>
            </ul>
            <h2>React Community</h2>
            <p>
              React has a large and active community of developers who
              contribute to its growth. The community provides resources,
              libraries, and tools to help developers build robust applications.
            </p>
          </div>
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;
