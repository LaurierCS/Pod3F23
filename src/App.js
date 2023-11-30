import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Hub from "./pages/hub/Hub";
import Course from "./pages/course/Course";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Header from './components/Header/Header';
import Footnote from './components/Footer/Footer';
import { createBrowserRouter, RouterProvider, Route, Outlet, Navigate} from "react-router-dom";


function App() {
    const queryClient = new QueryClient();

    const Layout = () => {
        return (
            <QueryClientProvider client={queryClient}>
                <div>
                    <Outlet/>
                    <Footnote/>
                </div>
            </QueryClientProvider>
        )
    }
    const router = createBrowserRouter([
        {
            path: "/",
            element: (
                    <Layout />
            ),
            children: [

                {
                    path: "/course/:course_id",
                    element: <Course />,
                },
                {
                    path: "/hub",
                    element: <Hub />,
                },
            ]
        },
        {
            path: "/login",
            element: <Login />,
        },
        {
            path: "/register",
            element: <Register />,
        },
        

    ])

    return (

        <div>
            <RouterProvider router={router} />
        </div>
    );
}

export default App;
