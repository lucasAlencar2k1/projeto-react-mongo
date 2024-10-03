import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./Pages/Home/Home";
import Success from "./Pages/Success/Success";

function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path = "/" element = {<Home/>} />
                <Route path = "/success" element = {<Success/>} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router;