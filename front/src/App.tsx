import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Users from "./Pages/Users";
import Profile from "./Pages/Profile/Profile";

function App() {
    return (
        <BrowserRouter>
            <main>
                <Routes>
                    <Route path="/" element={<Users />}></Route>
                    <Route path="/user/:uuid" element={<Profile />}></Route>
                </Routes>
            </main>
        </BrowserRouter>
    );
}

export default App;
