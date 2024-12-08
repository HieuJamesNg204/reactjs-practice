import { createRoot } from "react-dom/client";
import "./index.css";

const root = createRoot(document.getElementById("root"));

root.render(
  <div>
    <img src="/src/assets/react.svg" />
    <h1>This is another element</h1>
  </div>
);