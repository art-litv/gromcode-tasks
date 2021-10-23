const root = document.querySelector("#root");

const greeting = React.createElement(
  "div",
  { className: "greeting" },
  "Hello, React!"
);

ReactDOM.render(greeting, root);
