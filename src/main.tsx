import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const basename = process.env.NODE_ENV === "production" ? "/pigeon-note" : "/";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <App />,
    },
  ],
  { basename },
);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
