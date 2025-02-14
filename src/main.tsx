import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {RouterProvider} from "react-router-dom";
import router from "./router/index"
import Header from "./pages/layout/Header.tsx";
import Body from "./pages/layout/Body.tsx";
import './css/reset.css'
import './css/Common.css'
createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <div className={'body'}>
            <Header/>
            <Body>
                <RouterProvider router={router}/>
            </Body>
        </div>
    </StrictMode>,
)

