import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Users from "./Pages/Users/Users";
import Profile from "./Pages/Profile/Profile";
import Home from "./Pages/HomeScreen/Home";
import RandomUser from "./Pages/RandomUser/RandomUser";

function App() {
    return (
        <BrowserRouter>
            <main>
                <Routes>
                    <Route path="/" element={<Home />}></Route>
                    <Route path="/randomUser" element={<RandomUser />}></Route>
                    <Route path="/users" element={<Users />}></Route>
                    <Route path="/user/:uuid" element={<Profile />}></Route>
                </Routes>
            </main>
        </BrowserRouter>
    );
}

export default App;
