import {createBrowserRouter} from "react-router-dom";
import App from "../pages/App.tsx";


const router = createBrowserRouter([{
    path : '/',
    element: <App />,
    children: [
    ]
}])



export default router