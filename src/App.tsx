import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/home/home";
import Profile from "./pages/profile/profile";
import Differences from "./pages/differences/differences";
import Favorites from "./pages/favorites/favorites";
import GroupOfProducts from "./pages/groupOfProducts/groupOfProducts";
<<<<<<< HEAD
import InfoOfProfuct from "./pages/infoProduct/infoProduct";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/profile",
        element: <Profile />,
    },
    {
        path: "/differences",
        element: <Differences />,
    },
    {
        path: "/favorites",
        element: <Favorites />,
    },
    {
        path: "/groupOfProducts",
        element: <GroupOfProducts />,
    },
    {
        path: "/infofProduct",
        element: <InfoOfProfuct />,
    },
=======
import PageNot from "./pages/pageNot/pageNot";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
  {
    path: "/differences",
    element: <Differences />,
  },
  {
    path: "/favorites",
    element: <Favorites />,
  },
  {
    path: "/groupOfProducts",
    element: <GroupOfProducts />,
  },
  {
    path: "/pageNot",
    element: <PageNot />,
  },
>>>>>>> d097ec35ee4a301e2786d55d1308d3b071b1d529
]);

// const [show, setShow] = useState(true);

function App() {
    return (
        <>
            <RouterProvider router={router} />
        </>
    );
}

export default App;
