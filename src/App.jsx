import { useState, useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// pages
import ErrorPage from "./pages/ErrorPage";
import Chat from "./pages/Chat";
import Auth from "./pages/Auth";

function App() {
  const [createdBy, setCreatedBy] = useState(window.localStorage.getItem("createdBy"));
  const routes = createBrowserRouter([
    createdBy
      ? {
          path: "/",
          element: <Chat />,
          errorElement: <ErrorPage />,
          children: [],
        }
      : {
          path: "/",
          element: <Auth setCreatedBy={setCreatedBy} />,
          errorElement: <ErrorPage />,
          children: [],
        },
  ]);
  useEffect(()=>{},[console.log()])
  return <RouterProvider router={routes} />;
}

export default App;
