import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { routes } from "./routes";

const container = document.getElementById("app");
const root = createRoot(container);
root.render(<RouterProvider router={routes} />);
