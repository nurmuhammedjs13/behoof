import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/home/home";

const router = createBrowserRouter([
    {
        path: "/",
        element: <div>Hello world!</div>,
    },
    {
        path: "/1",
        element: <div>dad world!</div>,
    },
]);

function App() {
    return (
        <>
        <Home/>
            <RouterProvider router={router} />
        </>
    );
}

export default App;
