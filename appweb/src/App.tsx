import { BrowserRouter, Routes, Route} from "react-router-dom"
import Home from "./pages/home/HomePage"
import Bible from "./pages/bible/BiblePage";
import Settings from "./pages/settings/SettingsPage";
import Login from "./pages/login/LoginPage";

export default function App() {
    return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/bible" element={<Bible/>} />
            <Route path="/settings" element={<Settings/>} />
            <Route path="/login" element={<Login/>} />
        </Routes>
    </BrowserRouter>
    )
}