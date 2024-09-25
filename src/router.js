import MainPage from "./pages/MainPage";
import AboutPage from "./pages/AboutPage";
import HomePage from "./pages/HomePage";
import ErrorPage from "./pages/ErrorPage";
import ParamPage from "./pages/ParamPage";
import LinkLayout from "./layouts/LinkLayout"

const router = [
    {
        element: <LinkLayout/>,
        path: '/',
        children: [
            {
                element: <HomePage/>,
                index: true
            },
            {
                element: <MainPage/>,
                path: '/route'
            },
            {
                element: <AboutPage/>,
                path: '/about'
            }
        ]},
    {
        element: <ParamPage/>,
        path: '/dynamic/:id'
    },
    {
        element: <ErrorPage/>,
        path: '*'
    },

    
]

export default router