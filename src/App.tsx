import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/home/home";
import Profile from "./pages/profile/profile";
import Differences from "./pages/differences/differences";
import Favorites from "./pages/favorites/favorites";
import GroupOfProducts from "./pages/groupOfProducts/groupOfProducts";
import InfoOfProfuct from "./pages/infoProduct/infoProduct";
import PageNot from "./pages/pageNot/pageNot";
import AboutUs from "./pages/aboutUs/aboutUs";
import Layout from "./components/Layout/Layout";

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
    {
        path: "/pageNot",
        element: <PageNot />,
    },
    {
        path: "/aboutUs",
        element: <AboutUs />,
    },
]);

function App() {
    return (
        <Layout>
            <RouterProvider router={router} />
        </Layout>
    );
}

export default App;
