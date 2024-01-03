const heading = React.createElement(
  "h1",
  {
    id: "heading",
  },
  "Hello World from react inside it"
);

const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement(
    "div",
    { id: "child" },
   [ React.createElement("h1", {}, "I am a h1 tag"),React.createElement("h2",{},"Hi I am h2")]
  )
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
