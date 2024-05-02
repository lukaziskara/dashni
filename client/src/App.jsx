import "./app.scss";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import React from "react";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Home from "./pages/home/Home";
import Gigs from "./pages/gigs/Gigs";
import Gig from "./pages/gig/Gig";
import Video from "./pages/video/Video";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Add from "./pages/add/Add";
import AddData from "./pages/addData/AddData";
import Orders from "./pages/orders/Orders";
import Messages from "./pages/messages/Messages";
import Message from "./pages/message/Message";
import MyRoom from "./pages/myRoom/MyRoom";
import MyGigs from "./pages/myGigs/MyGigs";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import Pay from "./pages/pay/Pay";
import Success from "./pages/success/Success";
import Game from "./pages/Game";
// <<<<<<< HEAD
import Sentences from "./pages/sentences/Sentences";
import MySentences from "./pages/mySentences/MySentences";
// =======
import AddVideoData from "./pages/addVideoData/AddVideoData";
import MyVideoDatas from "./pages/myVideoDatas.copy/MyVideoDatas";
import VideoData from "./pages/videoData/VideoData";
import MyVideos from "./pages/myVideos/MyVideos";
import GameTushetians from "./pages/gameTushetians/GameTushetians";
function App() {
  const queryClient = new QueryClient();

  const Layout = () => {
    return (
      <div className="app">
        <div className="cntn">
          <QueryClientProvider client={queryClient}>
            <Navbar />
            <Outlet />
            <Footer />
          </QueryClientProvider>
        </div>
      </div>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/myVideoDatas",
          element: <MyVideoDatas />,
        },
        {
          path: "/myVideos",
          element: <MyVideos />,
        },
        {
          path: "/myroom",
          element: <MyRoom />,
        },
        {
          path: "/gigs",
          element: <Gigs />,
        },
        {
          path: "/sentences",
          element: <Sentences />,
        },
        {
          path: "/myGigs",
          element: <MyGigs />,
        },
        {
          path: "/myVideoDatas",
          element: <MyVideoDatas />,
        },
        {
          path: "/mySentences",
          element: <MySentences />,
        },
        {
          path: "/orders",
          element: <Orders />,
        },
        {
          path: "/messages",
          element: <Messages />,
        },
        {
          path: "/message/:id",
          element: <Message />,
        },
        {
          path: "/add",
          element: <Add />,
        },
        {
          path: "/gig/:id",
          element: <Gig />,
        },
        {
          path: "/videodata/:id",
          element: <VideoData />,
        },
        {
          path: "/video/:id",
          element: <Video />,
        },
        {
          path: "/register",
          element: <Register />,
        },
        {
          path: "/login",
          element: <Login />,
        },
        // {
        //   path: "/pay/:id",
        //   element: <Pay />,
        // },
        {
          path: "/success",
          element: <Success />,
        },
        {
          path: "/game",
          element: <Game />,
        },
        {
          path: "/gametushetians",
          element: <GameTushetians />,
        },
        {
          path: "/add-data",
          element: <AddData />,
        },
        {
          path: "/addvideodata",
          element: <AddVideoData />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
