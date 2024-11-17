import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Components/Home";
import About from "../Components/About";
import AllTreatments from "../Components/AllTreatments";
import Profile from "../Components/Profile";
import MyAppointments from "../Components/MyAppointments";
import Details from "../Components/Details";
import Login from "../Components/Login";
import Register from "../Components/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,

    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: async () => {
          const serviceRes = await fetch("/service.json");
          const serviceData = await serviceRes.json();

          const feedBackRes = await fetch("/happyclients.json");
          const feedBackData = await feedBackRes.json();

          return { serviceData, feedBackData };
        },
      },
      {
        path: "/allTreatments",
        element: <AllTreatments></AllTreatments>,
        loader: () => fetch("service.json"),
      },
      {
        path: "/profile",
        element: <Profile></Profile>,
      },
      {
        path: "/myAppointments",
        element: <MyAppointments></MyAppointments>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/details/:id",
        element: <Details></Details>,
        loader: async ({ params }) => {
          const res = await fetch("/service.json");
          const data = await res.json();

          const singleData = data.find((d) => d.id == params.id);

          return singleData;
        },
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "register",
        element: <Register></Register>,
      },
    ],
  },
]);
export default router;
// project-661130825700
