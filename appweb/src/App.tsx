import { BrowserRouter, Routes, Route} from "react-router-dom"
import Home from "./pages/home/HomePage"
import Bible from "./pages/bible/BiblePage";

export default function App() {
    return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/bible" element={<Bible/>} />
        </Routes>
    </BrowserRouter>
    )
}