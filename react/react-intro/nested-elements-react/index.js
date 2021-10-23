const rootElement = document.querySelector("#root");

const greetingElem = React.createElement(
  "div",
  { className: "greeting" },
  React.createElement(
    "p",
    {
      className: "greeting__title",
    },
    "Hello, World!"
  ),
  React.createElement(
    "p",
    {
      className: "greeting__text",
    },
    "I'm learning React"
  )
);

// ReactDOM.render(greetingElem, rootElement);
