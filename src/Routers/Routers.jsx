import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Components/Home";
import About from "../Components/About";
import AllTreatments from "../Components/AllTreatments";
import Profile from "../Components/Profile";
import MyAppointments from "../Components/MyAppointments";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,

    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("service.json"),
      },
      {
        path: "/allTreatments",
        element: <AllTreatments></AllTreatments>,
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
    ],
  },
]);
export default router;
// project-661130825700
