import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/home/home";
import Profile from "./pages/profile/profile";
import Differences from "./pages/differences/differences";
import Favorites from "./pages/favorites/favorites";

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
