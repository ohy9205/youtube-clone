import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import "./index.css";
import NotFound from "./pages/NotFound";
import VideoDetail from "./pages/VideoDetail";
import Videos from "./pages/Videos";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <Videos /> }, // 최상위 주소('/')에서는 Outlet에 Video컴포넌트를 보여준다
      { path: "videos", element: <Videos /> },
      {
        path: "videos/:query", // 검색
        element: <Videos />,
      },
      {
        path: "videos/watch/:id", // 비디오 상세
        element: <VideoDetail />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
